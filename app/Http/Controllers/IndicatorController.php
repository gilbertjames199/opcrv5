<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\Target;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class IndicatorController extends Controller
{
    protected $model;
    public function __construct(Indicator $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request)
    {
        $data=$this->model->with('targ')
                ->when($request->search, function ($query, $searchItem){
                    $query->where('description','like', '%' . $searchItem . '%');
                })
                ->paginate(10);
        return inertia('Indicators/Index',[
                    "data"=>$data,
                    "filters" => $request->only(['search']),
                    'can'=>[
                        'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                        'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                    ],
                ]);
    }
    public function create(Request $request){
        return inertia('Indicators/Create',[
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function checkUse(Request $request){
        $used=false;
        //$request
        //dd($request->ind_id);
        $countTarget=DB::table('targets')
                    ->where('idindicator','=',$request->ind_id)
                    ->count('idindicator');
        if($countTarget>0){
            $used=true;
        }
        //dd($request);
        return $used;
    }
    public function store(Request $request){
        $attributes = $request->validate([
            //'idraao' => 'required',
            //'idooe' => 'required',
            'description' => 'required',
        ]);

        $this->model->create($attributes);
       return redirect('/indicators')
                ->with('message','Issues added');

    }

    public function destroy(Request $request){
        //dd($request->id);
        $msg="";
        $status="";
        $count_target = Target::where('idindicator', $request->id)->count();

        if($count_target>0){
            $status="error";
            $msg ="Unable to delete!";
        }else{
            $status="message";
            $msg ="Activity deleted";
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            //$data=$this->model->paginate(10);
        }

        return redirect('/indicators')->with($status, $msg);
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'description'
        ]);

        return inertia('Indicators/Create', [
            "editData" => $data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function update(Request $request){
        $data = $this->model->findOrFail($request->id);

        $data->update([
            'description' => $request->description,
        ]);

        return redirect('/indicators')
                ->with('message','Indicator updated!!');
    }
}
