<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AIP extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='a_i_p_s';
    protected $fillable = [
        'AIP_Code',
        'PS',
        'MOOE',
        'CO',
        'date',
        'idpaps',
    ];
}
