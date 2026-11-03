<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Indicator extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='indicators';
    protected $fillable = [
        'description'
    ];
    public function targ()
    {
        return $this->hasMany(Target::class,'idindicator','id');
    }
}
