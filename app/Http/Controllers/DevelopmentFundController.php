<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\ChiefAgenda;
use App\Models\ClimateChangeExpenditureTagging;
use App\Models\EconomicAgenda;
use App\Models\ELA;
use App\Models\MajorFinalOutput;
use App\Models\Office;
use App\Models\PopspAgency;
use App\Models\ProgramAndProject;
use App\Models\ResearchAgenda;
use App\Models\RevisionPlan;
use App\Models\SDG;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mockery\Undefined;

class DevelopmentFundController extends Controller
{
    //

    public function dev_fund_index(Request $request, $id)
    {
        // dd($id);
        // dd()

        // dd(auth()->user());
        $dept_code= auth()->user()->department_code;
        $no_of_pages =10;
        if($request->no_of_pages){
            $no_of_pages = $request->no_of_pages;
        }
        $source = $request->source ?? 'dev';
        $data = RevisionPlan::with([
                    'paps',
                    'paps.office',
                    'activityProject' => function($query) {
                        $query->where('is_active', 1);
                    },
                    'activityProject.activity',
                    'activityProject.expected_output'
                ])
                ->join('program_and_projects', 'program_and_projects.id', '=', 'revision_plans.idpaps')
                ->when($id != 0, function($query) use ($id){
                    $query->where('id', $id);
                })
                ->when($dept_code != '04', function($query) use ($dept_code){
                    $query->whereHas('paps', function($q) use ($dept_code){
                        $q->where('department_code', $dept_code);
                    });
                })
                ->whereHas('paps', function($query) use ($id, $source){
                    $query->where('source_of_funds',$source);
                        // ->orWhere('source_of_funds','other');
                })
                ->orderBy('program_and_projects.source_of_funds', 'ASC')
                ->select('revision_plans.*')
                ->get();
                // ->paginate($no_of_pages);
        // dd($data, $id);
        return inertia('RevisionPlans/DevelopmentFund/Index', [
            'data'=>$data,
            'source'=>$source,
            'id'=>$id
        ]);
        // dd($data);
    }

