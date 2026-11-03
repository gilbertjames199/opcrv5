<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timeliness extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='timelinesses';
    protected $fillable = [
        'timeliness',
        'idpaps',
        'numerical_rating',
        'adjectival_rating',
    ];
}
