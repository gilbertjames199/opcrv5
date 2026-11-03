<?php

namespace App\Http\Controllers;

use App\Models\FFUNCCOD;
use App\Models\IndividualFinalOutput;
use App\Models\MajorFinalOutput;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IPCRController extends Controller
{
    //
    protected $model;
    public function __construct(IndividualFinalOutput $model)
    {
        $this->model=$model;
    }

    public function direct(Request $request){
        $mfo = MajorFinalOutput::get();

        $functions = FFUNCCOD::where('department_code', auth()->user()->department_code)->first();

        $data = $this->model
                    // ->when($request->mfosel, function($query, $searchItem){
                    //     $query->where('program_and_projects.idmfo','=',$searchItem);
                    // })
                    // ->join('program_and_projects','program_and_projects.id','daily_accomplishments.idpaps')
                    // ->orderBy('daily_accomplishments.created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('IPCR/Index',[
            "data"=>$data,
            "mfos"=>$mfo,
            "functions"=>$functions,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


}
