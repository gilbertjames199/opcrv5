<?php

namespace App\Http\Controllers;

use App\Models\OfficeAccountable;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OfficeAccountableController extends Controller
{
        //
        protected $model;
        public function __construct(OfficeAccountable $model)
        {
            $this->model=$model;
        }
        public function index(Request $request, $idpaps){
            $paps = ProgramAndProject::findOrFail($idpaps);
            $data = $this->model
                        ->where('idpaps', $idpaps)
                        ->orderBy('created_at', 'desc')
                        ->paginate(10)
                        ->withQueryString();
            return inertia('OfficeAccountable/Index',[
                "data"=>$data,
                "idpaps"=>$idpaps,
                "paps"=>$paps,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }

        public function create(Request $request, $idpaps){

            $paps = ProgramAndProject::findOrFail($idpaps);
            // dd($paps);
            return inertia('OfficeAccountable/Create',[
                'paps'=>$paps,
                'idpaps'=>$idpaps,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }

        public function store(Request $request){
            // dd($request);
            $id = $request->idpaps;
            $attributes = $request->validate([
                'office_accountable' => 'required',
                'idpaps'=>'required',
            ]);

            //dd($attributes);
            $this->model->create($attributes);
            return redirect('/OfficeAccountable/'.$id)
                    ->with('message','Office/Individual Account added');
        }

        public function edit(Request $request, $id){
            $data = $this->model->where('id', $id)->first([
                'id',
                'office_accountable',
                'idpaps'
            ]);
            $paps = ProgramAndProject::findOrFail($data->idpaps);
            return inertia('OfficeAccountable/Create', [
                "editData" => $data,
                'paps'=>$paps,
                'idpaps'=>$data->idpaps,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }


        public function update(Request $request)
        {
            // dd($request);
            $data = $this->model->findOrFail($request->id);
            //dd($request->plan_period);
            $data->update([
                'office_accountable'=>$request->office_accountable,
                'idpaps'=>$request->idpaps
            ]);

            return redirect('/OfficeAccountable/'.$request->idpaps)
                    ->with('message','Office/Individual Accountable updated');
        }

        public function destroy(Request $request){
            $data = $this->model->findOrFail($request->id);
            $id = $data->idpaps;
            $data->delete();
            //dd($request->raao_id);
            return redirect('/OfficeAccountable/'.$id)->with('warning', 'Office/Individual Accountable Deleted');

        }
}
