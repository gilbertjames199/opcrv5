<?php

namespace App\Http\Controllers;
use App\Models\ProgramAndProject;
use App\Models\Output;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OutputController extends Controller
{
    //
    protected $model;
    public function __construct(Output $model)
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
        return inertia('Outputs/Index',[
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
        //dd('create');
        $paps = ProgramAndProject::findOrFail($idpaps);
        return inertia('Outputs/Create',[
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
            'Outputs' => 'required',
            'idpaps'=>'required',
        ]);

        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/output/'.$id)
                ->with('message','Output added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'Outputs',
            'idpaps'
        ]);
        $paps = ProgramAndProject::findOrFail($data->idpaps);
        return inertia('Outputs/Create', [
            "editData" => $data,
            "idpaps"=>$data->idpaps,
            'paps'=>$paps,
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
            'Outputs'=>$request->Outputs,
            'idpaps'=>$request->idpaps
        ]);

        return redirect('/output/'.$request->idpaps)
                ->with('message','Output updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $id = $data->idpaps;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/output/'.$id)->with('warning', 'Output Deleted');

    }


}
