<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\MajorFinalOutput;
use App\Models\OrganizationalGoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrganizationController extends Controller
{
    protected $model;
    public function __construct(OrganizationalGoal $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        $idn = auth()->user()->recid;
        $dept_code = auth()->user()->department_code;
        // dd($idn);
        $data = [];
        if ($dept_code == '04') {
            $data = $this->model
                ->orderBy('created_at', 'desc')
                ->get();
            $result = $data;
        } else {
            $data = $this->model
                ->orderBy('created_at', 'desc')
                ->get();

            //USER ACCESS
            $idn = auth()->user()->recid;
            $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
                ->where('systemusers.recid', $idn)
                ->get();
            $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

            //FILTER PAPS
            $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        $showPerPage = 10;
        $paginatedResult = PaginationHelper::paginate($result, $showPerPage);
        //dd($data);
        return inertia('Organizational/Index', [
            "data" => $paginatedResult,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {
        // $functions = AccountAccess::where('iduser',auth()->user()->recid)
        //             ->Join(DB::Raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
        //             ->with('func')->get();
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();
        // dd($accounts);
        //$functions = $accounts->pluck('func');
        return inertia('Organizational/addOrganizational', [
            'functions' => $functions,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {

        $attributes = $request->validate([
            'goal_description' => 'required',
            'FFUNCCOD' => 'required'
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Organization')
            ->with('message', 'Organizational Goal added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id', $id)->first([
            'id',
            'goal_description',
            'FFUNCCOD'
        ]);
        //dd($data);
        //$accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();
        //dd($functions);
        return inertia('Organizational/addOrganizational', [
            "editData" => $data,
            "functions" => $functions,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'goal_description' => $request->goal_description
        ]);

        return redirect('/Organization')
            ->with('info', 'Organizational Goal updated');
    }

    public function destroy(Request $request)
    {
        $count_mfo = MajorFinalOutput::where('id_sec_outcome', $request->id)->count();
        $msg = "";
        $status = "";
        if ($count_mfo > 0) {
            $msg = "Unable to delete!";
            $status = "error";
        } else {
            $msg = "Organizational Goal Deleted";
            $status = "deleted";
            $data = $this->model->findOrFail($request->id);
            $data->delete();
        }

        //dd($request->raao_id);
        return redirect('/Organization')->with($status, $msg);
    }
}
