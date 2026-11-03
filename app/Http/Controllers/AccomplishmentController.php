<?php

namespace App\Http\Controllers;

use App\Models\Accomplishment;
use App\Models\Target;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AccomplishmentController extends Controller
{
    protected $model, $targ;
    public function __construct(Accomplishment $model, Target $targ)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
        $this->targ = $targ;
    }
    public function index(Request $request)
    {
        /*$target_description=DB::table('targets')
                            ->select('description')
                            ->where('targets.id','=',1)
                            ->first();*/
        //dd("target description: ".$target_description);
        $data = $this->model
                ->where('target_id', $request->idtarget)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        return inertia('Accomplishments/Index',
                        [
                            "data"=>$data,
                            //"target_id"=>$request->idtarget,
                            'can'=>[
                                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                            ],
                        ]);
    }

    public function list(Request $request, $id)
    {
        $data =[];
        $target_description=DB::table('targets')
                            ->select('description')
                            ->where('targets.id','=',$id)
                            ->first();

        if($id==0){
            $this->listraao($request,$id);
        }else{
            $data = $this->model
                    ->when($request->accomp_date_from, function($query, $from){
                        $query->where('date_accomplished_from','>=',$from);
                    })
                    ->when($request->accomp_date_to, function($query, $to){
                        $query->where('date_accomplished_from','<=',$to);
                    })
                    ->when($request->search, function($query, $searchItem){
                        $query->whereNested(function($query) use ($searchItem){
                                    $query->where('remarks','like','%'.$searchItem.'%')
                                    ->orWhere('validated_status','like','%'.$searchItem.'%')
                                    ->orWhere('validated_remarks','like','%'.$searchItem.'%');
                                });
                    })
                    ->where('target_id', $id)
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        }

        return inertia('Accomplishments/Index',[
                "data"=>$data,
                "target_id"=>$id,
                "filters" => $request->only(['search']),
                "target_description"=>$target_description->description,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
    }

    public function create(Request $request, $id)
    {
        $mun=DB::table('municipalities')
        ->select('citymunDesc','citymunCode')
        ->get();
        //dd($raao_id);
        return inertia('Accomplishments/Create',[
            'mun'=>$mun,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
            "target_id"=>$id]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate(Accomplishment::rules(), Accomplishment::errorMessages());
        $this->model->create($attributes);
        $request->pass='';

        //return redirect('/targets')->with('raao_id',$request->idraao)->with('message', 'Target added');
        return redirect('/accomplishments/'.$request->target_id.'/list')
                ->with('message','Accomplishment added');
        // $attributes = $request->validate([
        //     //'idraao' => 'required',
        //     //'idooe' => 'required',
        //     'idtarget' => 'required',
        //     'accomplishment_qty' => 'required',
        //     'actual_period_from' => 'required',
        //     'actual_period_to' => 'required',
        //     'actual_expenditure' => 'required',
        //     'facilitating_timeliness' => 'required',
        //     'facilitating_competency' => 'required',
        //     'facilitating_logistics' => 'required',
        //     'deterring_timeliness' => 'required',
        //     'deterring_concerns' => 'required',
        //     'deterring_logistics' => 'required',
        //     'concerns_timeliness' => 'required',
        //     'concerns_competency' => 'required',
        //     'concerns_logistics' => 'required',
        //     'new_strategy' => 'required',
        //     'remarks' => 'required',
        //     'date_accomplished_from' => 'required',
        //     'date_accomplished_to' => 'required',
        //     'validated_status' => 'required',
        //     'validated_remarks' => 'nullable',
        //     'validated_date' => 'nullable'
        // ]);
        /*
            'validated_remarks' => 'required',
            'validated_date' => 'required'
        */

    }

    public function edit(Request $request, $id, $target_id)
    {
        $data = $this->model->where('id', $id)->first([
                    'id',
                    'idtarget',
                    'accomplishment_qty',
                    'actual_period_from',
                    'actual_period_to',
                    'actual_expenditure',
                    'facilitating_timeliness',
                    'facilitating_competency',
                    'facilitating_logistics',
                    'deterring_timeliness',
                    'deterring_concerns',
                    'deterring_logistics',
                    'concerns_timeliness',
                    'concerns_competency',
                    'concerns_logistics',
                    'new_strategy',
                    'remarks',
                    'date_accomplished_from',
                    'date_accomplished_to',
                    'validated_status',
                    'validated_remarks',
                    'validated_date'
                ]);

        return inertia('Accomplishments/Create', [
            "editData" => $data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
            "target_id"=> $target_id,
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $validatedData = $request->validate(Accomplishment::rules(), Accomplishment::errorMessages());
        $data->update($validatedData);
        // $data->update([
        //     'idtarget' => $request->idtarget,
        //     'accomplishment_qty' => $request->accomplishment_qty,
        //     'actual_period_from' => $request->actual_period_from,
        //     'actual_period_to' => $request->actual_period_to,
        //     'actual_expenditure' => $request->actual_expenditure,
        //     'facilitating_timeliness' => $request->facilitating_timeliness,
        //     'facilitating_competency' => $request->facilitating_competency,
        //     'facilitating_logistics' => $request->facilitating_logistics,
        //     'deterring_timeliness' => $request->deterring_timeliness,
        //     'deterring_concerns' => $request->deterring_concerns,
        //     'deterring_logistics' => $request->deterring_logistics,
        //     'concerns_timeliness' => $request->concerns_timeliness,
        //     'concerns_competency' => $request->concerns_competency,
        //     'concerns_logistics' => $request->concerns_logistics,
        //     'new_strategy' => $request->new_strategy,
        //     'remarks' => $request->remarks,
        //     'date_accomplished' => $request->date_accomplished,
        //     'validated_remarks' => $request->validated_remarks,
        //     'validated_date' => $request->validated_date
        // ]);

        return redirect('/accomplishments/'.$request->idtarget.'/list')
                ->with('message','Target added');
    }

    public function destroy(Request $request, $id, $target_id)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        return redirect('/accomplishments/'.$target_id.'/list')->with('warning', 'Target deleted');
    }

    public function validation(Request $request){
        //dd('target_id: '.$request->targ_id.' val_date: '.$request->val_date.' val_rem: '.$request->val_rem.' -my_desc:'.$request->my_desc.' accomp_id: '.$request->accomp_id);
        $status="NOT VALIDATED";
        if ($request->val_date) {
            $status="VALIDATED";
            if($request->val_status=='No'){
                $request->val_status='Yes';
            }
        }

        $data = $this->model->findOrFail($request->accomp_id);

        $data->update([
            'validated_status'=>$request->val_status,
            'validated_remarks' => $request->val_rem,
            'validated_date' => $request->val_date
        ]);

        return redirect('/accomplishments/'.$request->targ_id.'/list')
                ->with('message',$status);
    }

    public function listraao(Request $request, $raao_id){
        $id="0";
        //dd($raao_id);

        $data = DB::table('accomplishments')
                ->join('targets','accomplishments.idtarget','=','targets.id')
                ->select(
                    'accomplishments.id',
                    'accomplishments.idtarget',
                    'accomplishments.accomplishment_qty',
                    'accomplishments.actual_period_from',
                    'accomplishments.actual_period_to',
                    'accomplishments.actual_expenditure',
                    'accomplishments.facilitating_timeliness',
                    'accomplishments.facilitating_competency',
                    'accomplishments.facilitating_logistics',
                    'accomplishments.deterring_timeliness',
                    'accomplishments.deterring_concerns',
                    'accomplishments.deterring_logistics',
                    'accomplishments.concerns_timeliness',
                    'accomplishments.concerns_competency',
                    'accomplishments.concerns_logistics',
                    'accomplishments.new_strategy',
                    'accomplishments.remarks',
                    'accomplishments.date_accomplished_from',
                    'accomplishments.date_accomplished_to',
                    'accomplishments.validated_status',
                    'accomplishments.validated_remarks',
                    'accomplishments.validated_date'
                )
                ->where('targets.idraao','=',$raao_id)
                ->when($request->accomp_date_from, function($query, $from){
                    $query->where('date_accomplished_from','>=',$from);
                })
                ->when($request->accomp_date_to, function($query, $to){
                    $query->where('date_accomplished_from','<=',$to);
                })
                ->when($request->search, function($query, $searchItem){
                    $query->whereNested(function($query) use ($searchItem){
                                $query->where('remarks','like','%'.$searchItem.'%')
                                ->orWhere('validated_status','like','%'.$searchItem.'%')
                                ->orWhere('validated_remarks','like','%'.$searchItem.'%');
                            });
                })
                ->paginate(10);

        $targ = $this->targ
                ->with('accomp')
                ->where('idraao', $raao_id)
                ->select('description','id')
                ->orderBy('created_at', 'desc')
                ->get();
        //dd($raao_id);
        $raao_description=DB::connection('mysql2')
                ->table('raaohs')
                ->select('FRAODESC')
                ->where('recid','=',$raao_id)
                ->first();
        /*
        $target_description=DB::table('targets')
                ->select('description')
                ->where('targets.id','=',1)
                ->first();
        */
        //dd($raao_description->FRAODESC);
        return inertia('Accomplishments2/Index',[
                    "data"=>$data,
                    "target_id"=>$id,
                    "target"=>$targ,
                    "raao_id"=>$raao_id,
                    "filters" => $request->only(['search']),
                    "raao_description" =>$raao_description->FRAODESC,
                    //"raao_description"=>$raao_description->FRAODESC,
                    //"target_description"=>$target_description->description,
                    'can'=>[
                        'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                        'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                    ],
                ]);
    }

    public function createFromRaao(Request $request, $raao_id){
        $target = DB::table('targets')
                    ->where('idraao','=',$raao_id)
                    ->get();
        $id=0;
        $mun=DB::table('municipalities')
                    ->select('citymunDesc','citymunCode')
                    ->get();
                    //dd('accomp 2');
        /*/accomplishments/{{ raao_id }}/raao/list*/
        return inertia('Accomplishments2/Create',[
                            'mun'=>$mun,
                            "target_id"=>$id,
                            'target'=>$target,
                            'raao_id'=>$raao_id,
                            'can'=>[
                                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                            ],
                        ]);
    }

    public function storeraao(Request $request)
    {
        $attributes = $request->validate([
            //'idraao' => 'required',
            //'idooe' => 'required',
            'idtarget' => 'required',
            'accomplishment_qty' => 'required',
            'actual_period_from' => 'required',
            'actual_period_to' => 'required',
            'actual_expenditure' => 'required',
            'facilitating_timeliness' => 'required',
            'facilitating_competency' => 'required',
            'facilitating_logistics' => 'required',
            'deterring_timeliness' => 'required',
            'deterring_concerns' => 'required',
            'deterring_logistics' => 'required',
            'concerns_timeliness' => 'required',
            'concerns_competency' => 'required',
            'concerns_logistics' => 'required',
            'new_strategy' => 'required',
            'remarks' => 'required',
            'date_accomplished_from' => 'required',
            'date_accomplished_to' => 'required',
            'validated_status' => 'required',
            'validated_remarks' => 'nullable',
            'validated_date' => 'nullable'
        ]);
        /*
            'validated_remarks' => 'required',
            'validated_date' => 'required'
        */
        $this->model->create($attributes);
        $request->pass='';

        //:href="`/accomplishments/${dat.recid}/raao/list`"

        //return redirect('/targets')->with('raao_id',$request->idraao)->with('message', 'Target added');
        /*return redirect('/accomplishments/'.$request->idtarget.'/list')
                ->with('message','Accomplishment added');*/
        return redirect('/accomplishments/'.$request->raao_id.'/raao/list')
                ->with('message','Accomplishment updated!!');
    }
    public function editfromraao(Request $request, $id, $raao_id){
        $target = DB::table('targets')
                    ->where('idraao','=',$raao_id)
                    ->get();

        $data = $this->model->where('id', $id)->first([
            'id',
            'idtarget',
            'accomplishment_qty',
            'actual_period_from',
            'actual_period_to',
            'actual_expenditure',
            'facilitating_timeliness',
            'facilitating_competency',
            'facilitating_logistics',
            'deterring_timeliness',
            'deterring_concerns',
            'deterring_logistics',
            'concerns_timeliness',
            'concerns_competency',
            'concerns_logistics',
            'new_strategy',
            'remarks',
            'date_accomplished_from',
            'date_accomplished_to',
            'validated_status',
            'validated_remarks',
            'validated_date'
        ]);
        //dd($data);
        return inertia('Accomplishments2/Create', [
            "editData" => $data,
            'target'=>$target,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
            "raao_id"=> $raao_id,
        ]);

    }
    public function updateraao(Request $request)
    {
        $data = $this->model->findOrFail($request->id);

        $data->update([
            'idtarget' => $request->idtarget,
            'accomplishment_qty' => $request->accomplishment_qty,
            'actual_period_from' => $request->actual_period_from,
            'actual_period_to' => $request->actual_period_to,
            'actual_expenditure' => $request->actual_expenditure,
            'facilitating_timeliness' => $request->facilitating_timeliness,
            'facilitating_competency' => $request->facilitating_competency,
            'facilitating_logistics' => $request->facilitating_logistics,
            'deterring_timeliness' => $request->deterring_timeliness,
            'deterring_concerns' => $request->deterring_concerns,
            'deterring_logistics' => $request->deterring_logistics,
            'concerns_timeliness' => $request->concerns_timeliness,
            'concerns_competency' => $request->concerns_competency,
            'concerns_logistics' => $request->concerns_logistics,
            'new_strategy' => $request->new_strategy,
            'remarks' => $request->remarks,
            'date_accomplished' => $request->date_accomplished,
            'validated_remarks' => $request->validated_remarks,
            'validated_date' => $request->validated_date
        ]);
        //Route::get('/{raao_id}/raao/list',[AccomplishmentController::class,'listraao']);
        return redirect('/accomplishments/'.$request->raao_id.'/raao/list')
                ->with('message','Accomplishment updated!!');
    }
    //Route::delete('/{id}/raao/{raao_id}/delete',[AccomplishmentController::class,'deletefromraao']);
    public function deletefromraao(Request $request, $id, $raao_id)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        return redirect('/accomplishments/'.$raao_id.'/raao/list')
                ->with('message','Accomplishment deleted!!');
        //return redirect('/accomplishments/'.$target_id.'/list')->with('warning', 'Target deleted');
    }
}
