<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appropriation extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'appropriations';
    protected $guarded = [];

    public function paps()
    {
        return $this->hasOne(ProgramAndProject::class, 'id', 'idpaps');
    }
    public function revisionPlan()
    {
        return $this->belongsTo(RevisionPlan::class, 'revision_plan_id');
    }
}
