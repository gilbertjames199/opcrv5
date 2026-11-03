<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ForbiddenController extends Controller
{
    public function index()
    {
        return inertia('Forbidden/Index');
    }

    public function forbidden_parameterized($message){
        return inertia('Forbidden/Parameterized')->with('error', $message);
    }
}
