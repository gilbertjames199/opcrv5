<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AnnualInvestmentPlanInstitutional extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];


    public function aipApprovers()
    {
        return $this->hasMany(AIPApprover::class, 'aip_institutional_id', 'id');
    }

    public function aipIndividualApprovers()
    {
        return $this->hasMany(AIPIndividualApprover::class, 'aip_institutional_id', 'id');
    }

}
