<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ImplementationPlan;
use App\Models\IntermediateOutcome;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use App\Models\Strategy;
use App\Models\StrategyProject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StrategyController extends Controller
{
    protected $model;
    public function __construct(Strategy $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }

    /**
     * Check if user can perform an action
     * @param string $ability
     * @param mixed $arguments
     * @return bool
     */
    private function userCan($ability, $arguments = null)
    {
        /** @var User|null $user */
        $user = Auth::user();
        if ($user) {
            return $user->can($ability, $arguments);
        }
        return false;
    }

    public function index(Request $request, $id, $ismfo)
    {
        // dd($id);
        $data = [];

        if ($ismfo == 1) {
            //dd("true: ".$ismfo);
            $data = $this->model
                ->where('idmfo', $id)
                ->with('mfos')
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        } else {
            $ismfo = 0;
            //dd("false: ".$ismfo);
            $data = $this->model
                ->where('idpaps', $id)
                ->with('paps')
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        }


        return inertia('Strategies/Index', [
            "data" => $data,
            "idpaps" => $id,
            "ismfo" => $ismfo,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => $this->userCan('can_access_validation', User::class),
                'can_access_indicators' => $this->userCan('can_access_indicators', User::class)
            ],
        ]);
    }


    public function create(Request $request, $id, $ismfo)
    {
        $mfos = MajorFinalOutput::get();
        $paps = ProgramAndProject::get();
        $idpaps = 0;
        $idmfo = 0;
        // dd($ismfo);
        if ($ismfo == 1) {
            $idmfo = $id;
        } else {
            $idpaps = $id;
        }
        //dd('$idmfo: '.$idmfo.'idpaps: '.$idpaps);
        return inertia('Strategies/Create', [
            'idpaps' => $idpaps,
            'idmfo' => $idmfo,
            'paps' => $paps,
            'mfos' => $mfos,
            'ismfo' => $ismfo,
            'can' => [
                'can_access_validation' => $this->userCan('can_access_validation', User::class),
                'can_access_indicators' => $this->userCan('can_access_indicators', User::class)
            ],
        ]);
    }


    public function store(Request $request)
    {
        //dd($request);
        $ismfo = '0';

        $attributes = $request->validate([
            'idpaps' => 'required',
            'idmfo' => 'required',
            'description' => 'required',
        ]);
        $this->model->create($attributes);
        //$request->pass='';
        if ($request->idpaps == '0') {
            $ismfo = '1';
            return redirect('/strategies/' . $request->idmfo . '/' . $ismfo . '/strat/mfo')
                ->with('message', 'Strategy added');
        } else {
            $ismfo = '0';
            return redirect('/strategies/' . $request->idpaps . '/' . $ismfo . '/strat/mfo')
                ->with('message', 'Strategy added');
        }
    }


    public function show(Strategy $strategy)
    {
        //
    }


    public function edit(Request $request, $id, $idpaps, $ismfo)
    {
        $mfos = MajorFinalOutput::get();
        $paps = ProgramAndProject::get();
        $idpaps = 0;
        $idmfo = 0;
        if ($ismfo == 1) {
            $idmfo = $id;
        } else {
            $idpaps = $id;
        }
        $paps = ProgramAndProject::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
            'idpaps'
        ]);

        return inertia('Strategies/Create', [
            "editData" => $data,
            "paps" => $paps,
            "idpaps" => $idpaps,
            'idmfo' => $idmfo,
            'mfos' => $mfos,
            'ismfo' => $ismfo,
            'can' => [
                'can_access_validation' => $this->userCan('can_access_validation', User::class),
                'can_access_indicators' => $this->userCan('can_access_indicators', User::class)
            ],
        ]);
    }


    public function update(Request $request, Strategy $strategy)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'description' => $request->description,
            // 'idpaps' => $request->idpaps
        ]);

        return redirect('/strategies/' . $request->idpaps)
            ->with('message', 'Strategy updated');
    }


    public function destroy(Request $request, $id, $idpaps)
    {
        //dd('destroy strat');
        $strat = $this->model->where('id', $id)->first();
        //dd($strat->idpaps);
        $count_imp = ImplementationPlan::where('idstrategy', $id)->count();
        $count_act = Activity::where('strategy_id', $id)->count();
        $ismfo = "0";
        if ($strat->idpaps == "0") {
            $ismfo = "1";
        }
        $msg = "";
        $status = "";
        if ($count_imp > 0 || $count_act > 0) {
            $msg = "Unable to delete!";
            if ($count_imp > 0) {
                $msg = $msg . " \nDelete its child implementation plans first!";
            }
            if ($count_act > 0) {
                $msg = $msg . " \nDelete its child activities first!";
            }
            $status = "error";
        } else {
            $msg = "Strategy successfully deleted!";
            $status = "message";

            $data = $this->model->findOrFail($id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/strategies/' . $idpaps . '/' . $ismfo . '/strat/mfo')->with($status, $msg);
    }

    public function save_strategies(Request $request)
    {
        $strategies = $request->input('strategies', []);
        // $ids =
        // dd($request, $request->input('strategy_id'), $request->input('paps_id'), $request->input('project_id'));
        // dd($strategies);
        foreach ($strategies as $data) {
            $strategy = Strategy::create([
                'description' => $data['description'] ?? null,
                'idpaps'      => $data['idpaps'] ?? null,
                'idmfo'       => $data['idmfo'] ?? null,
                'FFUNCCOD'    => $data['FFUNCCOD'] ?? null,
                'year_period' => $data['year_period'] ?? null,
            ]);
            // dd($strategy);
            StrategyProject::create([
                'strategy_id'      => $strategy->id,   // inherit the created strategy id
                'project_id'       => $request->input('project_id'),         // inherit from request
                'target_indicator' => null,
                'date_from'        => null,
                'date_to'          => null,
                'ps_q1'            => null,
                'ps_q2'            => null,
                'ps_q3'            => null,
                'ps_q4'            => null,
                'mooe_q1'          => null,
                'mooe_q2'          => null,
                'mooe_q3'          => null,
                'mooe_q4'          => null,
                'co_q1'            => null,
                'co_q2'            => null,
                'co_q3'            => null,
                'co_q4'            => null,
                'fe_q1'            => null,
                'fe_q2'            => null,
                'fe_q3'            => null,
                'fe_q4'            => null,
                'gad_issue'        => null,
                'ccet_code'        => null,
                'responsible'      => null,
                'is_active'        => 1,
            ]);
            // dd(StrategyProject::where('strategy_id', $strategy->id)->get(), $strategy);
        }
        // dd(StrategyProject)
        return response()->json(['message' => 'Strategies saved successfully.']);
    }
}
