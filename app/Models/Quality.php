<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quality extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='qualities';
    protected $fillable = [
        'quality',
        'idpaps',
        'numerical_rating',
        'adjectival_rating',
    ];
}
