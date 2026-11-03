<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barangay;
use App\Models\Municipality;
use Illuminate\Support\Facades\DB;

class PlacesController extends Controller
{
    public function __construct(Barangay $bar, Municipality $mun)
    {
        //$this->middleware(['auth','verified']);
        $this->bar = $bar;
        $this->mun = $mun;
    }
    public function showPlaces(Request $request){
        $mun=DB::table('municipalities')
                        ->select('citymunDesc','citymunCode')
                        ->get();

        return inertia('Places',["mun"=>$mun]);
    }

    public function getBarangays(Request $request){
        $data=DB::table('barangays')
                ->select('barangays.brgyDesc','municipalities.citymunDesc')
                ->join('municipalities','barangays.citymunCode','=','municipalities.citymunCode')
                ->where('municipalities.citymunDesc','LIKE','%'.$request->mun.'%')
                ->orderBy('barangays.brgyDesc','ASC')
                ->get();
        //dd($bar);
        return ['data' => $data];
    }
}
