<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ELA extends Model
{
    use HasFactory;

    protected $table = 'executive_legislative_agenda';
    
    protected $fillable = [
        'agenda_description',
        'year_from',
        'year_to',
        'rationale',
    ];
}
