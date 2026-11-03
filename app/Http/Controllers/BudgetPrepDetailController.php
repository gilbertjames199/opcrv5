<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RevisionPlan;
use App\Models\BudgetPrepDetail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class BudgetPrepDetailController extends Controller
{
    public function syncBudgetPreparationData($revisionPlanId)
    {
        $revisionPlan = RevisionPlan::findOrFail($revisionPlanId);
        // dd($revisionPlan->reference_profile_id); // Debugging line to inspect the RevisionPlan object
        // Fetch approved LB2 budget preparation data from the API.
        $url = 'https://dev.davaodeoro.gov.ph/api/reports/lb2/approved';
        $ref_plan_id = $revisionPlan->reference_profile_id;
        // $response = Http::timeout(60)
        //     ->acceptJson()
        //     ->get($url, [
        //         'revision_plan_id' => $revisionPlanId->reference_profile_id,
        //     ]);

        $response = Http::get(
            $url,
            [
                'revision_plan_id' => $ref_plan_id,
            ]
        );
        // dd($response->json()); // Debugging line to inspect the API response structure
        if (!$response->successful()) {
            return redirect()->back()->with('error', 'Failed to retrieve approved budget preparation data from the API.');
            // return response()->json([
            //     'success' => false,
            //     'message' => 'Failed to retrieve approved budget preparation data.',
            //     'http_status' => $response->status(),
            // ], 502);
        }

        $data = $response->json();
        // dd($data); // Debugging line to inspect the API response structure
        // Handle either a single object or an array of objects.
        if (isset($data['categories'])) {
            $preparations = [$data];
        } elseif (isset($data['data']['categories'])) {
            $preparations = [$data['data']];
        } elseif (isset($data['data']) && is_array($data['data'])) {
            $preparations = $data['data'];
        } else {
            $preparations = $data;
        }

        if (!is_array($preparations)) {
            return redirect()->back()->with('error', 'Invalid budget preparation API response structure.');
            // return response()->json([
            //     'success' => false,
            //     'message' => 'Invalid budget preparation API response.',
            // ], 502);
        }

        $referenceProfileId = $revisionPlan->reference_profile_id;

        $rows = [];
        $budgetPrepdata = BudgetPrepDetail::where('revision_plan_id', $revisionPlanId)->count();

        if ($budgetPrepdata > 0) {
            BudgetPrepDetail::where(
                'revision_plan_id',
                $revisionPlanId
            )->delete();
            // return redirect()->back()->with('message','Already generated'); // Do not proceed with the foreach
        }

        // return $preparations; // Debugging line to inspect the preparations array

        $preparations = $preparations['projects'] ?? [];

        foreach ($preparations as $preparation) {
            $preparationId = $preparation['id'] ?? null;

            foreach ($preparation['categories'] ?? [] as $category) {
                foreach ($category['rows'] ?? [] as $row) {
                    $rows[] = [
                        'budget_preparation_id' =>
                            $row['budget_preparation_id'] ?? $preparationId,

                        'revision_plan_id' => $revisionPlanId,
                        'reference_profile_id' => $referenceProfileId,

                        'object_of_expenditure' =>
                            $row['object_of_expenditure'] ?? null,

                        'account_code' =>
                            $row['account_code'] ?? null,

                        'sub_particular' =>
                            $row['sub_particular'] ?? null,

                        'past_year' =>
                            $row['past_year'] ?? null,

                        'first_semester_actual' =>
                            $row['first_semester_actual'] ?? null,

                        'second_semester_estimate' =>
                            $row['second_semester_estimate'] ?? null,

                        'current_year_total' =>
                            $row['current_year_total'] ?? null,

                        'budget_year' =>
                            $row['budget_year'] ?? null,

                        'category' =>
                            $category['category'] ?? null,

                        'category_label' =>
                            $category['category_label'] ?? null,

                        'created_at' => now(),
                        'updated_at' => now(),
                    ];
                }
            }
        }

        if (empty($rows)) {
            return response()->json([
                'success' => false,
                'message' => 'No budget rows found. Existing synced data was preserved.',
            ], 422);
        }

        // dd($rows); // Debugging line to inspect the final rows array before insertion
        // Avoid replacing valid data with an empty result if the
        // API response structure was unexpected.
        if (empty($rows)) {
            return response()->json([
                'success' => false,
                'message' => 'No budget rows found. Existing synced data was preserved.',
            ], 422);
        }

        DB::transaction(function () use ($revisionPlanId, $rows) {
            BudgetPrepDetail::where(
                'revision_plan_id',
                $revisionPlanId
            )->delete();

            foreach (array_chunk($rows, 500) as $chunk) {
                BudgetPrepDetail::insert($chunk);
            }
        });
        return redirect()->back()->with('message', 'Approved LB2 budget preparation data synced successfully.');
        // return response()->json([
        //     'success' => true,
        //     'revision_plan_id' => (int) $revisionPlanId,
        //     'reference_profile_id' => $referenceProfileId,
        //     'synced_rows' => count($rows),
        //     'message' => 'Approved LB2 budget preparation data synced successfully.',
        // ]);
    }
}
