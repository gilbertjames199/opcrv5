<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\AnnualInvestmentPlan;
use App\Models\AppropriationAmount;
use App\Models\BudgetRequirement;
use App\Models\ExpectedOutput;
use App\Models\FFUNCCOD;
use App\Models\Office;
use App\Models\Program;
use App\Models\ProgramAndProject;
use App\Models\RAAOD;
use App\Models\RAAOHS;
use App\Models\RevisionPlan;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;


class AnnualInvestmentPlanController extends Controller
{
    //
    protected $model;
    public function __construct(AnnualInvestmentPlan $model)
    {
        $this->model = $model;
    }

    //
    public function index(Request $request)
    {
        clock()->info('Testing Clockwork');
        clock()->error('This is an error');
        // dd("fdsfsfdsdsf");
        $FFUNCCOD_creator = auth()->user()->office;
        // dd($FFUNCCOD_creator);
        $data = $this->model->with(['program'])
            ->where('FFUNCCOD_creator', $FFUNCCOD_creator)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        return inertia('AnnualInvestmentPlan/Index', [
            "data" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {
        // dd("create");
        $year_c = date('Y');
        // dd($year_c);
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        //AIP CODE
        // $aip = AIP::where('idpaps', $idpaps)->first();
        // $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        // $paps = ProgramAndProject::find($idpaps);
        // $all_paps = ProgramAndProject::get();
        $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        $acc = $accounts->pluck('FTITLE');
        $code = $accounts->pluck('FACTCODE');

        //FUNCTIONS
        $idn = auth()->user()->recid;
        // $functions = DB::connection('mysql2')->table('accountaccess')
        //     ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
        //     ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
        //     ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
        //     // ->where('systemusers.recid', $idn)
        //     ->get();
        $functions = FFUNCCOD::select('FFUNCCOD', 'functions.FFUNCTION')->get();


        //PROGRAMS
        // ->join('raaohs', 'raaohs.idprogram','programs.recid')
        // ->groupBy('programs.recid')
        // $programs = DB::connection('mysql2')->table('programs')
        //     ->select(
        // 'raaohs.recid AS raohsid',
        // 'programs.FPROGRAM',
        // 'programs.factcode',
        // 'raaohs.FRAODESC',
        // 'programs.ftype',
        // 'raaohs.tyear',
        // 'programs.recid',
        // DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
        //     )
        //     ->join('raaohs', 'raaohs.idprogram', 'programs.recid')
        //     ->where('raaohs.tyear', intval($year_p) - 1)
        //     ->OrderBy('programs.FPROGRAM')
        //     ->groupBy('programs.recid')
        //     ->get();
        // ****************************************************************
        // $programs = DB::connection('mysql2')->table('raaohs')
        //     ->join('programs', 'raaohs.idprogram', '=', 'programs.recid')
        //     ->select(
        // 'raaohs.recid AS raohsid',
        // 'programs.FPROGRAM',
        // 'programs.factcode',
        // 'raaohs.FRAODESC',
        // 'programs.ftype',
        // 'raaohs.tyear',
        // 'programs.recid',
        // DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
        //     )
        //     ->where('raaohs.tyear', intval($year_p) - 1)
        //     ->distinct('programs.recid', 'raaohs.FFUNCCOD')
        //     ->orderBy('FFUNCCOD', 'ASC')
        //     ->get();
        // ********************************************
        // $programs = DB::connection('mysql2')->table('raaohs')
        //     ->join('programs', 'raaohs.idprogram', '=', 'programs.recid')
        //     ->select(
        // 'raaohs.recid AS raohsid',
        // 'programs.FPROGRAM',
        // 'programs.factcode',
        // 'raaohs.FRAODESC',
        // 'programs.ftype',
        // 'raaohs.tyear',
        // 'programs.recid',
        // DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
        //     )
        //     ->groupBy(
        //         'programs.recid',   // Group by program recid
        //         'FFUNCCOD',         // Group by office code
        //         'programs.FPROGRAM',
        //         'programs.factcode',
        //         'raaohs.FRAODESC',
        //         'programs.ftype',
        //         'raaohs.tyear'
        //     )
        //     ->orderBy('FFUNCCOD', 'ASC')
        //     ->get();
        $programs = Program::join('raaohs', 'raaohs.idprogram', '=', 'programs.recid')
            ->select(
                'raaohs.recid AS raohsid',
                'programs.FPROGRAM',
                'programs.factcode',
                'raaohs.FRAODESC',
                'programs.ftype',
                'raaohs.tyear',
                'programs.recid',
                DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
            )
            ->where('tyear', $year_c)
            ->groupBy('raaohs.FFUNCCOD', 'programs.recid')
            ->get();

        // dd($programs);
        // $programs = $programs->groupBy('FFUNCCOD');
        // dd($programs[0]);
        // $programs = DB::connection('mysql2')->table('programs')
        //     ->select(
        //         'raaohs.recid AS raohsid',
        //         'programs.FPROGRAM',
        //         'programs.factcode',
        //         'programs.ftype',
        //         // 'programs.F',
        //         'raaohs.FRAODESC',
        //         'programs.recid',
        //         // 'raaohs.recid AS raohsid',
        //         // 'programs.FPROGRAM',
        //         // 'programs.factcode',
        //         // 'raaohs.FRAODESC',
        //         // 'programs.ftype',
        //         'raaohs.tyear',
        //         // 'programs.recid',
        //         DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
        //     )
        //     ->join('raaohs', 'raaohs.idprogram', 'programs.recid')
        //     ->where('raaohs.tyear', (intval($year_p) - 1))
        //     ->OrderBy('programs.FPROGRAM')
        //     // ->groupBy('raaohs.recid')
        //     ->groupBy('programs.recid')
        //     ->get();
        // dd($programs[0]);
        // $raaod = RAAOD::with(['ooe' => function ($query) {
        //     $query->whereNotNull('recid');
        // }, 'raaohs', 'raaohs.program'])
        //     // ->whereHas('ooe',
        //     ->whereHas('raaohs')
        //     ->whereHas('raaohs', function ($query) {
        //         $query->whereHas('program');
        //     })
        // ->get();
        // dd();
        // $raaod = RAAOD::with(['ooe', 'raaohs', 'raaohs.program'])
        //     ->whereHas('raaohs')->get()
        $year_current = date('Y');
        // dd($year_current);
        // $programs = RAAOD::select(
        //     'raaods.*',
        //     'programs.FPROGRAM',
        //     'programs.factcode',
        //     'programs.ftype',
        //     'raaohs.tyear',
        //     'programs.recid AS program_id',
        //     'raaohs.FRAODESC',
        //     'raaohs.FRAOTYPE',
        //     'raaohs.FFUNCCOD'

        // )
        //     ->join('raaohs', 'raaohs.recid', '=', 'raaods.idraao')
        //     ->join('programs', 'programs.recid', '=', 'raaohs.idprogram')
        //     ->join('ooes', 'ooes.recid', '=', 'raaods.idooe') // Keeps raaods even if ooe is missing
        //     // ->where('tyear', $year_current)
        //     ->groupBy('idraao')
        //     ->groupBy('program_id')
        //     ->with(['ooe', 'raaohs', 'raaohs.program'])
        //     ->get()
        //     ->map(function ($item) {
        //         // if ($item->ooe) {
        //         //     dd($item->raaohs);
        //         // }
        //         // dd($item->ooe);
        //         // dd($item);
        //         return [
        //             "raohsid" => $item->idraao,
        //             "FPROGRAM" => $item->FPROGRAM,
        //             "factcode" => $item->factcode,
        //             "ftype" => $item->ftype,
        //             "tyear" => $item->tyear,
        //             "recid" => $item->program_id,
        //             "FFUNCCOD" => trim($item->FFUNCCOD),
        //             "FRAODESC" => $item->FRAODESC,
        //             "FRAOTYPE" => $item->FRAOTYPE,
        //             "famount" => $item->famount,
        //             // "FRAAODESC" => $item->
        //             // "FRAAODESC" => $item->
        //             // "FPROGRAM" => $item->raaohs ? $item->raaohs->idprogram : "",
        //             // "FPROGRAM" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->FPROGRAM : "") : "",
        //             // "factcode" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->factcode : "") : "",
        //             // "FRAODESC" => $item->raaohs ? $item->raaohs->FRAODESC : "",
        //             // "ftype" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->ftype : "") : "",
        //             // "tyear" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->tyear : "") : "",
        //             // "recid" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->recid : "") : "",
        //             // "FFUNCCOD" => $item->raaohs ? trim($item->raaohs->FFUNCCOD) : "",
        //         ];
        //     });
        // dd($programs);
        // dd(count($programs));
        // dd($programs[0]);
        // dd($programs->pluck('raaohsid', 'FPROGRAM'));
        // $plucked = $programs->pluck(
        //     "FRAAODESC",
        //     "FRAOTYPE",
        //     "famount",
        //     "FRAAODESC",
        //     "FRAAODESC",
        //     "year"
        // );

        // dd($year_c);
        //DAPAT year_c sa WHERE ang nakafilter
        // $ooes = $this->getRaaoOOE($raaod);
        $ooes = [];
        return inertia("AnnualInvestmentPlan/Create", [
            // "pap1" => $paps,
            // "paps" => $all_paps,
            "accounts" => $acc,
            "codes" => $code,
            // "aip" => $aip,
            // "total_budget_year" => $total_budget_year,
            "functions" => $functions,
            "programs" => $programs,
            "ooes" => $ooes,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request);
        // $dept_code = auth()->user()->department_code;
        // $request->merge(['department_code' => $dept_code]);
        // dd(auth()->user());
        $attributes = $request->validate([
            'year' => 'required',
            'FFUNCCOD' => 'required',
            'raao_type' => 'required',
            'program_id' => 'required',
            'aip_code' => 'required',
            'source' => 'required',
            'planned_ps' => 'required',
            'planned_mooe' => 'required',
            'planned_fe' => 'required',
            'planned_co' => 'required',
            // 'planned_total' => 'required',
        ]);
        $planned_total = $this->calculate_total_amount($request);
        //dd($attributes);
        $ffunctions = FFUNCCOD::where('FFUNCCOD', $request->FFUNCCOD)->first();
        $ffunction = $ffunctions ? $ffunctions->FFUNCTION : "";
        // $request->merge(['FFUNCTION' => $ffunction]);
        // dd($request);
        // $this->model->create($attributes);
        $counter = AnnualInvestmentPlan::where('year', $request->year)
            ->where('FFUNCCOD', $request->FFUNCCOD)
            ->where('raao_type', $request->raao_type)
            ->where('program_id', $request->program_id)
            // ->where('aip_code', $request->aip_code)
            ->where('source', $request->source)
            ->count();

        // dd($counter);
        $type = "error";
        $msg = "Duplicate entry!!!! Set a different year, program, office, or raao type";
        if (intval($counter < 1)) {
            $type = "message";
            $msg = "AIP successfully added";
            // *****************************************
            $FFUNCCOD_creator = auth()->user()->office;
            $aip = new AnnualInvestmentPlan();
            $aip->year = $request->year;
            $aip->FFUNCTION = $ffunction;
            $aip->FFUNCCOD = $request->FFUNCCOD;
            $aip->FFUNCCOD_creator = $FFUNCCOD_creator;
            $aip->raao_desc = $request->raao_desc;
            $aip->raao_type = $request->raao_type;
            $aip->program_id = $request->program_id;
            $aip->aip_code = $request->aip_code;
            $aip->source = $request->source;
            $aip->planned_ps = $request->planned_ps;
            $aip->planned_mooe = $request->planned_mooe;
            $aip->planned_fe = $request->planned_fe;
            $aip->planned_co = $request->planned_co;
            $aip->planned_total = $planned_total;
            $aip->approved_ps = $request->approved_ps ? $request->approved_ps : "0";
            $aip->approved_mooe = $request->approved_mooe ? $request->approved_mooe : "0";
            $aip->approved_fe = $request->approved_fe ? $request->approved_fe : "0";
            $aip->approved_co = $request->approved_co ? $request->approved_co : "0";
            $aip->approved_total = $request->approved_total ? $request->approved_total : "0";
            $aip->final_tag = $request->final_tag ? $request->final_tag : "-";
            $aip->created_at = $request->created_at;
            $aip->updated_at = $request->updated_at;
            $aip->save();
            $aip_id = $aip->id;

            $year = intval($request->year) - 1;
            RAAOHS::join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
                ->select('ooes.FOOEDESC', 'ooes.recid AS idoee', 'raaohs.idprogram', DB::raw('SUM(raaods.famount) as total_famount'))
                ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
                ->where('raaohs.FFUNCCOD', $request->FFUNCCOD)
                ->where('raaohs.FRAOTYPE', $request->raao_type)
                ->where('raaohs.idprogram', $request->program_id)
                ->where('ooes.FACTCODE', 'LIKE', '5%')
                ->whereYear('raaods.fdate', $year)
                ->groupBy('ooes.recid')
                ->get()
                ->map(function ($item) use (
                    $request,
                    $year,
                    $aip_id
                ) {
                    // dd($item);
                    $approp = new AppropriationAmount();
                    $approp->aip_id = $aip_id;
                    $approp->aip_code = "";
                    $approp->aip_code_parent = $request->aip_code;
                    $approp->aip_code_child = "";
                    $approp->idooe = $item->idoee;
                    $approp->amount = $item->total_famount;
                    $approp->save();
                });
            return redirect('/annual-investment-plans')
                ->with($type, $msg);
        } else {
            return redirect()->back()->with($type, $msg);
        }
        // ->where('raao_type', $request->raao_type)


        // $rrr = RAAOHS::join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
        //     ->select('ooes.FOOEDESC', 'raaohs.idprogram', DB::raw('SUM(raaods.famount) as total_famount'))
        //     ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
        //     ->where('raaohs.FFUNCCOD', $request->FFUNCCOD)
        //     ->where('raaohs.FRAOTYPE', $request->raao_type)
        //     ->whereYear('raaods.fdate', $request->year)
        //     ->groupBy('ooes.recid')
        //     ->get();

        // dd($aip_id);
        // dd($request);


    }

    public function edit(Request $request, $id)
    {

        $data = $this->model->where('id', $id)->first();
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        //AIP CODE
        // $aip = AIP::where('idpaps', $idpaps)->first();
        // $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        // $paps = ProgramAndProject::find($idpaps);
        // $all_paps = ProgramAndProject::get();
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
        $programs = Program::join('raaohs', 'raaohs.idprogram', '=', 'programs.recid')
            ->select(
                'raaohs.recid AS raohsid',
                'programs.FPROGRAM',
                'programs.factcode',
                'raaohs.FRAODESC',
                'programs.ftype',
                'raaohs.tyear',
                'programs.recid',
                DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
            )
            ->groupBy('raaohs.FFUNCCOD', 'programs.recid')
            ->get();

        $ooes = [];
        return inertia("AnnualInvestmentPlan/Create", [
            // "pap1" => $paps,
            // "paps" => $all_paps,
            "accounts" => $acc,
            "codes" => $code,
            // "aip" => $aip,
            // "total_budget_year" => $total_budget_year,
            "editData" => $data,
            "functions" => $functions,
            "programs" => $programs,
            "ooes" => $ooes,
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd("update" . $id);
        $attributes = $request->validate([
            'year' => 'required',
            'FFUNCCOD' => 'required',
            'raao_type' => 'required',
            'program_id' => 'required',
            'aip_code' => 'required',
            'source' => 'required',
            'planned_ps' => 'required',
            'planned_mooe' => 'required',
            'planned_fe' => 'required',
            'planned_co' => 'required',
            'planned_total' => 'required',
        ]);
        //dd($attributes);
        $ffunctions = FFUNCCOD::where('FFUNCCOD', $request->FFUNCCOD)->first();
        $ffunction = $ffunctions ? $ffunctions->FFUNCTION : "";
        $FFUNCCOD_creator = auth()->user()->office;
        // $request->merge(['FFUNCTION' => $ffunction]);
        // dd($request);
        // $this->model->create($attributes);
        $aip = AnnualInvestmentPlan::where('id', $id)->first();
        $aip->year = $request->year;
        $aip->FFUNCTION = $ffunction;
        $aip->FFUNCCOD = $request->FFUNCCOD;
        $aip->FFUNCCOD_creator = $FFUNCCOD_creator;
        $aip->raao_type = $request->raao_type;
        $aip->program_id = $request->program_id;
        $aip->aip_code = $request->aip_code;
        $aip->source = $request->source;
        $aip->raao_desc = $request->raao_desc;
        $aip->planned_ps = $request->planned_ps;
        $aip->planned_mooe = $request->planned_mooe;
        $aip->planned_fe = $request->planned_fe;
        $aip->planned_co = $request->planned_co;
        $aip->planned_total = $request->planned_total;
        $aip->approved_ps = $request->approved_ps ? $request->approved_ps : "0";
        $aip->approved_mooe = $request->approved_mooe ? $request->approved_mooe : "0";
        $aip->approved_fe = $request->approved_fe ? $request->approved_fe : "0";
        $aip->approved_co = $request->approved_co ? $request->approved_co : "0";
        $aip->approved_total = $request->approved_total ? $request->approved_total : "0";
        $aip->final_tag = $request->final_tag ? $request->final_tag : "-";
        $aip->created_at = $request->created_at;
        $aip->updated_at = $request->updated_at;
        $aip->save();
        return redirect('/annual-investment-plans')
            ->with('message', 'AIP successfully added');
    }

    public function destroy(Request $request, $id)
    {
        $status = "message";
        $msg = "AIP deleted";
        $data = $this->model->findOrFail($id);
        $data->delete();

        $eo = ExpectedOutput::where('aip_id', $id)->get();
        $eo->each->delete();

        $approp = AppropriationAmount::where('aip_id', $id)->get();
        $approp->each->delete();
        //dd($request->raao_id);
        return redirect('/annual-investment-plans')->with($status, $msg);
    }
    public function calculate_total_amount(Request $request)
    {
        // dd($request);
        $totalFamount = DB::connection('mysql2')->table('raaohs')
            ->join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
            ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
            ->when($request->year, function ($query) use ($request) {
                $myyear = intval($request->year) - 1;
                $query->whereYear('raaods.fdate', $myyear);
            })
            ->when($request->program_id, function ($query) use ($request) {
                return $query->where('raaohs.idprogram', $request->program_id);
            })
            ->when($request->FFUNCCOD, function ($query) use ($request) {
                return $query->where('raaohs.FFUNCCOD', $request->FFUNCCOD);
            })
            ->when($request->raao_type, function ($query) use ($request) {
                return $query->where('raaohs.FRAOTYPE', $request->raao_type);
            })
            // ->where('raaohs.idprogram', $request->program_id)
            // ->where('raaohs.FFUNCCOD', $request->FFUNCCOD)
            // ->where('raaohs.FRAOTYPE', $request->raao_type)
            ->where('ooes.FACTCODE', 'LIKE', '5%')
            ->sum('raaods.famount');
        // dd($request->params);
        return $totalFamount;
        // $data = DB::connection('mysql2')->table('raaohs')
        //     ->join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
        //     ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
        //     ->when($request->year, function ($query) use ($request) {
        //         $myyear = intval($request->year) - 1;
        //         $query->whereYear('raaods.fdate', $myyear);
        //     })
        //     ->when($request->program_id, function ($query) use ($request) {
        //         return $query->where('raaohs.idprogram', $request->program_id);
        //     })
        //     ->when($request->FFUNCCOD, function ($query) use ($request) {
        //         return $query->where('raaohs.FFUNCCOD', $request->FFUNCCOD);
        //     })
        //     ->when($request->raao_type, function ($query) use ($request) {
        //         return $query->where('raaohs.FRAOTYPE', $request->raao_type);
        //     })
        //     ->where('ooes.FACTCODE', 'LIKE', '5%')
        //     ->selectRaw('SUM(raaods.famount) as total_famount, MAX(raaohs.FRAODESC) as FRAODESC')
        //     ->first();
        // if($data->total_famount>=0){
        //     return $data;
        // }
        // return $data;
        // return $request;
    }
    public function getRaaoOOE($raaod)
    {
        // select(
        //     'raaohs.FRAODESC',
        //     'raaohs.FRAOTYPE',
        //     'raaods.famount',
        //     DB::raw('YEAR(raaods.fdate) as year')
        // )
        //     ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
        //     ->join('ooes', 'ooes.recid', 'raaods.idooe')
        return $raaod
            ->map(function ($item) {
                // dd($item);
                return [
                    "FRAAODESC" => $item->raaohs ? $item->raaohs->FRAODESC : "",
                    "FRAOTYPE" => $item->raaohs ? $item->raaohs->FRAOTYPE : "",
                    "famount" => $item->famount,
                    "FRAAODESC" => $item->raaohs ? $item->raaohs->FRAODESC : "",
                    "FRAAODESC" => $item->raaohs ? $item->raaohs->FRAODESC : "",
                    "year" => ($item->fdate !== '0000-00-00') ? date('Y', strtotime($item->fdate)) : null
                ];
            });
    }

    public function print_OPCR(Request $request)
    {
        // dd("print");
        // dd(auth()->user());
        // dd($request->department_code);
        $office = Office::where('department_code', $request->department_code)->first();
        $year = $request->year;
        // dd($office);
        $dept_code = $request->department_code;
        return  RevisionPlan::with([
            'paps',
            'budget',
            'checklist',
            'comments',
            'strategyProject',
            'strategyProject.strategy',
            'activityProject',
            'activityProject.activity',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
        ])
            ->whereHas('paps', function ($query) use ($dept_code) {
                $query->where('department_code', $dept_code);
            })
            ->where(function ($query) use ($year) {
                if ($year) {
                    $query->whereYear('date_start', $year)
                        ->whereYear('date_end', $year);
                }
            })
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($item) use ($office, $year) {
                $office_short = $office ? $office->short_name : "";
                // dd($item);
                $totals = BudgetRequirement::select('category', 'source', DB::raw('SUM(amount) as total'))
                    ->where('revision_plan_id', $item->id)
                    ->groupBy('category', 'source')
                    ->get()
                    ->groupBy('category');
                // ->pluck('total', 'category');
                // $mooe = $totals['Maintenance, Operating, and Other Expenses']->sum('total') ?? 0;
                $co   = optional($totals->get('Capital Outlay'))->sum('total') ?? 0;
                $mooe = optional($totals->get('Maintenance, Operating, and Other Expenses'))->sum('total') ?? 0;
                $ps   = optional($totals->get('Personal Services'))->sum('total') ?? 0;
                $fe   = optional($totals->get('Financial Expenses'))->sum('total') ?? 0;
                // $fe   = $totals['Financial Expenses'] ? $totals['Financial Expenses']->sum('total') : 0;
                // $ps   = $totals['Personnel Services'] ? $totals['Personnel Services']->sum('total') : 0;
                $ps = 0;
                // dd($totals['Maintenance, Operating, and Other Expenses']);
                return [
                    "aip_code" => $item->aip_code,
                    "paps_title" => $item->project_title,
                    "implementing_office" => $office_short,
                    "year" => $year,
                    "mooe" => $mooe,
                    "co" => $co,
                    "fe" => $fe,
                    "ps" => $ps,
                    "start_date" => Carbon::parse($item->date_start)->format('F Y'),
                    "end_date" => Carbon::parse($item->date_end)->format('F Y'),
                    // "funding_source" => $totals->source,
                    "strategy_projects" => $item->strategyProject->map(function ($strategyProject) use ($item) {
                        return [
                            "strategy" => $strategyProject->strategy ? $strategyProject->strategy->description : "",
                            "activities" => $item->activityProject->map(function ($activityProject) {
                                return [
                                    "activity" => $activityProject->activity ? $activityProject->activity->description : "",
                                    "expected_outputs" => $activityProject->expected_output->map(function ($expected_output) {
                                        return [
                                            "output" => $expected_output->description,
                                            "count" => (floatval($expected_output->physical_q1) + floatval($expected_output->physical_q2) + floatval($expected_output->physical_q3) + floatval($expected_output->physical_q4)),
                                        ];
                                    }),
                                    "expected_outcomes" => $activityProject->expected_outcome->map(function ($expected_outcome) {
                                        return [
                                            "outcome" => $expected_outcome->description,
                                            // "count" => (floatval($expected_outcome->physical_q1) + floatval($expected_outcome->physical_q2) + floatval($expected_outcome->physical_q3) + floatval($expected_outcome->physical_q4)),
                                        ];
                                    }),
                                ];
                            }),
                        ];
                    }),
                ];
            });
    }

    public function set_ipp_aip_codes(Request $request)
    {
        if (!in_array(auth()->user()->recid, [681, 682, 683, 684, 1007, 1008, 586])) {
            return redirect()->back()->with('message', 'Unable to save changes');
        }
        $current_year = date('Y');
        if($request->year){
            $current_year = $request->year;
        }
        // dd(auth()->user(), $request->year);
        $dept_code = auth()->user()->department_code;
        $search = $request->search;
        $revs = RevisionPlan::with([
                'paps',
                'paps.office',
                'activityProject' => function ($q) {
                    $q->where('is_active', 1)
                    ->whereHas('activity.strat')
                    ->join('activities', 'activity_projects.activity_id', '=', 'activities.id')
                    ->orderBy('activity_projects.seq_no', 'ASC')
                    ->orderBy('activities.description', 'ASC')
                    ->select('activity_projects.*'); // prevent column conflicts after join
                },
                'activityProject.activity',
                'activityProject.activity.strat',
                'activityProject.expected_output'
            ])
            ->whereYear('date_start', $current_year)
            ->where(function ($q) {
                $q->where('status', 1)
                ->orWhereHas('paps', function ($q2) {
                    $q2->where('source_of_funds', 'dev')
                     ->orWhere('source_of_funds', 'other');
                });
            })
            ->whereHas('activityProject.activity.strat', function ($q) {
                $q->whereColumn('strategies.idpaps', 'revision_plans.idpaps');
            })
            ->when($dept_code !== '04', function ($query) use ($dept_code) {
                // Filter by paps.department_code when user is not '04'
                $query->whereHas('paps', function ($q) use ($dept_code) {
                    $q->where('department_code', $dept_code);
                });
            })
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('aip_code', 'like', "%{$search}%")
                    ->orWhere('project_title', 'like', "%{$search}%")
                    ->orWhereHas('paps', function ($q2) use ($search) {
                        // $q2->where(function($q3) use ($search) {
                        //      $q3->where('sector', 'like', "%{$search}%")
                        //     ->orWhere('subsector', 'like', "%{$search}%");
                        // })->where('FFUNCCOD', 'like', "%{$search}%");
                        $q2->where('sector', 'like', "%{$search}%")
                            ->orWhere('subsector', 'like', "%{$search}%");
                    })
                    // ->orWhereHas('paps.office', function ($q2) use ($search) {
                    //     $q2->where('office', 'like', "%{$search}%");
                    // })
                    ->orWhereHas('activityProject.activity', function ($q2) use ($search) {
                        $q2->where('description', 'like', "%{$search}%");
                    });
                });
            })
            ->orderBy('aip_code', 'ASC')
            ->get();
            // dd($revs);

        $gen_pub = $revs->filter(function ($rev) {
            return optional($rev->paps)->sector === 'General Public Services Sector'
                && (optional($rev->paps)->source_of_funds === 'gen_fund'
                || optional($rev->paps)->source_of_funds === ''
                || optional($rev->paps)->source_of_funds === null)
                && optional($rev->paps)->department_code !== 'dev'
                && optional($rev->paps)->department_code !== '17';
        });

        $econ = $revs->filter(function ($rev) {
            return optional($rev->paps)->sector === 'Economic Services'
                && (optional($rev->paps)->source_of_funds === 'gen_fund'
                || optional($rev->paps)->source_of_funds === ''
                || optional($rev->paps)->source_of_funds === null)
                && optional($rev->paps)->department_code !== 'dev'
                && optional($rev->paps)->department_code !== '17';
        });

        $soc = $revs->filter(function ($rev) {
            return optional($rev->paps)->sector === 'Social Services Sector'
                && (optional($rev->paps)->source_of_funds === 'gen_fund'
                    || optional($rev->paps)->source_of_funds === ''
                    || optional($rev->paps)->source_of_funds === null)
                && optional($rev->paps)->department_code !== 'dev'
                && optional($rev->paps)->department_code !== '17';
                // && optional($rev->paps)->source_of_funds === 'gen_fund';
        });

        $ldrrmf = $revs->filter(function ($rev) {
            return optional($rev->paps)->source_of_funds === 'ldrrmf';
            // return (optional($rev->paps)->source_of_funds === 'ldrrmf' &&
            //     (optional($rev->paps)->source_of_funds === 'gen_fund'
            //     || optional($rev->paps)->source_of_funds === ''
            //     || optional($rev->paps)->source_of_funds === null))
            //     && optional($rev->paps)->department_code !== 'dev';
                // || optional($rev->paps)->department_code === '17';
        });
        // optional($rev->paps)->sector === 'Other Services' &&
        $others = $revs->filter(function ($rev) {
            return (optional($rev->paps)->source_of_funds === 'other'
                || optional($rev->paps)->source_of_funds === ''
                || optional($rev->paps)->source_of_funds === null)
                && optional($rev->paps)->department_code !== 'dev'
                && optional($rev->paps)->department_code !== '17';
        });

        $dev = $revs->filter(function ($rev) {
            return optional($rev->paps)->source_of_funds === 'dev'

                && optional($rev->paps)->department_code !== '17';
        });
    // dd($revs);
        return inertia("AIP_Code/AIP_IPPs/Index",[
            "gen_pub" => $gen_pub,
            "econ" => $econ,
            "soc" => $soc,
            "ldrrmf" => $ldrrmf,
            "others" => $others,
            "dev" => $dev,
            "year_props"=>$current_year,
            "filters"    => [           // ← add this
                "search" => $search,
            ],
        ]);
        // dd($others, $gen_pub, $econ, $soc, $ldrrmf);

    }

    public function autosave(Request $request)
    {
        // dd($request, ProgramAndProject::where('id', $request->id)->first());
        $allowedColumns = [
            'revision_plans'      => ['aip_code'],
            'program_and_projects' => ['source_of_funds', 'sector','MOV'],
            'activity_projects' => ['aip_code'],
        ];

        $validated = $request->validate([
            'id'     => ['required', 'integer'],
            'table'  => ['required', 'string', Rule::in(array_keys($allowedColumns))],
            'column' => ['required', 'string'],
            'value'  => ['nullable', 'string'],
        ]);

        // Whitelist the column against its table to prevent mass-assignment via URL tampering
        $table  = $validated['table'];
        $column = $validated['column'];

        abort_if(
            !in_array($column, $allowedColumns[$table], true),
            422,
            "Column '{$column}' is not allowed on table '{$table}'."
        );

        DB::table($table)
            ->where('id', $validated['id'])
            ->update([$column => $validated['value']]);
        // dd("Updated {$table}.{$column} to '{$validated['value']}' for record ID {$validated['id']}");
        // return response()->json(['success' => true]);
        return redirect()->back();
    }

    public function inheritAipCodes()
    {
        // Update only revision_plans rows where aip_code is null/blank,
        // joining to program_and_projects through idpaps = program_and_projects.id
        DB::table('revision_plans')
            ->join('program_and_projects', 'revision_plans.idpaps', '=', 'program_and_projects.id')
            ->whereNull('revision_plans.aip_code')
            ->orWhere('revision_plans.aip_code', '')
            ->update([
                'revision_plans.aip_code' => DB::raw('program_and_projects.aip_code'),
            ]);

        return redirect()->back();
    }
}
