<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\ChiefAgenda;
use App\Models\Division;
use App\Models\EconomicAgenda;
use App\Models\ELA;
use App\Models\FFUNCCOD;
use App\Models\Functions;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring;
use App\Models\Office;
use App\Models\OfficeAccountable;
use App\Models\OfficeDivision;
use App\Models\Output;
use App\Models\PopspAgency;
use App\Models\ProgramAndProject;
use App\Models\Quality;
use App\Models\QualityRemarks;
use App\Models\rating;
use App\Models\RatingRemarks;
use App\Models\ResearchAgenda;
use App\Models\RevisionPlan;
use App\Models\SDG;
use App\Models\SharedProgramAndProject;
use App\Models\Strategy;
use App\Models\SuccessIndicator;
use App\Models\Target;
use App\Models\Timeliness;
use App\Models\TimelinessRemarks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PAPController extends Controller
{
    protected $model;
    public function __construct(ProgramAndProject $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request, $id)
    {
        // dd("not direct");
        // dd(auth()->user());
        $data = ProgramAndProject::where('idmfo', $id)
            ->with('MFO')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->orderByRaw(
                DB::raw("CASE WHEN program_and_projects.type = 'GAS' THEN 0
                            WHEN program_and_projects.type = 'Project' THEN 1
                            WHEN program_and_projects.type = 'Program' THEN 2
                            WHEN program_and_projects.type = 'Activity' THEN 3 ELSE 4
                            END")
            )
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        //$data = ProgramAndProject::get();

        //dd($data);
        return inertia('PAPS/Index', [
            "data" => $data,
            "idmfo" => $id,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create($id)
    {
        $idn = auth()->user()->recid;
        $mfos1 = MajorFinalOutput::get();
        $mfos = [];
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //$showPerPage=10;

        $chief_executive_agenda = ChiefAgenda::get();
        $socio_economic = EconomicAgenda::get();
        $sustainable = SDG::get();
        $executive_legislative = ELA::get();
        $research = ResearchAgenda::get();
        // dd($id);
        $year_object = DB::connection('mysql2')
            ->table('raaohs')
            ->select(DB::raw('DISTINCT(tyear)'))
            ->orderBy('tyear', 'ASC')
            ->get();
        // $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        // $functions = $accounts->pluck('func');
        // $functions = AccountAccess::where('iduser',auth()->user()->recid)
        //             ->select('ff.FFUNCCOD','ff.FFUNCTION')
        //             ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
        //             ->with('func')->get();
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
            $mfos = $mfos1->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();
        $popsp_agencies =PopspAgency::where('department_code',auth()->user()->department_code)->get();
        return inertia('PAPS/Create', [
            'mfos' => $mfos,
            'chief_agenda' => $chief_executive_agenda,
            'socio_economic' => $socio_economic,
            'sustainable' => $sustainable,
            'executive_legislative' => $executive_legislative,
            'research' => $research,
            'idmfo' => $id,
            'functions' => $functions,
            'years' => $year_object,
            'popsp_agencies' => $popsp_agencies,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function direct_create()
    {
        // USERS
        $us = auth()->user();
        $idn = $us->recid;
        $user_FFUNCCOD = $us->office;
        //MFO
        $mfos1 = MajorFinalOutput::get();
        $mfos = [];
        $mfos = clone ($mfos1);

        // ACCOUNT ACCESS
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        // dd($access);
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
        if (empty($accessFFUNCCOD)) {
            $accessFFUNCCOD[] = $user_FFUNCCOD;
        }


        $chief_executive_agenda = ChiefAgenda::get();
        $socio_economic = EconomicAgenda::get();
        $sustainable = SDG::get();
        $executive_legislative = ELA::get();
        $research = ResearchAgenda::get();
        // $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        // $functions = $accounts->pluck('func');
        // $functions = AccountAccess::where('iduser',auth()->user()->recid)
        //             ->select('ff.FFUNCCOD','ff.FFUNCTION')
        //             ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
        //             ->with('func')->get();

        // $motherPAPS = ProgramAndProject::with('MFO')
        //     ->where('idmfo', '>', '45')
        //     ->orderByRaw(
        //         DB::raw("CASE WHEN program_and_projects.type = 'GAS' THEN 0
        //                 WHEN program_and_projects.type = 'Project' THEN 1
        //                 WHEN program_and_projects.type = 'Program' THEN 2
        //                 WHEN program_and_projects.type = 'Activity' THEN 3 ELSE 4
        //                 END")
        //     );

        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->where(function ($query) {
                $query->where('ff.FFUNCTION', 'LIKE', '%Office%')
                    ->orWhere('ff.FFUNCTION', 'LIKE', '%Function%')
                    ->orWhere('ff.FFUNCTION', 'LIKE', '%Hospital%');
            })
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
            $mfos = $mfos1->whereIn('FFUNCCOD', $accessFFUNCCOD);
            // $motherPAPS = clone ($motherPAPS)->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->orderBy('FFUNCTION', 'ASC')
            ->get();
        // dd($functions);
        if(!isset($functions) || $functions->isEmpty()){
            // dd('dasdasdasdasd');
            $functions = FFUNCCOD::where('department_code', auth()->user()->department_code)->get();
        }
        // dd($functions, auth()->user()->department_code);
        $popsp_agencies =PopspAgency::all();
        // dd($pops_agencies);
        // dd($functions);
        return inertia('PAPS/Create', [
            'mfos' => $mfos,
            'chief_agenda' => $chief_executive_agenda,
            'socio_economic' => $socio_economic,
            'sustainable' => $sustainable,
            'executive_legislative' => $executive_legislative,
            'research' => $research,
            'functions' => $functions,
            'popsp_agencies' => $popsp_agencies,
            // 'motherPAPS' => $motherPAPS,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $FFUNCCOD = $request->FFUNCCOD;
        if($FFUNCCOD){
            $office = Office::where('FFUNCCOD', $FFUNCCOD)->first();
            if($office){
                $dept_code = $office->department_code;
            }
        }else{
            $dept_code = auth()->user()->department_code;
        }
        $request->merge(['department_code' => $dept_code]);
        $proceed = "1";
        // $attributes = $request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $request->validate([
            'paps_desc' => 'required',
            'type' => 'required',
            'FFUNCCOD' => 'required',
            'idmfo' => 'required',
            'sector' => 'required'
            // 'chief_executive_agenda' => 'required',
            // 'socio_economic_agenda' => 'required',
            // 'sust_devt_goal' => 'required',
            // 'executive_legislative_agenda' => 'required',
            // 'research_agenda' => 'required',
            // 'description' => 'required',
        ]);
        if ($request->type === 'GAS') {
            $count = ProgramAndProject::where('program_and_projects.department_code', $dept_code)
                ->where('program_and_projects.type', 'GAS')
                ->count('id');
            if ($count > 0) {
                $proceed = "0";
                $msg = "A PAPS classified as GAS already exists!";
            }
        }
        $msg = "Failed to add Programs and Projects(PAPS)";
        $status = "error";
        $fundMap = [
            'ldrrmf'   => '301',
            'dev'      => '500',
            'gen_fund' => '100',
            'other'    => '400',
        ];

        if ($proceed === "1") {

            //$this->model->create($attributes);
            $paps = new ProgramAndProject();
            $paps->paps_desc = $request->paps_desc;
            $paps->department_code = $dept_code;
            $paps->FFUNCCOD = $request->FFUNCCOD;
            $paps->idmfo = $request->idmfo;
            $paps->MOV = $request->MOV;
            $paps->type = $request->type;
            $paps->chief_executive_agenda = $request->chief_executive_agenda;
            $paps->socio_economic_agenda = $request->socio_economic_agenda;
            $paps->sust_devt_goal = $request->sust_devt_goal;
            $paps->executive_legislative_agenda = $request->executive_legislative_agenda;
            $paps->research_agenda = $request->research_agenda;
            $paps->sector = $request->sector;
            $paps->subsector = $request->subsector;
            $paps->FFUNDCOD = $fundMap[$request->source_of_funds];
            $paps->source_of_funds = $request->source_of_funds;
            $paps->source_others_specify = $request->source_others_specify;
            $paps->funding_agency = $request->funding_agency;
            $paps->popsp = $request->popsp;
            $paps->focus_area = $request->focus_area;
            $paps->is_mother_program = $request->is_mother_program ?? '0';
            $paps->mother_program_id = $request->mother_program_id ?? null;
            $paps->fund_owner = $request->fund_owner_ffunccod;
            $paps->save();
            $msg = "Programs and Projects(PAPS) added";
            $status = "message";
        }

        return redirect('/paps/direct')
            ->with($status, $msg);
    }
    public function save(Request $request)
    {
        // dd("save");
        $dept_code = auth()->user()->department_code;
        $request->merge(['department_code' => $dept_code]);
        $attributes = $request->validate([
            'paps_desc' => 'required',
            'FFUNCCOD' => 'required',
            'department_code' => 'required',
            'idmfo' => 'required',
            'type' => 'required',
        ]);

        // dd($request->all());
        //$attributes = $request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $this->model->create($request->all());


        return redirect('/paps/' . $request->idmfo)
            ->with('message', 'Programs and Projects(PAPS) added');
    }
    public function show(ProgramAndProject $programAndProject) {}
    public function edit(ProgramAndProject $programAndProject, $id, $idmfo)
    {
        $year_object = DB::connection('mysql2')
            ->table('raaohs')
            ->select(DB::raw('DISTINCT(tyear)'))
            ->orderBy('tyear', 'ASC')
            ->get();
        $mfos = MajorFinalOutput::get();
        $chief_executive_agenda = ChiefAgenda::get();
        $socio_economic = EconomicAgenda::get();
        $sustainable = SDG::get();
        $executive_legislative = ELA::get();
        $research = ResearchAgenda::get();
        $data = $this->model->with(['revisionPlan'])->where('id', $id)->first([
            'id',
            'paps_desc',
            'FFUNCCOD',
            'idmfo',
            'MOV',
            'type',
            'chief_executive_agenda',
            'socio_economic_agenda',
            'sust_devt_goal',
            'executive_legislative_agenda',
            'research_agenda',
            'sector',
            'subsector',
            'source_of_funds',
            'source_others_specify',
            'funding_agency',
            'popsp',
            'focus_area',
            'is_mother_program',
            'mother_program_id',
            'fund_owner',
            'aip_code',
            'agency_name'
        ]);
        // dd($data);
        if ($data->revisionPlan && $data->revisionPlan->where('status', '<', 1)->isNotEmpty()) {
            return redirect()->back()->with('error', 'Unable to edit. The PPA is associated with existing Project Profiles');
        }
        // dd($data);
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();
        $popsp_agencies =PopspAgency::all();
        // dd($pops_agencies);
        return inertia('PAPS/Create', [
            "editData" => $data,
            "mfos" => $mfos,
            'chief_agenda' => $chief_executive_agenda,
            'socio_economic' => $socio_economic,
            'sustainable' => $sustainable,
            'executive_legislative' => $executive_legislative,
            'research' => $research,
            "idmfo" => $idmfo,
            "functions" => $functions,
            'years' => $year_object,
            'popsp_agencies' => $popsp_agencies,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request, $id)
    {
        $dept_code = auth()->user()->department_code;
        // dd($request);
        $data = $this->model::findOrFail($request->id);
        //$validatedData=$request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $paps = new ProgramAndProject();
        $data->update([
            'paps_desc' => $request->paps_desc,
            'FFUNCCOD' => $request->FFUNCCOD,
            'department_code' => $dept_code,
            'idmfo' => $request->idmfo,
            'MOV' => $request->MOV,
            'type' => $request->type,
            'chief_executive_agenda' => $request->chief_executive_agenda,
            'socio_economic_agenda' => $request->socio_economic_agenda,
            'source_of_funds' => $request->source_of_funds,
            'source_others_specify' => $request->source_others_specify,
            'funding_agency' => $request->funding_agency,
            'sust_devt_goal' => $request->sust_devt_goal,
            'executive_legislative_agenda' => $request->executive_legislative_agenda,
            'research_agenda' => $request->research_agenda,
            'sector' => $request->sector,
            'subsector' => $request->subsector,
            'popsp' => $request->popsp,
            'focus_area' => $request->focus_area,
            'is_mother_program' => $request->is_mother_program,
            'mother_program_id' => $request->mother_program_id,
            // 'fund_owner' => $request->
            'aip_code' => $request->aip_code,
            'agency_name' => $request->agency_name,
        ]);
        return redirect('/paps/direct')
            ->with('info', 'Program and Projects updated');
    }
    public function updated(Request $request, $id)
    {
        // $dept_code = $request->department_code;
        $data = $this->model::findOrFail($request->id);
        // dd($request->all());
        // dd($request->chief_executive_agenda);
        // dd($request->aip_code);
        //$validatedData=$request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $fundMap = [
            'ldrrmf'   => '301',
            'dev'      => '500',
            'gen_fund' => '100',
            'other'    => '400',
        ];

        // dd($fundMap[$request->source_of_funds]);
        $data->update([
            'paps_desc' => $request->paps_desc,
            'FFUNCCOD' => $request->FFUNCCOD,
            // 'department_code' => $dept_code,
            'idmfo' => $request->idmfo,
            'MOV' => $request->MOV,
            'type' => $request->type,
            'chief_executive_agenda' => $request->chief_executive_agenda,
            'socio_economic_agenda' => $request->socio_economic_agenda,
            'sust_devt_goal' => $request->sust_devt_goal,
            'executive_legislative_agenda' => $request->executive_legislative_agenda,
            'research_agenda' => $request->research_agenda,
            'sector' => $request->sector,
            'subsector' => $request->subsector,
            'source_of_funds' => $request->source_of_funds,
            'source_others_specify' => $request->source_others_specify,
            'FFUNDCOD' => $fundMap[$request->source_of_funds],
            'funding_agency' => $request->funding_agency,
            'popsp' => $request->popsp,
            'focus_area' => $request->focus_area,
            'is_mother_program' => $request->is_mother_program,
            'mother_program_id' => $request->mother_program_id,
            'fund_owner' => $request->fund_owner_ffunccod,
            'aip_code' => $request->aip_code,
        ]);
        //dd('updated');
        return redirect('/paps/direct')
            ->with('info', 'Program and Projects updated');
    }
    public function destroy(Request $request, $id)
    {
        $count_rev = RevisionPlan::where('idpaps', $id)->count();
        $count_strat = Strategy::where('idpaps', $id)->count();
        $count_success = SuccessIndicator::where('idpaps', $id)->count();
        $count_targets = Target::where('idpdip', $id)->count();
        $count_output = Output::where('idpaps', $id)->count();
        $count_off = OfficeAccountable::where('idpaps', $id)->count();
        $count_rating = rating::where('idpaps', $id)->count();
        $count_rating_rem = RatingRemarks::where('idpaps', $id)->count();
        $count_quality = Quality::where('idpaps', $id)->count();
        $count_qual_rem = QualityRemarks::where('idpaps', $id)->count();
        $count_time = Timeliness::where('idpaps', $id)->count();
        $count_time_rem = TimelinessRemarks::where('idpaps', $id)->count();
        $count_mon = Monitoring::where('idpaps', $id)->count();

        $msg = "";

        $status = "";
        if (
            $count_rev > 0 || $count_strat > 0 || $count_success > 0 || $count_targets > 0 ||
            $count_output > 0 || $count_off > 0 || $count_rating > 0 || $count_rating_rem > 0 ||
            $count_quality > 0 || $count_qual_rem > 0 || $count_time > 0 || $count_time_rem > 0 ||
            $count_mon > 0
        ) {
            $msg = "Unable to delete! Project Profile (" . $count_rev . "), Strategies (" . $count_strat . "), Success Indictors (" . $count_success . "),
            Targets (" . $count_targets . "), Outputs(" . $count_output . "), Office Accountable(" . $count_off . "), Rating remarks (." . $count_rating_rem . "),
            Rating (" . $count_rating . "), Quality(" . $count_quality . "), QualityRemarks(" . $count_qual_rem . "), Timeliness(" . $count_time . "), TimelinessRemarks(" .
                $count_time_rem . ")";
            $status = "error";
        } else {
            $msg = "Program/Project/Activity Successfully deleted!";
            $status = "deleted";
            $data = $this->model->with(['revisionPlan'])->findOrFail($id);
            if ($data->revisionPlan && $data->revisionPlan->isNotEmpty()) {
                return redirect()->back()->with('error', 'Unable to delete. The PPA is associated with existing Project Profiles');
            }
            $data->delete();
        }
        //dd($request->raao_id);
        // return redirect('/paps/direct')->with($status, $msg);
        return redirect()->back()->with($status, $msg);
    }
    public function direct(Request $request)
    {
        // dd("direct");
        //dd($request->mfosel);
        // dd(auth()->user());
        $popsp_related_agency = PopspAgency::where('agency_code', auth()->user()->popsp_agency)->first();
        // dd($popsp_related_agency);
        $offices = FFUNCCOD::where('FFUNCTION', 'LIKE', '%Office%')->orderBy('FFUNCTION', 'ASC')->get();
        $offices_shared = Office::where(function ($query) {
            $query->where('office', 'LIKE', '%Office%')
                ->orWhere('office', 'LIKE', '%Hospital%');
        })
            ->where('office', '!=', 'No Office')
            ->orderBy('office', 'ASC')
            ->get();
        // dd($offices);
        $idn = auth()->user()->recid;
        $FFUNCCODE = auth()->user()->office;
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCODE)->first();
        // dd(auth()->user());
        $department_code = optional($office)->department_code;
        $divisions = OfficeDivision::where('department_code', $department_code)
            ->orderBy('division_name1', 'ASC')
            ->get();
        // dd($divisions->pluck('division_name1'));
        // dd($auth()->user());
        // dd(auth()->user());
        // dd($department_code);
        $sharedPAPS = SharedProgramAndProject::where('destination_department_code', $department_code)
            ->when(auth()->user()->popsp_agency, function ($query) use ($popsp_related_agency) {
                $query->where(function($query) use ($popsp_related_agency) {
                    $query->where('destination_department_code', $popsp_related_agency->department_code)
                        ->Where('origin_department_code', $popsp_related_agency->department_code_actual);
                        // dd($popsp_related_agency);
                });
                // $query->wjere
                // $query->orWhere('origin_department_code', $popsp_related_agency->agency_code);
            })->get()
            ->pluck('idpaps'); // Get shared IDs
        // dd($sharedPAPS);
        $sharedPAPSData = $this->model->with('MFO')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->whereIn('id', $sharedPAPS)
            ->get();

        $data = $this->model->with('MFO')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            // ->when(auth()->user()->popsp_agency && auth()->user()->department_code=='01', function($query){
            //     dd(auth()->user()->popsp_agency);
            //     $query->where('agency_name', auth()->user()->popsp_agency);
            // })
            ->where(function ($query) {
                $query->where('idmfo', '>', '45')
                    ->orWhere(function ($query) {
                        $query->where('idmfo', '0')
                            ->where('type', 'GAS');
                    });
            })
            // Include shared PAPS
            ->orderByRaw("
                    CASE
                        WHEN program_and_projects.type = 'GAS' THEN 0
                        WHEN program_and_projects.type = 'Project' THEN 1
                        WHEN program_and_projects.type = 'Program' THEN 2
                        WHEN program_and_projects.type = 'Activity' THEN 3
                        ELSE 4
                    END
                "
            )
            ->orderBy('program_and_projects.paps_desc', 'ASC')
            ->get();

        // dd($data->pluck('paps_desc'));
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
        $result = clone ($data);
        $mfos = MajorFinalOutput::where('id', '>', '45')->get();
        // dd(auth()->user());
        if (auth()->user()->department_code !== '04') {
            $accessFFUNCCOD[] = auth()->user()->office;
            $accessFFUNCCOD = array_unique($accessFFUNCCOD);
            $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
            $result = $result->merge($sharedPAPSData);
            $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        // dd($accessFFUNCCOD);
        // dd($mfos);
        $showPerPage = 10;
        $paginatedResult = PaginationHelper::paginate($result, $showPerPage);
        // dd($accessFFUNCCOD);
        return inertia('PAPS/Direct', [
            "FFUNCCODE" => $FFUNCCODE,
            "department_code" => $department_code,
            "offices" => $offices,
            "offices_shared" => $offices_shared,
            'office' => optional($office)->FFUNCTION,
            "data" => $paginatedResult,
            "mfos" => $mfos,
            "filters" => $request->only(['search']),
            "divisions" => $divisions,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function getAllPAPS(Request $request, $departmentCode)
    {
        // dd($request->search);
        $mainPAPS = $this->model->with('MFO')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->where('idmfo', '>', 45)
            ->orderByRaw(DB::raw("
                CASE
                    WHEN program_and_projects.type = 'GAS' THEN 0
                    WHEN program_and_projects.type = 'Project' THEN 1
                    WHEN program_and_projects.type = 'Program' THEN 2
                    WHEN program_and_projects.type = 'Activity' THEN 3
                    ELSE 4
                END
            "))
            ->orderBy('program_and_projects.paps_desc', 'ASC')
            ->get();

        // Shared PAPS (received by department)
        $sharedPAPS = \App\Models\SharedProgramAndProject::where('destination_department_code', $departmentCode)
            ->pluck('idpaps'); // Get shared IDs

        $sharedPrograms = $this->model->with('MFO')
            ->whereIn('id', $sharedPAPS)
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->where('idmfo', '>', 45)
            ->orderByRaw(DB::raw("
                CASE
                    WHEN program_and_projects.type = 'GAS' THEN 0
                    WHEN program_and_projects.type = 'Project' THEN 1
                    WHEN program_and_projects.type = 'Program' THEN 2
                    WHEN program_and_projects.type = 'Activity' THEN 3
                    ELSE 4
                END
            "))
            ->orderBy('program_and_projects.paps_desc', 'ASC')
            ->get();

        // Merge both
        return $mainPAPS->merge($sharedPrograms);
    }
    public function mfos_filter(Request $request, $FFUNCCOD)
    {
        $MY_FFUNCCOD = $FFUNCCOD;
        // dd($FFUNCCOD);
        $data = MajorFinalOutput::where('FFUNCCOD', $MY_FFUNCCOD)
            ->where('id', '>', '45')
            ->get();
        return ['data' => $data];
    }

    public function FUNCTIONS(Request $request)
    {

        // dd($FFUNCCOD);
        $data = Functions::get();

        // dd($data);
        return ['data' => $data];


    }

    public function mfos_filter_division(Request $request, $division_code)
    {
        $MY_FFUNCCOD = $division_code;
        // dd($FFUNCCOD);
        $data = MajorFinalOutput::where('FFUNCCOD', $MY_FFUNCCOD)
            ->where('id', '>', '45')
            ->get();
        return ['data' => $data];
    }

    public function mother_paps_filter(Request $request, $idmfo)
    {
        // dd($request->search);
        // dd($idmfo);
        $data = ProgramAndProject::where('idmfo', $idmfo)
            ->get();
        return ['data' => $data];
    }

    public function getPAPS(){
        $usedPapsIds = RevisionPlan::whereIn('type', ['d', 'sip'])
            ->where('status', 1)
            ->pluck('idpaps')
            ->unique();

        return ProgramAndProject::where('department_code', auth()->user()->department_code)
            ->whereNotIn('id', $usedPapsIds)
            ->get();
    }
}
