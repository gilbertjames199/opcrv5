<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\MajorFinalOutput;
use App\Models\OpcrTarget;
use App\Models\OpcrTargetBudget;
use App\Models\ProgramAndProject;
use App\Models\SuccessIndicator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OpcrTargetBudgetController extends Controller
{
    protected $opcr_target_budget;
    public function __construct(OpcrTargetBudget $opcr_target_budget)
    {
        $this->opcr_target_budget = $opcr_target_budget;
    }
    public function index(Request $request, $opcr_list_id)
    {
        // dd($opcr_budget_id);

        return inertia('OPCR/TargetBudget/Index', [
            'opcr_list_id' => $opcr_list_id
        ]);
    }
    public function create(Request $request, $idopcrlist)
    {
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        //AIP CODE
        // $aip = AIP::where('idpaps', $idpaps)->first();
        // $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        // $paps = ProgramAndProject::find($idpaps);
        $paps_selected = [];

        $opcr_targets = OpcrTarget::where('office_performance_commitment_rating_list_id', $idopcrlist)->where('is_included', 1)->get();

        if (count($opcr_targets) > 0) {
            $ids = $opcr_targets->pluck('idpaps');
            $paps_selected = ProgramAndProject::with(['MFO', 'success_indicator'])->whereIn('id', $ids)->get();
        }
        // dd(SuccessIndicator::with('paps')->first());
        // dd($mfos_selected);
        // dd($opcr_targets->pluck('idpaps'));
        // $all_paps = ProgramAndProject::get();
        // $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        // $acc = $accounts->pluck('FTITLE');
        // $code = $accounts->pluck('FACTCODE');

        //FUNCTIONS
        // $idn = auth()->user()->recid;
        // $functions = DB::connection('mysql2')->table('accountaccess')
        //     ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
        //     ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
        //     ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
        //     ->where('systemusers.recid', $idn)
        //     ->get();

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
            ->groupBy('programs.recid')
            ->get();
        // dd($programs);
        $ooes = [];
        return inertia("OPCR/TargetBudget/Create", [
            // "pap1" => $paps,
            "paps_selected" => $paps_selected,
            // "paps" => $all_paps,
            // "accounts" => $acc,
            // "codes" => $code,
            // "aip" => $aip,
            // "total_budget_year" => $total_budget_year,
            // "functions" => $functions,
            "opcr_targets" => $opcr_targets,
            "programs" => $programs,
            "ooes" => $ooes,
            "opcr_list_id" => $idopcrlist
        ]);
    }

    public function store(Request $request)
    {
        $this->validateMyRequest($request);
        $opcr_target_budget = OpcrTargetBudget::where('idpaps', $request->idpaps)
            ->where('idprogram', $request->idprogram)
            ->where('opcr_list_id', $request->opcr_list_id)
            ->get();
        if (count($opcr_target_budget) > 0) {
            $request->merge(['idpaps' => null]);
            $request->merge(['idprogram' => null]);
            $this->validateMyRequest($request);
        } else {
            $opcr_budget = new OpcrTargetBudget;
            $opcr_budget->idsuccessindicator = $request->idsuccessindicator;
            $opcr_budget->idmfo = $request->idmfo;
            $opcr_budget->idpaps = $request->idpaps;
            $opcr_budget->amount = $request->amount;
            $opcr_budget->idprogram = $request->idprogram;
            $opcr_budget->idtarget = $request->idtarget;
            $opcr_budget->opcr_list_id = $request->opcr_list_id;
            $opcr_budget->save();
            return redirect('/opcrtargetrevised/' . $request->opcr_list_id);
        }
    }
    public function update(Request $request)
    {
        // dd($request->id);
        // dd($request);
        $this->validateMyRequest($request);
        $opcr_target_budget = OpcrTargetBudget::where('idpaps', $request->idpaps)
            ->where('idprogram', $request->idprogram)
            ->where('opcr_list_id', $request->opcr_list_id)
            ->where('id', '<>', $request->id)
            ->get();
        // dd($opcr_target_budget);
        if (count($opcr_target_budget) > 0) {
            $request->merge(['idpaps' => null]);
            $request->merge(['idprogram' => null]);
            $this->validateMyRequest($request);
        } else {
            $opcr_budget = OpcrTargetBudget::findOrFail($request->id);
            $opcr_budget->idsuccessindicator = $request->idsuccessindicator;
            $opcr_budget->idmfo = $request->idmfo;
            $opcr_budget->idpaps = $request->idpaps;
            $opcr_budget->amount = $request->amount;
            $opcr_budget->idprogram = $request->idprogram;
            $opcr_budget->idtarget = $request->idtarget;
            $opcr_budget->opcr_list_id = $request->opcr_list_id;
            $opcr_budget->save();
            return redirect('/opcrtargetrevised/' . $request->opcr_list_id);
        }
    }
    protected function validateMyRequest($request)
    {
        $request->validate([
            // 'idsuccessindicator' => 'required',
            'idmfo' => 'required',
            'idpaps' => 'required',
            'amount' => 'required',
            // 'idprogram' => 'required',
            'idtarget' => 'required',
            'opcr_list_id' => 'required'
        ]);
    }

    public function edit(Request $request, $id)
    {
        // dd($id);
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        //AIP CODE
        // $aip = AIP::where('idpaps', $idpaps)->first();
        // $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        // $paps = ProgramAndProject::find($idpaps);
        $data = OpcrTargetBudget::findOrFail($id);
        $idopcrlist = $data->opcr_list_id;
        $paps_selected = [];

        $opcr_targets = OpcrTarget::where('office_performance_commitment_rating_list_id', $idopcrlist)->where('is_included', 1)->get();

        if (count($opcr_targets) > 0) {
            $ids = $opcr_targets->pluck('idpaps');
            $paps_selected = ProgramAndProject::with(['MFO', 'success_indicator'])->whereIn('id', $ids)->get();
        }
        // dd(SuccessIndicator::with('paps')->first());
        // dd($mfos_selected);
        // dd($opcr_targets->pluck('idpaps'));
        // $all_paps = ProgramAndProject::get();
        // $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        // $acc = $accounts->pluck('FTITLE');
        // $code = $accounts->pluck('FACTCODE');

        //FUNCTIONS
        // $idn = auth()->user()->recid;
        // $functions = DB::connection('mysql2')->table('accountaccess')
        //     ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
        //     ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
        //     ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
        //     ->where('systemusers.recid', $idn)
        //     ->get();

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
            ->groupBy('programs.recid')
            ->get();
        // dd($programs);
        $ooes = [];
        return inertia("OPCR/TargetBudget/Create", [
            // "pap1" => $paps,
            "editData" => $data,
            "paps_selected" => $paps_selected,
            // "paps" => $all_paps,
            // "accounts" => $acc,
            // "codes" => $code,
            // "aip" => $aip,
            // "total_budget_year" => $total_budget_year,
            // "functions" => $functions,
            "opcr_targets" => $opcr_targets,
            "programs" => $programs,
            "ooes" => $ooes,
            "opcr_list_id" => $idopcrlist
        ]);
    }
}
