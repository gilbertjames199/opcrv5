<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class opcr_standard extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'opcr_standards';
    protected $fillable = [
        'output',
        'performance_measure',
        'success_indicator',
        'office_accountable',
        'monitoring',
        'prescribed_period',
        'quality1',
        'quality2',
        'quality3',
        'efficiency1',
        'efficiency2',
        'efficiency3',
        'timeliness',
        'idpaps',
    ];
}
