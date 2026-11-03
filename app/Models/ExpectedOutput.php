<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpectedOutput extends Model
{
    use HasFactory;
    public function paps()
    {
        return $this->belongsTo(ProgramAndProject::class, 'idpaps', 'id');
    }
}
