<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Permission;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;
    /*
    public function experiment(User $user){
        $mypermissions='';
        $user = User::find(1);
        foreach($user->permissions as $permission){
            echo $permission->permission;
        }

        $user = User::find(1);
        foreach($user->permissions as $permission){
            echo $permission->pivot->permission_id;
        }
    }*/
    public function create(User $user)
    {
        /*$found=false;
        $user = User::find($user->id);
        foreach($user->permissions as $permission){
            if($permission->pivot->permission_id==="1"){
                $found=true;
            }
        }*/
        return $user->permissions()->where('permission_id', 1)->exists();
    }

    public function edit(User $user)
    {

        return $user->permissions()->where('permission_id', 2)->exists();
    }

    public function delete(User $user)
    {
        /*$found=false;
        $user = User::find($user->id);
        foreach($user->permissions as $permission){
            if($permission->pivot->permission_id==="3"){
                $found=true;
            }
        }*/
        return $user->permissions()->where('permission_id', 3)->exists();
    }

    public function can_view_users(User $user)
    {
        /*$found=false;
        $user = User::find($user->id);
        foreach($user->permissions as $permission){
            if($permission->pivot->permission_id==="3"){
                $found=true;
            }
        }*/
        return $user->permissions()->where('permission_id', 4)->exists();
    }

    public function can_insert_users(User $user)
    {
        /*$found=false;
        $user = User::find($user->id);
        foreach($user->permissions as $permission){
            if($permission->pivot->permission_id==="3"){
                $found=true;
            }
        }*/
        return $user->permissions()->where('permission_id', 6)->exists();
    }

    public function can_edit_users(User $user)
    {
        /*$found=false;
        $user = User::find($user->id);
        foreach($user->permissions as $permission){
            if($permission->pivot->permission_id==="3"){
                $found=true;
            }
        }*/
        return $user->permissions()->where('permission_id', 5)->exists();
    }

    public function can_delete_users(User $user)
    {
        /*$found=false;
        $user = User::find($user->id);
        foreach($user->permissions as $permission){
            if($permission->pivot->permission_id==="3"){
                $found=true;
            }
        }*/
        return $user->permissions()->where('permission_id', 7)->exists();
    }

    public function can_update_user_permissions(User $user)
    {
        /*$found=false;
        $user = User::find($user->id);
        foreach($user->permissions as $permission){
            if($permission->pivot->permission_id==="3"){
                $found=true;
            }
        }*/
        return $user->permissions()->where('permission_id', 8)->exists();
    }

    public function can_access_validation(User $user){
        if($user->fullName=="ppdoadmin" OR $user->fullName=="PPDO" OR $user->UserName=="ppdo1")
        {
            return true;
        }
    }

    public function can_access_indicators(User $user){
        if($user->UserType=="Administrator"){
            return true;
        }else{
            return false;
        }
    }
}
