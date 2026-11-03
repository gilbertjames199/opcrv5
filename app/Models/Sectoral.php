<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sectoral extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'sectoral_goals';
    protected $fillable = [
        'goal_description',
        'sector',
        'FFUNCCOD'
    ];

    public function sectors()
    {
        return $this->hasOne(Sector::class, 'id', 'sector');
    }

    public function office()
    {
        return $this->hasOne(FFUNCCOD::class, 'FFUNCCOD', 'FFUNCCOD');
    }
}
