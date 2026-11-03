<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\Appropriation;
use App\Models\BudgetRequirement;
use App\Models\Category;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AppropriationController extends Controller
{
    protected $appropriation, $paps;
    public function __construct(Appropriation $appropriation, ProgramAndProject $paps)
    {
        $this->appropriation = $appropriation;
        $this->paps = $paps;
    }
    public function index(Request $request, $idpaps)
    {
        $data = $this->appropriation
            ->where('idpaps', $idpaps)
            ->with('paps')
            ->paginate(10);
        $paps = $this->paps->where('id', $idpaps)->first();
        $idpaps = $request->query('idpaps');
        return inertia('Appropriations/Index', [
            "data" => $data,
            "paps" => $paps,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request, $idpaps)
    {
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        //AIP CODE
        $aip = AIP::where('idpaps', $idpaps)->first();
        $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        $paps = ProgramAndProject::find($idpaps);
        $all_paps = ProgramAndProject::get();
        $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        $acc = $accounts->pluck('FTITLE');
        $code = $accounts->pluck('FACTCODE');

        //FUNCTIONS
        $idn = auth()->user()->recid;
        $functions = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
            ->where('systemusers.recid', $idn)
            ->get();

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
            ->groupBy('raaohs.recid')
            ->get();

        $ooes = [];
        return inertia("Appropriations/Create", [
            "pap1" => $paps,
            "paps" => $all_paps,
            "accounts" => $acc,
            "codes" => $code,
            "aip" => $aip,
            "total_budget_year" => $total_budget_year,
            "functions" => $functions,
            "programs" => $programs,
            "ooes" => $ooes,
        ]);
    }
    public function store(Request $request)
    {
        // dd($request);
        //validate if budget
        $idpaps = $request->idpaps;
        $aip = [];
        $is_greater = false;

        if ($idpaps) {
            $aip = AIP::where('idpaps', $request->idpaps)->first();
            if ($aip) {
                $mooe = $aip->MOOE;
                $ps = $aip->PS;
                $co = $aip->CO;

                $cat_selected = $request->category;

                if ($cat_selected) {

                    $total_amount = Appropriation::where('idpaps', $idpaps)
                        ->where('category', $cat_selected)
                        ->sum('budget_year');

                    if ($cat_selected == "Capital Outlay") {
                        if ($total_amount > $co) {
                            $request->merge(['budget_year' => null]);
                        }
                    }
                    if ($cat_selected == "Maintenance, Operating, and Other Expenses") {
                        if ($total_amount > $mooe) {
                            $request->merge(['budget_year' => null]);
                        }
                    }
                    if ($cat_selected == "Personnel Services") {
                        if ($total_amount > $ps) {
                            $request->merge(['budget_year' => null]);
                        }
                    }
                }
            } else {
                $request->merge(['budget_year' => null]);
            }
        }

        $attributes = $request->validate([
            'idooe' => 'required',
            'year' => 'required',
            'FFUNCCOD' => 'required',
            'raaotype' => 'required',
            'idprogram' => 'required',
            'object_of_expenditure' => 'required',
            'past_year' => 'required',
            'first_sem' => 'required',
            'second_sem' => 'required',
            'budget_year' => 'required',
            'idpaps' => 'required',
            'category' => 'required',
        ]);
        // dd($request);
        $app = new Appropriation();
        $app->idooe    = $request->idooe;
        $app->year    = $request->year;
        $app->FFUNCCOD    = $request->FFUNCCOD;
        $app->raaotype    = $request->raaotype;
        $app->idprogram    = $request->idprogram;
        $app->AIP_CODE    = $request->AIP_CODE;
        $app->object_of_expenditure = $request->object_of_expenditure;
        $app->account_code = $request->account_code;
        $app->past_year = $request->past_year;
        $app->first_sem = $request->first_sem;
        $app->second_sem = $request->second_sem;
        $app->budget_year = $request->budget_year;
        $app->idpaps = $request->idpaps;
        $app->category = $request->category;
        $app->GAD = "";
        $app->save();
        return redirect('/appropriations/' . $request->idpaps)
            ->with('message', 'Division Output added');
    }
    public function edit(Request $request, $id)
    {

        $data = $this->appropriation::where('id', $id)->first();
        //dd($data);
        $year_n = $data->year;
        $year_c = intval($year_n) - 1;
        $year_p = intval($year_n) - 2;
        $idpaps = $data->idpaps;
        //AIP CODE
        $aip = AIP::select(
            'a_i_p_s.AIP_Code',
            'a_i_p_s.PS',
            'a_i_p_s.MOOE',
            'a_i_p_s.CO',
            'a_i_p_s.date',
            'a_i_p_s.idpaps'
        )
            ->where('a_i_p_s.idpaps', $idpaps)
            ->first();
        // dd($aip);
        // ->where('appropriations.id', '<>', $id)
        //     ->leftjoin('appropriations', 'appropriations.idpaps', 'a_i_p_s.idpaps')

        $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        $paps = ProgramAndProject::find($idpaps);
        $all_paps = ProgramAndProject::get();
        $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        $acc = $accounts->pluck('FTITLE');
        $code = $accounts->pluck('FACTCODE');

        //FUNCTIONS
        $idn = auth()->user()->recid;
        $functions = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
            ->where('systemusers.recid', $idn)
            ->get();

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
                'raaohs.FFUNCCOD'
            )
            ->leftjoin('raaohs', 'raaohs.idprogram', 'programs.recid')
            ->where('raaohs.tyear', $year_c)
            ->OrderBy('programs.FPROGRAM')
            ->groupBy('raaohs.recid')
            ->get();

        $ooes = DB::connection('mysql2')->table('raaohs')
            ->select(
                'ooes.FACTCODE',
                'ooes.FOOEDESC',
                'ooes.assetaccountcode',
                'ooes.consotag',
                'ooes.ftype2',
                'ooes.fueltag',
                'ooes.recid',
                'raaohs.FFUNCCOD',
                'raaohs.FRAOTYPE',
                'raaohs.idprogram',
                'raaods.famount'
            )
            ->where('raaohs.idprogram', $data->idprogram)
            ->where('raaohs.FFUNCCOD', $data->FFUNCCOD)
            ->where('raaohs.FRAOTYPE', $data->raaotype)
            ->join('raaods', 'raaods.idraao', 'raaohs.recid')
            ->join('ooes', 'ooes.recid', 'raaods.idooe')
            ->groupBy('ooes.recid')
            ->orderBy('ooes.FOOEDESC')
            ->get()
            ->map(function ($item) use ($request, $year_c, $year_n) {
                $year_past = $year_c - 1;
                $past_year = DB::connection('mysql2')
                    ->table('raaods')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaods.entrytype', '2')
                    ->whereYear('raaods.fdate', '=', $year_past)
                    ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
                    ->sum('raaods.famount');
                $sem1 = DB::connection('mysql2')
                    ->table('raaods')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaods.entrytype', '3')
                    ->whereMonth('raaods.fdate', '<', '7')
                    ->whereYear('raaods.fdate', '=', $year_c)
                    ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
                    ->sum('raaods.famount');
                // $sem2 = DB::connection('mysql2')
                //             ->table('raaods')
                //             ->where('raaohs.idprogram', $item->idprogram)
                //             ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                //             ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                //             ->where('raaods.entrytype', '1')
                //             ->where('raaods.idooe',$item->recid)
                //             ->whereYear('raaods.fdate', '=',$year_c)
                //             ->whereMonth('raaods.fdate', '>','7')
                //             ->join('raaohs','raaohs.recid','raaods.idraao')
                //             ->sum('raaods.famount');
                $sem2 = DB::connection('mysql2')->table('raaods')
                    ->leftJoin('raaohs', 'raaods.idraao', '=', 'raaohs.recid')
                    ->whereYear('raaods.fdate', $year_c)
                    ->whereMonth('raaods.fdate', '<', '7')
                    ->where('raaods.entrytype', '3')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->groupBy('raaods.idooe')
                    ->sum('raaods.famount');
                return [
                    'FACTCODE' => $item->FACTCODE,
                    'FOOEDESC' => $item->FOOEDESC,
                    'assetaccountcode' => $item->assetaccountcode,
                    'consotag' => $item->consotag,
                    'ftype2' => $item->ftype2,
                    'fueltag' => $item->fueltag,
                    'recid' => $item->recid,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'FRAOTYPE' => $item->FRAOTYPE,
                    'idprogram' => $item->idprogram,
                    'past_year' => $past_year,
                    'sem1' => $sem1,
                    'sem2' => $sem2,
                    'famount' => $item->famount
                ];
            });
        //dd($data);
        return inertia("Appropriations/Create", [
            "pap1" => $paps,
            "paps" => $all_paps,
            "accounts" => $acc,
            "codes" => $code,
            "aip" => $aip,
            "total_budget_year" => $total_budget_year,
            "functions" => $functions,
            "programs" => $programs,
            "ooes" => $ooes,
            "editData" => $data
        ]);
    }
    public function update(Request $request)
    {
        // dd("update");
        //dd($request);
        $idpaps = $request->idpaps;
        $aip = [];
        $is_greater = false;

        if ($idpaps) {
            $aip = AIP::where('idpaps', $request->idpaps)->first();
            // dd($aip->ps." ".$request->budget_year);
            $mooe = $aip->MOOE;
            $ps = $aip->PS;
            $co = $aip->CO;

            $cat_selected = $request->category;

            if ($cat_selected) {

                $total_amount = Appropriation::where('idpaps', $idpaps)
                    ->where('category', $cat_selected)
                    ->sum('budget_year');

                if ($cat_selected == "Capital Outlay") {
                    if ($total_amount > $co) {
                        $request->merge(['budget_year' => null]);
                    }
                }
                if ($cat_selected == "Maintenance, Operating, and Other Expenses") {
                    if ($total_amount > $mooe) {
                        $request->merge(['budget_year' => null]);
                    }
                }
                if ($cat_selected == "Personnel Services") {
                    if ($total_amount > $ps) {
                        $request->merge(['budget_year' => null]);
                    }
                }
            }
        }

        $attributes = $request->validate([
            'object_of_expenditure' => 'required',
            'past_year' => 'required',
            'first_sem' => 'required',
            'second_sem' => 'required',
            'budget_year' => 'required',
            'idpaps' => 'required',
            'category' => 'required',
        ]);
        $approp = $this->appropriation->find($request->id);
        //dd($request->id);
        $approp->idooe = $request->idooe;
        $approp->year = $request->year;
        $approp->FFUNCCOD = $request->FFUNCCOD;
        $approp->raaotype = $request->raaotype;
        $approp->idprogram = $request->idprogram;
        $approp->object_of_expenditure = $request->object_of_expenditure;
        $approp->account_code = $request->account_code;
        $approp->past_year = $request->past_year;
        $approp->first_sem = $request->first_sem;
        $approp->second_sem = $request->second_sem;
        $approp->budget_year = $request->budget_year;
        $approp->idpaps = $request->idpaps;
        $approp->category = $request->category;
        $approp->GAD = $request->GAD;
        $approp->CCET = $request->CCET;
        $approp->save();
        return redirect('/appropriations/' . $request->idpaps)
            ->with('info', 'Appropriation updated');
    }
    public function getTotalAppropriationByPAPS($idpaps)
    {
        $total_mooe_approp = $this->appropriation
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('idpaps', $idpaps)
            ->sum('budget_year');
        $total_ps_approp = $this->appropriation
            ->where('category', 'Personnel Services')
            ->where('idpaps', $idpaps)
            ->sum('budget_year');
        $total_co_approp = $this->appropriation
            ->where('category', 'Capital Outlay')
            ->where('idpaps', $idpaps)
            ->sum('budget_year');
        return [
            "total_approp_mooe" => $total_mooe_approp,
            "total_ps_approp" => $total_ps_approp,
            "total_co_approp" => $total_co_approp
        ];
    }
    public function destroy(Request $request, $id)
    {

        $data = $this->appropriation->findOrFail($id);
        $idpaps = $data->idpaps;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/appropriations/' . $idpaps)->with('warning', 'Record Deleted');
    }
    public function main(Request $request)
    {
        $department_head = $request->department_head;
        $budget_officer = $request->budget_officer;
        $department_code = $request->department_code;
        $office = $request->office;
        $local_chief = $request->local_chief;
        $year = $request->year;
        return [
            'department_code' => $department_code,
            'office' => $office,
            'department_head' => $department_head,
            'budget_officer' => $budget_officer,
            'local_chief' => $local_chief,
            'total_past_year' => $request->total_past_year,
            'total_first_sem' => $request->total_first_sem,
            'total_second_sem' => $request->total_second_sem,
            'total_total' => $request->total_total,
            'total_budget_year' => $request->total_budget_year,
            'year' => $year
        ];
    }
    public function paps_types(Request $request)
    {
        $department_code = $request->department_code;
        // dd($department_code);
        $year = $request->year;
        $paps_id = ProgramAndProject::select('id')
            ->where('department_code', $department_code)
            ->pluck('id');
        $latestRevisions = DB::table('revision_plans as rp1')
            ->select('rp1.id', 'rp1.idpaps')
            ->whereIn('rp1.idpaps', $paps_id)
            ->join(DB::raw('(SELECT idpaps, MAX(id) as max_id FROM revision_plans GROUP BY idpaps) as rp2'), function ($join) {
                $join->on('rp1.id', '=', 'rp2.max_id');
            });
        // dd($latestRevisions->get()->pluck('id'));
        $paps_types = ProgramAndProject::select('program_and_projects.type')
            ->distinct()
            ->joinSub($latestRevisions, 'latest_rp', function ($join) {
                $join->on('latest_rp.idpaps', '=', 'program_and_projects.id');
            })
            ->join('budget_requirements', 'budget_requirements.revision_plan_id', '=', 'latest_rp.id')
            ->where('program_and_projects.department_code', $department_code)
            ->orderByRaw(
                DB::raw("CASE
                    WHEN program_and_projects.type = 'GAS' THEN 0
                    WHEN program_and_projects.type = 'Project' THEN 1
                    WHEN program_and_projects.type = 'Program' THEN 2
                    WHEN program_and_projects.type = 'Activity' THEN 3
                    ELSE 4
                 END")
            )
            ->get()
            ->map(function ($item) use ($department_code, $year) {
                return [
                    'paps_type' => $item->type,
                    'department_code' => $department_code,
                    'year' => $year
                ];
            });

        // dd(count($paps_types));
        if (count($paps_types) < 1) {
            $paps_types = collect([
                [
                    'paps_type' => '',
                    'department_code' => $department_code,
                    'year' => $year
                ],
            ]);
        }
        // $paps_types = ProgramAndProject::selectRaw('DISTINCT(program_and_projects.type)')
        //     // ->join('appropriations', 'appropriations.idpaps', 'program_and_projects.id')
        //     ->with(['revisionPlan', 'revisionPlan.budget'])
        //     ->where('department_code', $department_code)
        //     ->where
        //     // ->join('revision_plans', 'revision_plans.idpaps', 'program_and_projects.id')
        //     // ->join('budget_requirements', 'budget_requirements.revision_plan_id', 'revision_plans.id')
        //     ->whereNotNull('budget_requirements.id')
        //     ->orderByRaw(
        //         DB::raw("CASE WHEN program_and_projects.type = 'GAS' THEN 0
        //                     WHEN program_and_projects.type = 'Project' THEN 1
        //                     WHEN program_and_projects.type = 'Program' THEN 2
        //                     WHEN program_and_projects.type = 'Activity' THEN 3 ELSE 4
        //                     END")
        //     )
        //     // ->groupBy()
        //     ->get()
        //     ->map(function ($item) use ($department_code) {
        //         return [
        //             'paps_type' => $item->type,
        //             'department_code' => $department_code
        //         ];
        //     });
        return $paps_types;
    }
    public function paps(Request $request)
    {
        //
        // dd($request->paps_type);
        $department_code = $request->department_code;
        // dd($department_code);
        $paps_id = ProgramAndProject::select('id')
            ->where('department_code', $department_code)
            ->pluck('id');
        $latestRevisions = DB::table('revision_plans')
            ->select(DB::raw('MAX(id) as latest_id'), 'idpaps')
            ->whereIn('idpaps', $paps_id)
            ->groupBy('idpaps');

        $paps = ProgramAndProject::select('program_and_projects.id', 'program_and_projects.paps_desc')
            ->joinSub($latestRevisions, 'latest_rev', function ($join) {
                $join->on('program_and_projects.id', '=', 'latest_rev.idpaps');
            })
            ->join('revision_plans', 'revision_plans.id', '=', 'latest_rev.latest_id')
            ->join('budget_requirements', 'budget_requirements.revision_plan_id', '=', 'revision_plans.id')
            ->where('program_and_projects.department_code', $request->department_code)
            ->where('program_and_projects.type', $request->paps_type)
            ->distinct()
            ->get()
            ->map(function ($item) use ($request) {
                // dd($item);
                return [
                    "idpaps" => $item->id,
                    "paps_desc" => $item->paps_desc,
                    'year' => $request->year
                    // "type" => $request->paps_type,
                    // "particulars" => $item->particulars,
                    // "category" => $item->category,
                    // "idrevplan" => $item->rev_id
                ];
            });
        // dd($paps);
        // $paps = ProgramAndProject::select(
        //     'program_and_projects.id',
        //     'program_and_projects.paps_desc',
        //     'budget_requirements.particulars',
        //     'budget_requirements.category',
        //     // 'revision_plans.id'
        //     DB::raw('MAX(revision_plans.id) AS rev_id')
        //     // , DB::raw('MAX(revision_plans.id) AS column_name')
        // )
        //     // ->join('appropriations', 'appropriations.idpaps', '=', 'program_and_projects.id')
        //     ->join('revision_plans', 'revision_plans.idpaps', 'program_and_projects.id')
        //     ->join('budget_requirements', 'budget_requirements.revision_plan_id', 'revision_plans.id')
        //     ->where('program_and_projects.type', '=', $request->paps_type)
        //     ->where('program_and_projects.department_code', '=', $request->department_code)
        //     ->groupBy('program_and_projects.id', 'program_and_projects.paps_desc')
        //     // ->distinct()
        //     ->orderBy('program_and_projects.id')
        //     ->get()
        //     ->map(function ($item) use ($request) {
        //         // dd($item);
        //         return [
        //             "idpaps" => $item->id,
        //             "paps_desc" => $item->paps_desc,
        //             "type" => $request->paps_type,
        //             "particulars" => $item->particulars,
        //             "category" => $item->category,
        //             "idrevplan" => $item->rev_id
        //         ];
        //     });
        return $paps;
    }
    public function paps_categories(Request $request)
    {
        // dd($request);
        $categories = Category::select('categories.category')
            // ->where('appropriations.idpaps', $request->idpaps)
            ->where('revision_plans.idpaps', $request->idpaps)
            // ->join('appropriations', 'appropriations.category', 'categories.category')
            ->join('budget_requirements', 'budget_requirements.category', 'categories.category')
            ->join('revision_plans', 'revision_plans.id', 'budget_requirements.revision_plan_id')
            // ->join('program_and_projects', 'program_and_projects.id', 'revision_plans.idpaps')
            // ->where('program_and_projects.type', $request->type)
            ->groupBy('categories.category')
            ->orderByRaw(
                DB::raw("CASE WHEN categories.category = 'Personnel Services' THEN 0
                            WHEN categories.category = 'Maintenance, Operating, and Other Expenses' THEN 1
                            WHEN categories.category = 'Financial Expenses' THEN 2
                            WHEN categories.category = 'Capital Outlay' THEN 3 ELSE 4
                            END")
            )
            ->get()
            ->map(function ($item) use ($request) {
                //$categ = Str::upper($item->category);
                return [
                    "category" => $item->category,
                    "type" => $request->type,
                    "idpaps" => $request->idpaps,
                    'year' => $request->year
                ];
            });
        return $categories;
    }
    public function appropriations(Request $request)
    {
        //dd($request->type);
        // $appropriations = Appropriation::select(
        //     'program_and_projects.paps_desc',
        //     'program_and_projects.type',
        //     'appropriations.account_code',
        //     'program_and_projects.department_code'
        // )
        //     ->selectRaw('appropriations.object_of_expenditure')
        //     ->selectRaw('SUM(appropriations.past_year) AS past_year')
        //     ->selectRaw('SUM(appropriations.first_sem) AS first_sem')
        //     ->selectRaw('SUM(appropriations.second_sem) AS second_sem')
        //     ->selectRaw('(SUM(appropriations.first_sem) + SUM(appropriations.second_sem)) AS total')
        //     ->selectRaw('SUM(appropriations.budget_year) AS budget_year')
        //     ->leftjoin('program_and_projects', 'program_and_projects.id', 'appropriations.idpaps')
        //     ->where('appropriations.category', $request->category)
        //     ->where('appropriations.idpaps', $request->idpaps)
        //     ->when($request->category === 'Capital Outlay', function ($query) {
        //         $query->groupBy('appropriations.account_code');
        //     })
        //     ->when($request->category === 'Maintenance, Operating, and Other Expenses', function ($query) {
        //         $query->groupBy('appropriations.account_code');
        //     })
        //     ->when($request->category === 'Personnel Services', function ($query) {
        //         $query->groupBy('appropriations.account_code');
        //     })
        //     ->get()
        //     ->map(function ($item) {
        //         return [
        //             "paps_desc" => $item->paps_desc,
        //             "type" => $item->type,
        //             "account_code" => $item->account_code,
        //             "object_of_expenditure" => $item->object_of_expenditure,
        //             "past_year" => number_format($item->past_year, 2, '.', ','),
        //             "first_sem" => number_format($item->first_sem, 2, '.', ','),
        //             "second_sem" => number_format($item->second_sem, 2, '.', ','),
        //             "total" => number_format($item->total, 2, '.', ','),
        //             "budget_year" => number_format($item->budget_year, 2, '.', ','),
        //             "department_code" => number_format($item->department_code, 2, '.', ','),
        //         ];
        //     });
        $rev_pln = RevisionPlan::with('paps')->where('idpaps', $request->idpaps)->orderBy('version', 'DESC')->first();
        // dd($rev_pln);

        $rev_pln_id = $rev_pln ? $rev_pln->id : 0;
        // dd($request->category);
        // dd($rev_pln_id);
        // dd(BudgetRequirement::where('revision_plan_id', $rev_pln_id)->get());
        $paps = ProgramAndProject::where('id', $request->idpaps)->first();
        $appropriations = BudgetRequirement::select('id', 'account_code', 'particulars')
            ->selectRaw('SUM(amount) AS amount')
            ->where('revision_plan_id', $rev_pln_id)
            ->where('category', 'LIKE', '%' . $request->category . '%')
            ->groupBy('particulars')
            ->get()
            ->map(function ($item) use ($request, $paps) {
                // dd(ProgramAndProject::where('id', $request->idpaps)->get());

                /*dd(Appropriation::select(
                    'appropriations.account_code'
                    // 'appropriations.past_year',
                    // 'appropriations.first_sem',
                    // 'appropriations.second_sem',
                )
                    ->selectRaw('appropriations.object_of_expenditure')
                    ->selectRaw('SUM(appropriations.past_year) AS past_year')
                    ->selectRaw('SUM(appropriations.first_sem) AS first_sem')
                    ->selectRaw('SUM(appropriations.second_sem) AS second_sem')
                    ->selectRaw('(SUM(appropriations.first_sem) + SUM(appropriations.second_sem)) AS total')
                    ->selectRaw('SUM(appropriations.budget_year) AS budget_year')
                    ->where('appropriations.category', $request->category)
                    ->where('account_code', $item->account_code)
                    ->where('appropriations.idpaps', $request->idpaps)
                    ->get());*/
                // 'program_and_projects.paps_desc',
                // 'program_and_projects.type',
                // 'program_and_projects.department_code',
                // 'appropriations.past_year',
                // 'appropriations.first_sem',
                // 'appropriations.second_sem',
                $approp = Appropriation::select(
                    'appropriations.account_code',
                    DB::raw('SUM(appropriations.past_year) AS past_year'),
                    DB::raw('SUM(appropriations.first_sem) AS first_sem'),
                    DB::raw('SUM(appropriations.second_sem) AS second_sem'),
                    DB::raw('(SUM(appropriations.first_sem) + SUM(appropriations.second_sem)) AS total'),
                    DB::raw('SUM(appropriations.budget_year) AS budget_year')
                )
                    // ->selectRaw('appropriations.object_of_expenditure')
                    // ->selectRaw('SUM(appropriations.past_year) AS past_year')
                    // ->selectRaw('SUM(appropriations.first_sem) AS first_sem')
                    // ->selectRaw('SUM(appropriations.second_sem) AS second_sem')
                    // ->selectRaw('(SUM(appropriations.first_sem) + SUM(appropriations.second_sem)) AS total')
                    // ->selectRaw('SUM(appropriations.budget_year) AS budget_year')
                    // ->leftjoin('program_and_projects', 'program_and_projects.id', 'appropriations.idpaps')
                    ->where('appropriations.category', $request->category)
                    ->where('appropriations.idpaps', $request->idpaps)
                    // ->when($request->category === 'Capital Outlay', function ($query) {
                    //     $query->groupBy('appropriations.account_code');
                    // })
                    // ->when($request->category === 'Maintenance, Operating, and Other Expenses', function ($query) {
                    //     $query->groupBy('appropriations.account_code');
                    // })
                    // ->when($request->category === 'Personnel Services', function ($query) {
                    //     $query->groupBy('appropriations.account_code');
                    // })
                    ->where('account_code', $item->account_code)
                    ->first();
                // $approp = Appropriation::select(
                //     'category',
                //     'idpaps',
                //     'account_code',
                //     'object_of_expenditure',
                //     DB::raw('SUM(past_year) as total_past_year'),
                //     DB::raw('SUM(first_sem) as total_first_sem'),
                //     DB::raw('SUM(second_sem) as total_second_sem')
                // )
                //     ->where('appropriations.category', $request->category) // ← Replace $idpaps with your actual value
                //     ->where('appropriations.idpaps', $request->idpaps) // ← Replace $account_code
                //     ->groupBy('category', 'idpaps', 'account_code')
                //     ->first();
                // dd($approp);
                //     if ($approp) {
                //         $approp = [
                //             "paps_desc" => optional($approp)->paps_desc,
                //             "type" => optional($approp)->type,
                //             "account_code" => optional($approp)->account_code,
                //             "object_of_expenditure" => optional($approp)->object_of_expenditure,
                //             "past_year" => number_format(optional($approp)->past_year, 2, '.', ','),
                //             "first_sem" => number_format(optional($approp)->first_sem, 2, '.', ','),
                //             "second_sem" => number_format(optional($approp)->second_sem, 2, '.', ','),
                //             "total" => number_format(optional($approp)->total, 2, '.', ','),
                //             "budget_year" => number_format(optional($approp)->budget_year, 2, '.', ','),
                //             "department_code" => number_format(optional($approp)->department_code, 2, '.', ','), // probably shouldn't be number_format unless it's a number
                //         ];
                // }
                // dd(optional($approp)->object_of_expenditure);
                $ooe_a = optional($approp)->object_of_expenditure;
                $ooe_b = optional($item)->particulars;
                return [
                    "paps_desc" => optional($paps)->paps_desc,
                    "type" => optional($approp)->type,
                    "account_code" => optional($item)->account_code,
                    "object_of_expenditure" => is_null($ooe_a) ? $ooe_b : $ooe_a,
                    "past_year" => number_format(optional($approp)->past_year, 2, '.', ','),
                    "first_sem" => number_format(optional($approp)->first_sem, 2, '.', ','),
                    "second_sem" => number_format(optional($approp)->second_sem, 2, '.', ','),
                    "total" => number_format(optional($approp)->total, 2, '.', ','),
                    "budget_year" => number_format(optional($item)->amount, 2, '.', ','),
                    "department_code" => optional($paps)->department_code,
                ];
            });
        // dd($appropriations);

        return $appropriations;
    }
    public function app(Request $request)
    {
        $department_head = $request->department_head;
        $budget_officer = $request->budget_officer;
        $department_code = trim($request->department_code);
        $office = $request->office;
        $local_chief = $request->local_chief;
        $paps_types = $this->paps_types2($request);
        $year = $request->year;
        // dd("diri");


        // dd($paps_types);
        return [
            'department_code' => $department_code,
            'office' => $office,
            'department_head' => $department_head,
            'budget_officer' => $budget_officer,
            'local_chief' => $local_chief,
            'total_past_year' => $request->total_past_year,
            'total_first_sem' => $request->total_first_sem,
            'total_second_sem' => $request->total_second_sem,
            'total_total' => $request->total_total,
            'total_budget_year' => $request->total_budget_year,
            "data" => $paps_types,
            "year" => $year
        ];
    }
    public function paps_types2(Request $request)
    {
        $department_code = $request->department_code;
        // dd($department_code);
        $paps_id = ProgramAndProject::select('id')
            ->where('department_code', $department_code)
            ->pluck('id');
        $latestRevisions = DB::table('revision_plans as rp1')
            ->select('rp1.id', 'rp1.idpaps')
            ->whereIn('rp1.idpaps', $paps_id)
            ->join(DB::raw('(SELECT idpaps, MAX(id) as max_id FROM revision_plans GROUP BY idpaps) as rp2'), function ($join) {
                $join->on('rp1.id', '=', 'rp2.max_id');
            });
        $paps_types = ProgramAndProject::select('program_and_projects.type')
            ->distinct()
            ->joinSub($latestRevisions, 'latest_rp', function ($join) {
                $join->on('latest_rp.idpaps', '=', 'program_and_projects.id');
            })
            ->join('budget_requirements', 'budget_requirements.revision_plan_id', '=', 'latest_rp.id')
            ->where('program_and_projects.department_code', $department_code)
            ->orderByRaw(
                DB::raw("CASE
                    WHEN program_and_projects.type = 'GAS' THEN 0
                    WHEN program_and_projects.type = 'Project' THEN 1
                    WHEN program_and_projects.type = 'Program' THEN 2
                    WHEN program_and_projects.type = 'Activity' THEN 3
                    ELSE 4
                 END")
            )
            ->get()
            ->map(function ($item) use ($department_code, $request) {
                return [
                    'paps_type' => $item->type,
                    'department_code' => $department_code,
                    // 'paps' => $this->paps2($request, $item->type)
                ];
            });

        if (count($paps_types) < 1) {
            $paps_types = collect([
                [
                    'paps_type' => '',
                    'department_code' => $department_code,
                    // 'paps' => []
                ],
            ]);
        }

        return $paps_types;
    }
    public function paps2(Request $request, $paps_type)
    {
        //
        // dd($request->paps_type);
        $department_code = $request->department_code;
        // dd($department_code);
        $paps_id = ProgramAndProject::select('id')
            ->where('department_code', $department_code)
            ->pluck('id');
        $latestRevisions = DB::table('revision_plans')
            ->select(DB::raw('MAX(id) as latest_id'), 'idpaps')
            ->whereIn('idpaps', $paps_id)
            ->groupBy('idpaps');

        $paps = ProgramAndProject::select('program_and_projects.id', 'program_and_projects.paps_desc')
            ->joinSub($latestRevisions, 'latest_rev', function ($join) {
                $join->on('program_and_projects.id', '=', 'latest_rev.idpaps');
            })
            ->join('revision_plans', 'revision_plans.id', '=', 'latest_rev.latest_id')
            ->join('budget_requirements', 'budget_requirements.revision_plan_id', '=', 'revision_plans.id')
            ->where('program_and_projects.department_code', $request->department_code)
            ->where('program_and_projects.type', $paps_type)
            ->distinct()
            ->get()
            ->map(function ($item) use ($request, $paps_type) {
                // dd($item);
                return [
                    "idpaps" => $item->id,
                    "paps_desc" => $item->paps_desc,
                    "type" => $paps_type,
                    "categories" => $this->paps_categories2($request, $item->id, $paps_type),
                    // "particulars" => $item->particulars,
                    // "category" => $item->category,
                    // "idrevplan" => $item->rev_id
                ];
            });
        if (count($paps) < 1) {
            $paps = collect([
                [
                    "idpaps" => '',
                    "paps_desc" => '',
                    "type" => '',
                    "categories" => []
                ],
            ]);
        }
        return $paps;
    }
    public function paps_categories2(Request $request, $idpaps, $paps_type)
    {
        // dd($request);
        $year = $request->year;
        $categories = Category::select('categories.category', 'revision_plans.aip_code')
            // ->where('appropriations.idpaps', $request->idpaps)
            ->where('revision_plans.idpaps', $idpaps)
            // ->join('appropriations', 'appropriations.category', 'categories.category')
            ->join('budget_requirements', 'budget_requirements.category', 'categories.category')
            ->join('revision_plans', 'revision_plans.id', 'budget_requirements.revision_plan_id')
            // ->join('program_and_projects', 'program_and_projects.id', 'revision_plans.idpaps')
            // ->where('program_and_projects.type', $request->type)
            ->groupBy('categories.category')
            ->orderByRaw(
                DB::raw("CASE WHEN categories.category = 'Personnel Services' THEN 0
                            WHEN categories.category = 'Maintenance, Operating, and Other Expenses' THEN 1
                            WHEN categories.category = 'Financial Expenses' THEN 2
                            WHEN categories.category = 'Capital Outlay' THEN 3 ELSE 4
                            END")
            )
            ->get()
            ->map(function ($item) use ($request, $idpaps, $paps_type, $year) {
                //$categ = Str::upper($item->category);
                $aip_code = $item->aip_code;
                if ($item->category === 'Personnel Services') {
                    $aip_code .= '-001';
                } elseif ($item->category === 'Maintenance, Operating, and Other Expenses') {
                    $aip_code .= '-002';
                } elseif ($item->category === 'Financial Expenses') {
                    $aip_code .= '-003';
                } elseif ($item->category === 'Capital Outlay') {
                    $aip_code .= '-004';
                }
                $approp_total = $this->appropriations_total($request, $idpaps, $item->category, $year);
                // dd($approp_total->budget_year);
                // dd(number_format($approp_total['budget_year'], 2, '.', ','));
                $past_year_total = 0;
                $first_sem_total = 0;
                $second_sem_total = 0;
                $total_total = 0;
                $budget_year_total = 0;
                if ($approp_total) {
                    $past_year_total = isset($approp_total['past_year']) ? $approp_total['past_year'] : '0.00';
                    $first_sem_total = isset($approp_total['first_sem']) ? $approp_total['first_sem'] : '0.00';
                    $second_sem_total = isset($approp_total['second_sem']) ? $approp_total['second_sem'] : '0.00';
                    $total_total = isset($approp_total['total']) ? $approp_total['total'] : '0.00';
                    $budget_year_total = isset($approp_total['budget_year']) ? $approp_total['budget_year'] : '0.00';
                }
                return [
                    "category" => $item->category,
                    "aip_code" => $aip_code,
                    "type" => $paps_type,
                    "idpaps" => $idpaps,
                    "past_year_total" => $past_year_total,
                    "first_sem_total" => $first_sem_total,
                    "second_sem_total" => $second_sem_total,
                    "total_total" => $total_total,
                    "budget_year_total" => $budget_year_total,
                    "appropriations" => $this->appropriations2($request, $idpaps, $item->category, $year)
                ];
            });
        return $categories;
    }

    public function appropriations2(Request $request, $idpaps, $category, $year)
    {

        $rev_pln = RevisionPlan::with('paps')->where('idpaps', $idpaps)
            ->whereYear('date_start', $year)
            ->orderBy('version', 'DESC')
            ->first();

        // $rev_pln_query = RevisionPlan::with('paps')->where('idpaps', $idpaps)
        //     ->whereYear('date_start', $year)
        //     ->orderBy('version', 'DESC');
        // dd($idpaps, $category, $year);
        // dd($rev_pln_query->toSql(), $rev_pln_query->getBindings());
        $rev_pln_id = $rev_pln ? $rev_pln->id : 0;
        $paps_type = $request->paps_type;
        // dd($paps_type);
        $paps = ProgramAndProject::where('id', $idpaps)->first();
        $appropriations = BudgetRequirement::select('id', 'account_code', 'particulars')
            ->selectRaw('SUM(amount) AS amount')
            ->where('revision_plan_id', $rev_pln_id)
            ->where('category', 'LIKE', '%' . $category . '%')
            ->groupBy('particulars')
            ->get()
            ->map(function ($item) use ($category, $paps, $idpaps, $paps_type) {

                $approp = Appropriation::select(
                    'appropriations.account_code',
                    DB::raw('SUM(appropriations.past_year) AS past_year'),
                    DB::raw('SUM(appropriations.first_sem) AS first_sem'),
                    DB::raw('SUM(appropriations.second_sem) AS second_sem'),
                    DB::raw('(SUM(appropriations.first_sem) + SUM(appropriations.second_sem)) AS total'),
                    DB::raw('SUM(appropriations.budget_year) AS budget_year')
                )

                    ->where('appropriations.category', $category)
                    ->where('appropriations.idpaps', $idpaps)
                    ->where('account_code', $item->account_code)
                    ->first();

                $ooe_a = optional($approp)->object_of_expenditure;
                $ooe_b = optional($item)->particulars;
                return [
                    "paps_desc" => optional($paps)->paps_desc,
                    "type" => $paps_type,
                    "account_code" => optional($item)->account_code,
                    "object_of_expenditure" => is_null($ooe_a) ? $ooe_b : $ooe_a,
                    "past_year" => number_format(optional($approp)->past_year, 2, '.', ','),
                    "first_sem" => number_format(optional($approp)->first_sem, 2, '.', ','),
                    "second_sem" => number_format(optional($approp)->second_sem, 2, '.', ','),
                    "total" => number_format(optional($approp)->total, 2, '.', ','),
                    "budget_year" => number_format(optional($item)->amount, 2, '.', ','),
                    "department_code" => optional($paps)->department_code,
                ];
            });

        return $appropriations;
    }

    public function appropriations_total(Request $request, $idpaps, $category, $year)
    {
        $rev_pln = RevisionPlan::with('paps')
            ->where('idpaps', $idpaps)
            ->whereYear('date_start', $year)
            ->orderBy('version', 'DESC')
            ->first();

        $rev_pln_id = $rev_pln ? $rev_pln->id : 0;

        $paps = ProgramAndProject::where('id', $idpaps)->first();

        $appropriations = BudgetRequirement::select('id', 'account_code', 'particulars')
            ->selectRaw('SUM(amount) AS amount')
            ->where('revision_plan_id', $rev_pln_id)
            ->where('category', 'LIKE', '%' . $category . '%')
            ->groupBy('particulars')
            ->get();
        // dd($appropriations);
        // Initialize total accumulators
        $totals = [
            'past_year' => 0,
            'first_sem' => 0,
            'second_sem' => 0,
            'total' => 0,
            'budget_year' => 0,
        ];

        foreach ($appropriations as $item) {
            $approp = Appropriation::select(
                DB::raw('SUM(past_year) AS past_year'),
                DB::raw('SUM(first_sem) AS first_sem'),
                DB::raw('SUM(second_sem) AS second_sem'),
                DB::raw('SUM(budget_year) AS budget_year')
            )
                ->where('category', $category)
                ->where('idpaps', $idpaps)
                ->where('account_code', $item->account_code)
                ->first();
            // dd($totals['budget_year'] . ' ' . (float)$item->amount);
            $totals['past_year'] += (float) optional($approp)->past_year;
            $totals['first_sem'] += (float) optional($approp)->first_sem;
            $totals['second_sem'] += (float) optional($approp)->second_sem;
            $totals['budget_year'] += (float) $item->amount;
        }

        $totals['total'] = $totals['first_sem'] + $totals['second_sem'];

        // Format as requested
        return [
            "paps_desc" => optional($paps)->paps_desc,
            "department_code" => optional($paps)->department_code,
            "category" => $category,
            "past_year" => number_format($totals['past_year'], 2, '.', ','),
            "first_sem" => number_format($totals['first_sem'], 2, '.', ','),
            "second_sem" => number_format($totals['second_sem'], 2, '.', ','),
            "total" => number_format($totals['total'], 2, '.', ','),
            "budget_year" => number_format($totals['budget_year'], 2, '.', ','),
        ];
    }


    public function paps_categories3(Request $request)
    {
        // dd($request);
        $year = $request->year;
        $idpaps = $request->idpaps;
        $paps_type = $request->paps_type;
        // dd($paps_type);
        $categories = Category::select('categories.category', 'revision_plans.aip_code')
            // ->where('appropriations.idpaps', $request->idpaps)
            ->where('revision_plans.idpaps', $idpaps)
            // ->join('appropriations', 'appropriations.category', 'categories.category')
            ->join('budget_requirements', 'budget_requirements.category', 'categories.category')
            ->join('revision_plans', 'revision_plans.id', 'budget_requirements.revision_plan_id')
            // ->join('program_and_projects', 'program_and_projects.id', 'revision_plans.idpaps')
            // ->where('program_and_projects.type', $request->type)
            ->groupBy('categories.category')
            ->orderByRaw(
                DB::raw("CASE WHEN categories.category = 'Personnel Services' THEN 0
                            WHEN categories.category = 'Maintenance, Operating, and Other Expenses' THEN 1
                            WHEN categories.category = 'Financial Expenses' THEN 2
                            WHEN categories.category = 'Capital Outlay' THEN 3 ELSE 4
                            END")
            )
            ->get()
            ->map(function ($item) use ($request, $idpaps, $paps_type, $year) {
                //$categ = Str::upper($item->category);
                // dd($paps_type, "PAPSPPSSS");
                $aip_code = $item->aip_code;
                if ($item->category === 'Personnel Services') {
                    $aip_code .= '-001';
                } elseif ($item->category === 'Maintenance, Operating, and Other Expenses') {
                    $aip_code .= '-002';
                } elseif ($item->category === 'Financial Expenses') {
                    $aip_code .= '-003';
                } elseif ($item->category === 'Capital Outlay') {
                    $aip_code .= '-004';
                }
                $approp_total = $this->appropriations_total($request, $idpaps, $item->category, $year);
                // dd($approp_total->budget_year);
                // dd(number_format($approp_total['budget_year'], 2, '.', ','));
                $past_year_total = 0;
                $first_sem_total = 0;
                $second_sem_total = 0;
                $total_total = 0;
                $budget_year_total = 0;
                if ($approp_total) {
                    $past_year_total = isset($approp_total['past_year']) ? $approp_total['past_year'] : '0.00';
                    $first_sem_total = isset($approp_total['first_sem']) ? $approp_total['first_sem'] : '0.00';
                    $second_sem_total = isset($approp_total['second_sem']) ? $approp_total['second_sem'] : '0.00';
                    $total_total = isset($approp_total['total']) ? $approp_total['total'] : '0.00';
                    $budget_year_total = isset($approp_total['budget_year']) ? $approp_total['budget_year'] : '0.00';
                }
                // dd($paps_type);
                return [
                    "category" => $item->category,
                    "aip_code" => $aip_code,
                    "type" => $paps_type,
                    "idpaps" => $idpaps,
                    "past_year_total" => $past_year_total,
                    "first_sem_total" => $first_sem_total,
                    "second_sem_total" => $second_sem_total,
                    "total_total" => $total_total,
                    "budget_year_total" => $budget_year_total,
                    // "appropriations" => $this->appropriations2($request, $idpaps, $item->category, $year)
                ];
            });
        return $categories;
    }

    public function paps3(Request $request)
    {
        //
        // dd($request->paps_type);
        $department_code = $request->department_code;
        $paps_type = $request->paps_type;
        // dd($department_code);
        $paps_id = ProgramAndProject::select('id')
            ->where('department_code', $department_code)
            ->pluck('id');
        $latestRevisions = DB::table('revision_plans')
            ->select(DB::raw('MAX(id) as latest_id'), 'idpaps')
            ->whereIn('idpaps', $paps_id)
            ->groupBy('idpaps');

        $paps = ProgramAndProject::select('program_and_projects.id', 'program_and_projects.paps_desc')
            ->joinSub($latestRevisions, 'latest_rev', function ($join) {
                $join->on('program_and_projects.id', '=', 'latest_rev.idpaps');
            })
            ->join('revision_plans', 'revision_plans.id', '=', 'latest_rev.latest_id')
            ->join('budget_requirements', 'budget_requirements.revision_plan_id', '=', 'revision_plans.id')
            ->where('program_and_projects.department_code', $request->department_code)
            ->where('program_and_projects.type', $paps_type)
            ->distinct()
            ->get()
            ->map(function ($item) use ($request, $paps_type) {
                // dd($item);
                return [
                    "idpaps" => $item->id,
                    "paps_desc" => $item->paps_desc,
                    "type" => $paps_type,
                    "categories" => $this->paps_categories2($request, $item->id, $paps_type),
                    // "particulars" => $item->particulars,
                    // "category" => $item->category,
                    // "idrevplan" => $item->rev_id
                ];
            });
        if (count($paps) < 1) {
            $paps = collect(
                [
                    "idpaps" => '',
                    "paps_desc" => '',
                    "type" => '',
                    "categories" => []
                ],
            );
        }
        return $paps;
    }

    public function appropriations3(Request $request)
    {
        $idpaps = $request->idpaps;
        $category = $request->category;
        $year = $request->year;
        $paps_type = $request->paps_type;

        $rev_pln = RevisionPlan::with('paps')->where('idpaps', $idpaps)
            ->whereYear('date_start', $year)
            ->orderBy('version', 'DESC')
            ->first();

        // $rev_pln_query = RevisionPlan::with('paps')->where('idpaps', $idpaps)
        //     ->whereYear('date_start', $year)
        //     ->orderBy('version', 'DESC');
        // dd($idpaps, $category, $year);
        // dd($rev_pln_query->toSql(), $rev_pln_query->getBindings());
        $rev_pln_id = $rev_pln ? $rev_pln->id : 0;

        // dd($paps_type);
        $paps = ProgramAndProject::where('id', $idpaps)->first();
        $appropriations = BudgetRequirement::select('id', 'account_code', 'particulars')
            ->selectRaw('SUM(amount) AS amount')
            ->where('revision_plan_id', $rev_pln_id)
            ->where('category', 'LIKE', '%' . $category . '%')
            ->groupBy('particulars')
            ->get()
            ->map(function ($item) use ($category, $paps, $idpaps, $paps_type) {

                $approp = Appropriation::select(
                    'appropriations.account_code',
                    DB::raw('SUM(appropriations.past_year) AS past_year'),
                    DB::raw('SUM(appropriations.first_sem) AS first_sem'),
                    DB::raw('SUM(appropriations.second_sem) AS second_sem'),
                    DB::raw('(SUM(appropriations.first_sem) + SUM(appropriations.second_sem)) AS total'),
                    DB::raw('SUM(appropriations.budget_year) AS budget_year')
                )

                    ->where('appropriations.category', $category)
                    ->where('appropriations.idpaps', $idpaps)
                    ->where('account_code', $item->account_code)
                    ->first();

                $ooe_a = optional($approp)->object_of_expenditure;
                $ooe_b = optional($item)->particulars;
                return [
                    "paps_desc" => optional($paps)->paps_desc,
                    "type" => $paps_type,
                    "account_code" => optional($item)->account_code,
                    "object_of_expenditure" => is_null($ooe_a) ? $ooe_b : $ooe_a,
                    "past_year" => number_format(optional($approp)->past_year, 2, '.', ','),
                    "first_sem" => number_format(optional($approp)->first_sem, 2, '.', ','),
                    "second_sem" => number_format(optional($approp)->second_sem, 2, '.', ','),
                    "total" => number_format(optional($approp)->total, 2, '.', ','),
                    "budget_year" => number_format(optional($item)->amount, 2, '.', ','),
                    "department_code" => optional($paps)->department_code,
                ];
            });

        return $appropriations;
    }
}
