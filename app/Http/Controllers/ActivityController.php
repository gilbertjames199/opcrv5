<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityProject;
use App\Models\ImplementationPlan;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActivityController extends Controller
{
    //
    protected $model;
    public function __construct(Activity $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $idstrat)
    {

        $strat = Strategy::findOrFail($idstrat);
        //dd($idstrat);
        // dd($S)
        $myidpaps = $strat->idpaps;
        $myidmfo = $strat->idmfo;
        // dd($myidmfo);
        $idpaps = $myidpaps;
        $idmfo = $myidmfo;
        $data = $this->model->with('strat')
            ->where('strategy_id', $idstrat)
            ->when($request->search, function ($query, $searchItem) {
                $query->where('description', 'LIKE', '%' . $searchItem . '%');
            })
            ->orderBy('created_at', 'desc')
            ->paginate('10')
            ->withQueryString();

        return inertia('Activities/Index', [
            "data" => $data,
            "idpaps" => $idpaps,
            "idmfo" => $idmfo,
            "idstrategy" => $idstrat,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request, $idstrat)
    {
        $strats = Strategy::get();
        //dd($paps);
        return inertia('Activities/Create', [
            'idstrat' => $idstrat,
            'strats' => $strats,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        //dd('activity');
        $attributes = $request->validate([
            'strategy_id' => 'required',
            'description' => 'required',
        ]);
        $this->model->create($attributes);
        //$request->pass='';
        return redirect('/activities/' . $request->strategy_id)
            ->with('message', 'Activity added');
    }
    public function edit(Request $request, $id, $idstrat)
    {
        $strats = Strategy::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
            'strategy_id'
        ]);

        return inertia('Activities/Create', [
            "editData" => $data,
            'idstrat' => $idstrat,
            'strats' => $strats,
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
            'description' => $request->description,
            'strategy_id' => $request->strategy_id
        ]);

        return redirect('/activities/' . $request->strategy_id)
            ->with('message', 'Activity updated');
    }

    public function destroy(Request $request, $id, $strategy_id)
    {
        $msg = "";
        $status = "";
        $implementation = ImplementationPlan::where('idactivity', $id)->count();

        if ($implementation > 0) {
            $status = "error";
            $msg = "Unable to delete!";
        } else {
            $status = "message";
            $msg = "Activity deleted";
            $data = $this->model->findOrFail($id);
            $data->delete();

            ActivityProject::where('activity_id', $id)->delete();
        }
        //dd('hahhah '.$msg);
        //dd($request->raao_id);
        return redirect('/activities/' . $strategy_id)->with($status, $msg);
    }

    public function save_activities(Request $request)
    {
        $activitiesData = $request->activities;
        $strategy_id = $request->strategy_id;
        // dd($request);
        foreach ($activitiesData as $row) {

            // 1. Save to activities table
            $activity = Activity::create([
                'description' => $row['description'],
                'strategy_id' => $strategy_id,
            ]);

            // 2. Save to activity_projects (inherit parent activity_id)
            ActivityProject::create([
                'activity_id'       => $activity->id,
                'project_id'        => $row['project_id'],
                'target_indicator'  => $row['target_indicator'],
                'date_from'         => $row['date_from'],
                'date_to'           => $row['date_to'],

                'ps_q1' => $row['ps_q1'],
                'ps_q2' => $row['ps_q2'],
                'ps_q3' => $row['ps_q3'],
                'ps_q4' => $row['ps_q4'],

                'mooe_q1' => $row['mooe_q1'],
                'mooe_q2' => $row['mooe_q2'],
                'mooe_q3' => $row['mooe_q3'],
                'mooe_q4' => $row['mooe_q4'],

                'co_q1' => $row['co_q1'],
                'co_q2' => $row['co_q2'],
                'co_q3' => $row['co_q3'],
                'co_q4' => $row['co_q4'],

                'fe_q1' => $row['fe_q1'],
                'fe_q2' => $row['fe_q2'],
                'fe_q3' => $row['fe_q3'],
                'fe_q4' => $row['fe_q4'],

                'gad_issue' => $row['gad_issue'],
                'ccet_code' => $row['ccet_code'],
                'responsible' => $row['responsible'],
                'is_active' => $row['is_active'],
            ]);
        }

        return response()->json(['message' => 'Success'], 200);
    }
}
