<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkplanCostBreakdown extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='workplans';
    protected $fillable = [
        'particular',
        'account_code',
        'quantity',
        'amount',
        'category',
        'idworkplan',
        'idppa',
    ];
}
