<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Strategy extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table = 'strategies';
    protected $fillable = [
        'description',
        'idpaps',
        'idmfo',
        'status',
        'strategy_activity_request_id',
    ];
    public function paps()
    {
        return $this->hasOne(ProgramAndProject::class, 'id', 'idpaps');
    }
    public function mfos()
    {
        return $this->hasOne(MajorFinalOutput::class, 'id', 'idmfo');
    }
    public function activity()
    {
        return $this->hasMany(Activity::class, 'strategy_id', 'id');
    }
    public function strategyProject()
    {
        return $this->hasMany(StrategyProject::class, 'strategy_id', 'id');
    }
    public function expected_output()
    {
        return $this->hasMany(ExpectedRevisedOutput::class, 'strategy_id', 'id');
    }
    public function expected_outcome()
    {
        return $this->hasMany(ExpectedRevisedOutcome::class, 'strategy_id', 'id');
    }

}
