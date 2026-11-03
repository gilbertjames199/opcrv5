<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlan;
use App\Models\Signatory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SignatoryController extends Controller
{
    protected $model;
    //
    public function __construct(Signatory $model)
    {
       $this->model = $model;
    }

       //
       public function index(Request $request, $revid){
        $revs = RevisionPlan::findOrFail($revid);
        if($revs->status>-1){
                $status_words = [
                    '0'=>'submitted',
                    '1'=>'reviewed',
                    '2'=>'locked'
                ];
                return redirect()->back()->with('error', 'Cannot access signatories module. The selected project profile is already '.$status_words[$revs->status].'.');
            }
        $data = $this->model
                    ->where('revision_plan_id', $revid)
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('Signatories/Index',[
            "data"=>$data,
            "revid"=>$revid,
            "revs"=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request, $revid){
        //dd('create');
        $revs = RevisionPlan::findOrFail($revid);
         if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access signatories module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        return inertia('Signatories/Create',[
            'revs'=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        //dd($request);
        $id = $request->revision_plan_id;
        $attributes = $request->validate([
            'name' => 'required',
            'position' => 'required',
            'acted' => 'required',
            'revision_plan_id'=>'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Signatories/'.$id)
                ->with('message','Signatories added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'name',
            'position',
            'acted',
            'revision_plan_id'
        ]);
        $revs = RevisionPlan::findOrFail($data->revision_plan_id);
        if($revs->status>-1){
            $status_words = [
                '0'=>'submitted',
                '1'=>'reviewed',
                '2'=>'locked'
            ];
            return redirect()->back()->with('error', 'Cannot access signatories module. The selected project profile is already '.$status_words[$revs->status].'.');
        }
        return inertia('Signatories/Create', [
            "editData" => $data,
            'revs'=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        // dd('update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'name'=>$request->name,
            'position'=>$request->position,
            'acted'=>$request->acted,
            'revision_plan_id'=>$request->revision_plan_id
        ]);

        return redirect('/Signatories/'.$request->revision_plan_id)
                ->with('message','Signatories updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $id = $data->revision_plan_id;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/Signatories/'.$id)->with('warning', 'Signatories Deleted');

    }

    public function save_multiple(Request $request){
        $signatories = $request->input('signatories', []);
        $revision_plan_id = $request->input('revision_plan_id');

        foreach ($signatories as $data) {
            Signatory::create([
                'name'              => $data['name'] ?? null,
                'position'          => $data['position'] ?? null,
                'acted'             => $data['acted'] ?? null,
                'sequence'          => $data['sequence'] ?? null,
                'revision_plan_id'  => $revision_plan_id,
            ]);
        }

        return response()->json(['status' => 'success']);
    }

    public function getSignatories(Request $request)
    {
        $empty = [];

        $data = Signatory::where('revision_plan_id', $request->revision_plan_id)->get();

        if ($data->isEmpty()) {
            return $empty;
        }

        return $data;
    }


}
