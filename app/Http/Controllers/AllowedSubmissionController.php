<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AllowIppSubmissions;

class AllowedSubmissionController extends Controller
{
    /**
     * Update the allow_submission flag for a given record.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        if (auth()->user()->department_code !== '04') {
            // return response()->json(['success' => false, 'message' => 'Unauthorized. Only department 04 can update submission status.'], 403);
            return redirect()->back()->with('error', 'Unauthorized. Only department 04 can update submission status.');
        }

        $data = $request->validate([
            'allow_submission' => 'required|in:0,1',
        ]);

        $record = AllowIppSubmissions::find($id);
        if (! $record) {
            return response()->json(['success' => false, 'message' => 'Record not found.'], 404);
        }

        $record->allow_submission = (string) $data['allow_submission'];
        $record->save();

        // return response()->json(['success' => true, 'data' => $record]);
        return redirect()->back()->with('message', 'Submission status updated successfully.');
    }
}
