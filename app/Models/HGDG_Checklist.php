<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HGDG_Checklist extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='hgdg_checklists';
    protected $fillable = [
        'box_number',
        'sector',
    ];
}
