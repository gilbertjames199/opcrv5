<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SentenceParserController extends Controller
{
    public function my_method1(Request $request)
    {
        dd($request->sentence);
    }
}
