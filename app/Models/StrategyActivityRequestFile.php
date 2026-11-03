<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StrategyActivityRequestFile extends Model
{
    use HasFactory;

    protected $table = 'strategy_activity_request_files';

    protected $fillable = [
        'strategy_activity_request_id',
        'file_name',
        'file_path',
        'file_type',
        'file_size',
        'uploaded_by',
    ];
}
