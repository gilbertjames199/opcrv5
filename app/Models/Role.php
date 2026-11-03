<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = "roles";
    protected $fillable = [
        'name',
        'guard_name',
        'created_at',
        'updated_at',
    ];
    //,'permission_id','user_id'
    public function users()
    {
        return $this->belongsToMany(User::class, 'permission_user')->withPivot('permission_id');
    }
}
