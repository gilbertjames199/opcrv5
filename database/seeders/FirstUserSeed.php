<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Permission;

class FirstUserSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $date = Carbon::now();
        // $dateTime = $date->format('Y-m-d');
        // DB::table('users')->insert([
        //     'name' => 'Administrator',
        //     'email' => 'admin@admin.com',
        //     'email_verified_at' =>$dateTime,
        //     'password' => bcrypt('12345678'),
        //     'level' =>'provincial',
        //     'municipality' =>'',
        //     'barangay' =>'',
        //     'created_at' => $dateTime,
        //     'updated_at' => $dateTime,
        // ]);
        // //$user=User::find(1);
        // $permissions=Permission::all();
        // foreach ($permissions as $permission) {
        //     DB::table('permission_user')->insert([
        //         'user_id' =>1,
        //         'permission_id' =>$permission->id,
        //     ]);
        // }

    }
}
