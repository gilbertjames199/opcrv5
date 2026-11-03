<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocietalGoal extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='societal_goals';
    protected $fillable = [
        'description'
    ];
}
