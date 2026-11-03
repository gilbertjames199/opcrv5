<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpcrTarget extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'opcr_targets';
    protected $guarded = ['id'];

    public function paps()
    {
        return $this->belongsTo(ProgramAndProject::class, 'idpaps', 'id');
    }

    public function opcrList()
    {
        return $this->belongsTo(
            OfficePerformanceCommitmentRatingList::class,
            'office_performance_commitment_rating_list_id',
            'id'
        );
    }

    public function opcr_rating()
    {
        return $this->hasOne(OfficePerformanceCommitmentRating::class, 'id_opcr_target', 'id');
    }

    public function opcr_rating2()
    {
        return $this->hasMany(OfficePerformanceCommitmentRating::class, 'id_paps', 'idpaps');
    }
}
