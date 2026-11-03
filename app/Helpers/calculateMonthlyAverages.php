<?php

// if (!function_exists('calculateMonthlyAverages')) {
function calculateMonthlyAverages($item, array $columns)
{
    // Collect all monthly targets under this OPCR item
    // dd($item);
    $sem = $item->opcrList->semester === 'Second Semester' ? 2 : 1;
    $year = $item->opcrList->year;
    $ipcrSemestrals = collect(optional($item->paps)->divisionOutputs)
        ->flatMap(function ($division) {
            // dd($division);
            return collect($division->dpcrTargets)
                ->map(fn($dpcr) => $dpcr->ipcr_Semestral);
        })
        ->filter(
            fn($ipcr) =>
            $ipcr !== null && (int) $ipcr->sem === $sem
        )
        ->first();
    // dd($ipcrSemestrals);
    $sem_id = optional($ipcrSemestrals)->id ? optional($ipcrSemestrals)->id : 0;
    $monthlyTargets = collect(optional($item->paps))
        ->flatMap(function ($paps) {
            return collect(optional($paps)->divisionOutputs);
        })
        ->flatMap(function ($divisionOutput) {
            return collect(optional($divisionOutput)->dpcrTargets);
        })
        ->flatMap(function ($dpcrTarget) {
            return collect(optional($dpcrTarget)->monthlyTargets);
        })
        ->filter(function ($monthlyTarget) use ($sem, $year, $sem_id) {
            // return  (int) $monthlyTarget->year === (int) $year;
            // always filter by year
            $match = (int) $monthlyTarget->year === (int) $year;

            // if sem_id is not 0, also filter by sem_id
            if ($sem_id !== 0) {
                $match = $match && ((int) $monthlyTarget->sem_id === (int) $sem_id);
            }

            return $match;
        })
        ->values(); // reindex;
    // dd($monthlyTargets);
    // dd($item);
    // dd($monthlyTargets, collect(optional($item->paps))
    // ->flatMap(function ($paps) {
    //     return collect(optional($paps)->divisionOutputs);
    // })
    // ->flatMap(function ($divisionOutput) {
    //     return collect(optional($divisionOutput)->dpcrTargets);
    // })
    // ->flatMap(function ($dpcrTarget) {
    //     return collect(optional($dpcrTarget)->monthlyTargets);
    // })->first());

    $averages = [];

    foreach ($columns as $column) {
        $values = $monthlyTargets
            ->pluck($column)
            ->filter(fn($v) => !is_null($v) && $v != 0);

        $averages[$column] = $values->count()
            ? round($values->avg(), 2)
            : 0;
    }
    return $averages;
    // $
    // return [
    //     'opcr_target_id' => $item->id,
    //     'averages'       => $averages,
    //     'q1'=>optional($averages)->q1,
    //     'q2'=>optional($averages)->q2,
    //     'q3'=>optional($averages)->q3,
    //     'e1'=>optional($averages)->e1,
    //     'e1'=>optional($averages)->e1,
    //     'e3'=>optional($averages)->e3,
    //     't1'=>optional($averages)->t1,
    // ];
}


function calculateMonthlyAveragesPPDO($item, array $columns)
{
    // Collect all monthly targets under this OPCR item
    // dd($item);
    $sem = $item->opcrList->semester === 'Second Semester' ? 2 : 1;
    $year = $item->opcrList->year;
    $ipcrSemestrals = collect(optional($item->paps)->divisionOutputs)
        ->flatMap(function ($division) {
            // dd($division);
            return collect($division->dpcrTargets)
                ->map(fn($dpcr) => $dpcr->ipcr_Semestral);
        })
        ->filter(
            fn($ipcr) =>
            $ipcr !== null && (int) $ipcr->sem === $sem
        )
        ->first();
    // dd($ipcrSemestrals);
    $sem_id = optional($ipcrSemestrals)->id ? optional($ipcrSemestrals)->id : 0;
    $monthlyTargets = collect(optional($item->paps))
        ->flatMap(function ($paps) {
            return collect(optional($paps)->divisionOutputs);
        })
        ->flatMap(function ($divisionOutput) {
            return collect(optional($divisionOutput)->dpcrTargets);
        })
        ->flatMap(function ($dpcrTarget) {
            return collect(optional($dpcrTarget)->monthlyTargets);
        })
        ->filter(function ($monthlyTarget) use ($sem, $year, $sem_id) {
            // return  (int) $monthlyTarget->year === (int) $year;
            // always filter by year
            $match = (int) $monthlyTarget->year === (int) $year;

            // if sem_id is not 0, also filter by sem_id
            if ($sem_id !== 0) {
                $match = $match && ((int) $monthlyTarget->sem_id === (int) $sem_id);
            }

            return $match;
        })
        ->values(); // reindex;
    // dd($monthlyTargets);
    // dd($item);
    // dd($monthlyTargets, collect(optional($item->paps))
    // ->flatMap(function ($paps) {
    //     return collect(optional($paps)->divisionOutputs);
    // })
    // ->flatMap(function ($divisionOutput) {
    //     return collect(optional($divisionOutput)->dpcrTargets);
    // })
    // ->flatMap(function ($dpcrTarget) {
    //     return collect(optional($dpcrTarget)->monthlyTargets);
    // })->first());

    $averages = [];
    // dd($columns, $item);
    foreach ($columns as $column) {
        $values = $monthlyTargets
            ->pluck($column)
            ->filter(fn($v) => !is_null($v) && $v != 0);

        $averages[$column] = $values->count()
            ? round($values->avg(), 2)
            : 0;
    }
    return $averages;
    // $
    // return [
    //     'opcr_target_id' => $item->id,
    //     'averages'       => $averages,
    //     'q1'=>optional($averages)->q1,
    //     'q2'=>optional($averages)->q2,
    //     'q3'=>optional($averages)->q3,
    //     'e1'=>optional($averages)->e1,
    //     'e1'=>optional($averages)->e1,
    //     'e3'=>optional($averages)->e3,
    //     't1'=>optional($averages)->t1,
    // ];
}
// }
