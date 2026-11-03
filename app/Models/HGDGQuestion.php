<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HGDGQuestion extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='hgdg_questions';
    protected $fillable = [
        'question_number',
        'question',
        'checklist_id',
        'score',
        'has_subquestion',
        'question_id',
    ];
    public function checklist()
    {
        return $this->belongsTo(HGDG_Checklist::class, 'checklist_id');
    }
    public function subQuestion()
    {
        return $this->hasMany(HGDGQuestion::class, 'question_id');
    }
}
