<?php

namespace App\Http\Controllers;

use App\Models\ResearchAgenda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RAController extends Controller
{
    protected $model;
    public function __construct(ResearchAgenda $model )
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        $data = $this->model
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
                return inertia('ResearchAgenda/Index',[
                    "data"=>$data,
                    'can'=>[
                        'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                        'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {

        return inertia('ResearchAgenda/Create',[
        'can'=>[
            'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
        ],
        ]);
    }

    public function store(Request $request)
    {

        $attributes = $request->validate([
            'agenda_description'    => 'required',
            'year_from'             => 'required',
            'year_to'               => 'required',
            'rationale'             => 'required',
        ]);
        // dd($attributes);
        $this->model->create($attributes);
        return redirect('/ResearchAgenda')
                ->with('message','Research Agenda added');
    }

    public function edit(Request $request, $id){
        $data = $this->model
            ->where('id', $id)->first([
                'id',
                'agenda_description',
                'year_from',
                'year_to',
                'rationale'
        ]);

        return inertia('ResearchAgenda/Create', [
            "editData" => $data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->update([
            'agenda_description'        =>$request->agenda_description,
            'year_from'                 =>$request->year_from,
            'year_to'                   =>$request->year_to,
            'rationale'                 =>$request->rationale,
            'id'                        =>$request->id,
        ]);

        return redirect('/ResearchAgenda')
                ->with('message','Research Agenda updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        return redirect('/ResearchAgenda')->with('warning', 'Research Agenda Deleted');

    }
}
