<?php

namespace App\Http\Controllers;

use App\Models\ActivityProject;
use Illuminate\Http\Request;

class ActivityProjectController extends Controller
{
    public function createActivity(Request $request)
    {
        $found = ActivityProject::where('activity_id', $request->id)
            ->where('project_id', $request->idrevplan)
            ->first();
        // dd($request);
        // dd($found);
        if ($found) {
            if ($request->type == 'update') {
                $found->target_indicator = $request->target_indicator;
                $found->date_from = $request->date_from;
                $found->date_to = $request->date_to;
                $found->ps_q1 = $request->ps_q1;
                $found->ps_q2 = $request->ps_q2;
                $found->ps_q3 = $request->ps_q3;
                $found->ps_q4 = $request->ps_q4;
                $found->mooe_q1 = $request->mooe_q1;
                $found->mooe_q2 = $request->mooe_q2;
                $found->mooe_q3 = $request->mooe_q3;
                $found->mooe_q4 = $request->mooe_q4;
                $found->co_q1 = $request->co_q1;
                $found->co_q2 = $request->co_q2;
                $found->co_q3 = $request->co_q3;
                $found->co_q4 = $request->co_q4;
                $found->fe_q1 = $request->fe_q1;
                $found->fe_q2 = $request->fe_q2;
                $found->fe_q3 = $request->fe_q3;
                $found->fe_q4 = $request->fe_q4;
                $found->gad_issue = $request->gad_issue;
                $found->ccet_code = $request->ccet_code;
                $found->responsible = $request->responsible;
            }
            $found->is_active = '1';
            $found->save();
        } else {
            ActivityProject::create([
                'activity_id' => $request->id,
                'project_id' => $request->idrevplan
            ]);
        }


        return response()->json(['message' => 'Activity created successfully']);
    }

    public function deleteActivity(Request $request)
    {
        $found = ActivityProject::where('activity_id', $request->id)
            ->where('project_id', $request->idrevplan)
            ->first();
        if ($found) {
            $found->is_active = '0';
            $found->save();
        }
        return response()->json(['message' => 'Activity deleted successfully']);
    }
}
