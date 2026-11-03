<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\Implementing_team;
use App\Models\RevisionPlan;
use App\Models\TeamPlan;
use App\Models\UserEmployees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TeamPlanController extends Controller
{
    protected $model;
    public function __construct(TeamPlan $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $revid)
    {

        $revs = RevisionPlan::findOrFail($revid);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access the implementing team module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        // $data = TeamPlan::where('revision_plan_id', $revid)
        //     ->get()
        //     ->map(function ($item) {
        //         $people = Implementing_team::where('id', $item->implementing_team_id)
        //             ->first();
        //         return [
        //             "id" => $item->id,
        //             "name" => $people->name,
        //             "position" => $people->position,
        //             "competency" => $people->competency,
        //             "role" => $item->role
        //         ];
        //     });
        //ImplementingTeamRevision
        $data = TeamPlan::with('userEmployee')
            ->where('revision_plan_id', $revid)
            ->get()
            ->map(function ($item) {
                // dd($item);
                return [
                    "id" => $item->id,
                    "name" => $item->userEmployee ? $item->userEmployee->employee_name : $item->name,
                    "position" => $item->userEmployee ? $item->userEmployee->position_long_title : $item->position,
                    "competency" => $item->competency,
                    "role" => $item->role,
                    "with_gad_training" => $item->with_gad_training
                ];
            });
        return inertia('ImplementingTeamRevision/Index', [
            "revs" => $revs,
            "revid" => $revid,
            "data" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request, $revid)
    {
        //dd("revid: ".$revid);
        $revs = RevisionPlan::findOrFail($revid);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access the implementing team module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        $uid = auth()->user()->recid;
        $FFUNCCOD = AccountAccess::where('iduser', $uid)->first();
        // $people = Implementing_team::where('FFUNCCOD',trim($FFUNCCOD->ffunccod))
        //             ->get();
        $people = UserEmployees::all();
        //dd($people);
        return inertia('ImplementingTeamRevision/Create', [
            "revs" => $revs,
            "revid" => $revid,
            "people" => $people,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'competency'            => 'nullable',
            'revision_plan_id'      => 'required|integer',
            'implementing_team_id'  => 'nullable',
            'role'                  => 'required|string',
            'with_gad_training'     => 'required',
            'specify_GAD_training'  => 'nullable',
            'name'                  => 'required|string',
            'position'              => 'required|string',
            'id'                    => 'nullable|integer', // or required if needed
            'gender'                => 'required'
        ]);

        // dd(env("DB_DATABASE"),"null lagi");
        // $attributes = $request->validate($this->rules(), $this->errorMessages());
        // $this->model->create($attributes);
        // dd($request);
        // $us = UserEmployees::where('empl_id', $request->implementing_team_id)->first();
        // $team = new TeamPlan();
        // $team->revision_plan_id = $request->revision_plan_id;
        // $team->implementing_team_id = $request->implementing_team_id;
        // $team->role = $request->role;
        // $team->empl_id = $us->empl_id;
        // $team->name = $request->name;
        // $team->competency = $request->competency;
        // $team->position = $us?$us->position_long_title: $request->position;
        // $team->with_gad_training = $request->with_gad_training;
        // $team->specify_GAD_training = $request->specify_GAD_training ?? null;
        // $team->save();
        $us = null;

        if (!empty($request->implementing_team_id)) {
            $us = UserEmployees::where('empl_id', $request->implementing_team_id)->first();
        }

        $team = new TeamPlan();
        $team->revision_plan_id = $request->revision_plan_id;
        $team->implementing_team_id = $request->implementing_team_id;
        $team->role = $request->role;

        // If $us exists → use its empl_id, otherwise null
        $team->empl_id = $us ? $us->empl_id : null;

        // If $us exists → use its position, else fallback to request
        $team->position = $us ? $us->position_long_title : $request->position;

        $team->name = $request->name;
        $team->gender = $request->gender;
        $team->competency = $request->competency;
        $team->with_gad_training = $request->with_gad_training;
        $team->specify_GAD_training = $request->specify_GAD_training ?? null;

        $team->save();
        return redirect('/team/' . $request->revision_plan_id . '/revision/plan/team')
            ->with('message', 'Team member added!');
    }
    public function edit(Request $request, $id)
    {
        $editData = TeamPlan::findOrFail($id);
        // dd($editData);
        $revid = $editData->revision_plan_id;

        $revs = RevisionPlan::findOrFail($revid);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access the implementing team module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        $uid = auth()->user()->recid;
        $FFUNCCOD = AccountAccess::where('iduser', $uid)->first();
        $people = $people = UserEmployees::all();
        //dd($people);
        // dd($editData);
        return inertia('ImplementingTeamRevision/Create', [
            "revs" => $revs,
            "revid" => $revid,
            "people" => $people,
            "editData" => $editData,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        //dd("update");

        // $data = $this->model->findOrFail($request->id);
        $validated = $request->validate([
            'competency'            => 'nullable',
            'revision_plan_id'      => 'required|integer',
            'implementing_team_id'  => 'nullable',
            'role'                  => 'required|string',
            'with_gad_training'     => 'required',
            'specify_GAD_training'  => 'nullable',
            'name'                  => 'required|string',
            'position'              => 'required|string',
            'id'                    => 'nullable|integer', // or required if needed
            'gender'                => 'required'
        ]);
        // $attributes = $request->validate($this->rules(), $this->errorMessages());
        // $data->update($attributes);
        // $us = UserEmployees::where('empl_id', $request->implementing_team_id)->first();
        // $team = $this->model->findOrFail($request->id);
        // $team->revision_plan_id = $request->revision_plan_id;
        // $team->implementing_team_id = $request->implementing_team_id;
        // $team->role = $request->role;
        // $team->empl_id = $us->empl_id;
        // $team->name = $request->name;
        // $team->competency = $request->competency;
        // $team->position = $us?$us->position_long_title: $request->position;
        // $team->with_gad_training = $request->with_gad_training;
        // $team->specify_GAD_training = $request->specify_GAD_training ?? null;
        // $team->save();
        $us = null;

        if (!empty($request->implementing_team_id)) {
            $us = UserEmployees::where('empl_id', $request->implementing_team_id)->first();
        }

        $team = $this->model->findOrFail($request->id);
        $team->revision_plan_id = $request->revision_plan_id;
        $team->implementing_team_id = $request->implementing_team_id;
        $team->role = $request->role;

        // If $us exists → use its empl_id, otherwise null
        $team->empl_id = $us ? $us->empl_id : null;

        // If $us exists → use its position, else fallback to request
        $team->position = $us ? $us->position_long_title : $request->position;

        $team->name = $request->name;
        $team->gender = $request->gender;
        $team->competency = $request->competency;
        $team->with_gad_training = $request->with_gad_training;
        $team->specify_GAD_training = $request->specify_GAD_training ?? null;

        $team->save();
        return redirect('/team/' . $request->revision_plan_id . '/revision/plan/team')
            ->with('message', 'Team member added!');
    }
    public function destroy(Request $request,  $id)
    {
        //dd("delete");
        $data = $this->model->findOrFail($id);
        $rev_id = $data->revision_plan_id;
        $data->delete();
        return redirect('/team/' . $rev_id . '/revision/plan/team')
            ->with('warning', 'Team member removed!');
    }
    public static function rules()
    {
        return [
            'revision_plan_id' => 'required',
            'implementing_team_id' => 'required|numeric',
            'role' => 'required',
        ];
    }

    public static function errorMessages()
    {
        return [
            'revision_plan_id.required' => 'The Revision Plan ID is required',
            'implementing_team_id.required' => 'Assign a team member',
            'implementing_team_id.numeric' => 'The ID of the team meber must be numeric',
            'role.required' => 'Role is required'
        ];
    }

    public function save_team(Request $request)
    {
        // Validate the rows array exists
        // $request->validate([
        //     'rows' => 'required|array',
        // ]);

        $rows = $request->input('rows', []);

        // foreach ($rows as $row) {

        // Insert or update row
        TeamPlan::updateOrCreate(
            [
                'id' => $request->input['id'] ?? 0,   // if id = 0 → will insert
            ],
            [
                'revision_plan_id'      => $rows['revision_plan_id'] ?? null,
                'implementing_team_id'  => $rows['implementing_team_id'] ?? 0,
                'role'                  => $rows['role'] ?? '',
                'empl_id'               => $rows['empl_id'] ?? 0,
                'name'                  => $rows['name'] ?? '',
                'competency'            => $rows['competency'] ?? '',
                'position'              => $rows['position'] ?? '',
                'with_gad_training'     => $rows['with_gad_training'] ?? 'No',
                'specify_GAD_training'  => $rows['specify_GAD_training'] ?? '',
                'gender'                => $rows['gender'] ?? '',
                'status'                => $rows['status'] ?? ''
            ]
        );
        // }

        return response()->json([
            'message' => 'Team members saved successfully.'
        ]);
    }
    public function getEmployees(Request $request){
        // dd(UserEmployees::all());
        return UserEmployees::select('empl_id','employee_name','gender','position_long_title','employment_type_descr')->get();
    }
    public function update_team(Request $request)
    {
        $rows = $request->input('rows', []);

        // Make sure 'id' is provided
        $id = $rows['id'] ?? null;

        if ($id) {
            $teamPlan = TeamPlan::find($id);

            if ($teamPlan) {
                $teamPlan->update([
                    'revision_plan_id'      => $rows['revision_plan_id'] ?? null,
                    'implementing_team_id'  => $rows['implementing_team_id'] ?? 0,
                    'role'                  => $rows['role'] ?? '',
                    'empl_id'               => $rows['empl_id'] ?? 0,
                    'name'                  => $rows['name'] ?? '',
                    'competency'            => $rows['competency'] ?? '',
                    'position'              => $rows['position'] ?? '',
                    'with_gad_training'     => $rows['with_gad_training'] ?? 'No',
                    'specify_GAD_training'  => $rows['specify_GAD_training'] ?? '',
                    'gender'                => $rows['gender'] ?? '',
                    'status'                => $rows['status'] ?? ''
                ]);

                return response()->json([
                    'message' => 'Team member updated successfully.'
                ]);
            } else {
                return response()->json([
                    'message' => 'Team member not found.'
                ], 404);
            }
        } else {
            return response()->json([
                'message' => 'ID is required for update.'
            ], 400);
        }
    }

    public function getTeamPlan(Request $request)
    {


        $empty = [];

        $data = TeamPlan::with('userEmployee')
                ->where('revision_plan_id', $request->revision_plan_id)
                ->get()
                ->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'revision_plan_id' => $item->revision_plan_id,
                        'implementing_team_id' => $item->implementing_team_id,
                        'role' => $item->role,
                        'empl_id' => $item->empl_id,
                        'name' => $item->name ?: optional($item->userEmployee)->employee_name ?: '',
                        'competency' => $item->competency,
                        'position' => $item->position ?: optional($item->userEmployee)->position_long_title ?: '',
                        'with_gad_training' => $item->with_gad_training,
                        'specify_GAD_training' => $item->specify_GAD_training,
                        'gender' => $item->gender ?: optional($item->userEmployee)->gender ?: '',
                        'status' => $item->status ?: optional($item->userEmployee)->employment_type_descr,
                        'created_at' => $item->created_at,
                        'updated_at' => $item->updated_at,
                    ];
                });

        if ($data->isEmpty()) {
            return $empty;
        }

        return $data;
    }

}
