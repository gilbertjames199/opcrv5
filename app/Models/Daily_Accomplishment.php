<?php

namespace App\Models;

use App\Traits\LogsImpersonatedActions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Daily_Accomplishment extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'ipcr_daily_accomplishments';
    protected $guarded = [];

    public function IPCRCode()
    {
        return $this->hasOne(IpcrTarget::class, 'individual_final_output_id', 'id');
    }

    // public function IPCR(){
    //     return $this->hasOne(IndividualFinalOutput::class, 'ipcr_code', 'idIPCR');
    // }

    public function individualFinalOutput()
    {
        return $this->belongsTo(IndividualFinalOutput::class, 'individual_final_output_id', 'id');
    }

    public function monthlyAccomplishment()
    {
        return $this->belongsTo(MonthlyAccomplishment::class, 'sem_id', 'ipcr_semestral_id');
        // return $this->hasMany(MonthlyAccomplishment::class, 'ipcr_semestral_id', 'sem_id');
    }
    public function monthlyAccomplishmentMany()
    {
        // return $this->hasMany(MonthlyAccomplishment::class, 'sem_id', 'ipcr_semestral_id');
        return $this->hasMany(MonthlyAccomplishment::class, 'ipcr_semestral_id', 'sem_id');
    }
    // public function monthlyAccomplishmentMany()
    // {
    //     return $this->hasOne(MonthlyAccomplishment::class, 'month', 'month')
    //         ->where('sem_id', $this->sem_id);
    // }
    public function ipcrTarget()
    {
        return $this->belongsTo(IpcrTarget::class, 'individual_final_output_id', 'individual_final_output_id');
    }

    public function ipcr_Semestral()
    {
        return $this->belongsTo(Ipcr_Semestral::class, 'sem_id', 'id');
    }

    public function userEmployee()
    {
        return $this->belongsTo(UserEmployees::class, 'emp_code', 'empl_id');
    }
    // public function subAccomplishments()
    // {
    //     return $this->hasMany(Daily_Accomplishment::class, 'IdIPCR', 'IdIPCR');
    // }
}
