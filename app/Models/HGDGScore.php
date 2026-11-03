<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HGDGScore extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'hgdg_score';
    protected $fillable = [
        'idrevplan',
        'question_id',
        'user_id',
        'score',
        'result_comment',
        'FFUNCCOD',
    ];

    public function question()
    {
        return $this->belongsTo(HGDGQuestion::class, 'question_id');
    }
}
