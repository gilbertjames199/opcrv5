<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccomplishmentDetail extends Model
{
    use HasFactory;

    protected $connection = "mysql3";
    protected $table='accomplishment_details';
    protected $fillable = [
        'id'
    ];
}
