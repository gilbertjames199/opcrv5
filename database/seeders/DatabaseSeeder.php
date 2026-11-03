<?php

namespace Database\Seeders;

use App\Models\Accomplishment;
use Illuminate\Database\Seeder;
use Database\Seeders\FirstUserSeed;
//use Database\Seeders\PermissionSeeder;
use Database\Seeders\AccomplishmentSeeder;
use Database\Seeders\BarangaySeeder;
use Database\Seeders\TargetSeeder;
use Database\Seeders\MunicipalitySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //\App\Models\User::factory(1)->create();

        $this->call([
            //PermissionSeeder::class,
            //FirstUserSeed::class,
            MunicipalitySeeder::class,
            BarangaySeeder::class,
            SectorSeeder::class,
            AllowIppSubmissionSeeder::class,
            //TargetSeeder::class,
            //AccomplishmentSeeder::class,
            //IndicatorSeeder::class
        ]);
    }
}
