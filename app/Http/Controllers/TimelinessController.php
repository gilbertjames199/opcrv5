<?php

namespace App\Http\Controllers;

use App\Models\ProgramAndProject;
use App\Models\Timeliness;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TimelinessController extends Controller
{
    //
    protected $model;
    public function __construct(Timeliness $model)
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
        return inertia('Timeliness/Index',[
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
        return inertia('Timeliness/Create',[
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
            'numerical_rating' => 'required',
            'adjectival_rating' => 'required',
            'timeliness' => 'required',
            'idpaps'=>'required',
        ]);

        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Timeliness/'.$id)
                ->with('message','Timeliness added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'timeliness',
            'numerical_rating',
            'adjectival_rating',
            'idpaps'
        ]);
        $paps = ProgramAndProject::findOrFail($data->idpaps);
        return inertia('Timeliness/Create', [
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
            'numerical_rating'=>$request->numerical_rating,
            'adjectival_rating'=>$request->adjectival_rating,
            'timeliness'=>$request->timeliness,
            'idpaps'=>$request->idpaps
        ]);

        return redirect('/Timeliness/'.$request->idpaps)
                ->with('message','Timeliness updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $id = $data->idpaps;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/Timeliness/'.$id)->with('warning', 'Timeliness Deleted');

    }
}
