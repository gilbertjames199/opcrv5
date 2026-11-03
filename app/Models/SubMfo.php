<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubMfo extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='sub_mfos';
    protected $guarded = [];
}
