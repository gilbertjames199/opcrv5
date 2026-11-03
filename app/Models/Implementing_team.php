<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Implementing_team extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='implementing_teams';
    protected $fillable = [
        'name',
        'position',
        'competency',
        'role',
        'FFUNCCOD',
        'department_code'
    ];
}
