<?php

namespace App\Models;

use App\Traits\LogsImpersonatedActions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MonthlyTarget extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'monthly_targets';
    protected $guarded = ['id'];
    public function returnRemarks()
    {
        return $this->hasOne(ReturnRemarks::class, 'ipcr_monthly_target_id', 'id')->latest();
    }
    public function dailyAccomplishments()
    {
        return $this->hasMany(Daily_Accomplishment::class, 'monthly_target_id', 'id');
    }
    public function ipcrTargets()
    {
        return $this->belongsTo(IpcrTarget::class, 'ipcr_target_id', 'id');
    }

    public function ipcrTarget()
    {
        return $this->belongsTo(IpcrTarget::class, 'ipcr_target_id', 'id');
    }
    public function dpcrTargets()
    {
        return $this->belongsTo(DpcrTarget::class, 'dpcr_target_id', 'id');
    }
    public function hpcrTargets()
    {
        return $this->belongsTo(HospitalTarget::class, 'hospital_target_id', 'id');
    }
    // public function HospitalTarget()
    // {
    //     return $this->belongsTo(HospitalTarget::class, 'hospital_target_id', 'id');
    // }
    public function ipcr_Semestral()
    {
        return $this->belongsTo(Ipcr_Semestral::class, 'sem_id', 'id');
    }
    public function monthlyAccomplishmentMany()
    {
        // return $this->hasMany(MonthlyAccomplishment::class, 'sem_id', 'ipcr_semestral_id');
        return $this->hasMany(MonthlyAccomplishment::class, 'ipcr_semestral_id', 'sem_id');
    }
}
