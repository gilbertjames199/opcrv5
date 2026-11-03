<?php

namespace App\Http\Controllers;

use App\Models\hospital_individual_output;
use App\Models\hospital_section_output;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HospitalIndividualOutputController extends Controller
{
    //
    protected $model;
    public function __construct(hospital_individual_output $model)
    {
        $this->model = $model;
    }

    public function index(Request $request, $idHSPCR)
    {
        // dd($idHSPCR);
        $HSPCR = hospital_section_output::where('id', $idHSPCR)->first();
        // dd($HSPCR);
        $data = $this->model
            ->where('idhspcr', $idHSPCR)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        // dd($data);
        return inertia('HPCR_Individual/Index', [
            "data" => $data,
            "HSPCR" => $HSPCR,
            "idhspcr" => $idHSPCR,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $idHSPCR)
    {
        // dd($idHPCR);
        $hspcr = hospital_section_output::where('id', $idHSPCR)->first();
        // dd($hspcr);
        return inertia('HPCR_Individual/Create', [
            "hspcr" => $hspcr,
            'idhspcr' => $idHSPCR,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $id = $request->idhspcr;
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
            'idhspcr' => 'required',
        ]);

        // dd($attributes);
        $this->model->create($attributes);
        return redirect('/hospital_individual/' . $request->idhspcr)
            ->with('message', 'Hospital Individual Output added');
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
                'idhspcr',
            ]);
        // dd($editData);
        $data = hospital_section_output::where('id', $editData->idhspcr)->first();
        $HSPCR = hospital_section_output::where('id', $editData->idhspcr)->first();
        // dd($HSPCR);
        return inertia('HPCR_Individual/Create', [
            "data" => $data,
            'idhspcr' => $editData->idhspcr,
            "hspcr" => $HSPCR,
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

        return redirect('/hospital_individual/' . $request->idhspcr)
            ->with('message', 'Hospital Individual Output updated');
    }

    public function destroy(Request $request)
    {

        $data = $this->model->findOrFail($request->id);
        // dd($data);
        $idhspcr = $data->idhspcr;
        $data->delete();
        return redirect('/hospital_individual/' . $idhspcr)->with('warning', 'Hospital Output Deleted');
    }
}
