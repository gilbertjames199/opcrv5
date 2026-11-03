<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\FFUNCCOD;
use App\Models\IntermediateOutcome;
use App\Models\MajorFinalOutput;
use App\Models\OrganizationalGoal;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\Sectoral;
use App\Models\SocietalGoal;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MFOController extends Controller
{
    protected $model;
    public function __construct(MajorFinalOutput $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request, $id)
    {

        $idoutcome = IntermediateOutcome::where('id', $id)
            ->value('idoutcome');

        $data = MajorFinalOutput::where('idinteroutcome', $id)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        //dd($data->pluck('mfo_desc'));
        return inertia('MFOs/Index', [
            "data" => $data,
            "idinteroutcome" => $id,
            "idoutcome" => $idoutcome,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }


    public function create()
    {
        $SocietalGoals = SocietalGoal::get()->map(function ($item) {
            $desc_cleaned = strip_tags($item->description);
            $desc_cleaned = str_replace(["\n", "\r", "\t"], '', $desc_cleaned);
            $desc_cleaned = str_replace('&nbsp;', '', $desc_cleaned);
            return [
                "id" => $item->id,
                "description" => strip_tags($desc_cleaned)
            ];
        });
        $SectorOutcomes = Sectoral::get()->map(function ($item) {
            $desc_cleaned = strip_tags($item->goal_description);
            $desc_cleaned = str_replace(["\n", "\r", "\t"], '', $desc_cleaned);
            $desc_cleaned = str_replace('&nbsp;', '', $desc_cleaned);
            return [
                "FFUNNCOD" => $item->FFUNCCOD,
                "goal_description" => $desc_cleaned,
                "id" => $item->id,
                "sector" => $item->sector
            ];
        });
        $OrganizationalOutcomes = OrganizationalGoal::get()->map(function ($item) {
            $desc_cleaned = strip_tags($item->goal_description);
            $desc_cleaned = str_replace(["\n", "\r", "\t"], '', $desc_cleaned);
            $desc_cleaned = str_replace('&nbsp;', '', $desc_cleaned);
            return [
                "FFUNNCOD" => $item->FFUNCCOD,
                "goal_description" => $desc_cleaned,
                "id" => $item->id,
            ];
        });
        // $functions = AccountAccess::where('iduser',auth()->user()->recid)
        //             ->select('ff.FFUNCCOD','ff.FFUNCTION')
        //             ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
        //             ->with('func')->get();
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->distinct('ff.FFUNCCOD')
            ->get();
        //$functions = $accounts->pluck('func');
        //dd($accounts);
        return inertia('MFOs/Create', [
            'societalGoals' => $SocietalGoals,
            'sectorOutcomes' => $SectorOutcomes,
            'organizationalOutcomes' => $OrganizationalOutcomes,
            'functions' => $functions,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {

        $dept_code = FFUNCCOD::where('FFUNCCOD', $request->FFUNCCOD)->first()->department_code;
        $request->merge(['department_code' => $dept_code]);
        $attributes = $request->validate(MajorFinalOutput::rules(), MajorFinalOutput::errorMessages());
        //dd($attributes);

        $this->model->create($attributes);
        $request->pass = '';
        return redirect('/mfos/direct')
            ->with('message', 'MFO added');
    }


    public function show(MajorFinalOutput $majorFinalOutput) {}


    public function edit(MajorFinalOutput $majorFinalOutput, $id)
    {
        $SocietalGoals = SocietalGoal::get()->map(function ($item) {
            $desc_cleaned = strip_tags($item->description);
            $desc_cleaned = str_replace(["\n", "\r", "\t"], '', $desc_cleaned);
            $desc_cleaned = str_replace('&nbsp;', '', $desc_cleaned);
            return [
                "id" => $item->id,
                "description" => strip_tags($desc_cleaned)
            ];
        });
        $SectorOutcomes = Sectoral::get()->map(function ($item) {
            $desc_cleaned = strip_tags($item->goal_description);
            $desc_cleaned = preg_replace('/<[^>]*>/', '', $desc_cleaned);
            $desc_cleaned = str_replace(["\n", "\r", "\t"], '', $desc_cleaned);
            $desc_cleaned = str_replace('&nbsp;', '', $desc_cleaned);
            return [
                "FFUNNCOD" => $item->FFUNCCOD,
                "goal_description" => $desc_cleaned,
                "id" => $item->id,
                "sector" => $item->sector
            ];
        });
        $OrganizationalOutcomes = OrganizationalGoal::get()->map(function ($item) {
            $desc_cleaned = strip_tags($item->goal_description);
            $desc_cleaned = str_replace(["\n", "\r", "\t"], '', $desc_cleaned);
            $desc_cleaned = str_replace('&nbsp;', '', $desc_cleaned);
            return [
                "FFUNNCOD" => $item->FFUNCCOD,
                "goal_description" => $desc_cleaned,
                "id" => $item->id,
            ];
        });
        $data = $this->model->where('id', $id)->first([
            'id',
            'mfo_desc',
            'id_socgoal',
            'id_org_outcome',
            'id_sec_outcome',
            'FFUNCCOD'
        ]);
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->distinct('ff.FFUNCCOD')
            ->get();

        //dd($idinteroutcome);
        return inertia('MFOs/Create', [
            "editData" => $data,
            "functions" => $functions,
            'societalGoals' => $SocietalGoals,
            'sectorOutcomes' => $SectorOutcomes,
            'organizationalOutcomes' => $OrganizationalOutcomes,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }


    public function update(Request $request, MajorFinalOutput $majorFinalOutput)
    {
        $dept_code = auth()->user()->department_code;
        $request->merge(['department_code' => $dept_code]);
        $data = $majorFinalOutput::findOrFail($request->id);
        $validatedData = $request->validate(MajorFinalOutput::rules(), MajorFinalOutput::errorMessages());
        $data->update($validatedData);
        return redirect('/mfos/direct')
            ->with('info', 'MFO updated');
    }


    public function destroy(Request $request, $id, $idinteroutcome)
    {
        // $count_rev = RevisionPlan::where('idmfo', $id)->count();
        // $count_paps = ProgramAndProject::where('idmfo', $id)->count();
        // $count_strat = Strategy::where('idmfo', $id)->count();
        // $msg = "";
        // $status = "";
        // if ($count_rev > 0 || $count_paps > 0 || $count_strat > 0) {
        //     $msg = "Unable to delete! \nThe MFO is associated with revision plans(" . $count_rev . "), programs and programs (" . $count_paps . "), and strategies (" . $count_strat . "). \nYou have to delete them first!";
        //     $status = "error";
        // } else {
        $msg = "MFO Successfully deleted!";
        $status = "deleted";
        $data = $this->model->findOrFail($id);
        $data->delete();
        // }
        //dd($request->raao_id);
        return redirect('/mfos/direct')->with($status, $msg);
    }

    public function direct(Request $request)
    {
        $office = [];
        $idn = auth()->user()->recid;
        $dept_code = auth()->user()->department_code;
        // dd(auth()->user());
        if ($dept_code == '04') {
            // dd($dept_code . ' is equal to 04');
            //$offices = FFUNCCOD::where('FFUNCTION', 'LIKE', '%Office%')->orderBy('FFUNCTION', 'ASC')->get();
            $office = FFUNCCOD::where('FFUNCTION', 'LIKE', '%Office%')->orderBy('FFUNCTION', 'ASC')->get();
            $data = $this->model->with(['office' => function ($query) {
                $query->orderBy('FFUNCTION', 'asc');
            }])->select(
                'major_final_outputs.mfo_desc',
                'major_final_outputs.id',
                'major_final_outputs.FFUNCCOD'
            )
                ->when($request->search, function ($query, $searchItem) {
                    $query->where('mfo_desc', 'LIKE', '%' . $searchItem . '%');
                })
                ->when($request->FFUNCCOD, function ($query, $searchItem) {
                    $query->where('FFUNCCOD', '=', $searchItem);
                })
                ->orderBy('department_code', 'asc')
                ->orderBy('mfo_desc', 'asc')
                ->paginate(10)
                ->withQueryString();
        } else {
            $data = $this->model->with('office')->select('major_final_outputs.mfo_desc', 'major_final_outputs.id', 'major_final_outputs.FFUNCCOD')
                ->where('department_code', auth()->user()->department_code)
                ->orderBy('department_code', 'asc')
                ->orderBy('mfo_desc', 'asc')
                ->paginate(10)
                ->withQueryString();
        }
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
        $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
        // dd($data);
        $showPerPage = 10;
        $paginatedResult = PaginationHelper::paginate($result, $showPerPage);
        return inertia('MFOs/Direct', [
            "offices" => $office,
            "data" => $data,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
}
