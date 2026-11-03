<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MonthlyAccomplishment extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'ipcr_monthly_accomplishments';
    protected $guarded = ['id'];

    public function returnRemarks()
    {
        return $this->hasOne(ReturnRemarks::class, 'ipcr_monthly_accomplishment_id', 'id')->latest();
    }

    public function ipcrSemestral()
    {
        return $this->belongsTo(Ipcr_Semestral::class, 'ipcr_semestral_id');
    }

}
