<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RatingRemarks extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='rating_remarks';
    protected $fillable = [
        'rating_remarks',
        'idpaps',
    ];
}
