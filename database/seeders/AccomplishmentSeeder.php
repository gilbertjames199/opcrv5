<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccomplishmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $date = Carbon::now();
        $dateTime = $date->format('Y-m-d');
        $idraao=[1,1,1,2,2,2,3,3,3,4,4,4];
        for($i=0;$i<12;$i++)
        {
            DB::table('accomplishments')->insert([
                'idtarget' => $idraao[$i],
                'accomplishment_qty' => '0',
                'actual_period_from' =>$dateTime,
                'actual_period_to' =>$dateTime,
                'actual_expenditure' => '0.00',
                'facilitating_timeliness' =>'*'.$dateTime.'*',
                'facilitating_competency' =>'Facilitating Competency: '.$idraao[$i],
                'facilitating_logistics'=>'Facilitating Logistics: '.$idraao[$i],
                'deterring_timeliness'=>'*'.$dateTime.'*',
                'deterring_concerns'=>'DETAINING CONCERNS',
                'deterring_logistics'=>'Detaining Logistics',
                'concerns_timeliness'=>'100000',
                'concerns_competency'=>'concerns competency'.$idraao[$i].'->'.$i,
                'concerns_logistics' => 'concerns logistics',
                'new_strategy' => 'new strategy' ,
                'remarks'=>'remarks',
                'date_accomplished_from'=>$dateTime,
                'date_accomplished_to'=>$dateTime,
                'validated_status'=>'Yes',
                'validated_remarks' => 'Already validated '.$i,
                'validated_date' => $dateTime,
                'created_at' => $dateTime,
                'updated_at' => $dateTime,
            ]);
        }
    }
}
