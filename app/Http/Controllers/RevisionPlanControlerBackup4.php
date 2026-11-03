<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\ActivityProject;
use App\Models\AnnualInvestmentPlanInstitutional;
use App\Models\Appropriation;
use App\Models\BudgetPrep;
use App\Models\BudgetRequirement;
use App\Models\CurrentAipYear;
use App\Models\FFUNCCOD;
use App\Models\HGDG_Checklist;
use App\Models\ImplementationPlan;
use App\Models\Implementing_team;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring_and_evaluation;
use App\Models\OOE;
use App\Models\PopspAgency;
use App\Models\ProgramAndProject;
use App\Models\Program;
use App\Models\RevisionPlan;
use App\Models\RevisionPlanComment;
use App\Models\Risk_manangement;
use App\Models\SharedProgramAndProject;
use App\Models\Signatory;
use App\Models\Strategy;
use App\Models\Activity;
use App\Models\AllowIppSubmissions;
use App\Models\ExpectedRevisedOutput;
use App\Models\Office;
use App\Models\StrategyProject;
use App\Models\Target;
use App\Models\TeamPlan;
use App\Models\User;
use App\Services\RevisionPlanSummaryService;
use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Carbon\Carbon;
use Illuminate\Foundation\Http\Middleware\TrimStrings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
// RevisionPlanController
class RevisionPlanControlerBackup4 extends Controller
{
    protected $model;
    protected $imp;
    protected $budget;
    // protected $revisionPlanSummaryService;

    public function __construct(RevisionPlan $model, ImplementationPlan $imp, BudgetRequirement $budget)
    {
        $this->model = $model;
        $this->imp = $imp;
        $this->budget = $budget;
    }

    /**
     * Check if user can perform an action
     * @param string $ability
     * @param mixed $arguments
     * @return bool
     */
    private function userCan($ability, $arguments = null)
    {
        /** @var User|null $user */
        $user = Auth::user();
        if ($user) {
            return $user->can($ability, $arguments);
        }
        return false;
    }

    public function index(Request $request, $idpaps)
    {
        // dd($idpaps);
        // if(auth()->user()->popsp_agency){
        //     return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
        // }
        // dd($request->source);
        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        $FFUNCCOD = FFUNCCOD::where('department_code', $dept_id)->first()->FFUNCCOD;
        $year_filtering = null;
        if ($request->year) {
            $year_filtering = $request->year;
        }
        if ($request->year_period) {
            $year_period = $request->year_period;
        } else {
            $year_period = CurrentAipYear::first()->year_period;
        }
        $AIPInstitutional = AnnualInvestmentPlanInstitutional::where('year_period', $year_period)->first();
        if ($request->source == 'sip') {
            // dd($request->source, $AIPInstitutional->sp_approved, $AIPInstitutional->sip_period);
            if ($AIPInstitutional) {
                if ($AIPInstitutional->sp_approved != '1') {
                    return redirect()->back();
                    // ->with('error', 'The AIP is not yet finalized');
                }
                if (intval($AIPInstitutional->sip_period) < 1) {
                    return redirect()->back();
                    // ->with('error', 'SIP preparation has not commenced yet.');
                }
            } else {
                return redirect()->back();
                // ->with('error', 'The AIP is not yet finalized');
            }
        }
        // dd($FFUNCCOD);
        $paps = ProgramAndProject::where('id', $idpaps)->first();
        $paps_type = "";
        if ($paps) {
            $paps_type = $paps->type;
        }
        $budget_controller = new BudgetRequirementController($this->budget);
        // dd("revision");
        // dd($idpaps);
        $allowed = AllowIppSubmissions::all();
        if ($paps_type === "GAS") {

            return redirect('/revision/general/administration/services/' . $FFUNCCOD . '/plan');
        } else if ($idpaps == "0") {
            // dd($idpaps,'idpaps is 0');
            $sharedPaps = SharedProgramAndProject::where('destination_department_code', $dept_id)->get()->pluck('idpaps');

            $popsp_agency = PopspAgency::where('agency_code', auth()->user()->popsp_agency)->first();
            $department_code_actual = null;
            if ($popsp_agency) {
                $department_code_actual = $popsp_agency->department_code_actual;
            }
            // dd($popsp_agency);
            $data = [];
            if ($popsp_agency) {

                $data = $this->getPopsPProfilesDirect($request, $budget_controller, $dept_id, $popsp_agency, $year_filtering);
                // $data = $this->getDirect($request, $dept_id, $popsp_agency, $budget_controller, $year_filtering);
            } else {
                if ($request->source == 'sip') {
                    $data = $this->getSip($request, $dept_id, $popsp_agency, $budget_controller, $year_filtering);
                } else {
                    // dd($year_filtering);
                    $gas = $this->forGas($request, $FFUNCCOD, 2026, $budget_controller, $year_filtering);
                    // dd($gas);
                    // $gas2 = $this->forGas($request, $FFUNCCOD, 2027, $budget_controller, $year_filtering);
                    // dd($gas2);
                    $data = $this->getDirect($request, $dept_id, $popsp_agency, $budget_controller, $year_filtering);
                    // dd($gas, $gas2, $data);
                    if (count($gas) > 0) {
                        $data = $data->concat($gas);
                    }
                    // dd($gas);
                    // if(count($gas2)>0){
                    //     $data = $data->concat($gas2);
                    // }
                }
            }
            // dd($data);
            // dd($allowed);
            return inertia('RevisionPlans/Index', [
                // "filters" => $request->only(['search']),
                'data' => $data->sortBy('project_title')->values(),
                "idpaps" => $idpaps,
                "paps" => $paps,
                "filters" => $request->only(['search', 'type_filter', 'year_filtering']),
                "source" => $request->source,
                "year_filtering" => $year_filtering,
                "allowed" => $allowed,
                "AIPInstitutional"=>$AIPInstitutional,
                'can' => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            // dd(RevisionPlan::where('idpaps', $idpaps)->get());
            $data = RevisionPlan::with(['paps', 'paps.office', 'projectProfileTrackings'])
                ->where('idpaps', '=', $idpaps)
                ->when($request->search, function ($query) use ($request) {
                    $query->where('project_title', 'like', '%' . $request->search . '%');
                })
                ->when($request->year_filtering, function ($query) use ($request) {
                    $query->where('date_from', $request->year_filtering);
                })
                ->when($request->type_filter, function ($query) use ($request) {
                    $query->where('type', $request->type_filter);
                })

                ->get()
                ->map(function ($item) use ($budget_controller) {
                    $year = Carbon::parse($item->date_start)->year;
                    // COUNT THE COMMENTS
                    $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                    // dd($revision_comment);

                    // BUDGERTARY REQUIREMENTs
                    $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                        ->sum('amount');

                    $imp_amount = 0.00;
                    // DB::table('targets')
                    //     ->where('implementation_plans.idrev_plan', $item->id)
                    //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                    //     ->select('targets.*', 'implementation_plans.*')
                    //     ->sum('targets.planned_budget');
                    $total = [];
                    // dd($item);
                    if ($item->is_strategy_based == 1) {
                        $total = $budget_controller->getStratTotal($item->id);
                    } else {
                        $total = $budget_controller->getActivityTotal($item->id);
                    }
                    // dd($item->is_strategy_based);
                    if ($total) {
                        $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                            $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                            $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                            $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                    }
                    // $year = ""
                    // dd($total);
                    // dd($imp_amount);
                    // dd($item);
                    return [
                        // 'FFUNCTION' => $item->FFUNCTION,
                        'year' => $year,
                        'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                        'idpaps' => $item->idpaps,
                        'id' => $item->id,
                        'project_title' => $item->project_title,
                        'type' => $item->type,
                        'version' => $item->version,
                        'budget_sum' => $budgetary_requirement,
                        'imp_amount' => $imp_amount,
                        'status' => $item->status
                    ];
                });


            // dd($data);
            return inertia('RevisionPlans/Index', [
                'data' => $data,
                "idpaps" => $idpaps,
                "paps" => $paps,
                "filters" => $request->only(['search', 'type_filter', 'year_filtering']),
                "source" => $request->source,
                "year_filtering" => $year_filtering,
                'can' => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
    }
    public function forGas(Request $request, $FFUNCCOD, $currentYear, $budget_controller, $year_filtering)
    {
        // dd($FFUNCCOD);
        // dd(RevisionPlan::where('revision_plans.FFUNCCOD', $FFUNCCOD)->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'revision_plans.FFUNCCOD')->where('revision_plans.scope', 'GAS')->get());
        $data = RevisionPlan::select(
            'revision_plans.id',
            'revision_plans.project_title',
            'revision_plans.version',
            'revision_plans.type',
            'revision_plans.year_period',
            'ff.FFUNCTION',
            'revision_plans.gad_status',
            'revision_plans.status',
            'status',
        )
            ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'revision_plans.FFUNCCOD')
            ->where('revision_plans.FFUNCCOD', $FFUNCCOD)
            // ->where('revision_plans.year_period', $currentYear)
            // ->where('revision_plans.idpaps', '0')
            // ->where('revision_plans.idmfo', '0')
            // ->where('revision_plans.idmfo', '0')
            ->where('revision_plans.scope', 'GAS')
            ->when($year_filtering, function ($query) use ($year_filtering) {
                $query->where('revision_plans.date_start', $year_filtering);
            })
            ->get()
            ->map(function ($item) use ($currentYear, $budget_controller) {
                // $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                //     ->sum('amount');
                $budgetary_requirement = 0;
                $budget_ps_total   = 0;
                $budget_mooe_total = 0;
                $budget_co_total   = 0;
                $budget_fe_total   = 0;
                try {

                    // Ensure budget exists and is iterable
                    $budgets = collect($item->budget ?? []);

                    $budget_ps_total = $budgets
                        ->filter(fn($b) => is_object($b) || is_array($b))
                        ->where('category', 'Personnel Services')
                        ->sum(function ($b) {
                            return (float) data_get($b, 'amount', 0);
                        });

                    $budget_mooe_total = $budgets
                        ->filter(fn($b) => is_object($b) || is_array($b))
                        ->where('category', 'Maintenance, Operating, and Other Expenses')
                        ->sum(function ($b) {
                            return (float) data_get($b, 'amount', 0);
                        });

                    $budget_co_total = $budgets
                        ->filter(fn($b) => is_object($b) || is_array($b))
                        ->where('category', 'Capital Outlay')
                        ->sum(function ($b) {
                            return (float) data_get($b, 'amount', 0);
                        });

                    $budget_fe_total = $budgets
                        ->filter(fn($b) => is_object($b) || is_array($b))
                        ->where('category', 'Financial Expenses')
                        ->sum(function ($b) {
                            return (float) data_get($b, 'amount', 0);
                        });
                    $budgetary_requirement = $budget_ps_total + $budget_mooe_total + $budget_co_total + $budget_fe_total;
                } catch (\Throwable $e) {

                    // Fallback to 0 if something unexpected happens
                    $budget_ps_total   = 0;
                    $budget_mooe_total = 0;
                    $budget_co_total   = 0;
                    $budget_fe_total   = 0;
                }
                $imp_amount = 0.00;
                // DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                $total = [];
                $imp_ps_total = 0.00;
                $imp_mooe_total = 0.00;
                $imp_co_total = 0.00;
                $imp_fe_total = 0.00;
                // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                //                 ->join('targets', 'targets.id','implementation_plans.id')
                //                 ->sum('targets.planned_budget');
                // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                //                 ->join('targets', 'targets.id','implementation_plans.id')
                //                 ->get();
                // $imp_amount = DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                if ($item->is_strategy_based == 1) {
                    $total = $budget_controller->getStratTotal($item->id);
                } else {
                    $total = $budget_controller->getActivityTotal($item->id);
                }
                // dd($item->is_strategy_based);
                if ($total) {
                    $imp_ps_total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4');
                    $imp_mooe_total = $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4');
                    $imp_co_total = $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
                    $imp_fe_total = $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                    $imp_amount = $imp_ps_total + $imp_mooe_total + $imp_co_total + $imp_fe_total;
                    // $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                    //     $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                    //     $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                    //     $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                }

                // dd($item);
                // if($item->id==528){
                //     dd($item);
                // }else{
                //     dd("incorrect");
                // }
                return [
                    'FFUNCTION' => $item->FFUNCTION,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'budget_ps_total' => $budget_ps_total,
                    'budget_mooe_total' => $budget_mooe_total,
                    'budget_co_total' => $budget_co_total,
                    'budget_fe_total' => $budget_fe_total,
                    'imp_amount' => $imp_amount,
                    'imp_ps_total' => $imp_ps_total,
                    'imp_mooe_total' => $imp_mooe_total,
                    'imp_co_total' => $imp_co_total,
                    'imp_fe_total' => $imp_fe_total,
                    'scope' => $item->scope,
                    'year_period' => $item->year_period,
                    'status' => $item->status,
                    'number_of_clones' => 0,
                    'return_request_status' => $item->return_request_status,
                    // 'year'=>$currentYear
                    'year' => $item->year_period,
                    'gad_status' => $item->gad_status
                ];
            });
        // dd("gas", $data);
        return $data;
    }
    public function getSip(Request $request, $dept_id, $popsp_agency, $budget_controller, $year_filtering)
    {
        return RevisionPlan::with(['paps', 'paps.office', 'clonedVersions'])
            ->whereHas('paps', function ($query) use ($dept_id, $popsp_agency) {
                $query->where('department_code', $dept_id);
                // ->orWhere('department_code', optional($popsp_agency)->department_code_actual);
            })
            ->when(auth()->user()->popsp_agency, function ($query) use ($dept_id, $popsp_agency) {
                // dd("may agency", $popsp_agency);
                $query->where('agency_name', $popsp_agency->agency_code);
            })
            ->when($request->has_comments == 1, function ($query) {
                $query->whereExists(function ($sub) {
                    $sub->select(DB::raw(1))
                        ->from('revision_plan_comments as rpc')
                        ->where(function ($inner) {
                            $inner->where('rpc.table_name', 'revision_plans')
                                ->whereColumn('rpc.table_row_id', 'revision_plans.id');
                        })
                        // activity_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc2', 'rpc2.table_row_id', '=', 'ap.id')
                                ->where('rpc2.table_name', 'activity_projects');
                        })
                        // strategy_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('strategy_projects as sp')
                                ->whereColumn('sp.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'sp.id')
                                ->where('rpc3.table_name', 'strategy_projects');
                        })
                        // 4️⃣ expected_revised_outputs comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outputs as ero2', 'ero2.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'ero2.id')
                                ->where('rpc4.table_name', 'expected_revised_outputs');
                        })

                        // 3️⃣ expected_revised_outcomes comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outcomes as ero', 'ero.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'ero.id')
                                ->where('rpc3.table_name', 'expected_revised_outcomes');
                        })
                        // budget_requirements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('budget_requirements as br')
                                ->whereColumn('br.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'br.id')
                                ->where('rpc4.table_name', 'budget_requirements');
                        })
                        // team plans
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('team_plans as tp')
                                ->whereColumn('tp.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'tp.id')
                                ->where('rpc4.table_name', 'team_plans');
                        })

