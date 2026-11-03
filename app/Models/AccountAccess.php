<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountAccess extends Model
{
    use HasFactory;
    protected $connection = "mysql2";
    protected $table='accountaccess';
    protected $fillable = [
        'iduser',
        'ffunccod',
    ];

    public function func(){
        return $this -> hasOne(FFUNCCOD::class, 'FFUNCCOD', 'ffunccod');
    }
}
