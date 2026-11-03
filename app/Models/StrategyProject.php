<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StrategyProject extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'strategy_projects';
    protected $guarded = [
        'id'
    ];

    public function strategy()
    {
        return $this->belongsTo(Strategy::class, 'strategy_id', 'id');
    }

    public function expected_output()
    {
        return $this->hasMany(ExpectedRevisedOutput::class, 'strategy_id', 'strategy_id');
    }
    public function expected_outcome()
    {
        return $this->hasMany(ExpectedRevisedOutcome::class, 'strategy_id', 'strategy_id');
    }
    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
}
