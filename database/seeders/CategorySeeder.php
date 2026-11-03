<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->data() as $key => $value) {
            DB::table('categories')->insert($value);
        }
    }

    public function data(){
        return array(
            array('category' => 'Capital Outlay'),
            array('category' => 'Maintenance, Operating, and Other Expenses'),
            array('category' => 'Personnel Services'),
        );
    }
}
