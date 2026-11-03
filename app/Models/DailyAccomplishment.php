<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyAccomplishment extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='daily_accomplishments';
    protected $fillable = [
        'date_from',
        'date_to',
        'description',
        'quantity',
        'remarks',
        'Link',
        'idpaps',
        'idmfo',
        'responsible_person',
        'source_of_fund',
        'amount'
    ];

    public function MFO(){
        return $this -> hasOne(MajorFinalOutput::class, 'id', 'idmfo');
    }

}
