<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QualityRemarks extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='quality_remarks';
    protected $fillable = [
        'quality_remarks',
        'idpaps',
    ];
}
