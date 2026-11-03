<?php

namespace App\Http\Controllers;

use App\Models\FFUNCCOD;
use App\Models\UserOffice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserOfficeController extends Controller
{
    protected $model;
    public function __construct(UserOffice $model){
        $this->model=$model;
    }
    public function create(Request $request){
        $offices = FFUNCCOD::all();
        //dd($offices);
        return inertia('UserOffice/Set', [
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){}
    public function edit(Request $request){}
    public function update(Request $request){}
    public function destroy(Request $request){}
}
