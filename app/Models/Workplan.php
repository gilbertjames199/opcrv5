<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workplan extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='workplans';
    protected $fillable = [
        'id_project_profile',
        'strategies',
        'performance_indicators_target',
        'gender_issues',
        'timeline',
        'outcome',
        'responsible_person',
        'climate_change_topology_code',
        'category',
    ];
}
