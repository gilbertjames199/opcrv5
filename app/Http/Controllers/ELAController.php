<?php

namespace App\Http\Controllers;

use App\Models\ELA;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ELAController extends Controller
{
    protected $model;
    public function __construct(ELA $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        $data = $this->model
            ->select('agenda_description', 'year_from', 'year_to', 'rationale', 'id')
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->map(function ($item) {
                $rationale = strip_tags($item->rationale);
                // dd($item->year_from);
                // $rationale = $item->rationale;
                return [
                    'agenda_description' => $item->agenda_description,
                    'year_from' => Carbon::parse($item->year_from)->year,
                    'year_to' => Carbon::parse($item->year_to)->year,
                    'rationale' => $rationale,
                    'id' => $item->id
                ];
            });
        return inertia('ELA/Index', [
            "data" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {

        return inertia('ELA/Create', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
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
        return redirect('/ELA')
            ->with('message', 'Executive Legislative Agenda added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model
            ->where('id', $id)->first([
                'id',
                'agenda_description',
                'year_from',
                'year_to',
                'rationale'
            ]);

        return inertia('ELA/Create', [
            "editData" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'agenda_description'        => $request->agenda_description,
            'year_from'                 => $request->year_from,
            'year_to'                   => $request->year_to,
            'rationale'                 => $request->rationale,
            'id'                        => $request->id,
        ]);

        return redirect('/ELA')
            ->with('info', 'Executive Legislative Agenda updated');
    }

    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/ELA')->with('deleted', 'Executive Legislative Agenda Deleted');
    }
}
