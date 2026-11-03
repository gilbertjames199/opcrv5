<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\MajorFinalOutput;
use App\Models\SubMfo;
use Illuminate\Http\Request;
use Illuminate\Pagination\PaginationState;
use Illuminate\Support\Facades\DB;

class SubMfoController extends Controller
{
    protected $mfo, $submfo;
    public function __construct(SubMfo $submfo, MajorFinalOutput $mfo)
    {
        $this->mfo=$mfo;
        $this->submfo=$submfo;
    }
    public function index(Request $request, $idmfo){
        //dd("submfo index");
        $data =  $this->submfo
                    ->select('major_final_outputs.mfo_desc', 'sub_mfos.id','sub_mfos.submfo_description','major_final_outputs.FFUNCCOD')
                    ->join('major_final_outputs','major_final_outputs.id','sub_mfos.idmfo')
                    ->where("sub_mfos.idmfo", $idmfo)
                    ->get();

        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                        ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                        ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                        ->where('systemusers.recid',$idn)
                        ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
        $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
        $showPerPage=10;
        $paginatedResult =PaginationHelper::paginate($result, $showPerPage);
        return inertia('MFOs/SubMFO/Direct',[
            "idmfo"=>$idmfo,
            "data"=>$paginatedResult
        ]);
    }
    public function create(Request $request, $idmfo){
        //Retrieving user access
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                ->where('systemusers.recid',$idn)
                ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //MFOs
        $mfos = MajorFinalOutput::get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        return inertia('MFOs/SubMFO/Create',[
            "mfos"=>$mfos,
            "idmfo"=>$idmfo
        ]);
    }
    public function store(Request $request){
        $attributes = $request->validate([
            'idmfo' => 'required',
            'submfo_description' => 'required',
        ]);
        $this->submfo->create($attributes);
        return redirect('/submfos/'.$request->idmfo)
                ->with('message','Sub MFO added');
    }
    public function edit(Request $request, $id){
        $data = $this->submfo->where('id', $id)->first();
        $idmfo = $data->idmfo;
        //Retrieving user access
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                ->where('systemusers.recid',$idn)
                ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //MFOs
        $mfos = MajorFinalOutput::get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        return inertia('MFOs/SubMFO/Create',[
            "editData"=>$data,
            "mfos"=>$mfos,
            "idmfo"=>$idmfo
        ]);
    }
    public function update(Request $request){
        // dd("update: ".$request->idmfo);
        $submfo = $this->submfo->find($request->id);
        $submfo->submfo_description = $request->submfo_description;
        $submfo->idmfo = $request->idmfo;
        $submfo->save();
        return redirect('/submfos/'.$request->idmfo)
                ->with('message','Division Output updated');
    }
    public function destroy(Request $request, $id){

        $data = $this->submfo->findOrFail($id);
        $idmfo =$data->idmfo;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/submfos/'.$idmfo)->with('warning', 'Sub MFO Deleted');
    }
    public function getSubMFOs(Request $request){
        return $this->submfo->where('idmfo', $request->idmfo)->get();
    }
}
