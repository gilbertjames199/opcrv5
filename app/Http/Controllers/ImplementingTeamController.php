<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\Implementing_team;
use App\Models\TeamPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ImplementingTeamController extends Controller
{
    //
    protected $model;
    public function __construct(Implementing_team $model)
    {
        $this->model = $model;
    }

    //
    public function index(Request $request)
    {

        $data = $this->model
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('position', 'like', '%' . $request->search . '%')
                    ->orWhere('competency', 'like', '%' . $request->search . '%')
                    ->orWhere('role', 'like', '%' . $request->search . '%');
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        return inertia('ImplementingTeam/Index', [
            "data" => $data,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {

        $functions = AccountAccess::where('iduser', auth()->user()->recid)
            ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func')->get();
        //dd('create');
        return inertia('ImplementingTeam/Create', [
            'functions' => $functions,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {

        $dept_code = auth()->user()->department_code;
        $request->merge(['department_code' => $dept_code]);

        $attributes = $request->validate([
            'name' => 'required',
            'position' => 'required',
            'competency' => 'required',
            'role' => 'required',
            'FFUNCCOD' => 'required',
            'department_code' => 'required'
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/ImplementingTeam')
            ->with('message', 'Implementing Team added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id', $id)->first([
            'id',
            'name',
            'position',
            'competency',
            'role',
            'FFUNCCOD',
        ]);
        $functions = AccountAccess::where('iduser', auth()->user()->recid)
            ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func')->get();
        return inertia('ImplementingTeam/Create', [
            "functions" => $functions,
            "editData" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $dept_code = auth()->user()->department_code;
        $request->merge(['department_code' => $dept_code]);
        // dd('update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'name' => $request->name,
            'position' => $request->position,
            'competency' => $request->competency,
            'role' => $request->role,
            "department_code" => $request->department_code
        ]);

        return redirect('/ImplementingTeam')
            ->with('message', 'Implementing Team updated');
    }

    public function destroy(Request $request)
    {
        $msg = "";
        $status = "";
        $count_team = TeamPlan::where('implementing_team_id', $request->id)->count();

        if ($count_team > 0) {
            $status = "error";
            $msg = "Unable to delete!";
        } else {
            $status = "message";
            $msg = "Implementing Team deleted";
            $data = $this->model->findOrFail($request->id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/ImplementingTeam')->with($status, $msg);
    }
}
