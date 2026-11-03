<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\BudgetRequirement;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring;
use App\Models\OfficeAccountable;
use App\Models\opcr_standard;
use App\Models\Output;
use App\Models\Performance;
use App\Models\ProgramAndProject;
use App\Models\Quality;
use App\Models\QualityRemarks;
use App\Models\rating;
use App\Models\RatingRemarks;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use App\Models\Timeliness;
use App\Models\TimelinessRemarks;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OPCRPAPSController extends Controller
{
    protected $model;
    protected $model1;
    protected $function;
    public function __construct(ProgramAndProject $model, AccountAccess $function, opcr_standard $model1)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
        $this->model1 = $model1;
        $this->function = $function;
    }

    public function index(Request $request, $id)
    {

        //dd("not direct");
        $db2 = getDB2Name();
        $functions = $this->function
            ->select("{$db2}.FFUNCCOD", 'FFUNCTION')
            ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod')
            ->where('iduser', auth()->user()->recid)
            ->get()
            ->map(function ($item) {

                return [
                    "FFUNCCOD" => $item->FFUNCCOD,
                    "FFUNCTION" => $item->FFUNCTION,
                ];
            });
        $data = ProgramAndProject::where('idmfo', $id)
            ->with('MFO')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        //$data = ProgramAndProject::get();

        //dd($data);
        return inertia('PAPS/Index', [
            "function" => $functions,
            "data" => $data,
            "idmfo" => $id,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function direct(Request $request)
    {
        // dd($request->FFUNCCOD);
        // dd(auth()->user()->department_code);
        if (auth()->user()->department_code != '04') {
        }
        $db2 = getDB2Name();
        // dd($db2);
        $functions = $this->function
            ->select('ff.FFUNCCOD', 'FFUNCTION')
            ->distinct('FFUNCTION');

        $mooe = "0.00";
        $ps = "0.00";
        $dept_code = auth()->user()->department_code;

        $idn = auth()->user()->recid;

        $data = $this->model->with('MFO')->with('opcr_stardard')
            ->with('office')
            ->distinct('program_and_projects.id')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->when($request->FFUNCCOD, function ($query, $searchItem) {
                $query->where('FFUNCCOD', '=', $searchItem);
            })
            ->where('idmfo', '>', '45');

        $mfos = MajorFinalOutput::all();
        if ($dept_code != '04') {
            $functions = clone ($functions)
                ->Join(DB::raw("{$db2}.functions ff"), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod')
                ->where('iduser', auth()->user()->recid)
                ->get()
                ->map(function ($item) {
                    $my_year = now()->year;
                    //REVISION PLAN ID/ GET MOOE & PS
                    $revision_plan = RevisionPlan::where('idmfo', '0')
                        ->where('idpaps', '0')
                        ->where('FFUNCCOD', $item->FFUNCCOD)
                        ->where('year_period', $my_year)
                        ->first();
                    $mooe = "0.00";
                    $ps = "0.00";
                    if ($revision_plan) {
                        $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                            ->where('category', 'Maintenance, Operating, and Other Expenses')
                            ->sum('amount');

                        $ps1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                            ->where('category', 'Personnel Services')
                            ->sum('amount');
                        $mooe2 = (float)$mooe1;
                        $ps2 = (float)$ps1;
                        $mooe = number_format($mooe2, 2);
                        $ps = number_format($ps2, 2);
                    } else {
                        //dd("empty no ps budget");
                    }
                    return [
                        "FFUNCCOD" => $item->FFUNCCOD,
                        "FFUNCTION" => $item->FFUNCTION,
                        "MOOE" => $mooe,
                        "PS" => $ps,
                    ];
                });
            // $data = clone ($data)
            //     ->Join(DB::raw('fms.accountaccess acc'), 'acc.FFUNCCOD', '=', 'program_and_projects.FFUNCCOD')
            //     ->Join(DB::raw('fms.systemusers sysu'), 'sysu.recid', '=', 'acc.iduser')
            //     ->where('sysu.recid', $idn);
            $data = clone ($data)
                ->where('program_and_projects.FFUNCCOD', auth()->user()->office);
            // dd(auth()->user()->office);
            // dd($data);
            $idn = auth()->user()->recid;
            $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
                ->where('systemusers.recid', $idn)
                ->get();
            $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
            $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);
        } else {
            $functions = clone ($functions)
                ->Join(DB::raw("{$db2}.functions ff"), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod')
                ->get()
                ->map(function ($item) {
                    $my_year = now()->year;
                    //REVISION PLAN ID/ GET MOOE & PS
                    $revision_plan = RevisionPlan::where('idmfo', '0')
                        ->where('idpaps', '0')
                        ->where('FFUNCCOD', $item->FFUNCCOD)
                        ->where('year_period', $my_year)
                        ->first();
                    $mooe = "0.00";
                    $ps = "0.00";
                    if ($revision_plan) {
                        $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                            ->where('category', 'Maintenance, Operating, and Other Expenses')
                            ->sum('amount');

                        $ps1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                            ->where('category', 'Personnel Services')
                            ->sum('amount');
                        $mooe2 = (float)$mooe1;
                        $ps2 = (float)$ps1;
                        $mooe = number_format($mooe2, 2);
                        $ps = number_format($ps2, 2);
                    } else {
                        //dd("empty no ps budget");
                    }
                    return [
                        "FFUNCCOD" => $item->FFUNCCOD,
                        "FFUNCTION" => $item->FFUNCTION,
                        "MOOE" => $mooe,
                        "PS" => $ps,
                    ];
                });
            // dd($data);
        }
        $data = clone ($data)
            ->orderBy('program_and_projects.idmfo', 'ASC')
            ->orderBy('program_and_projects.id', 'ASC')
            // ->orderBy('created_at', 'desc')
            ->get();
        // dd($data);



        //FILTER PAPS
        $result = clone ($data);
        if ($dept_code != '04') {
            $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        $showPerPage = 10;
        $paginatedResult = PaginationHelper::paginate($result, $showPerPage);

        //FILTER MFO


        return inertia('OPCRPaps/Direct', [
            "functions" => $functions,
            "MOOE" => $mooe,
            "PS" => $ps,
            "data" => $paginatedResult,
            "mfos" => $mfos,
            "FFUNCCODVAL" => $request->FFUNCCOD,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $idpaps)
    {
        // dd('create');
        $paps = ProgramAndProject::findOrFail($idpaps);
        return inertia('OPCRPaps/Create', [
            'paps' => $paps,
            'idpaps' => $idpaps,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $id = $request->idpaps;
        // dd($id);

        $attributes = $request->validate([
            'output' => 'required',
            'performance_measure' => 'required',
            'prescribed_period' => 'required',
            'office_accountable' => 'required',
            'quality1' => 'required',
            'quality2' => 'required',
            'quality3' => 'required',
            'efficiency1' => 'required',
            'efficiency2' => 'required',
            'efficiency3' => 'required',
            'timeliness' => 'required',
            'idpaps' => 'required',
        ]);

        $attributes['monitoring'] = "N/A";
        // dd($attributes);
        // opcr_standard::create($attributes);
        // dd($attributes);

        $this->model1->create($attributes);
        return redirect('OPCRpaps/direct')
            ->with('message', 'Standard added');
    }

    public function edit(Request $request, $id)
    {
        $paps = ProgramAndProject::findOrFail($id);
        $opcr_standard = opcr_standard::where('idpaps', $id)->first();
        // dd($opcr_standard);
        return inertia('OPCRPaps/Create', [
            "opcr_standard" => $opcr_standard,
            "editData" => $paps,
            "idpaps" => $id,
            'paps' => $paps,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request, $id)
    {

        // dd($request->all());
        $opcr_standard = opcr_standard::where('idpaps', $id)->first();

        $opcr_standard->update([
            'output' => $request->output,
            'performance_measure' => $request->performance_measure,
            'office_accountable' => $request->office_accountable,
            'monitoring' => $request->monitoring,
            'prescribed_period' => $request->prescribed_period,
            'quality1' => $request->quality1,
            'quality2' => $request->quality2,
            'quality3' => $request->quality3,
            'efficiency1' => $request->efficiency1,
            'efficiency2' => $request->efficiency2,
            'efficiency3' => $request->efficiency3,
            'timeliness' => $request->timeliness,
            'idpaps' => $id
        ]);

        return redirect('OPCRpaps/direct')
            ->with('info', 'Standard updated');
    }

    public function destroy(Request $request, $id)
    {


        opcr_standard::where('idpaps', $id)->delete();
        return redirect('OPCRpaps/direct')->with('warning', 'Output Deleted');
    }
}
