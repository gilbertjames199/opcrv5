<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class aip_controller extends Controller
{
    //
    protected $model;
    public function __construct(AIP $model)
    {
        $this->model=$model;
    }

    public function index(Request $request, $idpaps){
        $paps = ProgramAndProject::findOrFail($idpaps);
        $data = $this->model
                    ->where('idpaps', $idpaps)
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('AIP_Code/Index',[
            "data"=>$data,
            "idpaps"=>$idpaps,
            "paps"=>$paps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

}
