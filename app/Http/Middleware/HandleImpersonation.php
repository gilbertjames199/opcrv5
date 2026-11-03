<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\ImpersonationLog;

class HandleImpersonation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if user is impersonating and share it with Inertia
        if (session('impersonate_original_user')) {
            \Inertia\Inertia::share([
                'flash' => [
                    'impersonating' => true,
                    'original_user_id' => session('impersonate_original_user'),
                ]
            ]);

            // Track CRUD actions when impersonating
            if (in_array($request->method(), ['POST', 'PUT', 'PATCH', 'DELETE'])) {
                $this->logImpersonationAction($request);
            }
        }

        return $next($request);
    }

    /**
     * Log impersonation actions for tracking.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    private function logImpersonationAction(Request $request)
    {
        $originalUserId = session('impersonate_original_user');
        $impersonatedUser = auth()->user();

        ImpersonationLog::create([
            'original_user_id' => $originalUserId,
            'impersonated_user_id' => $impersonatedUser->recid ?? null,
            'impersonated_user_name' => $impersonatedUser->FullName ?? null,
            'action' => $request->method(),
            'url' => $request->fullUrl(),
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);
    }
}
