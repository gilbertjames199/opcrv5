<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\OfficeAipCode;
use Illuminate\Http\Request;

class OfficeAipCodeController extends Controller
{
    //
    public function edit(Request $request, $FFUNCCOD)
    {
        // dd($FFUNCCOD);
        $data = OfficeAipCode::where('department_code', $FFUNCCOD)->first();
        $office = Office::where('department_code', $FFUNCCOD)->first();
        // dd($data);
        if (!$data) {
            // dd('less than one');

            // dd($office->ffunccod);
            $data = new OfficeAipCode();
            $data->department_code = $FFUNCCOD;
            $data->FFUNCCOD = $office->ffunccod;
            $data->aip_code = '';
            $data->save();
            // dd($data);

        }
        // dd($data);
        return inertia('AnnualInvestmentPlan/OfficeAIPCode/Create', [
            "editData" => $data,
            "office" => $office
        ]);
    }

    public function update(Request $request)
    {
        // dd($request->FFUNCCOD);
        $data = OfficeAipCode::findOrFail($request->id);
        $data->aip_code = $request->aip_code;
        $data->save();
        $office = Office::where('FFUNCCOD', $request->FFUNCCOD)->first();

        return redirect('/logframe')->with('message', 'Successfully updated AIP code of ' . $office->office . '!');
    }
}
