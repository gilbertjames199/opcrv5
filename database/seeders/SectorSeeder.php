<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('sectors')->insert([
        //     //'idraao' => $idraao[$i],
        //     'sector_name' => 'General Public Services',
        //     'aip_code' =>'1000',
        // ]);
        // DB::disableQueryLog();
        // $chunk = array_chunk($this->data(), 1000);
        foreach ($this->data() as $key => $value) {
            DB::table('sectors')->insert($value);
        }
    }

    public function data(){
        return array(
            array('sector_name' => 'General Public Services', 'aip_code' => '1000'),
            array('sector_name' => 'Social Services', 'aip_code' => '3000'),
            array('sector_name' => 'Economic Services', 'aip_code' => '8000'),
        );
    }
}
