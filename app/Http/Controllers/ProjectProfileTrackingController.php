<?php

namespace App\Http\Controllers;

use App\Models\Appropriation;
use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\MeansOfVerification;
use App\Models\OOE;
use App\Models\ProjectProfileTracking;
use App\Models\RevisionPlan;
use App\Models\RevisionPlanComment;
use App\Models\RevisionPlanDocuments;
use App\Models\User;
use App\Services\ProjectDesignService;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProjectProfileTrackingController extends Controller
{
    protected $projectProfileTracking;
    protected $service;
    protected $budget;
    public function __construct(ProjectProfileTracking $projectProfileTracking, BudgetRequirement $budget, ProjectDesignService $service)
    {
        $this->projectProfileTracking = $projectProfileTracking;
        $this->budget = $budget;
        $this->service = $service;
    }

    public function status_update(Request $request, $id, $type, $new_status)
    {
        if ($new_status == "7") {
            // dd("seven jud siya:", $id, $type, "new_status: " . $new_status, 'return_request_type: ' . $request->return_request_type);
        }
        // dd($id, $type, "new_status: " . $new_status, 'return_request_type: ' . $request->return_request_type);


        // IDENTIFY RETURN REQUEST TYPE**********************************************************************
        $rrt = "";
        if ($request->return_request_type) {
            $rrt = $request->return_request_type;
        }

        // IDENTIFYING USER**********************************************************************************
        $us = auth()->user();
        // dd($us);

        // RETRIEVING PROJECT ***************************************************************************
        $revplan = RevisionPlan::with(['budget'])->where('id', $id)->first();




        // REDIRECTING IF NOT FOUND ***************************************************************************
        if (!$revplan) {
            return redirect()->back()->with('error', 'Revision Plan not found.')->withQueryString();
        }

        // ASSESSMENT FOR GAD BUDGET***************************************************************************
        if($revplan->gad_version!='2'){
            // $this->generateComment($revplan);
        }
        // dd(auth()->user(), $revplan);
        // Only apply this check if submitting (new_status = 0)


        // SUBMISSION*********************************************************************************************
        if ($new_status == 0) {
            $idpaps = $revplan->idpaps;
            // dd($idpaps);
            // if($idpaps == 0){
            //     dd("0 si idpaps");
            // }else{
            //     dd("dili 0 si idpaps: ", $idpaps);
            // }
            $year = $revplan->year_period;
            // dd($revplan);
            // Check if any other revision plans of this idpaps are already submitted, reviewed, or approved , '1', '2'
            $otherPlans = RevisionPlan::with(['budget'])
                ->when($idpaps!=0, function($query) use ($idpaps, $id, $year){
                    $query->where('idpaps', $idpaps);
                })
                ->where('id', '!=', intval($id))
                ->whereYear('date_start', $year)
                // ->where('year_period', $year)
                ->whereIn('status', ['0'])
                ->count();
            // $query = RevisionPlan::with(['budget'])
            //     ->when($idpaps != 0, function($query) use ($idpaps) {
            //         $query->where('idpaps', $idpaps);
            //     })
            //     ->where('id', '!=', intval($id))
            //     ->whereYear('date_start', $year)
            //     ->whereIn('status', ['0']);

            // dd($query->toSql(), $query->getBindings());
            // dd($otherPlans, $revplan, $id, $year);
            // dd($otherPlans = RevisionPlan::where('idpaps', $idpaps)
            //     ->where('id', '!=', $id)
            //     ->whereYear('date_start', $year)
            //     ->whereIn('status', ['0'])->get(), $revplan, $id, $year);
            if ($otherPlans > 0 && $idpaps != 0) {
                return redirect()->back()->with('error', 'Cannot submit this Revision Plan because other plans for this PAP are already submitted, reviewed, or approved.');
            }
        }

        // INDENTIFYING PROJECT/DOCUMENT  TYPE ********************************************************************
        $typpe = $revplan->type == "p" ? "Project Profie" : "Project Design";
        // dd($new_status);
        // UPDATING STATUS*****************************************************************************************
        if ($new_status == "5") {
            $revplan->return_request_status = 0;
        } else if ($new_status == "7") {
            $revplan->status="-2";
            $revplan->return_request_status = "-1";
            // $this->service->generate($id);
        } else {
            if ($request->column == 'gad_status') {
                $revplan->gad_status = $new_status;
            } else {
                $revplan->status = $new_status;
            }
        }
        // SAVING CHANGES********************************************************************************************
        $revplan->save();


        RevisionPlanDocuments::where('revision_plan_id', $id)
            ->update(['return_executed' => 1]);


        // GENERATING PROFILE TRACIKING *****************************************************************************
        $this->projectProfileTracking->create([
            'action_by' => $us->recid,
            'action_type' => $type,
            'revision_plan_id' => $revplan->id,
            'remarks' => $request->remarks,
            'return_request_type' => $rrt
        ]);
        // MESSAGE ARRAY ********************************************************************************************
        $actionWords = [
            0  => "Submitted",
            1  => "Reviewed",
            2  => "Approved",
            -2 => "Returned",
            5 => "Request for return sent"
        ];

        // ACTION TEXT ***********************************************************************************************
        $actionText = $actionWords[$new_status] ?? "Updated";
        // if($new_status == 0 || $new_status == -1){
        //     return redirect()->back()->with('message', "Revision Plan status {$actionText} successfully.");
        // }else{
        //     // dd('here');
        //     return redirect('/revision_plans?source=rev_app')
        //         ->with('message','Project Profile '.$actionText.' successfully.');
        // }
        // Submit (0) OR Recall (-1) → go back to same page

        // NEW STATUS ************************************************************************************************
        if ($new_status == 0 || $new_status == -1 || $new_status == "5" || $new_status == -2) {
            // return redirect()->back();
            return redirect()->to(url()->previous());
            // ->withQueryString()
                // ->with('message', $type . " {$actionText} successfully.");
        }
        if($new_status==1){
            return redirect()->to(url()->previous());
        }

        // ************************************************************************************************************
        // Review (1), Approve (2), Return (-2) → go to revision list
        return redirect('/revision_plans?source=rev_app')
            ->with('message', $typpe . " {$actionText} successfully.");
    }

    public function index_ipp()
    {
        return inertia('ProjectProfiles/Index');
    }

    public function review_approve_index(Request $request)
    {
        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        $source = $request->source;
        // dd($dept_id);
        if (auth()->user()->popsp_agency) {
            return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
        }
        if ($source != 'budget') {
            if ($dept_id != '04' && $dept_id != '01') {
                return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
            }
        }

        $per_page = 10;
        if ($request->per_page) {
            $per_page = $request->per_page;
        }
        $ooes = OOE::all();
        $ooe_description = $ooes->pluck('FOOEDESC')->toArray();
        $ooe_id = $ooes->pluck('recid')->toArray();
        $ooe_codes = $ooes->pluck('FACTCODE')->toArray();
        $funcc = FFUNCCOD::with('office.pgHead')->where('department_code', $dept_id)->first();
        $FFUNCCOD = optional($funcc)->FFUNCCOD;
        $pg_details = optional(optional($funcc)->office)->pgHead;
        $suffix =  optional($pg_details)->suffix_name;
        $postfix_name =  optional($pg_details)->postfix_name;
        $mname = optional($pg_details)->middle_name ? substr(optional($pg_details)->middle_name, 0, 1) . '. ' : null;
        $pgHead = optional($pg_details)->first_name . ' ' . $mname . optional($pg_details)->last_name;
        if ($suffix) {
            $pgHead = $pgHead . ", " . $suffix;
        }
        if ($postfix_name) {
            $pgHead = $pgHead . ", " . $postfix_name;
        }
        // dd($pgHead);
        $offices = FFUNCCOD::where(function ($query) {
            $query->where('FFUNCTION', 'LIKE', '%Office%')
                ->orWhere('FFUNCTION', 'LIKE', '%Hospital%');
        })
            ->orderBy('FFUNCTION', 'ASC')
            ->get();


        $budget_controller = new BudgetRequirementController($this->budget);
        $data = RevisionPlan::with(['budget', 'paps', 'paps.office'])
            ->whereHas('budget', function ($query) {
                $query->select(DB::raw('revision_plan_id'))
                    ->groupBy('revision_plan_id')
                    ->havingRaw('SUM(amount) > 0');
            })
            ->when($request->FFUNCCOD, function ($query) use ($request) {
                $query->whereHas('paps', function ($query_inner) use ($request) {
                    $query_inner->where('FFUNCCOD', $request->FFUNCCOD);
                });
            })
            ->where('project_title', 'LIKE', '%' . $request->search . '%')
            ->whereHas('paps', function ($query) use ($request, $source, $dept_id) {
                $query->when($source == 'budget', function ($query) use ($dept_id) {
                    $query->where('department_code', $dept_id);
                });
            })
            ->where('status', '>', '-1')
            ->paginate(10)
            ->withQueryString();
        $data->through(function ($item) use ($budget_controller) {
            $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)
                ->where('table_name', 'revision_plans')
                ->count();

            $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                ->sum('amount');

            $imp_amount = 0.00;
            if ($item->is_strategy_based == 1) {
                $total = $budget_controller->getStratTotal($item->id);
            } else {
                $total = $budget_controller->getActivityTotal($item->id);
            }

            if ($total) {
                $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                    $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                    $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                    $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
            }
            return [
                'FFUNCTION' => optional(optional($item->paps)->office)->FFUNCTION,
                'id' => $item->id,
                'project_title' => $item->project_title,
                'type' => $item->type,
                'version' => $item->version,
                'budget_sum' => $budgetary_requirement,
                'imp_amount' => $imp_amount,
                'idpaps' => $item->idpaps,
            ];
        });
        // dd($data);
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        $functions = $this->getFunctions($myid);
        $programs = $this->getPrograms($year_c);
        // $latestRevisionPlanIds = DB::table('revision_plans as rp1')
        //     ->select('rp1.id')
        //     ->whereRaw('NOT EXISTS (
        //         SELECT 1 FROM revision_plans rp2
        //         WHERE rp2.idpaps = rp1.idpaps AND rp2.version > rp1.version
        //     )')
        //     ->join('program_and_projects', 'program_and_projects.id', 'rp1.idpaps')
        //     ->where('program_and_projects.department_code', auth()->user()->department_code)
        //     ->pluck('id')
        //     ->toArray();
        // dd($latestRevisionPlanIds);
        $total_budget = BudgetRequirement::select('amount')
            // ->whereIn('revision_plan_id', $latestRevisionPlanIds)
            ->sum('amount');
        $totals = Appropriation::selectRaw("FORMAT(IFNULL(SUM(appropriations.past_year), 0), 2, 'en_US') AS past_year")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.first_sem), 0), 2, 'en_US') AS first_sem")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.second_sem), 0), 2, 'en_US') AS second_sem")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.first_sem + appropriations.second_sem), 0), 2, 'en_US') AS total")
            ->selectRaw("FORMAT(IFNULL(" . $total_budget . ", 0), 2, 'en_US') AS budget_year")
            // ->selectRaw($total_budget . ' AS budget_year')
            ->join('program_and_projects', 'program_and_projects.id', 'appropriations.idpaps')
            ->where('program_and_projects.department_code', auth()->user()->department_code)
            ->first();


        $acc = DB::connection('mysql2')->table('chartofaccounts')->get();
        // dd($totals);
        // dd($acc);
        $dept_code = auth()->user()->department_code;
        $functions2 = FFUNCCOD::where('department_code', $dept_code)->first();
        return inertia('RevisionPlans/Direct', [
            'data' => $data,
            'FFUNCCOD' => $FFUNCCOD,
            'FFUNCCOD2' => $functions2,
            'offices' => $offices,
            // "idpaps" => $idpaps,
            // "paps" => $paps,
            "ooes" => $ooes,
            "ooe_description" => $ooe_description,
            "ooe_codes" => $ooe_codes,
            "ooe_id" => $ooe_id,
            "my_source" => $source,
            "dept_id" => $dept_id,
            "filters" => $request->only(['search']),
            "functions" => $functions,
            "programs" => $programs,
            "totals" => $totals,
            'pgHead' => $pgHead,
            "acc" => $acc,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    protected function getFunctions($idn)
    {
        $functions = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
            ->where('systemusers.recid', $idn)
            ->get();
        return $functions;
    }
    public function getPrograms($year_c)
    {
        //PROGRAMS
        // ->join('raaohs', 'raaohs.idprogram','programs.recid')
        // ->groupBy('programs.recid')
        $programs = DB::connection('mysql2')->table('programs')
            ->select(
                'raaohs.recid AS raohsid',
                'programs.FPROGRAM',
                'programs.factcode',
                'programs.ftype',
                'raaohs.tyear',
                'programs.recid',
                DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
            )
            ->join('raaohs', 'raaohs.idprogram', 'programs.recid')
            ->where('raaohs.tyear', $year_c)
            ->OrderBy('programs.FPROGRAM')
            ->groupBy('raaohs.idprogram')
            ->get();
        return $programs;
    }

    public function tracking(Request $request){
        // dd($request);
        $uid = auth()->user()->recid;
        // dd($uid);
        $data = ProjectProfileTracking::with(['revisionPlan' => function ($query) {
        $query->withTrashed();
            //   ->with(['projectProfileTrackings' => function ($q) {
            //       $q->withTrashed();
            }])
            // }
            // , 'revisionPlan.projectProfileTrackings'
            // ])

                ->where('action_by', $uid)
                ->orderBy('created_at','desc')
                ->get()
                ->map(function($item){
                    return [
                        "action_type"=>$item->action_type,
                        "revision_plan_id"=>$item->revision_plan_id,
                        "revision_plan"=>$item->revisionPlan,
                        "created_at"=>$item->created_at,
                        "accordion_visible"=>false
                        // "profile_trac"
                    ];
                });
        // dd($data);
        return inertia("RevisionPlans/Tracking/Index", [
            "data"=>$data
        ]);
    }

    public function generateComment($revplan){
        // CALCULATING BUDGET REQUIREMENTS GAD**************************************************************************
        $budget_total_gad = $revplan->budget
                ->where('category_gad', 'GAD')
                ->sum('amount');

        //CALCULATING GAD ATTRIBUTED************************************************************************************
        $budget_total = $revplan->budget->sum('amount');
        $hgdg_score = $revplan->hgdg_score;
        $gad_attributed = floatval($budget_total)*(floatval($hgdg_score)/20);
        $diff = floatval($budget_total_gad)-floatval($gad_attributed);

        // IF DIFFERENCE IS NOT ZERO **********************************************************************************
        if($diff!=0){
            // dd($diff,
            // $budget_total_gad,
            // $gad_attributed,
            // $revplan->budget,
            // $revplan,
            //         $budget_total
            // );
            $comment = "";
            if($diff>0){
                $comment = "Subtract ".$diff." from your budgetary requirements.";
            }else{
                $comment = "Add ".$diff." to your budgetary requirements.";
            }
            $comment = 'Total of GAD in budgetary requirements ('
                . number_format($budget_total_gad, 2) .
                ') does not coincide with the computed GAD Attributed amount ('
                . number_format($gad_attributed, 2) . ')';
            $rev_comm = new RevisionPlanComment();
            $rev_comm->table_row_id=$revplan->id;
            $rev_comm->table_name = 'revision_plans';
            $rev_comm->column_name= 'attributed_amount';
            $rev_comm->comment = $comment;
            $rev_comm->show_comment_box=0;
            $rev_comm->comment_status=0;
            $rev_comm->user_id=545;
            $rev_comm->save();
        }
        // dd($budget_total_gad, $budget_total);
        return "ok";
    }
}
