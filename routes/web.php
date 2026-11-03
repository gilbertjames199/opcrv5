<?php

// use App\Http\Controllers\FileHandleController;
use App\Http\Controllers\ELAController;
use App\Http\Controllers\SDGController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

//use App\Http\Controllers\ImportDataController;
//use App\Http\Controllers\ReportController;
use App\Http\Controllers\DashBoardController;
// use App\Http\Controllers\EducationController;
// use App\Http\Controllers\GovernmentController;
// use App\Http\Controllers\EconomicController;
// use App\Http\Controllers\HealthController;
// use App\Http\Controllers\OtherController;
use App\Http\Controllers\AuthenticationController;
// use App\Http\Controllers\TimeSheetController;
use App\Http\Controllers\AccomplishmentController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\ActivityProjectController;
use App\Http\Controllers\BudgetRequirementController;
use App\Http\Controllers\CashDisbursementForecastController;
use App\Http\Controllers\TargetController;
use App\Http\Controllers\IndicatorController;
use App\Http\Controllers\IntermediateOutcomeController;
use App\Http\Controllers\MFOController;
use App\Http\Controllers\OutcomeController;
use App\Http\Controllers\PAPController;
use App\Http\Controllers\RAAOController;
use App\Http\Controllers\PlacesController;
use App\Http\Controllers\StrategyController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\SectoralController;
use App\Http\Controllers\ChiefAgendaController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\EconomicAgendaController;
use App\Http\Controllers\ImplementationPlanController;
use App\Http\Controllers\LogFrameController;
use App\Http\Controllers\ProjectProfileController;
use App\Http\Controllers\RAController;
use App\Http\Controllers\RevisionPlanController;
use App\Http\Controllers\SocietalGoalController;
use App\Http\Controllers\IssueController;
use App\Http\Controllers\HGDGChecklistController;
use App\Http\Controllers\HGDGQuestionController;
use App\Http\Controllers\HGDGScoreController;
use App\Http\Controllers\ImplementingTeamController;
use App\Http\Controllers\MonitoringAndEvaluationController;
use App\Http\Controllers\RiskManangementController;
use App\Http\Controllers\TeamPlanController;
use App\Http\Controllers\SignatoryController;
use App\Http\Controllers\UserOfficeController;
use App\Http\Controllers\OPCRController;
use App\Http\Controllers\OPCRPAPSController;
use App\Http\Controllers\OutputController;
use App\Http\Controllers\PerformanceController;
use App\Http\Controllers\SuccessIndicatorController;
use App\Http\Controllers\OfficeAccountableController;
use App\Http\Controllers\OfficePerformanceCommitmentRatingController;
use App\Http\Controllers\OfficePerformanceCommitmentRatingListController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\QualityController;
use App\Http\Controllers\TimelinessController;
use App\Http\Controllers\QualityRemarksController;
use App\Http\Controllers\RatingRemarksController;
use App\Http\Controllers\TimelinessRemarksController;
use App\Http\Controllers\MonitoringController;
use App\Http\Controllers\OpcrAccomplishmentController;
use App\Http\Controllers\OpcrTargetController;
use App\Http\Controllers\AIPController;
use App\Http\Controllers\aip_controller;
use App\Http\Controllers\DailyAccomplishmentController;
use App\Http\Controllers\AddAccomplishmentController;
use App\Http\Controllers\AIPIndividualApproverController;
use App\Http\Controllers\AnnualInvestmentPlanController;
use App\Http\Controllers\AnnualInvestmentPlanInstitutionalController;
use App\Http\Controllers\AppropriationAmountController;
use App\Http\Controllers\AppropriationBudgetController;
use App\Http\Controllers\AppropriationController;
use App\Http\Controllers\BudgetPrepController;
use App\Http\Controllers\DevelopmentFundController;
use App\Http\Controllers\DivisionOutputController;
use App\Http\Controllers\ExpectedOutputController;
use App\Http\Controllers\ExpectedRevisedOutcomeController;
use App\Http\Controllers\ExpectedRevisedOutputController;
use App\Http\Controllers\ForbiddenController;
use App\Http\Controllers\HospitalDivisionOutputController;
use App\Http\Controllers\HospitalIndividualOutputController;
use App\Http\Controllers\HospitalOutputController;
use App\Http\Controllers\HospitalSectionOutputController;
use App\Http\Controllers\IndividualFinalOutputController;
use App\Http\Controllers\ObjectOfExpenditureController;
use App\Http\Controllers\SubMfoController;
use App\Http\Controllers\IPCRController;
use App\Http\Controllers\MeansOfVerificationController;
use App\Http\Controllers\OfficeAipCodeController;
use App\Http\Controllers\OpcrTargetBudgetController;
use App\Http\Controllers\OpcrTrackingViewController;
use App\Http\Controllers\ProjectDesignController;
use App\Http\Controllers\ProjectProfileNextYearController;
use App\Http\Controllers\ProjectProfileStreamlinedController;
use App\Http\Controllers\ProjectProfileTrackingController;
use App\Http\Controllers\ReviewApprove\TargetAccomplishmentReviewApproveController;
use App\Http\Controllers\RevisionPlanCommentController;
use App\Http\Controllers\RevisionPlanDocumentsController;
use App\Http\Controllers\SentenceParserController;
use App\Http\Controllers\SharedProgramAndProjectController;
use App\Http\Controllers\AllowedSubmissionController;
use App\Http\Controllers\SangguniangPanlalawiganApproverController;
use App\Http\Controllers\StrategyActivityRequestController;
use App\Http\Controllers\StrategyProjectController;
use App\Http\Controllers\TimeRangeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserEmployeesController;
use App\Http\Controllers\BudgetPrepDetailController;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageMail;
use App\Models\AnnualInvestmentPlan;
use App\Models\ExpectedRevisedOutcome;
use App\Models\ImplementationPlan;
use App\Models\IntermediateOutcome;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OpcrAccomplishment;
use App\Models\OpcrTarget;
use App\Models\OpcrTargetBudget;
use App\Models\ProgramAndProject;
use App\Models\ProjectProfileTracking;
use App\Models\UserOffice;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;


Auth::routes(['verify' => true]);

// ->middleware('auth');

