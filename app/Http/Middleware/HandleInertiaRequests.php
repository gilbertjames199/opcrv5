<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        if (auth()->check()) {
            $profile =  User::where('recid', auth()->user()->recid)->first();
            $office = DB::connection('mysql2')->table('offices')->where('department_code', auth()->user()->department_code)->first();
            // dd($profile);
            // dd(auth()->user());
            return array_merge(parent::share($request), [
                'auth' => auth()->user() ? [ //if there is a user
                    'user' => [
                        'FullName' => ucfirst(auth()->user()->FullName),
                        'UserName' => auth()->user()->UserName,
                        'UserType' => auth()->user()->UserType,
                        'UserPassword' => auth()->user()->UserPassword,
                        'department_code' => auth()->user()->department_code,
                        'office' => $office,
                        'recid' => auth()->user()->recid,
                        //     'level' =>auth()->user()->level,
                        //     'municipality' =>auth()->user()->municipality,
                        //     'barangay' =>auth()->user()->barangay,
                        //     'photo' => $profile ? $profile->getUrl() : ''
                    ]
                ] : null,
                'flash' => [
                    'message' => fn () => $request->session()->get('message'),
                    'error' => fn () => $request->session()->get('error'),
                    'info' => fn () => $request->session()->get('info'),
                    'deleted' => fn () => $request->session()->get('deleted'),
                ],
            ]);
        }

        return [];
    }
}
