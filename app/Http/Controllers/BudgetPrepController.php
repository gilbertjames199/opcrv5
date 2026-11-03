<?php

namespace App\Http\Controllers;

use App\Models\BudgetPrep;
use Illuminate\Http\Request;

class BudgetPrepController extends Controller
{
    //
    public function store(Request $request)
    {
        // dd($request);
        // Validate the request data
        $request->validate([
            'idooe' => 'required',
            'particulars' => 'required',
            'account_code' => 'required',
            'amount' => 'required',
            'category' => 'required',
            'source' => 'required',
            'revision_plan_id' => 'required',
            'category_gad' => 'required',
        ]);

        // Create a new BudgetPrep instance and fill it with the request data
        $budgetPrep = new BudgetPrep();
        $budgetPrep->idooe = $request->input('idooe');
        $budgetPrep->particulars = $request->input('particulars');
        $budgetPrep->account_code = $request->input('account_code');
        $budgetPrep->amount = $request->input('amount');
        $budgetPrep->category = $request->input('category');
        $budgetPrep->source = $request->input('source');
        $budgetPrep->revision_plan_id = $request->input('revision_plan_id');
        $budgetPrep->category_gad = $request->input('category_gad');
        $budgetPrep->save();

        // return response()->json(['message' => 'Budget Prep created successfully', 'data' => $budgetPrep], 201);
        return redirect()->back()->with('message', 'Budget Prep created successfully');
    }
    public function fetch_data($id)
    {
        // Fetch the BudgetPrep data by ID
        $budgetPrep = BudgetPrep::findOrFail($id);

        // Return the data as a JSON response
        return $budgetPrep;
    }
    public function update(Request $request)
    {
        // Validate the request data
        $request->validate([
            'idooe' => 'required',
            'particulars' => 'required',
            'account_code' => 'required',
            'amount' => 'required',
            'category' => 'required',
            'source' => 'required',
            'revision_plan_id' => 'required',
            'category_gad' => 'required',
        ]);

        // Find the BudgetPrep instance by ID
        $budgetPrep = BudgetPrep::findOrFail($request->id);

        // Update the instance with the request data
        $budgetPrep->idooe = $request->input('idooe');
        $budgetPrep->particulars = $request->input('particulars');
        $budgetPrep->account_code = $request->input('account_code');
        $budgetPrep->amount = $request->input('amount');
        $budgetPrep->category = $request->input('category');
        $budgetPrep->source = $request->input('source');
        $budgetPrep->revision_plan_id = $request->input('revision_plan_id');
        $budgetPrep->category_gad = $request->input('category_gad');
        $budgetPrep->save();

        // return response()->json(['message' => 'Budget Prep updated successfully', 'data' => $budgetPrep], 200);
        return redirect()->back()->with('message', 'Budget Prep updated successfully');
    }
    public function destroy($id)
    {
        // Find the BudgetPrep instance by ID
        $budgetPrep = BudgetPrep::findOrFail($id);

        // Delete the instance
        $budgetPrep->delete();

        // return response()->json(['message' => 'Budget Prep deleted successfully'], 200);
        return redirect()->back()->with('message', 'Budget Prep deleted successfully');
    }
}