Route::middleware(['auth', 'can:manage users'])->group(function () {
    Route::get('/admin/users', [UserController::class, 'index'])->name('users.index');
    Route::post('/admin/users/{user}/roles', [UserController::class, 'updateRoles']);
    Route::post('/admin/users/{user}/permissions', [UserController::class, 'updatePermissions']);
});
Route::middleware('auth')->group(function () {
    Route::prefix('/')->group(function () {
        Route::get('/', [DashBoardController::class, 'index']);
        Route::get('/manual', [DashBoardController::class, 'manual']);
    });

    // Route to update allow_ipp_submissions flag (used by frontend ModalAllowSubmission)
    Route::post('/allowed-submissions/update/{id}', [AllowedSubmissionController::class, 'update']);
    //HOME
    Route::prefix('/home')->group(function () {
        Route::get('/', [DashBoardController::class, 'index']);
    });
    Route::prefix('/user/employees')->group(function () {
        Route::get('/', [UserEmployeesController::class, 'index']);
        Route::get('/sync/employees/list', [UserEmployeesController::class, 'syncemployees']);
    });
    //FOrbidden
    Route::prefix('/forbidden')->group(function () {
        Route::get('/', [ForbiddenController::class, 'index']);
        Route::get('/parameterized/{message}', [ForbiddenController::class, 'forbidden_parameterized']);
    });
    //Users
    Route::prefix('/users')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::get('/create', [UserController::class, 'create']);
        Route::get('/{id}/edit', [UserController::class, 'edit']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
        Route::patch('/{id}', [UserController::class, 'update']);
        ///users/change-password
        Route::get('/change-password', [UserController::class, 'changePassword']);
        Route::post('/update-password', [UserController::class, 'updatePassword']);
        Route::get('/{id}/impersonate', [UserController::class, 'impersonate'])->name('users.impersonate');
        Route::get('/stop-impersonate', [UserController::class, 'stopImpersonate'])->name('users.stop-impersonate');
    });
    //UserOffice
    Route::prefix('/office')->group(function () {
        Route::get('/', [UserOfficeController::class, 'create']);
        Route::post('/store', [UserOfficeController::class, 'store']);
        Route::get('/{id}/edit', [UserOfficeController::class, 'edit']);
        Route::patch('/', [UserOfficeController::class, 'update']);
        Route::delete('/', [UserOfficeController::class, 'destroy']);
    });
    //Accomplishments
    Route::prefix('/accomplishments')->group(function () {
        Route::get('/', [AccomplishmentController::class, 'index']);
        Route::get('/{raao_id}/create', [AccomplishmentController::class, 'create']);
        Route::get('/{id}/list', [AccomplishmentController::class, 'list']);
        Route::post('/store', [AccomplishmentController::class, 'store']);
        Route::get('/{id}/{target_id}/edit', [AccomplishmentController::class, 'edit']);
        Route::patch('/{id}', [AccomplishmentController::class, 'update']);
        ///accomplishments/validation
        /*
            if (this.editData !== undefined) {
                    this.form.patch("/accomplishments/raao/" + this.form.id, this.form);
                } else {
                    this.form.id=null;
                    this.form.post("/accomplishments/store/raao/", this.form);
                }
        */
        //accomplishment/{id}/raao/{raao_id}/edit
        Route::post('/validation', [AccomplishmentController::class, 'validation']);
        Route::delete('/{id}/{target_id}', [AccomplishmentController::class, 'destroy']);
        Route::get('/{raao_id}/raao/list', [AccomplishmentController::class, 'listraao']);
        Route::get('/raao/{raao_id}/create', [AccomplishmentController::class, 'createFromRaao']);
        Route::post('/store/raao', [AccomplishmentController::class, 'storeraao']);
        Route::get('/{id}/raao/{raao_id}/edit', [AccomplishmentController::class, 'editfromraao']);
        Route::delete('/{id}/raao/{raao_id}/delete', [AccomplishmentController::class, 'deletefromraao']);
        Route::patch('/raao/{id}', [AccomplishmentController::class, 'updateraao']);
    });

    //Targets
    Route::prefix('/targets')->group(function () {
        Route::get('/', [TargetController::class, 'index']);
        Route::get('/{id}/list', [TargetController::class, 'list']);
        Route::patch('/{id}', [TargetController::class, 'update']);
        Route::post('/store', [TargetController::class, 'store']);
        Route::delete('/{id}/{raao_id}', [TargetController::class, 'destroy']);
        Route::get('/{raao_id}/{year}/create', [TargetController::class, 'create']);
        Route::get('/{id}/edit', [TargetController::class, 'edit']);
        Route::get('/return/{target_id}', [TargetController::class, 'ret']);

        Route::get('/{imp_id}/implementation', [TargetController::class, 'index_i']);
        Route::get('/{imp_id}/implementation/add', [TargetController::class, 'create_i']);
        Route::post('/{imp_id}/implementation/store', [TargetController::class, 'store_i']);
        Route::get('/{imp_id}/implementation/{id}/edit', [TargetController::class, 'edit_i']);
        Route::patch('/{imp_id}/implementation/update', [TargetController::class, 'update_i']);
        Route::post('/{imp_id}/implementation/delete/{id}/destroy', [TargetController::class, 'destroy_i']);
    });

    //Organization
    Route::prefix('/Organization')->group(function () {
        Route::get('/', [OrganizationController::class, 'index']);
        Route::get('/create', [OrganizationController::class, 'create']);
        Route::post('/', [OrganizationController::class, 'store']);
        Route::get('/{id}/edit', [OrganizationController::class, 'edit']);
        Route::patch('/{id}', [OrganizationController::class, 'update']);
        Route::delete('/{id}', [OrganizationController::class, 'destroy']);
    });

    //SDG
    Route::prefix('/SDG')->group(function () {
        Route::get('/', [SDGController::class, 'index']);
        Route::get('/create', [SDGController::class, 'create']);
        Route::post('/', [SDGController::class, 'store']);
        Route::get('/{id}/edit', [SDGController::class, 'edit']);
        Route::patch('/{id}', [SDGController::class, 'update']);
        Route::delete('/{id}', [SDGController::class, 'destroy']);
    });

    //ELA
    Route::prefix('/ELA')->group(function () {
        Route::get('/', [ELAController::class, 'index']);
        Route::get('/create', [ELAController::class, 'create']);
        Route::post('/', [ELAController::class, 'store']);
        Route::get('/{id}/edit', [ELAController::class, 'edit']);
        Route::patch('/{id}', [ELAController::class, 'update']);
        Route::delete('/{id}', [ELAController::class, 'destroy']);
    });

    //Research Agenda
    Route::prefix('/ResearchAgenda')->group(function () {
        Route::get('/', [RAController::class, 'index']);
        Route::get('/create', [RAController::class, 'create']);
        Route::post('/', [RAController::class, 'store']);
        Route::get('/{id}/edit', [RAController::class, 'edit']);
        Route::patch('/{id}', [RAController::class, 'update']);
        Route::delete('/{id}', [RAController::class, 'destroy']);
    });
    //Sectoral
    Route::prefix('/Sectoral')->group(function () {
        Route::get('/', [SectoralController::class, 'index']);
        Route::get('/create', [SectoralController::class, 'create']);
        Route::post('/', [SectoralController::class, 'store']);
        Route::get('/{id}/edit', [SectoralController::class, 'edit']);
        Route::patch('/{id}', [SectoralController::class, 'update']);
        Route::delete('/{id}', [SectoralController::class, 'destroy']);
    });

    //Societal
    Route::prefix('/Societal')->group(function () {
        Route::get('/', [SocietalGoalController::class, 'index']);
        Route::get('/create', [SocietalGoalController::class, 'create']);
        Route::post('/', [SocietalGoalController::class, 'store']);
        Route::get('/{id}/edit', [SocietalGoalController::class, 'edit']);
        Route::patch('/{id}', [SocietalGoalController::class, 'update']);
        Route::delete('/{id}', [SocietalGoalController::class, 'destroy']);
    });

    //Issues
    Route::prefix('/Issues')->group(function () {
        Route::get('/', [IssueController::class, 'index']);
        Route::get('/create', [IssueController::class, 'create']);
        Route::post('/', [IssueController::class, 'store']);
        Route::get('/{id}/edit', [IssueController::class, 'edit']);
        Route::patch('/{id}', [IssueController::class, 'update']);
        Route::delete('/{id}', [IssueController::class, 'destroy']);
    });

    //ChiefAgenda
    Route::prefix('/ChiefAgenda')->group(function () {
        Route::get('/', [ChiefAgendaController::class, 'index']);
        Route::get('/create', [ChiefAgendaController::class, 'create']);
        Route::post('/', [ChiefAgendaController::class, 'store']);
        Route::get('/{id}/edit', [ChiefAgendaController::class, 'edit']);
        Route::patch('/{id}', [ChiefAgendaController::class, 'update']);
        Route::delete('/{id}', [ChiefAgendaController::class, 'destroy']);
    });

    //Eight Point Socio
    Route::prefix('/EconomicAgenda')->group(function () {
        Route::get('/', [EconomicAgendaController::class, 'index']);
        Route::get('/create', [EconomicAgendaController::class, 'create']);
        Route::post('/', [EconomicAgendaController::class, 'store']);
        Route::get('/{id}/edit', [EconomicAgendaController::class, 'edit']);
        Route::patch('/{id}', [EconomicAgendaController::class, 'update']);
        Route::delete('/{id}', [EconomicAgendaController::class, 'destroy']);
    });
    //Indicators
    Route::prefix('/indicators')->group(function () {
        Route::get('/', [IndicatorController::class, 'index']);
        Route::get('/create', [IndicatorController::class, 'create']);
        Route::post('/store', [IndicatorController::class, 'store']);
        Route::delete('/{id}/delete', [IndicatorController::class, 'destroy']);
        Route::get('/{id}/edit', [IndicatorController::class, 'edit']);
        Route::patch('/{id}', [IndicatorController::class, 'update']);
        Route::post('/checkUse', [IndicatorController::class, 'checkUse']);
    });

    //RAAO
    Route::prefix('/raao')->group(function () {
        Route::get('/', [RAAOController::class, 'index']);
    });

    //Places
    Route::prefix('/places')->group(function () {
        Route::get('/', [PlacesController::class, 'showPlaces']);
        Route::post('/bar', [PlacesController::class, 'getBarangays']);
    });

    //Outcome
    Route::prefix('/outcome')->group(function () {
        ///outcome/${dat.id}/edit
        Route::get('/', [OutcomeController::class, 'index']);
        Route::get('/create', [OutcomeController::class, 'create']);
        Route::post('/store', [OutcomeController::class, 'store']);
        Route::get('/{id}/edit', [OutcomeController::class, 'edit']);
        Route::patch('/{id}', [OutcomeController::class, 'update']);
        Route::delete('/{id}', [OutcomeController::class, 'destroy']);
    });


    //Intermediate Outcomes
    ///inter_outcome/${dat.id}
    Route::prefix('/inter_outcome')->group(function () {
        //create/${idoutcome}
        //this.$inertia.delete("/inter_outcome/" + id+"/"+this.idoutcome);
        Route::get('/{id}', [IntermediateOutcomeController::class, 'index']);
        Route::get('/create/{id}', [IntermediateOutcomeController::class, 'create']);
        Route::post('/store', [IntermediateOutcomeController::class, 'store']);
        Route::delete('/{id}/{idoutcome}', [IntermediateOutcomeController::class, 'destroy']);
        Route::get('/{id}/{idoutcome}/edit', [IntermediateOutcomeController::class, 'edit']);
        Route::patch('/', [IntermediateOutcomeController::class, 'update']);
    });
    //Strategies
    Route::prefix('/strategies')->group(function () {
        Route::get('/{id}/{ismfo}/strat/mfo', [StrategyController::class, 'index']);
        Route::get('/create/{id}/{ismfo}', [StrategyController::class, 'create']);
        Route::post('/store', [StrategyController::class, 'store']);
        Route::post('/update', [StrategyController::class, 'update']);
        Route::delete('/{id}/{idpaps}', [StrategyController::class, 'destroy']);
        Route::get('/{id}/{idinteroutcome}/edit/{ismfo}', [StrategyController::class, 'edit']);
        Route::patch('/', [StrategyController::class, 'update']);
    });
    //MFOStrategies
    Route::prefix('/mfostrategies')->group(function () {});
    //Activities
    Route::prefix('/activities')->group(function () {
        Route::get('/{idstrat}', [ActivityController::class, 'index']);
        Route::get('/create/{id}', [ActivityController::class, 'create']);
        Route::post('/store', [ActivityController::class, 'store']);
        Route::delete('/{id}/{strategy_id}', [ActivityController::class, 'destroy']);
        Route::get('/{id}/{strategy_id}/edit', [ActivityController::class, 'edit']);
        Route::patch('/', [ActivityController::class, 'update']);
    });
    //LOGFRAME
    Route::prefix('/logframe')->group(function () {
        Route::get('/', [LogFrameController::class, 'index']);
        Route::get('/{idstrat}', [LogFrameController::class, 'showlog']);
    });
    //Office AIP Code
    // /office-aip-code/${functional.department_code}
    Route::prefix('/office-aip-code')->group(function () {
        Route::get('/{FFUNCCOD}', [OfficeAipCodeController::class, 'edit']);
        Route::patch('/', [OfficeAipCodeController::class, 'update']);
    });
    //MFO
    Route::prefix('/mfos')->group(function () {
        Route::get('/direct', [MFOController::class, 'direct']);
        Route::get('/add', [MFOController::class, 'add']);
        Route::get('/create', [MFOController::class, 'create']);
        Route::post('/store', [MFOController::class, 'store']);
        Route::get('/{id}/edit', [MFOController::class, 'edit']);
        Route::patch('/', [MFOController::class, 'update']);
        Route::delete('/{id}/{idoutcome}', [MFOController::class, 'destroy']);
        Route::get('/{id}', [MFOController::class, 'index']);
    });
    //MFO Revision Plans
    Route::prefix('/mforevision')->group(function () {
        Route::get('/{id}', [RevisionPlanController::class, 'mfo_index']);
        Route::get('/create/{id}', [RevisionPlanController::class, 'mfo_create']);
        Route::post('/store', [RevisionPlanController::class, 'mfo_store']);
        Route::get('/view/project/mfo/{id}', [RevisionPlanController::class, 'view']);
    });
    //Route::patch('/', [PAPController::class, 'update']);
    Route::prefix('/paps')->group(function () {
        Route::get('/direct', [PAPController::class, 'direct']);
        Route::get('/direct/create', [PAPController::class, 'direct_create']);
        Route::get('/{id}', [PAPController::class, 'index']);
        Route::get('/create/{id}', [PAPController::class, 'create']);
        Route::post('/save', [PAPController::class, 'save']);
        Route::post('/store', [PAPController::class, 'store']);
        Route::get('/{id}/{idmfo}/edit', [PAPController::class, 'edit']);
        Route::patch('/{id}', [PAPController::class, 'update']);
        Route::patch('/update/{id}', [PAPController::class, 'updated']);
        Route::delete('/{id}', [PAPController::class, 'destroy']);
        //FILTER MFOS in CREATE
        // /paps/major/final/outputs/filter/" + this.division_code  +"/filter/by/division
        Route::get('/major/final/outputs/filter/{FFUNCCOD}', [PAPController::class, 'mfos_filter']);
        Route::get('/major/final/outputs/filter/{division_code}/filter/by/division', [PAPController::class, 'mfos_filter']);
        //FILTER mother PAPS in CREATE/EDIT
        Route::get('/mother/paps/filter/{idmfo}', [PAPController::class, 'mother_paps_filter']);
        Route::get('/major/final/outputs', [PAPController::class, 'FUNCTIONS']);
    });
    //Shared Programs and Projects Profile
    Route::prefix('/sharedPAPS')->group(function () {
        Route::get('/{idpaps}', [SharedProgramAndProjectController::class, 'getSharedPAPS']);
        Route::post('/create', [SharedProgramAndProjectController::class, 'create']);
        Route::delete('/{id}', [SharedProgramAndProjectController::class, 'destroy']);
    });
    //Project Profile
    Route::prefix('/projectprofile')->group(function () {
        Route::get('/', [ProjectProfileController::class, 'index']);
        Route::get('/create', [ProjectProfileController::class, 'create']);
    });
    // Project Profile Trackings
    Route::prefix('/project-profile-tracking')->group(function () {
        Route::get('/', [ProjectProfileTrackingController::class, 'tracking']);
    });

    // Sync Budget Prep
    Route::prefix('/budget_prep')->group(function(){
        Route::post('/sync/{id}', [BudgetPrepDetailController::class,'syncBudgetPreparationData']);
    });
    //Revision Plan
    Route::prefix('/revision')->group(function () {
        Route::get('/{id}', [RevisionPlanController::class, 'index']);
        Route::get('/create/{id}', [RevisionPlanController::class, 'create']);
        Route::post('/store', [RevisionPlanController::class, 'store']);
        Route::get('/edit/{id}', [RevisionPlanController::class, 'edit']);
        Route::patch('/update', [RevisionPlanController::class, 'update']);
        Route::delete('/{id}/delete', [RevisionPlanController::class, 'delete']);
        Route::get('/view/project/paps/{id}', [RevisionPlanController::class, 'view']);
        Route::get('/general/administration/services/{FFUNCCOD}/plan', [RevisionPlanController::class, 'gas']);
        Route::get('/general/administration/services/create/{FFUNCCOD}/plan', [RevisionPlanController::class, 'gas_create']);
        Route::post('/general/administration/services/{FFUNCCOD}/plan/store', [RevisionPlanController::class, 'gas_store']);
        Route::get('/export/aip', [RevisionPlanController::class, 'exportStrategies'])->name('export.aip');
        Route::post('/sync-ooes', [RevisionPlanController::class, 'syncOOEs'])->name('revision.sync-ooes');
        Route::post('/generate-programs', [RevisionPlanController::class, 'generatePrograms'])->name('revision.generate-programs');
        Route::get('/automate/hospital/operations',[RevisionPlanController::class, 'automateHospitalOperations'])->name('revision.automate-hospital-operations');
    });
    // AIP Code
    // ipp_aip_codes
    Route::prefix('/ipp_aip_codes')->group(function () {
        Route::get('/', [AnnualInvestmentPlanController::class, 'set_ipp_aip_codes']);
        Route::patch('/autosave', [AnnualInvestmentPlanController::class, 'autosave']); // ← add here
        Route::patch('/inherit_aip_codes', [AnnualInvestmentPlanController::class, 'inheritAipCodes']); // ← add here
    });
    // 20% Development Fund
    Route::prefix('/development-fund')->group(function () {
        Route::get('/{id}', [DevelopmentFundController::class, 'dev_fund_index']);
        Route::get('/create/{id}', [DevelopmentFundController::class, 'dev_fund_create']);
        Route::post('/store', [DevelopmentFundController::class, 'dev_fund_store']);
        Route::get('/edit/{id}', [DevelopmentFundController::class, 'dev_fund_edit']);
        Route::patch('/update/{id}', [DevelopmentFundController::class, 'dev_fund_update']);
        Route::delete('/{id}/delete', [DevelopmentFundController::class, 'dev_fund_delete']);
    });
    // Revision Plan Streamlined
    Route::prefix('/revision/streamlined')->group(function () {
        Route::get('/{id}', [ProjectProfileStreamlinedController::class, 'streamlined_index']);
        Route::get('/create/{id}', [ProjectProfileStreamlinedController::class, 'streamlined_create']);
        // /revision/streamlined/${table_name}/${column_here}/${id}/${new_data}/update
        Route::patch('/{id}/update', [ProjectProfileStreamlinedController::class, 'streamlined_update']);
        Route::delete('/{id}/{table}', [ProjectProfileStreamlinedController::class, 'streamlined_delete']);
        Route::delete('/{id}/{table}/{project_id}', [ProjectProfileStreamlinedController::class, 'streamlined_delete_act_strat']);
        Route::post('/store', [ProjectProfileStreamlinedController::class, 'streamlined_store']);
        Route::get('/edit/{id}', [ProjectProfileStreamlinedController::class, 'streamlined_edit']);
        Route::patch('/update', [ProjectProfileStreamlinedController::class, 'streamlined_update']);
    });
    Route::prefix('/implementation-workplan')->group(function () {
        Route::post('/strategies', [StrategyController::class, 'save_strategies']);
        Route::post('/strategies/activities', [ActivityController::class, 'save_activities']);
        Route::post('/implementing/team/plans', [TeamPlanController::class, 'save_team']);
        // /implementation-workplan/implementing/team/plans/update
        Route::patch('/implementing/team/plans/update', [TeamPlanController::class, 'update_team']);
    });
    // Project Design
    Route::prefix('/project/design')->group(function () {
        Route::post('/generate/{id}', [ProjectDesignController::class, 'generateProjectDesign']);
    });
    // Forward Next Year
    Route::prefix('/project/next_year')->group(function () {
        Route::post('/{sem_id}', [ProjectProfileNextYearController::class, 'index']);
    });

    // Forward Next Year
    Route::prefix('/project/last/year')->group(function () {
        Route::post('/{sem_id}', [ProjectProfileNextYearController::class, 'last_year']);
    });
    // Cash Disbursements Forecast
    Route::prefix('/cdf')->group(function () {
        Route::get('/{revision_plan_id}', [CashDisbursementForecastController::class, 'set_cdf']);
        Route::patch('/{revision_plan_id}', [CashDisbursementForecastController::class, 'updateCdf']);
        Route::patch('/signatories/{revision_plan_id}', [CashDisbursementForecastController::class, 'updateSignatories']);
    });
    Route::get('/get_employees_all', [TeamPlanController::class, 'getEmployees']);
    Route::prefix('/revision/streamlined/subtables')->group(function () {
        Route::post('/save/monitoring/and/evaluation', [MonitoringAndEvaluationController::class, 'save_multiple']);
        Route::post('/save/risk/management', [RiskManangementController::class, 'save_multiple']);
        Route::post('/save/signatories', [SignatoryController::class, 'save_multiple']);
    });
    Route::prefix('/revision/streamlined/expected')->group(function () {
        Route::post('/revised/outputs', [ExpectedRevisedOutputController::class, 'save_multiple']);
        Route::post('/outcomes', [ExpectedRevisedOutcomeController::class, 'save_multiple']);
    });
    Route::prefix('/revison_plan_documents')->group(function () {
        Route::get('/{id}', [RevisionPlanDocumentsController::class, 'get_docs']);
        // Route::delete('/{id}', [RevisionPlanDocumentsController::class,'get_docs']);
        Route::delete('/delete-multiple/many', [RevisionPlanDocumentsController::class, 'destroyMultiple']);
    });


    // ,[RevisionPlanDocumentsController::class,'get_docs']);
    Route::prefix('/status/revision')->group(function () {
        Route::post('/update/{id}/{type}/{new_status}', [ProjectProfileTrackingController::class, 'status_update']);
        Route::post('/update/{id}/{type}/{new_status}/upload/justification', [RevisionPlanDocumentsController::class, 'upload_justification']);
        Route::get('/review/approve', [ProjectProfileTrackingController::class, 'review_approve_index']);
    });
    Route::prefix('/revisio/n')->group(function () {
        Route::patch('/', [RevisionPlanController::class, 'update']);
    });
    // Supplemental Investment Plan
    Route::prefix('/get/PAPS')->group(function () {
        Route::get('/', [PAPController::class, 'getPAPS']);
    });
    // Revision Plan Page
    Route::prefix('/revision_plans')->group(function () {
        Route::get('/', [RevisionPlanController::class, 'direct']);
        Route::get('/budget/{rev_id}', [RevisionPlanController::class, 'get_budget_data']);
        Route::post('/store', [BudgetPrepController::class, 'store']);
        Route::get('/budget/edit/{id}', [BudgetPrepController::class, 'fetch_data']);
        Route::patch('/', [BudgetPrepController::class, 'update']);
        Route::delete('/{id}', [BudgetPrepController::class, 'destroy']);
        // Route::get('/create/{id}', [RevisionPlanController::class, 'create']);
        // Route::get('/view/project/paps/{id}', [RevisionPlanController::class, 'view']);
        // Route::get('/general/administration/services/{FFUNCCOD}/plan', [RevisionPlanController::class, 'gas']);
        // Route::get('/general/administration/services/create/{FFUNCCOD}/plan', [RevisionPlanController::class, 'gas_create']);
        // Route::post('/general/administration/services/{FFUNCCOD}/plan/store', [RevisionPlanController::class, 'gas_store']);
    });
    //Revision Plan Comments
    Route::prefix('/revision-plan-comments')->group(function () {
        Route::get('/', [RevisionPlanCommentController::class, 'comments']);
        Route::post('/store', [RevisionPlanCommentController::class, 'storeComment']);
        Route::post('/action/done', [RevisionPlanCommentController::class, 'actionComment']);
        Route::get('/{id}/edit', [RevisionPlanCommentController::class, 'editComment']);
        Route::patch('/{id}', [RevisionPlanCommentController::class, 'updateComment']);
        Route::delete('/{id}', [RevisionPlanCommentController::class, 'destroyComment']);
    });
    // AIP Submission
    Route::prefix('/institutional_aip')->group(function () {
        Route::get('/', [AnnualInvestmentPlanInstitutionalController::class, 'index']);
        Route::post('/status/{type}', [AnnualInvestmentPlanInstitutionalController::class, 'updateInstitutionalAIPStatus']);
        Route::post('/update/{table_name}/value', [AnnualInvestmentPlanInstitutionalController::class, 'updateTableValue']);
    });

    // SP Members/AIP Approvers
    Route::prefix('/aip/approvers')->group(function(){
        Route::get('/', [AIPIndividualApproverController::class, 'index']);
        Route::get('/create',[AIPIndividualApproverController::class, 'create']);
        Route::post('/',[AIPIndividualApproverController::class,'store']);
        Route::get('/{id}/edit',[AIPIndividualApproverController::class, 'edit']);
        Route::delete('/{id}',[AIPIndividualApproverController::class, 'destroy']);
        Route::patch('/',[AIPIndividualApproverController::class, 'update']);
    });
    //Strategies and Activities
    Route::prefix('/strategies-and-activities')->group(function () {
        // /strategies-and-activities/strategies/create
        Route::get('/{idrevplan}', [StrategyProjectController::class, 'index']);
        Route::get('/create/{idrevplan}', [StrategyProjectController::class, 'create']);
        Route::post('/strategies/create', [StrategyProjectController::class, 'store']);
        Route::get('/{id}/edit', [StrategyProjectController::class, 'edit']);
        Route::patch('/{id}', [StrategyProjectController::class, 'update']);
        Route::delete('/{id}', [StrategyProjectController::class, 'destroy']);
        Route::get('/refresh/data/now/{idrevplan}', [StrategyProjectController::class, 'refresh']);
    });
    // Strategy and Activities Request
    Route::prefix('/strategy-and-activity-request')->group(function () {
        Route::post('/create', [StrategyActivityRequestController::class, 'store']);
        Route::post('/strategy/store', [StrategyActivityRequestController::class, 'storeStrategy']);
        Route::post('/activity/store', [StrategyActivityRequestController::class, 'storeActivity']);
        Route::post('/files/store', [StrategyActivityRequestController::class, 'storeRequestFile']);
        Route::delete('/files/delete/{id}', [StrategyActivityRequestController::class, 'deleteRequestFile']);
        Route::patch('/update', [StrategyActivityRequestController::class, 'updateField']);
        Route::patch('/update/status', [StrategyActivityRequestController::class, 'updateFieldApproveReturn']);
        Route::delete('/delete/{id}/{table_name}', [StrategyActivityRequestController::class, 'deleteRecord']);
        // Index
        Route::get('/', [StrategyActivityRequestController::class, 'index']);
    });
    //Strategies and Projects
    Route::prefix('/strategies-project/r')->group(function () {
        Route::post('/create', [StrategyProjectController::class, 'createStrategy']);
        Route::delete('/delete', [StrategyProjectController::class, 'deleteStrategy']);
        Route::get('/{idrevplan}', [StrategyProjectController::class, 'getStrategies']);
        Route::post('/save/implementation/{idrevplan}', [StrategyProjectController::class, 'saveAll']);
    });
    //Activities and Projects
    Route::prefix('/activities-project/r')->group(function () {
        Route::post('/create', [ActivityProjectController::class, 'createActivity']);
        Route::delete('/delete', [ActivityProjectController::class, 'deleteActivity']);
    });
    //Expected Outcomes
    Route::prefix("/expected-outcomes-revised")->group(function () {
        //type = strategy or activity
        //id = id_strategy or activity id
        Route::get("/{id}/{type}", [ExpectedRevisedOutcomeController::class, 'index']);
        Route::get('/create/{project_id}/{type}', [ExpectedRevisedOutcomeController::class, 'create']);
        Route::post('/store', [ExpectedRevisedOutcomeController::class, 'store']);
        Route::get('/{id}/{project_id}/edit/{type}', [ExpectedRevisedOutcomeController::class, 'edit']);
        Route::patch('/{id}', [ExpectedRevisedOutcomeController::class, 'update']);
        Route::delete('/{id}', [ExpectedRevisedOutcomeController::class, 'destroy']);
    });
    //Expected Outputs
    Route::prefix("/expected-outputs-revised")->group(function () {
        //type = strategy or activity
        //id = id_strategy or activity id
        Route::get("/{id}/{type}", [ExpectedRevisedOutputController::class, 'index']);
        Route::get('/create/{project_id}/{type}', [ExpectedRevisedOutputController::class, 'create']);
        Route::post('/store', [ExpectedRevisedOutputController::class, 'store']);
        Route::get('/{id}/{project_id}/edit/{type}', [ExpectedRevisedOutputController::class, 'edit']);
        Route::patch('/{id}', [ExpectedRevisedOutputController::class, 'update']);
        Route::delete('/{id}', [ExpectedRevisedOutputController::class, 'destroy']);
    });
    //Budget
    Route::prefix('/budget')->group(function () {
        Route::get('/{id}', [BudgetRequirementController::class, 'index']);
        Route::get('/create/{idrev}', [BudgetRequirementController::class, 'create']);
        Route::post('/store', [BudgetRequirementController::class, 'store']);
        Route::get('/edit/{idbudget}', [BudgetRequirementController::class, 'edit']);
        Route::delete('/{id}/{idbudget}', [BudgetRequirementController::class, 'destroy']);
        Route::patch('/update/{idrev}', [BudgetRequirementController::class, 'update']);
        Route::post('/store/budget', [BudgetRequirementController::class, 'store_budget_from_revplan']);
        Route::get('/ooes/{idrev}', [BudgetRequirementController::class, 'ooe_index']);
        Route::patch('/update-field/{id}', [BudgetRequirementController::class, 'updateField']);
    });
    //testing helpers
    Route::get('test-helper', [BudgetRequirementController::class, 'getFirstLastName']);
    //Implementation Plan
    Route::prefix('/implementation')->group(function () {
        Route::get('/{id}', [ImplementationPlanController::class, 'index']);
        Route::get('/create/{idrev}', [ImplementationPlanController::class, 'create']);
        Route::post('/store', [ImplementationPlanController::class, 'store']);
        Route::get('/edit/{id}', [ImplementationPlanController::class, 'edit']);
        Route::delete('/{id}', [ImplementationPlanController::class, 'destroy']);
        Route::patch('/update/{idrev}', [ImplementationPlanController::class, 'update']);
        //implementation/create/activity/${dat.id}
        Route::get('/create/activity/{idstrat}/{idrev_plan}', [ImplementationPlanController::class, 'act_create']);
        Route::get('/edit/activity/{id}', [ImplementationPlanController::class, 'act_edit']);
    });
    // OPCR Tracking
    Route::prefix('/opcr-tracking')->group(function () {
        Route::get('/targets', [OpcrTrackingViewController::class, 'targets']);
        Route::get('/ratings', [OpcrTrackingViewController::class, 'ratings']);
    });
    // Strategy-based
    Route::prefix('/strategy/implementation')->group(function () {
        Route::get('/{id}', [StrategyProjectController::class, 'strategyImplementation']);
        // Route::get('/create/{idrev}', [ImplementationPlanController::class, 'create']);
        // Route::post('/store', [ImplementationPlanController::class, 'store']);
        Route::get('/edit/{id}', [StrategyProjectController::class, 'edit']);
        // Route::delete('/{id}', [ImplementationPlanController::class, 'destroy']);
        // Route::patch('/update/{idrev}', [ImplementationPlanController::class, 'update']);
        // //implementation/create/activity/${dat.id}
        // Route::get('/create/activity/{idstrat}/{idrev_plan}', [ImplementationPlanController::class, 'act_create']);
        // Route::get('/edit/activity/{id}', [ImplementationPlanController::class, 'act_edit']);
    });
    //Activity-based IMplementation Plan
    Route::prefix('/activity/implementation')->group(function () {
        Route::get('/{id}', [ImplementationPlanController::class, 'index']);
    });

    //hgdg_checklist
    Route::prefix('/HGDGChecklist')->group(function () {
        Route::get('/', [HGDGChecklistController::class, 'index']);
        Route::get('/create', [HGDGChecklistController::class, 'create']);
        Route::post('/', [HGDGChecklistController::class, 'store']);
        Route::get('/{id}/edit', [HGDGChecklistController::class, 'edit']);
        Route::patch('/{id}', [HGDGChecklistController::class, 'update']);
        Route::delete('/{id}', [HGDGChecklistController::class, 'destroy']);
    });

    Route::prefix('/HGDGScore')->group(function () {
        Route::get('/{idrevplan}', [HGDGScoreController::class, 'index']);
        Route::get('/store/hgdg', [HGDGScoreController::class, 'store']);
        Route::post('/store/{id}/{score}', [HGDGScoreController::class, 'store_one']);
        Route::post('/commentstore', [HGDGScoreController::class, 'store_comment']);
    });

    //hgdg_questions
    Route::prefix('/HGDGQuestions')->group(function () {
        Route::get('/{checklist_id}', [HGDGQuestionController::class, 'index']);
        Route::get('/create/{checklist_id}', [HGDGQuestionController::class, 'create']);
        Route::post('/store', [HGDGQuestionController::class, 'store']);
        Route::get('/{id}/edit', [HGDGQuestionController::class, 'edit']);
        Route::patch('/{id}', [HGDGQuestionController::class, 'update']);
        Route::delete('/delete/{id}', [HGDGQuestionController::class, 'destroy']);
        //Subquestions
        Route::get('/create/subquestions/{checklist_id}/{question_id}', [HGDGQuestionController::class, 'subcreate']);
    });

    //Implementing
    Route::prefix('/ImplementingTeam')->group(function () {
        Route::get('/', [ImplementingTeamController::class, 'index']);
        Route::get('/create', [ImplementingTeamController::class, 'create']);
        Route::post('/', [ImplementingTeamController::class, 'store']);
        Route::get('/{id}/edit', [ImplementingTeamController::class, 'edit']);
        Route::patch('/{id}', [ImplementingTeamController::class, 'update']);
        Route::delete('/{id}', [ImplementingTeamController::class, 'destroy']);
    });

    //Revision PLan Implementing Team
    Route::prefix('/team')->group(function () {
        Route::get('/{revid}/revision/plan/team', [TeamPlanController::class, 'index']);
        Route::get('/create/{revid}', [TeamPlanController::class, 'create']);
        Route::post('/', [TeamPlanController::class, 'store']);
        Route::get('/{id}/edit', [TeamPlanController::class, 'edit']);
        Route::patch('/{id}', [TeamPlanController::class, 'update']);
        Route::delete('/{id}', [TeamPlanController::class, 'destroy']);
    });

    //Evaluation Mechanism Tool
    Route::prefix('/EvaluationMechanismTool')->group(function () {
        Route::get('/{id}', [MonitoringAndEvaluationController::class, 'index']);
        Route::get('/create/{id}', [MonitoringAndEvaluationController::class, 'create']);
        Route::post('/', [MonitoringAndEvaluationController::class, 'store']);
        Route::get('/{id}/edit', [MonitoringAndEvaluationController::class, 'edit']);
        Route::patch('/{id}', [MonitoringAndEvaluationController::class, 'update']);
        Route::delete('/{id}', [MonitoringAndEvaluationController::class, 'destroy']);
    });

    //Risk Management
    Route::prefix('/RiskManagement')->group(function () {
        Route::get('/{revid}', [RiskManangementController::class, 'index']);
        Route::get('/create/{revid}', [RiskManangementController::class, 'create']);
        Route::post('/store', [RiskManangementController::class, 'store']);
        Route::get('/{id}/edit', [RiskManangementController::class, 'edit']);
        Route::patch('/{id}', [RiskManangementController::class, 'update']);
        Route::delete('/{id}', [RiskManangementController::class, 'destroy']);
    });

    //Signatories
    Route::prefix('/Signatories')->group(function () {
        Route::get('/{revid}', [SignatoryController::class, 'index']);
        Route::get('/create/{revid}', [SignatoryController::class, 'create']);
        Route::post('/store', [SignatoryController::class, 'store']);
        Route::get('/{id}/edit', [SignatoryController::class, 'edit']);
        Route::patch('/{id}', [SignatoryController::class, 'update']);
        Route::delete('/{id}', [SignatoryController::class, 'destroy']);
    });

    //OPCR
    Route::prefix('/OPCRStandard')->group(function () {
        Route::get('/', [OPCRController::class, 'index']);
        Route::get('/{idstrat}', [OPCRController::class, 'showopcr']);
    });

    //Route::patch('/', [PAPController::class, 'update']);
    Route::prefix('/OPCRpaps')->group(function () {
        Route::get('/direct', [OPCRPAPSController::class, 'direct']);
        Route::get('/direct/create', [OPCRPAPSController::class, 'direct_create']);
        Route::get('/{id}', [OPCRPAPSController::class, 'index']);
        Route::get('/create/{id}', [OPCRPAPSController::class, 'create']);
        Route::post('/save', [OPCRPAPSController::class, 'save']);
        Route::post('/store', [OPCRPAPSController::class, 'store']);
        Route::get('/edit/{id}', [OPCRPAPSController::class, 'edit']);
        Route::patch('/{id}', [OPCRPAPSController::class, 'update']);
        Route::patch('/update/{id}', [OPCRPAPSController::class, 'updated']);
        Route::delete('/{id}', [OPCRPAPSController::class, 'destroy']);
    });

    Route::prefix('/output')->group(function () {
        Route::get('/{id}', [OutputController::class, 'index']);
        Route::get('/create/{id}', [OutputController::class, 'create']);
        Route::post('/store', [OutputController::class, 'store']);
        Route::get('/{id}/edit', [OutputController::class, 'edit']);
        Route::patch('/{id}', [OutputController::class, 'update']);
        Route::delete('/{id}', [OutputController::class, 'destroy']);
    });

    Route::prefix('/Performance')->group(function () {
        Route::get('/{id}', [PerformanceController::class, 'index']);
        Route::get('/create/{id}', [PerformanceController::class, 'create']);
        Route::post('/store', [PerformanceController::class, 'store']);
        Route::get('/{id}/edit', [PerformanceController::class, 'edit']);
        Route::patch('/{id}', [PerformanceController::class, 'update']);
        Route::delete('/{id}', [PerformanceController::class, 'destroy']);
    });

    Route::prefix('/SuccessIndicator')->group(function () {
        Route::get('/{id}', [SuccessIndicatorController::class, 'index']);
        Route::get('/create/{id}', [SuccessIndicatorController::class, 'create']);
        Route::post('/store', [SuccessIndicatorController::class, 'store']);
        Route::get('/{id}/edit', [SuccessIndicatorController::class, 'edit']);
        Route::patch('/{id}', [SuccessIndicatorController::class, 'update']);
        Route::delete('/{id}', [SuccessIndicatorController::class, 'destroy']);
    });


    Route::prefix('/OfficeAccountable')->group(function () {
        Route::get('/{id}', [OfficeAccountableController::class, 'index']);
        Route::get('/create/{id}', [OfficeAccountableController::class, 'create']);
        Route::post('/store', [OfficeAccountableController::class, 'store']);
        Route::get('/{id}/edit', [OfficeAccountableController::class, 'edit']);
        Route::patch('/{id}', [OfficeAccountableController::class, 'update']);
        Route::delete('/{id}', [OfficeAccountableController::class, 'destroy']);
    });

    Route::prefix('/Rating')->group(function () {
        Route::get('/{id}', [RatingController::class, 'index']);
        Route::get('/create/{id}', [RatingController::class, 'create']);
        Route::post('/store', [RatingController::class, 'store']);
        Route::get('/{id}/edit', [RatingController::class, 'edit']);
        Route::patch('/{id}', [RatingController::class, 'update']);
        Route::delete('/{id}', [RatingController::class, 'destroy']);
    });

    Route::prefix('/Quality')->group(function () {
        Route::get('/{id}', [QualityController::class, 'index']);
        Route::get('/create/{id}', [QualityController::class, 'create']);
        Route::post('/store', [QualityController::class, 'store']);
        Route::get('/{id}/edit', [QualityController::class, 'edit']);
        Route::patch('/{id}', [QualityController::class, 'update']);
        Route::delete('/{id}', [QualityController::class, 'destroy']);
    });

    Route::prefix('/Timeliness')->group(function () {
        Route::get('/{id}', [TimelinessController::class, 'index']);
        Route::get('/create/{id}', [TimelinessController::class, 'create']);
        Route::post('/store', [TimelinessController::class, 'store']);
        Route::get('/{id}/edit', [TimelinessController::class, 'edit']);
        Route::patch('/{id}', [TimelinessController::class, 'update']);
        Route::delete('/{id}', [TimelinessController::class, 'destroy']);
    });

    Route::prefix('/QualityRemarks')->group(function () {
        Route::get('/{id}', [QualityRemarksController::class, 'index']);
        Route::get('/create/{id}', [QualityRemarksController::class, 'create']);
        Route::post('/store', [QualityRemarksController::class, 'store']);
        Route::get('/{id}/edit', [QualityRemarksController::class, 'edit']);
        Route::patch('/{id}', [QualityRemarksController::class, 'update']);
        Route::delete('/{id}', [QualityRemarksController::class, 'destroy']);
    });

    Route::prefix('/RatingRemarks')->group(function () {
        Route::get('/{id}', [RatingRemarksController::class, 'index']);
        Route::get('/create/{id}', [RatingRemarksController::class, 'create']);
        Route::post('/store', [RatingRemarksController::class, 'store']);
        Route::get('/{id}/edit', [RatingRemarksController::class, 'edit']);
        Route::patch('/{id}', [RatingRemarksController::class, 'update']);
        Route::delete('/{id}', [RatingRemarksController::class, 'destroy']);
    });


    Route::prefix('/TimelinessRemarks')->group(function () {
        Route::get('/{id}', [TimelinessRemarksController::class, 'index']);
        Route::get('/create/{id}', [TimelinessRemarksController::class, 'create']);
        Route::post('/store', [TimelinessRemarksController::class, 'store']);
        Route::get('/{id}/edit', [TimelinessRemarksController::class, 'edit']);
        Route::patch('/{id}', [TimelinessRemarksController::class, 'update']);
        Route::delete('/{id}', [TimelinessRemarksController::class, 'destroy']);
    });

    Route::prefix('/Monitoring')->group(function () {
        Route::get('/{id}', [MonitoringController::class, 'index']);
        Route::get('/create/{id}', [MonitoringController::class, 'create']);
        Route::post('/store', [MonitoringController::class, 'store']);
        Route::get('/{id}/edit', [MonitoringController::class, 'edit']);
        Route::patch('/{id}', [MonitoringController::class, 'update']);
        Route::delete('/{id}', [MonitoringController::class, 'destroy']);
    });

    //SubSector
    Route::prefix('/subsector')->group(function () {});

    //DIVISIONS
    Route::prefix('divisions')->group(function () {
        Route::get('/{papsID}', [DivisionController::class, 'index']);
        Route::get('/create/{papsID}', [DivisionController::class, 'create']);
        Route::post('/store', [DivisionController::class, 'store']);
        Route::get('/{id}/edit', [DivisionController::class, 'edit']);
        Route::patch('/{id}', [DivisionController::class, 'update']);
        Route::delete('/{id}', [DivisionController::class, 'destroy']);
    });

    //HOSPITALS
    Route::prefix('hospitals')->group(function () {
        Route::get('/{papsID}', [HospitalOutputController::class, 'index']);
        Route::get('/create/{papsID}', [HospitalOutputController::class, 'create']);
        Route::post('/store', [HospitalOutputController::class, 'store']);
        Route::get('/{id}/edit', [HospitalOutputController::class, 'edit']);
        Route::patch('/{id}', [HospitalOutputController::class, 'update']);
        Route::delete('/{id}', [HospitalOutputController::class, 'destroy']);
    });

    Route::prefix('hospital_division')->group(function () {
        Route::get('/{idhpcr}', [HospitalDivisionOutputController::class, 'index']);
        Route::get('/create/{idhpcr}', [HospitalDivisionOutputController::class, 'create']);
        Route::post('/store', [HospitalDivisionOutputController::class, 'store']);
        Route::get('/{id}/edit', [HospitalDivisionOutputController::class, 'edit']);
        Route::patch('/{id}', [HospitalDivisionOutputController::class, 'update']);
        Route::delete('/{id}', [HospitalDivisionOutputController::class, 'destroy']);
    });

    Route::prefix('hospital_section')->group(function () {
        Route::get('/{idhdpcr}', [HospitalSectionOutputController::class, 'index']);
        Route::get('/create/{idhdpcr}', [HospitalSectionOutputController::class, 'create']);
        Route::post('/store', [HospitalSectionOutputController::class, 'store']);
        Route::get('/{id}/edit', [HospitalSectionOutputController::class, 'edit']);
        Route::patch('/{id}', [HospitalSectionOutputController::class, 'update']);
        Route::delete('/{id}', [HospitalSectionOutputController::class, 'destroy']);
    });

    Route::prefix('hospital_individual')->group(function () {
        Route::get('/{idhspcr}', [HospitalIndividualOutputController::class, 'index']);
        Route::get('/create/{idhspcr}', [HospitalIndividualOutputController::class, 'create']);
        Route::post('/store', [HospitalIndividualOutputController::class, 'store']);
        Route::get('/{id}/edit', [HospitalIndividualOutputController::class, 'edit']);
        Route::patch('/{id}', [HospitalIndividualOutputController::class, 'update']);
        Route::delete('/{id}', [HospitalIndividualOutputController::class, 'destroy']);
    });

    //Office Performance Commitment Rating Form
    Route::prefix('/opcr/form')->group(function () {
        Route::get('/{opcr_id}/{FFUNCCOD}', [OfficePerformanceCommitmentRatingController::class, 'index']);
        Route::get('/create/{FFUNCCOD}', [OfficePerformanceCommitmentRatingController::class, 'create']);
        Route::post('/store', [OfficePerformanceCommitmentRatingController::class, 'store']);
        Route::post('/{opcr_id}/submit', [OfficePerformanceCommitmentRatingController::class, 'submit_recall']);
        Route::get('/{id}/edit', [OfficePerformanceCommitmentRatingController::class, 'edit']);
        Route::patch('/{id}', [OfficePerformanceCommitmentRatingController::class, 'update']);
        Route::delete('/{id}', [OfficePerformanceCommitmentRatingController::class, 'destroy']);
        Route::get('/print/o/p/c/r', [OfficePerformanceCommitmentRatingController::class, 'print']);
    });
    // OPCR Accomplishments
    Route::prefix('/monthly-paps-accomplishments')->group(function () {
        Route::get('/', [OpcrAccomplishmentController::class, 'accomplishment_opcr']);
    });
    // MOV API
    Route::prefix('/movs')->group(function () {
        Route::get('', [MeansOfVerificationController::class, 'index']);
        Route::get('/get/mov/{opcr_id}', [MeansOfVerificationController::class, 'get_mov']);
        Route::post('/save/{opcr_id}/{opcr_list_id}', [MeansOfVerificationController::class, 'store']);
        Route::delete('/delete-multiple/many', [MeansOfVerificationController::class, 'destroyMultiple']);
        Route::get('/download/{id}', [MeansOfVerificationController::class, 'download1']);
        // file-upload/delete-multiple/many
    });
    //OPCR List
    Route::prefix('opcrlist')->group(function () {
        Route::get('/', [OfficePerformanceCommitmentRatingListController::class, 'direct']);
        Route::get('/{FFUNCCOD}', [OfficePerformanceCommitmentRatingListController::class, 'index']);
        Route::get('/create/{FFUNCCOD}', [OfficePerformanceCommitmentRatingListController::class, 'create']);
        Route::post('/store', [OfficePerformanceCommitmentRatingListController::class, 'store']);
        Route::get('/{id}/edit', [OfficePerformanceCommitmentRatingListController::class, 'edit']);
        Route::patch('/{id}', [OfficePerformanceCommitmentRatingListController::class, 'update']);
        Route::delete('/{id}', [OfficePerformanceCommitmentRatingListController::class, 'destroy']);
        Route::post('/FROM/{opcr_list_id_from}/TO/{opcr_list_id_to}', [OfficePerformanceCommitmentRatingListController::class, 'copy_from_to']);
    });

    //OPCR Target
    Route::prefix('opcrtarget')->group(function () {
        Route::get('/{opcr_list_id}', [OpcrTargetController::class, 'index']);
        Route::get('/create/{opcr_list_id}', [OpcrTargetController::class, 'create']);
        Route::post('/store', [OpcrTargetController::class, 'store']);
        Route::get('/{opcr_list_id}/edit', [OpcrTargetController::class, 'edit']);
        Route::patch('/', [OpcrTargetController::class, 'update']);
        Route::delete('/{id}', [OpcrTargetController::class, 'destroy']);
        // /opcrtarget/" + this.opcr_list_id + "/submit/target/opcr/now
        Route::post('/{opcr_list_id}/submit/target/opcr/now', [OpcrTargetController::class, 'submit_opcr_target']);
    });

    Route::prefix('opcrtargetrevised')->group(function () {
        Route::get('/{opcr_list_id}', [OpcrTargetController::class, 'indexrevised']);
        // Route::get('/create/{opcr_list_id}', [OpcrTargetController::class, 'create']);
        Route::post('/store/{idopcr}/{idpaps}', [OpcrTargetController::class, 'storerevised']);
        Route::post('/loopstore/{idopcr}', [OpcrTargetController::class, 'storeloop']);
        Route::post('/store/bulk/then/{idopcr}/{bulk_selected}', [OpcrTargetController::class, 'savePaps']);
        Route::delete('/{id}', [OpcrTargetController::class, 'destroyrevised']);
    });
    //OPCR Budgeting
    Route::prefix('opcrbudgeting')->group(function () {
        Route::get('/{opcr_list_id}', [OpcrTargetBudgetController::class, 'create']);
        Route::get('/edit/{id}', [OpcrTargetBudgetController::class, 'edit']);
        // Route::get('/create/{opcr_list_id}', [OpcrTargetBudgetController::class, 'create']);
        Route::post('/store', [OpcrTargetBudgetController::class, 'store']);
        Route::patch('/update/{id}', [OpcrTargetBudgetController::class, 'update']);
    });
    //OPCR Accomplishment
    Route::prefix('opcraccomplishment')->group(function () {
        Route::get('/{opcr_list_id}', [OpcrAccomplishmentController::class, 'index']);
        Route::get('/create/{opcr_list_id}', [OpcrAccomplishmentController::class, 'create']);
        Route::post('/store', [OpcrAccomplishmentController::class, 'store']);
        Route::get('/{opcr_list_id}/edit', [OpcrAccomplishmentController::class, 'edit']);
        Route::patch('/', [OpcrAccomplishmentController::class, 'update']);
        Route::delete('/{id}', [OpcrAccomplishmentController::class, 'destroy']);
    });

    //REVIEW/APPROVE Accomplishments/Targets/Ratings
    Route::prefix('review-approve')->group(function () {
        Route::prefix('/targets')->group(function () {
            Route::get('/', [TargetAccomplishmentReviewApproveController::class, 'index_target']);
            Route::get('/{opcr_list_id}/review', [TargetAccomplishmentReviewApproveController::class, 'reviewOPCRTarget']);
            Route::post('/approve/{opcr_list_id}/opcr', [TargetAccomplishmentReviewApproveController::class, 'approveOPCRTarget']);
            Route::post('/return/remarks/{opcr_list_id}/opcr', [TargetAccomplishmentReviewApproveController::class, 'returnOpcrTarget']);
            Route::get('/{opcr_list_id}/view/opcr/target/submission', [TargetAccomplishmentReviewApproveController::class, 'viewTarget']);
        });
        Route::prefix('/ratings')->group(function () {
            Route::get('/', [TargetAccomplishmentReviewApproveController::class, 'index_rating']);
            Route::get('/{opcr_list_id}/review', [TargetAccomplishmentReviewApproveController::class, 'reviewOPCRRating']);
            Route::post('/approve/{opcr_list_id}/opcr', [TargetAccomplishmentReviewApproveController::class, 'approveOPCRRating']);
            Route::post('/return/remarks/{opcr_list_id}/opcr', [TargetAccomplishmentReviewApproveController::class, 'returnOpcrRating']);
            Route::post('/submit/opcr/{column}/{opcr_rating_id}/{item_score}', [TargetAccomplishmentReviewApproveController::class, 'update_rating_score']);
            Route::patch('/save-remarks/{opcr_list_id}', [TargetAccomplishmentReviewApproveController::class, 'saveRemarks']);
            Route::delete('/remark/{remark_id}', [TargetAccomplishmentReviewApproveController::class, 'deleteRemark']);
            Route::get('/{opcr_list_id}/view/opcr/rating/submission', [TargetAccomplishmentReviewApproveController::class, 'viewRating']);
            Route::patch('/set/rating/type/{rating_type}/{id}', [TargetAccomplishmentReviewApproveController::class, 'updateRatingType']);

        });
        Route::prefix('/ipp')->group(function () {
            Route::get('/', [ProjectProfileTrackingController::class, 'index_ipp']);
            // Route::get('/{opcr_list_id}/review', [ProjectProfileTrackingController::class, 'reviewOPCRRating']);
            // Route::post('/approve/{opcr_list_id}/opcr', [ProjectProfileTrackingController::class, 'approveOPCRRating']);
            // Route::post('/return/remarks/{opcr_list_id}/opcr', [ProjectProfileTrackingController::class, 'returnOpcrRating']);
            // Route::post('/submit/opcr/{column}/{opcr_rating_id}/{item_score}', [ProjectProfileTrackingController::class, 'update_rating_score']);
            // Route::get('/{opcr_list_id}/view/opcr/rating/submission', [ProjectProfileTrackingController::class, 'viewRating']);
        });
        // approveOPCRTarget
        // reviewOPCRAccomplishment
        // approveOPCRAccomplishment
        // reviewOPCRRating
        // approveOPCRRating
    });
    Route::prefix('review-approve-ratings-ppdo')->group(function(){
        Route::get('/', [TargetAccomplishmentReviewApproveController::class, 'index_rating']);
    });
    Route::prefix('review-approve-ratings')->group(function(){
        Route::get('/', [TargetAccomplishmentReviewApproveController::class, 'index_rating']);
        Route::get('/{opcr_list_id}/view/opcr/rating/submission',
        [TargetAccomplishmentReviewApproveController::class, 'download_rating'])
        ->name('rating.download.excel');
    });
    //IPCR List
    Route::prefix('IPCR')->group(function () {
        Route::get('/direct', [OpcrAccomplishmentController::class, 'index']);
    });
    //AIP
    Route::prefix('/AIP')->group(function () {
        Route::get('/', [AIPController::class, 'index']);
        Route::get('/direct', [AIPController::class, 'direct']);
        Route::get('/create/{id}', [AIPController::class, 'create']);
        Route::post('/store', [AIPController::class, 'store']);
        Route::get('/{id}/edit', [AIPController::class, 'edit']);
        Route::patch('/{id}', [AIPController::class, 'update']);
        Route::delete('/{id}', [AIPController::class, 'destroy']);
    });
    //Appropriations
    Route::prefix('/appropriations')->group(function () {
        Route::get('/{idpaps}', [AppropriationController::class, 'index']);
        Route::get('/create/{idpaps}', [AppropriationController::class, 'create']);
        Route::post('/store', [AppropriationController::class, 'store']);
        Route::get('/{id}/edit', [AppropriationController::class, 'edit']);
        Route::patch('/', [AppropriationController::class, 'update']);
        Route::delete('/{id}', [AppropriationController::class, 'destroy']);
    });
    Route::prefix('/ooes')->group(function () {
        Route::get('/filtered/ooes', [ObjectOfExpenditureController::class, 'filterOOES']);
        //Route::get('/filtered/ooes',[ObjectOfExpenditureController::class,'filterOOEPrograms']);
    });

    Route::prefix('/individual/outputs')->group(function () {
        Route::get('/{idDPCR}', [IndividualFinalOutputController::class, 'index']);
        Route::get('/create/{idDPCR}', [IndividualFinalOutputController::class, 'create']);
        Route::post('/store', [IndividualFinalOutputController::class, 'store']);
        Route::get('/{id}/edit', [IndividualFinalOutputController::class, 'edit']);
        Route::patch('/', [IndividualFinalOutputController::class, 'update']);
        Route::delete('/{id}', [IndividualFinalOutputController::class, 'destroy']);
        Route::post('/import/file/data', [IndividualFinalOutputController::class, 'importIPCR']);
    });

    Route::prefix('/timerange')->group(function () {
        Route::get('/', [TimeRangeController::class, 'index']);
        Route::get('/create', [TimeRangeController::class, 'create']);
        Route::post('/store', [TimeRangeController::class, 'store']);
        Route::get('/{id}/edit', [TimeRangeController::class, 'edit']);
        Route::patch('/', [TimeRangeController::class, 'update']);
        Route::delete('/{id}', [IndividualFinalOutputController::class, 'destroy']);
        Route::post('/import/file/data', [TimeRangeController::class, 'importIPCR']);
    });
    Route::prefix('/division_outputs')->group(function () {
        Route::get('/', [DivisionOutputController::class, 'index']);
        Route::get('/create', [DivisionOutputController::class, 'create']);
        Route::get('/{id}/edit', [DivisionOutputController::class, 'edit']);
        Route::post('/store', [DivisionOutputController::class, 'store']);
        Route::patch('/', [DivisionOutputController::class, 'update']);
        Route::delete('/{id}', [DivisionOutputController::class, 'destroy']);
        Route::get('/get/division_outputs/list', [DivisionOutputController::class, 'getDivOutput']);
    });
    Route::prefix('/submfos')->group(function () {
        Route::get('/{idmfo}', [SubMfoController::class, 'index']);
        Route::get('/create/{idmfo}', [SubMfoController::class, 'create']);
        Route::get('/get/submfo/list', [SubMfoController::class, 'getSubMFOs']);
        Route::post('/store', [SubMfoController::class, 'store']);
        Route::get('/{id}/edit', [SubMfoController::class, 'edit']);
        Route::patch('/', [SubMfoController::class, 'update']);
        Route::delete('/{id}', [SubMfoController::class, 'destroy']);
    });
    //UPDATE current opcr_ratings
    Route::prefix('/update/opcr/')->group(function () {
        Route::get('/rating', [OfficePerformanceCommitmentRatingController::class, 'update_current']);
        Route::get('/generate/rating', [OfficePerformanceCommitmentRatingController::class, 'generate_rating']);
    });
    // Route::prefix('/aip')->group(function(){
    //     Route::get('/{id}',[aip_controller::class,'index']);
    //     Route::get('/create/{id}',[aip_controller::class,'create']);
    //     Route::post('/store',[aip_controller::class,'store']);
    //     Route::get('/{id}/edit', [aip_controller::class, 'edit']);
    //     Route::patch('/{id}', [aip_controller::class, 'update']);
    //     Route::delete('/{id}', [aip_controller::class, 'destroy']);
    // });

    Route::prefix('viewOPCR')->group(function () {
        Route::get('/FFUNCOD', [OPCRController::class, 'viewOPCR']);
    });


    Route::prefix('/DailyAccomplishment')->group(function () {
        Route::get('/direct', [DailyAccomplishmentController::class, 'direct']);
        Route::get('/direct/create', [DailyAccomplishmentController::class, 'direct_create']);
        Route::get('/{id}', [DailyAccomplishmentController::class, 'index']);
        Route::get('/create/{id}', [DailyAccomplishmentController::class, 'create']);
        Route::post('/save', [DailyAccomplishmentController::class, 'save']);
        Route::post('/store', [DailyAccomplishmentController::class, 'store']);
        Route::get('/{id}/{idmfo}/edit', [DailyAccomplishmentController::class, 'edit']);
        Route::patch('/{id}', [DailyAccomplishmentController::class, 'update']);
        Route::patch('/update/{id}', [DailyAccomplishmentController::class, 'updated']);
        Route::delete('/{id}', [DailyAccomplishmentController::class, 'destroy']);
    });

    Route::prefix('/IPCR')->group(function () {
        Route::get('/direct', [IPCRController::class, 'direct']);
        Route::get('/direct/create', [IPCRController::class, 'direct_create']);
        Route::get('/{id}', [IPCRController::class, 'index']);
    });

    Route::prefix('/AddAccomplishment')->group(function () {
        Route::get('/', [AddAccomplishmentController::class, 'index']);
        Route::get('/create', [AddAccomplishmentController::class, 'create']);
        Route::post('/store', [AddAccomplishmentController::class, 'store']);
        Route::get('/{id}/edit', [AddAccomplishmentController::class, 'edit']);
        Route::patch('/{id}', [AddAccomplishmentController::class, 'update']);
        Route::delete('/{id}', [AddAccomplishmentController::class, 'destroy']);
    });
    // Annual Investment Plans
    Route::prefix('/annual-investment-plans')->group(function () {
        Route::get('/', [AnnualInvestmentPlanController::class, 'index']);
        Route::get('/create', [AnnualInvestmentPlanController::class, 'create']);
        Route::post('/', [AnnualInvestmentPlanController::class, 'store']);
        Route::get('/{id}/edit', [AnnualInvestmentPlanController::class, 'edit']);
        Route::patch('/{id}', [AnnualInvestmentPlanController::class, 'update']);
        Route::delete('/{id}', [AnnualInvestmentPlanController::class, 'destroy']);
        Route::get('/total/amount/of/ooe', [AnnualInvestmentPlanController::class, 'calculate_total_amount']);
    });

    // Expected Outputs
    Route::prefix('/expected-outputs')->group(function () {
        Route::get('/{aip_id}', [ExpectedOutputController::class, 'index']);
        Route::get('/create/{aip_id}', [ExpectedOutputController::class, 'create']);
        Route::post('/', [ExpectedOutputController::class, 'store']);
        Route::get('/{id}/edit/{aip_id}', [ExpectedOutputController::class, 'edit']);
        Route::patch('/{id}', [ExpectedOutputController::class, 'update']);
        Route::delete('/{id}', [ExpectedOutputController::class, 'destroy']);
    });

    // Appropriations
    Route::prefix('/appropriation-amounts')->group(function () {
        Route::get('/{aip_id}', [AppropriationAmountController::class, 'index']);
        Route::get('/create/{aip_id}', [AppropriationAmountController::class, 'create']);
        Route::post('/', [AppropriationAmountController::class, 'store']);
        Route::get('/{id}/edit/{aip_id}', [AppropriationAmountController::class, 'edit']);
        Route::patch('/{id}', [AppropriationAmountController::class, 'update']);
        Route::delete('/{id}', [AppropriationAmountController::class, 'destroy']);
    });

    Route::prefix('/appropriation-budget')->group(function () {
        Route::get('/', [AppropriationBudgetController::class, 'index']);
        Route::get('/get/{idrevplan}/budget/appropriations', [AppropriationBudgetController::class, 'appropriations']);
        Route::get('/get/{idrevplan}/ooes', [AppropriationBudgetController::class, 'ooes']);
        // Route::get('/create/{aip_id}', [AppropriationAmountController::class, 'create']);
        Route::post('/', [AppropriationBudgetController::class, 'store']);
        Route::get('/{id}/edit', [AppropriationBudgetController::class, 'edit']);
        Route::patch('/{id}', [AppropriationBudgetController::class, 'update']);
        Route::delete('/{id}', [AppropriationBudgetController::class, 'destroy']);
    });
    // Sentence Identifier Tester
    Route::prefix('/sentence')->group(function () {
        Route::get('/', [SentenceParserController::class, 'my_method1']);
    });
    //Non-existent Routes
    //
});


