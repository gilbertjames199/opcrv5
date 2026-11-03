<?php

namespace App\Http\Controllers;

use App\Models\ProgramAndProject;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DashBoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //$totalAll = $this->totalAll();



    public function index()
    {
        // dd('create: '.auth()->user()->can('create',User::class).'edit: '.auth()->user()->can('edit',User::class).'delete: '.auth()->user()->can('delete',User::class));
        // dd(DB::connection()->getDatabaseName(), DB::connection('mysql2')->getDatabaseName());
        $dept_code = auth()->user()->department_code;


        $projects = ProgramAndProject::where('department_code', $dept_code)
            ->whereHas('revisionPlan')
            ->with(['revisionPlan' => function ($query) {
                $query->orderBy('id')->limit(1); // only get the latest revision plan per project
            }, 'revisionPlan.budget']) // include its budgets
            ->get();



        $totalBudgets = $projects->sum(function ($project) {
            // get the latest revision plan by ID (assuming 'id' is auto-incrementing)
            $latestRevision = $project->revisionPlan()->orderByDesc('id')->first();

            // sum the budget amounts for that latest revision
            return $latestRevision ? $latestRevision->budget->sum('amount') : 0;
        });

        $totalBudgetsFormatted = '₱' . number_format($totalBudgets, 2);

        $totalBudgetsGAD = $projects->sum(function ($project) {
            $latestRevision = $project->revisionPlan()->orderByDesc('id')->first();
            return $latestRevision
                ? $latestRevision->budget->where('category_gad', 'GAD')->sum('amount')
                : 0;
        });

        $totalBudgetsGADFormatted = '₱' . number_format($totalBudgetsGAD, 2);

        // dd($totalBudgets);



        // dd($totalBudgetsGADFormatted);
        return inertia('Home', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
            'totalPlans' => $projects->count(), // ✅ pass total count to frontend
            'totalBudgets' => $totalBudgetsFormatted,
            'totalGadBudgets' => $totalBudgetsGADFormatted,

        ]);
    }
    public function manual()
    {
        return inertia('Manual/Index');
    }
    public function not_found()
    {
        return inertia('NotFound/Index');
    }
}
