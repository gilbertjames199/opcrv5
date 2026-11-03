<?php

namespace App\Http\Controllers;

use App\Models\ActivityProject;
use App\Models\AnnualInvestmentPlanInstitutional;
use App\Models\BudgetRequirement;
use App\Models\OOE;
use App\Models\RevisionPlan;
use App\Models\StrategyProject;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class BudgetRequirementController extends Controller
{
    protected $model;
    public function __construct(BudgetRequirement $model)
    {
        $this->model = $model;
    }
    public function getFirstLastName()
    {
        $date = '2023-12-31';
        return convertDateString($date);
        //return splitName("Gilbert James");
    }
    public function index(Request $request, $idrev)
    {
        // $start = microtime(true);
        // dd("budgetary reqwuirements");
        // $data = $this->model->where('revision_plan_id','=',$idrev)
        //         ->orderBy('category', 'desc')
        //         ->orderBy('particulars')
        //         ->get();
        $revs = RevisionPlan::where('id', '=', $idrev)->get();
        $revo = $revs[0];
        if ($revo->status > -1) {
                $status_words = [
                    '0' => 'submitted',
                    '1' => 'reviewed',
                    '2' => 'locked'
                ];
                return redirect()->back()->with('error', 'Cannot access the budgetary requirements module. The selected project profile is already ' . $status_words[$revo->status] . '.');
            }
        $gad_version = $revs[0]->gad_version;
        // dd($revo);
        $total = 0;
        // dd($revs);
        if ($revs[0]->is_strategy_based) {
            $total = $this->getStratTotal($idrev);
        } else {
            $total = $this->getActivityTotal($idrev);
        }
        // dd($total);
        $imp_mooe = $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4');
        $imp_ps =  $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4');
        $imp_co = $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        $imp_fe = $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');

        $total = $imp_mooe + $imp_ps + $imp_co + $imp_fe;
        // dd($gad_version);
        $all_budget_requirements = $this->model
                ->where('revision_plan_id', '=', $idrev)
                ->whereIn('category', ['Maintenance, Operating, and Other Expenses', 'Capital Outlay', 'Personnel Services', 'Financial Expenses'])
                ->when($gad_version!="2", function($query){
                    $query->whereIn('category_gad', ['GAD', 'NON-GAD']);
                })
                ->orderBy('category', 'desc')
                ->orderBy('particulars')
                ->get();
        // dd($all_budget_requirements);
        if($gad_version=="2"){
            //MOOE
            $mooe_gad = collect();

            $mooe_non = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Maintenance, Operating, and Other Expenses';
            });

            //FINANCIAL EXPENSES
            $fe_gad = collect();

            $fe_non = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Financial Expenses';
            });

            //Capital Outlay
            $cap_gad = collect();

            $cap_non = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Capital Outlay';
            });


            //Personnel Services
            $ps_gad = collect();

            $ps_non = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Personnel Services';
            });

            //TOTAL GAD Amount
            $GAD_total = $all_budget_requirements
                ->filter(fn($item) => $item->category_gad === 'GAD')
                ->sum('amount');
            $BUD_total = $all_budget_requirements->sum('amount');

            // SUM
            $s_mooe_gad = 0;
            $s_mooe_non = $mooe_non->sum('amount');

            $s_cap_gad = 0;
            $s_cap_non = $cap_non->sum('amount');

            $s_ps_gad = 0;
            $s_ps_non = $ps_non->sum('amount');

            $s_fe_gad = 0;
            $s_fe_non = $fe_non->sum('amount');
        }else{
            // ALL BUDGET REQUIREMENT

            // dd($all_budget_requirements);
            //MOOE
            $mooe_gad = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Maintenance, Operating, and Other Expenses' && $item->category_gad === 'GAD';
            });

            $mooe_non = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Maintenance, Operating, and Other Expenses' && $item->category_gad === 'NON-GAD';
            });

            //FINANCIAL EXPENSES
            $fe_gad = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Financial Expenses' && $item->category_gad === 'GAD';
            });

            $fe_non = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Financial Expenses' && $item->category_gad === 'NON-GAD';
            });

            //Capital Outlay
            $cap_gad = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Capital Outlay' && $item->category_gad === 'GAD';
            });

            $cap_non = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Capital Outlay' && $item->category_gad === 'NON-GAD';
            });


            //Personnel Services
            $ps_gad = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Personnel Services' && $item->category_gad === 'GAD';
            });

            $ps_non = $all_budget_requirements->filter(function ($item) {
                return $item->category === 'Personnel Services' && $item->category_gad === 'NON-GAD';
            });

            //TOTAL GAD Amount
            $GAD_total = $all_budget_requirements
                ->filter(fn($item) => $item->category_gad === 'GAD')
                ->sum('amount');
            $BUD_total = $all_budget_requirements->sum('amount');

            // SUM
            $s_mooe_gad = $mooe_gad->sum('amount');
            $s_mooe_non = $mooe_non->sum('amount');

            $s_cap_gad = $cap_gad->sum('amount');
            $s_cap_non = $cap_non->sum('amount');

            $s_ps_gad = $ps_gad->sum('amount');
            $s_ps_non = $ps_non->sum('amount');

            $s_fe_gad = $fe_gad->sum('amount');
            $s_fe_non = $fe_non->sum('amount');
            // dd($revs);

            // dd($gad_version);

        }
        return inertia('BudgetRequirement/Index', [
                "mooe_gad" => $mooe_gad->values()->all(),
                "mooe_non" => $mooe_non->values()->all(),
                "cap_gad" => $cap_gad->values()->all(),
                "cap_non" => $cap_non->values()->all(),
                "ps_gad" => $ps_gad->values()->all(),
                "ps_non" => $ps_non->values()->all(),
                "fe_gad" => $fe_gad->values()->all(),
                "fe_non" => $fe_non->values()->all(),
                "idrev" => $idrev,
                "revs" => $revs,
                "gad_version" =>$gad_version,
                "s_mooe_gad" => $s_mooe_gad,
                "s_mooe_non" => $s_mooe_non,
                "s_cap_gad" => $s_cap_gad,
                "s_cap_non" => $s_cap_non,
                "s_ps_gad" => $s_ps_gad,
                "s_ps_non" => $s_ps_non,
                "s_fe_gad" => $s_fe_gad,
                "s_fe_non" => $s_fe_non,
                "implementation_plan" => $total,
                "imp_mooe" => $imp_mooe,
                "imp_ps" => $imp_ps,
                "imp_co" => $imp_co,
                "imp_fe" => $imp_fe,
                "filters" => $request->only(['search']),
                "GAD_total" => $GAD_total,
                "BUD_total" => $BUD_total,

                'can' => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);

    }
    public function getStratTotal($idrev)
    {
        $total = StrategyProject::where('project_id', $idrev)
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
            ->get();

        // $total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
        //     $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
        //     $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        return $total;
    }
    public function getActivityTotal($idrev)
    {
        $total = ActivityProject::with(['activity.strat.strategyProject', 'revisionPlan.paps'])
            ->where('project_id', $idrev)
            // ->select(
            //     'ps_q1',
            //     'ps_q2',
            //     'ps_q3',
            //     'ps_q4',
            //     'mooe_q1',
            //     'mooe_q2',
            //     'mooe_q3',
            //     'mooe_q4',
            //     'co_q1',
            //     'co_q2',
            //     'co_q3',
            //     'co_q4',
            //     'fe_q1',
            //     'fe_q2',
            //     'fe_q3',
            //     'fe_q4',

            // )
            ->where('is_active', '1')
            ->whereHas('activity.strat.strategyProject', function ($q) use ($idrev) {
                $q->whereNull('deleted_at')
                    ->where('project_id', $idrev)
                    ->where('is_active', '1');
            })
            ->whereHas('activity.strat', fn($q) => $q->whereNull('deleted_at'))
            ->whereHas('activity', fn($q) => $q->whereNull('deleted_at'))
            ->get();
        // dd($total);
        // if($idrev==51){
        //     dd($total->pluck('activity_id'));
        // }
            // dd("fsddfdsf");
        // $total = ActivityProject::with(['activity', 'activity.strat','activity.strat.strategyProject'])
        //     ->where('project_id', $idrev)
        //     ->where('is_active', '1')
        //     ->whereHas('activity', function ($q) use($idrev) {
        //         $q->whereNull('deleted_at')   // activity must NOT be soft deleted
        //             ->whereHas('strat', function ($q2)  use($idrev){
        //                 $q2->whereNull('deleted_at')   // strategy must NOT be soft deleted
        //                     ->whereHas('strategyProject', function ($q3) use($idrev){
        //                         $q3->where('project_id', $idrev)
        //                             ->whereNull('deleted_at');   // strategyProject must NOT be soft deleted
        //                     });
        //             });
        //     })
        //     ->get();
        // dd($total);

        // $total = ActivityProject::with([
        //         'activity.strat.strategyProject'
        //     ])
        //     ->where('project_id', $idrev)
        //     ->where('is_active', '1')

        //     ->whereHas('activity', function ($q) {
        //         $q->whereNull('deleted_at');
        //     })

        //     ->whereHas('activity.strat', function ($q) {
        //         $q->whereNull('deleted_at');
        //     })

        //     ->whereHas('activity.strat.strategyProject', function ($q) use ($idrev) {
        //         $q->whereNull('deleted_at')
        //         ->where('project_id', $idrev)
        //         ->where('is_active', '1');
        //     })

        //     ->select([
        //         'ps_q1','ps_q2','ps_q3','ps_q4',
        //         'mooe_q1','mooe_q2','mooe_q3','mooe_q4',
        //         'co_q1','co_q2','co_q3','co_q4',
        //         'fe_q1','fe_q2','fe_q3','fe_q4'
        //     ])
        //     ->get();
        // if($idrev==148){
        //     // dd($total);
        // }
        // // $total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
        //     $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
        //     $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        return $total;
    }
    public function create(Request $request, $idrev)
    {
        $revs = RevisionPlan::where('id', $idrev)->get();
        $budgets = BudgetRequirement::where('revision_plan_id', $idrev)->get();
        $budgets = $budgets->pluck('account_code');
        $acc = DB::connection('mysql2')->table('chartofaccounts')->get();
        $accounts = $acc->pluck('FTITLE');
        $code = $acc->pluck('FACTCODE');
        //dd($idrev);
        return inertia('BudgetRequirement/Create', [
            "idrev" => $idrev,
            "revs" => $revs,
            "accounts" => $accounts,
            "budgets" => $budgets,
            "codes" => $code,
            "accounts_raw" => $acc,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        //dd($request->revision_plan_id);
        $attributes = $request->validate([
            'revision_plan_id' => 'required',
            'particulars' => 'required',
            // 'account_code'=>'required',
            'amount' => 'required',
            'category' => 'required',
            'category_gad' => 'required',
        ]);

        $budg = new BudgetRequirement();
        $famount = $attributes['amount'];
        $budg->revision_plan_id = $attributes['revision_plan_id'];
        $budg->particulars = $attributes['particulars'];
        $budg->account_code = $request->account_code;
        $budg->amount = $attributes['amount'];
        $budg->category = $attributes['category'];
        $budg->category_gad = $attributes['category_gad'];
        $budg->source = $request->source;
        $budg->save();

        $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $attributes['revision_plan_id'])
            ->sum('amount');

        // $rev=RevisionPlan::find($attributes['revision_plan_id']);
        // $rev->amount = $budgetary_requirement;
        // $rev->save();
        $msg = "Successfully added budget requirement.";


        return redirect('/budget/' . $request->revision_plan_id)
            ->with('message', $msg);
        //dd($rev->amount);
    }
    public function edit(Request $request, $idbudget)
    {

        $editData = BudgetRequirement::find($idbudget);
        // dd($editData);
        $idrev = $editData->revision_plan_id;
        $revs = RevisionPlan::where('id', $idrev)->get();
        $budgets = BudgetRequirement::where('revision_plan_id', $idrev)->get();
        $budgets = $budgets->pluck('account_code');
        $acc = DB::connection('mysql2')
            ->table('chartofaccounts')
            ->selectRaw("
                            trim(FTITLE) as FTITLE,
                            FACTCODE
                        ")
            ->get();
        $accounts = $acc->pluck('FTITLE');
        $code = $acc->pluck('FACTCODE');

        //dd($idrev);
        return inertia('BudgetRequirement/Create', [
            "revision_plan_id" => $idrev,
            "revs" => $revs,
            "accounts" => $accounts,
            "budgets" => $budgets,
            "codes" => $code,
            "editData" => $editData,
            "accounts_raw" => $acc,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request, $idrev)
    {
        // dd($request->id);
        // dd($request->revision_plan_id);
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        // dd($data);
        //dd($request);
        $data->update([
            'particulars' => $request->particulars,
            'account_code' => $request->account_code,
            'amount' => $request->amount,
            'category' => $request->category,
            'category_gad' => $request->category_gad,
            'source' => $request->source,
        ]);
        $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $request->revision_plan_id)
            ->sum('amount');
        // $rev=RevisionPlan::find($request->revision_plan_id);
        // $rev->amount = $budgetary_requirement;
        // $rev->save();
        return redirect('/budget/' . $idrev)
            ->with('message', 'Budget Requirement updated');
    }

    public function destroy(Request $request)
    {
        //GET Revision Plan ID
        $revision_plan_id = BudgetRequirement::where('id', $request->id)->first();
        $revision_plan_id = $revision_plan_id->revision_plan_id;

        //DELETE BUDGET REQUIREMENT
        $data = $this->model->findOrFail($request->id);
        $data->delete();

        //GET THE TOTAL BUDGETARY REQUIREMENT
        // $budgetary_requirement =BudgetRequirement::where('revision_plan_id',$revision_plan_id)
        //                                     ->sum('amount');

        //UPDATE THE TOTAL AMOUNT OF THE REVISION PLAN
        // $rev=RevisionPlan::find($revision_plan_id);
        // $rev->amount = $budgetary_requirement;
        // $rev->save();

        //return back()->with('warning', 'Budget Requirement Deleted');
        return redirect('/budget/' . $revision_plan_id)
            ->with('message', 'Budget Requirement updated');
    }

    public function store_budget_from_revplan(Request $request)
    {
        // $request->validate([
        //     'revision_plan_id' => 'required|integer',
        //     'particulars' => 'required|string|max:255',
        //     'account_code' => 'required|string|max:50',
        //     'amount' => 'nullable|numeric',
        //     'proposed_budget' => 'nullable|numeric',
        //     'category' => 'required|string|max:50',
        //     'category_gad' => 'required|string|max:50',
        //     'source' => 'nullable|string|max:255',
        //     'selected_chart_of_account' => 'nullable|string|max:100',
        // ]);
        // dd($request->revision_plan_id);
        // Create budget requirement
        $revplan = RevisionPlan::where('id', $request->revision_plan_id)->first();
        $year = Carbon::parse($revplan->date_start)->year;
        $aip_institutional = AnnualInvestmentPlanInstitutional::where('year_period', $year)->first();
        // dd($revplan, $aip_institutional);
        $sip_number = null;
        if ($aip_institutional) {
            if (intval($aip_institutional->sip_period) > 0) {
                $sip_number = "SIP" . $aip_institutional->sip_period;
            }
        }
        $budget = BudgetRequirement::create([
            'revision_plan_id' => $request->revision_plan_id,
            'particulars' => $request->particulars,
            'account_code' => $request->account_code,
            'amount' => $request->amount ? $request->amount : "0.00",
            'proposed_budget' => $request->proposed_budget ? $request->proposed_budget : "0.00",
            'category' => $request->category,
            'category_gad' => $request->category_gad,
            'source' => $request->source,
            'sip_number' => $sip_number
            // 'selected_chart_of_account' => $request->selected_chart_of_account,
        ]);

        // Return JSON response
        return response()->json($budget);
    }

    public function getbudgetCategories(Request $request){
        $revplan = RevisionPlan::where('id', $request->revision_plan_id)->first();
        // dd($revplan);
        if($revplan->gad_version=="2"){
            $gad_categories=response()->json([
                    [
                        "revision_plan_id" => $request->revision_plan_id,
                        "category_gad"     => null
                    ]
                ]);
        }else{
            $gad_categories = BudgetRequirement::select('category_gad')
                ->whereNotNull('category_gad')
                ->where('revision_plan_id', $request->revision_plan_id)
                ->where('category_gad', '!=', '')
                ->groupBy('category_gad')
                ->get()
                ->map(function ($gad)use($request) {

                    return [
                        'revision_plan_id'=>$request->revision_plan_id,
                        'category_gad' => $gad->category_gad,
                        // 'categories' => $categories
                    ];
                })
                ->filter() // only include if there is at least 1 category
                ->values();
        }


        return $gad_categories;
    }
    public function getBudgetCategoriesType(Request $request){

        if($request->category_gad==""){
            $categories = BudgetRequirement::select('category', DB::raw('SUM(amount) as total_amount'))
            ->where('revision_plan_id', $request->revision_plan_id)
            ->groupBy('category')
            ->get()
            ->map(function ($cat) use ($request) {
                return [
                    'revision_plan_id' => $request->revision_plan_id,
                    'category' => $cat->category,
                    'total_amount' => $cat->total_amount,
                ];
            })
            ->filter() // keep only non-empty items
            ->values();
        }else{
            $categories = BudgetRequirement::select('category', DB::raw('SUM(amount) as total_amount'))
            ->where('category_gad', $request->category_gad)
            ->where('revision_plan_id', $request->revision_plan_id)
            ->groupBy('category')
            ->get()
            ->map(function ($cat) use ($request) {
                return [
                    'revision_plan_id' => $request->revision_plan_id,
                    'category' => $cat->category,
                    'total_amount' => $cat->total_amount,
                ];
            })
            ->filter() // keep only non-empty items
            ->values();
        }

                $empty=[];
        if ($categories->isEmpty()) {
            return $empty;
        }

        return $categories;
    }
    public function getbudgetDetails(Request $request){
        $empty=[];
        // $revplan = RevisionPlan::where('id', $request->revision_plan_id)->first();
        if($request->category_gad==""){
            $budget=BudgetRequirement::where('revision_plan_id', $request->revision_plan_id)
                    ->where('category', $request->category)
                    ->get();
        }else{
            $budget=BudgetRequirement::where('revision_plan_id', $request->revision_plan_id)
                    ->where('category', $request->category)
                    ->where('category_gad', $request->category_gad)
                    ->get();
        }


        if ($budget->isEmpty()) {
            return $empty;
        }

        return $budget;
    }
    public function ooe_index(Request $request, $id){
        $rev = RevisionPlan::with(['budget'])
                ->where('id', $id)
                ->first();
        $budget = $rev->budget;
        $gad_version =$rev->gad_version;
        $data= $this->fetch_budgetary_requirements($id, $budget, $rev, $gad_version);


        return inertia('RevisionPlans/OOE/Index',[
            "data"=>$data,
            "rev" =>$rev,
            "gad_version"=>$gad_version
        ]);
    }
    protected function fetch_budgetary_requirements($id, $budget, $rev, $gad_version){
        $data = $budget->toArray();   // 👈 this makes each item an array (as seen in your dd)

        if (empty($data)) {
            return [];
        }

        // Get gad_version from the first item (array access)
        $gadVersion = $gad_version;  // Note: revisionPlan is also array if toArray() was deep

        // ----------------------------------------------------------------------
        // Robust solution: transform each array item, adding ooe_options
        // ----------------------------------------------------------------------
        $transformed = collect($data)->map(function ($item) use($rev) {
            // Fetch active OOE options for the account_code
            $ooeOptions = OOE::where('FACTCODE', $item['account_code'])
                            ->where('active_tag', 1)
                            ->get();

            // Build the desired flat array with all columns
            return [
                'id'               => $item['id'],
                'idooe'            => $item['idooe'],
                'revision_plan_id' => $item['revision_plan_id'],
                'particulars'      => $item['particulars'],
                'account_code'     => $item['account_code'],
                'sip_number'       => $item['sip_number'],
                'amount'           => $item['amount'],
                'proposed_budget'  => $item['proposed_budget'],
                'category'         => $item['category'],
                'category_gad'     => $item['category_gad'],
                'remarks'          => $item['remarks'],
                'source'           => $item['source'],
                'created_at'       => $item['created_at'],
                'updated_at'       => $item['updated_at'],
                'ooe_options'      => $ooeOptions,  // Collection or array as you prefer
                // Keep revisionPlan if needed later
                'revisionPlan'     => $rev,
            ];
        });

        // Prepare grouping based on gad_version
        if ($gadVersion == 1) {
            $structured = $transformed->groupBy('category_gad')->map(function ($itemsByGad) {
                return $itemsByGad->groupBy('category')->map(function ($itemsByCategory) {
                    return $itemsByCategory->values();
                });
            });
        } elseif ($gadVersion == 2) {
            $structured = $transformed->groupBy('category')->map(function ($itemsByCategory) {
                return $itemsByCategory->values();
            });
        } else {
            $structured = $transformed; // fallback
        }

        return $structured->toArray();
    }

    public function updateField(Request $request, $id)
    {
        $request->validate([
            'column' => 'required|string|in:remarks,idooe', // allowed columns
            'value'  => 'nullable|string|max:65535',        // adjust max length as needed
        ]);
        $budgetItem = BudgetRequirement::findOrFail($id);
        if($request->column == 'idooe' && $request->value){
            $ooe = BudgetRequirement::where('revision_plan_id', $budgetItem->revision_plan_id)->where('idooe', $request->value)->first();
            // dd($ooe, $request, $id);
            if ($ooe) {
                // dd($ooe);
                return redirect()->back()->withErrors([
                    'idooe' => 'The selected OOE option already exists in another budget requirement.'
                ]);
            }
        }
        // dd($request);

        $budgetItem->{$request->column} = $request->value;
        $budgetItem->save();

        // return response()->json(['success' => true]);
        return redirect()->back();
    }
}
