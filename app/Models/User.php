<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\HasMedia;
use App\Models\Permission;

//for email verification
use Illuminate\Auth\Events\Registered;
//, MustVerifyEmail

/**
 * @method bool can(string $ability, mixed $arguments = [])
 */
class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, InteractsWithMedia;

    protected $connection = "mysql2";
    protected $table = "systemusers";
    protected $primaryKey = "recid";
    protected $rememberTokenName = false;
    protected $fillable = [
        'FullName',
        'UserName',
        'UserPassword',
        'UserType',
        'email',
        'department_code',
        'office',
        'is_active',
        'popsp_agency'
    ];
    public $timestamps = false;
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // public function setPasswordAttribute($value)
    // {
    //     $this->attributes['password'] = bcrypt($value);
    // }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('avatars')
            ->singleFile();
    }


    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
    //,'user_id','permission_id'
    // public function permissions()
    // {
    //     return $this->belongsToMany(Permission::class, 'permission_user')->withPivot('permission_id');
    // }
    // public function roles()
    // {
    //     return $this->belongsToMany(Role::class, 'roles')->withPivot('role_id');
    // }
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'model_has_roles', 'model_id', 'role_id')
            ->where('model_type', self::class);
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'model_has_permissions', 'model_id', 'permission_id')
            ->where('model_type', self::class);
    }
    //for email verification
    public function verifyUserEmail($value)
    {
        event(new Registered($value));
    }
}
