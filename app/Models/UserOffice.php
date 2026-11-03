<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserOffice extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='user_offices';
    protected $guarded = [];
}
