<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\SharedProgramAndProject;
use Illuminate\Http\Request;

class SharedProgramAndProjectController extends Controller
{
    //
    public function getSharedPAPS(Request $request, $idpaps)
    {
        // dd($idpaps);
        return SharedProgramAndProject::with(
            [
                'origin_department',
                'destination_department',
                'origin_pghead',
                'destination_pghead',
                'added_by',
            ]
        )->where('idpaps', $idpaps)->get();
    }
    public function create(Request $request)
    {
        // dd($request);
        // dd(trim(auth()->user()->recid));
        $request->validate([
            'idpaps' => 'required',
            'origin_department_code' => 'required',
            'origin_pghead' => 'required',
            'destination_department_code' => 'required',
            'destination_pghead' => 'required',
        ]);
        $find = SharedProgramAndProject::where('idpaps', $request->idpaps)
            ->where('destination_department_code', $request->destination_department_code)
            ->where('origin_department_code', $request->origin_department_code)
            ->first();
        // $office = Office::where('department_code', $request->destination_department_code)->first();
        if ($find) {
            return redirect()->back()->with('error', 'This program is already shared with the selected destination department.');
        }
        $sharedProgramAndProject = new SharedProgramAndProject();
        $sharedProgramAndProject->idpaps = $request->idpaps;
        $sharedProgramAndProject->origin_department_code = $request->origin_department_code;
        $sharedProgramAndProject->origin_pghead = $request->origin_pghead;
        $sharedProgramAndProject->destination_department_code = $request->destination_department_code;
        $sharedProgramAndProject->destination_pghead = $request->destination_pghead;
        $sharedProgramAndProject->user_id = auth()->user()->recid;
        $sharedProgramAndProject->save();
        return redirect()->back()->with('success', 'Shared Program and Project created successfully.');
        // return SharedProgramAndProject::find($id);
    }
    public function destroy(Request $request, $id)
    {

        $msg = "Program/Project/Activity Successfully deleted!";
        $status = "deleted";
        $data = SharedProgramAndProject::findOrFail($id);
        $data->delete();

        //dd($request->raao_id);
        return redirect()->back()->with("success", "PAPS has been unshared successfully.");
    }


    
}
