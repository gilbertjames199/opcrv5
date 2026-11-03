<?php

namespace App\Http\Controllers;

use App\Models\OOE;
use App\Models\RAAOD;
use App\Models\RAAOHS;
use App\Models\Systemuser;
use App\Models\Target;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RAAOController extends Controller
{
    protected $ooe_model;
    protected $raaod_model;
    public function construct(OOE $ooe_model, RAAOD $raaod_model){
        $this->ooe_model=$ooe_model;
        $this->raaod_model = $raaod_model;
    }
    public function index(Request $request)
    {
        //dd(Auth::user()->recid);
        // $data=DB::connection('mysql2')
        //         ->table('raaohs')
        //         ->paginate(10);
        $today = Carbon::now();
        $year = ''.$today->year.'';
        $year_object=DB::connection('mysql2')
                        ->table('raaohs')
                        ->select(DB::raw('DISTINCT(tyear)'))
                        ->orderBy('tyear','ASC')
                        ->get();
        $data_new=[];
        //dd($year);
        if($request->year!=''){
            $year=$request->year;
        }
        if(Auth::user()->UserType=='Administrator'){
            $data_new=DB::connection('mysql2')
                            ->table(DB::raw('(select raaohs.tyear,
                                                    raaohs.aipcode,
                                                    raaohs.fraodesc,
                                                    raaohs.falltcod,
                                                    raaohs.ffunccod,
                                                    raaohs.recid,
                                                    sources.fsource from raaohs
                                                    left join sources on
                                                    sources.recid = raaohs.idsource
                                                    where fraotype>\'2\') a'))
                            ->select('a.tyear',
                                        'a.fraodesc',
                                        'a.falltcod',
                                        'a.aipcode',
                                        'a.ffunccod',
                                        'a.fsource',
                                        'a.recid',
                                        'b.appropriation',
                                        'b.obligations',
                                        DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                            ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                            ->where('a.tyear','=',$year)
                            ->when($request->year, function($query, $year_search){
                                $query->where('a.tyear','=',$year_search);
                             })
                             ->when($request->search, function ($query, $searchItem) {
                                $query->whereNested(function($query) use ($searchItem){
                                                $query->where('a.FRAODESC', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FALLTCOD', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FFUNCCOD', 'like', '%' . $searchItem . '%');
                                        });
                            })
                            ->paginate(10);
            //dd($data_new);
            $data=DB::connection('mysql2')
                    ->table(DB::raw('raaohs r'))
                    ->select(
                        'r.recid',
                        'r.FRAODESC',
                        'r.aipcode',
                        'r.FFUNCCOD',
                        'r.FALLTCOD',
                        'r.tyear',
                        's.FSOURCE',
                        DB::raw('SUM(if(d.entrytype=1,d.famount,0)) as tapprop'),
                        DB::raw('SUM(if(d.entrytype=2,d.famount,0)) as tallot'),
                        DB::raw('SUM(if(d.entrytype=3,d.famount,0)) AS toblig')
                    )
                    ->join(DB::raw('raaods d'),'r.recid','=','d.idraao')
                    ->join(DB::raw('ooes o'),'o.recid','=','d.idooe')
                    ->join(DB::raw('sources s'), 's.recid','=','r.idsource')
                    ->where('r.FRAOTYPE','>',2)
                    ->where('r.tyear','=',$year)
                    ->when($request->year, function($query, $year_search){
                        $query->where('tyear','=',$year_search);
                     })
                     ->when($request->search, function ($query, $searchItem) {
                        $query->whereNested(function($query) use ($searchItem){
                                        $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                            ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                            ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                                });
                    })
                    ->groupBy('d.idooe')
                    ->paginate(10);
        }else{
            /*
              $data=DB::connection('mysql2')
                 ->table('raaohs AS r')
                 ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
                 ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
                 ->select('r.recid','r.FRAODESC','r.FALLTCOD','r.FFUNCCOD','r.FFUNDCOD',
                        'r.FRAOTYPE','r.idsource','r.aipcode','r.excludetag','r.tyear')
                 ->when($request->year, function($query, $year_search){
                    $query->where('tyear','=',$year_search);
                 })
                 ->where('FRAOTYPE','>','2')
                 ->where('a.iduser','=',Auth::user()->recid)
                 ->where('r.tyear','=',$year)
                 ->when($request->search, function ($query, $searchItem) {
                    $query->whereNested(function($query) use ($searchItem){
                                    $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                            })
                            ->where('a.iduser','=',Auth::user()->recid);
                })
                ->paginate(10);
             */

                $data_new=DB::connection('mysql2')
                            ->table(DB::raw('(select raaohs.tyear,
                                                    raaohs.aipcode,
                                                    raaohs.fraodesc,
                                                    raaohs.falltcod,
                                                    raaohs.ffunccod,
                                                    raaohs.recid,
                                                    sources.fsource from raaohs
                                                    left join sources on
                                                    sources.recid = raaohs.idsource
                                                    where fraotype>\'2\') a'))
                            ->select('a.tyear',
                                        'a.fraodesc',
                                        'a.falltcod',
                                        'a.aipcode',
                                        'a.ffunccod',
                                        'a.fsource',
                                        'a.recid',
                                        'b.appropriation',
                                        'b.obligations',
                                        DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                            ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                            ->leftjoin('accountaccess AS acc','a.ffunccod','=','acc.ffunccod')
                            ->leftjoin('systemusers AS su','su.recid','=','acc.iduser')
                            ->where('acc.iduser','=',Auth::user()->recid)
                            ->where('a.tyear','=',$year)
                            ->when($request->year, function($query, $year_search){
                                $query->where('a.tyear','=',$year_search);
                             })
                             ->when($request->search, function ($query, $searchItem) {
                                $query->whereNested(function($query) use ($searchItem){
                                                $query->where('a.FRAODESC', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FALLTCOD', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FFUNCCOD', 'like', '%' . $searchItem . '%');
                                        });
                            })
                            ->paginate(10);
             $data=DB::connection('mysql2')
                 ->table('raaohs AS r')
                 ->select(
                    'r.FRAODESC',
                    'r.aipcode',
                    'r.FFUNCCOD',
                    'r.FALLTCOD',
                    'r.tyear',
                    DB::raw('SUM(if(d.entrytype=1,d.famount,0)) as tapprop'),
                    DB::raw('SUM(if(d.entrytype=2,d.famount,0)) as tallot'),
                    DB::raw('SUM(if(d.entrytype=3,d.famount,0)) AS toblig')
                )
                 ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
                 ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
                 ->join(DB::raw('raaods d'),'r.recid','=','d.idraao')
                 ->join(DB::raw('ooes o'),'o.recid','=','d.idooe')
                 ->when($request->year, function($query, $year_search){
                    $query->where('tyear','=',$year_search);
                 })
                 ->where('FRAOTYPE','>','2')
                 ->where('a.iduser','=',Auth::user()->recid)
                 ->where('r.tyear','=',$year)
                 ->when($request->search, function ($query, $searchItem) {
                    $query->whereNested(function($query) use ($searchItem){
                                    $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                            })
                            ->where('a.iduser','=',Auth::user()->recid);
                })
                ->groupBy('d.idooe')
                ->paginate(10);
        }

        //$summs = $this->raaod_model->with(['ooe']);
        //dd($summs);
        $users =Systemuser::on('mysql2')->get();
        //dd($data);


        //dd($year_object);
        return inertia('RAAO/Index',[
                            "data"=>$data,
                            "datanew"=>$data_new,
                            "filters" => $request->only(['search']),
                            "sysusers"=>$users,
                            "year"=> $year_object,
                            "year_sel"=>$year,
                            //"summs"=>$summs,
                            'can'=>[
                                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                            ],
                    ]);
    }
    //DILI NI MAO
    public function rrr(Request $request){
        /*
        $data_new=DB::connection('mysql2')
                    ->table(DB::raw('(select raaohs.tyear,
                                    raaohs.aipcode,
                                    raaohs.fraodesc,
                                    raaohs.falltcod,
                                    raaohs.ffunccod,
                                    raaohs.recid,
                                    sources.fsource from raaohs
                                    left join sources on
                                    sources.recid = raaohs.idsource
                                    where fraotype>\'2\') a'))
                    ->select('a.tyear',
                            'a.fraodesc',
                            'a.falltcod',
                            'a.aipcode',
                            'a.ffunccod',
                            'a.fsource',
                            'a.recid',
                            'b.appropriation',
                            'b.obligations',
                            'b.idraao',
                            DB::raw('group_concat(t.target_qty) as target_qty'),
                            DB::raw('group_concat(t.target_qty1,"-") as target_qty1'),
                            DB::raw('group_concat(t.target_qty2) as target_qty2'),
                            DB::raw('group_concat(t.target_qty3) as target_qty3'),
                            DB::raw('group_concat(t.target_qty4) as target_qty4'),
                            DB::raw('group_concat(t.idraao) as idraao'),
                            DB::raw('group_concat(t.description) as target_description'),
                            DB::raw('group_concat(i.description) as description'),
                            DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                    ->where('a.tyear',request('year'))
                    ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                    ->Join(DB::raw('rrr.targets t'),'t.idraao','=','b.idraao')
                    ->Join(DB::raw('rrr.indicators i'),'t.idindicator','=','i.id')
                    ->groupBy('a.recid')
                    ->get()
                    ->map(function($item){
                        $userType=request('userType');
                        $id=$item->recid;
                        $targ_qty1= DB::table('targets')
                                        ->select('targets.target_qty1','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty1'=>$item->target_qty1,
                                                    'indicator'=>$item->description
                                                    ];

                                        });
                        $targ_qty2= DB::table('targets')
                                        ->select('targets.target_qty2','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty2'=>$item->target_qty2,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_qty3= DB::table('targets')
                                        ->select('targets.target_qty3','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty3'=>$item->target_qty3,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_qty4= DB::table('targets')
                                        ->select('targets.target_qty4','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty4'=>$item->target_qty4,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        return [
                                    'userType'=>$userType,
                                    'lgu'=>request('lgu'),
                                    'dept'=>request('dept'),
                                    'dept_head'=>'Department Head Name',
                                    'lce'=>'Local Chief Executive',
                                    'fraodesc'=>$item->fraodesc,
                                    'appropriation'=>$item->appropriation,
                                    'description'=>$item->description,
                                    'target_qty1'=>$targ_qty1,
                                    'target_qty2'=>$targ_qty2,
                                    'target_qty3'=>$targ_qty3,
                                    'target_qty4'=>$targ_qty4,
                                    'recid'=>$item->recid
                                ];
                    });
        /************************************* */
        /*
        $data_new=DB::connection('mysql2')
                            ->table(DB::raw('(select raaohs.tyear,
                                                    raaohs.aipcode,
                                                    raaohs.fraodesc,
                                                    raaohs.falltcod,
                                                    raaohs.ffunccod,
                                                    raaohs.recid,
                                                    sources.fsource from raaohs
                                                    left join sources on
                                                    sources.recid = raaohs.idsource
                                                    where fraotype>\'2\') a'))
                            ->select('a.tyear',
                                        'a.fraodesc',
                                        'a.falltcod',
                                        'a.aipcode',
                                        'a.ffunccod',
                                        'a.fsource',
                                        'a.recid',
                                        'b.appropriation',
                                        'b.obligations',
                                        'b.idraao',
                                        't.target_qty',
                                        't.target_qty1',
                                        't.target_qty2',
                                        't.target_qty3',
                                        't.target_qty4',
                                        't.idraao',
                                        't.description',
                                        'i.description',
                                        DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                            ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                            ->leftJoin(DB::raw('my_raao_new.targets t'),'t.idraao','=','b.idraao')
                            ->leftJoin(DB::raw('my_raao_new.indicators i'),'t.idindicator','=','i.id')
                            ->get()->map(function($item){
                                $userType=request('userType');
                                return [
                                            'userType'=>$userType,
                                            'lgu'=>request('lgu'),
                                            'dept'=>request('dept'),
                                            'dept_head'=>'Department Head Name',
                                            'lce'=>'Local Chief Executive',
                                            'fraodesc'=>$item->fraodesc,
                                            'appropriation'=>$item->appropriation,
                                            'description'=>$item->description,
                                            'target_qty1'=>$item->target_qty1,
                                            'target_qty2'=>$item->target_qty2,
                                            'target_qty3'=>$item->target_qty3,
                                            'target_qty4'=>$item->target_qty4
                                        ];
                            });
        */
        //************************************* */
        /*$data_new=DB::connection('mysql2')
                    ->table(DB::raw('(select raaohs.tyear,
                                    raaohs.aipcode,
                                    raaohs.fraodesc,
                                    raaohs.falltcod,
                                    raaohs.ffunccod,
                                    raaohs.recid,
                                    sources.fsource from raaohs
                                    left join sources on
                                    sources.recid = raaohs.idsource
                                    where fraotype>\'2\') a'))
                    ->select('a.tyear',
                            'a.fraodesc',
                            'a.falltcod',
                            'a.aipcode',
                            'a.ffunccod',
                            'a.fsource',
                            'a.recid',
                            'b.appropriation',
                            'b.obligations',
                            'b.idraao',
                            DB::raw('group_concat(t.target_qty) as target_qty'),
                            DB::raw('group_concat(t.target_qty1,"-") as target_qty1'),
                            DB::raw('group_concat(t.target_qty2) as target_qty2'),
                            DB::raw('group_concat(t.target_qty3) as target_qty3'),
                            DB::raw('group_concat(t.target_qty4) as target_qty4'),
                            DB::raw('group_concat(t.idraao) as idraao'),
                            DB::raw('group_concat(t.description) as target_description'),
                            DB::raw('group_concat(i.description) as description'),
                            DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                    ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                    ->Join(DB::raw('my_raao_new.targets t'),'t.idraao','=','b.idraao')
                    ->Join(DB::raw('my_raao_new.indicators i'),'t.idindicator','=','i.id')
                    ->groupBy('a.recid')
                    ->get()
                    ->map(function($item){
                        $userType=request('userType');
                        return [
                                    'userType'=>$userType,
                                    'lgu'=>request('lgu'),
                                    'dept'=>request('dept'),
                                    'dept_head'=>'Department Head Name',
                                    'lce'=>'Local Chief Executive',
                                    'fraodesc'=>$item->fraodesc,
                                    'appropriation'=>$item->appropriation,
                                    'description'=>$item->description,
                                    'target_qty1'=>$item->target_qty1,
                                    'target_qty2'=>$item->target_qty2,
                                    'target_qty3'=>$item->target_qty3,
                                    'target_qty4'=>$item->target_qty4
                                ];
                    });*/
        return $data_new;
    }
    //MAO NI
    public function raao_jasper(Request $request){

        /*
        $today = Carbon::now();
        $year = ''.$today->year.'';

        $table_a = RAAOHS::select('tyear','aipcode','falltcod','FFUNCCOD','raaohs.recid','FSOURCE')
                    ->leftjoin('sources','sources.recid','=','raaohs.idsource')
                    ->get();
        $table_b = RAAOD::select('idraao',
                    DB::raw('sum(if(entrytype=\'1\', famount,0)) as appropriation'),
                    DB::raw('sum(if(entrytype=\'3\', famount,0)) as obligations')
                   )->groupby('idraao')
                   ->get();
        */
        //dd($table_a);
        // if($request->year){
        //     dd($request);
        // }
        /*
        $data_new=DB::connection('mysql2')
                    ->table(DB::raw('(select raaohs.tyear,
                                    raaohs.aipcode,
                                    raaohs.fraodesc,
                                    raaohs.falltcod,
                                    raaohs.ffunccod,
                                    raaohs.recid,
                                    sources.fsource from raaohs
                                    left join sources on
                                    sources.recid = raaohs.idsource
                                    where fraotype>\'2\') a'))
                    ->select('a.tyear',
                            'a.fraodesc',
                            'a.falltcod',
                            'a.aipcode',
                            'a.ffunccod',
                            'a.fsource',
                            'a.recid',
                            'b.appropriation',
                            'b.obligations',
                            'b.idraao',
                            't.target_qty',
                            't.target_qty1',
                            't.target_qty2',
                            't.target_qty3',
                            't.target_qty4',
                            't.idraao',
                            't.description',
                            'i.description',
                            DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                    ->where('a.tyear',request('year'))
                    ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                    ->Join(DB::raw('rta.targets t'),'t.idraao','=','b.idraao')
                    ->Join(DB::raw('rta.indicators i'),'t.idindicator','=','i.id')
                    ->groupBy('a.recid')
                    ->get()
                    ->map(function($item){
                        $userType=request('userType');
                        $id = $item->recid;
                        $targ_qty1= DB::table('targets')
                                        ->select('targets.target_qty1','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty1'=>$item->target_qty1,
                                                    'indicator'=>$item->description
                                                    ];

                                        });
                        $targ_qty2= DB::table('targets')
                                        ->select('targets.target_qty2','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty2'=>$item->target_qty2,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_qty3= DB::table('targets')
                                        ->select('targets.target_qty3','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty3'=>$item->target_qty3,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_qty4= DB::table('targets')
                                        ->select('targets.target_qty4','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty4'=>$item->target_qty4,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        return [
                                'userType'=>$userType,
                                'lgu'=>request('lgu'),
                                'dept'=>request('dept'),
                                'dept_head'=>'Department Head Name (1234)',
                                'lce'=>'Local Chief Executive',
                                'fraodesc'=>rtrim($item->fraodesc," "),
                                'appropriation'=>$item->appropriation,
                                'description'=>$item->description,
                                'target_qty1'=>$targ_qty1,
                                'target_qty2'=>$item->target_qty2,
                                'target_qty3'=>$item->target_qty3,
                                'target_qty4'=>$item->target_qty4
                                ];
                    });
        /*
        $data_e = RAAOHS::select(DB::raw('a.recid, a.tyear,a.fraodesc, a.falltcod,a.ffunccod, a.fsource, b.appropriation, b.obligations, (100*(b.obligations/b.appropriation)) as utilization, t.target_qty, t.target_qty1'))
                    ->from(DB::raw('(select raaohs.tyear, raaohs.fraodesc, raaohs.recid, raaohs.falltcod, raaohs.ffunccod, sources.fsource from raaohs left join sources on sources.recid = raaohs.idsource where fraotype>"2" ) a'))
                    ->leftJoin(DB::raw("(select idraao, sum(if(entrytype='1', famount,0)) as appropriation ,sum(if(entrytype='3', famount,0)) as obligations from raaods group by idraao) b "),'a.recid','=','b.idraao')
                    ->Join(DB::raw('rrr.targets t'),'t.idraao','=','b.idraao')
                    ->Join(DB::raw('rrr.indicators i'),'t.idindicator','=','i.id')
                    ->get()->toArray();

        $data_j = json_encode($data_e);
        $data_jd = json_decode($data_j, true);
        $data_c = collect($data_e);
        $data_g = $data_c->groupBy('rec_id')->toArray();
        */
        //
        //->leftJoin(DB::raw('select idraao,sum(if(entrytype="1", famount,0)) as appropriation ,sum(if(entrytype="3", famount,0)) as obligations from raaods group by idraao) b '),'a.recid','=','b.idraao')
                //->where('a.tyear',request('year'))
        $data_new=DB::connection('mysql2')
                    ->table(DB::raw('(select raaohs.tyear,
                                    raaohs.aipcode,
                                    raaohs.fraodesc,
                                    raaohs.falltcod,
                                    raaohs.ffunccod,
                                    raaohs.recid,
                                    sources.fsource from raaohs
                                    left join sources on
                                    sources.recid = raaohs.idsource
                                    where fraotype>\'2\') a'))
                    ->select('a.tyear',
                            'a.fraodesc',
                            'a.falltcod',
                            'a.aipcode',
                            'a.ffunccod',
                            'a.fsource',
                            'a.recid',
                            'b.appropriation',
                            'b.obligations',
                            'b.idraao',
                            DB::raw('group_concat(i.description) as description'),
                            DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                    ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                    ->Join(DB::raw('rrr.targets t'),'t.idraao','=','b.idraao')
                    ->Join(DB::raw('rrr.indicators i'),'t.idindicator','=','i.id')
                    ->groupBy('a.recid')
                    ->get()
                    ->map(function($item){
                        $userType=request('userType');
                        $id=$item->recid;
                        $targ_qty1= DB::table('targets')
                                        ->select('targets.target_qty1','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['targ_qty1'=>$item->target_qty1,
                                                    'indicator'=>$item->description
                                                    ];

                                        });
                        $targ_qty2= DB::table('targets')
                                        ->select('targets.target_qty2','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['targ_qty2'=>$item->target_qty2,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_qty3= DB::table('targets')
                                        ->select('targets.target_qty3','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['targ_qty3'=>$item->target_qty3,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_qty4= DB::table('targets')
                                        ->select('targets.target_qty4','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['targ_qty4'=>$item->target_qty4,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        return [
                                    'userType'=>$userType,
                                    'lgu'=>request('lgu'),
                                    'dept'=>request('dept'),
                                    'dept_head'=>'Department Head Name',
                                    'lce'=>'Local Chief Executive',
                                    'fraodesc'=>rtrim($item->fraodesc," "),
                                    'appropriation'=>$item->appropriation,
                                    'description'=>$item->description,
                                    'target_qty1'=>$targ_qty1,
                                    'target_qty2'=>$targ_qty2,
                                    'target_qty3'=>$targ_qty3,
                                    'target_qty4'=>$targ_qty4,
                                    'recid'=>$item->recid,
                                    'tyear'=>$item->tyear
                                ];
                    });
        return $data_new;
    }
    public function raao_jasper_tgqty1(Request $request){
        $targ_qty1= DB::table('targets')
                                        ->select('targets.target_qty1','indicators.description')
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->where('idraao','=',$request->id)
                                        ->get()
                                        ->map(function($item){
                                            return ['target_qty1'=>$item->target_qty1,
                                                    'indicator'=>$item->description
                                                    ];

                                        });
        return $targ_qty1;
    }
    public function raao_jasper_3(Request $request){
        // ->Join(DB::raw('rrr.targets t'),'t.idraao','=','b.idraao')
        //             ->Join(DB::raw('rrr.indicators i'),'t.idindicator','=','i.id')
        $data_new=DB::connection('mysql2')
                    ->table(DB::raw('(select raaohs.tyear,
                                    raaohs.aipcode,
                                    raaohs.fraodesc,
                                    raaohs.falltcod,
                                    raaohs.ffunccod,
                                    raaohs.recid,
                                    sources.fsource from raaohs
                                    left join sources on
                                    sources.recid = raaohs.idsource
                                    where fraotype>\'2\') a'))
                    ->select('a.tyear',
                            'a.fraodesc',
                            'a.falltcod',
                            'a.aipcode',
                            'a.ffunccod',
                            'a.fsource',
                            'a.recid',
                            'b.appropriation',
                            'b.obligations',
                            'b.idraao',
                            DB::raw('group_concat(i.description) as description'),
                            DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                    ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                    ->Join(DB::raw('eppdo.targets t'),'t.idraao','=','b.idraao')
                    ->Join(DB::raw('eppdo.indicators i'),'t.idindicator','=','i.id')
                    ->groupBy('a.recid')
                    ->get()
                    ->map(function($item){
                        $userType=request('userType');
                        $id=$item->recid;
                        $targ_qty1= DB::table('targets')
                                        ->select('targets.target_qty1','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){

                                            return [
                                                    'type'=>'Q1',
                                                    'targ'=>$item->target_qty1,
                                                    'indicator'=>$item->description
                                                    ];

                                        });
                        $targ_qty2= DB::table('targets')
                                        ->select('targets.target_qty2','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['type'=>'Q2',
                                                    'targ'=>$item->target_qty2,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_qty3= DB::table('targets')
                                        ->select('targets.target_qty3','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['type'=>'Q3',
                                                    'targ'=>$item->target_qty3,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_qty4= DB::table('targets')
                                        ->select('targets.target_qty4','indicators.description')
                                        ->where('idraao',$id)
                                        ->join('indicators','targets.idindicator','=','indicators.id')
                                        ->get()
                                        ->map(function($item){
                                            return ['type'=>'Q4','targ'=>$item->target_qty4,
                                                    'indicator'=>$item->description
                                                    ];
                                        });
                        $targ_f= $targ_qty1->merge($targ_qty2);
                        $targ_f=$targ_f->merge($targ_qty3);
                        $targ_f=$targ_f->merge($targ_qty4);
                        return [
                                    'userType'=>$userType,
                                    'lgu'=>request('lgu'),
                                    'dept'=>request('dept'),
                                    'dept_head'=>'Department Head Name',
                                    'lce'=>'Local Chief Executive',
                                    'fraodesc'=>rtrim($item->fraodesc," "),
                                    'appropriation'=>$item->appropriation,
                                    'description'=>$item->description,
                                    'target'=>$targ_f,
                                    'recid'=>$item->recid,
                                    'tyear'=>$item->tyear
                                ];
                    });
        return $data_new;
    }
    //RAAO ADMIN
    public function raao_jasper_admin(Request $request){
        $today = Carbon::now();
        $year = ''.$today->year.'';
        $data_new=DB::connection('mysql2')
                            ->table(DB::raw('(select raaohs.tyear,
                                                    raaohs.aipcode,
                                                    raaohs.fraodesc,
                                                    raaohs.falltcod,
                                                    raaohs.ffunccod,
                                                    raaohs.recid,
                                                    sources.fsource from raaohs
                                                    left join sources on
                                                    sources.recid = raaohs.idsource
                                                    where fraotype>\'2\') a'))
                            ->select('a.tyear',
                                        'a.fraodesc',
                                        'a.falltcod',
                                        'a.aipcode',
                                        'a.ffunccod',
                                        'a.fsource',
                                        'a.recid',
                                        'b.appropriation',
                                        'b.obligations',
                                        DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                            ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                            ->when($request->year, function($query, $year_search){
                                $query->where('a.tyear','=',$year_search);
                             })
                             ->when($request->search, function ($query, $searchItem) {
                                $query->whereNested(function($query) use ($searchItem){
                                                $query->where('a.FRAODESC', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FALLTCOD', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FFUNCCOD', 'like', '%' . $searchItem . '%');
                                        });
                            })
                            ->paginate(10);
                            return $data_new;
    }
    //RAAO USER
    public function raao_jasper_user(Request $request){
        //dd($request);
        $today = Carbon::now();
        //$year = ''.$today->year.'';
        $year = $request->p_year;
        //dd($year);
        $data_new=DB::connection('mysql2')
                    ->table(DB::raw('(select raaohs.tyear,
                                            raaohs.aipcode,
                                            raaohs.fraodesc,
                                            raaohs.falltcod,
                                            raaohs.ffunccod,
                                            raaohs.recid,
                                            sources.fsource from raaohs
                                            left join sources on
                                            sources.recid = raaohs.idsource
                                            where fraotype>\'2\') a'))
                    ->select('a.tyear',
                                'a.fraodesc',
                                'a.falltcod',
                                'a.aipcode',
                                'a.ffunccod',
                                'a.fsource',
                                'a.recid',
                                'b.appropriation',
                                'b.obligations',
                                'b.idraao',
                                't.target_qty',
                                't.target_qty1',
                                't.target_qty2',
                                't.target_qty3',
                                't.target_qty4',
                                't.idraao',
                                't.description',
                                'i.description',
                                DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                    ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                    ->leftjoin('accountaccess AS acc','a.ffunccod','=','acc.ffunccod')
                    ->leftjoin('systemusers AS su','su.recid','=','acc.iduser')
                    ->Join(DB::raw('rrr.targets t'),'t.idraao','=','b.idraao')
                    ->Join(DB::raw('rrr.indicators i'),'t.idindicator','=','i.id')
                    ->where('acc.iduser','=',Auth::user()->recid)
                    ->where('a.tyear','=',$year)
                    ->when($request->year, function($query, $year_search){
                        $query->where('a.tyear','=',$year_search);
                    })
                    ->when($request->search, function ($query, $searchItem) {
                        $query->whereNested(function($query) use ($searchItem){
                            $query->where('a.FRAODESC', 'like', '%' . $searchItem . '%')
                                    ->orWhere('a.FALLTCOD', 'like', '%' . $searchItem . '%')
                                    ->orWhere('a.FFUNCCOD', 'like', '%' . $searchItem . '%');
                        });
                    })
                    ->get()
                    ->map(function($item){
                        $userType=request('userType');
                        return [
                                    'userType'=>$userType,
                                    'lgu'=>request('lgu'),
                                    'dept'=>request('dept'),
                                    'dept_head'=>'Department Head Name',
                                    'lce'=>'Local Chief Executive',
                                    'fraodesc'=>$item->fraodesc,
                                    'appropriation'=>$item->appropriation,
                                    'description'=>$item->description,
                                    'target_qty1'=>$item->target_qty1,
                                    'target_qty2'=>$item->target_qty2,
                                    'target_qty3'=>$item->target_qty3,
                                    'target_qty4'=>$item->target_qty4
                                ];
                    });
        return $data_new;
    }
}
class RAAO{
    public $id;
    public $name;
}
