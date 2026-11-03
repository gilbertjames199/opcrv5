<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficePerformanceCommitmentRatingList extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'office_performance_commitment_rating_lists';
    protected $guarded = [];

    public function office()
    {
        return $this->hasOne(Office::class, 'department_code', 'department_code');
    }

    public function opcrTargetBudget()
    {
        return $this->hasMany(OpcrTargetBudget::class, 'opcr_list_id', 'id');
    }
    public function opcrTarget(){
        return $this->hasMany(OpcrTarget::class,
        'office_performance_commitment_rating_list_id',
        'id');
    }
    public function opcr_rating()
    {
        return $this->hasMany(OfficePerformanceCommitmentRating::class, 'opcr_id', 'id');
    }
    public function opcrRemarks()
    {
        return $this->hasMany(OpcrRemarks::class, 'id_opcr_list', 'id');
    }

    public function FFUNCCODOffice()
    {
        return $this->belongsTo(FFUNCCOD::class, 'FFUNCCOD', 'FFUNCCOD');
    }


}
