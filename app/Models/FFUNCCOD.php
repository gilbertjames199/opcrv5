<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FFUNCCOD extends Model
{
    use HasFactory;
    protected $connection = "mysql2";
    protected $table = 'functions';
    protected $fillable = [
        'recid',
        'FFUNCCOD',
        'SECTOR',
        'DEPTHEAD',
    ];

    public function acc()
    {
        return $this->hasMany(AccountAccess::class, 'ffunccod', 'FFUNCCOD');
    }
    public function office()
    {
        return $this->hasOne(Office::class, 'department_code', 'department_code');
    }
}
