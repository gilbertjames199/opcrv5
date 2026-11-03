<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SDG extends Model
{
    use HasFactory;

    protected $table = 'sustainable_development_goals';

    protected $fillable = [
        'goal_description'
    ];
}
