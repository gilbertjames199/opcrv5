<?php

namespace App\Http\Controllers;

use App\Models\IntermediateOutcome;
use App\Models\Outcome;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IntermediateOutcomeController extends Controller
{
    protected $model;
    public function __construct(IntermediateOutcome $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request, $id)
    {
        $data = $this->model
                ->where('idoutcome',$id)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();


        return inertia('InterOutcome/Index',[
            "data"=>$data,
            "idoutcome"=>$id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request, $id)
    {
        $outcomes=Outcome::get();
        return inertia('InterOutcome/Create',[
            'idoutcome'=>$id,
            'outcomes'=>$outcomes,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate(IntermediateOutcome::rules(), IntermediateOutcome::errorMessages());
        $this->model->create($attributes);
        $request->pass='';
        return redirect('/inter_outcome/'.$request->idoutcome)
                ->with('message','Outcome added');
    }

    public function show(IntermediateOutcome $IntermediateOutcome)
    {
        //
    }

    public function edit(Request $request, $id, $idoutcome)
    {
        $outcomes=Outcome::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'io_desc',
            'idoutcome'
        ]);

        return inertia('InterOutcome/Create', [
            "editData" => $data,
            "outcomes"=>$outcomes,
            "idoutcome"=> $idoutcome,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $validatedData = $request->validate(IntermediateOutcome::rules(), IntermediateOutcome::errorMessages());
        $data->update($validatedData);
        //dd($request->plan_period);
        return redirect('/inter_outcome/'.$request->idoutcome)
                ->with('message','Outcome updated');
    }

    public function destroy(Request $request, $id, $idoutcome)
    {
        //dd('delete me!'.$id);
        $data = $this->model->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/inter_outcome/'.$idoutcome)->with('warning', 'Intermediate Outcome deleted');
    }
}
