<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficeAccountable extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='office_accountables';
    protected $fillable = [
        'office_accountable',
        'idpaps',
    ];
}
