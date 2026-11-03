<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimelinessRemarks extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='timeliness_remarks';
    protected $fillable = [
        'timeliness_remarks',
        'idpaps',
    ];
}
