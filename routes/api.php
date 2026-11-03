<?php

use App\Http\Controllers\AIPController;
use App\Http\Controllers\RevisionPlanController;
use App\Http\Controllers\BudgetRequirementController;
use App\Http\Controllers\MonitoringAndEvaluationController;
use App\Http\Controllers\RiskManangementController;
use App\Http\Controllers\TeamPlanController;
use App\Http\Controllers\SignatoryController;
use App\Http\Controllers\CashDisbursementForecastController;
use App\Http\Controllers\HGDGScoreController;
use App\Http\Controllers\OfficePerformanceCommitmentRatingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('api_ppa')->group(function () {
    Route::get('/', [RevisionPlanController::class, 'api_ppa']);
    Route::get('/aip', [RevisionPlanController::class, 'aip_api']);
    Route::get('/print/aip', [RevisionPlanController::class, 'print_aip']);
    Route::get('/print/aip/sp', [RevisionPlanController::class, 'print_aip_sp']);
    Route::get('/print/aip/excel/version', [RevisionPlanController::class, 'aip_excel']);
});

Route::prefix('sp-aip')->group(function () {
    Route::get('/', [RevisionPlanController::class, 'sp_api']);
    Route::get('/sectors', [RevisionPlanController::class, 'sp_sectors']);
    Route::get('/aip/details', [RevisionPlanController::class, 'sp_aip_api']);
});
Route::prefix('sp-aip-n')->group(function () {
    Route::get('/', [RevisionPlanController::class, 'sp_api_new']);
});
Route::prefix('/project/profile/api')->group(function () {
    Route::get('/', [RevisionPlanController::class, 'ipp']);
    Route::get('/list', [RevisionPlanController::class, 'list']);
    Route::get('/comprehensive/workplan', [RevisionPlanController::class, 'workplan']);
    Route::get('/comprehensive/workplan/expected/outputs', [RevisionPlanController::class, 'getExpectedOutputs']);
    Route::get('/implementation/schedule/workplan', [RevisionPlanController::class, 'imp_schedule']);
    Route::get('/implementation/schedule/outputs/outcome', [RevisionPlanController::class, 'getCombinedExpected']);
    Route::get('/implementation/schedule/activity', [RevisionPlanController::class, 'getActivity']);
    Route::get('/implementation/schedule/budgetary_requirements', [RevisionPlanController::class, 'getbudget']);
    Route::get('/implementation/schedule/risk_management', [RevisionPlanController::class, 'getActivity']);
    Route::get('/LBPForm4', [RevisionPlanController::class, 'lbpform4']);
    // Route::get('/implementation/schedule/activity',[RevisionPlanController::class, 'getActivity']);
    // Route::get('/implementation/schedule/activity',[RevisionPlanController::class, 'getActivity']);
    // Route::get('/implementation/schedule/activity',[RevisionPlanController::class, 'getActivity']);
});
Route::prefix('budget/requirements')->group(function () {
    Route::get('/categories', [BudgetRequirementController::class, 'getbudgetCategories']);
    Route::get('/categoryType', [BudgetRequirementController::class, 'getBudgetCategoriesType']);
    Route::get('/details', [BudgetRequirementController::class, 'getbudgetDetails']);
});
Route::prefix('/aip/summaries')->group(function () {
    Route::get('/', [AIPController::class, 'summarize_ipp']);
});

Route::prefix('/cdf')->group(function () {
    Route::get('/categories', [CashDisbursementForecastController::class, 'cdf_categories']);
    Route::get('/accounts', [CashDisbursementForecastController::class, 'cdf_api']);
});

Route::prefix('revision-plan')->group(function () {

    // Team Plan
    Route::get('/team-plan', [TeamPlanController::class, 'getTeamPlan'])
        ->name('teamplan.index');

    // Risk Management
    Route::get('/risk-management', [RiskManangementController::class, 'getRiskManagement'])
        ->name('riskmanagement.index');

    // Monitoring & Evaluation
    Route::get('/monitoring-evaluation', [MonitoringAndEvaluationController::class, 'getMonitoringAndEvaluation'])
        ->name('monitoring.index');

    // Signatory
    Route::get('/signatory', [SignatoryController::class, 'getSignatories'])
        ->name('signatory.index');
});

Route::prefix('opcr-accomplishments-admin/print')->group(function () {
    Route::get('/', [OfficePerformanceCommitmentRatingController::class, 'print_accomplishment_dual_score_system']);
});

Route::prefix('hgdg_printing')->group(function () {
    Route::get('/', [HGDGScoreController::class, 'print_hgdg_score']);
});

Route::prefix('opcr-mov-api')->group(function () {
    Route::get('/', [OfficePerformanceCommitmentRatingController::class, 'mov_api']);
});
