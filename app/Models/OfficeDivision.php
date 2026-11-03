<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficeDivision extends Model
{
    use HasFactory;
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'divisions';
    protected $guarded = [];
}
