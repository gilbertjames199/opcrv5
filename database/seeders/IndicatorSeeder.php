<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IndicatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = Carbon::now();
        $dateTime = $date->format('Y-m-d');
        $idraao=[1,1,1,2,2,2,3,3,3,4,4,4];
        for($i=0;$i<12;$i++)
        {
            DB::table('indicators')->insert([
                'idindication' => '1',
                'idindicator' =>'1',
                'description' => 'DESCRIPTION INDICATOR ->'.$i,
                'created_at' => $dateTime,
                'updated_at' => $dateTime,
            ]);
        }
    }
}
