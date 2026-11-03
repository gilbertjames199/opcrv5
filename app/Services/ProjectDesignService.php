<?php

namespace App\Services;

use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use App\Models\CashDisbursementForecast;
use App\Models\BudgetRequirement;
use App\Models\CashDisbursementForecastAccount;
use App\Models\CurrentAipYear;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ProjectDesignService
{
    // protected $service;
    // public function __construct(ProjectDesignService $service)
    // {
    //     $this->service = $service;
    // }
    // public function generate(int $id)
    // {
    //     // move the logic from generateProjectDesign() here
    //     $this->generateProjectDesign($id);
    // }

    public function generate($id)
    {
        // TYPE EXAMPLE:
        // 1.) return request ->this should generate a return request amount
        // dd($request->input('type'));
        // 1️⃣ Check if a project design already exists
        $current_year = CurrentAipYear::first()->year;


        // 2️⃣ Proceed with cloning
        $result = $this->cloneRevisionPlan($id);

        if (isset($result['error'])) {
            return redirect()->back()->with('error', $result['error']);
        }

        return redirect()->back()->with('message', $result['message']);
    }

    // public function useProjectDesignService($id)
    // {
    //     return $this->service->generate($id);
    // }
    public function cloneRevisionPlan($id)
    {
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
            // GET SUM
            $implementationPlansTotal = $rev_plan->activityProject->sum(function ($ap) {
                return
                    $ap->ps_q1 + $ap->ps_q2 + $ap->ps_q3 + $ap->ps_q4 +
                    $ap->mooe_q1 + $ap->mooe_q2 + $ap->mooe_q3 + $ap->mooe_q4 +
                    $ap->co_q1 + $ap->co_q2 + $ap->co_q3 + $ap->co_q4 +
                    $ap->fe_q1 + $ap->fe_q2 + $ap->fe_q3 + $ap->fe_q4;
            });
            $budgetaryRequirementsTotal = $rev_plan->budget->sum('amount');

            // -----------------------------------------------------------
            // 1) CLONE MAIN REVISION PLAN
            // -----------------------------------------------------------
            $new_plan = $rev_plan->replicate([
                'id',
                'created_at',
                'updated_at'
            ]);

            $new_plan->type = $rev_plan->type;
            $new_plan->status = "-1";
            $year = Carbon::parse($rev_plan->date_start)->year;

            // conditional gad_version
            if ($year < 2027) {
                $new_plan->gad_version = "1";
            } else {
                $new_plan->gad_version = "2";
            }
            $new_plan->reference_profile_id = $rev_plan->id;
            $new_plan->created_at = now();
            $new_plan->updated_at = now();
            $new_plan->version = (int)$rev_plan->version + 1; // optional
            $new_plan->final = 0;
            $new_plan->budgetary_requirements_total = $budgetaryRequirementsTotal;
            $new_plan->implementation_plans_total = $implementationPlansTotal;
            $new_plan->return_request_type = "0";
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
    protected function generateCDF($new_plan, $rev_plan)
    {
        $newCDF  = CashDisbursementForecast::create([
            'revision_plan_id' => $new_plan->id,
            'version' => 1,
            'status' => 1
        ]);

        $budgetRequirements = BudgetRequirement::where('revision_plan_id', $new_plan->id)->get();

        foreach ($budgetRequirements as $br) {
            // ensure no duplicate for this BR + this new CDF
            $exists = CashDisbursementForecastAccount::where('budget_requirement_id', $br->id)
                ->where('cash_disbursement_forecast_id', $newCDF->id)
                ->exists();

            if (!$exists) {
                CashDisbursementForecastAccount::create([
                    'budget_requirement_id'            => $br->id,
                    'cash_disbursement_forecast_id'    => $newCDF->id,
                    'january'   => 0,
                    'february' => 0,
                    'march'    => 0,
                    'april'     => 0,
                    'may'      => 0,
                    'june'     => 0,
                    'july'      => 0,
                    'august'   => 0,
                    'september' => 0,
                    'october'   => 0,
                    'november' => 0,
                    'december' => 0
                ]);
            }
        }

        // ------------------------------------------------------
        // 4.) UPDATE NEW CDF ACCOUNTS BASED ON OLD LATEST VALID VERSION
        // ------------------------------------------------------

        // Step 4.1: determine the latest valid old CDF version
        $oldCDF = CashDisbursementForecast::where('revision_plan_id', $rev_plan->id)
            ->when(true, function ($q) {
                $q->orderByRaw("FIELD(status, 1, 0, -1)")->orderBy('version', 'DESC');
            })
            ->first();

        if ($oldCDF) {

            $oldAccounts = CashDisbursementForecastAccount::with('budgetRequirement')
                ->where('cash_disbursement_forecast_id', $oldCDF->id)
                ->get()
                ->keyBy(fn($item) => optional($item->budgetRequirement)->account_code);

            $newAccounts = CashDisbursementForecastAccount::with('budgetRequirement')
                ->where('cash_disbursement_forecast_id', $newCDF->id)
                ->get()
                ->keyBy(fn($item) => optional($item->budgetRequirement)->account_code);

            foreach ($newAccounts as $account_code => $newAcc) {

                if (!$account_code) continue; // skip missing BR relations

                if (isset($oldAccounts[$account_code])) {
                    $oldAcc = $oldAccounts[$account_code];

                    // Copy the monthly values
                    $newAcc->update([
                        'january'   => $oldAcc->january,
                        'february'  => $oldAcc->february,
                        'march'     => $oldAcc->march,
                        'april'     => $oldAcc->april,
                        'may'       => $oldAcc->may,
                        'june'      => $oldAcc->june,
                        'july'      => $oldAcc->july,
                        'august'    => $oldAcc->august,
                        'september' => $oldAcc->september,
                        'october'   => $oldAcc->october,
                        'november'  => $oldAcc->november,
                        'december'  => $oldAcc->december,
                    ]);
                }
            }
        }
        // Return the newly created row
        // return [$new];
    }
}