Route::prefix('printOPCR')->group(function () {
    // Route::get('/FFUNCOD', [OPCRController::class, 'OPCRprint']);
    Route::get('/FFUNCOD', [OPCRController::class, 'MFO']);
    Route::get('/PAPS', [OPCRController::class, 'PAPS']);
    Route::get('/Rating', [OPCRController::class, 'Rating']);
    Route::get('/Quality', [OPCRController::class, 'Quality']);
    Route::get('/Timeliness', [OPCRController::class, 'Timeliness']);
});

Route::prefix('print')->group(function () {
    Route::get('/RaaoData2', [RAAOController::class, 'raao_jasper']);
    Route::get('/RaaoData/xyz', [RAAOController::class, 'rrr']);
    Route::get('/printRaao', [RAAOController::class, 'rrr']);
    Route::get('/RaaoDataM', [RAAOController::class, 'raao_jasper_3']);
    Route::get('/RaaoData2/target_qty1', [RAAOController::class, 'raao_jasper_tgqty1']);
    Route::get('/RaaoData/{year?}/{userType?}/{lgu?}/{dept?}');
    Route::get('/PPA_Data/{year?}/{userType?}/{lgu?}/{dept?}', function () {
        $today = Carbon::now();
        $year = '' . $today->year . '';
        $data_new = DB::connection('mysql2')
            ->table(DB::raw('(select raaohs.tyear,
                                                    raaohs.aipcode,
                                                    raaohs.fraodesc,
                                                    raaohs.falltcod,
                                                    raaohs.ffunccod,
                                                    raaohs.recid,
                                                    sources.fsource from raaohs
                                                    left join sources on
                                                    sources.recid = raaohs.idsource
                                                    where fraotype>\'2\') a'))
            ->select(
                'a.tyear',
                'a.fraodesc',
                'a.falltcod',
                'a.aipcode',
                'a.ffunccod',
                'a.fsource',
                'a.recid',
                'b.appropriation',
                'b.obligations',
                'b.idraao',
                't.target_qty',
                't.target_qty1',
                't.target_qty2',
                't.target_qty3',
                't.target_qty4',
                't.idraao',
                't.description',
                'i.description',
                DB::raw('(100*(b.obligations/b.appropriation)) as utilization')
            )
            ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'), 'a.recid', '=', 'b.idraao')
            ->leftJoin(DB::raw('my_raao_new.targets t'), 't.idraao', '=', 'b.idraao')
            ->leftJoin(DB::raw('my_raao_new.indicators i'), 't.idindicator', '=', 'i.id')
            ->get();

        $userType = request('userType');

        $ppa_desc = $data_new->pluck('fraodesc');
        $total_cost = $data_new->pluck('appropriation');
        $indicator = $data_new->pluck('description');
        $target = $data_new->pluck('target_qty');
        $target_qty1 = $data_new->pluck('target_qty1');
        $target_qty2 = $data_new->pluck('target_qty2');
        $target_qty3 = $data_new->pluck('target_qty3');
        $target_qty4 = $data_new->pluck('target_qty4');
        return [
            'userType' => $userType,
            'lgu' => request('lgu'),
            'dept' => request('dept'),
            'dept_head' => 'Department Head Name',
            'lce' => 'Local Chief Executive',
            'ppa_desc' => $ppa_desc,
            'total_cost' => $total_cost,
            'indicator' => $indicator,
            'target' => $target,
            'target_qty1' => $target_qty1,
            'target_qty2' => $target_qty2,
            'target_qty3' => $target_qty3,
            'target_qty4' => $target_qty4,
        ];
    });
    Route::get('/jasadmin', [RAAOController::class, 'raao_jasper_admin']);
    Route::get('/jasuser', [RAAOController::class, 'raao_jasper_user']);
    Route::get('/LogFrame/{FFUNCCOD}', [LogFrameController::class, 'printLog']);
});
Route::prefix('target/print')->group(function () {
    Route::get('/types', [TargetController::class, 'target_types']);
});
Route::prefix('opcr/print')->group(function () {
    Route::get('/rating/form', [OfficePerformanceCommitmentRatingController::class, 'print_class']);
    Route::get('/rating', [OfficePerformanceCommitmentRatingController::class, 'print_class3']);
    Route::get('/main', [OfficePerformanceCommitmentRatingController::class, 'print_main']);
    Route::get('/mfo', [OfficePerformanceCommitmentRatingController::class, 'print_mfo']);
    Route::get('/paps', [OfficePerformanceCommitmentRatingController::class, 'print_paps']);
    Route::get('/targets', [OfficePerformanceCommitmentRatingController::class, 'print_success_targets']);
    Route::get('/rating', [OfficePerformanceCommitmentRatingController::class, 'print_rating']);
    Route::get('/office', [OfficePerformanceCommitmentRatingController::class, 'print_office']);
});

