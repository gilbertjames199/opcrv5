<?php

namespace App\Http\Controllers;

use App\Models\Accomplishment;
use App\Models\Activity;
use App\Models\ImplementationPlan;
use App\Models\Indicator;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use App\Models\RAAOHS;
use App\Models\RevisionPlan;
use App\Models\Strategy;
use App\Models\Target;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TargetController extends Controller
{
    protected $model;
    public function __construct(Target $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request)
    {
        $raao_id1 = '0';
        // $rrr=session()->get('raao_id');
        // if($rrr){
        //     $raao_id1=session()->get('raao_id');
        // }
        $today = Carbon::now();
        $year = '' . $today->year . '';
        if ($request->id_raao) {
            $raao_id1 = $request->id_raao;
            $year = RAAOHS::where('recid', $raao_id1)->value('tyear');
            $data = $this->model
                ->with('accomp')
                ->where('idraao', $raao_id1)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        } else {
            $data = $this->model
                ->with('accomp')
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
            //dd($data);
        }
        //dd($data);
        // $data = $this->model
        //         ->with('accomp')
        //         ->where('idraao', $raao_id1)
        //         ->orderBy('created_at', 'desc')
        //         ->paginate(10)
        //         ->withQueryString();

        return inertia('Targets/Index', [
            "data" => $data,
            "raao_id" => $raao_id1,
            "year" => $year,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function index_i(Request $request, $imp_id)
    {
        //dd($imp_id);
        $data = $this->model->where("idimplementation", $imp_id)
            ->paginate(10);


        $implementation = ImplementationPlan::findOrFail($imp_id);
        $revision = RevisionPlan::findOrFail($implementation->idrev_plan);
        $idrev_plan = $revision->id;
        //dd($idrev_plan);
        //dd($data);
        //dd($data);
        return inertia('Targets/Implementation/Index', [
            'data' => $data,
            "imp_id" => $imp_id,
            "idrev_plan" => $idrev_plan,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create_i(Request $request, $imp_id)
    {
        //FIND the implementation plan
        $implementation_plan = ImplementationPlan::select("*")
            ->where("implementation_plans.id", $imp_id)
            ->join('activities', 'activities.id', 'implementation_plans.idactivity')
            ->first();
        //dd($implementation_plan->idrev_plan);
        $revision_plan = RevisionPlan::findOrFail($implementation_plan->idrev_plan);

        //FIND THE STRATEGY of the parent activity of the implementation plan
        $act = Activity::findOrFail($implementation_plan->idactivity);
        $strat = Strategy::findOrFail($act->strategy_id);

        //FIND PAPS or MFO
        $paps = [];
        $mfos = [];
        if ($strat->idpaps != '0') {
            //dd('dili zero si idpaps: '.$revision_plan->idpaps.' idmfo: '.$revision_plan->idmfo);
            $paps = ProgramAndProject::findOrFail($revision_plan->idpaps);
        } else {
            //dd('dili zero si idmfo: '.$revision_plan->idmfo.' idpaps: '.$revision_plan->idpaps);
            $mfos = MajorFinalOutput::findOrFail($revision_plan->idmfo);
        }

        //dd('paps crfeate i');
        $indicator = Indicator::select('id', 'description')->orderBy('description', 'ASC')->get();
        $mun = DB::table('municipalities')
            ->select('citymunDesc', 'citymunCode')
            ->get();
        //dd($mun);
        return inertia('Targets/Implementation/Create', [
            'implementation_plan' => $implementation_plan,
            'revision_plan' => $revision_plan,
            'paps' => $paps,
            'mfos' => $mfos,
            "imp_id" => $imp_id,
            "filters" => $request->only(['search']),
            'raao_id' => $imp_id,
            "indicator" => $indicator,
            'mun' => $mun,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store_i(Request $request)
    {
        //dd("store");
        //dd($request);

        // $brg=$request->brgy;
        // dd($request);
        // $mun=$request->municipality;
        // if(!$brg){
        //     $request->merge(['brgy','-']);
        // }
        // dd($request->brgy);
        //dd($request);
        $attributes = $request->validate(Target::rules(), Target::errorMessages());
        $this->model->create($attributes);

        $this->updateRevisionPlanAmount($request->idimplementation);
        //dd($attributes);
        //dd($attributes);Route::get('/{imp_id}/implementation',[TargetController::class,'index_i']);
        return redirect('/targets/' . $request->idimplementation . '/implementation')
            ->with('message', 'Target added');
    }
    public function updateRevisionPlanAmount($id)
    {
        $implementation_plan = ImplementationPlan::where('id', $id)->first();
        $revision_plan_id = $implementation_plan->idrev_plan;

        $imp_amount = DB::table('targets')
            ->where('implementation_plans.idrev_plan', $revision_plan_id)
            ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
            ->select('targets.*', 'implementation_plans.*')
            ->sum('targets.planned_budget');

        //dd($imp_amount);
        $rev = RevisionPlan::find($revision_plan_id);
        $rev->amount = $imp_amount;
        $percent = floatval($rev->hgdg_percent);
        $att = floatval($imp_amount) * $percent;
        $rev->attributed_amount    = $att;
        $rev->save();
    }
    public function edit_i(Request $request, $imp_id, $id)
    {

        $data = $this->model->where('id', $id)->first([
            'id',
            'idpdip',
            'idindicator',
            'description',
            'brgy',
            'municipality',
            'planned_period_from',
            'planned_period_to',
            'planned_budget',
            'target_qty',
            'onsite_tag',
            'idimplementation',
            'target_qty1',
            'target_qty2',
            'target_qty3',
            'target_qty4'
        ]);
        //dd($mun);
        //FIND the implementation plan
        $implementation_plan = ImplementationPlan::select("*")
            ->where("implementation_plans.id", $imp_id)
            ->join('activities', 'activities.id', 'implementation_plans.idactivity')
            ->first();
        //dd($implementation_plan->idrev_plan);
        $revision_plan = RevisionPlan::findOrFail($implementation_plan->idrev_plan);

        //FIND THE STRATEGY of the parent activity of the implementation plan
        $act = Activity::findOrFail($implementation_plan->idactivity);
        $strat = Strategy::findOrFail($act->strategy_id);

        //FIND PAPS or MFO
        $paps = [];
        $mfos = [];
        if ($strat->idpaps != '0') {
            //dd('dili zero si idpaps: '.$revision_plan->idpaps.' idmfo: '.$revision_plan->idmfo);
            $paps = ProgramAndProject::findOrFail($revision_plan->idpaps);
        } else {
            //dd('dili zero si idmfo: '.$revision_plan->idmfo.' idpaps: '.$revision_plan->idpaps);
            $mfos = MajorFinalOutput::findOrFail($revision_plan->idmfo);
        }

        //dd('paps crfeate i');
        $indicator = Indicator::select('id', 'description')->get();
        $mun = DB::table('municipalities')
            ->select('citymunDesc', 'citymunCode')
            ->get();
        //dd($mun);
        return inertia('Targets/Implementation/Create', [
            'implementation_plan' => $implementation_plan,
            'revision_plan' => $revision_plan,
            'paps' => $paps,
            'mfos' => $mfos,
            "imp_id" => $imp_id,
            "filters" => $request->only(['search']),
            'raao_id' => $imp_id,
            "indicator" => $indicator,
            'mun' => $mun,
            'editData' => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update_i(Request $request, $imp_id)
    {
        //dd("update:  imp: ".$imp_id);
        $data = $this->model->findOrFail($request->id);
        //dd($request);
        $validatedData = $request->validate(Target::rules(), Target::errorMessages());
        $data->update($validatedData);
        $this->updateRevisionPlanAmount($request->idimplementation);
        return redirect('/targets/' . $request->idimplementation . '/implementation')
            ->with('message', 'Target updated!');
    }
    public function destroy_i(Request $request, $imp_id, $id)
    {
        //dd("destroy i");
        $count_accomp = Accomplishment::where('target_id', $id)->count();
        //$count_strat = Strategy::where('idpaps', $id)->count();
        $msg = "";
        $status = "";
        if ($count_accomp > 0) {
            $msg = "Unable to delete!";
            $status = "error";
        } else {
            $msg = "Target Successfully deleted!";
            $status = "message";
            $data = $this->model->findOrFail($id);
            $data->delete();
        }
        //dd($request->raao_id);


        $this->updateRevisionPlanAmount($imp_id);
        //dd($request->raao_id);
        return redirect('/targets/' . $imp_id . '/implementation')->with($status, $msg);
    }

    public function list(Request $request, $raao_id)
    {
        $raao_id1 = '0';
        // $rrr=session()->get('raao_id');
        // if($rrr){
        //     $raao_id1=session()->get('raao_id');
        // }

        if ($request->id_raao) {
            $raao_id1 = $request->id_raao;
        }
        //dd($request->id_raao);
        //dd('request->id_raao'.$request->id_raao);
        // /dd($request->url());

        // DB::table(DB::raw('targets T'))
        // ->select('t.description','t.brgy',DB::raw('(SELECT SUM(a.accomplishment_qty) FROM accomplishments WHERE id=t.id) AS \'sum_accomp'))
        // ->join(DB::raw('accomplishments A'),'T.id','=','A.idtarget')
        // ->get();
        $data = $this->model
            ->with('accomp')
            ->where('idraao', $raao_id1)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Targets/Index', [
            "data" => $data,
            "raao_id" => $raao_id,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $raao_id, $year)
    {

        if (!$year) {
            $today = Carbon::now();
            $year = '' . $today->year . '';
        }


        $raao = [];
        if (Auth::user()->UserType == 'Administrator') {
            $raao = DB::connection('mysql2')
                ->table(DB::raw('raaohs r'))
                ->select(
                    'r.recid',
                    'r.FRAODESC'
                )
                ->join(DB::raw('raaods d'), 'r.recid', '=', 'd.idraao')
                ->join(DB::raw('ooes o'), 'o.recid', '=', 'd.idooe')
                ->where('r.FRAOTYPE', '>', 2)
                ->where('r.tyear', '=', $year)
                ->groupBy('d.idooe')
                ->get();
        } else {
            $raao = DB::connection('mysql2')
                ->table('raaohs AS r')
                ->select(
                    'r.recid',
                    'r.FRAODESC',
                )
                ->leftjoin('accountaccess AS a', 'r.ffunccod', '=', 'a.ffunccod')
                ->leftjoin('systemusers AS su', 'su.recid', '=', 'a.iduser')
                ->join(DB::raw('raaods d'), 'r.recid', '=', 'd.idraao')
                ->join(DB::raw('ooes o'), 'o.recid', '=', 'd.idooe')
                ->where('FRAOTYPE', '>', '2')
                ->where('a.iduser', '=', Auth::user()->recid)
                ->groupBy('d.idooe')
                ->get();
        }

        //dd($raao);
        /*
        $raao=DB::connection('mysql2')
                 ->table('raaohs AS r')
                 ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
                 ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
                 ->select('r.recid AS recid','r.FRAODESC AS FRAODESC')
                 ->where('a.iduser','=',Auth::user()->recid)
                 ->when($request->search, function ($query, $searchItem) {
                    $query->whereNested(function($query) use ($searchItem){
                                    $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                            })
                            ->where('a.iduser','=',Auth::user()->recid);
                })
                ->where('r.FRAOTYPE','>',2)
                ->get();*/
        // $raao=DB::connection('mysql2')->table('raaohs')
        //         ->select('recid','FRAODESC')
        //         ->get();
        $indicator = DB::table('indicators')->select('id', 'description')->get();
        $mun = DB::table('municipalities')
            ->select('citymunDesc', 'citymunCode')
            ->get();
        //dd($mun);
        return inertia('Targets/Create', [
            'indicator' => $indicator,
            'mun' => $mun,
            'raao_id' => $raao_id,
            'raao' => $raao,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate(Target::rules(), Target::errorMessages());
        $this->model->create($attributes);
        $request->pass = '';
        $request->id_raao = $request->idraao;
        //dd($attributes);
        //return redirect('/targets')->with('raao_id',$request->idraao)->with('message', 'Target added');
        return redirect('/targets?id_raao=' . $request->id_raao)
            ->with('message', 'Target added');
    }
    // $raao=DB::connection('mysql2')
    //          ->table('raaohs AS r')
    //          ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
    //          ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
    //          ->select('r.recid AS recid','r.FRAODESC AS FRAODESC')
    //          ->where('a.iduser','=',Auth::user()->recid)
    //          ->where('r.FRAOTYPE','>',2)
    //          ->when($request->search, function ($query, $searchItem) {
    //             $query->whereNested(function($query) use ($searchItem){
    //                             $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
    //                                 ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
    //                                 ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
    //                     })
    //                     ->where('a.iduser','=',Auth::user()->recid);
    //         })
    //         ->get();
    public function edit(Request $request, $id)
    {
        $today = Carbon::now();
        $year = '' . $today->year . '';
        $data = $this->model->where('id', $id)->first([
            'id',
            'idraao',
            'idindicator',
            'description',
            'brgy',
            'municipality',
            'planned_period_from',
            'planned_period_to',
            'planned_budget',
            'target_qty',
            'onsite_tag',
            'target_qty1',
            'target_qty2',
            'target_qty3',
            'target_qty4'
        ]);
        $indicator = DB::table('indicators')->select('id', 'description')->get();
        if (Auth::user()->UserType == 'Administrator') {
            $raao = DB::connection('mysql2')
                ->table(DB::raw('raaohs r'))
                ->select(
                    'r.recid',
                    'r.FRAODESC'
                )
                ->join(DB::raw('raaods d'), 'r.recid', '=', 'd.idraao')
                ->join(DB::raw('ooes o'), 'o.recid', '=', 'd.idooe')
                ->where('r.FRAOTYPE', '>', 2)
                ->where('r.tyear', '=', $year)
                ->groupBy('d.idooe')
                ->get();
        } else {
            $raao = DB::connection('mysql2')
                ->table('raaohs AS r')
                ->select(
                    'r.recid',
                    'r.FRAODESC',
                )
                ->leftjoin('accountaccess AS a', 'r.ffunccod', '=', 'a.ffunccod')
                ->leftjoin('systemusers AS su', 'su.recid', '=', 'a.iduser')
                ->join(DB::raw('raaods d'), 'r.recid', '=', 'd.idraao')
                ->join(DB::raw('ooes o'), 'o.recid', '=', 'd.idooe')
                ->where('FRAOTYPE', '>', '2')
                ->where('a.iduser', '=', Auth::user()->recid)
                ->groupBy('d.idooe')
                ->get();
        }

        //dd($raao);
        // $raao=DB::connection('mysql2')->table('raaohs')
        //         ->select('recid','FRAODESC')
        //         ->get();
        $mun = DB::table('municipalities')
            ->select('citymunDesc', 'citymunCode')
            ->get();
        $bari = DB::table('barangays')
            ->select('barangays.brgyDesc', 'municipalities.citymunDesc')
            ->join('municipalities', 'barangays.citymunCode', '=', 'municipalities.citymunCode')
            ->where('municipalities.citymunDesc', 'LIKE', '%' . $data->municipality . '%')
            ->orderBy('barangays.brgyDesc', 'ASC')
            ->get();
        return inertia('Targets/Create', [
            "editData" => $data,
            "mun" => $mun,
            "bari" => $bari,
            "raao" => $raao,
            "indicator" => $indicator,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        //dd($request->target_qty);
        $data = $this->model->findOrFail($request->id);
        $validatedData = $request->validate(Target::rules(), Target::errorMessages());
        $data->update($validatedData);
        // $data->update([
        //     'idraao'=>$request->idraao,
        //     'idindicator'=>$request->idindicator,
        //     'description'=>$request->description,
        //     'brgy'=>$request->brgy,
        //     'municipality'=>$request->municipality,
        //     'planned_period_from' => $request->planned_period_from,
        //     'planned_period_to'=>$request->planned_period_to,
        //     'planned_budget'=>$request->planned_budget,
        //     'target_qty'=>$request->target_qty,
        //     'onsite_tag'=>$request->onsite_tag,
        //     'target_qty1'=>$request->target_qty1,
        //     'target_qty2'=>$request->target_qty2,
        //     'target_qty3'=>$request->target_qty3,
        //     'target_qty4'=>$request->target_qty4,
        // ]);

        return redirect('/targets?id_raao=' . $request->idraao)
            ->with('message', 'Target added');
    }
    public function destroy(Request $request)
    {
        //dd('wrong destroy');
        $count_accomp = Accomplishment::where('target_id', $id)->count();
        //$count_strat = Strategy::where('idpaps', $id)->count();
        $msg = "";
        $status = "";
        if ($count_accomp > 0) {
            $msg = "Unable to delete!";
            $status = "error";
        } else {
            $msg = "Program/Project/Activity Successfully deleted!";
            $status = "message";
            $data = $this->model->findOrFail($request->id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/targets?id_raao=' . $request->raao_id)->with($status, $msg);
    }
    public function ret(Request $request, $target_id)
    {
        //FROM Accomplishments to Targets
        $data = $this->model->findOrFail($target_id);
        //dd($data->idraao);
        return redirect('/targets?id_raao=' . $data->idraao);
    }
    public function direct_targets(Request $request)
    {
    }
}
