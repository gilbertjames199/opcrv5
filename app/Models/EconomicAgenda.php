<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EconomicAgenda extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='eight_point_agenda';
    protected $fillable = [
        'agenda_description',
        'yearfrom',
        'yearto',
        'rationale',
    ];
}
