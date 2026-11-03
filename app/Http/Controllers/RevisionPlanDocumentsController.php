<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlan;
use App\Models\RevisionPlanComment;
use App\Models\RevisionPlanDocuments;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class RevisionPlanDocumentsController extends Controller
{
    protected $rev_docs;

    public function __construct(RevisionPlanComment $rev_docs){
        $this->rev_docs=$rev_docs;
    }

    public function get_docs(Request $request, $id){
        // dd('get docs');
        return RevisionPlanDocuments::where('revision_plan_id', $id)->get();
    }

    public function destroyMultiple(Request $request)
    {
        // dd($request->file_ids, auth()->user()->recid);
        $disk = app()->environment('production') ? 'custom_uploads' : 'public';
        $request->validate([
            'file_ids' => 'required|array',
            // 'file_ids.*' => 'integer|exists:means_of_verifications,id',
        ]);

        $files = RevisionPlanDocuments::whereIn('id', $request->file_ids)
            ->where('user_id', auth()->user()->recid)
            ->get();

        foreach ($files as $file) {
            // Delete file from storage
            Storage::disk($disk)->delete($file->filepath);

            // Delete DB record
            $file->delete();
        }

        // return response()->json(['message' => 'Files deleted successfully.']);
        return response()->json(['message' => 'Files deleted successfully.'], 200);

        // return redirect('/file-upload')->with('success', 'Files deleted successfully.');
    }

    public function download1($id)
    {
        $file = MeansOfVerification::findOrFail($id);
        $filename = $file->filename;
        $file_path = $file->filepath;
        // dd($filename);
        // $filePath = "http://122.53.120.18:8067/images/{$file_path}";
        // // dd($filePath);
        // if (!file_exists($filePath)) {
        //     abort(404);
        // }

        $disk = app()->environment('local') ? 'public' : 'custom_uploads';

        if($disk=="public"){
            $fullPath = storage_path("app/public/{$file_path}");

            if (!file_exists($fullPath)) {
                abort(404, 'File not found in local storage');
            }

            return response()->download($fullPath, $filename);
            // dd($file, $id, $disk, "public");
        }else{
            try {
                $remoteUrl = "http://122.53.120.18:8067/images/{$file_path}";

                $response = Http::timeout(15)->get($remoteUrl);

                if ($response->failed()) {
                    Log::error("Remote file fetch failed", [
                        'url' => $remoteUrl,
                        'status' => $response->status(),
                        'body' => $response->body(),
                    ]);
                    abort(404, 'File not found on remote server');
                }

                return response($response->body(), 200)
                    ->header('Content-Type', $response->header('Content-Type') ?? 'application/octet-stream')
                    ->header('Content-Disposition', 'attachment; filename="' . $filename . '"');
            } catch (\Throwable $e) {
                Log::error("Error downloading remote file", [
                    'message' => $e->getMessage(),
                    'trace'   => $e->getTraceAsString(),
                ]);
                abort(500, 'Internal server error while fetching file');
            }
        }


        // $response = Http::get($remoteUrl);

        // if ($response->failed()) {
        //     // abort(404, 'File not found on remote server');
        //     dd("File not found on remote server");
        // }

        // // return response()->download($filePath, $filename, [
        // //     'Content-Type' => mime_content_type($filePath),
        // //     'Content-Disposition' => 'attachment; filename="' . $filename . '"',
        // // ]);
        // return response($response->body(), 200)
        //     ->header('Content-Type', $response->header('Content-Type') ?? 'application/octet-stream')
        //     ->header('Content-Disposition', 'attachment; filename="' . $filename . '"');
    }

    public function upload_justification(Request $request, $id, $status){
        $disk = app()->environment('production') ? 'custom_uploads' : 'public';
        // $rev = RevisionPlan::where('id', $id)->first();
        // Build safe subfolder path

        $latest = RevisionPlanDocuments::where('revision_plan_id', $id)
            ->where('return_executed', 1)
            ->orderBy('return_batch', 'DESC')
            ->first();

        $return_batch = $latest ? ($latest->return_batch + 1) : 1;

        $username = trim(auth()->user()->UserName);


        $subfolder = 'justification/' . $username;


        // Ensure user-specific folder exists
        Storage::disk($disk)->makeDirectory($subfolder);

        // Validate uploaded files
        $request->validate([
            'files'   => 'required|array',
            'files.*' => 'file|max:10240', // 50MB max per file
        ]);

        foreach ($request->file('files') as $file) {
            $filename = time() . '_' . $file->getClientOriginalName();

            // Save file on the correct disk
            $path = $file->storeAs($subfolder, $filename, $disk);


            RevisionPlanDocuments::create([
                'user_id'      => auth()->user()->recid,
                'filename'     => $file->getClientOriginalName(),
                'filepath'     => $subfolder . '/' . $filename,
                'file_type'    => $file->getClientOriginalExtension(),
                'file_size'    => $file->getSize(),
                'revision_plan_id' => $id,
                'upload_type' => 'Justification for ammendments',
                'return_batch' => $return_batch,
                'return_executed'=> 0,
            ]);
        }

        return response()->json(['message' => 'Files uploaded successfully.'], 200);
    }
}
