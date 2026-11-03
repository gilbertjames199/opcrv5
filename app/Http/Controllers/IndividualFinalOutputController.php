<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\Division;
use App\Models\DivisionOutput;
use App\Models\FFUNCCOD;
use App\Models\IndividualFinalOutput;
use App\Models\MajorFinalOutput;
use App\Models\SubMfo;
use App\Models\User;
use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class IndividualFinalOutputController extends Controller
{
    protected $model;
    public function __construct(IndividualFinalOutput $model)
    {
        $this->model = $model;
    }

    public function index(Request $request, $id)
    {

        // dd($id);

        $data = IndividualFinalOutput::where('idDPCR', $id)
            ->get();


        $paps = Division::where('id', $id)->first();

        $result = $data;
        $showPerPage = 10;
        $paginatedResult = PaginationHelper::paginate($result, $showPerPage);
        // dd("individual");
        return inertia('IndividualOutputs/Index', [
            "idDPCR" => $id,
            'idpaps' => $paps->idpaps,
            'dpcr' => $paps,
            "data" => $paginatedResult,
        ]);
    }
    public function create(Request $request, $idDPCR)
    {

        // dd($idDPCR);

        $dpcr = Division::where('id', $idDPCR)->first();

        // dd($dpcr);
        return inertia('IndividualOutputs/Create', [
            "dpcr" => $dpcr,
            'iddpcr' => $idDPCR,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $attributes = $request->validate([
            'individual_output' => 'required',
            'performance_measure' => 'required',
            'prescribed_period' => 'required',
            'quality1' => 'required',
            'quality2' => 'required',
            'quality3' => 'required',
            'efficiency1' => 'required',
            'efficiency2' => 'required',
            'efficiency3' => 'required',
            'timeliness' => 'required',
            'idDPCR' => 'required',
            'department_code' => 'required',
        ]);

        $attributes['type'] = "Unique";

        // dd($verb);
        $this->model->create($attributes);
        return redirect('/individual/outputs/' . $request->idDPCR)
            ->with('message', 'Individual Output added');
    }
    public function edit(Request $request, $id)
    {
        // dd($request->all());

        // dd($id);
        $editData = $this->model
            ->where('id', $id)->first([
                'id',
                'individual_output',
                'prescribed_period',
                'performance_measure',
                'quality1',
                'quality2',
                'quality3',
                'efficiency1',
                'efficiency2',
                'efficiency3',
                'timeliness',
                'idDPCR',
            ]);

        $dpcr = Division::where('id', $editData->idDPCR)->first();

        $data = Division::where('id', $editData->idDPCR)->first();
        return inertia('IndividualOutputs/Create', [
            "data" => $data,
            'iddpcr' => $editData->idDPCR,
            "editData" => $editData,
            "dpcr" => $dpcr,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        // dd($request->all());

        $data->update([
            'individual_output' => $request->individual_output,
            'prescribed_period' => $request->prescribed_period,
            'performance_measure' => $request->performance_measure,
            'quality1' => $request->quality1,
            'quality2' => $request->quality2,
            'quality3' => $request->quality3,
            'efficiency1' => $request->efficiency1,
            'efficiency2' => $request->efficiency2,
            'efficiency3' => $request->efficiency3,
            'timeliness' => $request->timeliness,
        ]);

        return redirect('/individual/outputs/' . $request->idDPCR)
            ->with('message', 'Division Output updated');
    }
    public function destroy(Request $request, $id)
    {
        // dd($request->all());
        $data = $this->model->findOrFail($id);
        $iddpcr = $data->idDPCR;
        // dd($iddpcr);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/individual/outputs/' . $iddpcr)->with('warning', 'IFO Deleted');
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
                //dd("validate import");
                if ($sheet->getIndex() === 0) {
                    foreach ($sheet->getRowIterator() as $rowIndex => $row) {
                        $cells = $row->getCells();

                        //$my_index = $rowIndex;
                        $ipcr_code = $cells[0]->getValue();
                        $mfo_desc = $cells[1]->getValue();
                        $submfo_desc = $cells[2]->getValue();
                        $div_output = $cells[3]->getValue();
                        $ind_output = $cells[4]->getValue();
                        $per = $cells[5]->getValue();
                        $concerned = $cells[6]->getValue();
                        $success = $cells[7]->getValue();
                        $quantity_type = $cells[8]->getValue();
                        $quality_error = $cells[9]->getValue();
                        $time_based = $cells[10]->getValue();
                        $time_range_code = $cells[11]->getValue();
                        $dept_code = $cells[12]->getValue();
                        $activity = $cells[13]->getValue();
                        $verb = $cells[14]->getValue();
                        $error_feedback = $cells[15]->getValue();
                        $within = $cells[16]->getValue();
                        $unit_of_time = $cells[17]->getValue();
                        $concatenate = $cells[18]->getValue();
                        $from_excel = $cells[19]->getValue();

                        // $dept = $cells[9]->getValue();
                        if ($dept_code === "HOSPITALS") {
                            $FFUNCCOD_1 = "4421-1";
                            $FFUNCCOD_2 = "4421-2";
                            $FFUNCCOD_3 = "4421-3";
                            $FFUNCCOD_4 = "4421-4";
                            $FFUNCCOD = "00";
                        } else {
                            $FFUNCCOD = $this->getFFUNCCOD($dept_code, $dept_code);
                            //$FFUNCCOD = $FFUNCCOD->pluck('FFUNCCOD');
                        }
                        if (!$FFUNCCOD) {
                            $FFUNCCOD = "00";
                        }
                        //$FFUNCCOD =$this->getFFUNCCOD($dept_code, $dept);
                        // if($dept_code==="-"){$dept_code="00";}
                        // if(!$FFUNCCOD){$FFUNCCOD="0";}
                        if ($rowIndex > 4) {
                            // dd($mfo_desc);
                            if ($ipcr_code == null) {
                                continue;
                            }
                            if ($dept_code === "HOSPITALS") {
                                $FFUNCCOD_1 = "4421-1";
                                $FFUNCCOD_2 = "4421-2";
                                $FFUNCCOD_3 = "4421-3";
                                $FFUNCCOD_4 = "4421-4";
                                $dept_code1 = "21";
                                $dept_code2 = "22";
                                $dept_code3 = "23";
                                $dept_code4 = "24";
                                $idmfo1 = $this->saveMFO($mfo_desc, $dept_code1, $FFUNCCOD_1);
                                $idmfo2 = $this->saveMFO($mfo_desc, $dept_code2, $FFUNCCOD_2);
                                $idmfo3 = $this->saveMFO($mfo_desc, $dept_code3, $FFUNCCOD_3);
                                $idmfo4 = $this->saveMFO($mfo_desc, $dept_code4, $FFUNCCOD_4);
                                $idsubmfo1 = $this->saveSubMFO($idmfo1, $submfo_desc);
                                $idsubmfo2 = $this->saveSubMFO($idmfo2, $submfo_desc);
                                $idsubmfo3 = $this->saveSubMFO($idmfo3, $submfo_desc);
                                $idsubmfo4 = $this->saveSubMFO($idmfo4, $submfo_desc);
                                $iddid1 = $this->saveDivisionOutput($idmfo1, $div_output);
                                $iddid2 = $this->saveDivisionOutput($idmfo2, $div_output);
                                $iddid3 = $this->saveDivisionOutput($idmfo3, $div_output);
                                $iddid4 = $this->saveDivisionOutput($idmfo4, $div_output);
                                $this->saveIndivOutput(
                                    $ipcr_code,
                                    $idmfo1,
                                    $idsubmfo1,
                                    $iddid1,
                                    $ind_output,
                                    $per,
                                    $success,
                                    $concerned,
                                    $quantity_type,
                                    $quality_error,
                                    $time_based,
                                    $time_range_code,
                                    $activity,
                                    $verb,
                                    $error_feedback,
                                    $within,
                                    $unit_of_time,
                                    $concatenate,
                                    $from_excel,
                                );
                                $this->saveIndivOutput(
                                    $ipcr_code,
                                    $idmfo2,
                                    $idsubmfo2,
                                    $iddid2,
                                    $ind_output,
                                    $per,
                                    $success,
                                    $concerned,
                                    $quantity_type,
                                    $quality_error,
                                    $time_based,
                                    $time_range_code,
                                    $activity,
                                    $verb,
                                    $error_feedback,
                                    $within,
                                    $unit_of_time,
                                    $concatenate,
                                    $from_excel,
                                );
                                $this->saveIndivOutput(
                                    $ipcr_code,
                                    $idmfo3,
                                    $idsubmfo3,
                                    $iddid3,
                                    $ind_output,
                                    $per,
                                    $success,
                                    $concerned,
                                    $quantity_type,
                                    $quality_error,
                                    $time_based,
                                    $time_range_code,
                                    $activity,
                                    $verb,
                                    $error_feedback,
                                    $within,
                                    $unit_of_time,
                                    $concatenate,
                                    $from_excel,
                                );
                                $this->saveIndivOutput(
                                    $ipcr_code,
                                    $idmfo4,
                                    $idsubmfo4,
                                    $iddid4,
                                    $ind_output,
                                    $per,
                                    $success,
                                    $concerned,
                                    $quantity_type,
                                    $quality_error,
                                    $time_based,
                                    $time_range_code,
                                    $activity,
                                    $verb,
                                    $error_feedback,
                                    $within,
                                    $unit_of_time,
                                    $concatenate,
                                    $from_excel,
                                );
                            } else {
                                $idmfo = $this->saveMFO($mfo_desc, $dept_code, $FFUNCCOD);
                                $idsubmfo = $this->saveSubMFO($idmfo, $submfo_desc);
                                $iddid = $this->saveDivisionOutput($idmfo, $div_output);
                                $this->saveIndivOutput(
                                    $ipcr_code,
                                    $idmfo,
                                    $idsubmfo,
                                    $iddid,
                                    $ind_output,
                                    $per,
                                    $success,
                                    $concerned,
                                    $quantity_type,
                                    $quality_error,
                                    $time_based,
                                    $time_range_code,
                                    $activity,
                                    $verb,
                                    $error_feedback,
                                    $within,
                                    $unit_of_time,
                                    $concatenate,
                                    $from_excel,
                                );
                            }
                        }
                    }
                }
            }
            return redirect('/individual/outputs')
                ->with('message', 'Division Output added');
        }
    }
    public function getFFUNCCOD($dept_code, $dept)
    {
        $FFUNCCOD = FFUNCCOD::select('FFUNCCOD')->where("department_code", $dept_code)
            ->first();
        if ($FFUNCCOD) {
            $FFUNCCOD = $FFUNCCOD->FFUNCCOD;
        }

        if ($dept_code === "16") {
            $FFUNCCOD = "8751";
        }
        if ($dept_code === "17") {
            $FFUNCCOD = "4490";
        }
        if (!$dept_code) {
            $FFUNCCOD = "00";
        }
        return $FFUNCCOD;
    }
    public function saveMFO($mfo_desc, $dept_code, $FFUNCCOD)
    {
        $my_mfo = DB::table('major_final_outputs')
            ->where("mfo_desc", "=", $mfo_desc)
            ->where("department_code", $dept_code)
            ->get();
        if (!$my_mfo->count()) {

            $mfo = new MajorFinalOutput;
            $mfo->department_code = $dept_code;
            $mfo->FFUNCCOD = $FFUNCCOD;
            $mfo->mfo_desc = $mfo_desc;
            $mfo->save();
        }
        $my_mfo = DB::table('major_final_outputs')
            ->where("mfo_desc", "=", $mfo_desc)
            ->where("department_code", $dept_code)
            ->first();
        // dd($my_mfo->id);
        return $my_mfo->id;
    }
    public function saveSubMFO($idmfo, $submfo_desc)
    {
        $my_submfo = DB::table("sub_mfos")
            ->where("idmfo", $idmfo)
            ->where("submfo_description", $submfo_desc)
            ->first();

        if (!$my_submfo) {

            $submfo = new SubMfo;
            $submfo->idmfo = $idmfo;
            $submfo->submfo_description = $submfo_desc;
            $submfo->save();
        }
        $my_submfo = DB::table("sub_mfos")
            ->where("idmfo", $idmfo)
            ->where("submfo_description", $submfo_desc)
            ->first();
        //$my_submfo = SubMfo::get();

        return $my_submfo->id;
    }
    public function saveDivisionOutput($idmfo, $div_output)
    {
        $my_div_output = DivisionOutput::where("idmfo", $idmfo)
            ->where('output', $div_output)
            ->first();
        if (!$my_div_output) {
            $div_out = new DivisionOutput;
            $div_out->idmfo = $idmfo;
            $div_out->output = $div_output;
            $div_out->save();
        }
        $my_div_output = DivisionOutput::where("idmfo", $idmfo)
            ->where('output', $div_output)
            ->first();
        return $my_div_output->id;
    }
    public function saveIndivOutput(
        $ipcr_code,
        $idmfo,
        $idsubmfo,
        $id_div_output,
        $indiv,
        $perf,
        $success,
        $con,
        $quantity_type,
        $quality_error,
        $time_based,
        $time_range_code,
        $activity,
        $verb,
        $error_feedback,
        $within,
        $unit_of_time,
        $concatenate,
        $from_excel
    ) {
        $my_individual = IndividualFinalOutput::updateOrInsert(
            [
                'ipcr_code' => $ipcr_code,
            ],
            [
                'ipcr_code' => $ipcr_code,
                'idmfo' => $idmfo,
                'idsubmfo' => $idsubmfo,
                'id_div_output' => $id_div_output,
                'individual_output' => $indiv,
                'performance_measure' => $perf,
                'success_indicator' => $success,
                'concerned_indiviual' => $con,
                'quantity_type' => $quantity_type,
                'quality_error' => $quality_error,
                'time_based' => $time_based,
                'time_range_code' => $time_range_code,
                'activity' => $activity,
                'verb' => $verb,
                'error_feedback' => $error_feedback,
                'within' => $within,
                'unit_of_time' => $unit_of_time,
                'concatenate' => $concatenate,
                'from_excel' => $from_excel,
            ]
        );
        $my_indiviudal = IndividualFinalOutput::where("ipcr_code", $ipcr_code)
            ->where("idmfo", $idmfo)
            ->where("idsubmfo", $idsubmfo)
            ->where("id_div_output", $id_div_output)
            ->where("individual_output", $indiv)
            ->first();
        return $my_indiviudal->id;
    }
}
