<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RevisionPlan extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table = 'revision_plans';
    protected $guarded = [];

    public function clonedVersions()
    {
        return $this->hasMany(RevisionPlan::class, 'reference_profile_id', 'id');
    }

    public function originalVersion()
    {
        return $this->belongsTo(RevisionPlan::class, 'reference_profile_id', 'id');
    }
    public function checklist()
    {
        return $this->hasOne(HGDG_Checklist::class, 'id', 'checklist_id');
    }
    public function budgetPrepDetails()
    {
        return $this->hasMany(
            BudgetPrepDetail::class,
            'revision_plan_id',
            'id'
        );
    }
    public function hgdgScores()
    {
        return $this->hasMany(HGDGScore::class, 'idrevplan', 'id');
    }
    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
    public function budget()
    {
        return $this->hasMany(BudgetRequirement::class, 'revision_plan_id', 'id');
        // ->where('table_name', 'revision_plans');
    }

    public function cashDisbursementForecasts()
    {
        return $this->hasMany(CashDisbursementForecast::class, 'revision_plan_id', 'id');
    }
    public function paps()
    {
        return $this->belongsTo(ProgramAndProject::class, 'idpaps', 'id');
    }
    public function gasPaps()
    {
        return $this->hasOne(ProgramAndProject::class, 'FFUNCCOD', 'FFUNCCOD')
                    ->where('type', 'GAS')
                    ->orderBy('id', 'asc'); // picks the first match by ID
    }
    public function office()
    {
        return $this->hasOne(FFUNCCOD::class, 'FFUNCCOD', 'FFUNCCOD');
    }
    public function strategyProject()
    {
        return $this->hasMany(StrategyProject::class, 'project_id', 'id');
    }
    public function activityProject()
    {
        return $this->hasMany(ActivityProject::class, 'project_id', 'id');
    }
    public function teamPlans()
    {
        return $this->hasMany(TeamPlan::class, 'revision_plan_id', 'id');
    }
    public function monitoringAndEvaluations()
    {
        return $this->hasMany(Monitoring_and_evaluation::class, 'revision_plan_id', 'id');
    }
    public function riskManagements()
    {
        return $this->hasMany(Risk_manangement::class, 'revision_plan_id', 'id');
    }
    public function signatories()
    {
        return $this->hasMany(Signatory::class, 'revision_plan_id', 'id');
    }

    public function projectProfileTrackings()
    {
        return $this->hasMany(ProjectProfileTracking::class, 'revision_plan_id', 'id');
    }
    public function boxNumber()
    {
        return $this->belongsTo(HGDG_Checklist::class, 'checklist_id', 'id');
    }
    // protected $fillable = [
    //     'id',
    //     'idpaps',
    //     'aip_code',
    //     'project_title',
    //     'list_of_lgu_covered',
    //     'date_start',
    //     'date_end',
    //     'beneficiary_male',
    //     'beneficiary_female',
    //     'baseline_male',
    //     'baseline_female',
    //     'baseline_total',
    //     'amount',
    //     'attributed_amount',
    //     'checklist_id',
    //     'hgdg_score',
    //     'hgdg_percent',
    //     'rationale',
    //     'objective',
    //     'beneficiaries',
    //     'version',
    //     'type',
    //     'final',
    //     'supplemental',
    //     'user_id',
    // ];
}
