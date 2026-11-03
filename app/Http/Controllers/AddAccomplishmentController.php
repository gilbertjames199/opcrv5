<?php

namespace App\Http\Controllers;

use App\Models\DailyAccomplishment;
use App\Models\FFUNCCOD;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddAccomplishmentController extends Controller
{
    //
    protected $model;
    public function __construct(DailyAccomplishment $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        $mfo = MajorFinalOutput::get();
        $paps = ProgramAndProject::get();

        $functions = FFUNCCOD::where('department_code', auth()->user()->department_code)->first();

        $data = $this->model->with('MFO')
            ->select(
                'daily_accomplishments.date_from',
                'daily_accomplishments.date_to',
                'daily_accomplishments.description',
                'daily_accomplishments.quantity',
                'daily_accomplishments.remarks',
                'daily_accomplishments.Link',
                'daily_accomplishments.id',
                'daily_accomplishments.idmfo',
            )
            ->when($request->search, function ($query, $searchItem) {
                $query->where('daily_accomplishments.description', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('program_and_projects.idmfo', '=', $searchItem);
            })
            ->join('program_and_projects', 'program_and_projects.id', 'daily_accomplishments.idpaps')
            ->orderBy('daily_accomplishments.created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        return inertia('DailyAccomplishment/Index', [
            "data" => $data,
            "paps" => $paps,
            "mfos" => $mfo,
            "functions" => $functions,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {
        //dd('create');
        $paps = ProgramAndProject::get();
        $mfo = MajorFinalOutput::get();
        return inertia('DailyAccomplishment/Create', [
            'paps' => $paps,
            'mfo' => $mfo,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request);

        $request->validate([
            'description' => 'required',
            'date_from' => 'required',
            'date_to' => 'required',
            'remarks' => 'required',
            'Link' => 'required',
            'Link' => 'required',
            'idpaps' => 'required',
            'responsible_person' => 'required',
        ]);

        $this->model->create($request->all());
        return redirect('/AddAccomplishment')
            ->with('message', 'Daily Accomplishment added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
            'quantity',
            'date_from',
            'date_to',
            'remarks',
            'Link',
            'idpaps',
            'idmfo',
            'responsible_person',
            'source_of_fund',
            'amount'
        ]);

        $paps = ProgramAndProject::get();
        $mfo = MajorFinalOutput::get();
        return inertia('DailyAccomplishment/Create', [
            "editData" => $data,
            "idpaps" => $data->idpaps,
            "mfo" => $mfo,
            'paps' => $paps,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }


    public function update(Request $request)
    {
        // dd($request);
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'description' => $request->description,
            'quantity' => $request->quantity,
            'date_from' => $request->date_from,
            'date_to' => $request->date_to,
            'remarks' => $request->remarks,
            'Link' => $request->Link,
            'idpaps' => $request->idpaps,
            'idmfo' => $request->idmfo,
            'amount' => $request->amount,
            'source_of_fund' => $request->source_of_fund,
            'responsible_person' => $request->responsible_person,
        ]);

        return redirect('/AddAccomplishment')
            ->with('info', 'Accomplishment updated');
    }

    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/AddAccomplishment')->with('deleted', 'Accomplishment Deleted');
    }
}
