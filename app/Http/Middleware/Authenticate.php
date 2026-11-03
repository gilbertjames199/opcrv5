<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        // Ignore JSON/API requests
        if ($request->expectsJson()) {
            return null;
        }

        // Normalize path
        $path = trim($request->path(), '/');
        if ($path === '') {
            return route('login');
        }
        if (! $request->expectsJson()) {
            // return route('login');
            abort('404');
        }
    }
}
