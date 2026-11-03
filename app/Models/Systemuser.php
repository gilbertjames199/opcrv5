<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;

use Laravel\Sanctum\HasApiTokens;
class Systemuser extends Authenticatable
{
    use HasFactory;
    protected $connection = "mysql2";

    protected $fillable = [
        'recid',
        'FullName',
        'UserName',
        'UserPassword',
        'UserType',
        'email',
        'docktrack_user_id',
        'doctrack_office_id',
        'psis_user',
        'coa'
    ];
    protected $table='systemusers';
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

}
