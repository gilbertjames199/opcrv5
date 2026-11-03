<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEmployeeCredential extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='user_employee_credentials';
    protected $guarded=['id'];
}
