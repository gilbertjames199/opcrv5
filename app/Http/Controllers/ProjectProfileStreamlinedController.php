<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityProject;
use App\Models\CurrentAipYear;
use App\Models\BudgetRequirement;
use App\Models\ClimateChangeExpenditureTagging;
use App\Models\HGDG_Checklist;
use App\Models\Monitoring_and_evaluation;
use App\Models\Office;
use App\Models\PopspAgency;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\RevisionPlanComment;
use App\Models\Risk_manangement;
use App\Models\Signatory;
use App\Models\Strategy;
use App\Models\StrategyActivityRequest;
use App\Models\StrategyProject;
use App\Models\User;
use App\Models\TeamPlan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ProjectProfileStreamlinedController extends Controller
{
    protected $rev_plan;
    public function __construct(RevisionPlan $rev_plan)
    {
        $this->rev_plan = $rev_plan;
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

    public function streamlined_create(Request $request, $idpaps)
    {
         // SET USER DEPARTMENT CODE
        $dept_code = auth()->user()->department_code;
        // dd($request);
        // SET PAPS ID
        $id = $idpaps;
        $source = null;
        // dd($idpaps);
        // dd($idpaps);

        // SET PAPS VALUE

        // dd($paps);
        if($id!=0){
            $paps = ProgramAndProject::with('MFO')->where('id', $id)->get();
            $paps0 = $paps->first();
        }else{
            // dd(RevisionPlan::where('id', $request->idrevplan)->get());
            $paps = ProgramAndProject::with('MFO')->where('type','GAS')
                    ->where('department_code', $dept_code)
                    ->first();
                    $paps0 = $paps->first();
        }

        // dd($paps);
        // SET OFFICE OBJECT
        $office = Office::where('department_code', $paps0->department_code)->first();
        // dd($office);

        $paps_all = [];
        // FOR BUDGETARY REQUIREMENTS
        $s_mooe_gad = 0;
        $s_mooe_non = 0;
        $s_cap_gad = 0;
        $s_cap_non = 0;
        $s_ps_gad = 0;
        $s_ps_non = 0;
        $s_fe_gad = 0;
        $s_fe_non = 0;
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

        $count = RevisionPlan::where('idpaps', $id)->count();
        $max_id = RevisionPlan::where('idpaps', $id)->max('id');

        // dd($max_id);

        // SET DUPLICATE DATA
        $duplicate = [];
        if ($request->source == 'direct' || $request->source == 'rev_app') {
            $source = $request->source;
            $duplicate = RevisionPlan::with([
                    'comments',
                    'comments.user',
                    'paps',
                    'checklist',
                    'originalVersion',
                    'originalVersion.budget'
                    ])
                    ->where('id', $request->idrevplan)
                    ->first();
        } else {
            $duplicate = RevisionPlan::with([
                    'comments',
                    'comments.user',
                    'paps',
                    'checklist',
                    'originalVersion',
                    'originalVersion.budget'
                    ])->where('id', $request->idrevplan)
                    ->first();
        }
        // dd($duplicate);
        // HGDG Checklist
        $hgdg = HGDG_Checklist::get();

        // CHART OF ACCOUNTS --used in budgetary requirements
        $acc = DB::connection('mysql2')->table('chartofaccounts')->get();
        // dd($duplicate);
        // dd($request->source);
        // CHECK FOR STATUS if submitted, return if error if true
        if ($duplicate) {
            if($request->source=="rev_app"){
                // dd("here");
            }else{
                if (intval($duplicate->status) >= 0) {
                    return redirect()->back()->with('error', 'Project profile already submitted');
                }
            }

        }

        // GET ALL POPSP AGENCIES
        $popsp_agencies = PopspAgency::all();

        // IF LESS THAN 1 ANG COUNT
        if ($count < 1) {
            // dd()
            $firstDayNextYear = now()->addYear()->startOfYear()->format('Y-m-d');
            $lastDayNextYear  = now()->addYear()->endOfYear()->format('Y-m-d');
            $rev_plan_firstgenerate = new RevisionPlan();
            $rev_plan_firstgenerate->idpaps = $id;
            $rev_plan_firstgenerate->agency_name = $paps0->agency_name;
            $rev_plan_firstgenerate->status = "-1";
            $rev_plan_firstgenerate->year_period = Carbon::now()->year + 1;
            $rev_plan_firstgenerate->idmfo = $paps0->idmfo;
            $rev_plan_firstgenerate->program_id = NULL;
            $rev_plan_firstgenerate->FFUNCCOD =  $paps0->FFUNCCOD;
            $rev_plan_firstgenerate->scope = NULL;
            $rev_plan_firstgenerate->aip_code = NULL;
            $rev_plan_firstgenerate->project_title = $paps0->paps_desc;
            $rev_plan_firstgenerate->project_location = '';
            $rev_plan_firstgenerate->list_of_lgu_covered = '';
            $rev_plan_firstgenerate->date_start = $firstDayNextYear;
            $rev_plan_firstgenerate->date_end = $lastDayNextYear;
            $rev_plan_firstgenerate->beneficiary_male = 0;
            $rev_plan_firstgenerate->beneficiary_female = 0;
            $rev_plan_firstgenerate->baseline_male = 0;
            $rev_plan_firstgenerate->baseline_female = 0;
            $rev_plan_firstgenerate->baseline_total = 0;
            $rev_plan_firstgenerate->data_source = '';
            $rev_plan_firstgenerate->amount = 0;
            $rev_plan_firstgenerate->proposed_budget = 0;
            $rev_plan_firstgenerate->attributed_amount = 0;
            $rev_plan_firstgenerate->checklist_id = 0;
            $rev_plan_firstgenerate->hgdg_score = 0;
            $rev_plan_firstgenerate->hgdg_percent = 0;
            $rev_plan_firstgenerate->rationale = '';
            $rev_plan_firstgenerate->objective = '';
            $rev_plan_firstgenerate->beneficiaries = '';
            $rev_plan_firstgenerate->implementing_team = '';
            $rev_plan_firstgenerate->partnership = '';
            $rev_plan_firstgenerate->monitoring = '';
            $rev_plan_firstgenerate->risk_management = '';
            $rev_plan_firstgenerate->version = 1;
            $rev_plan_firstgenerate->gad_version = ($request->source === 'sip' || $this->getCurrentAipYear() != 2026) ? 2 : 1;
            $rev_plan_firstgenerate->type = $request->source == 'sip' ? 'sip' : 'p';
            $rev_plan_firstgenerate->final = 0;
            $rev_plan_firstgenerate->supplemental = 0;
            $rev_plan_firstgenerate->user_id = auth()->user()->recid;
            $rev_plan_firstgenerate->is_strategy_based = 0;
            $rev_plan_firstgenerate->is_activity_based = 1;
            $rev_plan_firstgenerate->breakdown_by_expected_output = 1;
            $rev_plan_firstgenerate->save();
            $here = RevisionPlan::with(['comments', 'comments.user', 'paps', 'checklist', 'originalVersion'])->find($rev_plan_firstgenerate->id);
            $editData = $here;
        } else {
            $editData = $duplicate;
        }

        // CHECK FOR MISMATCH
        if ($editData->idpaps != $idpaps) {
            return redirect()->back()->with('error', 'Mismatch in Program and Project data. Please try again.');
        }
        $budgetRequirements = [];

        // SET CCET CODES
        $ccet_codes = ClimateChangeExpenditureTagging::where('id', '<>', 1)->get();
        // dd($ccet_codes);
        // dd($id, $hgdg, $paps, $request->source, $office, $all_comments, $editData);
        if (isset($editData)) {
            //ALL COMMENTS***************************************************************************************************
            $all_comments = $this->getAllRevisionPlanComments($editData->id);

            //BUDGETARY REQUIREMENTS*****************************************************************************************
            $budgetRequirements = $this->getBudgetRequirements($editData->id);
            // return $budgetRequirements;
            // $s_mooe_gad = $budgetRequirements['totals']['s_mooe_gad'];
            // $s_mooe_non = $budgetRequirements['totals']['s_mooe_non'];
            // $s_ps_gad = $budgetRequirements['totals']['s_ps_gad'];
            // $s_ps_non = $budgetRequirements['totals']['s_ps_non'];
            // $s_fe_gad = $budgetRequirements['totals']['s_fe_gad'];
            // $s_fe_non = $budgetRequirements['totals']['s_fe_non'];
            // $s_cap_gad = $budgetRequirements['totals']['s_cap_gad'];
            // $s_cap_non = $budgetRequirements['totals']['s_cap_non'];
        }
        // dd($all_comments);
        // dd($acc);
        // dd($editData);
        // BUDGET CEILING FOR PROJECT DESIGN
        $reference_profile_id = $editData->reference_profile_id;
        $budgetaryRequirementsProjectDesign = [];
        // dd($editData);
        if ($editData->type == 'd') {
            // dd('d '.$editData->type);
            // $budget_ceiling = BudgetRequirement::where('revision_plan_id', $reference_profile_id)
            //     ->sum('amount');
            $response = Http::get(
                'https://dev.davaodeoro.gov.ph/api/reports/lb2/approved',
                [
                    'revision_plan_id' => $reference_profile_id,
                ]
            );

            if ($response->successful()) {
                $budgetaryRequirementsProjectDesign = $response->json();
                // dd($budgetaryRequirementsProjectDesign, $editData);
            } else {
                $budgetaryRequirementsProjectDesign = [];
            }
            // $budget_ceiling = $lb2Data['budget_ceiling'] ?? null;

        } else {
            // dd('p '.$editData->type);
            // dd($budgetRequirements);
            $budget_ceiling = $budgetRequirements->sum('amount');
            // $budgetRequirements['totals']['s_mooe_gad'] + $budgetRequirements['totals']['s_mooe_non'] +
            // $budgetRequirements['totals']['s_ps_gad'] + $budgetRequirements['totals']['s_ps_non'] +
            // $budgetRequirements['totals']['s_fe_gad'] + $budgetRequirements['totals']['s_fe_non'] +
            // $budgetRequirements['totals']['s_cap_gad'] + $budgetRequirements['totals']['s_cap_non'];
        }

        // RETURN create vue based on gad version
        $view_returned = $editData->gad_version == '1' ? 'RevisionPlans/ProjectProfile/Create' : 'RevisionPlans/ProjectProfile/Createv2';
        $implementation = $this->getImplementationPlan($editData->id, $editData, $paps0->id);
        // dd(optional(optional($editData)->originalVersion)->budget);
        // dd($editData);
        $budget_ceiling = null;
        if($editData->type=='d'){
            $budget_ceiling = optional(optional($editData)->originalVersion)->budget;
        }
        // return $implementation;
        // dd($this->signatories($editData->id));
        // <!-- dd($implementation); -->
        // dd($request->source);
        // dd($this->getStrategyRequest($editData->id));
        // dd($editData);

        return inertia($view_returned, [
            "idpaps" => $id,
            "hgdgs" => $hgdg,
            "paps_specific" => $paps0,
            "source" => $request->source,
            "popsp_agencies" => $popsp_agencies,
            "office" => $office,
            "all_comments" => $all_comments,
            "editData" => $editData,
            "budget_ceiling" => $budget_ceiling,
            // BUDGETARY REQUIREMENTS
            "account_code" => $acc,
            "budget_requirements" => $budgetRequirements,
            "s_mooe_gad" => $s_mooe_gad,
            "s_mooe_non" => $s_mooe_non,
            "s_cap_gad" => $s_cap_gad,
            "s_cap_non" => $s_cap_non,
            "s_ps_gad" => $s_ps_gad,
            "s_ps_non" => $s_ps_non,
            "s_fe_gad" => $s_fe_gad,
            "s_fe_non" => $s_fe_non,
            //IMPLEMENTATION SCHEDULE/WORKPLAN
            "implementation" => $implementation,
            //MONITORING AND EVALUATION
            "monitoring_and_avaluation" => $this->monitoring_and_evaluation($editData->id),
            // IMPLEMENTING TEAM
            "implementing_team" => $this->team_members($editData->id),
            // SIGNATORIES
            "signatoriesprops" => $this->signatories($editData->id),
            // RISK MANAGEMENT
            "risk_manangement" => $this->risk_management($editData->id),
            // SOURCE
            "source" => $request->source,
            "ccet_codes" => $ccet_codes,
            "can" => [
                'can_access_validation' => $this->userCan('can_access_validation', User::class),
                'can_access_indicators' => $this->userCan('can_access_indicators', User::class)
            ],
            "strategy_requests" => $this->getStrategyRequest($editData->id),
            // BUDGET CEILING FOR PROJECT DESIGN
            "budget_ceiling" => $budget_ceiling ?? null,
            "budgetaryRequirementsProjectDesign" => $budgetaryRequirementsProjectDesign
        ]);
    }

    public function getStrategyRequest($revision_plan_id){
        $strategy_return_request = StrategyActivityRequest::with(['strategy',
                'strategy.strategyProject',
                'strategy.activity',
                'strategy.activity.activityProject',
                'files'
            ])
                ->where(function($query) {
                    $query->where('status', '-1')
                        ->orWhere('status', '-2')
                        ->orWhere('status', '0');
                })
                ->where('revision_plan_id', $revision_plan_id)
                ->get();


                return $strategy_return_request;
    }
    public function getCurrentAipYear()
    {
        // dd(CurrentAipYear::first());;
        return CurrentAipYear::first()->year_period;
    }
    function getAllRevisionPlanComments(int $revisionPlanId)
    {
        // 1️⃣ Comments directly on revision_plans
        $revisionPlanComments = RevisionPlanComment::where('table_name', 'revision_plans')
            ->where('table_row_id', $revisionPlanId);

        // 2️⃣ activity_projects comments
        $activityProjectIds = DB::table('activity_projects')
            ->where('project_id', $revisionPlanId)
            ->pluck('id');

        $activityComments = RevisionPlanComment::where('table_name', 'activity_projects')
            ->whereIn('table_row_id', $activityProjectIds);

        // 3️⃣ expected_revised_outcomes / outputs linked to activity_projects
        $outcomeIds = DB::table('expected_revised_outcomes')
            ->whereIn('activity_project_id', $activityProjectIds)
            ->pluck('id');

        $outputIds = DB::table('expected_revised_outputs')
            ->whereIn('activity_project_id', $activityProjectIds)
            ->pluck('id');

        $activityOutcomeComments = RevisionPlanComment::where('table_name', 'expected_revised_outcomes')
            ->whereIn('table_row_id', $outcomeIds);

        $activityOutputComments = RevisionPlanComment::where('table_name', 'expected_revised_outputs')
            ->whereIn('table_row_id', $outputIds);

        // 4️⃣ strategy_projects comments
        $strategyProjectIds = DB::table('strategy_projects')
            ->where('project_id', $revisionPlanId)
            ->pluck('id');

        $strategyComments = RevisionPlanComment::where('table_name', 'strategy_projects')
            ->whereIn('table_row_id', $strategyProjectIds);

        // strategy outcomes / outputs
        $strategyOutcomeIds = DB::table('expected_revised_outcomes')
            ->whereIn('strategy_project_id', $strategyProjectIds)
            ->pluck('id');

        $strategyOutputIds = DB::table('expected_revised_outputs')
            ->whereIn('strategy_project_id', $strategyProjectIds)
            ->pluck('id');

        $strategyOutcomeComments = RevisionPlanComment::where('table_name', 'expected_revised_outcomes')
            ->whereIn('table_row_id', $strategyOutcomeIds);

        $strategyOutputComments = RevisionPlanComment::where('table_name', 'expected_revised_outputs')
            ->whereIn('table_row_id', $strategyOutputIds);

        // 5️⃣ budget_requirements
        $budgetIds = DB::table('budget_requirements')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $budgetComments = RevisionPlanComment::where('table_name', 'budget_requirements')
            ->whereIn('table_row_id', $budgetIds);

        // 6️⃣ monitoring_and_evaluations
        $monitoringIds = DB::table('monitoring_and_evaluations')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $monitoringComments = RevisionPlanComment::where('table_name', 'monitoring_and_evaluations')
            ->whereIn('table_row_id', $monitoringIds);

        // 7️⃣ risk_manangements
        $riskIds = DB::table('risk_manangements')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $riskComments = RevisionPlanComment::where('table_name', 'risk_manangements')
            ->whereIn('table_row_id', $riskIds);

        // 8️⃣ team_plans
        $teamIds = DB::table('team_plans')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $teamComments = RevisionPlanComment::where('table_name', 'team_plans')
            ->whereIn('table_row_id', $teamIds);

        // Signatories
        $signatories = Signatory::where('revision_plan_id', $revisionPlanId)->pluck('id');
        $signatoryComments = RevisionPlanComment::where('table_name', 'signatories')
            ->whereIn('table_row_id', $signatories);

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
            ->mergeBindings($unionQuery->getQuery()) // important to merge bindings
            ->orderBy('comment_status', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();

        return $allComments;
    }

    public function streamlined_update(Request $request, $id)
    {
        $table = $request->input('table_name');
        $column = $request->input('column_name');
        $newData = urldecode($request->input('new_data'));
        // dd(DB::table($table)->where('id', $id)->get());
        // Perform update
        // dd($request);
        $restrictedColumns = [
            'ps_q1','ps_q2','ps_q3','ps_q4',
            'mooe_q1','mooe_q2','mooe_q3','mooe_q4',
            'co_q1','co_q2','co_q3','co_q4',
            'fe_q1','fe_q2','fe_q3','fe_q4',
        ];

        if ($table === 'activity_projects' && in_array($column, $restrictedColumns)) {

            // Check if numeric and not less than -1
            if (!is_numeric($newData) || $newData < -1) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid value. Must be numeric and not less than -1.'
                ], 422);
            }

            // Optional: cast to float to ensure numeric type
            $newData = (float) $newData;
        }

        DB::table($table)
            ->where('id', $id)
            ->update([$column => $newData]);

        return response()->json([
            'success' => true,
            'updated_column' => $column,
            'new_value' => $newData
        ]);
    }
    public function getBudgetRequirements3($revision_plan_id)
    {
        // Fetch budget requirements with comments
        $budgetRequirements = BudgetRequirement::with(['comments' => function ($query) {
            $query->where('table_name', 'budget_requirements');
        }])
            ->select('id', 'revision_plan_id', 'particulars', 'account_code', 'amount', 'proposed_budget', 'category', 'category_gad', 'source')
            ->where('revision_plan_id', $revision_plan_id)
            ->orderByRaw("
            FIELD(category,
                'Maintenance, Operating, and Other Expenses',
                'Personnel Services',
                'Financial Expenses',
                'Capital Outlay'
            )
        ")
            ->orderByRaw("FIELD(category_gad, 'GAD', 'NON-GAD')")
            ->get();

        // Initialize the grouped array
        $result = [
            'maintenanceOperating' => ['GAD' => [], 'NON-GAD' => []],
            'personnelServices' => ['GAD' => [], 'NON-GAD' => []],
            'financialExpenses' => ['GAD' => [], 'NON-GAD' => []],
            'capitalOutlay' => ['GAD' => [], 'NON-GAD' => []],
            'totals' => [
                's_mooe_gad' => 0,
                's_mooe_non' => 0,
                's_ps_gad' => 0,
                's_ps_non' => 0,
                's_fe_gad' => 0,
                's_fe_non' => 0,
                's_cap_gad' => 0,
                's_cap_non' => 0,
            ]
        ];

        // Map DB category names to JSON keys
        $categoryMap = [
            'Maintenance, Operating, and Other Expenses' => 'maintenanceOperating',
            'Personnel Services' => 'personnelServices',
            'Financial Expenses' => 'financialExpenses',
            'Capital Outlay' => 'capitalOutlay',
        ];

        // Group rows and calculate totals
        foreach ($budgetRequirements as $item) {
            $catKey = $categoryMap[$item->category] ?? null;
            if (!$catKey) continue;

            $gadKey = strtoupper($item->category_gad) === 'GAD' ? 'GAD' : 'NON-GAD';
            $result[$catKey][$gadKey][] = $item;

            // Add to totals
            switch ($catKey) {
                case 'maintenanceOperating':
                    $gadKey === 'GAD' ? $result['totals']['s_mooe_gad'] += $item->amount : $result['totals']['s_mooe_non'] += $item->amount;
                    break;
                case 'personnelServices':
                    $gadKey === 'GAD' ? $result['totals']['s_ps_gad'] += $item->amount : $result['totals']['s_ps_non'] += $item->amount;
                    break;
                case 'financialExpenses':
                    $gadKey === 'GAD' ? $result['totals']['s_fe_gad'] += $item->amount : $result['totals']['s_fe_non'] += $item->amount;
                    break;
                case 'capitalOutlay':
                    $gadKey === 'GAD' ? $result['totals']['s_cap_gad'] += $item->amount : $result['totals']['s_cap_non'] += $item->amount;
                    break;
            }
        }

        return $result;
    }

    public function getBudgetRequirements2($id)
    {
        $budgetRequirements = BudgetRequirement::with(['comments' => function ($query) {
            $query->where('table_name', 'budget_requirements');
        }])
            ->select('id', 'revision_plan_id', 'particulars', 'account_code', 'amount', 'proposed_budget', 'category', 'category_gad', 'source')
            ->where('revision_plan_id', $id)
            ->orderByRaw("
            FIELD(category,
                'Maintenance, Operating, and Other Expenses',
                'Personnel Services',
                'Financial Expenses',
                'Capital Outlay'
            )
        ")
            ->orderByRaw("FIELD(category_gad, 'GAD', 'NON-GAD')")
            ->get();

        // Group the data into the desired JSON structure
        $result = [
            'maintenanceOperating' => ['GAD' => [], 'NON-GAD' => []],
            'personnelServices' => ['GAD' => [], 'NON-GAD' => []],
            'financialExpenses' => ['GAD' => [], 'NON-GAD' => []],
            'capitalOutlay' => ['GAD' => [], 'NON-GAD' => []],
        ];

        $categoryMap = [
            'Maintenance, Operating, and Other Expenses' => 'maintenanceOperating',
            'Personnel Services' => 'personnelServices',
            'Financial Expenses' => 'financialExpenses',
            'Capital Outlay' => 'capitalOutlay',
        ];

        foreach ($budgetRequirements as $item) {
            $catKey = $categoryMap[$item->category] ?? null;
            if ($catKey) {
                $gadKey = strtoupper($item->category_gad) === 'GAD' ? 'GAD' : 'NON-GAD';
                $result[$catKey][$gadKey][] = $item;
            }
        }

        // Return JSON
        return response()->json($result);
    }
    public function getBudgetRequirements($id)
    {
        return BudgetRequirement::with(['comments' => function ($query) {
            $query->where('table_name', 'budget_requirements');
        }, 'referenceBudgetRequirement'])

            ->where('revision_plan_id', $id)
            ->orderBy('account_code')
            ->orderBy('category') // optional: keep some order
            ->orderBy('category_gad')
            ->get()
            ->map(function($item){
                // ->select(
                // 'id',
                // 'revision_plan_id',
                // 'particulars',
                // 'account_code',
                // 'amount',
                // 'proposed_budget',
                // 'category',
                // 'category_gad',
                // 'source',
                // 'sip_number')
                return [
                    'id' => $item->id,
                    'revision_plan_id' => $item->revision_plan_id,
                    'particulars' => $item->particulars,
                    'account_code' => $item->account_code,
                    'amount' => $item->amount,
                    'proposed_budget' => $item->proposed_budget,
                    'category' => $item->category,
                    'category_gad' => $item->category_gad,
                    'source' => $item->source,
                    'sip_number' => $item->sip_number,
                    'comments' => $item->comments, // Include comments
                    'reference_budget_ceiling' => optional(optional($item)->referenceBudgetRequirement)->amount // Include reference budget requirement
                ];
            });
    }
    public function getImplementationPlan($id, $paps, $idpaps)
    {

        // *****************************************************************************

        $imp= Strategy::with([
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
                    $query->whereHas('activityProject', function ($q) {
                        $q->where('is_active', '1')
                            ->where('status', '1');
                    });
                }
            },
            'activity.activityProject' => function ($q) use ($id) {
                $q->where('project_id', $id)
                    ->where('is_active', '1')
                    ->orderBy('activity_id', 'asc');
            },
            'activity.activityProject.expected_output',
            'activity.activityProject.expected_output.comments',
            'activity.activityProject.expected_outcome',
            'activity.activityProject.expected_outcome.comments',
            'activity.activityProject.comments',
            'activity.activityProject.comments.user',
            'activity.activityProject.referenceActivityProject'
        ])->whereHas('strategyProject', function ($query)use ($id) {
            $query->where('project_id', $id)->where('is_active', '1');
        })

            ->where('status', '1')
            ->where('idpaps', $idpaps)

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


                    $ps_q1_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->ps_q1 > 0 ? $activity->activityProject[0]->referenceActivityProject->ps_q1 : 0) : 0;
                    $ps_q2_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->ps_q2 > 0 ? $activity->activityProject[0]->referenceActivityProject->ps_q2 : 0) : 0;
                    $ps_q3_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->ps_q3 > 0 ? $activity->activityProject[0]->referenceActivityProject->ps_q3 : 0) : 0;
                    $ps_q4_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->ps_q4 > 0 ? $activity->activityProject[0]->referenceActivityProject->ps_q4 : 0) : 0;
                    $mooe_q1_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->mooe_q1 > 0 ? $activity->activityProject[0]->referenceActivityProject->mooe_q1 : 0) : 0;
                    $mooe_q2_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->mooe_q2 > 0 ? $activity->activityProject[0]->referenceActivityProject->mooe_q2 : 0) : 0;
                    $mooe_q3_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->mooe_q3 > 0 ? $activity->activityProject[0]->referenceActivityProject->mooe_q3 : 0) : 0;
                    $mooe_q4_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->mooe_q4 > 0 ? $activity->activityProject[0]->referenceActivityProject->mooe_q4 : 0) : 0;
                    $co_q1_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->co_q1 > 0 ? $activity->activityProject[0]->referenceActivityProject->co_q1 : 0) : 0;
                    $co_q2_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->co_q2 > 0 ? $activity->activityProject[0]->referenceActivityProject->co_q2 : 0) : 0;
                    $co_q3_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->co_q3 > 0 ? $activity->activityProject[0]->referenceActivityProject->co_q3 : 0) : 0;
                    $co_q4_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->co_q4 > 0 ? $activity->activityProject[0]->referenceActivityProject->co_q4 : 0) : 0;
                    $fe_q1_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->fe_q1 > 0 ? $activity->activityProject[0]->referenceActivityProject->fe_q1 : 0) : 0;
                    $fe_q2_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->fe_q2 > 0 ? $activity->activityProject[0]->referenceActivityProject->fe_q2 : 0) : 0;
                    $fe_q3_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->fe_q3 > 0 ? $activity->activityProject[0]->referenceActivityProject->fe_q3 : 0) : 0;
                    $fe_q4_ceiling = $activity->activityProject->count() > 0 ?
                        ($activity->activityProject[0]->referenceActivityProject && $activity->activityProject[0]->referenceActivityProject->fe_q4 > 0 ? $activity->activityProject[0]->referenceActivityProject->fe_q4 : 0) : 0;
                    $has_reference_activity_project = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->referenceActivityProject ? true : false) : false;
                    $ps_ceiling =floatval($ps_q1_ceiling) + floatval($ps_q2_ceiling) + floatval($ps_q3_ceiling) + floatval($ps_q4_ceiling);
                    $mooe_ceiling =floatval($mooe_q1_ceiling) + floatval($mooe_q2_ceiling) + floatval($mooe_q3_ceiling) + floatval($mooe_q4_ceiling);
                    $co_ceiling =floatval($co_q1_ceiling) + floatval($co_q2_ceiling) + floatval($co_q3_ceiling) + floatval($co_q4_ceiling);
                    $fe_ceiling =floatval($fe_q1_ceiling) + floatval($fe_q2_ceiling) + floatval($fe_q3_ceiling) + floatval($fe_q4_ceiling);
                    // dd($ps_q1_ceiling);
                    $act_comments = $activity->activityProject->count() > 0 ? $activity->activityProject[0]->comments : [];
                    $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
                    $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                    $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
                    $fe_total = floatval($fe_q1) + floatval($fe_q2) + floatval($fe_q3) + floatval($fe_q4);
                    // dd($activity->activityProject);
                    // dd($activity->activityProject->count() > 0 ? $activity->activityProject[0]->is_active : 0);
                    return [
                        "seq_no" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->seq_no : null,
                        "id" => $activity->id,
                        "date_from" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_from : null,
                        "date_to" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_to : null,
                        "description" => $activity->description,
                        "project_description" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->activity_project_description : null,
                        "target_indicator" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->target_indicator : null,
                        "activity_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->id : null,
                        "project_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->project_id : null,
                        "ps_q1" => $ps_q1,
                        "ps_q2" => $ps_q2,
                        "ps_q3" => $ps_q3,
                        "ps_q4" => $ps_q4,
                        "ps_q1_ceiling" => $ps_q1_ceiling,
                        "ps_q2_ceiling" => $ps_q2_ceiling,
                        "ps_q3_ceiling" => $ps_q3_ceiling,
                        "ps_q4_ceiling" => $ps_q4_ceiling,
                        "ps_total" => $ps_total,
                        "ps_ceiling" => $ps_ceiling,
                        "mooe_q1" => $mooe_q1,
                        "mooe_q2" => $mooe_q2,
                        "mooe_q3" => $mooe_q3,
                        "mooe_q4" => $mooe_q4,
                        "mooe_q1_ceiling" => $mooe_q1_ceiling,
                        "mooe_q2_ceiling" => $mooe_q2_ceiling,
                        "mooe_q3_ceiling" => $mooe_q3_ceiling,
                        "mooe_q4_ceiling" => $mooe_q4_ceiling,
                        "mooe_total" => $mooe_total,
                        "mooe_ceiling" => $mooe_ceiling,
                        "co_q1" => $co_q1,
                        "co_q2" => $co_q2,
                        "co_q3" => $co_q3,
                        "co_q4" => $co_q4,
                        "co_q1_ceiling" => $co_q1_ceiling,
                        "co_q2_ceiling" => $co_q2_ceiling,
                        "co_q3_ceiling" => $co_q3_ceiling,
                        "co_q4_ceiling" => $co_q4_ceiling,
                        "co_total" => $co_total,
                        "co_ceiling" => $co_ceiling,
                        "fe_q1" => $fe_q1,
                        "fe_q2" => $fe_q2,
                        "fe_q3" => $fe_q3,
                        "fe_q4" => $fe_q4,
                        "fe_q1_ceiling" => $fe_q1_ceiling,
                        "fe_q2_ceiling" => $fe_q2_ceiling,
                        "fe_q3_ceiling" => $fe_q3_ceiling,
                        "fe_q4_ceiling" => $fe_q4_ceiling,
                        "fe_total" => $fe_total,
                        "fe_ceiling" => $fe_ceiling,
                        "has_reference_activity_project" => $has_reference_activity_project,
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
                ->sortBy('seq_no')   // 👈 ORDER BY ASC
                ->values();          // 👈 reset array indexes;
                if($item->id==2589){
                    // dd($item->strategyProject, $item->activity);
                }
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
                    "project_description" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->strategy_project_description : null,
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
        // dd($imp);
        // Log::info('IMPLEMENTATION DATA', [
        //     'count' => $imp->count(),
        //     'data' => $imp->toArray()
        // ]);
        // dd($imp, $id, $paps, $idpaps);
        return $imp;
    }

    public function streamlined_delete($id, $table)
    {
        // $allowedTables = ['revision_plans', 'budget_requirements', 'users'];
        // if (!in_array($table, $allowedTables)) {
        //     abort(403, 'Table not allowed.');
        // }
        if ($table == 'strategies') {
            // $strat = Strategy::where('id', $id)->first();
            // $strat->delete();

            $strat_proj = StrategyProject::where('strategy_id', $id)->get();
            foreach ($strat_proj as $proj) {
                $proj->is_active = 0;
                $proj->save();
            }

            $activities = Activity::where('strategy_id', $id)->get();
            foreach ($activities as $act) {
                ActivityProject::where('activity_id', $act->id)
                    ->update(['is_active' => 0]);
            }
        } else if ($table == 'activities') {
            // $act = Activity::where('id', $id)->first();
            // $act->delete();

            $act_proj = ActivityProject::where('activity_id', $id)->first();
            $act_proj->is_active = 0;
            $act_proj->save();
        } else {
            // Delete the record
            $deleted = DB::table($table)
                ->where('id', $id) // assuming primary key is 'id'
                ->delete();
        }
        return redirect()->back()->with('message', 'Successfully deleted');
        // return response()->json([
        //     'success' => $deleted ? true : false,
        //     'deleted_id' => $id,
        //     'table' => $table
        // ]);
    }
    public function streamlined_delete_act_strat($id, $table, $project_id){
        if ($table == 'strategies') {
            // $strat = Strategy::where('id', $id)->first();
            // $strat->delete();

            $strat_proj = StrategyProject::where('strategy_id', $id)
                ->where('project_id', $project_id)
                ->get();
            foreach ($strat_proj as $proj) {
                $proj->is_active = 0;
                $proj->save();
            }

            $activities = Activity::where('strategy_id', $id)->get();
            foreach ($activities as $act) {
                ActivityProject::where('activity_id', $act->id)
                    ->where('project_id', $project_id)
                    ->update(['is_active' => 0]);
            }
        } else if ($table == 'activities') {
            // $act = Activity::where('id', $id)->first();
            // $act->delete();

            $act_proj = ActivityProject::where('activity_id', $id)
                ->where('project_id', $project_id)
                ->first();
            $act_proj->is_active = 0;
            $act_proj->save();
        }
        return redirect()->back()->with('message', 'Successfully deleted');
    }
    public function team_members($id)
    {
        return TeamPlan::with('userEmployee', 'comments', 'comments.user')
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
    }
    public function monitoring_and_evaluation($id)
    {
        return Monitoring_and_evaluation::with(['comments', 'comments.user'])
            ->where('revision_plan_id', $id)
            ->orderBy('created_at', 'asc')
            ->get();
    }
    public function signatories($id)
    {
        return Signatory::with(['comments'])->where('revision_plan_id', $id)
            ->orderByRaw("FIELD(acted, 'Prepared', 'Reviewed', 'Noted', 'Recommending Approval','Approved','As to AIP Inclusion','As to AIP Appropriation')")
            ->get();
    }
    public function risk_management($id)
    {
        return Risk_manangement::with(['comments', 'comments.user'])->where('revision_plan_id', $id)->get();
    }
}
