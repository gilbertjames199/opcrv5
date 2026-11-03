<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StrategyActivityRequest extends Model
{
    use HasFactory;

    protected $connection = 'mysql';
    protected $table = 'strategy_activity_requests';
    protected $fillable = [
        'status',
        'program_and_project_id',
        'revision_plan_id',
        'created_by',
    ];

    public function strategy()
    {
        return $this->hasMany(Strategy::class, 'strategy_activity_request_id', 'id');
    }

    public function activity()
    {
        return $this->hasMany(Activity::class, 'strategy_activity_request_id', 'id');
    }
    public function files()
    {
        return $this->hasMany(StrategyActivityRequestFile::class, 'strategy_activity_request_id', 'id');
    }
    public function revisionPlan()
    {
        return $this->belongsTo(RevisionPlan::class, 'revision_plan_id', 'id');
    }
}
