<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppropriationAmount extends Model
{
    use HasFactory;

    // annual_investments
    protected $connection = "mysql";
    protected $table = 'appropriation_amounts';
    protected $guarded = [
        'id',
    ];

    public function annual_investments()
    {
        return $this->belongsTo(AnnualInvestmentPlan::class, 'aip_id', 'id');
    }
    public function ooe()
    {
        return $this->hasOne(OOE::class, 'recid', 'idooe');
    }
}
