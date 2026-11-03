<?php

namespace App\Http\Controllers;

use App\Models\ChiefAgenda;
use App\Models\EconomicAgenda;
use App\Models\ELA;
use App\Models\OrganizationalGoal;
use App\Models\Outcome;
use App\Models\ResearchAgenda;
use App\Models\SDG;
use App\Models\Sectoral;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OutcomeController extends Controller
{
    protected $model;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Outcome $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request)
    {

        //dd($org_goals->pluck("goal_description"));
        $data = $this->model
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Outcome/Index', [
            "data" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {
        $org_goals = OrganizationalGoal::get();
        $sec_goals = Sectoral::get();
        $sdg_goals = SDG::get();
        $chief_agenda = ChiefAgenda::get();
        $econ_agenda = EconomicAgenda::get();
        $ela_agenda = ELA::get();
        $res_agenda = ResearchAgenda::get();
        return inertia(
            'Outcome/Create',
            [
                'org_goals' => $org_goals,
                'sec_goals' => $sec_goals,
                'sdg_goals' => $sdg_goals,
                'chief_agenda' => $chief_agenda,
                'econ_agenda' => $econ_agenda,
                'ela_agenda' => $ela_agenda,
                'res_agenda' => $res_agenda,
                'can' => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]

        );
    }

    public function store(Request $request)
    {
        $attributes = $request->validate(Outcome::rules(), Outcome::errorMessages());
        $this->model->create($attributes);
        $request->pass = '';
        return redirect('/outcome')
            ->with('message', 'Outcome added');
    }

    public function edit(Request $request, $id)
    {
        $org_goals = OrganizationalGoal::get();
        $sec_goals = Sectoral::get();
        $sdg_goals = SDG::get();
        $chief_agenda = ChiefAgenda::get();
        $econ_agenda = EconomicAgenda::get();
        $ela_agenda = ELA::get();
        $res_agenda = ResearchAgenda::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'plan_period_year_from',
            'plan_period_year_to',
            'oc_desc',
            'id_org_goals',
            'id_sec_goals',
            'id_sdg_goals',
            'id_cea',
            'id_sea',
            'id_ela',
            'id_rea',
            'FFUNCCOD',
        ]);

        return inertia('Outcome/Create', [
            "editData" => $data,
            'org_goals' => $org_goals,
            'sec_goals' => $sec_goals,
            'sdg_goals' => $sdg_goals,
            'chief_agenda' => $chief_agenda,
            'econ_agenda' => $econ_agenda,
            'ela_agenda' => $ela_agenda,
            'res_agenda' => $res_agenda,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $validatedData = $request->validate(Outcome::rules(), Outcome::errorMessages());
        $data->update($validatedData);
        return redirect('/outcome')
            ->with('info', 'Outcome updated');
    }


    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/outcome')->with('deleted', 'Target deleted');
    }
}
