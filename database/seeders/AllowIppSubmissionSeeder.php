<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AllowIppSubmissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('allow_ipp_submissions')->insert([
            [
                'year' => '2025',
                'allow_submission' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2026',
                'allow_submission' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2027',
                'allow_submission' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2028',
                'allow_submission' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
