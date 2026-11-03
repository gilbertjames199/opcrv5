<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlan;
use App\Models\Risk_manangement;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RiskManangementController extends Controller
{
    protected $model;
    //
    public function __construct(Risk_manangement $model)
    {
       $this->model = $model;
    }

        //
    public function index(Request $request, $revid){
        $revs = RevisionPlan::findOrFail($revid);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access Risk Management module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        $data = $this->model
                    ->where('revision_plan_id', $revid)
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('RiskManagement/Index',[
            "data"=>$data,
            "revid"=>$revid,
            "revs"=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function create(Request $request, $revid){
        //dd('create');
        $revs = RevisionPlan::findOrFail($revid);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access Risk Management module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        return inertia('RiskManagement/Create',[
            'revs'=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        //dd($request);
        $id = $request->revision_plan_id;
        $attributes = $request->validate([
            'possible_risk' => 'required',
            'person_affected' => 'required',
            'management' => 'required',
            'revision_plan_id'=>'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/RiskManagement/'.$id)
                ->with('message','Risk Management added');
    }


    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'possible_risk',
            'person_affected',
            'management',
            'revision_plan_id'
        ]);
        $revs = RevisionPlan::findOrFail($data->revision_plan_id);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access Risk Management module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        return inertia('RiskManagement/Create', [
            "editData" => $data,
            'revs'=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        // dd('update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'possible_risk'=>$request->possible_risk,
            'person_affected'=>$request->person_affected,
            'management'=>$request->management,
            'revision_plan_id'=>$request->revision_plan_id
        ]);

        return redirect('/RiskManagement/'.$request->revision_plan_id)
                ->with('message','Risk Management updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $id = $data->revision_plan_id;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/RiskManagement/'.$id)->with('warning', 'Implementing Team Deleted');

    }
    public function save_multiple(Request $request){
        $riskManagements = $request->input('risk_managements', []);

    foreach ($riskManagements as $data) {
        Risk_manangement::create([
                'possible_risk'     => $data['possible_risk'] ?? null,
                'person_affected'   => $data['person_affected'] ?? null,
                'management'        => $data['management'] ?? null,
                'revision_plan_id'  => $data['revision_plan_id'] ?? null,
            ]);
        }

        return response()->json(['message' => 'Saved successfully']);
    }

    public function getRiskManagement(Request $request)
    {
        $empty = [];

        $data = Risk_manangement::where('revision_plan_id', $request->revision_plan_id)->get();

        if ($data->isEmpty()) {
            return $empty;
        }

        return $data;
    }

}
