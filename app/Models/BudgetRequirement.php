<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BudgetRequirement extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'budget_requirements';
    protected $guarded = ['id'];
    // protected $fillable = [
    //     'particulars',
    //     'account_code',
    //     'amount',
    //     'category',
    //     'category_gad',
    //     'revision_opl'
    //     'source'
    // ];

    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }

    public function all_comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id')->where('table_name', 'budget_requirements');
        // ->where('table_name', 'revision_plans');
    }
    public function revisionPlan()
    {
        return $this->belongsTo(RevisionPlan::class, 'revision_plan_id', 'id');
    }

    public function objectOfExpenditure(){
        return $this->belongsTo(OOE::class, 'idooe', 'recid');
    }

    public function referenceBudgetRequirement()
    {
        return $this->belongsTo(BudgetRequirement::class, 'reference_budget_id', 'id');
    }
}
