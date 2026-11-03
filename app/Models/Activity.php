<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Activity extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table = 'activities';
    protected $fillable = [
        'description',
        'strategy_id',
        'status',
        'strategy_activity_request_id',
    ];


    public function strat()
    {
        return $this->hasOne(Strategy::class, 'id', 'strategy_id');
    }

    public function activityProject()
    {
        return $this->hasMany(ActivityProject::class, 'activity_id', 'id');
    }
    public function expected_output()
    {
        return $this->hasMany(ExpectedRevisedOutput::class, 'activity_id', 'id');
    }
}
