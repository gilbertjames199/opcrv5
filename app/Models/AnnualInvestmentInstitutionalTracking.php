<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnualInvestmentInstitutionalTracking extends Model
{
    use HasFactory;
    protected $table = 'annual_investment_plan_institutional_trackings';
    protected $guarded = ['id'];
}
