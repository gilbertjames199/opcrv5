<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\HasMedia;
use App\Models\User;

class Permission extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = "permissions";
    protected $fillable = [
        'permissions',
    ];
    //,'permission_id','user_id'
    public function users()
    {
        return $this->belongsToMany(User::class, 'permission_user')->withPivot('permission_id');
    }
}
