<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\ExpectedOutput;
use App\Models\ProgramAndProject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ExpectedOutputController extends Controller
{
    protected $model;
    public function __construct(ExpectedOutput $model)
    {
        $this->model = $model;
    }

    //
    public function index(Request $request, $aip_id)
    {

        $data = $this->model
            ->with(['paps'])
            ->where('aip_id', $aip_id)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        return inertia('AnnualInvestmentPlan/ExpectedOutput/Index', [
            "data" => $data,
            "aip_id" => $aip_id,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $aip_id)
    {

        $functions = AccountAccess::where('iduser', auth()->user()->recid)
            ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func')->get();
        // dd('create');
        // dd($functions->pluck('FFUNCCOD'));
        $programsAndProjects = ProgramAndProject::whereIn('FFUNCCOD', $functions->pluck('FFUNCCOD'))->get();
        return inertia('AnnualInvestmentPlan/ExpectedOutput/Create', [
            'paps' => $programsAndProjects,
            'aip_id' => $aip_id,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request);
        $dept_code = auth()->user()->department_code;
        // $request->merge(['department_code' => $dept_code]);

        $attributes = $request->validate([
            'aip_id' => 'required',
            'idpaps' => 'required',
            'output_qty' => 'required',
            'output_description' => 'required',
            'weight' => 'required',
            'opcr_target' => 'required',
        ]);
        //dd($attributes);
        // $this->model->create($attributes);
        $eo = new ExpectedOutput();
        $eo->aip_id = $request->aip_id;
        $eo->idpaps = $request->idpaps;
        $eo->output_qty = $request->output_qty;
        $eo->output_description = $request->output_description;
        $eo->weight = $request->weight;
        $eo->opcr_target = $request->opcr_target;
        $eo->save();
        return redirect('/expected-outputs/' . $request->aip_id)
            ->with('message', 'Expected output added');
    }

    public function edit(Request $request, $id, $aip_id)
    {
        $data = $this->model->where('id', $id)->first();
        $functions = AccountAccess::where('iduser', auth()->user()->recid)
            ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func')->get();
        // dd('create');
        // dd($functions->pluck('FFUNCCOD'));
        $programsAndProjects = ProgramAndProject::whereIn('FFUNCCOD', $functions->pluck('FFUNCCOD'))->get();
        return inertia('AnnualInvestmentPlan/ExpectedOutput/Create', [
            'paps' => $programsAndProjects,
            "editData" => $data,
            'aip_id' => $aip_id,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $attributes = $request->validate([
            'aip_id' => 'required',
            'idpaps' => 'required',
            'output_qty' => 'required',
            'output_description' => 'required',
            'weight' => 'required',
            'opcr_target' => 'required',
        ]);

        $eo = ExpectedOutput::where('id', $request->id)->first();
        $eo->aip_id = $request->aip_id;
        $eo->idpaps = $request->idpaps;
        $eo->output_qty = $request->output_qty;
        $eo->output_description = $request->output_description;
        $eo->weight = $request->weight;
        $eo->opcr_target = $request->opcr_target;
        $eo->save();
        return redirect('/expected-outputs/' . $request->aip_id)
            ->with('message', 'Expected output updated');
    }

    public function destroy(Request $request, $id)
    {
        $status = "message";
        $msg = "Expected output deleted";
        $data = $this->model->findOrFail($id);
        $aip_id = $data->aip_id;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/expected-outputs/' . $aip_id)->with($status, $msg);
    }
}
