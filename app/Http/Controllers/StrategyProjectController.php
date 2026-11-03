<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityProject;
use App\Models\RevisionPlan;
use App\Models\StrategyProject;
use App\Models\Strategy;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;

class StrategyProjectController extends Controller
{
    //MODELS
    protected $strat;
    protected $act;
    public function __construct(StrategyProject $strat, ActivityProject $act)
    {
        $this->strat = $strat;
        $this->act = $act;
    }
    public function index(Request $request, $idrevplan)
    {

        $revision_plan = RevisionPlan::find($idrevplan);
        if($revision_plan->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access the workplan module. The project profile is already '.$status_words[$revision_plan->status].'.');
        }
        // dd($revision_plan);

        // NOTE: For each change made in this block, ensure that the corresponding updates are reflected in the refresh function within this controller.
        // dd(Strategy::where('idpaps', $revision_plan->idpaps)->get());
        // dd($revision_plan->idpaps);
        // dd($revision_plan);
        $scope = $revision_plan->scope;
        // dd($scope);
        if ($scope == 'GAS') {
            // return redirect('/revision/streamlined/create/0?source=direct&goto="workplan"&idrevplan=' . $idrevplan);
            $data = Strategy::with([
                'strategyProject' => function ($query) use ($request) {
                    $query->where('project_id', $request->idrevplan);
                    // ->where('is_active', '1');
                },
                'activity',
                'activity.activityProject' => function ($q) use ($request) {
                    $q->where('project_id', $request->idrevplan);
                    // ->where('is_active', '1');
                },
                'activity.activityProject.referenceActivityProject'
            ])
                // ->where('idpaps', $revision_plan->idpaps)
                ->whereHas('strategyProject', function ($query) use ($request) {
                    $query->where('project_id', $request->idrevplan)
                    ;
                })
                ->get()
                ->map(function ($item) {

                    $item->activity = $item->activity->map(function ($activity) {
                        $activity->is_selected = $activity->activityProject->count() > 0;
                        $act_id = $activity->activityProject->count() > 0 ? $activity->activityProject[0]->id : null;
                        $ps_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q1 > 0 ? $activity->activityProject[0]->ps_q1 : 0) : 0;
                        $ps_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q2 > 0 ? $activity->activityProject[0]->ps_q2 : 0) : 0;
                        $ps_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q3 > 0 ? $activity->activityProject[0]->ps_q3 : 0) : 0;
                        $ps_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q4 > 0 ? $activity->activityProject[0]->ps_q4 : 0) : 0;
                        $mooe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q1 > 0 ? $activity->activityProject[0]->mooe_q1 : 0) : 0;
                        $mooe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q2 > 0 ? $activity->activityProject[0]->mooe_q2 : 0) : 0;
                        $mooe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q3 > 0 ? $activity->activityProject[0]->mooe_q3 : 0) : 0;
                        $mooe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q4 > 0 ? $activity->activityProject[0]->mooe_q4 : 0) : 0;
                        $co_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q1 > 0 ? $activity->activityProject[0]->co_q1 : 0) : 0;
                        $co_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q2 > 0 ? $activity->activityProject[0]->co_q2 : 0) : 0;
                        $co_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q3 > 0 ? $activity->activityProject[0]->co_q3 : 0) : 0;
                        $co_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q4 > 0 ? $activity->activityProject[0]->co_q4 : 0) : 0;
                        $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
                        $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                        $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
                        // dd($activity->activityProject);

                        $fe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q1 > 0 ? $activity->activityProject[0]->fe_q1 : 0) : 0;
                        $fe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q2 > 0 ? $activity->activityProject[0]->fe_q2 : 0) : 0;
                        $fe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q3 > 0 ? $activity->activityProject[0]->fe_q3 : 0) : 0;
                        $fe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q4 > 0 ? $activity->activityProject[0]->fe_q4 : 0) : 0;
                        $fe_total = floatval($fe_q1) + floatval($fe_q2) + floatval($fe_q3) + floatval($fe_q4);

                        // return [
                        //     "id" => $activity->id,
                        //     "description" => $activity->description,
                        //     "target_indicator" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->target_indicator : null,
                        //     "activity_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->activity_id : null,
                        //     "project_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->project_id : null,
                        //     "ps_q1" => $ps_q1,
                        //     "ps_q2" => $ps_q2,
                        //     "ps_q3" => $ps_q3,
                        //     "ps_q4" => $ps_q4,
                        //     "ps_total" => $ps_total,
                        //     "mooe_q1" => $mooe_q1,
                        //     "mooe_q2" => $mooe_q2,
                        //     "mooe_q3" => $mooe_q3,
                        //     "mooe_q4" => $mooe_q4,
                        //     "mooe_total" => $mooe_total,
                        //     "co_q1" => $co_q1,
                        //     "co_q2" => $co_q2,
                        //     "co_q3" => $co_q3,
                        //     "co_q4" => $co_q4,

                        //     "co_total" => $co_total,
                        //     "gad_issue" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->gad_issue : null,
                        //     "ccet_code" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->ccet_code : null,
                        //     "responsible" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->responsible : null,
                        //     "activityProject" => $activity->activityProject,
                        //     "activity" => $activity->activity,
                        //     "finance_visible" =>   0,
                        //     "is_active" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->is_active : 0,
                        // ];
                        $activity->is_selected = $activity->activityProject->count() > 0;
                        return [
                            "id" => $activity->id,
                            "description" => $activity->description,
                            "date_from" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_from : null,
                            "date_to" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_to : null,
                            "target_indicator" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->target_indicator : null,
                            "activity_id" => $act_id,
                            "project_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->project_id : null,
                            "ps_q1" => $ps_q1,
                            "ps_q2" => $ps_q2,
                            "ps_q3" => $ps_q3,
                            "ps_q4" => $ps_q4,
                            "ps_total" => $ps_total,
                            "mooe_q1" => $mooe_q1,
                            "mooe_q2" => $mooe_q2,
                            "mooe_q3" => $mooe_q3,
                            "mooe_q4" => $mooe_q4,
                            "mooe_total" => $mooe_total,
                            "co_q1" => $co_q1,
                            "co_q2" => $co_q2,
                            "co_q3" => $co_q3,
                            "co_q4" => $co_q4,
                            "co_total" => $co_total,
                            "fe_q1" => $fe_q1,
                            "fe_q2" => $fe_q2,
                            "fe_q3" => $fe_q3,
                            "fe_q4" => $fe_q4,
                            "fe_total" => $fe_total,
                            "gad_issue" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->gad_issue : null,
                            "ccet_code" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->ccet_code : null,
                            "responsible" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->responsible : null,
                            "activityProject" => $activity->activityProject,
                            "activity" => $activity->activity,
                            "finance_visible" =>   0,
                            "is_active" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->is_active : 0,
                        ];
                    });
                    $ps_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q1 > 0 ? $item->strategyProject[0]->ps_q1 : 0) : 0;
                    $ps_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q2 > 0 ? $item->strategyProject[0]->ps_q2 : 0) : 0;
                    $ps_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q3 > 0 ? $item->strategyProject[0]->ps_q3 : 0) : 0;
                    $ps_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q4 > 0 ? $item->strategyProject[0]->ps_q4 : 0) : 0;
                    $mooe_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q1 > 0 ? $item->strategyProject[0]->mooe_q1 : 0) : 0;
                    $mooe_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q2 > 0 ? $item->strategyProject[0]->mooe_q2 : 0) : 0;
                    $mooe_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q3 > 0 ? $item->strategyProject[0]->mooe_q3 : 0) : 0;
                    $mooe_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q4 > 0 ? $item->strategyProject[0]->mooe_q4 : 0) : 0;
                    $co_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q1 > 0 ? $item->strategyProject[0]->co_q1 : 0) : 0;
                    $co_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q2 > 0 ? $item->strategyProject[0]->co_q2 : 0) : 0;
                    $co_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q3 > 0 ? $item->strategyProject[0]->co_q3 : 0) : 0;
                    $co_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q4 > 0 ? $item->strategyProject[0]->co_q4 : 0) : 0;
                    $fe_01 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_01 > 0 ? $item->strategyProject[0]->fe_01 : 0) : 0;
                    $fe_02 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_02 > 0 ? $item->strategyProject[0]->fe_02 : 0) : 0;
                    $fe_03 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_03 > 0 ? $item->strategyProject[0]->fe_03 : 0) : 0;
                    $fe_04 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_04 > 0 ? $item->strategyProject[0]->fe_04 : 0) : 0;
                    $fe_total = floatval($fe_01) + floatval($fe_02) + floatval($fe_03) + floatval($fe_04);
                    $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
                    $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                    $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);


                    $strat_id = $item->strategyProject->count() > 0 ? $item->strategyProject[0]->id : null;
                    $show_act = 1;
                    return [
                        "id" => $item->id,
                        "description" => $item->description,
                        "date_from" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->date_from : null,
                        "date_to" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->date_to : null,
                        "target_indicator" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->target_indicator : null,
                        "strategy_id" => $strat_id,
                        "project_id" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->project_id : null,
                        "date_from" => $item->strategyProject->count() > 0
                            ? ($item->strategyProject[0]->date_from
                                ? $item->strategyProject[0]->date_from
                                : null)
                            : null,
                        "date_to" => $item->strategyProject->count() > 0
                            ? ($item->strategyProject[0]->date_to
                                ? Carbon::parse($item->strategyProject[0]->date_to)->format('Y-m-d')
                                : null)
                            : null,
                        "ps_q1" => $ps_q1,
                        "ps_q2" => $ps_q2,
                        "ps_q3" => $ps_q3,
                        "ps_q4" => $ps_q4,
                        "ps_total" => $ps_total,
                        "mooe_q1" => $mooe_q1,
                        "mooe_q2" => $mooe_q2,
                        "mooe_q3" => $mooe_q3,
                        "mooe_q4" => $mooe_q4,
                        "mooe_total" => $mooe_total,
                        "co_q1" => $co_q1,
                        "co_q2" => $co_q2,
                        "co_q3" => $co_q3,
                        "co_q4" => $co_q4,
                        "co_total" => $co_total,
                        "fe_01" => $fe_01,
                        "fe_02" => $fe_02,
                        "fe_03" => $fe_03,
                        "fe_04" => $fe_04,
                        "fe_total" => $fe_total,
                        "gad_issue" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->gad_issue : null,
                        "ccet_code" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->ccet_code : null,
                        "responsible" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->responsible : null,
                        "strategyProject" => $item->strategyProject,
                        "activity" => $item->activity,
                        "finance_visible" => 0,
                        "is_active" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->is_active : 0,
                        "activity_visible" => $show_act,
                        // "reference_activity_project_id"=> $item->activity->referenceProjectId
                        // "expected_outcome" => $item->expected_outcome,
                        // "expected_output" => $item->expected_output,
                    ];
                });
            // dd($data);
                // dd($data, $this->getData($request, $revision_plan, $idrevplan));
            if(count($data)<1){
                $data = $this->getData($request, $revision_plan, $idrevplan);
                // dd($data);
            }
        } else {
            $data = $this->getData($request, $revision_plan, $idrevplan);
        }

        // dd($data);
        // dd($revision_plan);
        return inertia('StrategyProject/Index', [
            'data' => $data,
            'idrevplan' => $idrevplan,
            'revision_plan' => $revision_plan
        ]);
        // $strat_p = $this->strat->where('project_id', $idrevplan)->get();
        // dd($strategy);
        // $activity = $this->act->all();
        // return view('strategry.index', compact('strategry', 'activity'));
    }
    public function getData(Request $request, $revision_plan, $idrevplan)
    {
        $strat_base = 0;
        if ($revision_plan) {
            $strat_base = intval($revision_plan->is_strategy_based);
        }
        // dd($revision_plan);
        $strat= Strategy::with([
            'strategyProject' => function ($query) use ($request) {
                $query->where('project_id', $request->idrevplan);
                // ->where('is_active', '1');
            },
            'expected_output',
            'expected_outcome',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activity',
            'activity.activityProject' => function ($q) use ($request) {
                $q->where('project_id', $request->idrevplan);
                // ->where('is_active', '1');
            },
            'activity.activityProject.expected_output',
            'activity.activityProject.expected_outcome',
        ])
            ->where('idpaps', $revision_plan->idpaps)
            ->get()
            ->map(function ($item) use ($strat_base, $idrevplan) {
                // dd($item, 'expected output');
                $strat_id = $item->strategyProject->count() > 0 ? $item->strategyProject[0]->id : null;
                $show_act = 1;
                if ($strat_base == 1) {
                    // if()
                    $show_act = 0;
                    if ($item->strategyProject->count() > 0) {
                        // dd($item->strategyProject);
                    } else {
                        $sp = new StrategyProject();
                        $sp->strategy_id = $item->id;
                        $sp->project_id = $idrevplan;
                        // $sp->created_at = Carbon::now();
                        // $sp->updated_at = Carbon::now();
                        $sp->is_active = "0";
                        $sp->save();
                        $strat_id = $sp->id;
                        // dd("nakahimo");
                    }
                }

                $item->activity = $item->activity->map(function ($activity) use ($strat_base, $idrevplan) {
                    $act_id = $activity->activityProject->count() > 0 ? $activity->activityProject[0]->id : null;
                    // dd($activity->activityProject);

                    if ($strat_base == 0) {
                        // if()

                        if ($activity->activityProject->count() > 0) {
                            // dd($item->strategyProject);
                        } else {
                            $ap = new ActivityProject();
                            $ap->activity_id = $activity->id;
                            $ap->project_id = $idrevplan;
                            // $sp->created_at = Carbon::now();
                            // $sp->updated_at = Carbon::now();
                            $ap->is_active = "0";
                            $ap->save();
                            $act_id = $ap->id;
                            // dd($act_id);
                            // dd("nakahimo");
                        }
                    }
                    $activity->is_selected = $activity->activityProject->count() > 0;
                    $ps_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q1 > 0 ? $activity->activityProject[0]->ps_q1 : 0) : 0;
                    $ps_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q2 > 0 ? $activity->activityProject[0]->ps_q2 : 0) : 0;
                    $ps_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q3 > 0 ? $activity->activityProject[0]->ps_q3 : 0) : 0;
                    $ps_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q4 > 0 ? $activity->activityProject[0]->ps_q4 : 0) : 0;
                    $mooe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q1 > 0 ? $activity->activityProject[0]->mooe_q1 : 0) : 0;
                    $mooe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q2 > 0 ? $activity->activityProject[0]->mooe_q2 : 0) : 0;
                    $mooe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q3 > 0 ? $activity->activityProject[0]->mooe_q3 : 0) : 0;
                    $mooe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q4 > 0 ? $activity->activityProject[0]->mooe_q4 : 0) : 0;
                    $co_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q1 > 0 ? $activity->activityProject[0]->co_q1 : 0) : 0;
                    $co_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q2 > 0 ? $activity->activityProject[0]->co_q2 : 0) : 0;
                    $co_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q3 > 0 ? $activity->activityProject[0]->co_q3 : 0) : 0;
                    $co_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q4 > 0 ? $activity->activityProject[0]->co_q4 : 0) : 0;
                    $fe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q1 > 0 ? $activity->activityProject[0]->fe_q1 : 0) : 0;
                    $fe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q2 > 0 ? $activity->activityProject[0]->fe_q2 : 0) : 0;
                    $fe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q3 > 0 ? $activity->activityProject[0]->fe_q3 : 0) : 0;
                    $fe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q4 > 0 ? $activity->activityProject[0]->fe_q4 : 0) : 0;
                    $fe_total = floatval($fe_q1) + floatval($fe_q2) + floatval($fe_q3) + floatval($fe_q4);
                    $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
                    $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                    $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
                    // dd($activity->activityProject);
                    return [
                        "id" => $activity->id,
                        "description" => $activity->description,
                        "date_from" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_from : null,
                        "date_to" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_to : null,
                        "target_indicator" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->target_indicator : null,
                        "activity_id" => $act_id,
                        "project_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->project_id : null,
                        "ps_q1" => $ps_q1,
                        "ps_q2" => $ps_q2,
                        "ps_q3" => $ps_q3,
                        "ps_q4" => $ps_q4,
                        "ps_total" => $ps_total,
                        "mooe_q1" => $mooe_q1,
                        "mooe_q2" => $mooe_q2,
                        "mooe_q3" => $mooe_q3,
                        "mooe_q4" => $mooe_q4,
                        "mooe_total" => $mooe_total,
                        "co_q1" => $co_q1,
                        "co_q2" => $co_q2,
                        "co_q3" => $co_q3,
                        "co_q4" => $co_q4,
                        "co_total" => $co_total,
                        "fe_q1" => $fe_q1,
                        "fe_q2" => $fe_q2,
                        "fe_q3" => $fe_q3,
                        "fe_q4" => $fe_q4,
                        "fe_total" => $fe_total,
                        "gad_issue" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->gad_issue : null,
                        "ccet_code" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->ccet_code : null,
                        "responsible" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->responsible : null,
                        "activityProject" => $activity->activityProject,
                        "activity" => $activity->activity,
                        "finance_visible" =>   0,
                        "is_active" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->is_active : 0,
                    ];
                });


                $ps_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q1 > 0 ? $item->strategyProject[0]->ps_q1 : 0) : 0;
                $ps_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q2 > 0 ? $item->strategyProject[0]->ps_q2 : 0) : 0;
                $ps_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q3 > 0 ? $item->strategyProject[0]->ps_q3 : 0) : 0;
                $ps_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q4 > 0 ? $item->strategyProject[0]->ps_q4 : 0) : 0;
                $mooe_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q1 > 0 ? $item->strategyProject[0]->mooe_q1 : 0) : 0;
                $mooe_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q2 > 0 ? $item->strategyProject[0]->mooe_q2 : 0) : 0;
                $mooe_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q3 > 0 ? $item->strategyProject[0]->mooe_q3 : 0) : 0;
                $mooe_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q4 > 0 ? $item->strategyProject[0]->mooe_q4 : 0) : 0;
                $co_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q1 > 0 ? $item->strategyProject[0]->co_q1 : 0) : 0;
                $co_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q2 > 0 ? $item->strategyProject[0]->co_q2 : 0) : 0;
                $co_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q3 > 0 ? $item->strategyProject[0]->co_q3 : 0) : 0;
                $co_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q4 > 0 ? $item->strategyProject[0]->co_q4 : 0) : 0;
                $fe_01 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_01 > 0 ? $item->strategyProject[0]->fe_01 : 0) : 0;
                $fe_02 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_02 > 0 ? $item->strategyProject[0]->fe_02 : 0) : 0;
                $fe_03 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_03 > 0 ? $item->strategyProject[0]->fe_03 : 0) : 0;
                $fe_04 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_04 > 0 ? $item->strategyProject[0]->fe_04 : 0) : 0;
                $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
                $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
                $fe_total = floatval($fe_01) + floatval($fe_02) + floatval($fe_03) + floatval($fe_04);
                // dd($item->strategyProject[0]);
                // dd($item);

                return [
                    "id" => $item->id,
                    "description" => $item->description,
                    "date_from" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->date_from : null,
                    "date_to" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->date_to : null,
                    "target_indicator" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->target_indicator : null,
                    "strategy_id" => $strat_id,
                    "project_id" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->project_id : null,
                    "date_from" => $item->strategyProject->count() > 0
                        ? ($item->strategyProject[0]->date_from
                            ? $item->strategyProject[0]->date_from
                            : null)
                        : null,
                    "date_to" => $item->strategyProject->count() > 0
                        ? ($item->strategyProject[0]->date_to
                            ? Carbon::parse($item->strategyProject[0]->date_to)->format('Y-m-d')
                            : null)
                        : null,
                    "ps_q1" => $ps_q1,
                    "ps_q2" => $ps_q2,
                    "ps_q3" => $ps_q3,
                    "ps_q4" => $ps_q4,
                    "ps_total" => $ps_total,
                    "mooe_q1" => $mooe_q1,
                    "mooe_q2" => $mooe_q2,
                    "mooe_q3" => $mooe_q3,
                    "mooe_q4" => $mooe_q4,
                    "mooe_total" => $mooe_total,
                    "co_q1" => $co_q1,
                    "co_q2" => $co_q2,
                    "co_q3" => $co_q3,
                    "co_q4" => $co_q4,
                    "co_total" => $co_total,
                    "fe_01" => $fe_01,
                    "fe_02" => $fe_02,
                    "fe_03" => $fe_03,
                    "fe_04" => $fe_04,
                    "fe_total" => $fe_total,
                    "gad_issue" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->gad_issue : null,
                    "ccet_code" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->ccet_code : null,
                    "responsible" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->responsible : null,
                    "strategyProject" => $item->strategyProject,
                    "activity" => $item->activity,
                    "finance_visible" => 0,
                    "is_active" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->is_active : 0,
                    "activity_visible" => $show_act,
                    // "expected_outcome" => $item->expected_outcome,
                    // "expected_output" => $item->expected_output,
                ];
            });
            // dd($strat,'strat');
        return $strat;
    }
    public function refresh(Request $request, $idrevplan)
    {
        $revision_plan = RevisionPlan::find($idrevplan);
        return $this->getData($request, $revision_plan, $idrevplan);
        // return  Strategy::with([
        //     'strategyProject' => function ($query) use ($request) {
        //         $query->where('project_id', $request->idrevplan);
        //         // ->where('is_active', '1');
        //     },
        //     'activity',
        //     'activity.activityProject' => function ($q) use ($request) {
        //         $q->where('project_id', $request->idrevplan);
        //         // ->where('is_active', '1');
        //     }
        // ])
        //     ->where('idpaps', $revision_plan->idpaps)
        //     ->get()
        //     ->map(function ($item) {
        //         $item->activity = $item->activity->map(function ($activity) {
        //             $activity->is_selected = $activity->activityProject->count() > 0;
        //             $ps_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q1 > 0 ? $activity->activityProject[0]->ps_q1 : 0) : 0;
        //             $ps_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q2 > 0 ? $activity->activityProject[0]->ps_q2 : 0) : 0;
        //             $ps_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q3 > 0 ? $activity->activityProject[0]->ps_q3 : 0) : 0;
        //             $ps_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q4 > 0 ? $activity->activityProject[0]->ps_q4 : 0) : 0;
        //             $mooe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q1 > 0 ? $activity->activityProject[0]->mooe_q1 : 0) : 0;
        //             $mooe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q2 > 0 ? $activity->activityProject[0]->mooe_q2 : 0) : 0;
        //             $mooe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q3 > 0 ? $activity->activityProject[0]->mooe_q3 : 0) : 0;
        //             $mooe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q4 > 0 ? $activity->activityProject[0]->mooe_q4 : 0) : 0;
        //             $co_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q1 > 0 ? $activity->activityProject[0]->co_q1 : 0) : 0;
        //             $co_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q2 > 0 ? $activity->activityProject[0]->co_q2 : 0) : 0;
        //             $co_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q3 > 0 ? $activity->activityProject[0]->co_q3 : 0) : 0;
        //             $co_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q4 > 0 ? $activity->activityProject[0]->co_q4 : 0) : 0;
        //             $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
        //             $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
        //             $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
        //             // dd($activity->activityProject);
        //             return [
        //                 "id" => $activity->id,
        //                 "description" => $activity->description,
        //                 "target_indicator" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->target_indicator : null,
        //                 "activity_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->activity_id : null,
        //                 "project_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->project_id : null,
        //                 "ps_q1" => $ps_q1,
        //                 "ps_q2" => $ps_q2,
        //                 "ps_q3" => $ps_q3,
        //                 "ps_q4" => $ps_q4,
        //                 "ps_total" => $ps_total,
        //                 "mooe_q1" => $mooe_q1,
        //                 "mooe_q2" => $mooe_q2,
        //                 "mooe_q3" => $mooe_q3,
        //                 "mooe_q4" => $mooe_q4,
        //                 "mooe_total" => $mooe_total,
        //                 "co_q1" => $co_q1,
        //                 "co_q2" => $co_q2,
        //                 "co_q3" => $co_q3,
        //                 "co_q4" => $co_q4,
        //                 "co_total" => $co_total,
        //                 "gad_issue" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->ps_q2 : null,
        //                 "ccet_code" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->ps_q2 : null,
        //                 "responsible" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->ps_q2 : null,
        //                 "activityProject" => $activity->activityProject,
        //                 "activity" => $activity->activity,
        //                 "finance_visible" =>   0,
        //                 "is_active" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->is_active : 0,
        //             ];
        //         });
        //         $ps_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q1 > 0 ? $item->strategyProject[0]->ps_q1 : 0) : 0;
        //         $ps_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q2 > 0 ? $item->strategyProject[0]->ps_q2 : 0) : 0;
        //         $ps_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q3 > 0 ? $item->strategyProject[0]->ps_q3 : 0) : 0;
        //         $ps_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q4 > 0 ? $item->strategyProject[0]->ps_q4 : 0) : 0;
        //         $mooe_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q1 > 0 ? $item->strategyProject[0]->mooe_q1 : 0) : 0;
        //         $mooe_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q2 > 0 ? $item->strategyProject[0]->mooe_q2 : 0) : 0;
        //         $mooe_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q3 > 0 ? $item->strategyProject[0]->mooe_q3 : 0) : 0;
        //         $mooe_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q4 > 0 ? $item->strategyProject[0]->mooe_q4 : 0) : 0;
        //         $co_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q1 > 0 ? $item->strategyProject[0]->co_q1 : 0) : 0;
        //         $co_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q2 > 0 ? $item->strategyProject[0]->co_q2 : 0) : 0;
        //         $co_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q3 > 0 ? $item->strategyProject[0]->co_q3 : 0) : 0;
        //         $co_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q4 > 0 ? $item->strategyProject[0]->co_q4 : 0) : 0;
        //         $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
        //         $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
        //         $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
        //         return [
        //             "id" => $item->id,
        //             "description" => $item->description,
        //             "target_indicator" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->target_indicator : null,
        //             "strategy_id" => $item->id,
        //             "project_id" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->project_id : null,
        //             "date_from" => $item->strategyProject->count() > 0
        //                 ? ($item->strategyProject[0]->date_from
        //                     ? $item->strategyProject[0]->date_from
        //                     : null)
        //                 : null,
        //             "date_to" => $item->strategyProject->count() > 0
        //                 ? ($item->strategyProject[0]->date_to
        //                     ? Carbon::parse($item->strategyProject[0]->date_to)->format('Y-m-d')
        //                     : null)
        //                 : null,
        //             "ps_q1" => $ps_q1,
        //             "ps_q2" => $ps_q2,
        //             "ps_q3" => $ps_q3,
        //             "ps_q4" => $ps_q4,
        //             "ps_total" => $ps_total,
        //             "mooe_q1" => $mooe_q1,
        //             "mooe_q2" => $mooe_q2,
        //             "mooe_q3" => $mooe_q3,
        //             "mooe_q4" => $mooe_q4,
        //             "mooe_total" => $mooe_total,
        //             "co_q1" => $co_q1,
        //             "co_q2" => $co_q2,
        //             "co_q3" => $co_q3,
        //             "co_q4" => $co_q4,
        //             "co_total" => $co_total,
        //             "gad_issue" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->gad_issue : null,
        //             "ccet_code" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->ccet_code : null,
        //             "responsible" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->responsible : null,
        //             "strategyProject" => $item->strategyProject,
        //             "activity" => $item->activity,
        //             "finance_visible" => 0,
        //             "is_active" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->is_active : 0,
        //             "activity_visible" => 0,

        //         ];
        //     });
    }
    public function createStrategy(Request $request)
    {
        $found = StrategyProject::where('strategy_id', $request->id)
            ->where('project_id', $request->idrevplan)
            ->first();
        // dd($request);
        if ($found) {
            if ($request->type == 'update') {
                $found->target_indicator = $request->target_indicator;
                $found->date_from = $request->date_from;
                $found->date_to = $request->date_to;
                $found->ps_q1 = $request->ps_q1;
                $found->ps_q2 = $request->ps_q2;
                $found->ps_q3 = $request->ps_q3;
                $found->ps_q4 = $request->ps_q4;
                $found->mooe_q1 = $request->mooe_q1;
                $found->mooe_q2 = $request->mooe_q2;
                $found->mooe_q3 = $request->mooe_q3;
                $found->mooe_q4 = $request->mooe_q4;
                $found->co_q1 = $request->co_q1;
                $found->co_q2 = $request->co_q2;
                $found->co_q3 = $request->co_q3;
                $found->co_q4 = $request->co_q4;
                $found->gad_issue = $request->gad_issue;
                $found->ccet_code = $request->ccet_code;
                $found->responsible = $request->responsible;
            } else {
                // $found->strategy_id = $request->strategy_id;
            }
            $found->is_active = '1';
            $found->save();
        } else {
            StrategyProject::create([
                'strategy_id' => $request->id,
                'project_id' => $request->idrevplan
            ]);
        }
        $this->updateActivitiesStatus($request->id, $request->idrevplan, 1, 'create');

        return response()->json(['message' => 'Strategy created successfully']);
    }

    public function deleteStrategy(Request $request)
    {
        $found = StrategyProject::where('strategy_id', $request->id)
            ->where('project_id', $request->idrevplan)
            ->first();
        if ($found) {
            $found->is_active = '0';
            $found->save();
            $this->updateActivitiesStatus($request->id, $request->idrevplan, '0', 'delete');
        }

        return response()->json(['message' => 'Strategy deleted successfully']);
    }
    private function updateActivitiesStatus($strategyId, $projectId, $status, $type)
    {
        //  1. Select all activities linked to the strategy
        $activities = Activity::where('strategy_id', $strategyId)->get();

        foreach ($activities as $activity) {
            //  2. Try to find existing activity_project
            $activityProject = ActivityProject::where('activity_id', $activity->id)
                ->where('project_id', $projectId)
                ->first();

            if ($activityProject) {
                //  3. If found → update active_status to 1

                $activityProject->is_active = $status;
                $activityProject->save();
                // dd($activityProject);
            } else {
                //  4. If not found → create new activity_project
                if ($type == 'create') {
                    ActivityProject::create([
                        'activity_id' => $activity->id,
                        'project_id' => $projectId,
                        'active_status' => 1
                    ]);
                }
            }
        }
    }
    public function strategyImplementation(Request $request, $idrevplan)
    {
        $strategy = StrategyProject::with(['strategy'])
            ->where('project_id', $idrevplan)
            ->where('is_active', '1')
            ->get();
        $revision_plan = RevisionPlan::findOrFail($idrevplan);
        // return response()->json($strategy);
        return inertia('ImplementationPlan/Strategy/Index', [
            'data' => $strategy,
            'idrevplan' => $idrevplan,
            'revision_plan' => $revision_plan
        ]);
    }
    // public function create(Request $request)
    // {
    //     $strategry = $this->strat->all();
    //     $activity = $this->act->all();
    //     return view('strategry.index', compact('strategry', 'activity'));
    // }
    // public function store(Request $request)
    // {
    //     $strategry = $this->strat->all();
    //     $activity = $this->act->all();
    //     return view('strategry.index', compact('strategry', 'activity'));
    // }
    public function edit(Request $request, $strat_id)
    {
        $strategyProject = StrategyProject::where('id', $strat_id)->first();
        $revision_plan = RevisionPlan::findOrFail($strategyProject->project_id);
        $strategy = Strategy::where('id', $strategyProject->strategy_id)->first();
        return inertia('ImplementationPlan/Strategy/Create', [
            'editData' => $strategyProject,
            'strategy' => $strategy,
            'revision_plan' => $revision_plan
        ]);
    }
    // public function update(Request $request)
    // {
    //     $strategry = $this->strat->all();
    //     $activity = $this->act->all();
    //     return view('strategry.index', compact('strategry', 'activity'));
    // }
    // public function destroy(Request $request)
    // {
    //     $strategry = $this->strat->all();
    //     $activity = $this->act->all();
    //     return view('strategry.index', compact('strategry', 'activity'));
    // }
}
