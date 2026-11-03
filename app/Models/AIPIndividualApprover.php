<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AIPIndividualApprover extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table='aip_individual_approvers';
    protected $guarded = [
        'id'
    ];

    public function userEmployee()
    {
        return $this->belongsTo(UserEmployees::class, 'employee_code', 'empl_id');
    }
}
