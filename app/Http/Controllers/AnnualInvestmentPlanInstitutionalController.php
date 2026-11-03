<?php

namespace App\Http\Controllers;

use App\Models\AIPIndividualApprover;
use App\Models\AnnualInvestmentInstitutionalTracking;
use App\Models\AnnualInvestmentPlanInstitutional;
use Illuminate\Http\Request;

class AnnualInvestmentPlanInstitutionalController extends Controller
{
    protected $aip_institutional;
    public function __construct(AnnualInvestmentPlanInstitutional $aip_institutional)
    {
        $this->aip_institutional = $aip_institutional;
    }
    public function index(Request $request)
    {
        // where('ldc_approved', 0)->orWhere('sp_approved', 0)->get
        // dd(AIPIndividualApprover::all());
        // $aip_individuals = AIPIndividualApprover::with([''])->get();
        $AllAIP = AnnualInvestmentPlanInstitutional::with(['aipIndividualApprovers'])
        ->where('ldc_approved', 0)
        ->orWhere('sp_approved', 0)
        ->get()->map(function($item) {
            return [
                'id' => $item->id,
                'sprn'=>$item->sprn,
                'last_page_number'=>$item->last_page_number,
                'year_period' => $item->year_period,
                'ldc_approved' => $item->ldc_approved,
                'sp_approved' => $item->sp_approved,
                'sip_period' => $item->sip_period,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'aip_individuals'=>$item->aipIndividualApprovers,
                'accordion_visible' => 0,
            ];
        });
        // dd($AllAIP);
        return inertia("AnnualInvestmentPlan/Institutional/Index", [
            "data" => $AllAIP
        ]);
    }
    public function updateInstitutionalAIPStatus(Request $request, $type)
    {
        // dd("AIP");
        // 1️⃣ Validate input
        // dd($request->year_period);
        $request->validate([
            'year_period' => 'required',
        ]);

        $yearPeriod = $request->year_period;
        // dd($yearPeriod);
        $userId = auth()->user()->recid;

        // 2️⃣ Find or create the AIP row
        $aip = AnnualInvestmentPlanInstitutional::firstOrCreate(
            ['year_period' => $yearPeriod],
            [
                'ldc_approved' => "-1",
                'sp_approved' => "-1",
                'sip_period' => 0,
            ]
        );

        // 3️⃣ Update status based on $type
        switch ($type) {
            // LDC actions
            case 'LDC0': // Submitted for LDC review
                $aip->ldc_approved = 0;
                break;
            case 'LDC-2': // Returned by LDC
                $aip->ldc_approved = -2;
                break;
            case 'LDC1': // Approved by LDC
                $aip->ldc_approved = 1;
                break;

            // SP actions
            case 'SP0': // Submitted for SP review
                $aip->sp_approved = 0;
                break;
            case 'SP-2': // Returned by SP
                $aip->sp_approved = -2;
                break;
            case 'SP1': // Approved by SP
                $aip->sp_approved = 1;
                break;

            default:
                return back()->with('error', 'Invalid type specified.');
        }

        $aip->updated_at = now();
        $aip->save();

        // 4️⃣ Log the action in the tracking table
        AnnualInvestmentInstitutionalTracking::create([
            'aip_id' => $aip->id,
            'user' => $userId,
            'type' => $type,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->back()->with('message', 'AIP status updated successfully.');
    }

    public function updateTableValue2(Request $request, $column)
    {
        $validated = $request->validate([
            'id' => 'required|integer|exists:annual_investment_plan_institutionals,id',
            'value' => 'nullable|string',
            'table'=> 'required'
        ]);

        $allowedFields = ['sprn', 'last_page_number','seq_no'];
        if (!in_array($column, $allowedFields)) {
            return response()->json(['error' => 'Invalid field specified.'], 422);
        }

        $aip = AnnualInvestmentPlanInstitutional::find($validated['id']);
        // dd($aip, $validated['id']);
        if (!$aip) {
            return response()->json(['error' => 'Record not found.'], 404);
        }

        $aip->{$column} = $validated['value'];
        $aip->updated_at = now();
        $aip->save();

        // return response()->json(['success' => true, 'field' => $table_name, 'value' => $validated['value']]);
        return redirect()->back()->with('success', 'Field updated successfully.');
    }
    public function updateTableValue(Request $request, $column){
        $validated = $request->validate([
            'id'    => 'required|integer',
            'value' => 'nullable',
            'table' => 'required|string',
        ]);
        $allowedFields = ['sprn', 'last_page_number', 'seq_num','is_present'];

        if (!in_array($column, $allowedFields)) {
            // return response()->json(['error' => 'Invalid field specified.'], 422);
            return redirect()->back()->with('error', 'Invalid field specified.');
        }

        $modelMap = [
            'annual_investment_plan_institutionals' => AnnualInvestmentPlanInstitutional::class,
            'aip_individual_approvers'      => AIPIndividualApprover::class,
            // 'annual_investment_plan_projects'       => AnnualInvestmentPlanProject::class,
        ];

        if (!isset($modelMap[$validated['table']])) {
            // return response()->json(['error' => 'Invalid table specified.'], 422);
            return redirect()->back()->with('error', 'Invalid table specified.');
        }

        $modelClass = $modelMap[$validated['table']];

        $record = $modelClass::find($validated['id']);

        if (!$record) {
            // return response()->json(['error' => 'Record not found.'], 404);
            return redirect()->back()->with('error', 'Record not found.');
        }

        $record->{$column} = $validated['value'];
        $record->updated_at = now();
        $record->save();
            // ->with('message', 'Field updated successfully.')
        return redirect()->back();
    }
}
