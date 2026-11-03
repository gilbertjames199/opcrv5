<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpcrRemarks extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'opcr_remarks';
    protected $guarded = [];
}