Route::get('test/opcr_id/{opcr_id}', [OfficePerformanceCommitmentRatingListController::class, 'getRating']);
Route::prefix('printlog')->group(function () {
    Route::get('/SocGoal', [LogFrameController::class, 'SocGoal']);
    Route::get('/logframeMFO', [LogFrameController::class, 'mfo']);
    Route::get('/logframePAPS', [LogFrameController::class, 'paps']);
    Route::get('/logframeSocGoals', [LogFrameController::class, 'socgoals']);
    Route::get('/logframeSectoral', [LogFrameController::class, 'sectoral']);
    Route::get('/logframeOrganizational', [LogFrameController::class, 'organizational']);
    Route::get('/logframeSectorsFiltered', [LogFrameController::class, 'sectorFiltered']);
    Route::get('/logframe/Sectors', [LogFrameController::class, 'sectoralClassified']);

    Route::get('/{FFUNCCOD}', [LogFrameController::class, 'printlogpublic']);
});
Route::prefix('daily_accomplishments/')->group(function () {
    Route::get('main', [DailyAccomplishmentController::class, 'main_accomplishment']);
    Route::get('mfos', [DailyAccomplishmentController::class, 'mfo_accomplishment']);
    Route::get('paps', [DailyAccomplishmentController::class, 'paps_accomplishment']);
    Route::get('daily', [DailyAccomplishmentController::class, 'daily_accomplishment']);
});
Route::prefix('hgdg/print')->group(function () {
    Route::get('checklist', [HGDGScoreController::class, 'getChecklist']);
    Route::get('question', [HGDGScoreController::class, 'getQuestions']);
});

