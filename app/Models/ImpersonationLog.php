<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImpersonationLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'original_user_id',
        'impersonated_user_id',
        'impersonated_user_name',
        'action',
        'url',
        'ip',
        'user_agent',
    ];
}
