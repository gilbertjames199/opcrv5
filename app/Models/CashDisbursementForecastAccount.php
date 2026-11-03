<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CashDisbursementForecastAccount extends Model
{
    use HasFactory;

    protected $guarded=['id'];
    public function cashDisbursementForecast()
    {
        return $this->belongsTo(CashDisbursementForecast::class, 'cash_disbursement_forecast_id', 'id');
    }

    public function budgetRequirement()
    {
        return $this->belongsTo(BudgetRequirement::class, 'budget_requirement_id', 'id');
    }
}
