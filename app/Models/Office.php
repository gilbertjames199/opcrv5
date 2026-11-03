<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    use HasFactory;
    protected $connection = "mysql2";
    protected $table = 'offices';
    protected $guarded = [
        'id'
    ];

    public function pgHead()
    {
        return $this->belongsTo(UserEmployees::class, 'empl_id', 'empl_id');
    }


}
