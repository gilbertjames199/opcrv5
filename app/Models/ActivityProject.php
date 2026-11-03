<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityProject extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'activity_projects';
    protected $guarded = [
        'id'
    ];
    public function activity()
    {
        return $this->belongsTo(Activity::class, 'activity_id', 'id');
    }
    public function expected_output()
    {
        return $this->hasMany(ExpectedRevisedOutput::class, 'activity_project_id', 'id');
    }
    public function expected_outcome()
    {
        return $this->hasMany(ExpectedRevisedOutcome::class, 'activity_project_id', 'id');
    }
    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
    public function revisionPlan()
    {
        return $this->belongsTo(RevisionPlan::class,'project_id','id');
    }

    public function referenceActivityProject()
    {
        return $this->belongsTo(ActivityProject::class, 'reference_activity_project_id', 'id');
    }
}