Route::prefix('printLBP')->group(function () {
    Route::get('/MFO', [AIPController::class, 'MFO']);
    Route::get('/PAPS', [AIPController::class, 'PAPS']);
});
// LBP Form 2 Printing
Route::prefix('print/appropriations')->group(function () {
    Route::get('/', [AppropriationController::class, 'main']);
    Route::get('/paps/types', [AppropriationController::class, 'paps_types']);
    Route::get('/paps', [AppropriationController::class, 'paps']);
    Route::get('/paps/categories/list', [AppropriationController::class, 'paps_categories']);
    Route::get('/paps/appropriations/print/all', [AppropriationController::class, 'appropriations']);
});
Route::prefix('print_all_single_API')->group(function () {
    Route::get('/', [AppropriationController::class, 'app']);
    // PAPS
    Route::get('/paps', [AppropriationController::class, 'paps3']);
    // Categories
    Route::get('/categories', [AppropriationController::class, 'paps_categories3']);
    // Appropriations
    Route::get('/paps/appropriations', [AppropriationController::class, 'appropriations3']);
});


// OPCR RATING NEW VERSION
Route::prefix('opcr-accomplishments/print')->group(function () {
    Route::get('/', [OfficePerformanceCommitmentRatingController::class, 'print_accomplishment']);
});

