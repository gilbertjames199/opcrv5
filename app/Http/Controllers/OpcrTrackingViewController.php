<?php

namespace App\Http\Controllers;

use App\Models\OfficePerformanceCommitmentRatingList;
use Illuminate\Http\Request;

class OpcrTrackingViewController extends Controller
{
    public function targets(Request $request){
        $data = OfficePerformanceCommitmentRatingList::with(['office'])
            ->where('department_code','<>','01')
            ->get()
            ->groupBy('year')
            ->sortKeysDesc()
            ->map(function ($yearItems) {

                // ✅ Explicit order of semesters
                $semesterOrder = ['First Semester', 'Second Semester'];

                return collect($semesterOrder)->mapWithKeys(function ($semester) use ($yearItems) {

                    $items = $yearItems->where('semester', $semester);

                    $statusMap = [
                        -2 => 'Returned',
                        -1 => 'Saved',
                        0 => 'Submitted',
                        1 => 'Reviewed',
                        2 => 'Approved',
                    ];

                    return [
                        $semester => $items
                            ->sortBy(function ($item) {
                                return optional($item->office)->office;
                            })
                            ->values()
                            ->map(function ($item) use ($statusMap) {

                                return [
                                    'id' => $item->id,
                                    'office_name' => optional($item->office)->office,
                                    'target_status' => $statusMap[$item->target_status] ?? 'Unknown',
                                ];
                            })
                    ];
                });

            });
        // dd($data);
        return inertia('OpcrTracking/Targets', [
            'groupedData' => $data
        ]);
    }
    public function ratings(Request $request){
        $data = OfficePerformanceCommitmentRatingList::with(['office'])
            ->where('department_code','<>','01')
            ->get()
            ->groupBy('year')
            ->sortKeysDesc()
            ->map(function ($yearItems) {

                // ✅ Explicit order of semesters
                $semesterOrder = ['First Semester', 'Second Semester'];

                return collect($semesterOrder)->mapWithKeys(function ($semester) use ($yearItems) {

                    $items = $yearItems->where('semester', $semester);

                    $statusMap = [
                        -2 => 'Returned',
                        -1 => 'Saved',
                        0 => 'Submitted',
                        1 => 'Reviewed',
                        2 => 'Approved',
                    ];

                    return [
                        $semester => $items
                            ->sortBy(function ($item) {
                                return optional($item->office)->office;
                            })
                            ->values()
                            ->map(function ($item) use ($statusMap) {

                                return [
                                    'id' => $item->id,
                                    'office_name' => optional($item->office)->office,
                                    'target_status' => $statusMap[$item->rating_status] ?? 'Unknown',
                                ];
                            })
                    ];
                });

            });
        // dd($data);
        return inertia('OpcrTracking/Ratings', [
            'groupedData' => $data
        ]);
    }
}
