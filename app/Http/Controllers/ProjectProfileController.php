<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\ProgramAndProject;
use App\Models\ProjectProfile;
use App\Models\RevisionPlan;
use App\Models\SharedProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectProfileController extends Controller
{
    //
    protected $model;

    public function __construct(ProjectProfile $model)
    {
        $this->model = $model;
    }
    public function index(Request $request)
    {
        return inertia('ProjectProfile/Index', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request)
    {
        return inertia('ProjectProfile/Create', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function PPMP_PPA(Request $request)
    {
        // test
        $FFUNCCOD = $request->FFUNCCOD;
        $year = $request->year;
        // dd($FFUNCCOD);
        $office = Office::where('FFUNCCOD', $FFUNCCOD)->first();
        // dd($office);


        $shared_paps = SharedProgramAndProject::where('destination_department_code', $office->department_code)->get()->pluck('idpaps');
        // dd($shared_paps);
        $gas_data = ProgramAndProject::select(
            'id',
            'paps_desc',
            'FFUNCCOD',
            'FFUNDCOD',
            'fund_owner'
        )
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('type', 'GAS')
            ->get()
            ->map(function ($item)use($year) {
                // dd($item->FFUNCCOD);
                $latestPlan = RevisionPlan::where('FFUNCCOD', $item->FFUNCCOD)
                    // ->where('status', '1')
                    ->where(function($query)  {
                        $query->where('status', '1')
                            ->orWhere('status', '0');
                    })
                    ->whereYear(('date_start'), $year)
                    ->where('idpaps',0)
                    ->with('budget')
                    ->orderBY('created_at', 'desc')
                    ->first();
                // dd($latestPlan);
                $FFUNDCOD = $item->FFUNDCOD;
                // $latestPlan = $item->latestRevisionPlan;


                return [
                    'id' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'fund_owner' => $item->fund_owner,
                    'latest_revision_plan' => $latestPlan ? [
                        'id' => $latestPlan->id,
                        'idpaps' => $latestPlan->idpaps,
                        'project_title' => $latestPlan->project_title,
                        'budget' => $latestPlan->budget ? $latestPlan->budget->map(function ($budgetItem) use ($FFUNDCOD) {
                            return [
                                'idooe' => $budgetItem->idooe,
                                'particulars' => $budgetItem->particulars,
                                'account_code' => $budgetItem->account_code,
                                'FFUNDCOD' => $FFUNDCOD,
                                'amount' => $budgetItem->amount,
                                'proposed_budget' => $budgetItem->proposed_budget,
                                'category' => $budgetItem->category,
                                'category_gad' => $budgetItem->category_gad,
                                'source' => $budgetItem->source,
                                'remarks' => $budgetItem->remarks,
                                'sip_number' => $budgetItem->sip_number,
                            ];
                        })->toArray() : [],
                    ] : null,
                ];
            });
        $data = ProgramAndProject::select(
            'id',
            'paps_desc',
            'FFUNCCOD',
            'FFUNDCOD',
            'fund_owner',
        )
            // ->where('FFUNCCOD', $FFUNCCOD)
            ->where(function ($query) use ($FFUNCCOD, $shared_paps) {
                $query->where('FFUNCCOD', $FFUNCCOD)
                    ->orWhereIn('id', $shared_paps);
            })
            ->whereHas('latestRevisionPlan', function ($q) use ($year) {
                $q->whereYear('date_start', $year);
            })
            ->with([
                'latestRevisionPlan' => function ($q) {
                    $q->select(
                        'revision_plans.id',
                        'revision_plans.idpaps',
                        'revision_plans.project_title',
                        'revision_plans.year_period',
                    );
                },
                'latestRevisionPlan.budget'
            ])
            ->get()
            ->map(function ($item) {
                $FFUNDCOD = $item->FFUNDCOD;
                $latestPlan = $item->latestRevisionPlan;
                return [
                    'id' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'fund_owner' => $item->fund_owner,
                    'latest_revision_plan' => $item->latestRevisionPlan ? [
                        'id' => $item->latestRevisionPlan->id,
                        'idpaps' => $item->latestRevisionPlan->idpaps,
                        'project_title' => $item->latestRevisionPlan->project_title,
                        'year' => $item->latestRevisionPlan->year_period,
                        'budget' => $latestPlan->budget ? $latestPlan->budget->map(function ($budgetItem) use ($FFUNDCOD) {
                            return [
                                'idooe' => $budgetItem->idooe,
                                'particulars' => $budgetItem->particulars,
                                'account_code' => $budgetItem->account_code,
                                'FFUNDCOD' => $FFUNDCOD,
                                'amount' => $budgetItem->amount,
                                'proposed_budget' => $budgetItem->proposed_budget,
                                'category' => $budgetItem->category,
                                'category_gad' => $budgetItem->category_gad,
                                'source' => $budgetItem->source,
                                'remarks' => $budgetItem->remarks,
                                'sip_number' => $budgetItem->sip_number,
                            ];
                        })->toArray() : [],
                    ] : null,
                ];
            });

        return $data->concat($gas_data);
    }

    public function budget_prep(Request $request)
    {
        // test
        // $FFUNCCOD = $request->FFUNCCOD;
        $department_code = $request->department_code;
        $year = $request->year;
        // dd($FFUNCCOD);
        $office = Office::where('department_code', $department_code)->first();
        $FFUNCCOD = $office->ffunccod;
        // dd($office, $FFUNCCOD);


        $shared_paps = SharedProgramAndProject::where('destination_department_code', $office->department_code)->get()->pluck('idpaps');
        // dd($shared_paps);
        $gas_data = ProgramAndProject::select(
            'id',
            'paps_desc',
            'FFUNCCOD',
            'FFUNDCOD',
            'fund_owner'
        )   ->with(['office', 'fundOwner'])
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('type', 'GAS')
            ->get()
            ->map(function ($item) use ($year) {
                // dd($item->FFUNCCOD);
                // dd($item->office);

                $latestPlan = RevisionPlan::where('FFUNCCOD', $item->FFUNCCOD)
                    // ->where('status', '1')
                    ->where(function ($query) {
                        $query->where('status', '1')
                            ->orWhere('status', '0');
                    })
                    ->whereYear(('date_start'), $year)
                    ->where(function($query) {
                        $query->where('idpaps',0)
                            ->orWhere('scope', 'GAS');
                    })
                    // ->where('idpaps',0)
                    ->with('budget')
                    ->orderBY('created_at', 'desc')
                    ->first();
                $categoryTotals = $this->getTotalByCategory($latestPlan);
                $mooe = $categoryTotals['Maintenance, Operating, and Other Expenses'];
                $co   = $categoryTotals['Capital Outlay'];
                $ps   = $categoryTotals['Personnel Services'];
                $fe   = $categoryTotals['Financial Expenses'];
                // dd($latestPlan);
                $FFUNDCOD = $item->FFUNDCOD;
                // $latestPlan = $item->latestRevisionPlan;


                return [
                    'id' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'FFUNCTION' => optional($item->fundOwner)->FFUNCTION,
                    'department_code'=>optional($item->office)->department_code,
                    'fund_owner' => $item->fund_owner,
                    'aip_code' =>optional($latestPlan)->aip_code,
                    'mooe' => $mooe,
                    'co' => $co,
                    'ps' => $ps,
                    'fe' => $fe,
                    'program_id' => $latestPlan ? $latestPlan->program_id_2 : null,
                    'latest_revision_plan' => $latestPlan ? [
                        'id' => $latestPlan->id,
                        'idpaps' => $latestPlan->idpaps,
                        'project_title' => $latestPlan->project_title,
                        'type' => $latestPlan->type,
                        'budget' => $latestPlan->budget ? $latestPlan->budget->map(function ($budgetItem) use ($FFUNDCOD) {
                            return [
                                'idooe' => $budgetItem->idooe,
                                'FOOEDESC'=> $budgetItem->objectOfExpenditure ? $budgetItem->objectOfExpenditure->FOOEDESC : null,
                                'particulars' => $budgetItem->particulars,
                                'account_code' => $budgetItem->account_code,
                                'FFUNDCOD' => $FFUNDCOD,
                                'amount' => $budgetItem->amount,
                                'proposed_budget' => $budgetItem->proposed_budget,
                                'category' => $budgetItem->category,
                                'category_abbreviation' => \App\Helpers\BudgetHelper::getCategoryAbbreviation($budgetItem->category),
                                'category_gad' => $budgetItem->category_gad,
                                'source' => $budgetItem->source,
                                'remarks' => $budgetItem->remarks,
                                'sip_number' => $budgetItem->sip_number,
                            ];
                        })->toArray() : [],
                    ] : null,
                    'status' => $latestPlan ? $latestPlan->status : null,
                ];
            });

        $data = ProgramAndProject::select(
                'id',
                'paps_desc',
                'FFUNCCOD',
                'FFUNDCOD',
                'fund_owner',
            )
            // ->where('FFUNCCOD', $FFUNCCOD)
            ->with(['office', 'fundOwner'])
            ->where(function($query) use ($FFUNCCOD, $shared_paps) {

                $query->where('FFUNCCOD', $FFUNCCOD)
                    ->orWhereIn('id', $shared_paps);
            })
            ->whereHas('latestRevisionPlan', function ($q) use ($year) {
                $q->whereYear('date_start', $year);
            })
            ->with([
                'latestRevisionPlan' => function ($q) {
                    $q->select(
                        'revision_plans.id',
                        'revision_plans.idpaps',
                        'revision_plans.project_title',
                        'revision_plans.year_period',
                        'revision_plans.aip_code',
                        'revision_plans.status',
                        'revision_plans.type',
                        'revision_plans.program_id_2',
                    );
                },
                'latestRevisionPlan.budget',
                'latestRevisionPlan.budget.objectOfExpenditure',
            ])
            ->where('type','<>', 'GAS')
            ->get()
            ->map(function ($item) {
                $FFUNDCOD = $item->FFUNDCOD;
                $latestPlan = $item->latestRevisionPlan;
                // dd($latestPlan);
                // if($item->fund_owner!='1121'){
                //     dd($item);
                // }
                $categoryTotals = $this->getTotalByCategory($latestPlan);
                $mooe = $categoryTotals['Maintenance, Operating, and Other Expenses'];
                $co   = $categoryTotals['Capital Outlay'];
                $ps   = $categoryTotals['Personnel Services'];
                $fe   = $categoryTotals['Financial Expenses'];
                // dd($latestPlan);
                return [
                    'id' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'FFUNCTION' => optional($item->fundOwner)->FFUNCTION,
                    'department_code'=>optional($item->office)->department_code,
                    'fund_owner' => $item->fund_owner,
                    'aip_code' =>optional($latestPlan)->aip_code,
                    'mooe' => $mooe,
                    'co' => $co,
                    'ps' => $ps,
                    'fe' => $fe,
                    'program_id' => $latestPlan ? $latestPlan->program_id_2 : null,
                    'latest_revision_plan' => $item->latestRevisionPlan ? [
                        'id' => $item->latestRevisionPlan->id,
                        'idpaps' => $item->latestRevisionPlan->idpaps,
                        'project_title' => $item->latestRevisionPlan->project_title,
                        'year' => $item->latestRevisionPlan->year_period,
                        'type' => $item->latestRevisionPlan->type,
                        'budget' => $latestPlan->budget ? $latestPlan->budget->map(function ($budgetItem) use ($FFUNDCOD) {
                            return [
                                'idooe' => $budgetItem->idooe,
                                'FOOEDESC'=> $budgetItem->objectOfExpenditure ? $budgetItem->objectOfExpenditure->FOOEDESC : null,
                                'particulars' => $budgetItem->particulars,
                                'account_code' => $budgetItem->account_code,
                                'FFUNDCOD' => $FFUNDCOD,
                                'amount' => $budgetItem->amount,
                                'proposed_budget' => $budgetItem->proposed_budget,
                                'category' => $budgetItem->category,
                                'category_abbreviation' => \App\Helpers\BudgetHelper::getCategoryAbbreviation($budgetItem->category),
                                'category_gad' => $budgetItem->category_gad,
                                'source' => $budgetItem->source,
                                'remarks' => $budgetItem->remarks,
                                'sip_number' => $budgetItem->sip_number,
                            ];
                        })->toArray() : [],
                    ] : null,
                    'status'=>$latestPlan ? $latestPlan->status : null,
                ];
            });

        return $data->concat($gas_data)
                ->where('status', 1)
                ->values();
        // ->pluck('status');
    }
    protected function getTotalByCategory($latestPlan){
        $categoryTotals = [
            'Maintenance, Operating, and Other Expenses' => 0,
            'Capital Outlay' => 0,
            'Personnel Services' => 0,
            'Financial Expenses' => 0,
        ];

        if ($latestPlan && $latestPlan->budget) {
            foreach ($latestPlan->budget as $budget) {
                $category = $budget->category;

                if (isset($categoryTotals[$category])) {
                    $categoryTotals[$category] += $budget->amount;
                }
            }
        }
        return $categoryTotals;
    }

}
