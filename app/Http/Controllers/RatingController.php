<?php

namespace App\Http\Controllers;

use App\Models\ProgramAndProject;
use App\Models\rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{
    //
    protected $model;
    public function __construct(rating $model)
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
        return inertia('Rating/Index',[
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
        return inertia('Rating/Create',[
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
            'efficiency_quantity' => 'required',
            'idpaps'=>'required',
        ]);

        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Rating/'.$id)
                ->with('message','Rating added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'numerical_rating',
            'adjectival_rating',
            'efficiency_quantity',
            'idpaps'
        ]);
        $paps = ProgramAndProject::findOrFail($data->idpaps);
        return inertia('Rating/Create', [
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
            'efficiency_quantity'=>$request->efficiency_quantity,
            'idpaps'=>$request->idpaps
        ]);
        // dd($data);
        return redirect('/Rating/'.$request->idpaps)
                ->with('message','Rating updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $id = $data->idpaps;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/Rating/'.$id)->with('warning', 'Rating Deleted');

    }
}
