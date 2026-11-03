<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Monitoring_and_evaluation extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'monitoring_and_evaluations';
    protected $fillable = [
        'evaluation_mechanism_tool',
        'opr',
        'target_beneficiaries',
        'gad',
        'revision_plan_id'
    ];

    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
}
