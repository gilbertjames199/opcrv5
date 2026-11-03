<?php

namespace App\Http\Controllers;

use App\Models\MeansOfVerification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class MeansOfVerificationController extends Controller
{
    protected $mov;
    public function __construct(MeansOfVerification $mov)
    {
        $this->mov = $mov;
    }
    public function get_mov(Request $request, $opcr_id){
        return $this->mov->where('opcr_id', $opcr_id)->get();
    }
    // public function store(Request $request, $opcr_id, $opcr_list_id){
    //     // dd($opcr_list_id);
    //     $subfolder = auth()->user()->username;
    //     // dd($request);
    //     // $opcr_id = $request->opcr_id;
    //     Storage::disk('custom_uploads')->makeDirectory($subfolder);
    //     $request->validate([
    //         'files.*' => 'required|file|max:51200', // 50MB max
    //     ]);

    //     $totalSize = MeansOfVerification::where('user_id', auth()->id())->sum('file_size'); // in bytes
    //     $maxSize = 1024 * 1024 * 1024;
    //     if ($totalSize >= $maxSize) {
    //         return redirect()->back()->withErrors(['error' => 'You have reached the 1 GB storage limit.']);
    //     }
    //     $file = $request->file('file');
    //     $filename = time() . '_' . $file->getClientOriginalName();
    //     // $path = $file->storeAs('', $filename, 'custom_files'); // See disk config below
    //     $path = $file->storeAs($subfolder, $filename, 'custom_uploads');

    //     MeansOfVerification::create([
    //         'user_id' => auth()->user()->id,
    //         'filename' => $file->getClientOriginalName(),
    //         'filepath' => $subfolder . '/' . $filename,
    //         'file_type'  => $file->getClientOriginalExtension(), // Save extension
    //         'file_size'  => $file->getSize(), // in bytes
    //         'opcr_id' => $opcr_id,
    //         'opcr_list_id'=> $opcr_list_id
    //     ]);

    //     return redirect()->back()->with('success', 'File uploaded successfully.');
    // }
    public function store_original(Request $request, $opcr_id, $opcr_list_id)
    {
        // dd(auth()->user());
        $subfolder = 'opcr_movs/'.auth()->user()->UserName;
        $level = auth()->user()->level;
        $municipality = auth()->user()->municipality;
        $barangay = auth()->user()->barangay;

        // Create user-specific folder if it doesn't exist local
        // Storage::disk('custom_uploads')->makeDirectory($subfolder);
        $disk = app()->environment('production') ? 'custom_uploads' : 'local';
        // dd($disk);
        Storage::disk($disk)->makeDirectory($subfolder);

        // Validate that "files" is an array and each file is valid
        $request->validate([
            'files'   => 'required|array',
            'files.*' => 'file|max:51200', // 50MB max per file
        ]);

        // Check total storage used by the user
        $totalSize = MeansOfVerification::where('user_id', auth()->id())->sum('file_size');
        $maxSize = 1024 * 1024 * 1024; // 1 GB in bytes
        if ($totalSize >= $maxSize) {
            return redirect()->back()->withErrors(['error' => 'You have reached the 1 GB storage limit.']);
        }
        // dd(auth()->user()->recid);
        foreach ($request->file('files') as $file) {
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs($subfolder, $filename, 'custom_uploads');

            MeansOfVerification::create([
                'user_id' => auth()->user()->recid,
                'filename' => $file->getClientOriginalName(),
                'filepath' => $subfolder . '/' . $filename,
                'file_type'  => $file->getClientOriginalExtension(), // Save extension
                'file_size'  => $file->getSize(), // in bytes
                'opcr_id' => $opcr_id,
                'opcr_list_id'=> $opcr_list_id
            ]);
        }

        // return redirect()->back()->with('success', 'Files uploaded successfully.');
        // return redirect('/file-upload')->with('success', 'Files deleted successfully.');
        return response()->json(['message' => 'Files uploaded successfully.'], 200);
    }
    public function store(Request $request, $opcr_id, $opcr_list_id)
    {
        $disk = app()->environment('production') ? 'custom_uploads' : 'public';
        $disk = 'public';
        // dd($opcr_id);
        // Build safe subfolder path
        $username = trim(auth()->user()->UserName);


        $subfolder = 'opcr_movs/' . $username;
        // dd($subfolder);
        $level = auth()->user()->level;
        $municipality = auth()->user()->municipality;
        $barangay = auth()->user()->barangay;

        // Ensure user-specific folder exists
        Storage::disk($disk)->makeDirectory($subfolder);

        // Validate uploaded files
        $request->validate([
            'files'   => 'required|array',
            'files.*' => 'file|max:10240', // 50MB max per file
        ]);

        // Check total storage used by the user
        $totalSize = MeansOfVerification::where('opcr_id', $opcr_id)->sum('file_size');
        $count = MeansOfVerification::where('opcr_id', $opcr_id)->count();
        $maxSize   = 1024 * 1024 * 10; // 1 GB in bytes
        // dd($count, $maxSize, auth()->user()->recid, auth()->id());
        if(intval($count)>=10){
            // dd("greater than 2", $totalSize, $count, $opcr_id);
            return redirect()->back()->withErrors(['error' => 'You have reached the 2 files limit.']);
        }
        if ($totalSize >= $maxSize) {
            // dd("You have reached the 1 GB storage limit.");
            return redirect()->back()->withErrors(['error' => 'You have reached the 1 GB storage limit.']);
        }

        foreach ($request->file('files') as $file) {
            $filename = time() . '_' . $file->getClientOriginalName();

            // Save file on the correct disk
            $path = $file->storeAs($subfolder, $filename, $disk);

            MeansOfVerification::create([
                'user_id'      => auth()->user()->recid,
                'filename'     => $file->getClientOriginalName(),
                'filepath'     => $subfolder . '/' . $filename,
                'file_type'    => $file->getClientOriginalExtension(),
                'file_size'    => $file->getSize(),
                'opcr_id'      => $opcr_id,
                'opcr_list_id' => $opcr_list_id
            ]);
        }

        return response()->json(['message' => 'Files uploaded successfully.'], 200);
    }
    public function destroyMultiple(Request $request)
    {
        // dd($request->file_ids, auth()->user()->recid);
        $disk = app()->environment('production') ? 'custom_uploads' : 'public';
        $request->validate([
            'file_ids' => 'required|array',
            // 'file_ids.*' => 'integer|exists:means_of_verifications,id',
        ]);

        $files = MeansOfVerification::whereIn('id', $request->file_ids)
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
}
