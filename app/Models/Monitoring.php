<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Monitoring extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='monitorings';
    protected $fillable = [
        'monitoring',
        'idpaps',
    ];
}
