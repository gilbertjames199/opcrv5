<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamPlan extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'team_plans';
    protected $guarded = ['id'];

    public function userEmployee()
    {
        return $this->belongsTo(UserEmployees::class, 'empl_id', 'empl_id');
    }

    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
}
