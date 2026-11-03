<?php

namespace App\Http\Controllers;

use App\Models\AIPIndividualApprover;
use App\Models\AnnualInvestmentPlanInstitutional;
use App\Models\UserEmployees;
use Illuminate\Http\Request;

class AIPIndividualApproverController extends Controller
{
    protected $aip_individual_approver;
    //
    public function __construct(AIPIndividualApprover $aip_individual_approver){
        $this->aip_individual_approver = $aip_individual_approver;
    }

    public function index(Request $request){
        if (!in_array(auth()->user()->recid, [681, 682, 683, 684, 685])) {
            return redirect()->back()->with('error', 'Access forbidden.');
        }
        $data = AIPIndividualApprover::with(['userEmployee.Office'])->paginate(15);

        // dd($data);
        return inertia('AIP/Approvers/Index',
        [
                "data" =>$data
            ]
        );
    }

    public function create(Request $request){
        $employees = UserEmployees::all();
        return inertia('AIP/Approvers/Create', [
            "employees"=>$employees
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'employee_code' => ['required', 'string'],
            'name' => ['required', 'string'],
            'position' => ['required', 'string'],
            'type' => ['required', 'string'],
            'year' => ['required', 'string'],
        ]);
        $annualInvestmentPlanInstitutional = AnnualInvestmentPlanInstitutional::firstOrCreate(
            ['year_period' => $request->year],
            [
                'ldc_approved' => "-1",
                'sp_approved' => "-1",
                'sip_period' => 0,
            ]
        );
        $data = $request->only([
            'employee_code',
            'name',
            'position',
            'type',
            'year',
            'with_signature',
        ]);
        $data['is_present'] = 1;
        $data['with_signature'] = 1;
        $data['aip_institutional_id'] = $annualInvestmentPlanInstitutional->id;

        $this->aip_individual_approver->create($validated + $data);

        return redirect('/aip/approvers')->with('success', 'Approver saved successfully.');
    }

    public function edit(Request $request, $id){
        $employees = UserEmployees::all();
        $editData = AIPIndividualApprover::where('id', $id)->first();
        return inertia('AIP/Approvers/Create', [
            "employees"=>$employees,
            "editData"=>$editData
        ]);
    }

    public function destroy(Request $request, $id){
        // dd($id);
        $aip_app = AIPIndividualApprover::where('id', $id)->first();
        $aip_app->delete();
        return redirect()->back()->with('message','Successfully deleted');
    }

    public function update(Request $request){
        // dd($request);
        $validated = $request->validate([
            'employee_code' => ['required', 'string'],
            'name' => ['required', 'string'],
            'position' => ['required', 'string'],
            'type' => ['required', 'string'],
            'year' => ['required', 'string'],
        ]);

        $annualInvestmentPlanInstitutional = AnnualInvestmentPlanInstitutional::firstOrCreate(
            ['year_period' => $request->year],
            [
                'ldc_approved' => "-1",
                'sp_approved' => "-1",
                'sip_period' => 0,
            ]
        );
        $approver = AIPIndividualApprover::where('id', $request->id)->first();
        $approver->name = $request->name;
        $approver->employee_code = $request->employee_code;
        $approver->position = $request->position;
        $approver->type = $request->type;
        $approver->year = $request->year;
        $approver->aip_institutional_id = $annualInvestmentPlanInstitutional->id;
        $approver->save();

        return redirect('/aip/approvers')->with('success', 'Approver ('.$request->name.' updated successfully.');
    }

}
