<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Target;
use Carbon\Carbon;

class TargetSeeder extends Seeder
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
            $t1=$i+1.1;
            $t2=$t1+1;
            $t3=$t2+1.5-$t1+$i;
            $t4=$t2+1.2-$t3+$i;
            if($i>5){
                $t1=$t1-($i/2);
                $t2=$t2-($i/2);
                $t3=$t3-($i/2);
                $t4=$t4-($i/2);
            }else{
                $t1=$t1+($i+2);
                $t2=$t2+($i+2);
                $t3=$t3+($i+2);
                $t4=$t4+($i+2);
            }
            $t_total=$t1+$t2+$t3+$t4;

            if($i%2 == "0"){
                $ontg="Yes";
            }elseif( $i%2 == "1"){
                $ontg="No";
            }

            DB::table('targets')->insert([
                //'idraao' => $idraao[$i],
                'idooe' => '0',
                'idindicator' =>'1',
                'description' => 'Target Description -> '.$i,
                'brgy' =>'Poblacion',
                'municipality' =>'NABUNTURAN (Capital)',
                'planned_period_from'=>$dateTime,
                'planned_period_to'=>$dateTime,
                'planned_budget'=>'100000',
                'target_qty'=>$t_total,
                'onsite_tag'=>$ontg,
                'target_qty1'=>$t1,
                'target_qty2'=>$t2,
                'target_qty3'=>$t3,
                'target_qty4'=>$t4,
                'created_at' => $dateTime,
                'updated_at' => $dateTime,
            ]);
        }

    }
}
