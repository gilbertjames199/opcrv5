<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RevisionPlanComment extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table = 'revision_plan_comments';
    protected $guarded = [
        'id'
    ];
    protected $dates = ['deleted_at'];
    public function user()
    {
        return $this->hasOne(User::class, 'recid', 'user_id');
        // ->where('table_name', 'revision_plans');
    }
}
