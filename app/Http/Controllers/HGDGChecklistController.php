<?php

namespace App\Http\Controllers;

use App\Models\HGDG_Checklist;
use App\Models\HGDGQuestion;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HGDGChecklistController extends Controller
{
    protected $model;
    //
    public function __construct(HGDG_Checklist $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        // dd(auth()->user()->department_code);
        if (auth()->user()->department_code != '04') {
            return redirect('/forbidden')
                ->with('error', 'You do not have access to this page.');
        }
        $data = $this->model
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        return inertia('hgdg_checklist/Index', [
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
        return inertia('hgdg_checklist/Create', [
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
            'box_number' => 'required',
            'sector' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/HGDGChecklist')
            ->with('message', 'Checklist added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id', $id)->first([
            'id',
            'box_number',
            'sector',
        ]);

        return inertia('hgdg_checklist/Create', [
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
            'box_number' => $request->box_number,
            'sector' => $request->sector,
        ]);

        return redirect('/HGDGChecklist')
            ->with('info', 'Checklist updated');
    }


    public function destroy(Request $request)
    {
        $count_rev = RevisionPlan::where('checklist_id', $request->id)->count();
        $count_question = HGDGQuestion::where('checklist_id', $request->id)->count();
        $msg = "";
        $status = "";
        if ($count_rev > 0 || $count_question > 0) {
            $msg = "Unable to delete!";
            $status = "error";
        } else {
            $msg = "Checklist successfully deleted!";
            $status = "deleted";
            $data = $this->model->findOrFail($request->id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/HGDGChecklist')->with($status, $msg);
    }
}
