<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OOE extends Model
{
    use HasFactory;
    protected $connection = "mysql2";
    protected $fillable = [
        'recid',
        'FOODESC',
        'FACTCODE',
        'ftype2',
        'consotag',
        'ffunccod'
    ];
    protected $table='ooes';
}