    public function dev_fund_create(Request $request, $id)
    {
        // USERS
        $us = auth()->user();
        $idn = $us->recid;
        $user_FFUNCCOD = $us->office;
        //MFO
        $mfos1 = MajorFinalOutput::get();
        $mfos = [];
        $editData = [];
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


        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->where(function ($query) {
                $query->where('ff.FFUNCTION', 'LIKE', '%Office%')
                    ->orWhere('ff.FFUNCTION', 'LIKE', '%Function%')
                    ->orWhere('ff.FFUNCTION', 'LIKE', '%Hospital%');
            })
            ->with('func');
        // if (auth()->user()->recid !== 545) {
        //     $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        //     $mfos = $mfos1->whereIn('FFUNCCOD', $accessFFUNCCOD);
        //     // $motherPAPS = clone ($motherPAPS)->whereIn('FFUNCCOD', $accessFFUNCCOD);
        // }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->orderBy('FFUNCTION', 'ASC')
            ->get();
        // dd($functions);
        if(!isset($functions) || $functions->isEmpty()){
            // dd('dasdasdasdasd');
            $functions = FFUNCCOD::where('department_code', auth()->user()->department_code)->get();
        }
        // dd($id);
        $paps=null;
        // GETTING the PAPS for the given ID
        if($id!=0){
            // Load only the revision plan that matches the requested id
            $paps = ProgramAndProject::with(['revisionPlan' => function($q) use ($id) {
                        $q->where('id', $id);
                    }])
                    ->whereHas('revisionPlan', function($query)use($id){
                        $query->where('id',$id);
                    })
                    ->first();
            $editData = $paps;
        }
        // dd($editData);
        // dd($paps);
        // dd($functions, auth()->user()->department_code);
        $popsp_agencies =PopspAgency::all();
        // dd($pops_agencies);
        // dd($functions);
        $implementation =[];
        $rev = null;
        if($editData){
            // revisionPlan is a collection; take the first (should be the one filtered above)
            $rev = $editData->revisionPlan->first() ?? null;
            if($rev){
                $implementation = ProjectProfileStreamlinedController::getImplementationPlan($rev->id, $rev, $editData->id);
            } else {
                $implementation = [];
            }
        }
        // SET CCET CODES
        $ccet_codes = ClimateChangeExpenditureTagging::where('id', '<>', 1)->get();
        return inertia('RevisionPlans/DevelopmentFund/Create', [
            'mfos' => $mfos,
            'paps'=>$paps,
            'chief_agenda' => $chief_executive_agenda,
            'socio_economic' => $socio_economic,
            'sustainable' => $sustainable,
            'executive_legislative' => $executive_legislative,
            'research' => $research,
            'functions' => $functions,
            'popsp_agencies' => $popsp_agencies,
            'implementation'=>$implementation,
            'editData'=>$paps,
            "rev"=>$rev,
            "id"=>$id,
            "ccet_codes"=>$ccet_codes,
            // 'motherPAPS' => $motherPAPS,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function dev_fund_store(Request $request)
    {
        // dd($request);
        $FFUNCCOD = $request->FFUNCCOD;
        if($FFUNCCOD){
            $office = Office::where('FFUNCCOD', $FFUNCCOD)->first();
            if($office){
                $dept_code = $office->department_code;
            }else{
                $dept_code = auth()->user()->department_code;
            }
        }else{
            $dept_code = auth()->user()->department_code;
        }
        // dd($dept_code);
        $request->merge(['department_code' => $dept_code]);
        $proceed = "1";
        // $attributes = $request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $request->validate([
            'paps_desc' => 'required',
            'type' => 'required',
            'FFUNCCOD' => 'required',
            'idmfo' => 'required',
            'sector' => 'required',

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
        if ($proceed === "1") {

            //$this->model->create($attributes);
            $paps = new ProgramAndProject();
            $paps->paps_desc = $request->paps_desc;
            $paps->department_code = $dept_code;
            $paps->FFUNCCOD = $request->FFUNCCOD;
            $paps->idmfo = $request->idmfo;
            $paps->MOV = $request->MOV;
            $paps->type = $request->type;
            $paps->aip_code = $request->aip_code;
            $paps->chief_executive_agenda = $request->chief_executive_agenda;
            $paps->socio_economic_agenda = $request->socio_economic_agenda;
            $paps->sust_devt_goal = $request->sust_devt_goal;
            $paps->executive_legislative_agenda = $request->executive_legislative_agenda;
            $paps->research_agenda = $request->research_agenda;
            $paps->sector = $request->sector;
            $paps->subsector = $request->subsector;
            $paps->source_of_funds = $request->source_of_funds;
            $paps->source_others_specify = $request->source_others_specify;
            $paps->funding_agency = $request->funding_agency;
            $paps->popsp = $request->popsp;
            $paps->focus_area = $request->focus_area;
            $paps->is_mother_program = $request->is_mother_program ?? '0';
            $paps->mother_program_id = $request->mother_program_id ?? null;
            $paps->save();
            $msg = "Programs and Projects(PAPS) added";
            $status = "message";


            // GENERATE PROJECT PROFILE
            $firstDayNextYear = now()->addYear()->startOfYear()->format('Y-m-d');
            $lastDayNextYear  = now()->addYear()->endOfYear()->format('Y-m-d');
            $rev_plan_firstgenerate = new RevisionPlan();
            $rev_plan_firstgenerate->idpaps = $paps->id;
            $rev_plan_firstgenerate->agency_name = $paps->agency_name;
            $rev_plan_firstgenerate->status = "-1";
            $rev_plan_firstgenerate->year_period = Carbon::now()->year + 1;
            $rev_plan_firstgenerate->idmfo = $paps->idmfo;
            $rev_plan_firstgenerate->program_id = NULL;
            $rev_plan_firstgenerate->FFUNCCOD =  $paps->FFUNCCOD;
            $rev_plan_firstgenerate->scope = NULL;
            $rev_plan_firstgenerate->aip_code = NULL;
            $rev_plan_firstgenerate->project_title = $paps->paps_desc;
            $rev_plan_firstgenerate->project_location = '';
            $rev_plan_firstgenerate->list_of_lgu_covered = '';
            $rev_plan_firstgenerate->date_start = $firstDayNextYear;
            $rev_plan_firstgenerate->date_end = $lastDayNextYear;
            $rev_plan_firstgenerate->beneficiary_male = 0;
            $rev_plan_firstgenerate->beneficiary_female = 0;
            $rev_plan_firstgenerate->baseline_male = 0;
            $rev_plan_firstgenerate->baseline_female = 0;
            $rev_plan_firstgenerate->baseline_total = 0;
            $rev_plan_firstgenerate->data_source = '';
            $rev_plan_firstgenerate->amount = 0;
            $rev_plan_firstgenerate->proposed_budget = 0;
            $rev_plan_firstgenerate->attributed_amount = 0;
            $rev_plan_firstgenerate->checklist_id = 0;
            $rev_plan_firstgenerate->hgdg_score = 0;
            $rev_plan_firstgenerate->hgdg_percent = 0;
            $rev_plan_firstgenerate->rationale = '';
            $rev_plan_firstgenerate->objective = '';
            $rev_plan_firstgenerate->beneficiaries = '';
            $rev_plan_firstgenerate->implementing_team = '';
            $rev_plan_firstgenerate->partnership = '';
            $rev_plan_firstgenerate->monitoring = '';
            $rev_plan_firstgenerate->risk_management = '';
            $rev_plan_firstgenerate->version = 1;
            $rev_plan_firstgenerate->gad_version = 'p';
            $rev_plan_firstgenerate->type = 'p';
            $rev_plan_firstgenerate->final = 0;
            $rev_plan_firstgenerate->supplemental = 0;
            $rev_plan_firstgenerate->user_id = auth()->user()->recid;
            $rev_plan_firstgenerate->is_strategy_based = 0;
            $rev_plan_firstgenerate->is_activity_based = 1;
            $rev_plan_firstgenerate->breakdown_by_expected_output = 1;
            $rev_plan_firstgenerate->save();
            $here = RevisionPlan::with(['comments', 'comments.user', 'paps', 'checklist'])->find($rev_plan_firstgenerate->id);
            $editData = $here;
        }

        return redirect('/development-fund/create/'.$rev_plan_firstgenerate->id)
            ->with($status, $msg);
    }

    public function dev_fund_edit(Request $request, $id)
    {

    }

    public function dev_fund_update(Request $request, $id)
    {
        // dd($request, $id);
        $paps = ProgramAndProject::where('id', $id)->first();
        // dd($paps);
        $paps->paps_desc = $request->paps_desc;
        // $paps->department_code = $dept_code;
        // $paps->FFUNCCOD = $request->FFUNCCOD;
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
        $paps->source_of_funds = $request->source_of_funds;
        $paps->source_others_specify = $request->source_others_specify;
        $paps->funding_agency = $request->funding_agency;
        $paps->popsp = $request->popsp;
        $paps->focus_area = $request->focus_area;
        $paps->is_mother_program = $request->is_mother_program ?? '0';
        $paps->mother_program_id = $request->mother_program_id ?? null;
        $paps->save();

        $rev = RevisionPlan::where('idpaps', $id)->first();
        $rev->date_start = $request->date_start;
        $rev->date_end = $request->date_end;
        $rev->aip_code = $request->aip_code;

        // dd($rev);
        $rev->save();



        return redirect()->back()->with('message', 'Programs and Projects(PAPS) updated');
    }

    public function dev_fund_delete(Request $request)
    {
        //
        $rev = RevisionPlan::with('paps')->find($request->id);
        $paps = $rev->paps;
        $rev->delete();
        $paps->delete();
        return redirect()->back()->with('message', 'Programs and Projects(PAPS) deleted');
    }
}