Route::prefix('opcr_target/print')->group(function () {
    Route::get('/new', [OpcrTargetController::class, 'print_opcr_targets']);
    Route::get('/new/printing', [OpcrTargetController::class, 'printing_targets_new']);
});

Route::prefix('division/print')->group(function () {
    Route::get('/MFO_print', [DivisionController::class, 'MFO_Division']);
    Route::get('/PAPS_print', [DivisionController::class, 'PAPS_Division']);
    Route::get('/dpcr', [DivisionController::class, 'DPCR']);
});

Route::prefix('lbp2/print')->group(function () {
    Route::get('/', [AppropriationBudgetController::class, 'print_lbp2']);
});

Route::prefix('lbp_by_ppa2')->group(function () {
    Route::get('/', [AppropriationBudgetController::class, 'print_lbp2']);
});

Route::prefix('aip')->group(function () {
    Route::get('/printing', [AnnualInvestmentPlanController::class, 'print_OPCR']);
});

Route::prefix('/OPCRpaps')->group(function () {
    Route::get('/PPMP/PPA', [ProjectProfileController::class, 'PPMP_PPA']);
    Route::get('/budget/prep', [ProjectProfileController::class, 'budget_prep']);
});

// Route::prefix('api_ppa2')->group(function () {
//     Route::get('/', [RevisionPlanController::class, 'api_ppa']);
// });
// Route::prefix('opcr-accomplishments/print')->group(function () {
//     Route::get('/', [OfficePerformanceCommitmentRatingController::class, 'print_accomplishment']);
// });
//Non-existent routes
Route::get('{any}', [DashBoardController::class, 'not_found'])->where('any', '.*')->middleware('auth');
