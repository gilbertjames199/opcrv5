<?php

namespace App\Http\Controllers;

use App\Models\hospital_division_output;
use App\Models\hospital_output;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HospitalDivisionOutputController extends Controller
{
    //
    protected $model;
    public function __construct(hospital_division_output $model)
    {
        $this->model = $model;
    }

    public function index(Request $request, $idHPCR)
    {
        // dd($idHPCR);
        $HPCR = hospital_output::where('id', $idHPCR)->first();
        // dd($HPCR);
        $data = $this->model
            ->where('idhpcr', $idHPCR)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        // dd($data);_
        return inertia('HPCR_Division/Index', [
            "data" => $data,
            "HPCR" => $HPCR,
            "idhpcr" => $idHPCR,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $idHPCR)
    {
        // dd($idHPCR);
        $hpcr = hospital_output::where('id', $idHPCR)->first();
        // dd($hpcr);
        return inertia('HPCR_Division/Create', [
            "hpcr" => $hpcr,
            'idhpcr' => $idHPCR,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $id = $request->idhpcr;
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
            'idhpcr' => 'required',
        ]);

        // dd($attributes);
        $this->model->create($attributes);
        return redirect('/hospital_division/' . $request->idhpcr)
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
                'idhpcr',
            ]);
        // dd($editData);
        $data = hospital_output::where('id', $editData->idhpcr)->first();
        $HPCR = hospital_output::where('id', $editData->idhpcr)->first();
        return inertia('HPCR_Division/Create', [
            "data" => $data,
            'idhpcr' => $editData->idhpcr,
            "hpcr" => $HPCR,
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

        return redirect('/hospital_division/' . $request->idhpcr)
            ->with('message', 'Hospital Output updated');
    }

    public function destroy(Request $request)
    {

        $data = $this->model->findOrFail($request->id);
        // dd($data);
        $idhpcr = $data->idhpcr;
        $data->delete();
        return redirect('/hospital_division/' . $idhpcr)->with('warning', 'Hospital Output Deleted');
    }
}