                        // monitoring and evaluation
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('monitoring_and_evaluations as me')
                                ->whereColumn('me.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'me.id')
                                ->where('rpc4.table_name', 'monitoring_and_evaluations');
                        })

                        // risk managements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('risk_manangements as rm')
                                ->whereColumn('rm.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'rm.id')
                                ->where('rpc4.table_name', 'risk_manangements');
                        });
                });
            })
            ->where(function ($q) {
                $q->where(function ($q2) {
                    $q2->where('type', 'd')
                        ->where('status', 1);
                })
                    ->orWhere('type', 'sip');
            })
            ->when($year_filtering, function ($query) use ($year_filtering) {
                $query->where('revision_plans.date_start', $year_filtering);
            })
            ->get()
            ->map(function ($item) use ($budget_controller) {
                // COUNT THE COMMENTS
                // dd($item);
                $year = Carbon::parse($item->date_start)->year;
                $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                // dd($revision_comment);

                // BUDGERTARY REQUIREMENTs
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');

                $imp_amount = 0.00;
                // DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                $total = [];
                // dd($item);
                if ($item->is_strategy_based == 1) {
                    $total = $budget_controller->getStratTotal($item->id);
                } else {
                    $total = $budget_controller->getActivityTotal($item->id);
                }
                // dd($item->is_strategy_based);
                if ($total) {
                    $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                        $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                        $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                        $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                }
                return [
                    // 'FFUNCTION' => $item->FFUNCTION,
                    'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                    'idpaps' => $item->idpaps,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'status' => $item->status,
                    'number_of_clones' => $item->clonedVersions->count(),
                    'year' => $year,
                    'gad_status' => $item->gad_status
                    // 'paps'=>$item->paps
                ];
            });
    }
    public function getDirect(Request $request, $dept_id, $popsp_agency, $budget_controller, $year_filtering)
    {
        // dd($dept_id);
        $data = RevisionPlan::with(['paps', 'paps.sharedProgramAndProjects', 'paps.office', 'clonedVersions', 'projectProfileTrackings'])
            ->whereHas('paps', function ($query) use ($dept_id, $popsp_agency) {
                $query->where('department_code', $dept_id)
                    ->orWhereHas('sharedProgramAndProjects', function ($q) use ($dept_id, $popsp_agency) {
                        $q->where('destination_department_code', $dept_id);
                        // ->orWhere('destination_department_code', optional($popsp_agency)->department_code_actual);
                    });
                // ->orWhere('department_code', optional($popsp_agency)->department_code_actual);
            })
            ->when(auth()->user()->popsp_agency, function ($query) use ($dept_id, $popsp_agency) {
                // dd("may agency", $popsp_agency);
                $query->where('agency_name', $popsp_agency->agency_code);
            })
            ->when($request->has_comments == 1, function ($query) {
                $query->whereExists(function ($sub) {
                    $sub->select(DB::raw(1))
                        ->from('revision_plan_comments as rpc')
                        ->where(function ($inner) {
                            $inner->where('rpc.table_name', 'revision_plans')
                                ->whereColumn('rpc.table_row_id', 'revision_plans.id');
                        })
                        // activity_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc2', 'rpc2.table_row_id', '=', 'ap.id')
                                ->where('rpc2.table_name', 'activity_projects');
                        })
                        // strategy_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('strategy_projects as sp')
                                ->whereColumn('sp.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'sp.id')
                                ->where('rpc3.table_name', 'strategy_projects');
                        })
                        // 4️⃣ expected_revised_outputs comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outputs as ero2', 'ero2.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'ero2.id')
                                ->where('rpc4.table_name', 'expected_revised_outputs');
                        })

                        // 3️⃣ expected_revised_outcomes comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outcomes as ero', 'ero.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'ero.id')
                                ->where('rpc3.table_name', 'expected_revised_outcomes');
                        })
                        // budget_requirements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('budget_requirements as br')
                                ->whereColumn('br.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'br.id')
                                ->where('rpc4.table_name', 'budget_requirements');
                        })
                        // team plans
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('team_plans as tp')
                                ->whereColumn('tp.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'tp.id')
                                ->where('rpc4.table_name', 'team_plans');
                        })

                        // monitoring and evaluation
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('monitoring_and_evaluations as me')
                                ->whereColumn('me.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'me.id')
                                ->where('rpc4.table_name', 'monitoring_and_evaluations');
                        })

                        // risk managements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('risk_manangements as rm')
                                ->whereColumn('rm.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'rm.id')
                                ->where('rpc4.table_name', 'risk_manangements');
                        });
                });
            })
            ->when($request->search, function ($query) use ($request) {
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            ->where('type', '<>', 'sip')
            ->when($request->type_filter, function ($query) use ($request) {
                $query->where('type', $request->type_filter);
            })
            ->when($year_filtering, function ($query) use ($year_filtering) {
                $query->whereYear('revision_plans.date_start', $year_filtering);
            })
            ->get()
            ->map(function ($item) use ($budget_controller) {
                $year = Carbon::parse($item->date_start)->year;
                // COUNT THE COMMENTS
                if (!empty($item) && !empty($item->projectProfileTrackings)) {

                    $latestSubmit = $item->projectProfileTrackings
                        ->filter(function ($tracking) {
                            return isset($tracking->action_type) &&
                                strpos($tracking->action_type, 'Submit') !== false;
                        })
                        ->sortByDesc('created_at')
                        ->first();
                    $latestSubmit = $latestSubmit;
                } else {
                    $latestSubmit = null;
                }

                // dd($latestSubmit);

                // dd($latestSubmit);
                $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                // dd($revision_comment);

                // BUDGERTARY REQUIREMENTs
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');

                $imp_amount = 0.00;
                // DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                $total = [];
                // dd($item);
                if ($item->is_strategy_based == 1) {
                    $total = $budget_controller->getStratTotal($item->id);
                } else {
                    $total = $budget_controller->getActivityTotal($item->id);
                }
                // dd($item->is_strategy_based);
                if ($total) {
                    $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                        $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                        $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                        $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                }
                // dd($total);
                // dd($item);
                // dd($item->project_title);
                // if ($item->id == 201) {
                //     dd($item);
                // }
                // if($item->id==91){
                //     dd($item);
                // }
                return [
                    // 'FFUNCTION' => $item->FFUNCTION,
                    'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                    'idpaps' => $item->idpaps,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'status' => $item->status,
                    'number_of_clones_design' => $item->clonedVersions->where('type', 'd')->count(),
                    'number_of_clones' => $item->clonedVersions->count(),
                    'return_request_status' => $item->return_request_status,
                    'year' => $year,
                    'gad_status' => $item->gad_status,
                    'created_at' => $latestSubmit
                    // 'paps'=>$item->paps
                ];
            });
        // dd($data);
        return $data;
    }

    public function getShared(Request $request, $dept_id, $popsp_agency, $budget_controller, $year_filtering)
    {
        return RevisionPlan::with(['paps', 'paps.sharedProgramAndProjects', 'paps.office', 'clonedVersions'])
            ->whereHas('paps', function ($query) use ($dept_id, $popsp_agency) {
                $query->where('department_code', $dept_id)
                    ->orWhereHas('sharedProgramAndProjects', function ($q) use ($dept_id, $popsp_agency) {
                        $q->where('destination_department_code', $dept_id);
                        // ->orWhere('destination_department_code', optional($popsp_agency)->department_code_actual);
                    });
                // ->orWhere('department_code', optional($popsp_agency)->department_code_actual);
            })
            ->when(auth()->user()->popsp_agency, function ($query) use ($dept_id, $popsp_agency) {
                // dd("may agency", $popsp_agency);
                $query->where('agency_name', $popsp_agency->agency_code);
            })
            ->when($request->has_comments == 1, function ($query) {
                $query->whereExists(function ($sub) {
                    $sub->select(DB::raw(1))
                        ->from('revision_plan_comments as rpc')
                        ->where(function ($inner) {
                            $inner->where('rpc.table_name', 'revision_plans')
                                ->whereColumn('rpc.table_row_id', 'revision_plans.id');
                        })
                        // activity_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc2', 'rpc2.table_row_id', '=', 'ap.id')
                                ->where('rpc2.table_name', 'activity_projects');
                        })
                        // strategy_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('strategy_projects as sp')
                                ->whereColumn('sp.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'sp.id')
                                ->where('rpc3.table_name', 'strategy_projects');
                        })
                        // 4️⃣ expected_revised_outputs comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outputs as ero2', 'ero2.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'ero2.id')
                                ->where('rpc4.table_name', 'expected_revised_outputs');
                        })

                        // 3️⃣ expected_revised_outcomes comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outcomes as ero', 'ero.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'ero.id')
                                ->where('rpc3.table_name', 'expected_revised_outcomes');
                        })
                        // budget_requirements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('budget_requirements as br')
                                ->whereColumn('br.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'br.id')
                                ->where('rpc4.table_name', 'budget_requirements');
                        })
                        // team plans
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('team_plans as tp')
                                ->whereColumn('tp.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'tp.id')
                                ->where('rpc4.table_name', 'team_plans');
                        })

                        // monitoring and evaluation
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('monitoring_and_evaluations as me')
                                ->whereColumn('me.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'me.id')
                                ->where('rpc4.table_name', 'monitoring_and_evaluations');
                        })

                        // risk managements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('risk_manangements as rm')
                                ->whereColumn('rm.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'rm.id')
                                ->where('rpc4.table_name', 'risk_manangements');
                        });
                });
            })
            ->when($request->search, function ($query) use ($request) {
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            ->where('type', '<>', 'sip')
            ->when($request->type_filter, function ($query) use ($request) {
                $query->where('type', $request->type_filter);
            })
            ->when($year_filtering, function ($query) use ($year_filtering) {
                $query->where('revision_plans.date_from', $year_filtering);
            })
            ->get()
            ->map(function ($item) use ($budget_controller) {
                $year = Carbon::parse($item->date_start)->year;
                // COUNT THE COMMENTS
                // dd($item);
                $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                // dd($revision_comment);

                // BUDGERTARY REQUIREMENTs
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');

                $imp_amount = 0.00;
                // DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                $total = [];
                // dd($item);
                if ($item->is_strategy_based == 1) {
                    $total = $budget_controller->getStratTotal($item->id);
                } else {
                    $total = $budget_controller->getActivityTotal($item->id);
                }
                // dd($item->is_strategy_based);
                if ($total) {
                    $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                        $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                        $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                        $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                }
                // dd($total);
                // dd($item);
                // dd($item->project_title);
                // if ($item->id == 201) {
                //     dd($item);
                // }
                return [
                    // 'FFUNCTION' => $item->FFUNCTION,
                    'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                    'idpaps' => $item->idpaps,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'status' => $item->status,
                    'number_of_clones' => $item->clonedVersions->count(),
                    'return_request_status' => $item->return_request_status,
                    'year' => $year
                    // 'paps'=>$item->paps
                ];
            });
    }
    public function exportAIP()
    {
        // Create a temporary file path
        $filePath = storage_path('app/public/users.xlsx');

        // Create writer
        $writer = WriterEntityFactory::createXLSXWriter();
        $writer->openToFile($filePath);

        // (Optional) Create header style
        $headerStyle = (new StyleBuilder())
            // ->setBold()
            ->build();

        // Write header
        $headerRow = WriterEntityFactory::createRowFromArray(
            ['ID', 'Name', 'Email'],
            $headerStyle
        );
        $writer->addRow($headerRow);

        // Write data rows
        $users = User::all(['recid', 'UserName', 'email']);
        // dd($users);
        foreach ($users as $user) {
            $row = WriterEntityFactory::createRowFromArray([
                $user->recid,
                $user->UserName,
                $user->email,
                // $user->created_at,
            ]);
            $writer->addRow($row);
        }

        $writer->close();

        // Return file as download response
        return response()->download($filePath)->deleteFileAfterSend(true);
    }
    public function create(Request $request, $id)
    {
        // dd($request->source);

        // dd($id, auth()->user()->department_code);


        $paps = ProgramAndProject::with('MFO')->where('id', $id)->get();
        // dd($paps,"PAPS");
        $dept_code = auth()->user()->department_code;
        $paps_all = [];
        // dd(auth()->user()->department_code);
        if (!isset($paps)) {
            $paps_all = ProgramAndProject::with('MFO')
                ->where(function ($query) use ($dept_code) {
                    $query->whereHas('MFO', function ($query) use ($dept_code) {
                        $query->where('department_code', $dept_code);
                    })
                        ->orWhere('department_code', $dept_code);
                })
                ->get();
            // dd("wala si paps", $paps);
            // $all_paps = Progr
        } else {
            $paps_all = ProgramAndProject::with('MFO')
                ->where(function ($query) use ($dept_code) {
                    $query->whereHas('MFO', function ($query) use ($dept_code) {
                        $query->where('department_code', $dept_code);
                    })
                        ->orWhere('department_code', $dept_code);
                })
                ->where('id', $id)
                ->get();
        }
        // dd(ProgramAndProject::with('MFO')
        //         ->where(function ($query) use ($dept_code) {
        //             $query->whereHas('MFO', function ($query) use ($dept_code) {
        //                 $query->where('department_code', $dept_code);
        //             })
        //                 ->orWhere('department_code', $dept_code);
        //         })
        //         ->get(), "ALL PAPS");
        // dd($paps, $paps_all, $dept_code, $id);
        $hgdg = HGDG_Checklist::get();
        $count = RevisionPlan::where('idpaps', $id)->count();

        $max_id = RevisionPlan::where('idpaps', $id)->max('id');
        // dd($max_id);
        $duplicate = RevisionPlan::where('id', $max_id)->get();
        $popsp_agencies = PopspAgency::all();
        // dd($paps_all);
        if ($count > 0) {

            return inertia('RevisionPlans/Create', [
                "idpaps" => $id,
                "hgdgs" => $hgdg,
                "paps" => $paps,
                "paps_all" => $paps_all,
                "popsp_agencies" => $popsp_agencies,
                "duplicate" => $duplicate,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/Create', [
                "idpaps" => $id,
                "hgdgs" => $hgdg,
                "paps" => $paps,
                "paps_all" => $paps_all,
                "source" => $request->source,
                "popsp_agencies" => $popsp_agencies,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
        //dd($duplicate);

    }
    public function store(Request $request)
    {
        // dd($request);
        //$idpaps=$request->idpaps;
        $attributes = $request->validate([
            'idpaps' => 'required',
            'project_title' => 'required',
            'project_location' => 'required',
            'list_of_lgu_covered' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'beneficiary_male' => 'required',
            'beneficiary_female' => 'required',
            'baseline_male' => 'required',
            'baseline_female' => 'required',
            'baseline_total' => 'required',
            'data_source' => 'required',
            'rationale' => 'required',
            'objective' => 'required',
            'beneficiaries' => 'required',
            'checklist_id' => 'required',
            // 'implementing_team'=>'required',
            'partnership' => 'required',

            // 'monitoring'=>'required',
            // 'risk_management'=>'required'
        ]);
        // REDIRECT URL
        $red_url = '';
        if ($request->source == 'direct') {
            $red_url = '/revision/0?' . $request->source;
        } else {
            $red_url = '/revision/' . $request->idpaps;
        }
        // dd($red_url);
        $version = RevisionPlan::where('idpaps', '=', $request->idpaps)->max('version');
        if ($version) {
            $version = $version + 1;
        } else {
            $version = 1;
        }

        $rev = new RevisionPlan();
        $rev->idpaps = $attributes['idpaps'];
        $rev->project_title = $attributes['project_title'];
        $rev->project_location = $attributes['project_location'];
        $rev->list_of_lgu_covered = $attributes['list_of_lgu_covered'];
        $rev->date_start = $attributes['date_start'];
        $rev->date_end = $attributes['date_end'];
        $rev->beneficiary_male = $attributes['beneficiary_male'];
        $rev->beneficiary_female = $attributes['beneficiary_female'];
        $rev->baseline_male = $attributes['baseline_male'];
        $rev->baseline_female = $attributes['baseline_female'];
        $rev->baseline_total = $attributes['baseline_total'];
        $rev->data_source = $attributes['data_source'];
        $rev->rationale = $attributes['rationale'];
        $rev->objective = $attributes['objective'];
        $rev->beneficiaries = $attributes['beneficiaries'];
        $rev->implementing_team = $request->implementing_team;
        $rev->partnership = $attributes['partnership'];
        $rev->monitoring = $request->monitoring;
        $rev->risk_management = $request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount = '0.00';
        $rev->attributed_amount = '0.00';
        $rev->checklist_id = $attributes['checklist_id'];
        $rev->hgdg_score = '0';
        $rev->version = $version;
        $rev->type = 'p';
        $rev->final = '0';
        $rev->supplemental = '0';
        $rev->is_strategy_based = $request->is_strategy_based;
        $rev->aip_code = $request->aip_code;
        $rev->user_id = auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect($red_url)
            ->with('message', 'Revision Plan added');
        // if($request->source=='direct'){
        //     return redirect($red_url)
        //     ->with('message', 'Revision Plan added');
        // }else{
        //     return redirect('/revision/' . $request->idpaps)
        //     ->with('message', 'Revision Plan added');
        // }

    }
    public function view(Request $request, $id)
    {
        // dd($id);
        // dd(env('DB_DATABASE'));
        // dd(config('database.connections.mysql.database'));
        $src = $request->source;

        if (auth()->user()->department_code != '04' && $src == 'rev_app') {
            return redirect('/forbidden')
                ->with('error', 'You do not have access to this page.');
        }
        //REVISION PLANS
        $paps = RevisionPlan::with(['comments', 'comments.user', 'paps', 'checklist'])
            ->where('id', $id)
            ->first();

        // dd($paps);
        $checklist_id = $paps->checklist_id;
        $scope = $paps->scope;
        $idpaps = $paps->idpaps;
        $idmfo = $paps->idmfo;
        $department_code = "";
        //PROGRAMS AND PROJECTS & FUNCTIONS
        $ppa = [];
        $functions = [];

        if ($scope == 'GAS') {
            $functions = AccountAccess::where('iduser', auth()->user()->recid)
                ->where('ff.FFUNCCOD', $paps->FFUNCCOD)
                ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                ->with('func')->first();
        } else if ($idpaps != 0) {
            $department_code = optional(optional($paps)->paps)->department_code;
            $ppa = ProgramAndProject::findOrFail($paps->idpaps);
            // dd($ppa);
            if (auth()->user()->department_code == '04') {
                $functions = FFUNCCOD::where('FFUNCCOD', $ppa->FFUNCCOD)->first();
            } else {
                $functions = FFUNCCOD::where('FFUNCCOD', $ppa->FFUNCCOD)->first();
                // $functions = AccountAccess::where('iduser', auth()->user()->recid)
                //     ->where('ff.FFUNCCOD', $ppa->FFUNCCOD)
                //     ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                //     ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                //     ->with('func')->first();
            }
        } else if ($idmfo != 0) {
            $mfoss = MajorFinalOutput::findOrFail($paps->idmfo);
            if (auth()->user()->department_code == '04') {
                $functions = FFUNCCOD::where('FFUNCCOD', $mfoss->FFUNCCOD)->first();
            } else {
                $functions = FFUNCCOD::where('FFUNCCOD', $mfoss->FFUNCCOD)->first();
                // $functions = AccountAccess::where('iduser', auth()->user()->recid)
                //     ->where('ff.FFUNCCOD', $mfoss->FFUNCCOD)
                //     ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                //     ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                //     ->with('func')->first();
            }
        }
        // dd($idpaps, $scope);
        //IMPLEMENTATION PLANS
        $implement = Strategy::with([
            'strategyProject' => function ($query) use ($id) {
                $query->where('project_id', $id)
                    ->where('is_active', '1');
            },
            'strategyProject.expected_output',
            'strategyProject.expected_output.comments',
            'strategyProject.expected_outcome',
            'strategyProject.expected_outcome.comments',
            'strategyProject.comments',
            'strategyProject.comments.user',
            'activity' => function ($query) use ($paps, $id) {
                if ($paps->is_strategy_based == 0) {
                    $query->whereHas('activityProject', function ($q) use ($id) {
                        $q->where('is_active', '1')
                            ->where('project_id', $id);
                    });
                }
            },
            'activity.activityProject' => function ($q) use ($id) {
                $q->where('project_id', $id)
                    ->where('is_active', '1');
            },
            'activity.activityProject.expected_output',
            'activity.activityProject.expected_output.comments',
            'activity.activityProject.expected_outcome',
            'activity.activityProject.expected_outcome.comments',
            'activity.activityProject.comments',
            'activity.activityProject.comments.user'
        ])
            ->whereHas('strategyProject', function ($query) use ($id) {
                $query->where('is_active', '1')
                    ->where('project_id', $id);
            })
            ->when($scope != 'GAS', function ($query) use ($idpaps) {
                $query->where('idpaps', $idpaps);
            })
            // ->where('idpaps', $idpaps)
            ->get()
            ->map(function ($item) {
                // dd($item);
                $item->activity = $item->activity->map(function ($activity) {
                    $activity->is_selected = $activity->activityProject->count() > 0;
                    $ps_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q1 > 0 ? $activity->activityProject[0]->ps_q1 : 0) : 0;
                    $ps_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q2 > 0 ? $activity->activityProject[0]->ps_q2 : 0) : 0;
                    $ps_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q3 > 0 ? $activity->activityProject[0]->ps_q3 : 0) : 0;
                    $ps_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q4 > 0 ? $activity->activityProject[0]->ps_q4 : 0) : 0;
                    $mooe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q1 > 0 ? $activity->activityProject[0]->mooe_q1 : 0) : 0;
                    $mooe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q2 > 0 ? $activity->activityProject[0]->mooe_q2 : 0) : 0;
                    $mooe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q3 > 0 ? $activity->activityProject[0]->mooe_q3 : 0) : 0;
                    $mooe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q4 > 0 ? $activity->activityProject[0]->mooe_q4 : 0) : 0;
                    $co_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q1 > 0 ? $activity->activityProject[0]->co_q1 : 0) : 0;
                    $co_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q2 > 0 ? $activity->activityProject[0]->co_q2 : 0) : 0;
                    $co_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q3 > 0 ? $activity->activityProject[0]->co_q3 : 0) : 0;
                    $co_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q4 > 0 ? $activity->activityProject[0]->co_q4 : 0) : 0;
                    $fe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q1 > 0 ? $activity->activityProject[0]->fe_q1 : 0) : 0;
                    $fe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q2 > 0 ? $activity->activityProject[0]->fe_q2 : 0) : 0;
                    $fe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q3 > 0 ? $activity->activityProject[0]->fe_q3 : 0) : 0;
                    $fe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q4 > 0 ? $activity->activityProject[0]->fe_q4 : 0) : 0;
                    $act_comments = $activity->activityProject->count() > 0 ? $activity->activityProject[0]->comments : [];
                    $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
                    $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                    $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
                    $fe_total = floatval($fe_q1) + floatval($fe_q2) + floatval($fe_q3) + floatval($fe_q4);
                    // dd($activity->activityProject);
                    return [
                        "seq_no" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->seq_no : null,
                        "id" => $activity->id,
                        "date_from" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_from : null,
                        "date_to" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_to : null,
                        "description" => $activity->description,
                        "target_indicator" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->target_indicator : null,
                        "activity_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->id : null,
                        "project_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->project_id : null,
                        "ps_q1" => $ps_q1,
                        "ps_q2" => $ps_q2,
                        "ps_q3" => $ps_q3,
                        "ps_q4" => $ps_q4,
                        "ps_total" => $ps_total,
                        "mooe_q1" => $mooe_q1,
                        "mooe_q2" => $mooe_q2,
                        "mooe_q3" => $mooe_q3,
                        "mooe_q4" => $mooe_q4,
                        "mooe_total" => $mooe_total,
                        "co_q1" => $co_q1,
                        "co_q2" => $co_q2,
                        "co_q3" => $co_q3,
                        "co_q4" => $co_q4,
                        "co_total" => $co_total,
                        "fe_q1" => $fe_q1,
                        "fe_q2" => $fe_q2,
                        "fe_q3" => $fe_q3,
                        "fe_q4" => $fe_q4,
                        "fe_total" => $fe_total,
                        "gad_issue" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->gad_issue : null,
                        "ccet_code" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->ccet_code : null,
                        "responsible" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->responsible : null,
                        "activityProject" => $activity->activityProject,
                        "activity" => $activity->activity,
                        "finance_visible" =>   0,
                        "is_active" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->is_active : 0,
                        "comments" => $act_comments
                    ];
                })
                    ->sortBy('seq_no')   // 👈 sort AFTER mapping
                    ->values();          // 👈 reset indexes for Vue;
                $ps_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q1 > 0 ? $item->strategyProject[0]->ps_q1 : 0) : 0;
                $ps_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q2 > 0 ? $item->strategyProject[0]->ps_q2 : 0) : 0;
                $ps_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q3 > 0 ? $item->strategyProject[0]->ps_q3 : 0) : 0;
                $ps_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q4 > 0 ? $item->strategyProject[0]->ps_q4 : 0) : 0;
                $mooe_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q1 > 0 ? $item->strategyProject[0]->mooe_q1 : 0) : 0;
                $mooe_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q2 > 0 ? $item->strategyProject[0]->mooe_q2 : 0) : 0;
                $mooe_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q3 > 0 ? $item->strategyProject[0]->mooe_q3 : 0) : 0;
                $mooe_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q4 > 0 ? $item->strategyProject[0]->mooe_q4 : 0) : 0;
                $co_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q1 > 0 ? $item->strategyProject[0]->co_q1 : 0) : 0;
                $co_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q2 > 0 ? $item->strategyProject[0]->co_q2 : 0) : 0;
                $co_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q3 > 0 ? $item->strategyProject[0]->co_q3 : 0) : 0;
                $co_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q4 > 0 ? $item->strategyProject[0]->co_q4 : 0) : 0;
                $fe_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_q1 > 0 ? $item->strategyProject[0]->fe_q1 : 0) : 0;
                $fe_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_q2 > 0 ? $item->strategyProject[0]->fe_q2 : 0) : 0;
                $fe_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_q3 > 0 ? $item->strategyProject[0]->fe_q3 : 0) : 0;
                $fe_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_q4 > 0 ? $item->strategyProject[0]->fe_q4 : 0) : 0;
                $comments = $item->strategyProject->count() > 0 ? $item->strategyProject[0]->comments : [];
                $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);

                $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
                $fe_total = floatval($fe_q1) + floatval($fe_q2) + floatval($fe_q3) + floatval($fe_q4);
                // dd($co_total);
                // dd($item->strategyProject[0]);
                return [
                    "seq_no" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->seq_no : null,
                    "id" => $item->id,
                    "description" => $item->description,
                    "target_indicator" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->target_indicator : null,
                    "strategy_id" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->id : null,
                    "project_id" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->project_id : null,
                    "date_from" => $item->strategyProject->count() > 0
                        ? ($item->strategyProject[0]->date_from
                            ? $item->strategyProject[0]->date_from
                            : null)
                        : null,
                    "date_to" => $item->strategyProject->count() > 0
                        ? ($item->strategyProject[0]->date_to
                            ? Carbon::parse($item->strategyProject[0]->date_to)->format('Y-m-d')
                            : null)
                        : null,
                    "ps_q1" => $ps_q1,
                    "ps_q2" => $ps_q2,
                    "ps_q3" => $ps_q3,
                    "ps_q4" => $ps_q4,
                    "ps_total" => $ps_total,
                    "mooe_q1" => $mooe_q1,
                    "mooe_q2" => $mooe_q2,
                    "mooe_q3" => $mooe_q3,
                    "mooe_q4" => $mooe_q4,
                    "mooe_total" => $mooe_total,
                    "co_q1" => $co_q1,
                    "co_q2" => $co_q2,
                    "co_q3" => $co_q3,
                    "co_q4" => $co_q4,
                    "co_total" => $co_total,
                    "fe_q1" => $fe_q1,
                    "fe_q2" => $fe_q2,
                    "fe_q3" => $fe_q3,
                    "fe_q4" => $fe_q4,
                    "fe_total" => $fe_total,
                    "gad_issue" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->gad_issue : null,
                    "ccet_code" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->ccet_code : null,
                    "responsible" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->responsible : null,
                    "strategyProject" => $item->strategyProject,
                    "activity" => $item->activity,
                    "finance_visible" => 0,
                    "is_active" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->is_active : 0,
                    "activity_visible" => 0,
                    "comments" => $comments
                ];
            })
            ->sortBy('seq_no')   // 👈 sort AFTER mapping
            ->values();          // 👈 reset indexes for Vue;
        //Budget Revised
        // dd($implement);
        // $budgetRequirements = $this->budgetRequirements($id);
        $budgetRequirements = $this->budgetRequirementsUngrouped($id);
        // dd($id);
        // dd($budgetRequirements);
        // dd("jjj");
        // Split results into separate variables
        $capitalOutlay = $budgetRequirements->where('category', 'Capital Outlay')->values();
        $maintenanceOperating = $budgetRequirements->where('category', 'Maintenance, Operating, and Other Expenses')->values();
        $personnelServices = $budgetRequirements->where('category', 'Personnel Services')->values();
        $financialExpenses = $budgetRequirements->where('category', 'Financial Expenses')->values();
        // dd($financialExpenses);
        //SUM
        $s_mooe_gad = (float) number_format($budgetRequirements->where('category', 'Maintenance, Operating, and Other Expenses')->sum('GAD_amount'), 2, '.', '');
        $s_mooe_non = (float) number_format($budgetRequirements->where('category', 'Maintenance, Operating, and Other Expenses')->sum('NONGAD_amount'), 2, '.', '');

        $s_cap_gad = (float) number_format($budgetRequirements->where('category', 'Capital Outlay')->sum('GAD_amount'), 2, '.', '');
        $s_cap_non = (float) number_format($budgetRequirements->where('category', 'Capital Outlay')->sum('NONGAD_amount'), 2, '.', '');

        $s_ps_gad = (float) number_format($budgetRequirements->where('category', 'Personnel Services')->sum('GAD_amount'), 2, '.', '');
        $s_ps_non = (float) number_format($budgetRequirements->where('category', 'Personnel Services')->sum('NONGAD_amount'), 2, '.', '');

        $s_fe_gad = (float) number_format($budgetRequirements->where('category', 'Financial Expenses')->sum('GAD_amount'), 2, '.', '');
        $s_fe_non = (float) number_format($budgetRequirements->where('category', 'Financial Expenses')->sum('NONGAD_amount'), 2, '.', '');
        //IMPLEMENTING TEAM
        $team_members = TeamPlan::with('userEmployee', 'comments', 'comments.user')
            ->where('revision_plan_id', $id)
            ->get()
            ->map(function ($item) {
                // dd($item);
                return [
                    "id" => $item->id,
                    "name" => $item->userEmployee ? $item->userEmployee->employee_name : $item->name,
                    "gender" => $item->userEmployee ? $item->userEmployee->gender : $item->gender,
                    "status" => $item->userEmployee ? $item->userEmployee->employment_type_descr : $item->status,
                    "position" => $item->userEmployee ? $item->userEmployee->position_long_title : $item->position,
                    "empl_id" => $item->userEmployee ? $item->userEmployee->empl_id : $item->empl_id,
                    "competency" => $item->competency,
                    "role" => $item->role,
                    "with_gad_training" => $item->with_gad_training,
                    "comments" => $item->comments,
                    "specify_GAD_training" => $item->specify_GAD_training
                ];
            });
        // dd($team_members);
        // TeamPlan::where('revision_plan_id', $id)
        //     ->get()
        //     ->map(function ($item) {
        //         $people = Implementing_team::where('id', $item->implementing_team_id)
        //             ->first();
        //         return [
        //             "id" => $item->id,
        //             "name" => $people->name,
        //             "position" => $people->position,
        //             "competency" => $people->competency,
        //             "role" => $item->role
        //         ];
        //     });
        //MONITORING AND EVALUATION
        $monitoring = Monitoring_and_evaluation::with(['comments', 'comments.user'])
            ->where('revision_plan_id', $id)
            ->orderBy('created_at', 'asc')
            ->get();
        //RISK MANAGEEMNT
        $risks = Risk_manangement::with(['comments', 'comments.user'])->where('revision_plan_id', $id)->get();

        $type = ($paps) ? $paps->type : '';
        $signatories = Signatory::with(['comments'])->where('revision_plan_id', $id)
            ->when($type === 'p', function ($query) {
                $query->whereNotIn('acted', [
                    'As to AIP Inclusion',
                    'As to AIP Appropriation',
                ]);
            })
            ->orderByRaw("FIELD(acted, 'Prepared', 'Reviewed', 'Noted', 'Recommending Approval','Approved','As to AIP Inclusion','As to AIP Appropriation')")
            ->get();
        // dd($signatories);
        //PREPARED
        // $sig_app =[];
        // $sig_prep = [];
        // $sig_rev = [];

        // $sig_prep = Signatory::where('revision_plan_id', $id)
        //     ->where('acted', 'Prepared')->first();

        // //REVIEWED
        // $sig_rev = Signatory::where('revision_plan_id', $id)
        //     ->where('acted', 'Reviewed')->first();

        // //APPROVED
        // $sig_app =  Signatory::where('revision_plan_id', $id)
        //     ->where('acted', 'Approved')->get();
        //IMPLEMENTATION PLAN
        $imp_amount = "0.00";
        // http: //192.168.160.9:8076/revision/view/project/paps/1?source=direct
        // dd($paps);
        if ($paps->is_strategy_based == 1) {
            $imp_amount = StrategyProject::where('project_id', $id)->where('is_active', '1')
                ->sum(DB::raw('ps_q1 + ps_q2 + ps_q3 + ps_q4 + mooe_q1 + mooe_q2 + mooe_q3 + mooe_q4 + co_q1 + co_q2 + co_q3 + co_q4 + fe_q1 + fe_q2 + fe_q3 + fe_q4'));
        } else {

            foreach ($implement as $item) {
                // dd($item);
                foreach ($item['activity'] as $activity) {
                    $imp_amount +=
                        $activity['ps_q1'] + $activity['ps_q2'] + $activity['ps_q3'] + $activity['ps_q4'] +
                        $activity['mooe_q1'] + $activity['mooe_q2'] + $activity['mooe_q3'] + $activity['mooe_q4'] +
                        $activity['co_q1'] + $activity['co_q2'] + $activity['co_q3'] + $activity['co_q4'] +
                        $activity['fe_q1'] + $activity['fe_q2'] + $activity['fe_q3'] + $activity['fe_q4'];
                }
            }
        }
        // dd($functions);
        $all_comments = $this->getAllRevisionPlanComments($id);
        // ->sortByDesc('created_at')
        // dd($all_comments->pluck('created_at'));
        // dd($paps);
        // dd($budgetRequirements);
        // dd($paps);
        // dd($functions);
        $view_returned = $paps->gad_version == '1' ? 'RevisionPlans/View' : 'RevisionPlans/View2';
        $off = "";
        // dd($functions);
        if (is_null($functions)) {
            if (empty($functions) || $functions->isEmpty()) {
                $off = Office::where('department_code', auth()->user()->department_code)->first();
            }
        }

        // dd($off);
        return inertia($view_returned, [
            "all_comments" => $all_comments,
            "paps" => $paps,
            "office" => optional($functions)->FFUNCTION ? optional($functions)->FFUNCTION : optional($off)->office,
            "implementation" => $implement,
            "department_code_project" => $department_code,
            "department_code_user" => auth()->user()->department_code,
            // "mooe_gad" => $mooe_gad,
            // "mooe_non" => $mooe_non,
            // "cap_gad" => $cap_gad,
            // "cap_non" => $cap_non,
            // "ps_gad" => $ps_gad,
            // "ps_non" => $ps_non,
            "s_mooe_gad" => $s_mooe_gad,
            "s_mooe_non" => $s_mooe_non,
            "s_cap_gad" => $s_cap_gad,
            "s_cap_non" => $s_cap_non,
            "s_ps_gad" => $s_ps_gad,
            "s_ps_non" => $s_ps_non,
            "s_fe_gad" => $s_fe_gad,
            "s_fe_non" => $s_fe_non,
            "team_members" => $team_members,
            "monitors" => $monitoring,
            "risks" => $risks,
            // "sig_rev" => $sig_rev,
            // "sig_prep" => $sig_prep,
            // "sig_app" => $sig_app,
            "signatories" => $signatories,
            //BUDGET REVISED
            "capitalOutlay" => $capitalOutlay,
            "maintenanceOperating" => $maintenanceOperating,
            "personnelServices" => $personnelServices,
            "financialExpenses" => $financialExpenses,
            "budget_requirements" => $budgetRequirements,
            // "data" => $data,
            "src" => $src,
            "imp_amount" => $imp_amount,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    function getAllRevisionPlanComments(int $revisionPlanId)
    {
        // 1️⃣ Comments directly on revision_plans
        $revisionPlanComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'revision_plans')
            ->where('table_row_id', $revisionPlanId);

        // 2️⃣ activity_projects comments
        $activityProjectIds = DB::table('activity_projects')
            ->where('project_id', $revisionPlanId)
            ->pluck('id');

        $activityComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'activity_projects')
            ->whereIn('table_row_id', $activityProjectIds);

        // 3️⃣ expected_revised_outcomes / outputs linked to activity_projects
        $outcomeIds = DB::table('expected_revised_outcomes')
            ->whereIn('activity_project_id', $activityProjectIds)
            ->pluck('id');

        $outputIds = DB::table('expected_revised_outputs')
            ->whereIn('activity_project_id', $activityProjectIds)
            ->pluck('id');

        $activityOutcomeComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'expected_revised_outcomes')
            ->whereIn('table_row_id', $outcomeIds);

        $activityOutputComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'expected_revised_outputs')
            ->whereIn('table_row_id', $outputIds);

        // 4️⃣ strategy_projects comments
        $strategyProjectIds = DB::table('strategy_projects')
            ->where('project_id', $revisionPlanId)
            ->pluck('id');

        $strategyComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'strategy_projects')
            ->whereIn('table_row_id', $strategyProjectIds);

        // strategy outcomes / outputs
        $strategyOutcomeIds = DB::table('expected_revised_outcomes')
            ->whereIn('strategy_project_id', $strategyProjectIds)
            ->pluck('id');

        $strategyOutputIds = DB::table('expected_revised_outputs')
            ->whereIn('strategy_project_id', $strategyProjectIds)
            ->pluck('id');

        $strategyOutcomeComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'expected_revised_outcomes')
            ->whereIn('table_row_id', $strategyOutcomeIds);

        $strategyOutputComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'expected_revised_outputs')
            ->whereIn('table_row_id', $strategyOutputIds);

        // 5️⃣ budget_requirements
        $budgetIds = DB::table('budget_requirements')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $budgetComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'budget_requirements')
            ->whereIn('table_row_id', $budgetIds);

        // 6️⃣ monitoring_and_evaluations
        $monitoringIds = DB::table('monitoring_and_evaluations')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $monitoringComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'monitoring_and_evaluations')
            ->whereIn('table_row_id', $monitoringIds);

        // 7️⃣ risk_manangements
        $riskIds = DB::table('risk_manangements')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $riskComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'risk_manangements')
            ->whereIn('table_row_id', $riskIds);

        // 8️⃣ team_plans
        $teamIds = DB::table('team_plans')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $teamComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'team_plans')
            ->whereIn('table_row_id', $teamIds);

        // Signatories
        $signatories = Signatory::with(['user'])
            ->where('revision_plan_id', $revisionPlanId)->pluck('id');
        $signatoryComments = RevisionPlanComment::with(['user'])
            ->where('table_name', 'signatories')
            ->whereIn('table_row_id', $signatories);
        // dd($signatories);

        // 9️⃣ Merge all queries using union
        $unionQuery = $revisionPlanComments
            ->unionAll($activityComments)
            ->unionAll($activityOutcomeComments)
            ->unionAll($activityOutputComments)
            ->unionAll($strategyComments)
            ->unionAll($strategyOutcomeComments)
            ->unionAll($strategyOutputComments)
            ->unionAll($budgetComments)
            ->unionAll($monitoringComments)
            ->unionAll($riskComments)
            ->unionAll($teamComments)
            ->unionAll($signatoryComments);


        $allComments = DB::table(DB::raw("({$unionQuery->toSql()}) as comments"))
            ->mergeBindings($unionQuery->getQuery())
            ->orderBy('comment_status', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();
        // $commentIds = $allComments->pluck('id');

        // $allComments = DB::table(DB::raw("({$unionQuery->toSql()}) as comments"))
        //     ->mergeBindings($unionQuery->getQuery()) // important to merge bindings
        //     ->orderBy('comment_status', 'asc')
        //     ->orderBy('created_at', 'desc')
        //     ->get();
        $userIds = $allComments->pluck('user_id')->unique();

        // $users = User::whereIn('recid', $userIds)->get()->keyBy('id');
        $users = User::whereIn((new User)->getKeyName(), $userIds)
            ->get()
            ->keyBy((new User)->getKeyName());
        // dd($users, $userIds);
        $allComments->map(function ($comment) use ($users) {
            $comment->user = $users[$comment->user_id] ?? null;
            return $comment;
        });
        return $allComments;


        // The user relation is not included in allCOmments
    }

    public function budgetRequirements($id)
    {
        $groupByAccountCodeCount = BudgetRequirement::where('revision_plan_id', $id)
            ->whereIn('category', [
                'Capital Outlay',
                'Financial Expenses',
                'Maintenance, Operating, and Other Expenses',
                'Personnel Services',
            ])
            ->select('account_code')
            ->groupBy('account_code')
            ->get()
            ->count();
        // Step 2: Use appropriate groupBy field
        $groupByField = floatval($groupByAccountCodeCount) > 1 ? 'account_code' : 'particulars';
        $budgetRequirements = BudgetRequirement::with(['comments', 'comments.user'])
            ->select(
                DB::raw('MAX(id) as id'),
                'account_code',
                DB::raw('MAX(particulars) as particulars'),
                DB::raw('SUM(CASE WHEN category_gad = "GAD" THEN amount ELSE 0 END) as GAD_amount'),
                DB::raw('SUM(CASE WHEN category_gad = "NON-GAD" THEN amount ELSE 0 END) as NONGAD_amount'),
                DB::raw('SUM(amount) as Total'),
                DB::raw('MAX(source) as Source'),
                'category'
            )
            ->where('revision_plan_id', $id)
            ->whereIn('category', [
                'Capital Outlay',
                'Financial Expenses',
                'Maintenance, Operating, and Other Expenses',
                'Personnel Services',
            ])
            ->groupBy($groupByField) // group by either account_code or particulars + category
            ->get();
        // dd($groupByField);
        // dd($budgetRequirements);
        return $budgetRequirements;
    }

    public function budgetRequirementsUngrouped($id)
    {
        return BudgetRequirement::with(['comments' => function ($query) {
            $query->where('table_name', 'budget_requirements');
        }])
            ->select('id', 'revision_plan_id', 'particulars', 'account_code', 'amount', 'proposed_budget', 'category', 'category_gad', 'source')
            ->where('revision_plan_id', $id)
            ->orderBy('account_code') // optional: keep some order
            ->orderBy('category') // optional: keep some order
            ->orderBy('category_gad')
            ->get();
    }
    public function edit(Request $request, $id)
    {
        $data = RevisionPlan::where('id', $id)->first();
        // dd($data);
        if ($data) {
            $tp = $data->type == "p" ? "profile" : "design";
            if ($data->status >= 0) {
                return redirect()->back()->with('error', 'Project ' . $tp . ' locked from editing');
            }
        }
        $paps = ProgramAndProject::where('id', $data->idpaps)->get();
        $idpaps = $data->idpaps;
        if (count($paps) > 0) {
            $idpaps = $paps[0]->id;
        }
        // dd($paps);
        // dd($idpaps);
        $hgdg = HGDG_Checklist::get();
        $popsp_agencies = PopspAgency::all();
        $source = $request->source;
        // $count = RevisionPlan::where('idpaps', $id)->count();
        // $max_id = RevisionPlan::where('idpaps', $id)->max('id');
        if ($source == 'direct') {
            $dept_code = auth()->user()->department_code;
            if (isset($paps)) {
                $paps_all = ProgramAndProject::with('MFO')
                    ->where(function ($query) use ($dept_code) {
                        $query->whereHas('MFO', function ($query) use ($dept_code) {
                            $query->where('department_code', $dept_code);
                        })
                            ->orWhere('department_code', $dept_code);
                    })

                    ->get();
                // dd("wala si paps");
                // $all_paps = Progr
            }
            return inertia('RevisionPlans/Create', [
                "idpaps" => $idpaps,
                "hgdgs" => $hgdg,
                "paps" => $paps,
                "paps_all" => $paps_all,
                "editData" => $data,
                "source" => $request->source,
                "popsp_agencies" => $popsp_agencies,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            return inertia('RevisionPlans/Create', [
                "idpaps" => $idpaps,
                "hgdgs" => $hgdg,
                "paps" => $paps,

                "editData" => $data,
                "source" => $request->source,
                "popsp_agencies" => $popsp_agencies,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
    }
    public function update(Request $request)
    {
        // dd($request);
        if ($request->source == 'direct') {
            $red_url = '/revision/0?source=direct';
        } else {
            $red_url = '/revision/' . $request->idpaps;
        }
        $rev = RevisionPlan::where('id', $request->id)->first();
        if ($rev) {
            $rev->idpaps = $request->idpaps;
            // $rev->idmfo = $request->idmfo;
            // $rev->FFUNCCOD = $request->FFUNCCOD;
            // $rev->year_period = $request->year_period;
            // $rev->scope = $request->scope;
            // $rev->aip_code = $request->aip_code;
            $rev->project_title = $request->project_title;
            $rev->project_location = $request->project_location;
            $rev->list_of_lgu_covered = $request->list_of_lgu_covered;
            $rev->date_start = $request->date_start;
            $rev->date_end = $request->date_end;
            $rev->beneficiary_male = $request->beneficiary_male;
            $rev->beneficiary_female = $request->beneficiary_female;
            $rev->baseline_male = $request->baseline_male;
            $rev->baseline_female = $request->baseline_female;
            $rev->baseline_total = $request->baseline_total;
            $rev->data_source = $request->data_source;
            // $rev->amount = $request->amount;
            // $rev->attributed_amount = $request->attributed_amount;
            $rev->checklist_id = $request->checklist_id;
            // $rev->hgdg_score = $request->hgdg_score;
            // $rev->hgdg_percent = $request->hgdg_percent;
            $rev->rationale = $request->rationale;
            $rev->objective = $request->objective;
            $rev->beneficiaries = $request->beneficiaries;
            $rev->implementing_team = $request->implementing_team;
            $rev->partnership = $request->partnership;
            $rev->monitoring = $request->monitoring;
            $rev->risk_management = $request->risk_management;
            // $rev->supplemental = $request->supplemental;
            $rev->aip_code = $request->aip_code;
            $rev->is_strategy_based = $request->is_strategy_based;
            $rev->is_activity_based = $request->is_activity_based;
            $rev->save();
            return redirect($red_url)
                ->with('info', 'Revision Plan updated');
        } else {
            return redirect('/revision/' . $request->idpaps)
                ->with('error', 'Revision Plan not found');
        }

        // $rev->breakdown_by_expected_output = $request->breakdown_by_expected_output;


    }
    public function gas(Request $request, $FFUNCCOD)
    {
        $myid = auth()->user()->recid;
        $currentYear = date('Y');
        //dd($currentYear);
        //dd($idpaps);
        // ->select('revision_plans.id', 'revision_plans.project_title',
        //                     'revision_plans.version','revision_plans.type',
        //                     'ff.FFUNCTION')
        $data = RevisionPlan::select(
            'revision_plans.id',
            'revision_plans.project_title',
            'revision_plans.version',
            'revision_plans.type',
            'revision_plans.year_period',
            'ff.FFUNCTION'
        )
            ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'revision_plans.FFUNCCOD')
            ->where('revision_plans.FFUNCCOD', $FFUNCCOD)
            ->where('revision_plans.year_period', $currentYear)
            ->where('revision_plans.idpaps', '0')
            ->where('revision_plans.idmfo', '0')
            ->where('revision_plans.idmfo', '0')
            ->where('revision_plans.scope', 'GAS')
            ->get()
            ->map(function ($item) {
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');
                // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                //                 ->join('targets', 'targets.id','implementation_plans.id')
                //                 ->sum('targets.planned_budget');
                // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                //                 ->join('targets', 'targets.id','implementation_plans.id')
                //                 ->get();
                $imp_amount = DB::table('targets')
                    ->where('implementation_plans.idrev_plan', $item->id)
                    ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                    ->select('targets.*', 'implementation_plans.*')
                    ->sum('targets.planned_budget');


                return [
                    'FFUNCTION' => $item->FFUNCTION,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'scope' => $item->scope,
                    'year_period' => $item->year_period,
                ];
            });

        //$paps = ProgramAndProject::where('id', $idpaps)->first();
        //dd($data);
        return inertia('RevisionPlans/GAS/Index', [
            'data' => $data,
            'FFUNCCOD' => $FFUNCCOD,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function gas_create(Request $request, $FFUNCCOD)
    {
        //dd($FFUNCCOD);
        $currentYear = date('Y');
        //$myid=auth()->user()->recid;
        //$paps=ProgramAndProject::where('id',$id)->get();
        $hgdg = HGDG_Checklist::get();
        $count = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('year_period', $currentYear)
            ->where('FFUNCCOD', $FFUNCCOD)
            ->count();
        $max_id = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('year_period', $currentYear)
            ->where('FFUNCCOD', $FFUNCCOD)
            ->max('id');
        //dd($max_id);
        $duplicate = RevisionPlan::where('id', $max_id)->get();

        if ($count > 0) {
            //dd("Duplicate is not empty");
            return inertia('RevisionPlans/GAS/Create', [
                //"idpaps"=>$id,
                "FFUNCCOD" => $FFUNCCOD,
                "hgdgs" => $hgdg,
                "duplicate" => $duplicate,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/GAS/Create', [
                //"idpaps"=>$id,
                "FFUNCCOD" => $FFUNCCOD,
                "hgdgs" => $hgdg,

                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
    }
    public function gas_store(Request $request, $FFUNCCOD)
    {
        //dd($request->objective);
        $currentYear = date('Y');
        //dd("store: ".$currentYear);
        $attributes = $request->validate([
            //'FFUNCCOD'=>'required',
            'project_title' => 'required',
            'project_location' => 'required',
            'list_of_lgu_covered' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'beneficiary_male' => 'required',
            'beneficiary_female' => 'required',
            'baseline_male' => 'required',
            'baseline_female' => 'required',
            'baseline_total' => 'required',
            'rationale' => 'required',
            'objective' => 'required',
            'beneficiaries' => 'required',
            'checklist_id' => 'required',
            'partnership' => 'required',
        ]);
        //dd("diri");
        $version = RevisionPlan::where('idpaps', '=', '0')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('idmfo', '0')
            ->max('version');

        if ($version) {
            $version = $version + 1;
        } else {
            $version = 1;
        }
        //dd($version);
        $rev = new RevisionPlan();
        $rev->FFUNCCOD = $FFUNCCOD;
        $rev->idpaps = "0";
        // $rev->idpaps = $request->idpaps;
        $rev->year_period = $currentYear;
        $rev->scope = "GAS";
        $rev->project_title = $attributes['project_title'];
        $rev->project_location = $attributes['project_location'];
        $rev->list_of_lgu_covered = $attributes['list_of_lgu_covered'];
        $rev->date_start = $attributes['date_start'];
        $rev->date_end = $attributes['date_end'];
        $rev->beneficiary_male = $attributes['beneficiary_male'];
        $rev->beneficiary_female = $attributes['beneficiary_female'];
        $rev->baseline_male = $attributes['baseline_male'];
        $rev->baseline_female = $attributes['baseline_female'];
        $rev->baseline_total = $attributes['baseline_total'];
        $rev->rationale = $attributes['rationale'];
        $rev->objective = $attributes['objective'];
        $rev->beneficiaries = $attributes['beneficiaries'];
        $rev->implementing_team = $request->implementing_team;
        $rev->partnership = $attributes['partnership'];
        $rev->monitoring = $request->monitoring;
        $rev->risk_management = $request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount = '0.00';
        $rev->attributed_amount = '0.00';
        $rev->checklist_id = $attributes['checklist_id'];
        $rev->hgdg_score = '0';
        $rev->version = $version;
        $rev->type = 'p';
        $rev->final = '0';
        $rev->supplemental = '0';
        $rev->user_id = auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect('/revision/general/administration/services/' . $FFUNCCOD . '/plan')
            ->with('message', 'Revision Plan added');
    }
    //PAPS
    public function getPopsPProfilesDirect(Request $request, $budget_controller, $dept_id, $popsp_agency, $year_filtering)
    {
        $popsp_related_agency = PopspAgency::where('agency_code', auth()->user()->popsp_agency)->first();
        $sharedPAPS = SharedProgramAndProject::where('destination_department_code', auth()->user()->department_code)
            ->when(auth()->user()->popsp_agency, function ($query) use ($popsp_related_agency) {
                $query->where(function ($query) use ($popsp_related_agency) {
                    $query->where('destination_department_code', $popsp_related_agency->department_code)
                        ->Where('origin_department_code', $popsp_related_agency->department_code_actual);
                    // dd($popsp_related_agency);
                });
                // $query->wjere
                // $query->orWhere('origin_department_code', $popsp_related_agency->agency_code);
            })
            ->get()
            ->pluck('idpaps');
        // dd($popsp_agency);
        $PAPS = ProgramAndProject::where('department_code', auth()->user()->department_code)
            // ->where('agency_name', auth()->user()->agency_name)
            ->where('department_code', auth()->user()->department_code)
            ->get()
            ->pluck('id');

        $idpaps_all = $sharedPAPS->concat($PAPS);
        return RevisionPlan::with(['paps', 'paps.office'])
            ->whereIn('idpaps', $idpaps_all)

            ->when($request->search, function ($query) use ($request) {
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            // ->where('department_code', auth()->user()->department_code)
            ->get()
            ->map(function ($item) use ($budget_controller) {
                // COUNT THE COMMENTS
                // dd($item);
                $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                // dd($revision_comment);

                // BUDGERTARY REQUIREMENTs
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');

                $imp_amount = 0.00;
                // DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                $total = [];
                // dd($item);
                if ($item->is_strategy_based == 1) {
                    $total = $budget_controller->getStratTotal($item->id);
                } else {
                    $total = $budget_controller->getActivityTotal($item->id);
                }
                // dd($item->is_strategy_based);
                if ($total) {
                    $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                        $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                        $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                        $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                }
                // if($item->id==233){
                //     dd($budgetary_requirement, $imp_amount);
                // }
                // dd($total);
                // dd($item);
                // dd($item->project_title);
                // if ($item->id == 201) {
                //     dd($item);
                // }
                // return [
                //     // 'FFUNCTION' => $item->FFUNCTION,
                //     'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                //     'idpaps' => $item->idpaps,
                //     'id' => $item->id,
                //     'project_title' => $item->project_title,
                //     'type' => $item->type,
                //     'version' => $item->version,
                //     'budget_sum' => $budgetary_requirement,
                //     'imp_amount' => $imp_amount,
                //     'status' => $item->status,
                //     'number_of_clones' => $item->clonedVersions->count(),
                //     'return_request_status' => $item->return_request_status,
                //     'year'=>$year
                //     // 'paps'=>$item->paps
                // ];
                $year = Carbon::parse($item->date_start)->year;
                return [
                    // 'FFUNCTION' => $item->FFUNCTION,
                    'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                    'idpaps' => $item->idpaps,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'status' => $item->status,
                    'number_of_clones' => $item->clonedVersions->count(),
                    'return_request_status' => $item->return_request_status,
                    'year' => $year
                    // 'paps'=>$item->paps
                ];
            });
        // dd($idpaps_all);
    }
    //MFO Revision Plans
    public function mfo_index(Request $request, $idmfo)
    {
        // dd(auth()->user());

        $myid = auth()->user()->recid;
        //dd($idpaps);
        // ->select('revision_plans.id', 'revision_plans.project_title',
        //                     'revision_plans.version','revision_plans.type',
        //                     'ff.FFUNCTION')
        if (auth()->user()->department_code == "04") {
            $data = RevisionPlan::select(
                'revision_plans.id',
                'revision_plans.project_title',
                'revision_plans.version',
                'revision_plans.type',
                'ff.FFUNCTION'
            )
                ->Join(DB::raw('major_final_outputs mfos'), 'mfos.id', '=', 'revision_plans.idmfo')
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfos.FFUNCCOD')
                ->where('idmfo', '=', $idmfo)
                ->get()
                ->map(function ($item) {
                    $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                        ->sum('amount');
                    $imp_amount = DB::table('targets')
                        ->where('implementation_plans.idrev_plan', $item->id)
                        ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                        ->select('targets.*', 'implementation_plans.*')
                        ->sum('targets.planned_budget');


                    return [
                        'FFUNCTION' => $item->FFUNCTION,
                        'id' => $item->id,
                        'project_title' => $item->project_title,
                        'type' => $item->type,
                        'version' => $item->version,
                        'budget_sum' => $budgetary_requirement,
                        'imp_amount' => $imp_amount
                    ];
                });
        } else {
            $data = RevisionPlan::select(
                'revision_plans.id',
                'revision_plans.project_title',
                'revision_plans.version',
                'revision_plans.type',
                'ff.FFUNCTION'
            )
                ->Join(DB::raw('major_final_outputs mfos'), 'mfos.id', '=', 'revision_plans.idmfo')
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfos.FFUNCCOD')
                ->Join(DB::raw('fms.accountaccess acc'), 'acc.ffunccod', '=', 'ff.FFUNCCOD')
                ->where('acc.iduser', '=', $myid)
                ->where('idmfo', '=', $idmfo)
                ->get()
                ->map(function ($item) {
                    $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                        ->sum('amount');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->sum('targets.planned_budget');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->get();
                    $imp_amount = DB::table('targets')
                        ->where('implementation_plans.idrev_plan', $item->id)
                        ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                        ->select('targets.*', 'implementation_plans.*')
                        ->sum('targets.planned_budget');


                    return [
                        'FFUNCTION' => $item->FFUNCTION,
                        'id' => $item->id,
                        'project_title' => $item->project_title,
                        'type' => $item->type,
                        'version' => $item->version,
                        'budget_sum' => $budgetary_requirement,
                        'imp_amount' => $imp_amount
                    ];
                });
        }

        //dd($data);
        $mfos = MajorFinalOutput::where('id', $idmfo)->first();
        //dd($data);
        return inertia('RevisionPlans/MFO/Index', [
            'data' => $data,
            "idmfo" => $idmfo,
            "mfos" => $mfos,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function mfo_create(Request $request, $id)
    {
        // dd('idmfo: '.$id);
        $mfos = MajorFinalOutput::where('id', $id)->get();
        $hgdg = HGDG_Checklist::get();
        $count = RevisionPlan::where('idmfo', $id)->count();
        $max_id = RevisionPlan::where('idmfo', $id)->max('id');
        //dd($max_id);
        $duplicate = RevisionPlan::where('id', $max_id)->get();

        if ($count > 0) {
            //dd("Duplicate is not empty");
            return inertia('RevisionPlans/MFO/Create', [
                "idmfo" => $id,
                "hgdgs" => $hgdg,
                "mfos" => $mfos,
                "duplicate" => $duplicate,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/MFO/Create', [
                "idmfo" => $id,
                "hgdgs" => $hgdg,
                "mfos" => $mfos,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
    }
    public function mfo_store(Request $request)
    {

        $attributes = $request->validate([
            'idmfo' => 'required',
            'project_title' => 'required',
            'project_location' => 'required',
            'list_of_lgu_covered' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'beneficiary_male' => 'required',
            'beneficiary_female' => 'required',
            'baseline_male' => 'required',
            'baseline_female' => 'required',
            'baseline_total' => 'required',
            'rationale' => 'required',
            'objective' => 'required',
            'beneficiaries' => 'required',
            'checklist_id' => 'required',
            // 'implementing_team'=>'required',
            'partnership' => 'required',
            // 'monitoring'=>'required',
            // 'risk_management'=>'required'
        ]);
        //dd($attributes);
        $version = RevisionPlan::where('idmfo', '=', $request->idmfo)->max('version');
        if ($version) {
            $version = $version + 1;
        } else {
            $version = 1;
        }

        $rev = new RevisionPlan();
        $rev->idmfo = $attributes['idmfo'];
        $rev->idpaps = '0';
        $rev->project_title = $attributes['project_title'];
        $rev->project_location = $attributes['project_location'];
        $rev->list_of_lgu_covered = $attributes['list_of_lgu_covered'];
        $rev->date_start = $attributes['date_start'];
        $rev->date_end = $attributes['date_end'];
        $rev->beneficiary_male = $attributes['beneficiary_male'];
        $rev->beneficiary_female = $attributes['beneficiary_female'];
        $rev->baseline_male = $attributes['baseline_male'];
        $rev->baseline_female = $attributes['baseline_female'];
        $rev->baseline_total = $attributes['baseline_total'];
        $rev->rationale = $attributes['rationale'];
        $rev->objective = $attributes['objective'];
        $rev->beneficiaries = $attributes['beneficiaries'];
        $rev->implementing_team = $request->implementing_team;
        $rev->partnership = $attributes['partnership'];
        $rev->monitoring = $request->monitoring;
        $rev->risk_management = $request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount = '0.00';
        $rev->attributed_amount = '0.00';
        $rev->checklist_id = $attributes['checklist_id'];
        $rev->hgdg_score = '0';
        $rev->version = $version;
        $rev->type = 'p';
        $rev->final = '0';
        $rev->supplemental = '0';
        $rev->user_id = auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect('/mforevision/' . $request->idmfo)
            ->with('message', 'Revision Plan added');
    }
    public function mfo_view(Request $request, $id)
    {
        //REVISION PLANS
        $paps = RevisionPlan::where('id', $id)->with('checklist')->first();
        $scope = $paps->scope;

        //PROGRAMS AND PROJECTS & FUNCTIONS
        $ppa = [];
        $functions = [];
        if ($scope == 'GAS') {
            $functions = AccountAccess::where('iduser', auth()->user()->recid)
                ->where('ff.FFUNCCOD', $paps->FFUNCCOD)
                ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                ->with('func')->first();
        } else {
            $ppa = ProgramAndProject::findOrFail($paps->idpaps);
            $functions = AccountAccess::where('iduser', auth()->user()->recid)
                ->where('ff.FFUNCCOD', $ppa->FFUNCCOD)
                ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                ->with('func')->first();
        }

        //IMPLEMENTATION PLANS
        $implement = $this->imp->select(
            'implementation_plans.id AS id',
            'strategies.description AS strategy',
            'implementation_plans.idrev_plan',
            'implementation_plans.date_from',
            'implementation_plans.date_to',
            'implementation_plans.idstrategy',
            'implementation_plans.cc_topology',
            'implementation_plans.person_responsible',
            'issues.description AS issue'
        )
            ->where('idrev_plan', $id)
            ->where('idstrategy', '<>', NULL)
            ->Join('strategies', 'strategies.id', 'implementation_plans.idstrategy')
            ->leftJoin('issues', 'issues.id', 'implementation_plans.idissue')
            ->get()
            ->map(function ($item) {
                //dd($item->idrev_plan);
                $activity_implementation = $this->imp
                    ->select(
                        'implementation_plans.id AS id',
                        'activities.description AS activity',
                        'implementation_plans.idrev_plan',
                        'implementation_plans.date_from',
                        'implementation_plans.date_to',
                        'implementation_plans.cc_topology',
                        'issues.description AS issue',
                        'strategies.id AS stratt_id',
                        'implementation_plans.person_responsible',
                    )
                    ->Join('activities', 'activities.id', 'implementation_plans.idactivity')
                    ->Join('strategies', 'strategies.id', '=', 'activities.strategy_id')
                    ->leftJoin('issues', 'issues.id', 'implementation_plans.idissue')
                    ->where('idrev_plan', $item->idrev_plan)
                    ->where('strategies.id', $item->idstrategy)
                    ->get()
                    ->map(function ($item) {
                        return [
                            'id' => $item->id,
                            'idrev_plan' => $item->idrev_plan,
                            'date_from' => convertDateString($item->date_from),
                            'date_to' => convertDateString($item->date_to),
                            'stratt_id' => $item->stratt_id,
                            'cc_topology' => $item->cc_topology,
                            'issue' => $item->issue,
                            'activity' => $item->activity,
                            'person_responsible' => $item->person_responsible,
                        ];
                    });

                return [
                    'id' => $item->id,
                    'idrev_plan' => $item->idrev_plan,
                    'date_from' => convertDateString($item->date_from),
                    'date_to' => convertDateString($item->date_to),
                    'idstrategy' => $item->idstrategy,
                    'cc_topology' => $item->cc_topology,
                    'issue' => $item->issue,
                    'strategy' => $item->strategy,
                    'activity_implementation' => $activity_implementation,
                    'person_responsible' => $item->person_responsible,
                ];
            });


        //MOOE
        $mooe_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $mooe_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_mooe_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_mooe_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');
        //Capital Outlay
        $cap_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $cap_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_cap_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_cap_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');
        //Personnel Services
        $ps_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $ps_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_ps_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_ps_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');


        //IMPLEMENTING TEAM
        $team_members = TeamPlan::where('revision_plan_id', $id)
            ->get()
            ->map(function ($item) {
                $people = Implementing_team::where('id', $item->implementing_team_id)
                    ->first();
                return [
                    "id" => $item->id,
                    "name" => $people->name,
                    "position" => $people->position,
                    "competency" => $people->competency,
                    "role" => $item->role
                ];
            });
        //MONITORING AND EVALUATION
        $monitoring = Monitoring_and_evaluation::where('revision_plan_id', $id)
            ->orderBy('created_at', 'asc')
            ->get();
        //RISK MANAGEEMNT
        $risks = Risk_manangement::where('revision_plan_id', $id)->get();

        //PREPARED
        $sig_prep = Signatory::where('revision_plan_id', $id)
            ->where('acted', 'Prepared')->first();

        //REVIEWED
        $sig_rev = Signatory::where('revision_plan_id', $id)
            ->where('acted', 'Reviewed')->first();

        //APPROVED
        $sig_app =  Signatory::where('revision_plan_id', $id)
            ->where('acted', 'Approved')->get();
        //IMPLEMENTATION PLAN
        //$implementation_plan = new ImplementationPlan();
        $data = ImplementationPlan::select(
            'implementation_plans.id AS id',
            'strategies.description AS strategy',
            'implementation_plans.idrev_plan',
            'implementation_plans.date_from',
            'implementation_plans.date_to',
            'implementation_plans.idstrategy',
            'implementation_plans.cc_topology',
            'implementation_plans.person_responsible',
            'issues.description AS issue'
        )
            ->where('idrev_plan', $id)
            ->where('idstrategy', '<>', NULL)
            ->Join('strategies', 'strategies.id', 'implementation_plans.idstrategy')
            ->leftJoin('issues', 'issues.id', 'implementation_plans.idissue')
            ->get()
            ->map(function ($item) {
                //dd($item->idrev_plan);
                $activity_implementation = ImplementationPlan::select(
                    'implementation_plans.id AS id',
                    'activities.description AS activity',
                    'implementation_plans.idrev_plan',
                    'implementation_plans.date_from',
                    'implementation_plans.date_to',
                    'implementation_plans.cc_topology',
                    'issues.description AS issue',
                    'strategies.id AS stratt_id',
                    'implementation_plans.person_responsible',
                )
                    ->Join('activities', 'activities.id', 'implementation_plans.idactivity')
                    ->Join('strategies', 'strategies.id', '=', 'activities.strategy_id')
                    ->leftJoin('issues', 'issues.id', 'implementation_plans.idissue')
                    ->where('idrev_plan', $item->idrev_plan)
                    ->where('strategies.id', $item->idstrategy)
                    ->get()
                    ->map(function ($item) {
                        $targets = Target::where('idimplementation', $item->id)
                            ->select(
                                'indicators.description AS indicator_description',
                                'targets.description AS target_description',
                                'targets.planned_budget AS budget'
                            )
                            ->join('indicators', 'indicators.id', 'targets.idindicator')
                            ->get();
                        return [
                            'id' => $item->id,
                            'idrev_plan' => $item->idrev_plan,
                            'date_from' => convertDateString($item->date_from),
                            'date_to' => convertDateString($item->date_to),
                            'stratt_id' => $item->stratt_id,
                            'cc_topology' => $item->cc_topology,
                            'issue' => $item->issue,
                            'activity' => $item->activity,
                            'person_responsible' => $item->person_responsible,
                            'targets' => $targets,
                        ];
                    });
                $targets = Target::where('idimplementation', $item->id)->get();
                return [
                    'id' => $item->id,
                    'idrev_plan' => $item->idrev_plan,
                    'date_from' => convertDateString($item->date_from),
                    'date_to' => convertDateString($item->date_to),
                    'idstrategy' => $item->idstrategy,
                    'cc_topology' => $item->cc_topology,
                    'issue' => $item->issue,
                    'strategy' => $item->strategy,
                    'activity_implementation' => $activity_implementation,
                    'person_responsible' => $item->person_responsible,
                    'targets' => $targets,
                ];
            });
        $imp_amount = DB::table('targets')
            ->where('implementation_plans.idrev_plan', $id)
            ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
            ->select('targets.*', 'implementation_plans.*')
            ->sum('targets.planned_budget');
        return inertia('RevisionPlans/View', [
            "paps" => $paps,
            "office" => $functions->FFUNCTION,
            "implementation" => $implement,

            "mooe_gad" => $mooe_gad,
            "mooe_non" => $mooe_non,
            "cap_gad" => $cap_gad,
            "cap_non" => $cap_non,
            "ps_gad" => $ps_gad,
            "ps_non" => $ps_non,
            "s_mooe_gad" => $s_mooe_gad,
            "s_mooe_non" => $s_mooe_non,
            "s_cap_gad" => $s_cap_gad,
            "s_cap_non" => $s_cap_non,
            "s_ps_gad" => $s_ps_gad,
            "s_ps_non" => $s_ps_non,

            "team_members" => $team_members,
            "monitors" => $monitoring,
            "risks" => $risks,
            "sig_rev" => $sig_rev,
            "sig_prep" => $sig_prep,
            "sig_app" => $sig_app,
            "data" => $data,
            "imp_amount" => $imp_amount,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function direct(Request $request)
    {
        $year_filtering = null;
        if ($request->year) {
            $year_filtering = $request->year;
        }
        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        $source = $request->source;
        // if ($dept_id !== "04" && $source === 'rev_app') {
        //     return redirect()->back()->with(
        //         'error',
        //         'You are not allowed to access the review process for Project Profiles/Designs.'
        //     );
        // }
        $gad_reviewers = config('gad.reviewers');

        if (auth()->user()->popsp_agency) {
            return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
        }
        // dd(auth()->user()->cats, $source);
        if ($source != 'budget') {
            // if ($dept_id != '04' && $dept_id != '01' ) {
            //     return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
            // }
            $empl_id = auth()->user()->cats;
            // dd($empl_id);
            $empl_id = trim($empl_id);
            $dept_id = trim($dept_id);

            $allowed = (
                $dept_id === '04' ||
                $dept_id === '01' ||
                ($empl_id == '1399')
            );

            if (!$allowed) {
                return redirect('/forbidden')
                    ->with('error', 'You are not allowed to access this page');
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
        $year_period = CurrentAipYear::first()->year_period;
        if ($request->year_period) {
            $year_period = $request->year_period;
        }
        $aip = AnnualInvestmentPlanInstitutional::where('year_period', $year_period)->first();
        // dd($aip);
        $data = RevisionPlan::with([
            'budget',
            'paps',
            'paps.office',
            'clonedVersions',
            'hgdgScores',
            'hgdgScores.question',
            'projectProfileTrackings'
        ])
            // ->withMax([
            //     'projectProfileTrackings as date_submitted' => function ($q) {
            //         $q->where('action_type', 'Submit Project Profile');
            //     }
            // ], 'created_at')
            ->withMax([
                'projectProfileTrackings as date_submitted' => function ($q) {
                    $q->where('action_type', 'Submit Project Profile');
                }
            ], 'created_at')
            ->whereHas('budget', function ($query) {
                $query->select(DB::raw('revision_plan_id'))
                    ->groupBy('revision_plan_id')
                    ->havingRaw('SUM(amount) > 0');
            })
            ->when($request->source == 'rev_app', function ($query) use ($myid, $gad_reviewers) {

                $query->where(function ($q) {
                    $q->where('status', '0')
                        ->orWhere('status', '7')
                        ->orWhere('return_request_status', '0');
                });

                // GAD visibility rules
                // $query->whereHas('paps', function ($q) use ($myid, $gad_reviewers) {

                //     if (in_array($myid, $gad_reviewers, true)) {
                //         // ✅ GAD reviewer → see ONLY gad_status = 0
                //         $q->where('gad_status', 0);
                //     } else {
                //         // ❌ Not a reviewer → see ONLY gad_status = 1
                //         $q->where('gad_status', 1);
                //     }

                // });
                $query->where(function ($q) use ($myid, $gad_reviewers) {
                    $q->whereHas('paps', function ($q2) use ($myid, $gad_reviewers) {
                        if (in_array($myid, $gad_reviewers, true)) {
                            $q2->where('gad_status', 0);
                        } else {
                            $q2->where('gad_status', 1);
                        }
                    })->orWhere(function ($qq) use ($myid, $gad_reviewers) {
                        $qq->where('idpaps', 0);

                        if (in_array($myid, $gad_reviewers, true)) {
                            $qq->where('gad_status', 0);
                        } else {
                            $qq->where('gad_status', 1);
                        }
                    });
                    // ->orWhere('revision_plans.idpaps', 0);
                });
            })
            ->when($request->source == 'approved', function ($query) use ($myid, $gad_reviewers) {

                $query->where(function ($q) {
                    $q->where('status', '1')
                        ->orWhere('status', '2');
                });

                //  // GAD visibility rules
                // $query->whereHas('paps', function ($q) use ($myid, $gad_reviewers) {

                //     if (in_array($myid, $gad_reviewers, true)) {
                //         // ✅ GAD reviewer → see ONLY gad_status = 0
                //         $q->where('gad_status', 0);
                //     } else {
                //         // ❌ Not a reviewer → see ONLY gad_status = 1
                //         $q->where('gad_status', 1);
                //     }

                // });
            })
            ->when($request->FFUNCCOD, function ($query) use ($request) {
                $query->whereHas('paps', function ($query_inner) use ($request) {
                    $query_inner->where('FFUNCCOD', $request->FFUNCCOD);
                });
            })
            ->when($request->search, function ($query) use ($request) {
                // dd($request->search);
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            ->where(function ($query) use ($request, $source, $dept_id) {
                $query->whereHas('paps', function ($query) use ($request, $source, $dept_id) {
                    $query->when($source == 'budget', function ($query) use ($dept_id) {
                        $query->where('department_code', $dept_id);
                    });
                })->orWhere('idpaps', 0);
            })

            // ->when($source == 'budget', function ($query) use ($dept_id) {
            //     $query->whereHas('paps', function ($q) use ($dept_id) {
            //         $q->where('department_code', $dept_id);
            //     });
            // })
            ->when($request->has_comments == 1, function ($query) {
                $query->whereExists(function ($sub) {
                    $sub->select(DB::raw(1))
                        ->from('revision_plan_comments as rpc')
                        ->where(function ($inner) {
                            $inner->where('rpc.table_name', 'revision_plans')
                                ->whereColumn('rpc.table_row_id', 'revision_plans.id');
                        })
                        // activity_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc2', 'rpc2.table_row_id', '=', 'ap.id')
                                ->where('rpc2.table_name', 'activity_projects');
                        })
                        // strategy_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('strategy_projects as sp')
                                ->whereColumn('sp.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'sp.id')
                                ->where('rpc3.table_name', 'strategy_projects');
                        })
                        // 4️⃣ expected_revised_outputs comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outputs as ero2', 'ero2.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'ero2.id')
                                ->where('rpc4.table_name', 'expected_revised_outputs');
                        })

                        // 3️⃣ expected_revised_outcomes comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outcomes as ero', 'ero.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'ero.id')
                                ->where('rpc3.table_name', 'expected_revised_outcomes');
                        })
                        // budget_requirements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('budget_requirements as br')
                                ->whereColumn('br.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'br.id')
                                ->where('rpc4.table_name', 'budget_requirements');
                        })
                        // team plans
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('team_plans as tp')
                                ->whereColumn('tp.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'tp.id')
                                ->where('rpc4.table_name', 'team_plans');
                        })

                        // monitoring and evaluation
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('monitoring_and_evaluations as me')
                                ->whereColumn('me.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'me.id')
                                ->where('rpc4.table_name', 'monitoring_and_evaluations');
                        })

                        // risk managements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('risk_manangements as rm')
                                ->whereColumn('rm.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'rm.id')
                                ->where('rpc4.table_name', 'risk_manangements');
                        });
                });
            })
            ->when($request->year, function ($query) use ($request) {
                $query->whereYear('date_start', $request->year);
            })
            ->orderBy('date_submitted', 'asc') // oldest first ✅
            ->paginate(10)
            ->withQueryString(); // @var \Illuminate\Pagination\LengthAwarePaginator

        // dd($request->search);
        $data->through(function ($item) use ($budget_controller, $aip) {
            // dd($item);
            $all_comments = $this->getAllRevisionPlanComments($item->id);
            $commentCount = $all_comments->where('comment_status', 0)->count();
            // dd($commentCount);

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
            // dd($item->hgdgScores);
            $hgdg_score_sum = optional($item->hgdgScores)
                ->filter(fn($score) => optional($score->question)->checklist_id == $item->checklist_id)
                ->sum('score') ?? 0;
            // if($hgdg_score_sum>20){
            //     // dd($item, $hgdg_score_sum, $item->hgdgScores);
            // }
            // dd($item->type);
            $latestSubmit = collect($item->projectProfileTrackings)
                ->where('action_type', 'Submit Project Profile')
                ->sortByDesc('created_at')
                ->first();
            // dd($item->project_profile_tracking);
            $function_off = optional(optional(optional($item)->paps)->office)->FFUNCTION;
            if (!$function_off) {
                // dd($function_off, $item->FFUNCCOD);
                $ffunccod = FFUNCCOD::where('FFUNCCOD', $item->FFUNCCOD)->first();
                $function_off = optional($ffunccod)->FFUNCTION;
                // dd($function_off, $item);
            }
            // dd($function_off, $item);
            return [
                'aip' => $aip,
                'comments_count' => $commentCount,
                'comments' => $all_comments,
                'FFUNCTION' => $function_off,
                'id' => $item->id,
                'project_title' => $item->project_title,
                'type' => $item->type,
                'version' => $item->version,
                'budget_sum' => $budgetary_requirement,
                'imp_amount' => round($imp_amount, 2),
                'idpaps' => $item->idpaps,
                'status' => $item->status,
                'gad_status' => $item->gad_status,
                'number_of_clones' => $item->cloned_versions_count, // ❗ special name
                'return_request_status' => $item->return_request_status,
                'hgdg_score' => number_format((float) $hgdg_score_sum, 2, '.', ''),
                'year' => $year = $item->date_start
                    ? Carbon::parse($item->date_start)->year
                    : null,
                'project_profile_tracking' => $latestSubmit,
                'date_submitted' => optional($latestSubmit)->created_at
            ];
        });
        // dd($data);
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        $functions = $this->getFunctions($myid);
        $programs = $this->getPrograms($year_c);

        $latestRevisionPlanIds = DB::table('revision_plans as rp1')
            ->select('rp1.id')
            ->whereRaw('NOT EXISTS (
                SELECT 1 FROM revision_plans rp2
                WHERE rp2.idpaps = rp1.idpaps AND rp2.version > rp1.version
            )')
            ->join('program_and_projects', 'program_and_projects.id', 'rp1.idpaps')
            ->where('program_and_projects.department_code', auth()->user()->department_code)
            ->pluck('id')
            ->toArray();

        $total_budget = BudgetRequirement::select('amount')
            ->whereIn('revision_plan_id', $latestRevisionPlanIds)
            ->sum('amount');
        $totals = Appropriation::selectRaw("FORMAT(IFNULL(SUM(appropriations.past_year), 0), 2, 'en_US') AS past_year")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.first_sem), 0), 2, 'en_US') AS first_sem")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.second_sem), 0), 2, 'en_US') AS second_sem")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.first_sem + appropriations.second_sem), 0), 2, 'en_US') AS total")
            ->selectRaw("FORMAT(IFNULL(" . $total_budget . ", 0), 2, 'en_US') AS budget_year")
            ->join('program_and_projects', 'program_and_projects.id', 'appropriations.idpaps')
            ->where('program_and_projects.department_code', auth()->user()->department_code)
            ->first();


        $acc = DB::connection('mysql2')->table('chartofaccounts')->get();

        $dept_code = auth()->user()->department_code;
        $functions2 = FFUNCCOD::where('department_code', $dept_code)->first();



        $baseUrl = app()->environment('production')
            ? 'http://122.53.120.18:8067/images/'
            : asset('storage/');
        $disk = app()->environment('production') ? 'custom_uploads' : 'public';
        $has_comments = $request->has_comments;
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
            'fileBaseUrl' => $baseUrl,
            'disk' => $disk,
            'year_filtering' => $year_filtering,
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

    public function budget(Request $request)
    {
        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        // dd($dept_id);
        // if ($dept_id != '04' && $dept_id != '01') {
        //     return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
        // }
        $per_page = 10;
        if ($request->per_page) {
            $per_page = $request->per_page;
        }
        $FFUNCCOD = FFUNCCOD::where('department_code', $dept_id)->first()->FFUNCCOD;
        $offices = FFUNCCOD::where(function ($query) {
            $query->where('FFUNCTION', 'LIKE', '%Office%')
                ->orWhere('FFUNCTION', 'LIKE', '%Hospital%');
        })
            ->orderBy('FFUNCTION', 'ASC')
            ->get();
        // dd($offices);
        // $paps = ProgramAndProject::where('id', $idpaps)->first();
        $budget_controller = new BudgetRequirementController($this->budget);
        // dd("revision");
        // dd($request->FFUNCCOD);
        // dd($request->search);
        $data = RevisionPlan::select(
            'revision_plans.id',
            'revision_plans.project_title',
            'revision_plans.version',
            'revision_plans.type',
            'revision_plans.is_strategy_based',
            'ff.FFUNCTION',
            'paps.aip_code',
            // DB::raw('sum(budget_requirements.amount)')
        )->with(['budget'])
            ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
            // ->leftJoin(DB::raw('budget_requirements'), 'budget_requirements.revision_plan_id', '=', 'revision_plans.id')
            ->where('paps.department_code', $dept_id)
            ->whereHas('budget', function ($query) {
                $query->select(DB::raw('revision_plan_id'))
                    ->groupBy('revision_plan_id')
                    ->havingRaw('SUM(amount) > 0');
            })
            ->where('revision_plans.project_title', 'LIKE', '%' . $request->search . '%')
            ->when($request->FFUNCCOD, function ($query) use ($request) {
                $query->where('ff.FFUNCCOD', $request->FFUNCCOD);
            })
            ->orderBy('ff.FFUNCTION')
            ->paginate(10)
            ->withQueryString(); // <- Pagination
        // dd($data);
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
                'FFUNCTION' => $item->FFUNCTION,
                'id' => $item->id,
                'project_title' => $item->project_title,
                'type' => $item->type,
                'version' => $item->version,
                'budget_sum' => $budgetary_requirement,
                'imp_amount' => $imp_amount
            ];
        });
        // $data->setCollection(
        //     $data->getCollection()->filter(function ($item) {
        //         return data_get($item, 'budget_sum') != 0;
        //     })->values()
        // );
        // dd($data);
        return inertia('RevisionPlans/Direct', [
            'data' => $data,
            'FFUNCCOD' => $FFUNCCOD,
            'offices' => $offices,
            // "idpaps" => $idpaps,
            // "paps" => $paps,
            "my_source" => 'budget',
            "dept_id" => $dept_id,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function get_budget_data(Request $request, $rev_id)
    {
        // dd($rev_id);
        return BudgetPrep::where('revision_plan_id', $rev_id)->get();
    }
    public function api_ppa(Request $request)
    {
        $dept_id = $request->department_code;

        $budget_controller = new BudgetRequirementController($this->budget);
        // dd($budget_controller);
        // select(
        //     'revision_plans.id',
        //     'revision_plans.project_title',
        //     'revision_plans.version',
        //     'revision_plans.type',
        //     'revision_plans.is_strategy_based',
        //     'ff.FFUNCTION',
        //     'ff.department_code',
        //     'paps.aip_code'
        // )
        // ->
        // dd("dsdsdsdsd");
        // dd(RevisionPlan::with(['paps','paps.office'])->whereHas('paps', function($query)use($dept_id)
        //     {$query->where('department_code', $dept_id);})->get()->pluck('status'));
        $query = RevisionPlan::with(['paps', 'paps.office'])
            // ->where('status','1')
            // ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            // ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            // ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
            ->when($request->search, function ($query) use ($request) {
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            ->whereHas('paps', function ($query) use ($dept_id) {
                $query->where('department_code', $dept_id);
            })
            ->where('status', '>', -1)
            ->when($request->year, function ($query) use ($request) {
                $query->whereYear('date_start', $request->year);
            });
        // if ($dept_id) {
        //     $query->whereHas('paps', function($query1)use($dept_id){
        //         // $query->where('department_code', $dept_id);
        //         $query1->whereHas('office', function($query2)use($dept_id){
        //             $query2->where('department_code', $dept_id);
        //         });
        //     });
        // }

        // $query = RevisionPlan::with(['paps', 'paps.office', 'paps.MFO', 'paps.MFO.function'])
        //         ->when($request->search, function ($query) use ($request) {
        //             $query->where('project_title', 'LIKE', '%' . $request->search . '%');
        //         });

        // if ($dept_id) {
        //     $query->whereHas('paps', function ($query1) use ($dept_id) {
        //         $query1->whereHas('MFO', function ($query2) use ($dept_id) {
        //             $query2->whereHas('function', function ($query3) use ($dept_id) {
        //                 $query3->where('department_code', $dept_id);
        //             });
        //         });
        //     });
        // }

        $data = $query
            ->get()
            ->map(function ($item) use ($budget_controller, $request) {
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');
                // dd($item->gad_status);
                return [
                    'department_code' => optional(optional($item->paps)->office)->department_code,
                    'FFUNCTION' => trim(optional(optional($item->paps)->office)->FFUNCTION),
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'year' => optional($item)->date_start ? \Carbon\Carbon::parse($item->date_start)->year : '',
                    'type' => $item->type,
                    'version' => $item->version,
                    'amount' => $budgetary_requirement,
                    'strategies' => $this->get_strategies($request, $item->id),
                    'status' => $this->set_status($item->status, $item->gad_status)
                ];
            });

        return $data;
    }
    protected function set_status($status, $gad_status)
    {
        if ($status == "1") {
            return "Approved";
        }

        if ($status == "0") {
            if ($gad_status == "1") {
                return "PPDO Review on-going";
            } else {
                return "GAD Review on-going";
            }
        }

        if ($status == "-1") {
            return "Saved";
        }

        if ($status == "-2") {
            return "Returned";
        }
    }
    public function aip_api(Request $request)
    {
        ActivityProject::with([
            'expected_output',
            'expected_outcome',
        ])
            ->get();
    }
    public function print_aip(Request $request)
    {
        $strategies = [];
        $ccet = "0";

        if ($request->ccet) {
            $ccet = $request->ccet;
        }

        $ssf_filter = $request->ssf_filter ? $request->ssf_filter : null;
        $year = filter_var($request->year, FILTER_VALIDATE_INT);

        if (!$year || !checkdate(1, 1, $year)) {
            $year = Carbon::now()->year;
        }
        // dd($year);
        // ? "1":"0";
        // $plans = $this->getAllPlans($request, $year, $ssf_filter);
        // dd($plans[28]);
        $plans =RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject' => function ($query) {
                $query->whereHas('activity');
            },
            'activityProject.activity',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office',
            'paps.office.office',
            'gasPaps',
            'gasPaps.office',
            'gasPaps.office.office',
            'office'
        ])
            ->whereYear('date_start', $year)
            ->when(request()->ssf_filter == 'dev' || request()->ssf_filter == 'other', function ($query) use($request){
                // dd($request->ssf_filter);
                if ($request->ssf_filter === 'dev') {
                    $query->whereIn('status', [1, 0, -1, -2]);
                }

                if ($request->ssf_filter === 'other') {
                    $query->where(function ($q) {
                        $q->where('FFUNCCOD', '8751')
                        ->orWhere('FFUNCCOD', '1071');
                    })->whereIn('status', [1, 0, -1, -2]);
                }
            }, function ($query) use ($request){
                $query->where('status', 1);
                if($request->ssf_filter=='Other Sources'){

                }else{
                    $query->where('aip_code','<>', NULL);
                }

            })
            // ->where(function($query)use($request){
            //     if($request->ssf_filter=='Other Services'){
            //         // dd($request->ssf_filter);
            //         $query->whereHas('gasPaps', function($q){
            //             $q->where('source_of_funds','Other Services');
            //         });
            //     }
            // })
            ->orderBy('aip_code', 'asc')
            ->get();
        // $other_services1 = $plans
        //     // ->where('source_of_funds', 'gen_fund')
        //     ->where('FFUNCCOD', '4490')
        //     ->values();
        // dd('strategies',$plans->pluck('sector'), $plans->pluck('project_title'), $plans->pluck('source_of_funds'));
        // dd("aip",$plans->pluck('aip_code'));
        $pln = $plans;
        foreach ($plans as $plan) {
            $strategyProject = $plan->strategyProject()->whereHas('strategy')->first();
            $strategy = optional($strategyProject)->strategy;
            // dd($plan );

            if (!$strategy) {
                continue;
            }
            $source_of_funds = $this->getSourceLabel(optional(optional($plan)->paps)->source_of_funds);

            $sector = optional(optional($plan)->paps)->sector;
            if(!$sector){
                // dd(optional($plan)->gasPaps);
                $sector = optional(optional($plan)->gasPaps)->sector;
                $source_of_funds =optional(optional($plan)->gasPaps)->source_of_funds;
            }
            $strategyId = $plan->id;
            $budget = $plan->budget;
            $source = $this->getSourceLabel(optional(optional($plan)->paps)->source_of_funds);
            if (count($budget) > 0) {
                $source = $this->getSourceLabel(optional(optional($plan)->paps)->source_of_funds);
            }


            $expected_outputs = in_array($source_of_funds, ['dev', 'other'])
                ? ""
                : collect($plan->activityProject)
                ->filter(function ($activityProject) use($plan) {
                    // Only active activity projects
                    if ((int)($activityProject->is_active ?? 0) !== 1) {
                        return false;
                    }
                    if ($plan->id == 668) {
                        return true;
                    } else {
                        // $total_co =
                        //     (float)($activityProject->co_q1 ?? 0) +
                        //     (float)($activityProject->co_q2 ?? 0) +
                        //     (float)($activityProject->co_q3 ?? 0) +
                        //     (float)($activityProject->co_q4 ?? 0);

                        // return $total_co <= 0;
                        return true;
                    }
                })
                ->pluck('expected_output')
                ->filter()
                ->flatten(1)
                ->map(function ($output) use ($plan) {
                    $target_budget_year =
                        ($output->physical_q1 ? floatval($output->physical_q1) : 0) +
                        ($output->physical_q2 ? floatval($output->physical_q2) : 0) +
                        ($output->physical_q3 ? floatval($output->physical_q3) : 0) +
                        ($output->physical_q4 ? floatval($output->physical_q4) : 0);
                    $description = trim($output->description ?? '');

                    // Check if description starts with a number
                    if (
                        preg_match('/^\(\d+\)/', $description) ||
                        preg_match('/^\d+/', $description) ||
                        preg_match('/^[^:]+:\s*/', $description)
                    ) {
                        return $description;
                    }

                    $formattedTarget = number_format($target_budget_year);
                    if (
                        str_contains($description, (string) $target_budget_year) ||
                        str_contains($description, $formattedTarget)
                    ) {
                        return $description;
                    }

                    // if($plan->id==362){
                    //     return $target_budget_year . ' fsdfsd ' . $description;
                    // }
                    return $target_budget_year . ' ' . $description;
                })
                ->filter()
                ->implode("\n");

            $total_mooe = $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount');
            $total_ps = $budget->where('category', 'Personnel Services')->sum('amount');
            $total_co = $budget->where('category', 'Capital Outlay')->sum('amount');
            $total_fe = $budget->where('category', 'Financial Expenses')->sum('amount');

            $total_all = $total_mooe + $total_ps + $total_co + $total_fe;
            $ccet_code_adaptation = 0;
            $ccet_code_mitigation = 0;


            $ccetCode = '';
            $activityWithCcet = collect($plan->activityProject)->firstWhere('ccet_code', '!=', null);


            if ($activityWithCcet) {
                // Found at least one with a ccet_code
                $ccetCode = $activityWithCcet->ccet_code;
                if ($ccetCode) {
                    if (Str::startsWith($ccetCode, 'A')) {
                        $ccet_code_adaptation = $total_all;
                        $ccet_code_mitigation = 0;
                    } elseif (Str::startsWith($ccetCode, 'M')) {
                        $ccet_code_adaptation = 0;
                        $ccet_code_mitigation = $total_all;
                    } else {
                        $ccet_code_adaptation = 0;
                        $ccet_code_mitigation = 0;
                    }
                }
            }
            $source = $this->set_source($source);
            if (mb_strlen($source, 'UTF-8') < 25) {

                $chars = preg_split('//u', $source, -1, PREG_SPLIT_NO_EMPTY);
                $source = implode("\n", $chars);
            }
            $paps_title = $plan->project_title;
            // $paps_temp=$paps_title;
            if ($paps_title === mb_strtoupper($paps_title, 'UTF-8') && !preg_match('/^STF\s+\d{4}$/', $paps_title)) {
                $paps_title = $this->titleCaseTransform($paps_title);
            }

            $paps_desc = optional($plan->paps)->MOV == "-" ? "" : optional($plan->paps)->MOV;
            $paps_title_desc = "<b>" . $paps_title . "</b>\n\n<i>" . $paps_desc . "</i>";
            $imp_office = optional(optional(optional($plan)->paps)->office)->office ?
                optional(optional(optional(optional($plan)->paps)->office)->office)->short_name :
                optional(optional(optional($plan)->paps)->office)->FFUNCTION;
            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'project_title' => $paps_title_desc,
                    'implementing_office' => $imp_office ? $imp_office : optional(optional($plan)->office)->FFUNCTION,
                    'expected_output' =>  $expected_outputs,
                    'total_mooe' => floatval($total_mooe),
                    'total_ps' => floatval($total_ps),
                    'total_co' => floatval($total_co),
                    'total_fe' => floatval($total_fe),
                    'ccet_code' => in_array(optional(optional($plan)->paps)->source_of_funds, ['dev', 'other']) ? '' : $ccetCode,
                    'ccet_code_mitigation' => $ccet_code_mitigation,
                    'ccet_code_adaptation' => $ccet_code_adaptation,
                    'aip_code' => $plan->aip_code,
                    'source' => $source . "\n",
                    'ccet' => $ccet,
                    'year' => $year,
                    'id' => $plan->id,
                    'source_of_funds' => optional(optional($plan)->paps)->source_of_funds ? optional(optional($plan)->paps)->source_of_funds : optional(optional($plan)->gasPaps)->source_of_funds,
                    'sector' => $sector,
                    'level' => 1,
                    'scope'=> $plan->scope
                ];
            } else {
                continue;
                // dd($plans[276], $plan, $strategies, $strategyId, $strategy, $strategies[$strategyId]);
                // If the same strategy appears again, merge expected outputs
                // $strategies[$strategyId]['expected_output'] = $strategies[$strategyId]['expected_output']
                //     ->merge($expected_outputs)
                //     ->unique('id') // remove duplicates if outputs have IDs
                //     ->values();

            }
        }



        // dd($plans->pluck('aip_code'), $strategies);

        // return array_values($strategies);
        $strategies = collect($strategies);

        $rev_ids = $strategies->pluck('id');
        // dd($rev_ids);
        $cap_ob = $this->capitalOutlayObject($rev_ids);
        $capital_activities = $this->retrievingCapitalOutlay($request->ccet, $cap_ob);
        $grouped = $capital_activities->groupBy('id');
        $flattened_grouped = $grouped->flatten(1);
        // dd($flattened_grouped, $flattened_grouped[520]);
        $result = $strategies->concat($flattened_grouped)
            ->when(
        !in_array($request->ssf_filter, ['dev', 'other']),
                function ($collection) {
                    return $collection->sortBy([
                        ['aip_code', 'asc'],
                        ['level', 'asc'],
                    ]);
                },
                function ($collection) {
                    return $collection->sortBy([
                        ['id', 'asc'],
                        ['level', 'asc'],
                    ]);
                }
            )
            ->values();

        // dd()
        // 250 => "Other Services"
        // 253 => "Other Services"
        // 254 => "Other Services"
        // 256 => "Other Services"
        // 257 => "Other Services"
        // 260 => "Other Services"
        // 264 => "Other Services"
        // 265 => "Other Services"
        // 266 => "Other Services"
        // 267 => "Other Services"
        // 268 => "Other Services"
        // 269 => "Other Services"
        // 270 => "Other Services"
        // 271 => "Other Services"
        // 275 => "Other Services"
        // 276 => "Other Services"
        // 277 => "Other Services"
        // 278 => "Other Services"
        // 280 => "Other Services"
        // dd($grouped, $flattened_grouped, $flattened_grouped->pluck('aip_code'), $rev_ids, $flattened_grouped[520]);
        // dd($flattened_grouped, $flattened_grouped->pluck('aip_code'), $rev_ids, $flattened_grouped[520]);
        // $strategies = $strategies->concat($flattened_grouped)->sortBy('aip_code')->values();
        // dd($flattened_grouped, $flattened_grouped->pluck('aip_code'));
        // $result = collect();

        // foreach ($strategies as $strategy) {
        //     $result->push($strategy);
        //     $key = $strategy['id'];
        //     if($key==738){
        //         // dd($strategy, $grouped[$key],
        //         // $grouped[$key]->count(),
        //         // $grouped[$key]->all());
        //     }
        //     $before = $result->count();
        //     if ($grouped->has($key)) {
        //         // dd("has key");
        //         $result = $result->concat($grouped[$key]);
        //         $kk = $key;
        //         $grouped->forget($key);
        //         if($kk==738){dd($before,$result->count(), $result);}

        //     }
        // }
        // Append any activities without a matching strategy (if needed)
        // foreach ($grouped as $activities) {
        //     $result = $result->concat($activities);
        // }
        $strategies=$result;
        $sectorValues  = [
                'General Public Services Sector',
                'Economic Services',
                'Other Services',
                'Social Services Sector',
            ];

        $sourceOfFundValues  = [
                'gen_fund',
                'ldrrmf',
                'dev',
                'other',
            ];
            // dd($ssf_filter);


        if (!empty($ssf_filter)) {
            $strategies = $strategies->filter(function ($item) use ($ssf_filter, $sectorValues, $sourceOfFundValues) {

                // Filter by sector, but only General Fund records
                if (in_array($ssf_filter, $sectorValues, true)) {

                    return $item['sector'] === $ssf_filter
                        && $item['source_of_funds'] === 'gen_fund';
                }

                // Filter by source of funds
                if (in_array($ssf_filter, $sourceOfFundValues, true)) {
                    return $item['source_of_funds'] === $ssf_filter;
                }

                // Unknown filter value - don't exclude anything
                return true;
            })->values();
        }


        // dd("foreach:",$plans->pluck('aip_code'),$strategies->pluck('sector'), $strategies->first());
        /*
        |--------------------------------------------------------------------------
        | General Fund Sectors
        |--------------------------------------------------------------------------
        */

        $general_public_services = $strategies
            ->where('source_of_funds', 'gen_fund')
            ->where('sector', 'General Public Services Sector')
            ->values();
        // dd($general_public_services->pluck('aip_code'));
        $economic_services = $strategies
            ->where('source_of_funds', 'gen_fund')
            ->where('sector', 'Economic Services')
            ->values();

        $social_services = $strategies
            ->where('source_of_funds', 'gen_fund')
            ->where('sector', 'Social Services Sector')
            ->values();

        $other_services = $strategies
            // ->where('source_of_funds', 'gen_fund')
            ->where('sector', 'Other Services')
            ->values();
        // dd($other_services, $strategies->pluck('source_of_funds'));
        /*
        |--------------------------------------------------------------------------
        | Other Source of Funds
        |--------------------------------------------------------------------------
        */

        $dev = $strategies
            ->where('source_of_funds', 'dev')
            ->values();

        $ldrrmf = $strategies
            ->where('source_of_funds', 'ldrrmf')
            ->values();

        $other = $strategies
            ->where('source_of_funds', 'other')
            ->values();
        // dd($other, $social_services);
        // ->pluck('project_title')
        /*
        |--------------------------------------------------------------------------
        | Final Ordered Collection
        |--------------------------------------------------------------------------
        |
        | Order:
        | 1. General Public Services Sector
        | 2. Economic Services
        | 3. Social Services Sector
        | 4. dev
        | 5. ldrrmf
        | 6. other
        |
        */
        // $Revision

        // dd($dev, $summary, $cap_ob);
        /*
        |--------------------------------------------------------------------------
        | Totals
        |--------------------------------------------------------------------------
        */

        $safeSum = fn($collection, $key) => $collection->sum(fn($item) => floatval($item[$key] ?? 0));

        // General Public Services
        $general_public_services_total_mooe = $safeSum($general_public_services, 'total_mooe');
        $general_public_services_total_ps   = $safeSum($general_public_services, 'total_ps');
        $general_public_services_total_co   = $safeSum($general_public_services, 'total_co');
        $general_public_services_total_fe   = $safeSum($general_public_services, 'total_fe');
        $general_public_services_ccet_code_adaptation = $safeSum($general_public_services, 'ccet_code_adaptation');
        $general_public_services_ccet_code_mitigation = $safeSum($general_public_services, 'ccet_code_mitigation');

        // Economic Services
        $economic_services_total_mooe = $safeSum($economic_services, 'total_mooe');
        $economic_services_total_ps   = $safeSum($economic_services, 'total_ps');
        $economic_services_total_co   = $safeSum($economic_services, 'total_co');
        $economic_services_total_fe   = $safeSum($economic_services, 'total_fe');
        $economic_services_ccet_code_adaptation = $safeSum($economic_services, 'ccet_code_adaptation');
        $economic_services_ccet_code_mitigation = $safeSum($economic_services, 'ccet_code_mitigation');

        // Social Services
        $social_services_total_mooe = $safeSum($social_services, 'total_mooe');
        $social_services_total_ps   = $safeSum($social_services, 'total_ps');
        $social_services_total_co   = $safeSum($social_services, 'total_co');
        $social_services_total_fe   = $safeSum($social_services, 'total_fe');
        $social_services_ccet_code_adaptation = $safeSum($social_services, 'ccet_code_adaptation');
        $social_services_ccet_code_mitigation = $safeSum($social_services, 'ccet_code_mitigation');

        // LDRRMF
        $ldrrmf_total_mooe = $safeSum($ldrrmf, 'total_mooe');
        $ldrrmf_total_ps   = $safeSum($ldrrmf, 'total_ps');
        $ldrrmf_total_co   = $safeSum($ldrrmf, 'total_co');
        $ldrrmf_total_fe   = $safeSum($ldrrmf, 'total_fe');
        $ldrrmf_ccet_code_adaptation = $safeSum($ldrrmf, 'ccet_code_adaptation');
        $ldrrmf_ccet_code_mitigation = $safeSum($ldrrmf, 'ccet_code_mitigation');
        // Other Services
        $other_services_total_mooe = $safeSum($other_services, 'total_mooe');
        // + $ldrrmf_total_mooe;
        $other_services_total_ps   = $safeSum($other_services, 'total_ps');
        // + $ldrrmf_total_ps;
        $other_services_total_co   = $safeSum($other_services, 'total_co');
        // + $ldrrmf_total_co;
        $other_services_total_fe   = $safeSum($other_services, 'total_fe');
        // + $ldrrmf_total_fe;
        $other_services_ccet_code_adaptation = $safeSum($other_services, 'ccet_code_adaptation');
        // + $ldrrmf_ccet_code_adaptation;
        $other_services_ccet_code_mitigation = $safeSum($other_services, 'ccet_code_mitigation');
        // + $ldrrmf_ccet_code_mitigation;

        // Development Fund
        $dev_total_mooe = $safeSum($dev, 'total_mooe');
        $dev_total_ps   = $safeSum($dev, 'total_ps');
        $dev_total_co   = $safeSum($dev, 'total_co');
        $dev_total_fe   = $safeSum($dev, 'total_fe');
        $dev_ccet_code_adaptation = $safeSum($dev, 'ccet_code_adaptation');
        $dev_ccet_code_mitigation = $safeSum($dev, 'ccet_code_mitigation');



        // Other Source
        $other_total_mooe = $safeSum($other, 'total_mooe');
        $other_total_ps   = $safeSum($other, 'total_ps');
        $other_total_co   = $safeSum($other, 'total_co');
        $other_total_fe   = $safeSum($other, 'total_fe');
        $other_ccet_code_adaptation = $safeSum($other, 'ccet_code_adaptation');
        $other_ccet_code_mitigation = $safeSum($other, 'ccet_code_mitigation');


        // dd($other_services);

        /*
        |--------------------------------------------------------------------------
        | Final Strategies
        |--------------------------------------------------------------------------
        */
        // dd($general_public_services->pluck('aip_code'), $general_public_services);
        $final_strategies = collect()
            ->concat($general_public_services)
            ->concat($economic_services)
            ->concat($social_services)
            ->concat($other_services)
            ->concat($dev)
            ->concat($ldrrmf)
            ->concat($other)
            ->map(function ($item) use (
                $general_public_services_total_mooe,
                $general_public_services_total_ps,
                $general_public_services_total_co,
                $general_public_services_total_fe,
                $general_public_services_ccet_code_adaptation,
                $general_public_services_ccet_code_mitigation,

                $economic_services_total_mooe,
                $economic_services_total_ps,
                $economic_services_total_co,
                $economic_services_total_fe,
                $economic_services_ccet_code_adaptation,
                $economic_services_ccet_code_mitigation,

                $social_services_total_mooe,
                $social_services_total_ps,
                $social_services_total_co,
                $social_services_total_fe,
                $social_services_ccet_code_adaptation,
                $social_services_ccet_code_mitigation,

                $other_services_total_mooe,
                $other_services_total_ps,
                $other_services_total_co,
                $other_services_total_fe,
                $other_services_ccet_code_adaptation,
                $other_services_ccet_code_mitigation,

                $dev_total_mooe,
                $dev_total_ps,
                $dev_total_co,
                $dev_total_fe,
                $dev_ccet_code_adaptation,
                $dev_ccet_code_mitigation,

                $ldrrmf_total_mooe,
                $ldrrmf_total_ps,
                $ldrrmf_total_co,
                $ldrrmf_total_fe,
                $ldrrmf_ccet_code_adaptation,
                $ldrrmf_ccet_code_mitigation,

                $other_total_mooe,
                $other_total_ps,
                $other_total_co,
                $other_total_fe,
                $other_ccet_code_adaptation,
                $other_ccet_code_mitigation


            ) {
                // dd($item['source_of_funds'], $item['sector']);
                $sf = $item['source_of_funds'];
                $sector = $item['sector'];
                if ($sf == 'gen_fund' && $sector == 'General Public Services Sector') {
                    $item['grand_total_mooe'] = (float) number_format($general_public_services_total_mooe, 2, '.', '');
                    $item['grand_total_ps']   = (float) number_format($general_public_services_total_ps, 2, '.', '');
                    $item['grand_total_co']   = (float) number_format($general_public_services_total_co, 2, '.', '');
                    $item['grand_total_fe']   = (float) number_format($general_public_services_total_fe, 2, '.', '');
                    $item['total_ccet_code_adaptation'] = (float) number_format($general_public_services_ccet_code_adaptation, 2, '.', '');
                    $item['total_ccet_code_mitigation'] = (float) number_format($general_public_services_ccet_code_mitigation, 2, '.', '');
                } elseif ($sf == 'gen_fund' && $sector == 'Economic Services') {
                    $item['grand_total_mooe'] = (float) number_format($economic_services_total_mooe, 2, '.', '');
                    $item['grand_total_ps']   = (float) number_format($economic_services_total_ps, 2, '.', '');
                    $item['grand_total_co']   = (float) number_format($economic_services_total_co, 2, '.', '');
                    $item['grand_total_fe']   = (float) number_format($economic_services_total_fe, 2, '.', '');
                    $item['total_ccet_code_adaptation'] = (float) number_format($economic_services_ccet_code_adaptation, 2, '.', '');
                    $item['total_ccet_code_mitigation'] = (float) number_format($economic_services_ccet_code_mitigation, 2, '.', '');
                } elseif ($sf == 'gen_fund' && $sector == 'Social Services Sector') {
                    $item['grand_total_mooe'] = (float) number_format($social_services_total_mooe, 2, '.', '');
                    $item['grand_total_ps']   = (float) number_format($social_services_total_ps, 2, '.', '');
                    $item['grand_total_co']   = (float) number_format($social_services_total_co, 2, '.', '');
                    $item['grand_total_fe']   = (float) number_format($social_services_total_fe, 2, '.', '');
                    $item['total_ccet_code_adaptation'] = (float) number_format($social_services_ccet_code_adaptation, 2, '.', '');
                    $item['total_ccet_code_mitigation'] = (float) number_format($social_services_ccet_code_mitigation, 2, '.', '');
                } elseif ($sf == 'gen_fund' && $sector == 'Other Services') {
                    $item['grand_total_mooe'] = number_format($other_services_total_mooe, 2, '.', '');
                    $item['grand_total_ps']   = number_format($other_services_total_ps, 2, '.', '');
                    $item['grand_total_co']   = number_format($other_services_total_co, 2, '.', '');
                    $item['grand_total_fe']   = number_format($other_services_total_fe, 2, '.', '');
                    $item['total_ccet_code_adaptation'] = number_format($other_services_ccet_code_adaptation, 2, '.', '');
                    $item['total_ccet_code_mitigation'] = number_format($other_services_ccet_code_mitigation, 2, '.', '');
                } elseif ($sf == 'dev') {
                    $item['grand_total_mooe'] = (float) number_format($dev_total_mooe, 2, '.', '');
                    $item['grand_total_ps']   = (float) number_format($dev_total_ps, 2, '.', '');
                    $item['grand_total_co']   = (float) number_format($dev_total_co, 2, '.', '');
                    $item['grand_total_fe']   = (float) number_format($dev_total_fe, 2, '.', '');
                    $item['total_ccet_code_adaptation'] = (float) number_format($dev_ccet_code_adaptation, 2, '.', '');
                    $item['total_ccet_code_mitigation'] = (float) number_format($dev_ccet_code_mitigation, 2, '.', '');
                } elseif ($sf == 'ldrrmf') {
                    $item['grand_total_mooe'] = number_format($ldrrmf_total_mooe, 2, '.', '');
                    $item['grand_total_ps']   = number_format($ldrrmf_total_ps, 2, '.', '');
                    $item['grand_total_co']   = number_format($ldrrmf_total_co, 2, '.', '');
                    $item['grand_total_fe']   = number_format($ldrrmf_total_fe, 2, '.', '');
                    $item['total_ccet_code_adaptation'] = number_format($ldrrmf_ccet_code_adaptation, 2, '.', '');
                    $item['total_ccet_code_mitigation'] = number_format($ldrrmf_ccet_code_mitigation, 2, '.', '');
                } elseif ($sf == 'other') {
                    $item['grand_total_mooe'] = (float) number_format($other_total_mooe, 2, '.', '');
                    $item['grand_total_ps']   = (float) number_format($other_total_ps, 2, '.', '');
                    $item['grand_total_co']   = (float) number_format($other_total_co, 2, '.', '');
                    $item['grand_total_fe']   = (float) number_format($other_total_fe, 2, '.', '');
                    $item['total_ccet_code_adaptation'] = (float) number_format($other_ccet_code_adaptation, 2, '.', '');
                    $item['total_ccet_code_mitigation'] = (float) number_format($other_ccet_code_mitigation, 2, '.', '');
                } else {
                    $item['grand_total_mooe'] = (float) number_format(0, 2, '.', '');
                    $item['grand_total_ps']   = (float) number_format(0, 2, '.', '');
                    $item['grand_total_co']   = (float) number_format(0, 2, '.', '');
                    $item['grand_total_fe']   = (float) number_format(0, 2, '.', '');
                    $item['total_ccet_code_adaptation'] = (float) number_format(0, 2, '.', '');
                    $item['total_ccet_code_mitigation'] = (float) number_format(0, 2, '.', '');
                }


                return $item;

                // return $item;
            })
            ->values();
        // dd($final_strategies, $strategies);
        // dd($final_strategies->pluck('grand_total_mooe'), $final_strategies->pluck('grand_total_ps'), $final_strategies->pluck('grand_total_co'), $final_strategies->pluck('grand_total_fe'));
        // dd($final_strategies[78], $final_strategies[77]);

        // dd($final_strategies->pluck('aip_code'));
        return $final_strategies;
    }
    public function getAllPlans(Request $request, $year, $ssf_filter)
    {
        $data=RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject' => function ($query) {
                $query->whereHas('activity');
            },
            'activityProject.activity',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office',
            'paps.office.office',
            'gasPaps',
            'gasPaps.office',
            'gasPaps.office.office',
            'office'
        ])
            ->whereYear('date_start', $year)
            ->where('status', '1')
            ->where('aip_code','<>', NULL)
            ->orderBy('aip_code', 'asc')
            ->get();
        // $data = RevisionPlan::with([
        //     'strategyProject.strategy',
        //     'strategyProject.expected_output',
        //     'strategyProject.expected_outcome',
        //     'activityProject' => function ($query) {
        //         $query->whereHas('activity');
        //     },
        //     'activityProject.activity',
        //     'activityProject.expected_output',
        //     'activityProject.expected_outcome',
        //     'budget',
        //     'paps',
        //     'paps.office',
        //     'paps.office.office',
        //     'office'
        // ])
        //     ->where('status', '1')
        //     ->whereYear('date_start', $year)
        //     ->orderBy('aip_code', 'asc')
        //     ->get();
        // dd($data, $data1);
        // dd($data->pluck('id'), RevisionPlan::with([
        //     'strategyProject.strategy',
        //     'strategyProject.expected_output',
        //     'strategyProject.expected_outcome',
        //     'activityProject' => function ($query) {
        //         $query->whereHas('activity');
        //     },
        //     'activityProject.activity',
        //     'activityProject.expected_output',
        //     'activityProject.expected_outcome',
        //     'budget',
        //     'paps',
        //     'paps.office',
        //     'paps.office.office',
        //     'office'
        // ])->where('id',655)->where('status', '1')
        //     ->whereYear('date_start', $year)->first(), 'na filter siyua');
        // For GAS rows, replace paps with the matching ProgramAndProject by FFUNCCOD department_code.
        $data = $data->map(function ($plan) {
            if ($plan->scope !== 'GAS') {
                return $plan;
            }

            $ffunccod = FFUNCCOD::where('FFUNCCOD', $plan->FFUNCCOD)->first();
            if (!$ffunccod || !isset($ffunccod->department_code)) {
                return $plan;
            }

            $gasPaps = ProgramAndProject::with(['office'])
                ->where('department_code', $ffunccod->department_code)
                ->where('type', 'GAS')
                ->first();
            // if($plan->id==655){
            //     dd($gasPaps,$ffunccod, 'plan 655 before mapping');
            // }
            if ($gasPaps) {
                $plan->setRelation('paps', $gasPaps);
            }

            return $plan;
        });
        // dd($data->where('id',655)->first(), 'after mapping');
        // Apply paps filter only if the row's scope is not 'GAS'
        $data = $data->filter(function ($plan) use ($request, $ssf_filter) {
            // if ($plan->scope === 'GAS') {
            //     return true; // Include GAS scope without additional filter
            // }
            // if($plan->id==655){
            //     dd($plan, 'plan 655 before filter');
            // }
            // For non-GAS scope, apply the paps filter
            if (!$request->ssf_filter) {
                return true; // No filter specified
            }

            $paps = $plan->paps;
            if (!$paps) {
                return false;
            }

            if ($ssf_filter == 'gen_fund' || $ssf_filter == 'other' || $ssf_filter == 'dev' || $ssf_filter == 'ldrrmf') {
                return $paps->source_of_funds === $request->ssf_filter;
            }
            // else if($ssf_filter == 'Other Services'  || $ssf_filter == 'ldrrmf' ){
            //     return $paps->source_of_funds === 'ldrrmf' || $paps->sector === 'Other Services';

            // }
            else if (
                $ssf_filter == 'General Public Services Sector' ||
                $ssf_filter == 'Economic Services' ||
                $ssf_filter == 'Social Services Sector' ||
                $ssf_filter == 'Other Services'
            ) {
                // $ssf_filter == 'Other Services' ||
                return $paps->sector === $request->ssf_filter && $paps->source_of_funds === 'gen_fund';
            }

            return true;
        });
        // dd($data->pluck('aip_code'));
        // dd($data->where('id',655)->first(), 'after filtering');
        // dd($data->first(), $data[296], );
        return $data;
    }
    protected function getRevisionPlanSummary($plans)
    {
        return app(RevisionPlanSummaryService::class)->summarize($plans);
    }

    public function getSourceLabel($source)
    {
        $sources = [
            'gen_fund' => 'GF',
            'ldrrmf'   => 'LDRRMF',
            'other'    => 'Other Source',
            'dev'      => '20% Development Fund',
        ];

        return $sources[$source] ?? $source;
    }
    public function capitalOutlayObject($ids)
    {
        return ActivityProject::with([
            'revisionPlan',
            // 'revisionPlan.strategyProject.strategy',
            // 'revisionPlan.strategyProject.expected_output',
            // 'revisionPlan.strategyProject.expected_outcome',
            'activity',
            'expected_output',
            'expected_outcome',
            'revisionPlan.budget',
            'revisionPlan.gasPaps',
            'revisionPlan.gasPaps.office',
            'revisionPlan.gasPaps.office.office',
            'revisionPlan.paps',
            'revisionPlan.paps.office',
            'revisionPlan.paps.office.office',
            'revisionPlan.office'
        ])
            ->where(function ($queryBase) use ($ids) {
                $queryBase->where(function ($query) use ($ids) {
                    // $query->whereIn('project_id', $ids)
                    //     ->where(function ($q) {
                    //         $q->where('co_q1', '>', 0)
                    //             ->orWhere('co_q2', '>', 0)
                    //             ->orWhere('co_q3', '>', 0)
                    //             ->orWhere('co_q4', '>', 0);
                    //     });
                })
                    ->orWhere(function ($query) {
                        $query->whereHas('revisionPlan.paps', function ($qpaps) {
                            $qpaps->where('source_of_funds', 'dev')
                                ->orWhere('source_of_funds', 'other');
                        });
                    });
            })
            ->whereIn('project_id', $ids)
            ->where('is_active', 1)
            ->whereHas('activity')
            ->get();
    }
    public function retrievingCapitalOutlay($ccet, $cap_ob)
    {
        // dd($ids);
        $revs = $cap_ob
            ->map(function ($item) use ($ccet) {
                $plan = optional($item)->revisionPlan;

                $imp_office = optional(optional(optional($plan)->paps)->office)->office ?
                    optional(optional(optional(optional($plan)->paps)->office)->office)->short_name :
                    optional(optional(optional($plan)->paps)->office)->FFUNCTION;
                $total_mooe = optional($item)->mooe_q1 + optional($item)->mooe_q2 + optional($item)->mooe_q3 + optional($item)->mooe_q4;
                $total_ps = optional($item)->ps_q1 + optional($item)->ps_q2 + optional($item)->ps_q3 + optional($item)->ps_q4;
                $total_co = optional($item)->co_q1 + optional($item)->co_q2 + optional($item)->co_q3 + optional($item)->co_q4;
                $total_fe = optional($item)->fe_q1 + optional($item)->fe_q2 + optional($item)->fe_q3 + optional($item)->fe_q4;
                $total_all = $total_mooe + $total_ps + $total_co + $total_fe;
                $activityWithCcet = $item->ccet_code;
                $ccet_code_adaptation = 0;
                $ccet_code_mitigation = 0;
                if ($activityWithCcet) {
                    // Found at least one with a ccet_code
                    $ccetCode = $activityWithCcet;
                    if ($ccetCode) {
                        if (Str::startsWith($ccetCode, 'A')) {
                            $ccet_code_adaptation = $total_all;
                            $ccet_code_mitigation = 0;
                        } elseif (Str::startsWith($ccetCode, 'M')) {
                            $ccet_code_adaptation = 0;
                            $ccet_code_mitigation = $total_all;
                        } else {
                            $ccet_code_adaptation = 0;
                            $ccet_code_mitigation = 0;
                        }
                    }
                }
                $source_of_funds = $this->getSourceLabel(optional(optional($plan)->paps)->source_of_funds);

                $source = $this->set_source($source_of_funds);
                if (mb_strlen($source, 'UTF-8') < 25) {

                    $chars = preg_split('//u', $source, -1, PREG_SPLIT_NO_EMPTY);
                    $source = implode("\n", $chars);
                }
                // dd($plan);
                return [
                    'project_title' => optional(optional($item)->activity)->description,
                    'implementing_office' => $imp_office,
                    'expected_output' => collect($item->expected_output)
                        ->pluck('description')
                        ->filter()
                        ->map(fn($desc) => trim($desc))
                        ->implode("\n"),
                    'total_mooe' => $total_mooe,
                    'total_ps' => $total_ps,
                    'total_co' => $total_co,
                    'total_fe' => $total_fe,
                    'ccet_code' => optional($item)->ccet_code,
                    'ccet_code_mitigation' => $ccet_code_mitigation,
                    'ccet_code_adaptation' => $ccet_code_adaptation,
                    'aip_code' => optional($plan)->aip_code,
                    'source' => " ",
                    'ccet' => $ccet,
                    'year' => optional($plan)->year,
                    'id' => optional($plan)->id,
                    // 'source_of_funds' => optional(optional($plan)->paps)->source_of_funds,
                    'source_of_funds' => optional(optional($plan)->paps)->source_of_funds ? optional(optional($plan)->paps)->source_of_funds : optional(optional($plan)->gasPaps)->source_of_funds,
                    'sector' => optional(optional($plan)->paps)->sector ? optional(optional($plan)->paps)->sector : optional(optional($plan)->gasPaps)->sector,
                    // optional(optional($plan)->paps)->sector,
                    'level' => 2
                ];
            });

        return $revs;
    }
    public function retrievingCapitalOutlaytest($ids, $ccet)
    {
        // use Illuminate\Support\Facades\DB;
        // dd($ids, RevisionPlan());

        $rows = RevisionPlan::query()
            ->with([
                'activityProject.activity',
                'activityProject.expected_output',
                'office'
            ])
            ->join('activity_projects', 'revision_plans.id', '=', 'activity_projects.project_id')
            ->whereIn('revision_plans.id', $ids)
            // only activity projects with CO > 0
            ->whereRaw('
                (
                    COALESCE(activity_projects.co_q1,0) +
                    COALESCE(activity_projects.co_q2,0) +
                    COALESCE(activity_projects.co_q3,0) +
                    COALESCE(activity_projects.co_q4,0)
                ) > 0
            ')

            ->select(
                'revision_plans.*',
                'activity_projects.id as activity_project_id',
                'activity_projects.ccet_code',
                'activity_projects.co_q1',
                'activity_projects.co_q2',
                'activity_projects.co_q3',
                'activity_projects.co_q4'
            )

            ->get()

            ->map(function ($plan) use ($ccet) {

                $activityProject = $plan->activityProject
                    ->where('id', $plan->activity_project_id)
                    ->first();

                if (!$activityProject) {
                    return null;
                }

                /*
                |--------------------------------------------------------------------------
                | Activity Name / Description
                |--------------------------------------------------------------------------
                */

                $activity_name = optional($activityProject->activity)->name
                    ?? optional($activityProject->activity)->description
                    ?? '';

                $paps_title_desc = trim(
                    ($plan->project_title ?? '') .
                        (!empty($activity_name) ? ' - ' . $activity_name : '')
                );

                /*
                |--------------------------------------------------------------------------
                | Expected Outputs
                |--------------------------------------------------------------------------
                */

                $expected_outputs = collect($activityProject->expected_output)
                    ->map(function ($output) {

                        $target_total =
                            (float)($output->physical_q1 ?? 0) +
                            (float)($output->physical_q2 ?? 0) +
                            (float)($output->physical_q3 ?? 0) +
                            (float)($output->physical_q4 ?? 0);

                        return trim(
                            $target_total . ' - ' . ($output->description ?? '')
                        );
                    })
                    ->filter()
                    ->implode("\n");

                /*
                |--------------------------------------------------------------------------
                | Totals
                |--------------------------------------------------------------------------
                */

                $total_co =
                    (float)($activityProject->co_q1 ?? 0) +
                    (float)($activityProject->co_q2 ?? 0) +
                    (float)($activityProject->co_q3 ?? 0) +
                    (float)($activityProject->co_q4 ?? 0);

                $total_mooe = 0;
                $total_ps = 0;
                $total_fe = 0;

                /*
                |--------------------------------------------------------------------------
                | CCET
                |--------------------------------------------------------------------------
                */

                $ccetCode = $activityProject->ccet_code;

                $ccet_code_mitigation = 0;
                $ccet_code_adaptation = 0;

                if (!empty($ccetCode)) {

                    if (strtoupper(substr($ccetCode, 0, 1)) === 'M') {
                        $ccet_code_mitigation = $total_co;
                    } else {
                        $ccet_code_adaptation = $total_co;
                    }
                }

                /*
                |--------------------------------------------------------------------------
                | Program / Project Derived Fields
                |--------------------------------------------------------------------------
                */

                $imp_office = optional($plan)->implementing_office;

                $source = optional($plan)->source ?? '';

                $source_of_funds = optional($plan)->source_of_funds ?? '';

                $sector = optional($plan)->sector ?? '';

                /*
                |--------------------------------------------------------------------------
                | Return Row
                |--------------------------------------------------------------------------
                */

                return [

                    'project_title' => $paps_title_desc,

                    'implementing_office' => $imp_office
                        ? $imp_office
                        : optional(optional($plan)->office)->FFUNCTION,

                    'expected_output' => $expected_outputs,

                    'total_mooe' => $total_mooe,

                    'total_ps' => $total_ps,

                    'total_co' => $total_co,

                    'total_fe' => $total_fe,

                    'ccet_code' => $ccetCode,

                    'ccet_code_mitigation' => $ccet_code_mitigation,

                    'ccet_code_adaptation' => $ccet_code_adaptation,

                    'aip_code' => $plan->aip_code,

                    'source' => $source . "\n",

                    'ccet' => $ccet,

                    'year' => \Carbon\Carbon::parse($plan->date_start)->year,

                    'id' => $plan->id,

                    'source_of_funds' => $source_of_funds,

                    'sector' => $sector,
                ];
            })

            ->filter()
            ->values();
    }
    public function titleCaseTransform($text)
    {
        $paps_title = $text;

        if ($paps_title === mb_strtoupper($paps_title, 'UTF-8')) {

            // Convert to title case first
            $paps_title = mb_convert_case(mb_strtolower($paps_title, 'UTF-8'), MB_CASE_TITLE, 'UTF-8');

            // Words to keep lowercase (unless first word)
            $lowercaseWords = [
                'And',
                'Or',
                'Nor',
                'But',
                'For',
                'So',
                'Yet',
                'A',
                'An',
                'The',
                'Of',
                'In',
                'On',
                'At',
                'To',
                'By',
                'From',
                'With',
                'As',
                'Per',
                'Via',
                'Over',
                'Under',
                'Into',
                'Upon',
                'Off'
            ];

            $words = explode(' ', $paps_title);

            foreach ($words as $index => $word) {
                if ($index > 0 && in_array($word, $lowercaseWords)) {
                    $words[$index] = mb_strtolower($word, 'UTF-8');
                }
            }

            $paps_title = implode(' ', $words);
        }
        return $paps_title;
    }
    public function exportStrategiesOrig(Request $request)
    {
        // 👇 Copy your logic exactly as-is
        $strategies = [];
        $ccet = $request->ccet;

        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office',
            'paps.office.office'
        ])->get();

        foreach ($plans as $plan) {
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;
            if (!$strategy) continue;

            $strategyId = $strategy->id;
            $budget = $plan->budget;
            $source = count($budget) > 0 ? $budget[0]->source : '';

            $expected_outputs = collect($plan->activityProject)
                ->pluck('expected_output')
                ->filter()
                ->flatten(1)
                ->map(fn($output) => [
                    'target_budget_year' => (
                        ($output->physical_q1 ? floatval($output->physical_q1) : 0) +
                        ($output->physical_q2 ? floatval($output->physical_q2) : 0) +
                        ($output->physical_q3 ? floatval($output->physical_q3) : 0) +
                        ($output->physical_q4 ? floatval($output->physical_q4) : 0)
                    ),
                    'description' => $output->description ?? ''
                ])
                ->filter(fn($item) => !empty($item['description']))
                ->values();

            $total_mooe = $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount');
            $total_ps   = $budget->where('category', 'Personnel Services')->sum('amount');
            $total_co   = $budget->where('category', 'Capital Outlay')->sum('amount');
            $total_fe   = $budget->where('category', 'Financial Expenses')->sum('amount');
            $total_all  = $total_mooe + $total_ps + $total_co + $total_fe;

            $ccet_code_adaptation = 0;
            $ccet_code_mitigation = 0;
            $ccetCode = null;

            $activityWithCcet = collect($plan->activityProject)->firstWhere('ccet_code', '!=', null);

            if ($activityWithCcet) {
                $ccetCode = $activityWithCcet->ccet_code;
                if ($ccetCode) {
                    if (Str::startsWith($ccetCode, 'A')) {
                        $ccet_code_adaptation = $total_all;
                    } elseif (Str::startsWith($ccetCode, 'M')) {
                        $ccet_code_mitigation = $total_all;
                    }
                }
            }

            if (mb_strlen($source, 'UTF-8') < 25) {
                $chars = preg_split('//u', $source, -1, PREG_SPLIT_NO_EMPTY);
                $source = implode("\n", $chars);
            }

            $paps_title = $plan->project_title;
            $paps_desc  = optional($plan->paps)->MOV == "-" ? "" : optional($plan->paps)->MOV;
            $paps_title_desc = $paps_title . "\n\n" . $paps_desc;

            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'project_title' => $paps_title_desc,
                    'implementing_office' => optional(optional(optional($plan)->paps)->office)->office
                        ? optional(optional(optional(optional($plan)->paps)->office)->office)->short_name
                        : optional(optional(optional($plan)->paps)->office)->FFUNCTION,
                    'expected_output' => $expected_outputs,
                    'total_mooe' => $total_mooe,
                    'total_ps' => $total_ps,
                    'total_co' => $total_co,
                    'total_fe' => $total_fe,
                    'ccet_code' => $ccetCode,
                    'ccet_code_mitigation' => $ccet_code_mitigation,
                    'ccet_code_adaptation' => $ccet_code_adaptation,
                    'aip_code' => $plan->aip_code,
                    'source' => $source . "\n",
                    'ccet' => $ccet
                ];
            } else {
                $strategies[$strategyId]['expected_output'] = $strategies[$strategyId]['expected_output']
                    ->merge($expected_outputs)
                    ->unique('id')
                    ->values();
            }
        }

        foreach ($strategies as &$strategy) {
            $strategy['expected_output'] = $strategy['expected_output']->toArray();
        }

        $strategies = array_values($strategies);

        // ✅ Generate Excel file using Box/Spout
        $filePath = storage_path('app/public/strategies.xlsx');
        $writer = WriterEntityFactory::createXLSXWriter();
        $writer->openToFile($filePath);

        // Header style
        $headerStyle = (new StyleBuilder())->build();

        // Header row
        $headerRow = WriterEntityFactory::createRowFromArray([
            'Project Title',
            'Implementing Office',
            'Expected Outputs',
            'Total MOOE',
            'Total PS',
            'Total CO',
            'Total FE',
            'CCET Code',
            'Adaptation',
            'Mitigation',
            'AIP Code',
            'Source'
        ], $headerStyle);
        $writer->addRow($headerRow);

        // Data rows
        foreach ($strategies as $item) {
            $expectedOutputs = collect($item['expected_output'])
                ->pluck('description')
                ->implode(", ");

            $row = WriterEntityFactory::createRowFromArray([
                $item['project_title'],
                $item['implementing_office'],
                $expectedOutputs,
                $item['total_mooe'],
                $item['total_ps'],
                $item['total_co'],
                $item['total_fe'],
                $item['ccet_code'],
                $item['ccet_code_adaptation'],
                $item['ccet_code_mitigation'],
                $item['aip_code'],
                $item['source']
            ]);

            $writer->addRow($row);
        }

        $writer->close();

        return response()->download($filePath)->deleteFileAfterSend(true);
    }

    public function exportStrategies1(Request $request)
    {
        // 🔹 Example query — adjust table & column names to match your schema
        $strategies = DB::table('program_and_projects as p')
            ->leftJoin('expected_outputs as eo', 'p.id', '=', 'eo.project_id')
            ->leftJoin('revision_plans as rp', 'p.id', '=', 'rp.idpaps')
            ->select(
                'p.id',
                'p.project_title',
                'p.implementing_office',
                'p.total_mooe',
                'p.total_ps',
                'p.total_co',
                'p.total_fe',
                'p.ccet_code',
                'rp.adaptation as ccet_code_adaptation',
                'rp.mitigation as ccet_code_mitigation',
                'p.aip_code',
                'p.source',
                'eo.description as expected_output'
            )
            ->orderBy('p.id')
            ->get()
            ->groupBy('id'); // group outputs under each project

        // ✅ Create Excel file with BoxSpout
        $filePath = storage_path('app/public/strategies.xlsx');
        $writer = WriterEntityFactory::createXLSXWriter();
        $writer->openToFile($filePath);

        // 🔹 Header style
        $headerStyle = (new StyleBuilder())->build();

        // 🔹 Header row
        $headerRow = WriterEntityFactory::createRowFromArray([
            'Project Title',
            'Implementing Office',
            'Expected Output',
            'Total MOOE',
            'Total PS',
            'Total CO',
            'Total FE',
            'CCET Code',
            'Adaptation',
            'Mitigation',
            'AIP Code',
            'Source'
        ], $headerStyle);
        $writer->addRow($headerRow);

        // 🔹 Loop through grouped data
        foreach ($strategies as $projectId => $rows) {
            $first = $rows->first();
            $expectedOutputs = $rows->pluck('expected_output')->filter()->values();

            if ($expectedOutputs->isEmpty()) {
                $expectedOutputs = collect(['']);
            }

            foreach ($expectedOutputs as $index => $output) {
                if ($index === 0) {
                    $rowData = [
                        $first->project_title,
                        $first->implementing_office,
                        $output,
                        $first->total_mooe,
                        $first->total_ps,
                        $first->total_co,
                        $first->total_fe,
                        $first->ccet_code,
                        $first->ccet_code_adaptation,
                        $first->ccet_code_mitigation,
                        $first->aip_code,
                        $first->source
                    ];
                } else {
                    // blank other columns for additional expected outputs
                    $rowData = [
                        '',
                        '',
                        $output,
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ];
                }

                $writer->addRow(WriterEntityFactory::createRowFromArray($rowData));
            }
        }

        $writer->close();

        return response()->download($filePath)->deleteFileAfterSend(true);
    }



    public function exportStrategies(Request $request)
    {
        $strategies = [];
        $ccet = $request->ccet;

        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office',
            'paps.office.office'
        ])->get();

        foreach ($plans as $plan) {
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;
            if (!$strategy) continue;

            $strategyId = $strategy->id;
            $budget = $plan->budget;
            $source = count($budget) > 0 ? $budget[0]->source : '';

            $expected_outputs = collect($plan->activityProject)
                ->pluck('expected_output')
                ->filter()
                ->flatten(1)
                ->map(fn($output) => [
                    'target_budget_year' => (
                        ($output->physical_q1 ? floatval($output->physical_q1) : 0) +
                        ($output->physical_q2 ? floatval($output->physical_q2) : 0) +
                        ($output->physical_q3 ? floatval($output->physical_q3) : 0) +
                        ($output->physical_q4 ? floatval($output->physical_q4) : 0)
                    ),
                    'description' => $output->description ?? ''
                ])
                ->filter(fn($item) => !empty($item['description']))
                ->values();

            $total_mooe = $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount');
            $total_ps   = $budget->where('category', 'Personnel Services')->sum('amount');
            $total_co   = $budget->where('category', 'Capital Outlay')->sum('amount');
            $total_fe   = $budget->where('category', 'Financial Expenses')->sum('amount');
            $total_all  = $total_mooe + $total_ps + $total_co + $total_fe;

            $ccet_code_adaptation = 0;
            $ccet_code_mitigation = 0;
            $ccetCode = null;

            $activityWithCcet = collect($plan->activityProject)->firstWhere('ccet_code', '!=', null);

            if ($activityWithCcet) {
                $ccetCode = $activityWithCcet->ccet_code;
                if ($ccetCode) {
                    if (Str::startsWith($ccetCode, 'A')) {
                        $ccet_code_adaptation = $total_all;
                    } elseif (Str::startsWith($ccetCode, 'M')) {
                        $ccet_code_mitigation = $total_all;
                    }
                }
            }

            if (mb_strlen($source, 'UTF-8') < 25) {
                $chars = preg_split('//u', $source, -1, PREG_SPLIT_NO_EMPTY);
                $source = implode("\n", $chars);
            }

            $paps_title = $plan->project_title;
            $paps_desc  = optional($plan->paps)->MOV == "-" ? "" : optional($plan->paps)->MOV;
            $paps_title_desc = $paps_title . "\n\n" . $paps_desc;

            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'project_title' => $paps_title_desc,
                    'implementing_office' => optional(optional(optional($plan)->paps)->office)->office
                        ? optional(optional(optional(optional($plan)->paps)->office)->office)->short_name
                        : optional(optional(optional($plan)->paps)->office)->FFUNCTION,
                    'expected_output' => $expected_outputs,
                    'total_mooe' => $total_mooe,
                    'total_ps' => $total_ps,
                    'total_co' => $total_co,
                    'total_fe' => $total_fe,
                    'ccet_code' => $ccetCode,
                    'ccet_code_mitigation' => $ccet_code_mitigation,
                    'ccet_code_adaptation' => $ccet_code_adaptation,
                    'aip_code' => $plan->aip_code,
                    'source' => $source . "\n",
                    'ccet' => $ccet
                ];
            } else {
                $strategies[$strategyId]['expected_output'] = $strategies[$strategyId]['expected_output']
                    ->merge($expected_outputs)
                    ->unique('description')
                    ->values();
            }
        }

        foreach ($strategies as &$strategy) {
            $strategy['expected_output'] = $strategy['expected_output']->toArray();
        }

        $strategies = array_values($strategies);

        // ✅ Generate Excel file using Box/Spout
        $filePath = storage_path('app/public/strategies.xlsx');
        $writer = WriterEntityFactory::createXLSXWriter();
        $writer->openToFile($filePath);

        // Header style
        $headerStyle = (new StyleBuilder())->build();

        // Header row
        // Header row (reordered)
        $headerRow = WriterEntityFactory::createRowFromArray([
            'AIP REFERENCE CODE',
            'PROGRAM/PROJECT/ACTIVITY TITLE',
            'IMPLEMENTING OFFICE/DEPARTMENT',
            'EXPECTED OUTPUTS',
            'FUNDING SOURCE',
            'MOOE',
            'PS',
            'CO',
            'FE',
            'Climate Change Adaptation',
            'Climate Change Mitigation',
            'Climate Change Topology Code',
        ], $headerStyle);
        $writer->addRow($headerRow);

        // ✅ Data rows (flattened expected outputs)
        foreach ($strategies as $item) {
            $expectedOutputs = collect($item['expected_output']);

            if ($expectedOutputs->isEmpty()) {
                // If there are no expected outputs, just print one row
                $row = WriterEntityFactory::createRowFromArray([
                    $item['aip_code'],
                    $item['project_title'],
                    $item['implementing_office'],
                    '',
                    $item['source'],
                    $item['total_mooe'],
                    $item['total_ps'],
                    $item['total_co'],
                    $item['total_fe'],
                    $item['ccet_code_adaptation'],
                    $item['ccet_code_mitigation'],
                    $item['ccet_code'],
                ]);
                $writer->addRow($row);
                continue;
            }

            $first = true;
            foreach ($expectedOutputs as $output) {
                if ($first) {
                    $row = WriterEntityFactory::createRowFromArray([
                        $item['aip_code'],
                        $item['project_title'],
                        $item['implementing_office'],
                        $output['description'] ?? '',
                        $item['source'],
                        $item['total_mooe'],
                        $item['total_ps'],
                        $item['total_co'],
                        $item['total_fe'],
                        $item['ccet_code_adaptation'],
                        $item['ccet_code_mitigation'],
                        $item['ccet_code'],
                    ]);
                    $first = false;
                } else {
                    // Subsequent expected outputs → only Expected Output column filled
                    $row = WriterEntityFactory::createRowFromArray([
                        '',
                        '',
                        '',
                        $output['description'] ?? '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ]);
                }
                $writer->addRow($row);
            }
        }

        $writer->close();
        /*$headerRow = WriterEntityFactory::createRowFromArray([
            'Project Title',
            'Implementing Office',
            'Expected Output',
            'Total MOOE',
            'Total PS',
            'Total CO',
            'Total FE',
            'CCET Code',
            'Adaptation',
            'Mitigation',
            'AIP Code',
            'Source'
            ], $headerStyle);
            $writer->addRow($headerRow);

            // ✅ Data rows (flattened expected outputs)
            foreach ($strategies as $item) {
                $expectedOutputs = collect($item['expected_output']);

                if ($expectedOutputs->isEmpty()) {
                    // If there are no expected outputs, just print one row
                    $row = WriterEntityFactory::createRowFromArray([
                        $item['project_title'],
                        $item['implementing_office'],
                        '',
                        $item['total_mooe'],
                        $item['total_ps'],
                        $item['total_co'],
                        $item['total_fe'],
                        $item['ccet_code'],
                        $item['ccet_code_adaptation'],
                        $item['ccet_code_mitigation'],
                        $item['aip_code'],
                        $item['source']
                    ]);
                    $writer->addRow($row);
                    continue;
                }

                $first = true;
                foreach ($expectedOutputs as $output) {
                    if ($first) {
                        $row = WriterEntityFactory::createRowFromArray([
                            $item['project_title'],
                            $item['implementing_office'],
                            $output['description'] ?? '',
                            $item['total_mooe'],
                            $item['total_ps'],
                            $item['total_co'],
                            $item['total_fe'],
                            $item['ccet_code'],
                            $item['ccet_code_adaptation'],
                            $item['ccet_code_mitigation'],
                            $item['aip_code'],
                            $item['source']
                        ]);
                        $first = false;
                    } else {
                        // Subsequent expected outputs → only this column filled
                        $row = WriterEntityFactory::createRowFromArray([
                            '', '', $output['description'] ?? '', '', '', '', '', '', '', '', '', ''
                        ]);
                    }
                    $writer->addRow($row);
                }
            }

            $writer->close();
        */
        return response()->download($filePath)->deleteFileAfterSend(true);
    }
    protected function set_source($source)
    {
        $source = trim($source ?? ''); // make sure it's a string

        // Normalize the case for easier matching
        $normalized = strtoupper($source);

        // 1️⃣ General Fund
        if (str_contains($normalized, 'GENERAL FUND') || $normalized === 'GF') {
            $source = 'GF';
        }
        // 2️⃣ LDRRMF (and variants)
        elseif (
            str_contains($normalized, 'LDRRMF') ||
            str_contains($normalized, 'DISASTER') ||
            str_contains($normalized, 'RISK REDUCTION')
        ) {
            $source = 'LDRRMF';
        }
        // 3️⃣ DF (and variants)
        elseif (
            str_contains($normalized, 'DEVELOPMENT FUND') ||
            str_contains($normalized, '20% DF') ||
            $normalized === 'DF'
        ) {
            $source = 'DF';
        }
        // 4️⃣ Everything else
        else {
            $source = 'Other Sources';
        }
        return $source;
    }
    public function print_aip2(Request $request)
    {
        $strategies = [];
        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office'
        ])->get();

        foreach ($plans as $plan) {
            // dd(optional($plan)->strategyProject[0]);
            // dd($plan);
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;
            // dd($strategy);
            if (!$strategy) {
                continue;
            }

            $strategyId = $strategy->id;

            // Initialize if not yet in array
            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    // 'strategy_desc' => $strategy->description,
                    'project_title' => $plan->project_title,
                    'implementing_office' => optional(optional(optional(optional($plan))->paps)->office)->FFUNCTION,
                    'activities' => [],
                ];
                // dd($strategy);
            }

            // For each related activity under this plan
            if ($plan->activityProject) {
                $budget = $plan->budget;
                // dd( optional($plan)->activityProject->first());
                $activity = optional(optional($plan)->activityProject->first())->activity;
                // dd($activity);
                $strategies[$strategyId]['activities'][] = [
                    // 'activity_desc' => optional($activity)->description,
                    'expected_output' => optional($plan->activityProject->first())->expected_output,
                    'total_mooe' => $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount'),
                    'total_ps' => $budget->where('category', 'Personnel Services')->sum('amount'),
                    'total_co' => $budget->where('category', 'Capital Outlay')->sum('amount'),
                    'total_fe' => $budget->where('category', 'Financial Expenses')->sum('amount'),
                ];
            }
        }

        // Optional: Re-index the array if needed
        return array_values($strategies);
        // });

    }
    public function get_strategies(Request $request, $idrevplan)
    {
        $strategies = [];
        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget'
        ])
            ->where('id', $idrevplan)
            ->get();

        foreach ($plans as $plan) {
            // dd(optional($plan)->strategyProject[0]);
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;
            // dd($strategy);
            if (!$strategy) {
                continue;
            }

            $strategyId = $strategy->id;

            // Initialize if not yet in array
            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'strategy_desc' => $strategy->description,
                    'activities' => [],
                ];
                // dd($strategy);
            }

            // For each related activity under this plan
            if ($plan->activityProject) {
                $budget = $plan->budget;
                // dd( optional($plan)->activityProject->first());
                $activity = optional(optional($plan)->activityProject->first())->activity;
                // dd($activity);
                $strategies[$strategyId]['activities'][] = [
                    'activity_desc' => optional($activity)->description,
                    'expected_output' => optional($plan->activityProject->first())->expected_output,
                    'total_mooe' => $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount'),
                    'total_ps' => $budget->where('category', 'Personnel Services')->sum('amount'),
                    'total_co' => $budget->where('category', 'Capital Outlay')->sum('amount'),
                    'total_fe' => $budget->where('category', 'Financial Expenses')->sum('amount'),
                ];
            }
        }

        // Optional: Re-index the array if needed
        return array_values($strategies);
        // });

    }
    protected function strategy_based($id)
    {
        return RevisionPlan::where('id', $id)
            ->where('is_strategy_based', 1)
            ->get();
    }
    protected function activity_based($id)
    {
        return RevisionPlan::where('id', $id)
            ->where('is_strategy_based', 0)
            ->get();
    }

    public function ipp(Request $request)
    {
        $revplan = RevisionPlan::with([
            // 'teamPlans',
            // 'monitoringAndEvaluations',
            // 'riskManagements',
            // 'signatories',
            'hgdgScores',
            'paps.office',
            'checklist'
        ])
            ->where('id', $request->id)
            ->get();
        $amount = $this->getActivityTotal($request->id);
        $proposed_budget = $this->getTotalBudgetRequirements($request->id);

        // dd($amount);

        $revplan = $revplan->map(function ($item) use ($amount, $proposed_budget) {
            $totalScore = $item->hgdg_score;
            // hgdgScores->sum('score');
            // dd($item);
            // dd($totalScore);

            // ********************************************************************************
            $gad_attributed = 0;
            $tot_rounded = round($totalScore, 2);
            $year = Carbon::parse($item->date_start)->year;
            $gad_attributed = $amount * ($tot_rounded / 20);
            // dd($item);
            // if ($item->type === 'p' && intval($year) < 2027) {

            //     // old rule
            //     $gad_attributed = $amount * ($tot_rounded / 20);

            // } else {
            //     dd($item);
            //     // new rule (score brackets)
            //     if ($totalScore <= 3.9) {
            //         $gad_attributed = $amount * 0;
            //     } elseif ($totalScore >= 4 && $totalScore <= 7.9) {
            //         $gad_attributed = $amount * 0.25;
            //     } elseif ($totalScore >= 8 && $totalScore <= 14.9) {
            //         $gad_attributed = $amount * 0.5;
            //     } elseif ($totalScore >= 15 && $totalScore <= 19.9) {
            //         $gad_attributed = $amount * 0.75;
            //     } elseif ($totalScore == 20) {
            //         $gad_attributed = $amount;
            //     }
            // }
            // dd($totalScore, $gad_attributed);
            // optional: round to 2 decimals
            $gad_attributed = number_format($gad_attributed, 2);
            if ($totalScore <= 3.9) {
                $gad_attributed = $amount * 0;
            }
            $tot_rounded = round($totalScore, 2);
            // $data = Signatory::where('revision_plan_id', $request->revision_plan_id)->get();
            $signatories = $this->getSignatories($item->id);
            // dd($signatories);
            // $rationale = html_entity_decode($item->rationale, ENT_QUOTES | ENT_HTML5);
            $rationale = $item->rationale;

            // Optional but recommended: strip unsupported tags
            // $rationale = strip_tags($rationale, '<p><br><b><strong><i><em><u>');
            $rationale = preg_replace('/<br\s*\/?>/i', "\n\n", $rationale);
            $rationale = preg_replace('/class="ql-align-justify"/', '', $rationale);

            $rationale = preg_replace('/align="justify"/', '', $rationale);

            $rationale = preg_replace('/style="text-align:\s*justify;?"/', '', $rationale);

            $rationale = $this->quillToJasperText($item->rationale);
            $partnership = $item->partnership ? html_entity_decode($item->partnership, ENT_QUOTES | ENT_HTML5) : '';
            $partnership = strip_tags($partnership, '<p><br><b><strong><i><em><u>');
            $partnership = preg_replace('/class="ql-align-justify"/', '', $partnership);
            $partnership = preg_replace('/align="justify"/', '', $partnership);
            $partnership = preg_replace('/style="text-align:\s*justify;?"/', '', $partnership);
            $date_start = Carbon::parse($item->date_start)->format('F Y');
            $date_end = Carbon::parse($item->date_end)->format('F Y');
            $tot = intval($item->beneficiary_male) + intval($item->beneficiary_female);

            // dd($item->checklist);
            return [
                'id' => $item->id,
                'idpaps' => $item->idpaps,
                'idmfo' => $item->idmfo,
                'status' => $item->status,
                'program_id' => $item->program_id,
                'agency_name' => $item->agency_name,
                'FFUNCCOD' => $item->FFUNCCOD,
                'office' => optional(optional($item->paps)->office)->FFUNCTION ?? '',
                'year_period' => ($item->year_period && $item->year_period != 0) ? $item->year_period
                    : date('Y', strtotime($item->date_start)),
                'scope' => $item->scope,
                'aip_code' => $item->aip_code,
                'project_title' => $item->project_title,
                'project_location' => $item->project_location,
                'list_of_lgu_covered' => $item->list_of_lgu_covered,
                'date_start' => $date_start,
                'date_end' => $date_end,
                'beneficiary_male' => number_format($item->beneficiary_male, 0),
                'beneficiary_female' => number_format($item->beneficiary_female, 0),
                'baseline_male' => number_format($item->baseline_male, 0),
                'baseline_female' => number_format($item->baseline_female, 0),
                'baseline_total' => number_format($tot, 0),
                'data_source' => $item->data_source,
                'amount' => number_format($amount, 2),
                // 'proposed_budget' => $proposed_budget,
                // 'attributed_amount' => $gad_attributed,
                // 'proposed_budget' => number_format($proposed_budget, 2, '.', ','),
                'proposed_budget' => number_format((float) str_replace(',', '', $proposed_budget), 2, '.', ','),
                'attributed_amount' => number_format((float) str_replace(',', '', $gad_attributed), 2, '.', ','),
                'checklist_id' => optional(optional($item)->checklist)->box_number . '. ' . optional(optional($item)->checklist)->sector,
                'hgdg_score' => $tot_rounded,
                'hgdg_percent' => $item->hgdg_percent,
                // 'rationale' => '<p align="justify">' . e($item->rationale) . '</p>',
                // 'rationale' => '<p style="text-align: justify;">' . $rationale . '</p>',
                'rationale' => $rationale,
                'objective' => $item->objective,
                // '<p style="text-align: justify;">' .trim($rationale = $this->quillToJasperText($item->objective)). '</p>',
                'beneficiaries' => $item->beneficiaries,
                'implementing_team' => $item->implementing_team,
                'implementing_teams' => $item->teamPlans,
                'partnership' => $partnership,
                'monitoring' => $item->monitoring,
                'monitoring_and_evaluations' => $item->monitoringAndEvaluations,
                'risk_management' => $item->risk_management,
                'risk_managements' => $item->riskManagements,
                'version' => $item->version,
                'type' => $item->type,
                'final' => $item->final,
                'supplemental' => $item->supplemental,
                'user_id' => $item->user_id,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'is_strategy_based' => $item->is_strategy_based,
                'is_activity_based' => $item->is_activity_based,
                'breakdown_by_expected_output' => $item->breakdown_by_expected_output,
                // Merge all signatory fields directly at top level
                // ...$this->getSignatories($item->id),
                // 'office' => optional(optional($item)->paps)->office,
                'total_implementation' => $this->getActivityTotal($item->id),
                'budget_total' => floatval($this->getTotalBudgetRequirements($item->id)),
                'name_prepared'    => $signatories['name_prepared'] ?? null,
                'position_prepared' => $signatories['position_prepared'] ?? null,
                'acted_prepared'   => $signatories['acted_prepared'] ?? null,
                'name_noted'    => $signatories['name_noted'] ?? null,
                'position_noted' => $signatories['position_noted'] ?? null,
                'acted_noted'   => $signatories['acted_noted'] ?? null,
                'name_reviewed'    => $signatories['name_reviewed'] ?? null,
                'position_reviewed' => $signatories['position_reviewed'] ?? null,
                'acted_reviewed'   => $signatories['acted_reviewed'] ?? null,
                'name_recommending_approval'    => $signatories['name_recommending_approval'] ?? null,
                'position_recommending_approval' => $signatories['position_recommending_approval'] ?? null,
                'acted_recommending_approval'   => $signatories['acted_recommending_approval'] ?? null,
                'name_approved'    => $signatories['name_approved'] ?? null,
                'position_approved' => $signatories['position_approved'] ?? null,
                'acted_approved'   => $signatories['acted_approved'] ?? null,

            ];
        });
        // $signatories = $this->getSignatories($request->id);
        // $revplanArray = $revplan->toArray();
        // $revplanArray = $revplanArray[0] ?? [];
        // $result = array_merge($revplanArray, $signatories);
        return $revplan;
        // $sigs= $this->getSignatories($request->id);
        // return $revplan->concat($sigs);
    }



    public function lbpform4(Request $request)
    {
        $dept_code = $request->department_code;
        $currentYear = $request->year;

        // dd($dept_code);
        $data = RevisionPlan::with([
            'paps:id,paps_desc,idmfo,aip_code,department_code,FFUNCCOD',
            'paps.MFO:id,mfo_desc',
            'activityProject.expected_output',
        ])
            ->whereHas('paps', function ($query) use ($dept_code) {
                $query->where('department_code', $dept_code);
            })
            ->whereYear('date_start', $currentYear)
            ->where('status', 1)
            ->select(
                'id',
                'project_title',
                'idpaps',
                'date_start',
                'version',
                'status',
                'scope'
            )
            ->get();

        if ($data->isEmpty()) {
            return response()->json([
                'message' => 'Revision Plan not found'
            ], 404);
        }

        $result = $data->map(function ($plan) {

            // ACTIVITIES
            $activities = $plan->activityProject->map(function ($activity) {

                return [
                    'activity_project_id' => $activity->id,
                    'activity_name'       => $activity->activity_name,

                    'expected_outputs'    => $activity->expected_output->map(function ($output) {

                        $totalTarget =
                            (float) $output->physical_q1 +
                            (float) $output->physical_q2 +
                            (float) $output->physical_q3 +
                            (float) $output->physical_q4;

                        return [
                            'id' => $output->id,
                            'description' =>
                            $output->description .
                                "\n\nTotal Target: " . $totalTarget,
                            'total_target' => $totalTarget,
                        ];
                    })->values(),
                ];
            })->values();

            // BUDGET TOTALS (per revision plan)
            $budgetTotals = BudgetRequirement::where('revision_plan_id', $plan->id)
                ->selectRaw("
                SUM(CASE WHEN category = 'Personnel Services' THEN amount ELSE 0 END) as PS,
                SUM(CASE WHEN category = 'Maintenance, Operating, and Other Expenses' THEN amount ELSE 0 END) as MOOE,
                SUM(CASE WHEN category = 'Capital Outlay' THEN amount ELSE 0 END) as CO
            ")
                ->first();

            return [
                'rev_id'        => $plan->id,
                'project_title' => $plan->project_title,
                'idpaps'        => $plan->idpaps,
                'date_start'    => $plan->date_start,
                'version'       => $plan->version,
                'status'        => $plan->status,
                'scope'         => $plan->scope,


                // PAPS
                'paps_desc'     => $plan->paps->paps_desc ?? null,
                'idmfo'         => $plan->paps->idmfo ?? null,
                'aip_code'      => $plan->paps->aip_code ?? null,
                'FFUNCCOD'      => $plan->paps->FFUNCCOD ?? null,
                'department_code' => $plan->paps->department_code ?? null,


                // MFO
                'mfo_desc' => ($plan->scope === 'GAS')
                    ? 'General Administrative Services'
                    : ($plan->paps->MFO->mfo_desc ?? null),

                // Budget
                'PS'   => number_format((float) $budgetTotals->PS, 2, '.', ','),
                'MOOE' => number_format((float) $budgetTotals->MOOE, 2, '.', ','),
                'CO'   => number_format((float) $budgetTotals->CO, 2, '.', ','),

                // Activities
                'activities'    => $activities,
            ];
        });

        return response()->json($result);
    }
    public function quillToJasperText($html)
    {
        // Remove unwanted Quill alignment attributes first
        $html = preg_replace('/class="ql-align-justify"/', '', $html);
        $html = preg_replace('/align="justify"/', '', $html);
        $html = preg_replace('/style="text-align:\s*justify;?"/', '', $html);

        // Convert <br> to double line breaks
        $html = preg_replace('/<br\s*\/?>/i', "\n\n", $html);

        // Replace images with a large blank gap so Jasper has room for the image area
        $html = preg_replace('/<img[^>]*>/i', "<p forecolor='white'>.</p><p forecolor='white'>.</p><p forecolor='white'>.</p><p forecolor='white'>.</p><p forecolor='white'>.</p>" . str_repeat(' ', 400) . "</p>\n\n", $html);
        // $html = preg_replace('/<img[^>]*>/i', '<div style="height: 200px;"></div>', $html);


        // Convert closing paragraphs to double line breaks
        $html = preg_replace('/<\/p>/', "\n\n", $html);

        // Remove all remaining HTML tags
        $text = strip_tags($html);

        // Decode HTML entities (&nbsp;, etc.)
        $text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5);

        // Clean excessive spaces/newlines
        $text = preg_replace("/\n{3,}/", "\n\n", $text);

        return trim($text);
    }
    public function getSignatories($id)
    {
        $empty = [];

        // $data = Signatory::where('revision_plan_id', $id)->get()->distinct('acted');
        $data = Signatory::where('revision_plan_id', $id)
            ->get()
            ->groupBy('acted')
            ->map(function ($group) {
                return $group->first(); // take only the first entry per 'acted' type
            });

        if ($data->isEmpty()) {
            return $empty;
        }

        // Custom order sequence
        $order = [
            'Prepared',
            'Reviewed',
            'Noted',
            'Recommending Approval',
            'Approved',
            'As to AIP Inclusion',
            'As to AIP Appropriation',
        ];

        // Sort based on custom order
        $sorted = $data->sortBy(function ($item) use ($order) {
            return array_search($item->acted, $order);
        });

        $final = [];

        foreach ($sorted as $item) {

            // Transform acted → lowercase_with_underscores
            $acted_key = strtolower(str_replace(' ', '_', $item->acted));

            $final["name_{$acted_key}"]     = $item->name;
            $final["position_{$acted_key}"] = $item->position;
            $final["acted_{$acted_key}"]    = $item->acted;
        }

        return $final;
    }
    public function getActivityTotal($idrev)
    {
        // $activityProjects = ActivityProject::with([
        //     'activity',
        //     'expected_output',
        //     'expected_outcome'
        // ])
        //     ->where('project_id', $idrev)
        //     ->whereHas('activity', function ($query) {
        //         // use ($request)
        //         // dd($request->strategy_id);
        //         // $query->where('strategy_id', $request->strategy_id);
        //     })
        //     ->orderBy('activity_id', 'asc')
        //     ->where('is_active', '1')

        //     // ->orderByRaw('CAST(seq_no AS UNSIGNED) ASC')  // numeric sort
        //     // ->orderBy('created_at', 'ASC')                // tie-breaker
        //     ->get();
        $total = ActivityProject::with([
            'activity'
        ])->where('project_id', $idrev)
            ->select(
                'id',
                'ps_q1',
                'ps_q2',
                'ps_q3',
                'ps_q4',
                'mooe_q1',
                'mooe_q2',
                'mooe_q3',
                'mooe_q4',
                'co_q1',
                'co_q2',
                'co_q3',
                'co_q4',
                'fe_q1',
                'fe_q2',
                'fe_q3',
                'fe_q4'
            )
            ->where('is_active', '1')
            ->whereHas('activity', function ($q) {
                $q->whereNull('deleted_at');   // activity must NOT be soft deleted
            })
            ->get();

        $all_total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
            $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
            $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        // dd($total, $activityProjects, $all_total);
        return $all_total;
    }
    public function list(Request $request)
    {
        $filter = $request->all;
        $budget_controller = new BudgetRequirementController($this->budget);
        // Determine the year
        $year = $request->has('year')
            ? $request->year
            : date('Y');
        // mao ni dapat, temporary lang na sa taas: date('Y') + 1
        // dd($year);
        // dd($budget_controller);
        $data = RevisionPlan::with(['budget', 'paps', 'paps.office'])
            // ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            // ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            // ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
            // ->leftJoin(DB::raw('budget_requirements'), 'budget_requirements.revision_plan_id', '=', 'revision_plans.id')
            ->whereHas('budget', function ($query) {
                $query->select(DB::raw('revision_plan_id'))
                    ->groupBy('revision_plan_id')
                    ->havingRaw('SUM(amount) > 0');
            })
            ->where('status', '>=', '0')
            // ->when($request->source == 'rev_app', function ($query) {
            // dd("rev app ang source");
            // $query->where('status', '>=', '0');
            // })
            ->when($request->office, function ($query) use ($request) {
                $query->whereHas('paps', function ($query_inner) use ($request) {
                    $query_inner->where('FFUNCCOD', $request->office);
                });
            })
            ->when($request->sector, function ($query) use ($request) {
                // $query->where('sector', $request->sector);
                $query->whereHas('paps', function ($query_inner) use ($request) {
                    $query_inner->where('sector', $request->sector);
                });
            })
            ->where('project_title', 'LIKE', '%' . $request->search . '%')
            // ->whereHas('paps', function ($query) use ($request, $source, $dept_id) {
            //     $query->when($source == 'budget', function ($query) use ($dept_id) {
            //         $query->where('department_code', $dept_id);
            //     });
            //     // $query->whereHas('paps.office', function($query_o)use($request){
            //     //     $query_o->when($request->FFUNCCOD, function ($query) use ($request) {
            //     //         $query->where('ff.FFUNCCOD', $request->FFUNCCOD);
            //     //     });
            //     // });
            // })
            // ->whereHas('paps.office', function($query){
            //     $query->orderBy('FFUNCTION');
            // })
            ->whereYear('date_start', $year)
            ->where('type', 'p')
            ->get(); // <- Pagination
        // dd($data);
        return $data->map(function ($item) use ($budget_controller) {
            $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)
                ->where('table_name', 'revision_plans')
                ->count();

            $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                ->sum('amount');

            $imp_amount = 0.00;
            $co_total = 0.00;
            $fe_total = 0.00;
            $mooe_total = 0.00;
            $ps_total = 0.00;
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
                $co_total = $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
                $fe_total = $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                $mooe_total = $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4');
                $ps_total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4');
            }
            // dd($item->FFUNCTION);
            // dd($item);
            $budget_val = is_numeric(str_replace(',', '', $budgetary_requirement))
                ? floatval(str_replace(',', '', $budgetary_requirement))
                : 0;

            $imp_val = is_numeric(str_replace(',', '', $imp_amount))
                ? floatval(str_replace(',', '', $imp_amount))
                : 0;

            $warning = '';

            if ($budget_val !== $imp_val) {
                if ($budget_val > $imp_val) {
                    $warning = 'Workplan Total is GREATER than the total in Budgetary Requirements';
                } else {
                    $warning = 'Workplan Total is LESS than the total in Budgetary Requirements';
                }
            }
            // dd($item->paps);
            // $item->paps->sector
            return [
                'FFUNCTION' => optional(optional($item->paps)->office)->FFUNCTION,
                // 'FFUNCCOD'=>$item->paps->office->FFUNCCOD,
                'id' => $item->id,
                'project_title' => $item->project_title,
                'type' => $item->type,
                'version' => $item->version,
                'budget_sum' => $budgetary_requirement,
                'imp_amount' => $imp_amount,
                'co_total' => $co_total,
                'fe_total' => $fe_total,
                'mooe_total' => $mooe_total,
                'ps_total' => $ps_total,
                'idpaps' => $item->idpaps,
                'status' => $item->status,
                'warning' => $warning,
                'sector' => optional(optional($item)->paps)->sector
            ];
        });
    }

    public function workplan(Request $request)
    {
        // return "james"; office, project name source of fund budget allocation
        if ($request->id) {
            $revision = RevisionPlan::with(['paps', 'paps.office', 'budget', 'signatories'])->where('id', $request->id)->first();
            // dd($revision);
            // dd($request->id);
            $budget_total = $this->getTotalBudget($revision);
            $activities = ActivityProject::with([
                'expected_output',
                'expected_outcome',
                'activity',
                'activity.strat',
                'activity.strat.strategyProject' => function ($query) use ($revision) {
                    $query->where('project_id', $revision->id);
                },
            ])->where('project_id', $revision->id)
                // Activity must exist and NOT be soft-deleted
                ->whereHas('activity', function ($q) {
                    $q->whereNull('deleted_at')
                        ->whereHas('strat', function ($query) {
                            $query->whereNull('deleted_at')
                                ->whereHas('strategyProject', function ($q) {
                                    $q->where('is_active', "1");
                                });
                        });
                })

                // Strategy must exist and NOT be soft-deleted
                ->whereHas('activity.strat', function ($q) {
                    $q->whereNull('deleted_at');
                })
                ->get()
                ->map(function ($item) use ($revision, $budget_total) {
                    // dd($revision->paps->office->FFUNCTION);
                    // dd($revision->budget[0]->source);
                    // dd($revision->signatories);
                    // dd($item);

                    // if($item->id==254){
                    //     dd($item);
                    // }
                    $get = fn($type) => optional($revision->signatories->firstWhere('acted', $type));
                    $signatories = isset($revision) ? $revision->signatories : null;
                    // dd($signatories);
                    return [
                        'id'               => $item->id,
                        'project_name' => $revision->project_title ?? '',
                        'source_of_fund' => $revision->budget[0]->source ?? '',
                        'office' => optional(optional($revision->paps)->office)->FFUNCTION ?? '',
                        'activity'         => $item->activity ? $item->activity->description : "",
                        'activity_id'      => $item->activity_id,
                        'project_id'       => $item->project_id,
                        'target_indicator' => $item->target_indicator,
                        'date_from'        => $item->date_from,
                        'date_to'          => $item->date_to,
                        'budget_total'     => $budget_total,
                        // =====================
                        // PS
                        // =====================
                        'ps_q1' => $this->money($item->ps_q1),
                        'ps_q2' => $this->money($item->ps_q2),
                        'ps_q3' => $this->money($item->ps_q3),
                        'ps_q4' => $this->money($item->ps_q4),

                        // =====================
                        // MOOE
                        // =====================
                        'mooe_q1' => $this->money($item->mooe_q1),
                        'mooe_q2' => $this->money($item->mooe_q2),
                        'mooe_q3' => $this->money($item->mooe_q3),
                        'mooe_q4' => $this->money($item->mooe_q4),

                        // =====================
                        // CO
                        // =====================
                        'co_q1' => $this->money($item->co_q1),
                        'co_q2' => $this->money($item->co_q2),
                        'co_q3' => $this->money($item->co_q3),
                        'co_q4' => $this->money($item->co_q4),

                        // =====================
                        // FE
                        // =====================
                        'fe_q1' => $this->money($item->fe_q1),
                        'fe_q2' => $this->money($item->fe_q2),
                        'fe_q3' => $this->money($item->fe_q3),
                        'fe_q4' => $this->money($item->fe_q4),


                        'gad_issue'        => $item->gad_issue,
                        'ccet_code'        => $item->ccet_code,
                        'responsible'      => $item->responsible,
                        'is_active'        => $item->is_active,
                        // 'expected_output' => collect($item->expected_output ?? [])->map(function ($eo) {
                        //         return [
                        //             'id' => $eo->id ?? 0,
                        //             'description' => $eo->description ?? '',
                        //             'activity_id' => $eo->activity_id ?? null,
                        //             'activity_project_id' => $eo->activity_project_id ?? null,

                        //             'physical_q1' => number_format((float) ($eo->physical_q1 ?? 0), 2, '.', ''),
                        //             'physical_q2' => number_format((float) ($eo->physical_q2 ?? 0), 2, '.', ''),
                        //             'physical_q3' => number_format((float) ($eo->physical_q3 ?? 0), 2, '.', ''),
                        //             'physical_q4' => number_format((float) ($eo->physical_q4 ?? 0), 2, '.', ''),

                        //             'is_active' => (bool) ($eo->is_active ?? false),
                        //             'is_strategy_output' => (bool) ($eo->is_strategy_output ?? false),
                        //         ];
                        //     })->values(),
                        'expected_output'       => $item->expected_output,
                        'expected_outcome'       => $item->expected_outcome,
                        // =====================
                        // SIGNATORIES (SAFE)
                        // =====================
                        'approved_by' => $signatories
                            ? optional($this->getSig('Approved', $signatories))->name ?? ''
                            : '',

                        'approved_by_position' => $signatories
                            ? optional($this->getSig('Approved', $signatories))->position ?? ''
                            : '',

                        'prepared_by' => $signatories
                            ? optional($this->getSig('Prepared', $signatories))->name ?? ''
                            : '',

                        'prepared_by_position' => $signatories
                            ? optional($this->getSig('Prepared', $signatories))->position ?? ''
                            : '',

                        'reviewed_by' => $signatories
                            ? optional($this->getSig('Reviewed', $signatories))->name ?? ''
                            : '',

                        'reviewed_by_position' => $signatories
                            ? optional($this->getSig('Reviewed', $signatories))->position ?? ''
                            : '',

                        'noted_by' => $signatories
                            ? optional($this->getSig('Noted', $signatories))->name ?? ''
                            : '',

                        'noted_by_position' => $signatories
                            ? optional($this->getSig('Noted', $signatories))->position ?? ''
                            : '',
                        // 'sig'=> $signatories,
                        // "approved_by"           => $this->getSig('Approved', $revision->signatories)->name ?? null,
                        // "approved_by_position"  => $this->getSig('Approved', $revision->signatories)->position ?? null,
                        // "prepared_by"           => $this->getSig('Prepared', $revision->signatories)->name ?? null,
                        // "prepared_by_position"  => $this->getSig('Prepared', $revision->signatories)->position ?? null,
                        // "reviewed_by"           => $this->getSig('Reviewed', $revision->signatories)->name ?? null,
                        // "reviewed_by_position"  => $this->getSig('Reviewed', $revision->signatories)->position ?? null,
                        // "noted_by"              => $this->getSig('Noted', $revision->signatories)->name ?? null,
                        // "noted_by_position"     => $this->getSig('Noted', $revision->signatories)->position ?? null,
                    ];
                });
            // dd($activities);
            return $activities;
        } else {
            return [];
        }
    }
    public function getSig($type, $signatories)
    {
        $signatory = $signatories->firstWhere('acted', $type);
        return $signatory;
    }
    private function money($value)
    {
        return number_format((float) ($value ?? 0), 2, '.', '');
    }
    public function getExpectedOutputs(Request $request)
    {
        return ExpectedRevisedOutput::where('activity_project_id', $request->activity_project_id)
            ->get();
    }
    public function getTotalBudgetRequirements($id)
    {
        return BudgetRequirement::where('revision_plan_id', $id)
            ->sum('amount');
    }
    public function getTotalBudget($revision)
    {


        $activitiesQuery = ActivityProject::with(['activity', 'activity.strat'])->whereHas(
            'activity',
            function ($query) {
                $query->whereNull('deleted_at')
                    ->whereHas('strat', function ($q) {
                        $q->whereNull('deleted_at');
                    });
            }

        )
            ->where('project_id', $revision->id);

        // ---- TOTAL BUDGET ACROSS ALL ACTIVITY ROWS ----
        $total_budget = $activitiesQuery->get()->reduce(function ($carry, $row) {
            return $carry
                + $row->ps_q1 + $row->ps_q2 + $row->ps_q3 + $row->ps_q4
                + $row->mooe_q1 + $row->mooe_q2 + $row->mooe_q3 + $row->mooe_q4
                + $row->co_q1 + $row->co_q2 + $row->co_q3 + $row->co_q4
                + $row->fe_q1 + $row->fe_q2 + $row->fe_q3 + $row->fe_q4;
        }, 0);

        return $total_budget;
    }
    public function imp_schedule(Request $request)
    {
        // dd($request);
        // $rev = RevisionPlan::with('paps')->where('id',$request->id)->first();
        // dd($rev);
        $empty = [];
        $strat = StrategyProject::with([
            'strategy',
            'strategy.activity',
            'strategy.activity.activityProject',
            // 'strategy.activity.activityProject.expected_output',
            // 'strategy.activity.activityProject.expected_outcome'
        ])
            ->whereHas('strategy', function ($query) {
                $query->whereNull('deleted_at');
            })
            ->where('project_id', $request->id)
            ->where('is_active', '1')
            // ->orderBy('seq_no', 'ASC')        // primary sort
            // ->orderBy('created_at', 'ASC')    // tie-breaker (oldest first)
            ->get()
            ->map(function ($item) use ($request) {
                $strategy = optional($item->strategy);
                // if ($strategy) {
                //     $strategyArray = $strategy->toArray();
                //     $strategyArray['strategy'] = $strategyArray['description'];
                //     unset($strategyArray['description']);

                //     $item->strategy = $strategyArray;
                // }
                $act = $strategy->activity
                    ? $strategy->activity->flatMap(function ($act) use ($request) {

                        $projects = $act->activityProject ?? collect();
                        // dd($act);
                        return $projects->map(function ($proj) use ($act, $request) {
                            // Build expected outputs first
                            // $expectedOutputs = collect($proj->expected_output ?? [])
                            //     ->map(function ($eo) {
                            //         return [
                            //             'description' => $eo->description ?? null,
                            //             'target_indicator' => $eo->target_indicator ?? null,
                            //         ];
                            //     });

                            // // Append expected outcomes to SAME ARRAY
                            // $expectedOutcomes = collect($proj->expected_outcome ?? [])
                            //     ->map(function ($eo) {
                            //         return [
                            //             'description' => $eo->description ?? null,
                            //             'target_indicator' => $eo->target_indicator ?? null,
                            //         ];
                            //     });

                            // Merge both into a single array
                            // $combined = $expectedOutputs->merge($expectedOutcomes);

                            return [
                                'activity_project_id' => $proj->id ?? null,
                                'revision_plan_id' => $request->id,
                                'strategy_id' => $act->strategy_id ?? null,
                                'description' => $act->description ?? null,
                                'gad_issue' => $proj->gad_issue ?? null,
                                'date_from' => $proj->date_from ?? null,
                                'date_to' => $proj->date_to ?? null,

                                'ps_q1' => $proj->ps_q1 ?? 0,
                                'ps_q2' => $proj->ps_q2 ?? 0,
                                'ps_q3' => $proj->ps_q3 ?? 0,
                                'ps_q4' => $proj->ps_q4 ?? 0,

                                'mooe_q1' => $proj->mooe_q1 ?? 0,
                                'mooe_q2' => $proj->mooe_q2 ?? 0,
                                'mooe_q3' => $proj->mooe_q3 ?? 0,
                                'mooe_q4' => $proj->mooe_q4 ?? 0,

                                'fe_q1' => $proj->fe_q1 ?? 0,
                                'fe_q2' => $proj->fe_q2 ?? 0,
                                'fe_q3' => $proj->fe_q3 ?? 0,
                                'fe_q4' => $proj->fe_q4 ?? 0,

                                'co_q1' => $proj->co_q1 ?? 0,
                                'co_q2' => $proj->co_q2 ?? 0,
                                'co_q3' => $proj->co_q3 ?? 0,
                                'co_q4' => $proj->co_q4 ?? 0,
                                'ccet' => $proj->ccet ?? null,
                                'responsible' => $proj->responsible ?? null,

                                // 'expected_outputs' => $combined->values(),
                                // 'expected_outputs' => ($proj->expected_output ?? collect())
                                //     ->map(function ($eo) {
                                //         return [
                                //             'description' => $eo->description ?? null,
                                //             'target_indicator' => $eo->target_indicator ?? null,
                                //         ];
                                //     }),
                            ];
                        });
                    })
                    : collect();
                // if(count($act)<1){
                //     dd("less than 1", $item);
                // }
                // dd($item);
                // if($item->strategy_id==254){
                //     dd($item);
                // }
                return [
                    'strategy' => $strategy->description ?? null,
                    'id' => $strategy->id ?? null,
                    'revision_plan_id' => $request->id,
                    'activities' => $act,
                    'is_active' => $item->is_active,
                    // $strategy->activity
                    //     ? $strategy->activity->flatMap(function ($act) use ($request) {

                    //         $projects = $act->activityProject ?? collect();
                    //         // dd($act);
                    //         return $projects->map(function ($proj) use ($act, $request) {
                    //             // Build expected outputs first
                    //             // $expectedOutputs = collect($proj->expected_output ?? [])
                    //             //     ->map(function ($eo) {
                    //             //         return [
                    //             //             'description' => $eo->description ?? null,
                    //             //             'target_indicator' => $eo->target_indicator ?? null,
                    //             //         ];
                    //             //     });

                    //             // // Append expected outcomes to SAME ARRAY
                    //             // $expectedOutcomes = collect($proj->expected_outcome ?? [])
                    //             //     ->map(function ($eo) {
                    //             //         return [
                    //             //             'description' => $eo->description ?? null,
                    //             //             'target_indicator' => $eo->target_indicator ?? null,
                    //             //         ];
                    //             //     });

                    //             // Merge both into a single array
                    //             // $combined = $expectedOutputs->merge($expectedOutcomes);

                    //             return [
                    //                 'activity_project_id' => $proj->id ?? null,
                    //                 'revision_plan_id' => $request->id,
                    //                 'strategy_id' => $act->strategy_id ?? null,
                    //                 'description' => $act->description ?? null,
                    //                 'gad_issue' => $proj->gad_issue ?? null,
                    //                 'date_from' => $proj->date_from ?? null,
                    //                 'date_to' => $proj->date_to ?? null,

                    //                 'ps_q1' => $proj->ps_q1 ?? 0,
                    //                 'ps_q2' => $proj->ps_q2 ?? 0,
                    //                 'ps_q3' => $proj->ps_q3 ?? 0,
                    //                 'ps_q4' => $proj->ps_q4 ?? 0,

                    //                 'mooe_q1' => $proj->mooe_q1 ?? 0,
                    //                 'mooe_q2' => $proj->mooe_q2 ?? 0,
                    //                 'mooe_q3' => $proj->mooe_q3 ?? 0,
                    //                 'mooe_q4' => $proj->mooe_q4 ?? 0,

                    //                 'fe_q1' => $proj->fe_q1 ?? 0,
                    //                 'fe_q2' => $proj->fe_q2 ?? 0,
                    //                 'fe_q3' => $proj->fe_q3 ?? 0,
                    //                 'fe_q4' => $proj->fe_q4 ?? 0,

                    //                 'co_q1' => $proj->co_q1 ?? 0,
                    //                 'co_q2' => $proj->co_q2 ?? 0,
                    //                 'co_q3' => $proj->co_q3 ?? 0,
                    //                 'co_q4' => $proj->co_q4 ?? 0,
                    //                 'ccet' => $proj->ccet ?? null,
                    //                 'responsible' => $proj->responsible ?? null,

                    //                 // 'expected_outputs' => $combined->values(),
                    //                 // 'expected_outputs' => ($proj->expected_output ?? collect())
                    //                 //     ->map(function ($eo) {
                    //                 //         return [
                    //                 //             'description' => $eo->description ?? null,
                    //                 //             'target_indicator' => $eo->target_indicator ?? null,
                    //                 //         ];
                    //                 //     }),
                    //             ];
                    //         });
                    //     })
                    //     : collect(),
                    // 'strategy'=>$item->strategy,
                    'seq_no' => $item->seq_no ?? 0, // default to a high number if seq_no is missing
                ];
            })
            ->sortBy('seq_no')   // 👈 ORDER BY ASC
            ->values();
        // dd($strat);
        return $strat->isEmpty()
            ? $empty
            : $strat;
    }
    public function getCombinedExpected(Request $request)
    {
        // Load project with both relations
        $project = ActivityProject::with([
            'expected_output',
            'expected_outcome'
        ])->find($request->id);

        if (!$project) {
            return collect(); // or return [];
        }

        // expected_outputs
        $expectedOutputs = collect($project->expected_output ?? [])
            ->map(function ($eo) {
                return [
                    'description' => $eo->description ?? null,
                    'target_indicator' => $eo->target_indicator ?? null,
                ];
            });

        // expected_outcomes
        $expectedOutcomes = collect($project->expected_outcome ?? [])
            ->map(function ($eo) {
                return [
                    'description' => $eo->description ?? null,
                    'target_indicator' => $eo->target_indicator ?? null,
                ];
            });

        // merge into one single array
        return $expectedOutputs
            ->merge($expectedOutcomes)
            ->values();
    }
    public function getActivity(Request $request)
    {
        $empty = [];
        // dd("fsdfdsfsdfsdfsdfsdf");
        $activityProjects = ActivityProject::with([
            'activity',
            'expected_output',
            'expected_outcome'
        ])
            ->where('project_id', $request->revision_plan_id)
            ->whereHas('activity', function ($query) use ($request) {
                // dd($request->strategy_id);
                $query->where('strategy_id', $request->strategy_id);
            })
            ->orderBy('activity_id', 'asc')
            ->where('is_active', '1')

            // ->orderByRaw('CAST(seq_no AS UNSIGNED) ASC')  // numeric sort
            // ->orderBy('created_at', 'ASC')                // tie-breaker
            ->get()
            ->map(function ($proj) use ($request) {
                // Collect expected outputs (description column)
                // dd($proj->expected_output);
                // $expected_outputs = collect(optional(optional($proj)->activity)->expected_output)
                //     ->filter(fn ($eo) => is_object($eo) && ($eo->project_id ?? null) == $request->revision_plan_id)
                //     ->filter(fn($eo) => is_object($eo))
                //     ->map(function ($eo) {

                //         // Convert to numeric safely using (float) casting
                //         $total = (float)($eo->physical_q1 ?? 0)
                //             + (float)($eo->physical_q2 ?? 0)
                //             + (float)($eo->physical_q3 ?? 0)
                //             + (float)($eo->physical_q4 ?? 0);

                //         return "{$total} " . (string)($eo->description ?? '');
                //     })
                //     ->whenEmpty(fn() => collect())   // ensure safe implode
                //     ->implode('<br><br>');
                // $expected_outputs = collect(optional($proj)->expected_output)
                //     // ->filter(fn ($eo) => is_object($eo) && ($eo->project_id ?? null) == $request->revision_plan_id)
                //     ->filter(fn($eo) => is_object($eo))
                //     ->map(function ($eo) {

                //         // Convert to numeric safely using (float) casting
                //         $total = (float)($eo->physical_q1 ?? 0)
                //             + (float)($eo->physical_q2 ?? 0)
                //             + (float)($eo->physical_q3 ?? 0)
                //             + (float)($eo->physical_q4 ?? 0);
                //         // "{$total} " .
                //         return  (string)($eo->description ?? '');
                //     })
                //     ->whenEmpty(fn() => collect())   // ensure safe implode
                //     ->implode('<br><br>');
                $expected_outputs = collect(optional($proj)->expected_output)
                    ->filter(fn($eo) => is_object($eo))
                    ->map(function ($eo) {

                        $desc = (string)($eo->description ?? '');

                        // Compute total safely
                        $total = (float)($eo->physical_q1 ?? 0)
                            + (float)($eo->physical_q2 ?? 0)
                            + (float)($eo->physical_q3 ?? 0)
                            + (float)($eo->physical_q4 ?? 0);

                        // Detect if description starts with a number or (number)
                        $startsWithNumber = preg_match('/^\s*(\(\d+\)|\d+)/', $desc);
                        $startsWithVerbNumbers = preg_match('/^\s*[A-Za-z]+(?:\s+[A-Za-z]+)*\s+\d+/', $desc);
                        // If it DOES NOT start with number → prepend total
                        if (!$startsWithNumber && !$startsWithVerbNumbers  && $total > 0) {
                            return "{$total} {$desc}";
                        }

                        // Otherwise return description only
                        return $desc;
                    })
                    ->whenEmpty(fn() => collect())
                    ->implode('<br><br>');
                // dd(optional($proj)->expected_output,$expected_outputs);
                // dd(optional(optional($proj)->activity)->expected_output);

                // Collect expected outcomes (target_indicator column)
                // $target_indicators = optional($proj)->expected_output
                //     ? optional($proj)->expected_output->pluck('target_indicator')->implode('<br><br>')
                //     : null;
                $target_indicators = collect(optional($proj)->expected_output)
                    ->filter(fn($eo) => is_object($eo))
                    ->map(function ($eo) {

                        $indicator = (string)($eo->target_indicator ?? '');

                        // Compute total safely
                        $total = (float)($eo->physical_q1 ?? 0)
                            + (float)($eo->physical_q2 ?? 0)
                            + (float)($eo->physical_q3 ?? 0)
                            + (float)($eo->physical_q4 ?? 0);

                        // Conditions where total should NOT be appended
                        $startsWithNumber        = preg_match('/^\s*(\(\d+\)|\d+)/', $indicator);
                        $startsWithVerbNumber    = preg_match('/^\s*[A-Za-z]+\s+\d+/', $indicator);
                        $endsWithNumber       = preg_match('/\d+\s*$/', $indicator);
                        // Append total ONLY if none of the disallowed patterns match
                        if (!$startsWithNumber && !$startsWithVerbNumber && !$endsWithNumber && $total > 0) {
                            return "{$indicator} - {$total}";
                        }
                        return $indicator;
                    })
                    ->whenEmpty(fn() => collect())
                    ->implode('<br><br>');
                // Collect expected outcomes (target_indicator column)
                $expected_outcomes = optional($proj)->expected_outcome
                    ? optional($proj)->expected_outcome->pluck('description')->implode('<br><br>')
                    : null;

                // Concatenate outcomes at the end
                $expected_outputs = collect([
                    $expected_outputs,
                    $expected_outcomes
                ])
                    ->filter()
                    ->implode('<br><br>');
                $ps_total = floatval($proj->ps_q1) + floatval($proj->ps_q2) + floatval($proj->ps_q3) + floatval($proj->ps_q4);
                $mooe_total = floatval($proj->mooe_q1) + floatval($proj->mooe_q2) + floatval($proj->mooe_q3) + floatval($proj->mooe_q4);
                $fe_total = floatval($proj->fe_q1) + floatval($proj->fe_q2) + floatval($proj->fe_q3) + floatval($proj->fe_q4);
                $co_total = floatval($proj->co_q1) + floatval($proj->co_q2) + floatval($proj->co_q3) + floatval($proj->co_q4);
                $overall_total = floatval($ps_total) + floatval($mooe_total) + floatval($fe_total) + floatval($co_total);
                // if($proj->id==3961){
                //     dd($ps_total, $mooe_total, $fe_total, $co_total, $overall_total, $proj);
                // }else{
                //     // dd("alalalaa");
                // }

                // if($proj->id==3670){
                //     dd($expected_outputs,
                //     $proj->expected_output,
                //     );
                // }
                return [
                    'activity_project_id' => $proj->id ?? null,
                    'revision_plan_id' => $request->revision_plan_id,
                    'strategy_id' => optional(optional($proj)->activity)->strategy_id,
                    'description' => optional(optional($proj)->activity)->description,
                    'gad_issue' => $proj->gad_issue ?? null,
                    'date_from' => $proj->date_from ?? "2026-01-01",
                    'date_to' => $proj->date_to ?? "2026-12-31",

                    'ps_q1' => number_format(($proj->ps_q1 ?? 0), 2),
                    'ps_q2' => number_format(($proj->ps_q2 ?? 0), 2),
                    'ps_q3' => number_format(($proj->ps_q3 ?? 0), 2),
                    'ps_q4' => number_format(($proj->ps_q4 ?? 0), 2),
                    'ps_total' => number_format(($ps_total), 2),
                    'mooe_q1' => number_format(($proj->mooe_q1 ?? 0), 2),
                    'mooe_q2' => number_format(($proj->mooe_q2 ?? 0), 2),
                    'mooe_q3' => number_format(($proj->mooe_q3 ?? 0), 2),
                    'mooe_q4' => number_format(($proj->mooe_q4 ?? 0), 2),
                    'mooe_total' => number_format(($mooe_total), 2),
                    'fe_q1' => number_format(($proj->fe_q1 ?? 0), 2),
                    'fe_q2' => number_format(($proj->fe_q2 ?? 0), 2),
                    'fe_q3' => number_format(($proj->fe_q3 ?? 0), 2),
                    'fe_q4' => number_format(($proj->fe_q4 ?? 0), 2),
                    'fe_total' => number_format(($fe_total), 2),
                    'co_q1' => number_format(($proj->co_q1 ?? 0), 2),
                    'co_q2' => number_format(($proj->co_q2 ?? 0), 2),
                    'co_q3' => number_format(($proj->co_q3 ?? 0), 2),
                    'co_q4' => number_format(($proj->co_q4 ?? 0), 2),
                    'ccet' => $proj->ccet_code,
                    'co_total' => number_format(($co_total), 2),
                    'total' => number_format(($overall_total), 2),
                    'responsible' => $proj->responsible ?? null,
                    'expected_outputs' => $expected_outputs,
                    'target_indicators' => $target_indicators,
                    'seq_no' => $proj->seq_no ?? null,
                    // 'expected_outputs' => $combined->values(),
                    // 'expected_outputs' => ($proj->expected_output ?? collect())
                    //     ->map(function ($eo) {
                    //         return [
                    //             'description' => $eo->description ?? null,
                    //             'target_indicator' => $eo->target_indicator ?? null,
                    //         ];
                    //     }),
                ];
            })
            ->sortBy('seq_no')   // 👈 ORDER BY ASC
            ->values();
        // dd($activityProjects,"OK na po?");
        // dd(ActivityProject::with([
        //     'activity',
        //     'expected_output',
        //     'expected_outcome'
        // ])
        //     ->where('project_id', $request->revision_plan_id)
        //     ->whereHas('activity', function ($query) use ($request) {
        //         $query->where('strategy_id', $request->strategy_id);
        //     })
        //     ->orderBy('activity_id', 'asc')
        //     ->where('is_active', '1')
        //     ->orderBy('seq_no', 'ASC')        // primary sort
        //     ->orderBy('created_at', 'ASC')    // tie-breaker (oldest first)
        //     ->get());
        return $activityProjects->isEmpty()
            ? $empty
            : $activityProjects;
    }
    public function getbudget(Request $request)
    {

        // List of categories in the required order
        $categories = [
            'Maintenance, Operating, and Other Expenses',
            'Capital Outlay',
            'Personnel Services',
            'Financial Expenses',
        ];

        // Fetch all budget requirements
        $items = BudgetRequirement::where('revision_plan_id', $request->revision_plan_id)->orderBy('account_code')->orderBy('category')->get();
        // dd($items);
        // Group by category
        $grouped = [];

        foreach ($categories as $cat) {
            $grouped[] = [
                'category' => $cat,
                'budget_requirements' => $items
                    ->where('category', $cat)
                    ->values() // reset indices
                    ->map(function ($item) {
                        return [
                            'id' => $item->id,
                            'revision_plan_id' => $item->revision_plan_id,
                            'particulars' => $item->particulars,
                            'account_code' => $item->account_code,
                            'sip_number' => $item->sip_number,
                            'amount' => $item->amount,
                            'proposed_budget' => $item->proposed_budget,
                            'category' => $item->category,
                            'category_gad' => $item->category_gad,
                            'source' => $item->source,
                            'created_at' => $item->created_at,
                            'updated_at' => $item->updated_at,
                        ];
                    })
            ];
        }

        return $grouped;
    }

    public function delete(Request $request, $id)
    {
        try {
            $revisionPlan = RevisionPlan::findOrFail($id);
            $revisionPlan->delete(); // Soft delete

            return redirect()->back()->with('success', 'Revision plan deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to delete revision plan: ' . $e->getMessage());
        }
    }

    public function syncOOEs()
    {
        $revisionPlans = RevisionPlan::with('budget')
            // ->whereYear('date_start', 2026)
            ->get();

        $updated = 0;
        // dd($revisionPlans);
        foreach ($revisionPlans as $plan) {
            // dd($plan->budget);
            foreach ($plan->budget as $budget) {

                // Skip if idooe is already set
                if (!is_null($budget->idooe) && $budget->idooe !== '') {
                    continue;
                }
                // dd($budget, $matches);
                $matches = OOE::where('FACTCODE', '=', $budget->account_code)->where('active_tag', 1)->get();
                // if($matches)
                if ($matches->count() === 1) {
                    // $budget->update(['idooe' => $matches->first()->id]);
                    $bdgt = BudgetRequirement::where('id', $budget->id)->first();
                    $bdgt->idooe = $matches->first()->recid;
                    $bdgt->save();
                    $updated++;
                }
            }
        }

        return redirect()->back()->with('message', "OOE sync complete. {$updated} budget entr" . ($updated === 1 ? 'y' : 'ies') . " updated.");
    }

    public function automateHospitalOperations(Request $request)
    {
        // dd("dd");
        // 1880	Integrated and Hospital Operations and Management
        // 1965	Hospital Operations - DDOPH Pantukan
        // 1966	Hospital Operations - DDOPH Laak
        // 1967	Hospital Operations - DDOPH Montevista
        // 1968	Hospital Operations - DDOPH Maragusan
        // RevisionPlan::whereIn('id',[543, 418, 462])->get()->each(function($plan){
        //     $this->replicate($plan);
        // });
        $this->replicateStrategiesAndActivities();
    }
    public function replicateStrategiesAndActivities()
    {
        $revisionPlanIds = [543, 418, 462];
        $revisionPlans = RevisionPlan::whereIn('id', $revisionPlanIds)->get();

        DB::transaction(function () use ($revisionPlans) {
            foreach ($revisionPlans as $revisionPlan) {
                // 1. Get all strategy_projects for this revision plan,
                //    including any soft-deleted strategies.
                $strategyProjects = $revisionPlan->strategyProject()
                    ->with(['strategy' => function ($query) {
                        $query->withTrashed();
                    }])
                    ->get();

                foreach ($strategyProjects as $strategyProject) {
                    $oldStrategy = $strategyProject->strategy;

                    if (!$oldStrategy) {
                        continue; // No strategy linked, skip.
                    }

                    $oldStrategyId = $oldStrategy->id;

                    // 2. Replicate the strategy (columns: id, description, idpaps, idmfo,
                    //    FFUNCCOD, year_period, created_at, updated_at, deleted_at).
                    $newStrategy = $oldStrategy->replicate();
                    //    Change idpaps to the current revision plan's idpaps.
                    $newStrategy->idpaps = $revisionPlan->idpaps;

                    //    Keep original timestamps and deleted_at (disable auto-touch).
                    $newStrategy->timestamps = false;
                    $newStrategy->save();
                    $newStrategy->timestamps = true;

                    $newStrategyId = $newStrategy->id;

                    // 3. Update the current strategy_project to point to the new strategy.
                    $strategyProject->strategy_id = $newStrategyId;
                    $strategyProject->save();

                    // 4. Process all activities under the old strategy (including trashed).
                    $activities = $oldStrategy->activity()->withTrashed()->get();

                    foreach ($activities as $activity) {
                        $oldActivityId = $activity->id;

                        // 4a. Replicate the activity (columns: id, description, strategy_id,
                        //     created_at, updated_at, deleted_at).
                        $newActivity = $activity->replicate();
                        $newActivity->strategy_id = $newStrategyId;

                        $newActivity->timestamps = false;
                        $newActivity->save();
                        $newActivity->timestamps = true;

                        $newActivityId = $newActivity->id;

                        // 4c. Update activity_projects that reference the old activity
                        //     AND the current revision plan (project_id).
                        ActivityProject::where('activity_id', $oldActivityId)
                            ->where('project_id', $revisionPlan->id)
                            ->update(['activity_id' => $newActivityId]);
                    }
                }
            }
        });

        return redirect()->back()->with('success', 'Replication completed successfully.');
    }
    // public function replicate(RevisionPlan $revisionPlan)
    // {
    //     $revisionPlanIds = [543, 418, 462];

    //     $results = [];

    //     DB::transaction(function () use ($revisionPlanIds, &$results) {
    //         foreach ($revisionPlanIds as $revisionPlanId) {

    //             $revisionPlan = RevisionPlan::findOrFail($revisionPlanId);
    //             $revisionPlanIdpaps = $revisionPlan->idpaps;

    //             $planResults = [
    //                 'revision_plan_id'       => $revisionPlanId,
    //                 'idpaps'                 => $revisionPlanIdpaps,
    //                 'strategy_projects'      => [],
    //             ];

    //             // ── Step 1 ──────────────────────────────────────────────────────────────
    //             // Retrieve all strategy_projects belonging to this revision plan.
    //             // ────────────────────────────────────────────────────────────────────────
    //             $strategyProjects = StrategyProject::where('project_id', $revisionPlanId)->get();

    //             foreach ($strategyProjects as $strategyProject) {

    //                 $oldStrategyId = $strategyProject->strategy_id;

    //                 $oldStrategy = Strategy::find($oldStrategyId);

    //                 if (! $oldStrategy) {
    //                     Log::warning("RevisionPlan [{$revisionPlanId}]: strategy_project [{$strategyProject->id}] references missing strategy [{$oldStrategyId}]. Skipping.");
    //                     continue;
    //                 }

    //                 // ── Step 2 ──────────────────────────────────────────────────────────
    //                 // Replicate the strategy.
    //                 // Copy the specified columns; override idpaps with the revision plan's.
    //                 // ────────────────────────────────────────────────────────────────────
    //                 $newStrategy = new Strategy();
    //                 $newStrategy->description  = $oldStrategy->description;
    //                 $newStrategy->idpaps       = $revisionPlanIdpaps; // override
    //                 $newStrategy->idmfo        = $oldStrategy->idmfo;
    //                 $newStrategy->FFUNCCOD     = $oldStrategy->FFUNCCOD;
    //                 $newStrategy->year_period  = $oldStrategy->year_period;
    //                 $newStrategy->created_at   = $oldStrategy->created_at;
    //                 $newStrategy->updated_at   = $oldStrategy->updated_at;
    //                 $newStrategy->deleted_at   = $oldStrategy->deleted_at;
    //                 $newStrategy->save();

    //                 $newStrategyId = $newStrategy->id;

    //                 // ── Step 3 ──────────────────────────────────────────────────────────
    //                 // Point the strategy_project at the newly replicated strategy.
    //                 // ────────────────────────────────────────────────────────────────────
    //                 $strategyProject->strategy_id = $newStrategyId;
    //                 $strategyProject->save();

    //                 $spResult = [
    //                     'strategy_project_id' => $strategyProject->id,
    //                     'old_strategy_id'     => $oldStrategyId,
    //                     'new_strategy_id'     => $newStrategyId,
    //                     'activities'          => [],
    //                 ];

    //                 // ── Step 4 ──────────────────────────────────────────────────────────
    //                 // Process every activity that belongs to the OLD (source) strategy.
    //                 // ────────────────────────────────────────────────────────────────────
    //                 $activities = Activity::where('strategy_id', $oldStrategyId)->get();

    //                 foreach ($activities as $activity) {

    //                     $oldActivityId = $activity->id;

    //                     // ── Step 4-b ─────────────────────────────────────────────────────
    //                     // Replicate the activity.
    //                     // Copy the specified columns; wire strategy_id to the new strategy.
    //                     // ─────────────────────────────────────────────────────────────────
    //                     $newActivity = new Activity();
    //                     $newActivity->description = $activity->description;
    //                     $newActivity->strategy_id = $newStrategyId; // points to new strategy
    //                     $newActivity->created_at  = $activity->created_at;
    //                     $newActivity->updated_at  = $activity->updated_at;
    //                     $newActivity->deleted_at  = $activity->deleted_at;
    //                     $newActivity->save();

    //                     $newActivityId = $newActivity->id;

    //                     // ── Step 4-c-i ───────────────────────────────────────────────────
    //                     // Find the FIRST matching activity_project for this revision plan
    //                     // and update its idpaps to the revision plan's idpaps.
    //                     // ─────────────────────────────────────────────────────────────────
    //                     $activityProject = ActivityProject::where('activity_id', $oldActivityId)
    //                         ->where('project_id', $revisionPlanId)
    //                         ->first();

    //                     $activityProjectUpdated = false;

    //                     if ($activityProject) {
    //                         $activityProject->idpaps = $revisionPlanIdpaps;
    //                         $activityProject->save();
    //                         $activityProjectUpdated = true;
    //                     } else {
    //                         Log::info("RevisionPlan [{$revisionPlanId}]: no activity_project found for activity [{$oldActivityId}]. idpaps not updated.");
    //                     }

    //                     $spResult['activities'][] = [
    //                         'old_activity_id'          => $oldActivityId,
    //                         'new_activity_id'          => $newActivityId,
    //                         'activity_project_updated' => $activityProjectUpdated,
    //                     ];
    //                 }

    //                 $planResults['strategy_projects'][] = $spResult;
    //             }

    //             $results[] = $planResults;
    //         }
    //     });

    //     return response()->json([
    //         'message' => 'Replication completed successfully.',
    //         'data'    => $results,
    //     ]);
    // }
}
