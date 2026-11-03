<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityProject;
use App\Models\Strategy;
use App\Models\StrategyProject;
use App\Models\StrategyActivityRequest;
use App\Models\StrategyActivityRequestFile;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class StrategyActivityRequestController extends Controller
{
    public function index(Request $request){
        // >whereHas('strategy', function ($query) use ($searchItem) {
        //                 $query->where('description', 'like', '%' . $searchItem . '%');
        //             })->orWhereHas('strategy.activity', function ($query) use ($searchItem) {
        //                 $query->where('description', 'like', '%' . $searchItem . '%');
        //             })-
        $strategy_return_request = StrategyActivityRequest::with(['strategy',
                'strategy.strategyProject',
                'strategy.activity',
                'strategy.activity.activityProject',
                'files',
                'revisionPlan'
            ])
                ->when($request->search, function ($query, $searchItem) {
                    $query->WhereHas('revisionPlan', function ($query) use ($searchItem) {
                        $query->where('project_title', 'like', '%' . $searchItem . '%');
                    });
                })
                ->where('status','0')
                // ->where('revision_plan_id', $revision_plan_id)
                ->paginate(10);

        // dd($strategy_return_request);
        return inertia('Review-Approve/StrategyActivityRequests/Index', [
            'filters' => $request->only(['search']),
            'data' => $strategy_return_request,
        ]);
        // $strategy_return_request;
    }
    public function store(Request $request)
    {
        $strategyRows = json_decode($request->input('strategy_request_array', '[]'), true) ?: [];
        $revisionPlanId = $request->input('revision_plan_id');
        $programAndProjectId = $request->input('program_and_project_id');
        $createdBy = auth()->user()->recid;
        $idpaps = $request->input('idpaps');
        $revisionPlanId = $request->input('revision_plan_id');

        $revision_plan =RevisionPlan::with(['paps'])->where('id', $revisionPlanId)->first();
        $request->validate([
            'strategy_request_uploads' => ['array', 'max:2'],
            'strategy_request_uploads.*' => ['file', 'mimes:pdf,doc,docx,jpg,jpeg,png,gif,webp', 'max:1024'],
        ]);

        $uploads = $request->file('strategy_request_uploads', []);
        // dd($uploads);
        if (array_sum(array_map(fn ($file) => $file->getSize(), $uploads)) > 1024 * 1024) {
            return back()->withErrors(['strategy_request_uploads' => 'The total file size must not exceed 1 MB.']);
        }

        $requestRecord = StrategyActivityRequest::create([
            'status' => '-1',
            'program_and_project_id' => $programAndProjectId,
            'revision_plan_id' => $revisionPlanId,
            'created_by' => $createdBy,
        ]);
        // dd(
        //     $strategyRows,
        //     $revisionPlanId,
        //     $programAndProjectId,

        //     $createdBy,
        //     $idpaps
        // );

        if ($uploads) {
            $projectTitle = Str::slug((string) ($revision_plan->paps->paps_desc ?? 'strategy-request')) ?: 'strategy-request';
            $directory = 'public/images/' . $projectTitle . '/' . ($revision_plan->year_period ?? date('Y')) . '/' . Str::random(5);
            File::ensureDirectoryExists(base_path($directory));

            foreach ($uploads as $upload) {
                $fileName = basename($upload->getClientOriginalName());
                $fileType = $upload->getClientMimeType();
                $fileSize = $upload->getSize();
                $upload->move(base_path($directory), $fileName);

                StrategyActivityRequestFile::create([
                    'strategy_activity_request_id' => $requestRecord->id,
                    'file_name' => $fileName,
                    'file_path' => $directory,
                    'file_type' => $fileType,
                    'file_size' => $fileSize,
                    'uploaded_by' => $createdBy,
                ]);
            }
        }

        $this->saveActual(
            $strategyRows,
            $revisionPlanId,
            $programAndProjectId,
            $createdBy,
            $idpaps,
            $revision_plan,
            $requestRecord
        );

        // activities: id,description,strategy_id,status,strategy_activity_request_id,created_at,updated_at,deleted_at
        // activity_projects: id,activity_id,project_id,seq_no,aip_code,target_indicator,date_from,date_to,ps_q1,ps_q2,ps_q3,
        //                  ps_q4,mooe_q1,mooe_q2,mooe_q3,mooe_q4,co_q1,co_q2,co_q3,co_q4,fe_q1,fe_q2,fe_q3,fe_q4,gad_issue,
        //                  ccet_code,responsible,is_active,created_at,updated_at

        // strategies: id,description,idpaps,idmfo,FFUNCCOD,year_period,status,strategy_activity_request_id,
        //          created_at,updated_at,deleted_at
        // strategy_projects: id,strategy_id,project_id,seq_no,target_indicator,date_from,date_to,ps_q1,ps_q2,ps_q3,ps_q4,
        //            mooe_q1,mooe_q2,mooe_q3,mooe_q4,co_q1,co_q2,co_q3,co_q4,fe_q1,fe_q2,fe_q3,fe_q4,gad_issue,ccet_code,
        //              responsible,is_active,created_at,updated_at



        return back()->with('success', 'Strategy and activity request saved successfully.');
    }

    public function saveActual($strategyRows,
        $revisionPlanId,
        $programAndProjectId,
        $createdBy,
        $idpaps,
        $revision_plan,
        $requestRecord){
        DB::transaction(function () use (
            $strategyRows,
            $revisionPlanId,
            $programAndProjectId,
            $createdBy,
            $idpaps,
            $revision_plan,
            $requestRecord
        ) {

            foreach ($strategyRows as $strategyRow) {

                /*
                |--------------------------------------------------------------------------
                | 1. CREATE STRATEGY
                |--------------------------------------------------------------------------
                */

                $strategy = Strategy::create([
                    'description' => $strategyRow['description'] ?? null,
                    'idpaps' => $idpaps,
                    'idmfo' => $revision_plan->paps->idmfo ?? null,
                    'FFUNCCOD' => $revision_plan->paps->FFUNCCOD ?? null,
                    'year_period' => $revision_plan->year_period ?? null,
                    'status' => "-1",
                    'strategy_activity_request_id' => $requestRecord->id,
                ]);

                // dd('request record',$requestRecord, $strategy);
                /*
                |--------------------------------------------------------------------------
                | 2. CREATE STRATEGY PROJECT
                |--------------------------------------------------------------------------
                */

                StrategyProject::create([
                    'strategy_id' => $strategy->id,
                    'project_id' => $revision_plan->id,
                    'seq_no' => 0,
                    'target_indicator' => null,
                    'date_from' => null,
                    'date_to' => null,

                    'ps_q1' => 0,
                    'ps_q2' => 0,
                    'ps_q3' => 0,
                    'ps_q4' => 0,

                    'mooe_q1' => 0,
                    'mooe_q2' => 0,
                    'mooe_q3' => 0,
                    'mooe_q4' => 0,

                    'co_q1' => 0,
                    'co_q2' => 0,
                    'co_q3' => 0,
                    'co_q4' => 0,

                    'fe_q1' => 0,
                    'fe_q2' => 0,
                    'fe_q3' => 0,
                    'fe_q4' => 0,

                    'gad_issue' => null,
                    'ccet_code' => null,
                    'responsible' => null,
                    'is_active' => 1,

                ]);


                /*
                |--------------------------------------------------------------------------
                | 3. CREATE ACTIVITIES
                |--------------------------------------------------------------------------
                */

                foreach ($strategyRow['activities'] ?? [] as $activityRow) {

                    $activity = Activity::create([
                        'description' => $activityRow['description'] ?? null,
                        'strategy_id' => $strategy->id,
                        'status' => "-1",
                        'strategy_activity_request_id' => $requestRecord->id,
                    ]);


                    /*
                    |--------------------------------------------------------------------------
                    | 4. CREATE ACTIVITY PROJECT
                    |--------------------------------------------------------------------------
                    */

                    ActivityProject::create([
                        'activity_id' => $activity->id,
                        'project_id' => $revision_plan->id,
                        'seq_no' => 0,

                        'target_indicator' => null,

                        'date_from' => $activityRow['date_from'] ?? null,
                        'date_to' => $activityRow['date_to'] ?? null,

                        'ps_q1' => $activityRow['ps_q1'] ?? 0,
                        'ps_q2' => $activityRow['ps_q2'] ?? 0,
                        'ps_q3' => $activityRow['ps_q3'] ?? 0,
                        'ps_q4' => $activityRow['ps_q4'] ?? 0,

                        'mooe_q1' => $activityRow['mooe_q1'] ?? 0,
                        'mooe_q2' => $activityRow['mooe_q2'] ?? 0,
                        'mooe_q3' => $activityRow['mooe_q3'] ?? 0,
                        'mooe_q4' => $activityRow['mooe_q4'] ?? 0,

                        'co_q1' => $activityRow['co_q1'] ?? 0,
                        'co_q2' => $activityRow['co_q2'] ?? 0,
                        'co_q3' => $activityRow['co_q3'] ?? 0,
                        'co_q4' => $activityRow['co_q4'] ?? 0,

                        'fe_q1' => $activityRow['fe_q1'] ?? 0,
                        'fe_q2' => $activityRow['fe_q2'] ?? 0,
                        'fe_q3' => $activityRow['fe_q3'] ?? 0,
                        'fe_q4' => $activityRow['fe_q4'] ?? 0,

                        'gad_issue' => $activityRow['gad_issue'] ?? null,
                        'ccet_code' => $activityRow['ccet_code'] ?? null,
                        'responsible' => $activityRow['responsible'] ?? null,

                        'is_active' => 1,
                    ]);
                }
            }
        });
    }

    public function updateField(Request $request)
    {
        $id = $request->input('id');
        $tableName = $request->input('table_name');
        $columnName = $request->input('column_name');
        $newValue = $request->input('new_value');

        if (!$id || !$tableName || !$columnName) {
            return response()->json(['success' => false, 'message' => 'Missing required update parameters.'], 422);
        }

        $modelMap = [
            'strategy_activity_request' => StrategyActivityRequest::class,
            'strategy_activity_requests' => StrategyActivityRequest::class,
            'strategies' => Strategy::class,
            'activities' => Activity::class,
            'strategy_projects' => StrategyProject::class,
            'activity_projects' => ActivityProject::class,
        ];

        $modelClass = $modelMap[$tableName] ?? null;

        if (!$modelClass) {
            return response()->json(['success' => false, 'message' => 'Invalid table specified.'], 422);
        }

        $record = DB::transaction(function () use ($modelClass, $tableName, $columnName, $id, $newValue) {
            $record = $modelClass::findOrFail($id);
            $record->{$columnName} = $newValue === 'null' ? null : $newValue;
            $record->save();

            if ($tableName === 'strategy_activity_requests' && $columnName === 'status') {
                $strategyIds = Strategy::where('strategy_activity_request_id', $record->id)->pluck('id');
                Strategy::whereIn('id', $strategyIds)->update(['status' => $record->status]);
                Activity::whereIn('strategy_id', $strategyIds)->update(['status' => $record->status]);
            }

            return $record;
        });

        return response()->json([
            'success' => true,
            'record' => $record,
        ]);
    }
    public function updateFieldApproveReturn(Request $request)
    {
        $id = $request->input('params.id');
        $tableName = $request->input('params.table_name');
        $columnName = $request->input('params.column_name');
        $newValue = $request->input('params.new_value');
        // dd($request, $id, $tableName, $columnName, $newValue);
        if (!$id || !$tableName || !$columnName) {
            return response()->json(['success' => false, 'message' => 'Missing required update parameters.'], 422);
        }

        $modelMap = [
            'strategy_activity_request' => StrategyActivityRequest::class,
            'strategy_activity_requests' => StrategyActivityRequest::class,
            'strategies' => Strategy::class,
            'activities' => Activity::class,
            'strategy_projects' => StrategyProject::class,
            'activity_projects' => ActivityProject::class,
        ];

        $modelClass = $modelMap[$tableName] ?? null;

        if (!$modelClass) {
            return response()->json(['success' => false, 'message' => 'Invalid table specified.'], 422);
        }

        $record = DB::transaction(function () use ($modelClass, $tableName, $columnName, $id, $newValue) {
            $record = $modelClass::findOrFail($id);
            $record->{$columnName} = $newValue === 'null' ? null : $newValue;
            $record->save();
            // dd($tableName, $columnName, $record);
            if ($tableName === 'strategy_activity_requests' && $columnName === 'status') {
                $strategyIds = Strategy::where('strategy_activity_request_id', $record->id)->pluck('id');
                // dd($strategyIds, $record, Strategy::whereIn('id', $strategyIds)->get(), Activity::whereIn('strategy_id', $strategyIds)->get());
                Strategy::whereIn('id', $strategyIds)->update(['status' => $record->status]);
                Activity::whereIn('strategy_id', $strategyIds)->update(['status' => $record->status]);
            }

            return $record;
        });

        return redirect()->back()->with('success', 'Status updated successfully.');
    }
    public function storeStrategy(Request $request)
    {
        $validated = $request->validate([
            'description' => ['required', 'string'],
            'strategy_activity_request_id' => ['required', 'integer', 'exists:strategy_activity_requests,id'],
            'project_id' => ['required', 'integer', 'exists:revision_plans,id'],
            'idpaps' => ['nullable', 'integer'],
            'idmfo' => ['nullable', 'integer'],
            'FFUNCCOD' => ['nullable', 'string'],
            'year_period' => ['nullable', 'integer'],
        ]);

        $revisionPlan = RevisionPlan::with('paps')->findOrFail($validated['project_id']);
        $strategyActivityRequest = StrategyActivityRequest::whereKey($validated['strategy_activity_request_id'])
            ->where('revision_plan_id', $revisionPlan->id)
            ->firstOrFail();

        $strategy = Strategy::create([
            'description' => $validated['description'],
            'idpaps' => $validated['idpaps'] ?? ($revisionPlan->paps->id ?? null),
            'idmfo' => $validated['idmfo'] ?? ($revisionPlan->paps->idmfo ?? null),
            'FFUNCCOD' => $validated['FFUNCCOD'] ?? ($revisionPlan->paps->FFUNCCOD ?? null),
            'year_period' => $validated['year_period'] ?? ($revisionPlan->year_period ?? null),
            'status' => '-1',
            'strategy_activity_request_id' => $strategyActivityRequest->id,
        ]);

        StrategyProject::create([
            'strategy_id' => $strategy->id,
            'project_id' => $revisionPlan->id,
            'seq_no' => 0,
            'target_indicator' => null,
            'date_from' => null,
            'date_to' => null,
            'ps_q1' => 0,
            'ps_q2' => 0,
            'ps_q3' => 0,
            'ps_q4' => 0,
            'mooe_q1' => 0,
            'mooe_q2' => 0,
            'mooe_q3' => 0,
            'mooe_q4' => 0,
            'co_q1' => 0,
            'co_q2' => 0,
            'co_q3' => 0,
            'co_q4' => 0,
            'fe_q1' => 0,
            'fe_q2' => 0,
            'fe_q3' => 0,
            'fe_q4' => 0,
            'gad_issue' => null,
            'ccet_code' => null,
            'responsible' => null,
            'is_active' => 1,
        ]);

        return response()->json([
            'success' => true,
            'strategy' => $strategy,
        ]);
    }

    public function storeActivity(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'strategy_id' => ['required', 'integer', 'exists:strategies,id'],
            'description' => ['required', 'string'],
            'project_id' => ['required', 'integer', 'exists:revision_plans,id'],
            'date_from' => ['nullable', 'date'],
            'date_to' => ['nullable', 'date'],
            'gad_issue' => ['nullable', 'string'],
            'ccet_code' => ['nullable', 'string'],
            'responsible' => ['nullable', 'string'],
            'ps_q1' => ['nullable', 'numeric'],
            'ps_q2' => ['nullable', 'numeric'],
            'ps_q3' => ['nullable', 'numeric'],
            'ps_q4' => ['nullable', 'numeric'],
            'mooe_q1' => ['nullable', 'numeric'],
            'mooe_q2' => ['nullable', 'numeric'],
            'mooe_q3' => ['nullable', 'numeric'],
            'mooe_q4' => ['nullable', 'numeric'],
            'co_q1' => ['nullable', 'numeric'],
            'co_q2' => ['nullable', 'numeric'],
            'co_q3' => ['nullable', 'numeric'],
            'co_q4' => ['nullable', 'numeric'],
            'fe_q1' => ['nullable', 'numeric'],
            'fe_q2' => ['nullable', 'numeric'],
            'fe_q3' => ['nullable', 'numeric'],
            'fe_q4' => ['nullable', 'numeric'],
        ]);
        // dd($request->all(), $validated['strategy_id'], $validated['description'], $validated['project_id']);
        $activity = Activity::create([
            'description' => $validated['description'],
            'strategy_id' => $validated['strategy_id'],
            'status' => '-1',
            'strategy_activity_request_id' => null,
        ]);

        ActivityProject::create([
            'activity_id' => $activity->id,
            'project_id' => $validated['project_id'],
            'seq_no' => 0,
            'target_indicator' => null,
            'date_from' => $validated['date_from'] ?? null,
            'date_to' => $validated['date_to'] ?? null,
            'ps_q1' => $validated['ps_q1'] ?? 0,
            'ps_q2' => $validated['ps_q2'] ?? 0,
            'ps_q3' => $validated['ps_q3'] ?? 0,
            'ps_q4' => $validated['ps_q4'] ?? 0,
            'mooe_q1' => $validated['mooe_q1'] ?? 0,
            'mooe_q2' => $validated['mooe_q2'] ?? 0,
            'mooe_q3' => $validated['mooe_q3'] ?? 0,
            'mooe_q4' => $validated['mooe_q4'] ?? 0,
            'co_q1' => $validated['co_q1'] ?? 0,
            'co_q2' => $validated['co_q2'] ?? 0,
            'co_q3' => $validated['co_q3'] ?? 0,
            'co_q4' => $validated['co_q4'] ?? 0,
            'fe_q1' => $validated['fe_q1'] ?? 0,
            'fe_q2' => $validated['fe_q2'] ?? 0,
            'fe_q3' => $validated['fe_q3'] ?? 0,
            'fe_q4' => $validated['fe_q4'] ?? 0,
            'gad_issue' => $validated['gad_issue'] ?? null,
            'ccet_code' => $validated['ccet_code'] ?? null,
            'responsible' => $validated['responsible'] ?? null,
            'is_active' => 1,
        ]);

        return response()->json([
            'success' => true,
            'activity' => $activity,
        ]);
    }

    public function storeRequestFile(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'strategy_activity_request_id' => ['required', 'integer', 'exists:strategy_activity_requests,id'],
            'file' => ['required', 'file', 'mimes:pdf,doc,docx,jpg,jpeg,png,gif,webp', 'max:1024'],
        ]);

        $requestRecord = StrategyActivityRequest::findOrFail($validated['strategy_activity_request_id']);
        $revisionPlan = RevisionPlan::with('paps')->findOrFail($requestRecord->revision_plan_id);
        $upload = $request->file('file');
        $projectTitle = Str::slug((string) ($revisionPlan->paps->paps_desc ?? 'strategy-request')) ?: 'strategy-request';
        $directory = 'public/images/' . $projectTitle . '/' . ($revisionPlan->year_period ?? date('Y')) . '/' . Str::random(5);

        File::ensureDirectoryExists(base_path($directory));
        $fileName = basename($upload->getClientOriginalName());
        $fileSize = $upload->getSize();
        $fileType = $upload->getClientMimeType();
        $upload->move(base_path($directory), $fileName);

        $fileRecord = StrategyActivityRequestFile::create([
            'strategy_activity_request_id' => $requestRecord->id,
            'file_name' => $fileName,
            'file_path' => $directory,
            'file_type' => $fileType,
            'file_size' => $fileSize,
            'uploaded_by' => auth()->user()->recid,
        ]);

        return response()->json([
            'success' => true,
            'file' => $fileRecord,
        ]);
    }

    public function deleteRequestFile($id)
    {
        $fileRecord = StrategyActivityRequestFile::findOrFail($id);
        $directory = trim(str_replace('\\', '/', (string) $fileRecord->file_path), '/');

        if (strpos($directory, 'public/images/') !== 0) {
            return response()->json(['success' => false, 'message' => 'Invalid file path.'], 422);
        }

        $relativeDirectory = substr($directory, strlen('public/'));
        $filePath = public_path($relativeDirectory . '/' . basename((string) $fileRecord->file_name));
        $resolvedImagesPath = realpath(public_path('images'));
        $resolvedFilePath = realpath($filePath);

        if ($resolvedFilePath && (!$resolvedImagesPath || strpos(
            strtolower($resolvedFilePath),
            strtolower($resolvedImagesPath . DIRECTORY_SEPARATOR)
        ) !== 0)) {
            return response()->json(['success' => false, 'message' => 'Invalid file path.'], 422);
        }

        return DB::transaction(function () use ($fileRecord, $resolvedFilePath) {
            if ($resolvedFilePath && File::exists($resolvedFilePath) && !File::delete($resolvedFilePath)) {
                return response()->json(['success' => false, 'message' => 'The file could not be deleted from storage.'], 500);
            }

            $fileRecord->delete();

            return response()->json(['success' => true]);
        });
    }

    public function deleteRecord($id, $tableName)
    {
        $modelMap = [
            'strategies' => Strategy::class,
            'activities' => Activity::class,
            'strategy_projects' => StrategyProject::class,
            'activity_projects' => ActivityProject::class,
        ];

        $modelClass = $modelMap[$tableName] ?? null;

        if (!$modelClass) {
            return response()->json(['success' => false, 'message' => 'Invalid table specified.'], 422);
        }

        return DB::transaction(function () use ($id, $tableName, $modelClass) {
            if ($tableName === 'strategies') {
                $strategy = Strategy::with(['activity.activityProject', 'strategyProject'])->findOrFail($id);

                foreach ($strategy->activity as $activity) {
                    foreach ($activity->activityProject as $activityProject) {
                        $activityProject->delete();
                    }
                    $activity->delete();
                }

                foreach ($strategy->strategyProject as $strategyProject) {
                    $strategyProject->delete();
                }

                $strategy->delete();
            }

            if ($tableName === 'activities') {
                $activity = Activity::with('activityProject')->findOrFail($id);

                foreach ($activity->activityProject as $activityProject) {
                    $activityProject->delete();
                }

                $activity->delete();
            }

            if ($tableName === 'strategy_projects') {
                $modelClass::findOrFail($id)->delete();
            }

            if ($tableName === 'activity_projects') {
                $modelClass::findOrFail($id)->delete();
            }

            return response()->json(['success' => true]);
        });
    }
}
