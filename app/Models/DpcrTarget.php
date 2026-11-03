<?php

namespace App\Models;

use App\Traits\LogsImpersonatedActions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DpcrTarget extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table = 'dpcr_targets';
    protected $guarded = ['id'];

    // public function semestralRemarks()
    // {
    //     return $this->hasOne(SemestralRemarks::class, 'idIPCR', 'ipcr_code');
    // }

    public function divisionOutput()
    {
        return $this->belongsTo(DivisionOutput::class, 'idDPCR', 'id');
    }

    public function ipcr_Semestral()
    {
        return $this->belongsTo(Ipcr_Semestral::class, 'ipcr_semestral_id', 'id');
    }

    // public function ipcrDailyAccomplishments()
    // {
    //     return $this->hasMany(Daily_Accomplishment::class, 'ipcr_code', 'idIPCR');
    // }

    public function userEmployees()
    {
        return $this->belongsTo(UserEmployees::class, 'employee_code', 'empl_id');
    }

    public function userEmployee()
    {
        return $this->belongsTo(UserEmployees::class, 'employee_code', 'empl_id');
    }

    public function monthlyTargets()
    {
        return $this->hasMany(MonthlyTarget::class, 'dpcr_target_id', 'id');
    }


}
