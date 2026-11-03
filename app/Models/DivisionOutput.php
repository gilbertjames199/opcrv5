<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DivisionOutput extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table = 'division_outputs';
    protected $guarded = [];

    public function dpcrTargets()
    {
        return $this->hasMany(DpcrTarget::class, 'idDPCR');
    }
}
