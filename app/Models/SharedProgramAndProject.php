<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SharedProgramAndProject extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'shared_program_and_projects';

    public function origin_department()
    {
        return $this->hasOne(Office::class, 'department_code', 'origin_department_code');
    }
    public function destination_department()
    {
        return $this->hasOne(Office::class, 'department_code', 'destination_department_code');
    }
    public function origin_pghead()
    {
        return $this->hasOne(UserEmployees::class, 'empl_id', 'origin_pghead');
    }
    public function destination_pghead()
    {
        return $this->hasOne(UserEmployees::class, 'empl_id', 'destination_pghead');
    }
    public function added_by()
    {
        return $this->hasOne(User::class, 'recid', 'user_id');
    }
}
