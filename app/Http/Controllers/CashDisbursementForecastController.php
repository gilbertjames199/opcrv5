<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CashDisbursementForecast;
use App\Models\BudgetRequirement;
use App\Models\CashDisbursementForecastAccount;
use App\Models\ActivityProject;
use App\Models\RevisionPlan;
use Carbon\Carbon;


class CashDisbursementForecastController extends Controller
{
    protected $cdf;

    public function __construct(CashDisbursementForecast $cdf){
        $this->cdf=$cdf;
    }

    public function set_cdf(Request $request, $revision_plan_id){
        $rev_plan =$this->get_revision_plan($revision_plan_id);

        if(!$rev_plan){
            return redirect()->back()->with('error', 'Revision Plan not found. Please try again.');
        }
        if($rev_plan->type=='p'){
            return redirect()->back()->with('error', 'Cash Disbursement Forecast is not applicable for Project Profile.');
        }
        $data = CashDisbursementForecast::where('revision_plan_id', $revision_plan_id)
                    ->get();
        $budgetRequirements=[];
        $implementationSchedules=[];
        if ($data->isEmpty()) {
            $this->generateCDF($request, $revision_plan_id);
        }
        $data = $this->all_cdf_accounts($revision_plan_id);

        // dd($data);
        // If found, return data
        return inertia('CashDisbursementForecast/Index',[
            'data'=>$data,
            'revid'=>$revision_plan_id,
        ]);
    }
    public function generateCDF(Request $request, $revision_plan_id){
        $newCDF  = CashDisbursementForecast::create([
                'revision_plan_id' => $revision_plan_id,
                'version' => 1,
                'status' => 1
            ]);
            // Return the newly created row
            // return [$new];


            // --------------------------
            // GET ALL BUDGET REQUIREMENTS
            // --------------------------
            $budgetRequirements = BudgetRequirement::where('revision_plan_id', $revision_plan_id)->get();

            // GET IMPLEMENTATION SCHEDULES
            $implementationSchedules = $this->getBudgetTotal($revision_plan_id);

            // If no Budget Requirements → return empty (and CDF with no accounts)
            if ($budgetRequirements->isEmpty()) {
                return [$newCDF];
            }

            // --------------------------
            // CREATE A CDF ACCOUNT PER BUDGET REQUIREMENT
            // --------------------------
            foreach ($budgetRequirements as $br) {

                CashDisbursementForecastAccount::create([
                    'budget_requirement_id'         => $br->id,
                    'cash_disbursement_forecast_id' => $newCDF->id,

                    // Monthly defaults
                    'january'   => 0,
                    'february'  => 0,
                    'march'     => 0,
                    'april'     => 0,
                    'may'       => 0,
                    'june'      => 0,
                    'july'      => 0,
                    'august'    => 0,
                    'september' => 0,
                    'october'   => 0,
                    'november'  => 0,
                    'december'  => 0,
                ]);
            }
        return $newCDF;
    }
    public function all_cdf_accounts($revision_plan_id){
        $categoriesOrder = [
            'Personnel Services',
            'Maintenance, Operating, and Other Expenses',
            'Financial Expenses',
            'Capital Outlay'
        ];
        return CashDisbursementForecast::with([
            'cashDisbursementForecastAccount.budgetRequirement',
            'revisionPlan.activityProject'
        ])
        ->where('revision_plan_id', $revision_plan_id)
        ->whereHas('cashDisbursementForecastAccount.budgetRequirement') // Ensure there are related budget requirements
        ->get()
        ->map(function($item) use ($categoriesOrder) {
            $grouped = [];

            // Initialize empty arrays for each category
            foreach ($categoriesOrder as $cat) {
                $grouped[$cat] = [
                    'category' => $cat,
                    'items' => []
                ];
            }

            // Loop through cashDisbursementForecastAccounts
            foreach ($item->cashDisbursementForecastAccount as $account) {
                $budget = $account->budgetRequirement;

                if ($budget && in_array($budget->category, $categoriesOrder)) {
                    $grouped[$budget->category]['items'][] = [
                        // CashDisbursementForecastAccount columns
                        'id' => $account->id,
                        'budget_requirement_id' => $account->budget_requirement_id,
                        'cash_disbursement_forecast_id' => $account->cash_disbursement_forecast_id,
                        'january' => $account->january,
                        'february' => $account->february,
                        'march' => $account->march,
                        'april' => $account->april,
                        'may' => $account->may,
                        'june' => $account->june,
                        'july' => $account->july,
                        'august' => $account->august,
                        'september' => $account->september,
                        'october' => $account->october,
                        'november' => $account->november,
                        'december' => $account->december,

                        // BudgetRequirement columns
                        'budget_id' => $budget->id,
                        'revision_plan_id' => $budget->revision_plan_id,
                        'particulars' => $budget->particulars,
                        'account_code' => $budget->account_code,
                        'sip_number' => $budget->sip_number,
                        'amount' => $budget->amount,
                        'proposed_budget' => $budget->proposed_budget,
                        'category' => $budget->category,
                        'category_gad' => $budget->category_gad,
                        'source' => $budget->source,
                    ];
                }
            }
            // dd($item->revisionPlan);
            // dd($grouped);
            return [
                'id' => $item->id,
                'prepared_by' => $item->prepared_by,
                'position_prepared_by' => $item->position_prepared_by,
                'approved_by' => $item->approved_by,
                'position_approved_by' => $item->position_approved_by,
                'revision_plan_id' => $item->revision_plan_id,
                'version' => $item->version,
                'status' => $item->status,
                'project_title' => $item->revisionPlan->project_title,
                'implementation' => $item->revisionPlan->activityProject,
                'cash_disbursement_forecast_accounts' => array_values($grouped),
            ];
        });
    }
    public function getBudgetTotal($idrev)
    {
        $total = ActivityProject::where('project_id', $idrev)
            ->select(
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

        // $total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
        //     $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
        //     $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        return $total;
    }
    public function updateCdf(Request $request, $revision_plan_id)
    {
        $request->validate([
            'id' => 'required|integer',
            'column' => 'required|string',
            'data' => 'nullable'
        ]);

        // Find the tuple in CashDisbursementForecastAccount
        $account = CashDisbursementForecastAccount::find($request->id);

        if (!$account) {
            return response()->json(['message' => 'Record not found'], 404);
        }

        // Update only the specified column
        $column = $request->column;
        $account->$column = $request->data;

        $account->save();

        return response()->json([
            'message' => 'Updated successfully',
            'updated_column' => $column,
            'new_value' => $request->data
        ], 200);
    }
    // Route::patch('/{revision_plan_id}', [CashDisbursementForecastController::class, 'updateCdf']);
    public function updateSignatories(Request $request, $revision_plan_id)
    {
        // dd("diri siya niadto");
        $request->validate([
            'id' => 'required|integer',
            'column' => 'required|string',
            'data' => 'nullable'
        ]);

        // Find the tuple in CashDisbursementForecastAccount
        $account = CashDisbursementForecast::find($request->id);

        if (!$account) {
            return response()->json(['message' => 'Record not found'], 404);
        }

        // Update only the specified column
        $column = $request->column;
        $account->$column = $request->data;

        $account->save();

        return response()->json([
            'message' => 'Updated successfully',
            'updated_column' => $column,
            'new_value' => $request->data
        ], 200);
    }
    public function get_revision_plan($revision_plan_id){
        $data = RevisionPlan::where('id', $revision_plan_id)
                    ->first();
        return $data;
    }

    public function cdf_api(Request $request){

        $revision_plan_id = $request->revision_plan_id;
        $cdf_id=$request->cash_disbursement_forecast_id;
        $category = $request->category;
        $data = CashDisbursementForecastAccount::with(['budgetRequirement'])
                    ->where('cash_disbursement_forecast_id', $cdf_id)
                    ->whereHas('budgetRequirement', function($q) use ($category){
                        $q->where('category', $category);
                    })
                    ->get()
                    ->map(function($item){
                        return [
                            'account_code' => $item->budgetRequirement->account_code,
                            'particulars' => $item->budgetRequirement->particulars,
                            'appropriations' => $item->budgetRequirement->amount,
                            'category' => $item->budgetRequirement->category,
                            'january' => $item->january,
                            'february' => $item->february,
                            'march' => $item->march,
                            'april' => $item->april,
                            'may' => $item->may,
                            'june' => $item->june,
                            'july' => $item->july,
                            'august' => $item->august,
                            'september' => $item->september,
                            'october' => $item->october,
                            'november' => $item->november,
                            'december' => $item->december,
                            'total' => $item->january + $item->february + $item->march + $item->april + $item->may + $item->june + $item->july + $item->august + $item->september + $item->october + $item->november + $item->december,
                        ];
                    });

        return $data;
    }
    public function cdf_categories(Request $request){
        $revision_plan_id=$request->revision_plan_id;
        $revPlan = RevisionPlan::with(['paps', 'paps.office'])
                    ->where('id', $revision_plan_id)
                    ->first();
        // dd($revPlan->paps);
        $res=[];
        if($revPlan){
               $res = [
                    'id'            => $revPlan->id,
                    'project_title' => $revPlan->project_title,
                    'year'          => $revPlan->date_start ? Carbon::parse($revPlan->date_start)->format('Y') : null,
                    'office'        => optional(optional($revPlan->paps)->office)->FFUNCTION ?? 'N/A',
                    'type'          => $revPlan->type,
                ];
        }
        // dd($revPlan);
        // dd($result);
        // dd($res['office']);
        $totals = $this->getCDFTotals($revision_plan_id);

        $result = CashDisbursementForecastAccount::with([
                'budgetRequirement',
                'cashDisbursementForecast'
            ])
            ->whereHas('cashDisbursementForecast', fn($q) =>
                $q->where('revision_plan_id', $revision_plan_id)
            )
            ->whereHas('budgetRequirement')
            ->get()
            ->groupBy(fn($a) => optional($a->budgetRequirement)->category)
            ->filter(fn($cat, $key) => $key) // remove null category
            ->map(function($group, $category) use ($revision_plan_id, $totals, $res ) {

                $first = $group->first();
                $cdf   = $first->cashDisbursementForecast;

                return [
                    'category' => $category,
                    'cash_disbursement_forecast_id' =>
                        optional(CashDisbursementForecast::where('revision_plan_id', $revision_plan_id)->first())->id,

                    // ✔ Include your added details here (kept flat)
                    'prepared_by'  => $cdf->prepared_by  ?? '',
                    'position_prepared_by'  => $cdf->position_prepared_by  ?? '',
                    'approved_by'  => $cdf->approved_by  ?? '',
                    'position_approved_by'  => $cdf->position_approved_by  ?? '',

                    'office'        => $res['office'] ?? '',
                    'year'          => $res['year'] ?? '',
                    'project_title' => $res['project_title'] ?? '',

                    // Totals
                    'budget_requirement' => $totals['budget_requirement'],
                    'january'   => $totals['january'],
                    'february'  => $totals['february'],
                    'march'     => $totals['march'],
                    'april'     => $totals['april'],
                    'may'       => $totals['may'],
                    'june'      => $totals['june'],
                    'july'      => $totals['july'],
                    'august'    => $totals['august'],
                    'september' => $totals['september'],
                    'october'   => $totals['october'],
                    'november'  => $totals['november'],
                    'december'  => $totals['december'],
                    'total_months' => $totals['total_months'],
                ];
            })
            ->values(); // <- THIS FIXES THE ARRAY SHAPE

        // dd($totals['budget_requirement']);
        // $result = CashDisbursementForecastAccount::with(['budgetRequirement', 'cashDisbursementForecast'])
        //         ->whereHas('cashDisbursementForecast', fn($q) =>
        //             $q->where('revision_plan_id', $revision_plan_id)
        //         )
        //         ->whereHas('budgetRequirement')
        //         ->get()
        //         ->groupBy(fn($a) => optional($a->budgetRequirement)->category)
        //         ->filter(fn($cat, $key) => $key)      // remove null keys
        //         ->keys()                              // unique categories
        //         ->map(fn($cat)=> [
        //             'category' => $cat,
        //             'cash_disbursement_forecast_id' =>
        //                 optional(CashDisbursementForecast::where('revision_plan_id', $revision_plan_id)->first())->id,
        //             'office' => optional($result)['office'] ?? 'N/A',
        //             'year' => optional($result)['year'] ?? 'N/A',
        //             'project_title' => optional($result)['project_title'] ?? 'N/A',
        //             // dd($result[$cat]),
        //             'budget_requirement'=>$totals['budget_requirement'],
        //             'january'=>$totals['january'],
        //             'february'=>$totals['february'],
        //             'march'=>$totals['march'],
        //             'april'=>$totals['april'],
        //             'may'=>$totals['may'],
        //             'june'=>$totals['june'],
        //             'july'=>$totals['july'],
        //             'august'=>$totals['august'],
        //             'september'=>$totals['september'],
        //             'october'=>$totals['october'],
        //             'november'=>$totals['november'],
        //             'december'=>$totals['december'],
        //         ]);

        return $result;
    }
    protected function getCDFTotals($revision_plan_id){
        $totals = CashDisbursementForecastAccount::with([
                    'budgetRequirement',
                    'cashDisbursementForecast'
                ])
                ->whereHas('cashDisbursementForecast', fn($q) =>
                    $q->where('revision_plan_id', $revision_plan_id)
                )
                ->whereHas('budgetRequirement')
                ->get()
                ->reduce(function ($carry, $item) {

                    $cdf = $item;
                    $br  = $item->budgetRequirement;

                    // Full month names (column names must match these)
                    $months = [
                        'january', 'february', 'march',
                        'april', 'may', 'june',
                        'july', 'august', 'september',
                        'october', 'november', 'december'
                    ];

                    foreach ($months as $m) {
                        $amount = $cdf->$m ?? 0;
                        $carry[$m] += $amount;
                        $carry['total_months'] += $amount;
                    }

                    // Sum total Budget Requirement
                    $carry['budget_requirement'] += $br->amount ?? 0;

                    return $carry;
                }, [
                    'january' => 0, 'february' => 0, 'march' => 0,
                    'april' => 0, 'may' => 0, 'june' => 0,
                    'july' => 0, 'august' => 0, 'september' => 0,
                    'october' => 0, 'november' => 0, 'december' => 0,
                    'budget_requirement' => 0,
                    'total_months' => 0,
                ]);
        return $totals;
        // $totals = CashDisbursementForecastAccount::with(['budgetRequirement', 'cashDisbursementForecast'])
        //         ->whereHas('cashDisbursementForecast', fn($q) =>
        //             $q->where('revision_plan_id', $revision_plan_id)
        //         )
        //         ->whereHas('budgetRequirement')
        //         ->get()
        //         ->groupBy(fn($a) => $a->revision_plan_id)
        //         ->map(fn($items, $key) => [
        //             'category' => $key,
        //             'total_appropriations' => $items->sum(fn($i) => optional($i->budgetRequirement)->amount ?? 0),
        //             'total_january' => $items->sum(fn($i) => $i->january),
        //             'total_february' => $items->sum(fn($i) => $i->february),
        //             'total_march' => $items->sum(fn($i) => $i->march),
        //             'total_april' => $items->sum(fn($i) => $i->april),
        //             'total_may' => $items->sum(fn($i) => $i->may),
        //             'total_june' => $items->sum(fn($i) => $i->june),
        //             'total_july' => $items->sum(fn($i) => $i->july),
        //             'total_august' => $items->sum(fn($i) => $i->august),
        //             'total_september' => $items->sum(fn($i) => $i->september),
        //             'total_october' => $items->sum(fn($i) => $i->october),
        //             'total_november' => $items->sum(fn($i) => $i->november),
        //             'total_december' => $items->sum(fn($i) => $i->december),
        //         ]);
        // return $totals;
    }
}
