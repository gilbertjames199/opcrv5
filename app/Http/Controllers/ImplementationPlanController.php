<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ImplementationPlan;
use App\Models\Issue;
use App\Models\RevisionPlan;
use App\Models\Strategy;
use App\Models\Target;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ImplementationPlanController extends Controller
{
    protected $model;
    public function __construct(ImplementationPlan $model)
    {
        $this->model=$model;
    }
    public function index(Request $request,$id){
        //dd($id);

        $data=$this->model
                ->select('implementation_plans.id AS id',
                            'strategies.description AS strategy',
                            'implementation_plans.idrev_plan',
                            'implementation_plans.date_from',
                            'implementation_plans.date_to',
                            'implementation_plans.idstrategy',
                            'implementation_plans.cc_topology',
                            'implementation_plans.person_responsible',
                            'issues.description AS issue'
                        )
                ->where('idrev_plan',$id)
                ->where('idstrategy','<>',NULL)
                ->Join('strategies','strategies.id','implementation_plans.idstrategy')
                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                ->get()
                ->map(function($item){
                    //dd($item->idrev_plan);
                    $activity_implementation=$this->model
                                                ->select('implementation_plans.id AS id',
                                                            'activities.description AS activity',
                                                            'implementation_plans.idrev_plan',
                                                            'implementation_plans.date_from',
                                                            'implementation_plans.date_to',
                                                            'implementation_plans.cc_topology',
                                                            'issues.description AS issue',
                                                            'strategies.id AS stratt_id',
                                                            'implementation_plans.person_responsible',
                                                )
                                                ->Join('activities','activities.id','implementation_plans.idactivity')
                                                ->Join('strategies','strategies.id','=','activities.strategy_id')
                                                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                                                ->where('idrev_plan',$item->idrev_plan)
                                                ->where('strategies.id',$item->idstrategy)
                                                ->get()
                                                ->map(function($item){
                                                    $targets=Target::where('idimplementation', $item->id)
                                                            ->select('indicators.description AS indicator_description',
                                                                'targets.description AS target_description',
                                                                'targets.planned_budget AS budget'
                                                            )
                                                            ->join('indicators', 'indicators.id','targets.idindicator')
                                                            ->get();
                                                    return [
                                                        'id'=>$item->id,
                                                        'idrev_plan'=>$item->idrev_plan,
                                                        'date_from'=>convertDateString($item->date_from),
                                                        'date_to'=>convertDateString($item->date_to),
                                                        'stratt_id'=>$item->stratt_id,
                                                        'cc_topology'=>$item->cc_topology,
                                                        'issue'=>$item->issue,
                                                        'activity'=>$item->activity,
                                                        'person_responsible'=>$item->person_responsible,
                                                        'targets'=>$targets,
                                                    ];
                                                });
                    //dd($activity_implementation);
                    //->where('idstrategy','=',NULL)

                    $targets=Target::where('idimplementation', $item->id)->get();
                    return [
                        'id'=>$item->id,
                        'idrev_plan'=>$item->idrev_plan,
                        'date_from'=>convertDateString($item->date_from),
                        'date_to'=>convertDateString($item->date_to),
                        'idstrategy'=>$item->idstrategy,
                        'cc_topology'=>$item->cc_topology,
                        'issue'=>$item->issue,
                        'strategy'=>$item->strategy,
                        'activity_implementation'=>$activity_implementation,
                        'person_responsible'=>$item->person_responsible,
                        'targets'=>$targets,
                    ];
                });
        //dd($data)
        //$data = $this->model->where('revision_plan_id','=',$idrev)->get();
        $revs = RevisionPlan::where('id','=',$id)->get();
        //dd($idrev);

        return inertia('Implementation/Index',[
            'data'=>$data,
            "idrev"=>$id,
            "revs"=>$revs,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function create(Request $request, $idrev){
        $revs = RevisionPlan::where('id',$idrev)->first();
        $implans = $this->model->where('idrev_plan',$idrev )->get();
        $strategies = Strategy::where('idpaps',$revs->idpaps)->get();
        $issues = Issue::get();
        $exist_strat =ImplementationPlan::where('idrev_plan',$idrev)->get();
        $exist_strat = $exist_strat->pluck('idstrategy');
        //dd($strategies);
        //$implans = $implan->pluck('account_code');
        //dd($idrev);
        return inertia('Implementation/Create',[
            "idrev"=>$idrev,
            "implans"=>$implans,
            "strategies"=>$strategies,
            "issues"=>$issues,
            "exist_strat"=>$exist_strat,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){
        if(!$request->fromA){
            //dd('from A');
            //dd($request);
            $attributes =$request->validate([
                "idrev_plan"=>"required",
                "idstrategy"=>"required",
            ]);
            $imp = new ImplementationPlan();
            $imp->idrev_plan=$attributes['idrev_plan'];
            $imp->idstrategy =$attributes['idstrategy'];
            $imp->idissue = $request->idissue;
            $imp->date_from = $request->date_from;
            $imp->date_to = $request->date_to;
            $imp->cc_topology = $request->cc_topology;
            $imp->person_responsible = $request->person_responsible;
            $imp->save();
        }else{
            //dd('from A');

            $attributes =$request->validate([
                "idrev_plan"=>"required",
                "idactivity"=>"required",
            ]);
            $imp = new ImplementationPlan();
            $imp->idrev_plan=$attributes['idrev_plan'];
            $imp->idactivity =$attributes['idactivity'];
            $imp->idissue = $request->idissue;
            $imp->date_from = $request->date_from;
            $imp->date_to = $request->date_to;
            $imp->cc_topology = $request->cc_topology;
            $imp->person_responsible = $request->person_responsible;
            $imp->save();
        }

        return redirect('/implementation/'.$request->idrev_plan)
        ->with('message','Successfully added implementation plan');

    }
    public function act_create(Request $request, $idstrat, $idrev_plan){
        //$revs = RevisionPlan::where('id',$idrev)->first();
        //dd($idrev_plan);
        $implans = $this->model->where('idrev_plan',$idrev_plan )->get();
        $activities = Activity::where('strategy_id',$idstrat)->get();
        //dd($activities);
        $issues = Issue::get();
        $exist_act =ImplementationPlan::where('idrev_plan',$idrev_plan)->get();
        $exist_act = $exist_act->pluck('idactivity');
        //dd($strategies);
        //$implans = $implan->pluck('account_code');
        //dd($idrev);
        return inertia('Implementation/Create_A',[
            "idrev"=>$idrev_plan,
            "implans"=>$implans,
            "activities"=>$activities,
            "issues"=>$issues,
            "exist_act"=>$exist_act,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'idrev_plan',
            'idstrategy',
            'idissue',
            'date_from',
            'date_to',
            'cc_topology',
            'person_responsible'
        ]);
        $idrev= $data->idrev_plan;
        $revs = RevisionPlan::where('id',$idrev)->first();
        $implans = $this->model->where('idrev_plan',$idrev )->get();
        $strategies = Strategy::where('idpaps',$revs->idpaps)->get();
        $issues = Issue::get();
        $exist_strat =ImplementationPlan::where('idrev_plan',$idrev)->get();
        $exist_strat = $exist_strat->pluck('idstrategy');
        //dd($strategies);
        //$implans = $implan->pluck('account_code');
        //dd($idrev);
        return inertia('Implementation/Create',[
            "idrev"=>$idrev,
            "implans"=>$implans,
            "strategies"=>$strategies,
            "issues"=>$issues,
            "exist_strat"=>$exist_strat,
            "editData"=>$data,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function act_edit(Request $request, $id){
        //dd($id);
        $data = $this->model->where('id', $id)->first([
            'id',
            'idrev_plan',
            'idactivity',
            'idissue',
            'date_from',
            'date_to',
            'cc_topology',
            'person_responsible',
        ]);
        $idrev_plan= $data->idrev_plan;

        //Get the strategy ID of the activity
        //dd($data->idactivity);
        $idstrat= Activity::select('strategy_id')->findOrFail($data->idactivity);
        $idstrat=$idstrat->strategy_id;
        //dd($idstrat);
        //Get the activities with the strategy ID
        $activities = Activity::where('strategy_id',$idstrat)->get();
        //dd($activities);
        //dd($idstrat->strategy_id);
        $implans = $this->model->where('idrev_plan',$idrev_plan )->get();

        $issues = Issue::get();
        $exist_act =ImplementationPlan::where('idrev_plan',$idrev_plan)->get();
        $exist_act = $exist_act->pluck('idactivity');
        return inertia('Implementation/Create_A',[
            "idrev"=>$idrev_plan,
            "implans"=>$implans,
            "activities"=>$activities,
            "issues"=>$issues,
            "exist_act"=>$exist_act,
            "editData"=>$data,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function update(Request $request){
        if(!$request->fromA){
            $data = $this->model->findOrFail($request->id);
            //dd($request);
            //dd($request->plan_period);
            $data->update([
                'idstrategy'=>$request->idstrategy,
                'idissue' => $request->idissue,
                'date_from' => $request->date_from,
                'date_to' => $request->date_to,
                'cc_topology' => $request->cc_topology,
                'person_responsible'=>$request->person_responsible
            ]);
        }else{
            $data = $this->model->findOrFail($request->id);
            //dd($request);
            //dd($request->plan_period);
            $data->update([
                'idactivity'=>$request->idactivity,
                'idissue' => $request->idissue,
                'date_from' => $request->date_from,
                'date_to' => $request->date_to,
                'cc_topology' => $request->cc_topology,
                'person_responsible' =>$request->person_responsible
            ]);
        }
        //dd($rev);
        return redirect('/implementation/'.$request->idrev_plan)
        ->with('message','Successfully updated implementation plan');
    }
    public function destroy(Request $request, $id){
        //dd($id);
        $count_target = Target::where('idimplementation', $id)->count();
        $msg="";
        $status ="";
        if($count_target>0 ){
            $msg="Unable to delete!";
            $status ="error";
        }else{
            $msg="Implementation plan deleted";
            $status ="message";
            $data = $this->model->findOrFail($request->id);
            $data->delete();
        }
        //dd($request->raao_id);
        return back()->with($status, $msg);
    }
}
