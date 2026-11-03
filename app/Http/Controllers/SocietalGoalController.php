<?php

namespace App\Http\Controllers;

use App\Models\MajorFinalOutput;
use App\Models\SocietalGoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SocietalGoalController extends Controller
{
    protected $model;
    public function __construct(SocietalGoal $model)
    {
        $this->model = $model;
    }


    //
    public function index(Request $request)
    {

        $data = $this->model
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        return inertia('SocietalGoals/Index', [
            "data" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {
        //dd('create');
        return inertia('SocietalGoals/addSocietalGoals', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request);
        $attributes = $request->validate([
            'description' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Societal')
            ->with('message', 'Societal Goals added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
        ]);

        return inertia('SocietalGoals/addSocietalGoals', [
            "editData" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        // dd('update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'description' => $request->description,
        ]);

        return redirect('/Societal')
            ->with('info', 'Societal Goals updated');
    }

    public function destroy(Request $request)
    {
        $count_mfo = MajorFinalOutput::where('id_socgoal', $request->id)->count();
        $stat = "";
        $msg = "";
        if ($count_mfo > 0) {
            $stat = "warning";
            $msg = "Unable to delete";
        } else {
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            $msg = "Societal Goal Deleted";
            $stat = "deleted";
        }
        return redirect('/Societal')->with($stat, $msg);
    }
}
