<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CashDisbursementForecast extends Model
{
    use HasFactory;

    protected $guarded=['id'];

    public function revisionPlan()
    {
        return $this->belongsTo(RevisionPlan::class, 'revision_plan_id', 'id');
    }

    public function cashDisbursementForecastAccount()
    {
        return $this->hasMany(CashDisbursementForecastAccount::class, 'cash_disbursement_forecast_id','id');
    }
}
