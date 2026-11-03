<?php

namespace App\Http\Controllers;

use App\Models\ImplementationPlan;
use App\Models\Issue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IssueController extends Controller
{
    protected $model;
    //
    public function __construct(Issue $model)
    {
       $this->model = $model;
    }

    public function index(Request $request){

        $data = $this->model
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('Issues/Index',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }

    public function create(Request $request){
        //dd('create');
    return inertia('Issues/Create',[
    'can'=>[
        'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
        'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
    ],
    ]);
    }

    public function store(Request $request){
        // dd($request);
        $attributes = $request->validate([
            'description' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Issues')
                ->with('message','Issues added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
        ]);

        return inertia('Issues/Create', [
            "editData" => $data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        // dd('update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'description'=>$request->description,
        ]);

        return redirect('/Issues')
                ->with('message','Issues updated');
    }

    public function destroy(Request $request){
        //dd('iissue');
        //dd(ImplementationPlan);
        $count_imp = ImplementationPlan::where('idissue', $request->id)->count();

        $msg="";
        $status ="";
        if($count_imp>0 ){
            $msg="Unable to delete!";
            $status ="error";
        }else{
            $msg="GAD Issue successfully deleted!";
            $status ="message";
            $data = $this->model->findOrFail($request->id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/Issues')->with($status, $msg);

    }


}
