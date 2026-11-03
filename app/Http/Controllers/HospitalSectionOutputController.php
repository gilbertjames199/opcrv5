<?php

namespace App\Http\Controllers;

use App\Models\hospital_division_output;
use App\Models\hospital_section_output;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HospitalSectionOutputController extends Controller
{
    //
    protected $model;
    public function __construct(hospital_section_output $model)
    {
        $this->model = $model;
    }

    public function index(Request $request, $idHDPCR)
    {
        // dd($idHPCR);
        $HDPCR = hospital_division_output::where('id', $idHDPCR)->first();
        // dd($HDPCR);
        $data = $this->model
            ->where('idhdpcr', $idHDPCR)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        // dd($data);
        return inertia('HPCR_Section/Index', [
            "data" => $data,
            "HDPCR" => $HDPCR,
            "idhdpcr" => $idHDPCR,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $idHDPCR)
    {
        // dd($idHPCR);
        $hdpcr = hospital_division_output::where('id', $idHDPCR)->first();
        // dd($hdpcr);
        return inertia('HPCR_Section/Create', [
            "hdpcr" => $hdpcr,
            'idhdpcr' => $idHDPCR,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $id = $request->idhdpcr;
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
            'idhdpcr' => 'required',
        ]);

        // dd($attributes);
        $this->model->create($attributes);
        return redirect('/hospital_section/' . $request->idhdpcr)
            ->with('message', 'Hospital Section Output added');
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
                'idhdpcr',
            ]);
        // dd($editData);
        $data = hospital_division_output::where('id', $editData->idhdpcr)->first();
        $HDPCR = hospital_division_output::where('id', $editData->idhdpcr)->first();

        return inertia('HPCR_Section/Create', [
            "data" => $data,
            'idhdpcr' => $editData->idhdpcr,
            "hdpcr" => $HDPCR,
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

        return redirect('/hospital_section/' . $request->idhdpcr)
            ->with('message', 'Hospital Section Output updated');
    }

    public function destroy(Request $request)
    {

        $data = $this->model->findOrFail($request->id);
        // dd($data);
        $idhdpcr = $data->idhdpcr;
        $data->delete();
        return redirect('/hospital_section/' . $idhdpcr)->with('warning', 'Hospital Output Deleted');
    }
}
