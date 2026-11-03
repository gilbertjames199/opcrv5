<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectProfileTracking extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='project_profile_trackings';
    protected $guarded = ['id'];

    public function revisionPlan()
    {
        return $this->belongsTo(RevisionPlan::class, 'revision_plan_id', 'id');
    }
}
