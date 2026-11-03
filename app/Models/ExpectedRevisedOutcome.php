<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpectedRevisedOutcome extends Model
{
    use HasFactory;
    protected $guarded=['id'];
    public function activityProject()
    {
        return $this->belongsTo(ActivityProject::class, 'activity_id', 'id');
    }

    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
}
