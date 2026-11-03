<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficePerformanceCommitmentRating extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'office_performance_commitment_ratings';
    protected $guarded = [];

    public function opcrtarget()
    {
        return $this->belongsTo(OpcrTarget::class, 'id_opcr_target', 'id');
    }

    public function opcrList()
    {
        return $this->belongsTo(OfficePerformanceCommitmentRatingList::class, 'opcr_id', 'id');
    }
    public function paps()
    {
        return $this->belongsTo(ProgramAndProject::class, 'id_paps', 'id');
    }

    public function movs()
    {
        return $this->hasMany(MeansOfVerification::class, 'opcr_id', 'id');
    }
}
