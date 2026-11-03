<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BudgetPrep extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'budget_preps';
    protected $guarded = ['id'];
}
