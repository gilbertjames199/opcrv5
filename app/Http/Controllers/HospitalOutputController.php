<?php

namespace App\Http\Controllers;

use App\Models\hospital_output;
use App\Models\ProgramAndProject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HospitalOutputController extends Controller
{
    //
    protected $model;
    public function __construct(hospital_output $model)
    {
        $this->model = $model;
    }

    public function index(Request $request, $papsID)
    {
        // dd($papsID);
        $PAPS = ProgramAndProject::where('id', $papsID)->first();

        $data = $this->model
            ->where('idpaps', $papsID)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        // dd($data);
        return inertia('HPCR/Index', [
            "data" => $data,
            "paps" => $PAPS,
            "idPaps" => $papsID,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $idpaps)
    {
        // dd($papsID);
        $paps = ProgramAndProject::where('id', $idpaps)->first();
        return inertia('HPCR/Create', [
            "paps" => $paps,
            'idpaps' => $idpaps,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $id = $request->idpaps;
        $attributes = $request->validate([
            'output' => 'required',
            'prescribed_period' => 'required',
            'performance_measure' => 'required',
            'quality1' => 'required',
            'quality2' => 'required',
            'quality3' => 'required',
            'efficiency1' => 'required',
            'efficiency2' => 'required',
            'efficiency3' => 'required',
            'timeliness' => 'required',
            'idpaps' => 'required',
        ]);

        // dd($attributes);
        $this->model->create($attributes);
        return redirect('/hospitals/' . $request->idpaps)
            ->with('message', 'Hospital Output added');
    }

    public function edit(Request $request, $id)
    {
        // dd("Divisions: " . $id);

        // dd($request->id);
        $editData = $this->model
            ->where('id', $id)->first([
                'id',
                'output',
                'performance_measure',
                'prescribed_period',
                'quality1',
                'quality2',
                'quality3',
                'efficiency1',
                'efficiency2',
                'efficiency3',
                'timeliness',
                'idpaps',
            ]);
        // dd($editData);
        $data = ProgramAndProject::where('id', $editData->idpaps)->first();
        $paps = ProgramAndProject::where('id', $editData->idpaps)->first();
        return inertia('HPCR/Create', [
            "data" => $data,
            'idpaps' => $editData->idpaps,
            "paps" => $paps,
            "editData" => $editData,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        // dd($request->all());
        $data = $this->model->findOrFail($request->id);
        // dd($data);
        $data->update([
            'output' => $request->output,
            'performance_measure' => $request->performance_measure,
            'prescribed_period' => $request->prescribed_period,
            'quality1' => $request->quality1,
            'quality2' => $request->quality2,
            'quality3' => $request->quality3,
            'efficiency1' => $request->efficiency1,
            'efficiency2' => $request->efficiency2,
            'efficiency3' => $request->efficiency3,
            'timeliness' => $request->timeliness,
        ]);

        return redirect('/hospitals/' . $request->idpaps)
            ->with('message', 'Hospital Output updated');
    }

    public function destroy(Request $request)
    {

        $data = $this->model->findOrFail($request->id);
        // dd($data);
        $idpaps = $data->idpaps;
        $data->delete();
        return redirect('/hospitals/' . $idpaps)->with('warning', 'Hospital Output Deleted');
    }
}
