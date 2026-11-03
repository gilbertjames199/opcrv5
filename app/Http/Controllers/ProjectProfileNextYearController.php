<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectProfileNextYearController extends Controller
{
    protected $rev_plan;
    public function __construct(RevisionPlan $rev_plan)
    {
        $this->rev_plan=$rev_plan;
    }

    public function index(Request $request, $sem_id){
        // dd($sem_id);
        $current = RevisionPlan::where('id', $sem_id)->first();
        // dd($current);
        $current_year = Carbon::parse($current->date_start)->year;

        $next_year = intval($current_year)+1;
        $existing =RevisionPlan::where('reference_profile_id', $sem_id)
                    ->whereYear('date_start', $next_year)
                    ->get();
        if(count($existing)>0){
            return redirect()->back()->with(
                'error',
                'A project profile has already been forwarded for next year ('.$next_year.')'
            );
        }else{
            // dd($request->input('type'));
            $result = $this->cloneRevisionPlan($sem_id, $request->input('type'), $next_year);

            if (isset($result['error'])) {
                return redirect()->back()->with('error', $result['error']);
            }

            return redirect()->back()->with('message', $result['message']);
        }
    }
    public function cloneRevisionPlan($id, $type, $nextyear)
    {
        // dd($id, $nextyear, $type);
        DB::beginTransaction();

        try {

            $rev_plan = RevisionPlan::with([
                'budget',
                'strategyProject',
                'activityProject',
                'activityProject.expected_output',
                'activityProject.expected_outcome',
                'teamPlans',
                'monitoringAndEvaluations',
                'riskManagements',
                'signatories',
                'hgdgScores',
                'cashDisbursementForecasts',
                'cashDisbursementForecasts.cashDisbursementForecastAccount'
            ])->findOrFail($id);

            // -----------------------------------------------------------
            // 1) CLONE MAIN REVISION PLAN
            // -----------------------------------------------------------
            $new_plan = $rev_plan->replicate([
                'id',
                'created_at',
                'updated_at'
            ]);

            $new_plan->type = 'p';
            $new_plan->status = "-1";
            $new_plan->gad_version = "2";
            $new_plan->reference_profile_id = $rev_plan->id;
            $new_plan->year_period = $nextyear;
            $new_plan->date_start = Carbon::parse($rev_plan->date_start)
                    ->setYear($nextyear)
                    ->format('Y-m-d');

            $new_plan->date_end = Carbon::parse($rev_plan->date_end)
                    ->setYear($nextyear)
                    ->format('Y-m-d');
            $new_plan->created_at = now();
            $new_plan->updated_at = now();
            $new_plan->version = (int)$rev_plan->version + 1; // optional
            $new_plan->final = 0;
            $new_plan->save();

            // Mapping arrays for child IDs
            $activityProjectMap = [];
            $strategyProjectMap = [];

            // -----------------------------------------------------------
            // 2) CLONE BUDGET REQUIREMENTS
            // -----------------------------------------------------------
            foreach ($rev_plan->budget as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 3) CLONE STRATEGY PROJECTS
            // -----------------------------------------------------------
            foreach ($rev_plan->strategyProject as $item) {

                $oldId = $item->id;

                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->project_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();

                $strategyProjectMap[$oldId] = $clone->id;
            }

            // -----------------------------------------------------------
            // 4) CLONE ACTIVITY PROJECTS
            // -----------------------------------------------------------
            foreach ($rev_plan->activityProject as $item) {

                $oldActivityId = $item->id;

                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->project_id = $new_plan->id;
                $clone->date_from = Carbon::parse($item->date_from)
                    ->setYear($nextyear)
                    ->format('Y-m-d');

                $clone->date_to = Carbon::parse($item->date_to)
                    ->setYear($nextyear)
                    ->format('Y-m-d');
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();

                $activityProjectMap[$oldActivityId] = $clone->id;

                // ---------------------------
                // CLONE EXPECTED OUTPUTS
                // ---------------------------
                foreach ($item->expected_output as $output) {
                    $outClone = $output->replicate(['id', 'created_at', 'updated_at']);
                    $outClone->activity_project_id = $clone->id;
                    $outClone->project_id = $new_plan->id;

                    // Remap strategy project if used
                    if ($output->strategy_project_id && isset($strategyProjectMap[$output->strategy_project_id])) {
                        $outClone->strategy_project_id = $strategyProjectMap[$output->strategy_project_id];
                    }

                    $outClone->created_at = now();
                    $outClone->updated_at = now();
                    $outClone->save();
                }

                // ---------------------------
                // CLONE EXPECTED OUTCOMES
                // ---------------------------
                foreach ($item->expected_outcome as $outcome) {
                    $ocClone = $outcome->replicate(['id', 'created_at', 'updated_at']);
                    $ocClone->activity_project_id = $clone->id;

                    if ($outcome->strategy_project_id && isset($strategyProjectMap[$outcome->strategy_project_id])) {
                        $ocClone->strategy_project_id = $strategyProjectMap[$outcome->strategy_project_id];
                    }

                    $ocClone->created_at = now();
                    $ocClone->updated_at = now();
                    $ocClone->save();
                }
            }

            // -----------------------------------------------------------
            // 5) CLONE TEAM PLANS
            // -----------------------------------------------------------
            foreach ($rev_plan->teamPlans as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 6) CLONE MONITORING & EVALUATION
            // -----------------------------------------------------------
            foreach ($rev_plan->monitoringAndEvaluations as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 7) CLONE RISK MANAGEMENTS
            // -----------------------------------------------------------
            foreach ($rev_plan->riskManagements as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 8) CLONE SIGNATORIES
            // -----------------------------------------------------------
            foreach ($rev_plan->signatories as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 9) CLONE HGDG SCORES
            // -----------------------------------------------------------
            foreach ($rev_plan->hgdgScores as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->idrevplan = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // CLONE CASH DISBURSEMENT FORECAST
            if ($rev_plan->type != 'p') {
                $this->generateCDF($new_plan, $rev_plan);
            }
            DB::commit();

            return [
                'message' => 'Revision Plan successfully cloned.',
                'new_plan_id' => $new_plan->id
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            return [
                'error' => $e->getMessage()
            ];
        }
    }

    public function last_year(Request $request, $sem_id){
        $current = RevisionPlan::where('id', $sem_id)->first();
        // dd($current);
        $current_year = Carbon::parse($current->date_start)->year;

        $next_year = intval($current_year)-1;
        $existing =RevisionPlan::where('reference_profile_id', $sem_id)
                    ->whereYear('date_start', $next_year)
                    ->get();
        if(count($existing)>0){
            return redirect()->back()->with(
                'error',
                'A project profile has already been forwarded for last year ('.$next_year.')'
            );
        }else{
            // dd($request->input('type'));
            $result = $this->cloneRevisionPlan($sem_id, $request->input('type'), $next_year);

            if (isset($result['error'])) {
                return redirect()->back()->with('error', $result['error']);
            }

            return redirect()->back()->with('message', $result['message']);
        }
    }
}
