<?php

namespace App\Http\Controllers;

use App\Models\Monitoring_and_evaluation;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MonitoringAndEvaluationController extends Controller
{
    protected $model;
    //
    public function __construct(Monitoring_and_evaluation $model)
    {
       $this->model = $model;
    }

    //
    public function index(Request $request, $id){

        $data = $this->model
                    ->where('revision_plan_id', $id)
                    ->orderBy('created_at', 'asc')
                    ->paginate(10)
                    ->withQueryString();
        $revs = RevisionPlan::findOrFail($id);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access Monitoring and Evaluation module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        return inertia('EvaluationMechanismTool/Index',[
            "data"=>$data,
            "revs"=>$revs,
            "revision_plan_id"=>$id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }

    public function create(Request $request, $id){
            //dd('create');
        $revs = RevisionPlan::findOrFail($id);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access Monitoring and Evaluation module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        return inertia('EvaluationMechanismTool/Create',[
            'revision_plan_id'=>$id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        //dd($request->revision_plan_id);
        $revid=$request->revision_plan_id;
        $attributes = $request->validate([
            'evaluation_mechanism_tool' => 'required',
            'opr' => 'required',
            'target_beneficiaries' => 'required',
            'gad' => 'required',
            'revision_plan_id'=>'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/EvaluationMechanismTool/'.$revid)
                ->with('message','Monitoring and Evaluation added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'evaluation_mechanism_tool',
            'opr',
            'target_beneficiaries',
            'gad',
            'revision_plan_id'
        ]);
        $revs = RevisionPlan::findOrFail($data->revision_plan_id);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access Monitoring and Evaluation module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        return inertia('EvaluationMechanismTool/Create', [
            "editData" => $data,
            'revision_plan_id'=>$data->revision_plan_id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $revid=$request->revision_plan_id;
        // dd('update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'evaluation_mechanism_tool'=>$request->evaluation_mechanism_tool,
            'opr'=>$request->opr,
            'target_beneficiaries'=>$request->target_beneficiaries,
            'gad'=>$request->gad,
        ]);

        return redirect('/EvaluationMechanismTool/'.$revid)
                ->with('message','Monitoring and Evaluation updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $revid = $data->revision_plan_id;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/EvaluationMechanismTool/'.$revid)->with('warning', 'Monitoring and Evaluation Deleted');

    }

    public function save_multiple(Request $request){
        $rows = $request->input('rows', []);

        foreach ($rows as $row) {

            Monitoring_and_evaluation::create([
                'evaluation_mechanism_tool' => $row['evaluation_mechanism_tool'] ?? null,
                'opr'                       => $row['opr'] ?? null,
                'target_beneficiaries'      => $row['target_beneficiaries'] ?? null,
                'gad'                       => $row['gad'] ?? null,
                'revision_plan_id'          => $row['revision_plan_id'],
            ]);
        }

        return redirect()->back()->with('message', 'monitoring and evaluation details updated successfully!');
    }

    public function getMonitoringAndEvaluation(Request $request)
    {
        $empty = [];

        $data = Monitoring_and_evaluation::where('revision_plan_id', $request->revision_plan_id)->get();

        if ($data->isEmpty()) {
            return $empty;
        }

        return $data;
    }
}
