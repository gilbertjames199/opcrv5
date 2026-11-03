<?php

namespace App\Http\Controllers;

use App\Models\Monitoring;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MonitoringController extends Controller
{
    //
    protected $model;
    public function __construct(Monitoring $model)
    {
        $this->model=$model;
    }
    public function index(Request $request, $idpaps){
        $paps = ProgramAndProject::findOrFail($idpaps);
        $data = $this->model
                    ->where('idpaps', $idpaps)
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('Monitoring/Index',[
            "data"=>$data,
            "idpaps"=>$idpaps,
            "paps"=>$paps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request, $idpaps){

        $paps = ProgramAndProject::findOrFail($idpaps);
        // dd($paps);
        return inertia('Monitoring/Create',[
            'paps'=>$paps,
            'idpaps'=>$idpaps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        // dd($request);
        $id = $request->idpaps;
        $attributes = $request->validate([
            'monitoring' => 'required',
            'idpaps'=>'required',
        ]);

        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Monitoring/'.$id)
                ->with('message','Monitoring added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'monitoring',
            'idpaps'
        ]);
        $paps = ProgramAndProject::findOrFail($data->idpaps);
        return inertia('Monitoring/Create', [
            "editData" => $data,
            'paps'=>$paps,
            'idpaps'=>$data->idpaps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function update(Request $request)
    {
        // dd($request);
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'monitoring'=>$request->monitoring,
            'idpaps'=>$request->idpaps
        ]);

        return redirect('/Monitoring/'.$request->idpaps)
                ->with('message','Monitoring updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $id = $data->idpaps;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/Monitoring/'.$id)->with('warning', 'Monitoring Deleted');

    }

}
