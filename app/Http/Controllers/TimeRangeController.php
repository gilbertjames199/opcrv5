<?php

namespace App\Http\Controllers;

use App\Models\TimeRange;
use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TimeRangeController extends Controller
{
    protected $time_range;
    public function __construct(TimeRange $time_range)
    {
        $this->time_range = $time_range;
    }
    public function index(Request $request)
    {
        // dd('time range');
        return inertia('TimeRange/Index');
    }
    public function importIPCR(Request $request)
    {
        $date = Carbon::now();
        $dateTime = $date->format('Y-m-d');
        $file = $request->myfile;
        $validate = $request->validate([
            'myfile' => 'required|mimes:xlsx,csv',
        ]);
        if ($validate) {
            $fileName = $file->getClientOriginalName();
            $file->move(storage_path('app/public'), "file.xlsx");
            $reader = ReaderEntityFactory::createReaderFromFile(storage_path('app/public') . "file.xlsx");

            $reader->open(public_path() . "/storage/file.xlsx");

            $row_index_arr = [];
            foreach ($reader->getSheetIterator() as $sheet) {
                if ($sheet->getIndex() === 0) {
                    foreach ($sheet->getRowIterator() as $rowIndex => $row) {
                        if ($rowIndex > 3) {
                            $cells = $row->getCells();
                            $time_code = $cells[0]->getValue();
                            $time = $cells[1]->getValue();
                            $prescribed_period = $cells[2]->getValue();
                            $time_unit = $cells[3]->getValue();
                            $rating = $cells[4]->getValue();
                            $range_from = $cells[5]->getValue();
                            $range_to = $cells[6]->getValue();
                            $equivalent_time_from = $cells[7]->getValue();
                            $equivalent_time_to = $cells[8]->getValue();
                            $equivalent_time_unit = $cells[9]->getValue();

                            $this->saveTimeRange(
                                $time_code,
                                $time,
                                $prescribed_period,
                                $time_unit,
                                $rating,
                                $range_from,
                                $range_to,
                                $equivalent_time_from,
                                $equivalent_time_to,
                                $equivalent_time_unit,
                            );
                        }
                    }
                }
            }
        }
        // dd('Time Range');
    }
    public function saveTimeRange(
        $time_code,
        $time,
        $prescribed_period,
        $time_unit,
        $rating,
        $range_from,
        $range_to,
        $equivalent_time_from,
        $equivalent_time_to,
        $equivalent_time_unit
    ) {
        $my_individual = TimeRange::insert(
            [
                'time_code' => $time_code,
                'time' => $time,
                'prescribed_period' => $prescribed_period,
                'time_unit' => $time_unit,
                'rating' => $rating,
                'range_from' => $range_from,
                'range_to' => $range_to,
                'equivalent_time_from' => $equivalent_time_from,
                'equivalent_time_to' => $equivalent_time_to,
                'equivalent_time_unit' => $equivalent_time_unit,
            ]
        );
    }
}
