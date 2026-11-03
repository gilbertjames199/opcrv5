<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\MajorFinalOutput;
use App\Models\Sector;
use Illuminate\Http\Request;
use App\Models\Sectoral;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SectoralController extends Controller
{
    protected $model;
    public function __construct(Sectoral $model)
    {
        $this->model = $model;
    }


    //
    public function index(Request $request)
    {
        //USER ACCESS
        $idn = auth()->user()->recid;
        $dept_code = auth()->user()->department_code;
        $paginatedResult = [];
        if ($dept_code == '04') {
            $data = $this->model
                ->orderBy('created_at', 'desc')
                ->with('sectors')
                ->with('office')
                ->get();
            $showPerPage = 10;
            $paginatedResult = PaginationHelper::paginate($data, $showPerPage);
        } else {
            // dd(auth()->user()->office);
            $data = $this->model
                ->where('FFUNCCOD', auth()->user()->office)
                ->orderBy('created_at', 'desc')
                ->with('sectors')
                ->get();
            // $access = DB::connection('mysql2')->table('accountaccess')
            //     ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            //     ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            //     ->where('systemusers.recid', $idn)
            //     ->get();
            // $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
            // $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
            $showPerPage = 10;
            $paginatedResult = PaginationHelper::paginate($data, $showPerPage);
            // dd($paginatedResult);
        }



        return inertia('Sectoral/Index', [
            "data" => $paginatedResult,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();
        $sectors = Sector::get();
        return inertia('Sectoral/addSector', [
            'sectors' => $sectors,
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
            'sector' => 'required',
            'FFUNCCOD' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Sectoral')
            ->with('message', 'Sectoral Goal added');
    }

    public function edit(Request $request, $id)
    {
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'goal_description',
            'sector',
            'FFUNCCOD'
        ]);
        $sectors = Sector::get();
        return inertia('Sectoral/addSector', [
            "editData" => $data,
            'sectors' => $sectors,
            'functions' => $functions,
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
            'goal_description' => $request->goal_description,
            'sector' => $request->sector
        ]);

        return redirect('/Sectoral')
            ->with('info', 'Sectoral Goal updated');
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
            $msg = "Sectoral outcome deleted";
            $status = "deleted";
            $data = $this->model->findOrFail($request->id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/Sectoral')->with($status, $msg);
    }
}
