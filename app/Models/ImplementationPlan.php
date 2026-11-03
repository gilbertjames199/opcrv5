<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImplementationPlan extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='implementation_plans';
    protected $guarded=[];
    // protected $fillable = [
    //     'aip_code',
    //     'idrev_plan',
    //     'idactivity',
    //     'idstrategy',
    //     'idissue',
    //     'date_from',
    //     'date_to',
    //     'amount',
    //     'cc_adaptation',
    //     'cc_migitagion',
    //     'cc_topology',
    //     'person_responsible',
    // ];
}
