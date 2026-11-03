<?php

namespace App\Http\Controllers;

use App\Models\ActivityProject;
use App\Models\ExpectedRevisedOutcome;
use App\Models\ExpectedRevisedOutput;
use App\Models\Strategy;
use App\Models\StrategyProject;
use Illuminate\Http\Request;

class ExpectedRevisedOutcomeController extends Controller
{
    //
    protected $model;
    public function __construct(ExpectedRevisedOutcome $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $id, $type)
    {
        // dd($type);
        // dd($id);
        $data = [];
        $project = [];
        if ($type == 'activity') {
            $compound_data = $this->activityOutcome($id);
            // dd($compound_data['expected_outcomes']);
            $data = $compound_data['expected_outcomes'];
            // dd($compound_data);
            $project = $compound_data['project'];
            // $data = $compound_data->expected_outcomes;
        } else if ($type == 'strategy') {
            $compound_data = $this->strategyOutcome($id);
            // dd($compound_data['expected_outcomes']);
            $data = $compound_data['expected_outcomes'];
            $project = $compound_data['project'];
        }
        // dd($compound_data);
        return inertia("ExpectedOutcomeRevised/Index", [
            "data" => $data,
            "type" => $type,
            "project" => $project
        ]);
        // dd($compound_data);
    }
    public function strategyOutcome($id)
    {
        // dd($id);
        $strat_proj = StrategyProject::with(["strategy"])->where('id', $id)->get();
        // dd($strat_proj);
        $expected_outcomes = ExpectedRevisedOutcome::where('is_strategy_outcome', '1')
            ->where('strategy_id', $strat_proj[0]->strategy_id)
            ->get();
        return [
            "project" => $strat_proj,
            "expected_outcomes" => $expected_outcomes
        ];
    }
    public function activityOutcome($id)
    {
        $act_proj = ActivityProject::with(["activity"])->where('id', $id)->get();
        $expected_outcomes = ExpectedRevisedOutcome::where('is_strategy_outcome', '0')
            ->where('activity_id', $act_proj[0]->activity_id)
            ->get();
        return [
            "project" => $act_proj,
            "expected_outcomes" => $expected_outcomes
        ];
    }
    public function create(Request $request, $id, $type)
    {

        if ($type == 'activity') {
            $project = $this->activityProjectOutcome($id);
            // $data = $compound_data->expected_outcomes;
        } else if ($type == 'strategy') {

            $project = $this->strategyprojectOutcome($id);
        }
        // dd($project);
        return inertia("ExpectedOutcomeRevised/Create", [
            "type" => $type,
            "project" => $project
        ]);
    }
    public function strategyProjectOutcome($id)
    {
        return StrategyProject::with(["strategy"])->where('id', $id)->get();
        // $expected_outcomes = ExpectedRevisedOutcome::where('is_strategy_outcome', '1')->get();
        // return $strat_proj;
    }
    public function activityProjectOutcome($id)
    {
        return ActivityProject::with(["activity"])->where('id', $id)->get();
    }
    public function store(Request $request)
    {
        // if()
        // dd($request);
        // dd('/expected-outcomes-revised/' . $request->strategy_project_id . "/" . $request->type);
        // $type = $request->type;
        $request->validate([
            'description' => 'required',
            'is_strategy_outcome' => 'required'
        ]);
        $id = $request->strategy_project_id;
        if ($request->is_strategy_outcome == 0) {
            $id = $request->activity_project_id;
        }
        // dd($id);
        $expected_outcome = new ExpectedRevisedOutcome();
        $expected_outcome->description = $request->description;
        $expected_outcome->strategy_id = $request->strategy_id;
        $expected_outcome->activity_id = $request->activity_id;
        $expected_outcome->strategy_project_id = $request->strategy_project_id;
        $expected_outcome->activity_project_id = $request->activity_project_id;
        $expected_outcome->is_strategy_outcome = $request->is_strategy_outcome;
        $expected_outcome->save();
        return redirect('/expected-outcomes-revised/' . $id . "/" . $request->type);
        // if ($type == 'activity') {
        //     $this->storeActivityOutcome($request);
        //     // $data = $compound_data->expected_outcomes;
        // } else if ($type == 'strategy') {
        //     $this->storeStrategyOutcome($request);
        // }
    }
    protected function storeActivityOutcome(Request $request) {}
    protected function storeStrategyOutcome(Request $request) {}
    public function edit(Request $request, $id, $project_id,  $type)
    {
        $data = ExpectedRevisedOutcome::findOrFail($id);
        if ($type == 'activity') {
            $project = $this->activityProjectOutcome($project_id);
            // $data = $compound_data->expected_outcomes;
        } else if ($type == 'strategy') {
            $project = $this->strategyprojectOutcome($project_id);
        }
        return inertia("ExpectedOutcomeRevised/Create", [
            "editData" => $data,
            "type" => $type,
            "project" => $project
        ]);
    }
    public function update(Request $request)
    {
        $type = $request->type;
        $request->validate([
            'description' => 'required',
            'is_strategy_outcome' => 'required'

        ]);
        $expected_outcome = ExpectedRevisedOutcome::findOrFail($request->id);
        $expected_outcome->description = $request->description;
        $expected_outcome->is_strategy_outcome = $request->is_strategy_outcome;
        $expected_outcome->save();
        return redirect('/expected-outcomes-revised/' . $request->project_id . "/" . $type);
        // if ($type == 'activity') {
        //     $this->storeActivityOutcome($request);
        //     // $data = $compound_data->expected_outcomes;
        // } else if ($type == 'strategy') {
        //     $this->storeStrategyOutcome($request);
        // }
    }
    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect()->back()->with('deleted', 'Deleted Expected Outcome');
    }
    public function save_multiple(Request $request){
        $rows = $request->input('rows', []);

        $savedOutcomes = [];
        foreach ($rows as $row) {
            $savedOutcomes[] = ExpectedRevisedOutcome::create([
                'description' => $row['description'],
                'strategy_id' => $row['strategy_id'],
                'strategy_project_id' => $row['strategy_project_id'],
                'activity_id' => $row['activity_id'],
                'activity_project_id' => $row['activity_project_id'],
                'is_strategy_outcome' => $row['is_strategy_outcome'] ?? 0,
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => $savedOutcomes
        ]);
    }
}
