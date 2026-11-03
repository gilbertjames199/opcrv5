<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpcrAccomplishment extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='opcr_accomplishments';
    protected $guarded = [

    ];
}
