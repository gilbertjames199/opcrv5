<?php

namespace App\Http\Controllers;

use App\Models\SDG;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SDGController extends Controller
{
    protected $model;
    public function __construct(SDG $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        $data = $this->model
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->map(function ($item) {
                $goal_description = strip_tags($item->goal_description);
                // $rationale = $item->rationale;
                return [
                    'goal_description' => $goal_description,
                    'id' => $item->id
                ];
            });
        return inertia('SDG/Index', [
            "data" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {

        return inertia('SDG/Create', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {

        $attributes = $request->validate([
            'goal_description' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/SDG')
            ->with('message', 'Sustainable Development Goal added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model
            ->where('id', $id)->first([
                'id',
                'goal_description'
            ]);

        return inertia('SDG/Create', [
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
            'goal_description' => $request->goal_description
        ]);

        return redirect('/SDG')
            ->with('info', 'Sustainable Development Goal updated');
    }

    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/SDG')->with('deleted', 'Sustainable Development Goal Deleted');
    }
}
