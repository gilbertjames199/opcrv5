<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnualInvestmentPlan extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'annual_investment_plans';
    protected $guarded = [
        'id',
    ];

    public function program()
    {
        return $this->hasOne(Program::class, 'recid', 'program_id');
    }
}
