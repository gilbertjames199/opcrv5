<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\Division;
use App\Models\DivisionOutput;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DivisionOutputController extends Controller
{
    protected $div_output, $division, $paps;
    public function __construct(DivisionOutput $div_output, Division $division, ProgramAndProject $paps)
    {
        $this->div_output=$div_output;
        $this->division = $division;
        $this->paps = $paps;
    }
    public function index(Request $request){
        $data = $this->div_output->select('division_outputs.output','division_outputs.id',
                    'divisions.division_name1 AS description', 'major_final_outputs.FFUNCCOD', 'major_final_outputs.mfo_desc')
                    ->leftjoin('divisions','divisions.id','division_outputs.division_id')
                    ->join('major_final_outputs','major_final_outputs.id','division_outputs.idmfo')
                    ->where(function($query) {
                        $query->where('major_final_outputs.department_code', auth()->user()->department_code)
                              ->orWhere('major_final_outputs.department_code', '-');
                    })
                    ->orderBy('divisions.division_name1', 'ASC')
                    ->paginate(10);
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

        return inertia('Division/Outputs/Index',[
            "data"=>$data
        ]);
    }
    public function create(Request $request){
        //$divisions = Division::get();
        //Retrieving user access
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                ->where('systemusers.recid',$idn)
                ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
        $divisions = $this->division
                ->where('department_code',auth()->user()->department_code)
                ->get();

        $mfos = MajorFinalOutput::get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);
        return inertia('Division/Outputs/Create',[
            "divisions"=>$divisions,
            "mfos"=>$mfos,
        ]);
    }
    public function store(Request $request){
        $attributes = $request->validate([
            'division_id' => 'required',
            'idmfo' => 'required',
            'output' => 'required',
        ]);
        $this->div_output->create($attributes);
        return redirect('/division_outputs')
                ->with('message','Division Output added');
    }
    public function edit(Request $request, $id){
        //dd($id);
        $divisions = Division::get();
        //Retrieving user access
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                ->where('systemusers.recid',$idn)
                ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
        $divisions = $this->division
                ->where('department_code',auth()->user()->department_code)
                ->get();

        $mfos = MajorFinalOutput::get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        $data = $this->div_output->where('id', $id)->first();
        return inertia('Division/Outputs/Create',[
            "divisions"=>$divisions,
            "mfos"=>$mfos,
            "editData"=>$data
        ]);
    }
    public function update(Request $request){
        $div = $this->div_output->find($request->id);
        $div->division_id = $request->division_id;
        $div->idmfo = $request->idmfo;
        $div->output = $request->output;
        $div->save();
        return redirect('/division_outputs')
                ->with('message','Division Output updated');
    }
    public function destroy(Request $request, $id){

        $data = $this->div_output->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/division_outputs')->with('warning', 'Division Output Deleted');
    }
    public function getDivOutput(Request $request){
        return $this->div_output->where('division_id', $request->division_id)->get();
    }


}
