<?php

namespace App\Http\Controllers;

use App\Models\ProgramAndProject;
use App\Models\RatingRemarks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RatingRemarksController extends Controller
{
        //
        protected $model;
        public function __construct(RatingRemarks $model)
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
            return inertia('RatingRemarks/Index',[
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
            return inertia('RatingRemarks/Create',[
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
                'rating_remarks' => 'required',
                'idpaps'=>'required',
            ]);

            //dd($attributes);
            $this->model->create($attributes);
            return redirect('/RatingRemarks/'.$id)
                    ->with('message','Rating Remarks added');
        }

        public function edit(Request $request, $id){
            $data = $this->model->where('id', $id)->first([
                'id',
                'rating_remarks',
                'idpaps'
            ]);
            $paps = ProgramAndProject::findOrFail($data->idpaps);
            return inertia('RatingRemarks/Create', [
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
                'rating_remarks'=>$request->rating_remarks,
                'idpaps'=>$request->idpaps
            ]);

            return redirect('/RatingRemarks/'.$request->idpaps)
                    ->with('message','Rating Remarks updated');
        }

        public function destroy(Request $request){
            $data = $this->model->findOrFail($request->id);
            $id = $data->idpaps;
            $data->delete();
            //dd($request->raao_id);
            return redirect('/RatingRemarks/'.$id)->with('warning', 'Rating Remarks Deleted');

        }
}
