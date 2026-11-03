<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\Appropriation;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppropriationBudgetController extends Controller
{
    protected $appropriation;
    public function __construct(Appropriation $appropriation)
    {
        $this->appropriation = $appropriation;
    }
    public function index(Request $request)
    {
        $appropriations = $this->appropriation->with('revisionPlan')->get();

        return response()->json($appropriations);
    }
    public function appropriations(Request $request, $id)
    {
        $appropriations = $this->appropriation
            ->with('revisionPlan')
            ->where('revision_plan_id', $id)
            ->get();

        return response()->json($appropriations);
    }
    public function ooes(Request $request, $id)
    {
        $appropriations = $this->appropriation
            ->with('revisionPlan')
            ->where('revision_plan_id', $id)
            ->where('type', 'O')
            ->get();

        return response()->json($appropriations);
    }
    public function store(Request $request)
    {
        // dd($request);
        //validate if budget
        $idpaps = $request->idpaps;
        $aip = [];
        $is_greater = false;
        /*
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
        */
        $attributes = $request->validate([
            // 'idooe' => 'required',
            'year' => 'required',
            'FFUNCCOD' => 'required',
            // 'raaotype' => 'required',
            // 'idprogram' => 'required',
            'object_of_expenditure' => 'required',
            'past_year' => 'required',
            'first_sem' => 'required',
            'second_sem' => 'required',
            'budget_year' => 'required',
            'idpaps' => 'required',
            'revision_plan_id' => 'required',
            'category' => 'required',
        ]);
        // dd($request);
        $app = new Appropriation();
        $app->idooe    = $request->idooe;
        $app->year    = $request->year;
        $app->FFUNCCOD    = $request->FFUNCCOD;
        $app->raaotype    = $request->raaotype;
        $app->revision_plan_id = $request->revision_plan_id;
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
        $app->GAD = $request->GAD;
        $app->save();
        return redirect()->back()->with('message', 'Budget Prep created successfully');
    }
    public function edit(Request $request, $id)
    {
        $data = $this->appropriation::where('id', $id)->first();
        //dd($data);
        $year_n = $data->year;
        $year_c = intval($year_n) - 1;
        $year_p = intval($year_n) - 2;
        $idpaps = $data->idpaps;

        //FUNCTIONS
        $idn = auth()->user()->recid;
        $functions = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
            ->where('systemusers.recid', $idn)
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
        return [
            "ooes" => $ooes,
            "editData" => $data
        ];
    }
    public function update(Request $request, $id)
    {
        // dd($request->all());
        $attributes = $request->validate([
            // 'idooe' => 'required',
            'year' => 'required',
            'FFUNCCOD' => 'required',
            // 'raaotype' => 'required',
            // 'idprogram' => 'required',
            'object_of_expenditure' => 'required',
            'past_year' => 'required',
            'first_sem' => 'required',
            'second_sem' => 'required',
            'budget_year' => 'required',
            'idpaps' => 'required',
            'revision_plan_id' => 'required',
            'category' => 'required',
            'GAD' => 'required',
            'AIP_CODE' => 'nullable',
        ]);
        $app = Appropriation::findOrFail($id);
        $app->idooe    = $request->idooe;
        $app->year    = $request->year;
        $app->FFUNCCOD    = $request->FFUNCCOD;
        $app->raaotype    = $request->raaotype;
        $app->revision_plan_id = $request->revision_plan_id;
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
        $app->GAD = $request->GAD;
        $app->save();
        // $app->update($attributes);
        return redirect()->back()->with('message', 'Budget Prep updated successfully');
    }
    public function destroy(Request $request, $id)
    {
        $status = "message";
        $msg = "appropriation amount deleted";
        $data = $this->appropriation->findOrFail($id);
        // $aip_id = $data->aip_id;
        $data->delete();
        //dd($request->raao_id);
        return redirect()->back()->with(
            $status,
            $msg
        );
    }
    public function print_lbp2(Request $request)
    {
        // dd($request);
        $department_head = $request->department_head;
        $budget_officer = $request->budget_officer;
        $department_code = $request->department_code;
        $office = $request->office;
        $local_chief = $request->local_chief;
        $total_past_year = $request->total_past_year;
        $total_first_sem = $request->total_first_sem;
        $total_second_sem = $request->total_second_sem;
        $total_total = $request->total_total;
        $total_budget_year = $request->total_budget_year;
        $revision_plan_id = $request->revision_plan_id;
        $appropriations = Appropriation::where('revision_plan_id', $revision_plan_id)
            ->get()
            ->map(function ($item) use ($request) {
                $department_head = $request->department_head;
                $budget_officer = $request->budget_officer;
                $department_code = $request->department_code;
                $office = $request->office;
                $local_chief = $request->local_chief;
                $total_past_year = $request->total_past_year;
                $total_first_sem = $request->total_first_sem;
                $total_second_sem = $request->total_second_sem;
                $total_total = $request->total_total;
                $total_budget_year = $request->total_budget_year;
                $revision_plan_id = $request->revision_plan_id;
                return [
                    "department_head" => $department_head,
                    "budget_officer" => $budget_officer,
                    "department_code" => $department_code,
                    "office" => $office,
                    "local_chief" => $local_chief,
                    "total_past_year" => $total_past_year,
                    "total_first_sem" => $total_first_sem,
                    "total_second_sem" => $total_second_sem,
                    "total_total" => $total_total,
                    "total_budget_year" => $total_budget_year,
                    "revision_plan_id" => $revision_plan_id,
                    "id" => $item->id,
                    "idooe" => $item->idooe,
                    // "revision_plan_id" => $item->revision_plan_id,
                    "year" => $item->year,
                    "FFUNCCOD" => $item->FFUNCCOD,
                    "raaotype" => $item->raaotype,
                    "idprogram" => $item->idprogram,
                    "AIP_CODE" => $item->AIP_CODE,
                    "object_of_expenditure" => $item->object_of_expenditure,
                    "account_code" => $item->account_code,
                    "past_year" => $item->past_year,
                    "first_sem" => $item->first_sem,
                    "second_sem" => $item->second_sem,
                    "budget_year" => $item->budget_year,
                    "idpaps" => $item->idpaps,
                    "category" => $item->category,
                    "GAD" => $item->GAD,
                    "CCET" => $item->CCET,
                    "deleted_at" => $item->deleted_at,
                    "created_at" => $item->created_at,
                    "updated_at" => $item->updated_at,
                ];
            });

        // $personnel_services = $appropriations->filter(function ($item) {
        //     return $item->category === 'Personnel Services';
        // });

        // $mooe = $appropriations->filter(function ($item) {
        //     return $item->category === 'Maintenance, Operating, and Other Expenses';
        // });

        // $capital_outlay = $appropriations->filter(function ($item) {
        //     return $item->category === 'Capital Outlay';
        // });

        // $programs = $appropriations->filter(function ($item) {
        //     return $item->category === 'Programs';
        // });

        // $projects = $appropriations->filter(function ($item) {
        //     return $item->category === 'Projects';
        // });
        if (count($appropriations) < 1) {
            $appropriations = [[
                "department_head" => $department_head,
                "budget_officer" => $budget_officer,
                "department_code" => $department_code,
                "office" => $office,
                "local_chief" => $local_chief,
                "total_past_year" => $total_past_year,
                "total_first_sem" => $total_first_sem,
                "total_second_sem" => $total_second_sem,
                "total_total" => $total_total,
                "total_budget_year" => $total_budget_year,
                "revision_plan_id" => $revision_plan_id,
                "id" => null,
                "idooe" => null,
                // "revision_plan_id" => null,
                "year" => null,
                "FFUNCCOD" => null,
                "raaotype" => null,
                "idprogram" => null,
                "AIP_CODE" => null,
                "object_of_expenditure" => null,
                "account_code" => null,
                "past_year" => null,
                "first_sem" => null,
                "second_sem" => null,
                "budget_year" => null,
                "idpaps" => null,
                "category" => null,
                "GAD" => null,
                "CCET" => null,
                "deleted_at" => null,
                "created_at" => null,
                "updated_at" => null,
            ]];
            // $personnel_services = collect($appropriations);
            // $mooe = collect($appropriations);
            // $capital_outlay = collect($appropriations);
            // $programs = collect($appropriations);
            // $projects = collect($appropriations);
        }
        return $appropriations;
        // return [
        //     "department_head" => $department_head,
        //     "budget_officer" => $budget_officer,
        //     "department_code" => $department_code,
        //     "office" => $office,
        //     "local_chief" => $local_chief,
        //     "total_past_year" => $total_past_year,
        //     "total_first_sem" => $total_first_sem,
        //     "total_second_sem" => $total_second_sem,
        //     "total_total" => $total_total,
        //     "total_budget_year" => $total_budget_year,
        //     "revision_plan_id" => $revision_plan_id,
        //     "appropriations" => $appropriations,

        //     // Add category-specific data
        //     "personnel_services" => $personnel_services,
        //     "mooe" => $mooe,
        //     "capital_outlay" => $capital_outlay,
        //     "programs" => $programs,
        //     "projects" => $projects,
        // ];
    }
}
