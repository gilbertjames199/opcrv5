<?php

namespace App\Http\Controllers;

use App\Models\AnnualInvestmentPlan;
use App\Models\AppropriationAmount;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AppropriationAmountController extends Controller
{
    protected $model;
    public function __construct(AppropriationAmount $model)
    {
        $this->model = $model;
    }

    //
    public function index(Request $request, $aip_id)
    {
        // dd($aip_id);
        $data = $this->model->with(['annual_investments', 'annual_investments.program', 'ooe'])
            ->where('aip_id', $aip_id)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        // dd($data);
        return inertia('AnnualInvestmentPlan/Appropriations/Index', [
            "data" => $data,
            "aip_id" => $aip_id,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $aip_id)
    {
        $year_current = date('Y');
        $year_next = intval($year_current) + 1;

        $aip = AnnualInvestmentPlan::where('id', $aip_id)->first();
        // dd($aip->year);
        $ooes = DB::connection('mysql2')->table('raaohs')
            ->select(
                'ooes.FACTCODE',
                'ooes.FOOEDESC',
                'ooes.assetaccountcode',
                'ooes.consotag',
                'ooes.ftype2',
                'ooes.fueltag',
                'ooes.recid',
                'raaohs.FFUNCCOD',
                'raaohs.FRAOTYPE',
                'raaohs.idprogram',
                'raaods.famount'
            )
            ->whereYear('raaods.fdate', $aip->year)
            ->where('raaohs.idprogram', $aip->program_id)
            ->where('raaohs.FFUNCCOD', $aip->FFUNCCOD)
            ->where('raaohs.FRAOTYPE', $aip->raao_type)
            ->where('ooes.FACTCODE', 'LIKE', '5%')
            ->join('raaods', 'raaods.idraao', 'raaohs.recid')
            ->join('ooes', 'ooes.recid', 'raaods.idooe')
            ->groupBy('ooes.recid')
            ->orderBy('ooes.FOOEDESC')
            ->get()
            ->map(function ($item) use ($request, $year_current, $year_next) {
                $year_past = $year_current - 1;
                $past_year = DB::connection('mysql2')
                    ->table('raaods')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaods.entrytype', '2')
                    ->whereYear('raaods.fdate', '=', $year_past)
                    ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
                    ->sum('raaods.famount');
                $sem1 = DB::connection('mysql2')
                    ->table('raaods')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaods.entrytype', '3')
                    ->whereMonth('raaods.fdate', '<', '7')
                    ->whereYear('raaods.fdate', '=', $year_current)
                    ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
                    ->groupBy('raaods.idooe')
                    ->sum('raaods.famount');
                $total = DB::connection('mysql2')
                    ->table('raaods')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaods.entrytype', '1')
                    ->whereYear('raaods.fdate', '=', $year_current)
                    ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
                    ->groupBy('raaods.idooe')
                    ->sum('raaods.famount');



                $sem2 = $total - $sem1;

                return [
                    'FACTCODE' => $item->FACTCODE,
                    'FOOEDESC' => $item->FOOEDESC,
                    'assetaccountcode' => $item->assetaccountcode,
                    'consotag' => $item->consotag,
                    'ftype2' => $item->ftype2,
                    'fueltag' => $item->fueltag,
                    'recid' => $item->recid,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'FRAOTYPE' => $item->FRAOTYPE,
                    'idprogram' => $item->idprogram,
                    'past_year' => $past_year,
                    'sem1' => $sem1,
                    'sem2' => $sem2,
                    'famount' => $item->famount
                ];
            });

        // dd($ooes->pluck('sem2'));
        // $functions = AccountAccess::where('iduser', auth()->user()->recid)
        //     ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
        //     ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
        //     ->with('func')->get();
        // dd('create');
        // dd($functions->pluck('FFUNCCOD'));
        // $programsAndProjects = ProgramAndProject::whereIn('FFUNCCOD', $functions->pluck('FFUNCCOD'))->get();
        // dd($ooes->toSql(), $ooes->getBindings());
        return inertia('AnnualInvestmentPlan/Appropriations/Create', [
            'ooes' => $ooes,
            'aip_id' => $aip_id,
            'aip' => $aip,
            // 'can' => [
            //     'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
            //     'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            // ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request);
        $dept_code = auth()->user()->department_code;
        // $request->merge(['department_code' => $dept_code]);

        $attributes = $request->validate([
            'aip_id' => 'required',
            'aip_code' => 'required',
            'idooe' => 'required',
            'amount' => 'required',
            'aip_code_parent' => 'required',
            'aip_code_child' => 'required',
        ]);
        //dd($attributes);
        // $this->model->create($attributes);
        $aa = new AppropriationAmount();
        $aa->aip_id = $request->aip_id;
        $aa->aip_code = $request->aip_code;
        $aa->idooe = $request->idooe;
        $aa->amount = $request->amount;
        $aa->aip_code_parent = $request->aip_code_parent;
        $aa->aip_code_child = $request->aip_code_child;
        $aa->save();

        //autogenerate the appropriation amount

        return redirect('/appropriation-amounts/' . $request->aip_id)
            ->with('message', 'Appropriation added');
    }

    public function edit(Request $request, $id, $aip_id)
    {
        $data = $this->model->where('id', $id)->first();
        $year_current = date('Y');
        $year_next = intval($year_current) + 1;

        $aip = AnnualInvestmentPlan::where('id', $aip_id)->first();
        // dd($aip->year);
        // dd($aip);
        $aip_year = intval($aip->year) - 1;
        $ooes = DB::connection('mysql2')->table('raaods')
            ->select(
                'ooes.FACTCODE',
                'ooes.FOOEDESC',
                'ooes.assetaccountcode',
                'ooes.consotag',
                'ooes.ftype2',
                'ooes.fueltag',
                'ooes.recid',
                'raaohs.FFUNCCOD',
                'raaohs.FRAOTYPE',
                'raaohs.idprogram',
                'raaods.famount'
            )
            ->whereYear('raaods.fdate', $aip_year)
            ->where('raaohs.idprogram', $aip->program_id)
            ->where('raaohs.FFUNCCOD', $aip->FFUNCCOD)
            ->where('raaohs.FRAOTYPE', $aip->raao_type)
            ->where('ooes.FACTCODE', 'LIKE', '5%')
            ->join('raaohs', 'raaods.idraao', 'raaohs.recid')
            ->join('ooes', 'ooes.recid', 'raaods.idooe')
            ->groupBy('ooes.recid')
            ->orderBy('ooes.FOOEDESC')
            ->get()
            ->map(function ($item) use ($request, $year_current, $year_next) {
                $year_past = $year_current - 1;
                $past_year = DB::connection('mysql2')
                    ->table('raaods')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaods.entrytype', '2')
                    ->whereYear('raaods.fdate', '=', $year_past)
                    ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
                    ->sum('raaods.famount');
                $sem1 = DB::connection('mysql2')
                    ->table('raaods')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaods.entrytype', '3')
                    ->whereMonth('raaods.fdate', '<', '7')
                    ->whereYear('raaods.fdate', '=', $year_current)
                    ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
                    ->groupBy('raaods.idooe')
                    ->sum('raaods.famount');
                $total = DB::connection('mysql2')
                    ->table('raaods')
                    ->where('raaohs.idprogram', $item->idprogram)
                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                    ->where('raaods.idooe', $item->recid)
                    ->where('raaods.entrytype', '1')
                    ->whereYear('raaods.fdate', '=', $year_current)
                    ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
                    ->groupBy('raaods.idooe')
                    ->sum('raaods.famount');



                $sem2 = $total - $sem1;

                return [
                    'FACTCODE' => $item->FACTCODE,
                    'FOOEDESC' => $item->FOOEDESC,
                    'assetaccountcode' => $item->assetaccountcode,
                    'consotag' => $item->consotag,
                    'ftype2' => $item->ftype2,
                    'fueltag' => $item->fueltag,
                    'recid' => $item->recid,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'FRAOTYPE' => $item->FRAOTYPE,
                    'idprogram' => $item->idprogram,
                    'past_year' => $past_year,
                    'sem1' => $sem1,
                    'sem2' => $sem2,
                    'famount' => $item->famount
                ];
            });
        // dd($ooes);
        return inertia('AnnualInvestmentPlan/Appropriations/Create', [
            'ooes' => $ooes,
            'aip_id' => $aip_id,
            'aip' => $aip,
            "editData" => $data,
            // 'can' => [
            //     'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
            //     'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            // ],
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd('update');
        $dept_code = auth()->user()->department_code;
        // $request->merge(['department_code' => $dept_code]);

        $attributes = $request->validate([
            'aip_id' => 'required',
            'aip_code' => 'required',
            'idooe' => 'required',
            'amount' => 'required',
            'aip_code_parent' => 'required',
            'aip_code_child' => 'required',
        ]);
        //dd($attributes);
        $verify = AppropriationAmount::where('aip_code', $request->aip_code)
            ->where('id', '!=', $request->id)
            ->count();
        // dd($request);
        // dd($request);
        // dd($verify);
        // dd(count($verify));
        // $this->model->create($attributes);
        if (floatval($verify) < 1) {
            $aa = AppropriationAmount::where('id', $id)->first();
            $aa->aip_id = $request->aip_id;
            $aa->aip_code = $request->aip_code;
            $aa->idooe = $request->idooe;
            $aa->amount = $request->amount;
            $aa->aip_code_parent = $request->aip_code_parent;
            $aa->aip_code_child = $request->aip_code_child;
            $aa->save();
            return redirect('/appropriation-amounts/' . $request->aip_id)
                ->with('message', 'Appropriation updated');
        } else {
            return redirect()->back()->with('error', 'AIP code duplicated!! Update request unsuccessful!');
        }
    }

    public function destroy(Request $request, $id)
    {
        $status = "message";
        $msg = "appropriation amount deleted";
        $data = $this->model->findOrFail($id);
        $aip_id = $data->aip_id;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/appropriation-amounts/' . $aip_id)->with($status, $msg);
    }
}
