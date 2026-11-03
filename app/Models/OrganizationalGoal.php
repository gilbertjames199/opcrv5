<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganizationalGoal extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='organizational_goals';
    protected $fillable = [
        'goal_description',
        'FFUNCCOD'
    ];
}
