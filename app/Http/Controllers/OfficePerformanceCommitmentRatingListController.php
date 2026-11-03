<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\Implementing_team;
use App\Models\Office;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrTarget;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OfficePerformanceCommitmentRatingListController extends Controller
{
    protected $model;
    public function __construct(OfficePerformanceCommitmentRatingList $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $FFUNCCOD)
    {
        $ffunction = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();
        // dd($ffunction);
        // $office = Office::where('depar')
        $opcr_lists = $this->model->where('FFUNCCOD', $FFUNCCOD)
            ->orderBy('year', 'desc')
            ->orderBy('semester', 'desc')
            ->get()->map(function ($item) use ($FFUNCCOD, $ffunction) {
                $opcr_id = $item->id;
                //TOTAL & AVERAGE
                $averageSum = $this->getRating($opcr_id);
                $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
                if ($count < 1) {
                    $count = 1;
                }
                $total = number_format($averageSum, 2);
                $ave_pre = $total / $count;
                $ave = number_format($ave_pre, 2);

                //PG Department Head
                //********************************************** */
                // $count_pgdh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                //     ->where('role', 'like', '%Department Head%')
                //     ->count();
                // $dept_head = "N/A";
                // if ($count_pgdh > 0) {
                //     $dh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                //         ->where('role', 'like', '%Department Head%')
                //         ->first()->name;
                //     $dept_head = Str::upper($dh);
                // }

                $dept_head = $ffunction->DEPTHEAD;
                //OPCR LIST
                $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

                //OPCR DATE
                $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
                $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
                $start = $dateStart->format('F');
                $end = $dateEnd->format('F Y');
                $opcr_date = $start . " to " . $end;
                $opcr_date = Str::upper($opcr_date);

                //YEAR NOW
                $my_year = Carbon::parse($my_opcr->date_to)->format('Y');
                //dd($my_year);
                //REVISION PLAN ID/ GET MOOE & PS
                $revision_plan = RevisionPlan::where('idmfo', '0')
                    ->where('idpaps', '0')
                    ->where('FFUNCCOD', $FFUNCCOD)
                    ->where('year_period', $my_year)
                    ->first();
                $mooe = "0.00";
                $ps = "0.00";
                if ($revision_plan) {
                    $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                        ->where('category', 'Maintenance, Operating, and Other Expenses')
                        ->sum('amount');

                    $ps1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                        ->where('category', 'Personnel Services')
                        ->sum('amount');
                    $mooe2 = (float)$mooe1;
                    $ps2 = (float)$ps1;
                    $mooe2 = $mooe2 / 2;
                    $ps2 = $ps2 / 2;
                    $mooe = number_format($mooe2, 2);
                    $ps = number_format($ps2, 2);
                } else {
                    //dd("empty no ps budget");
                }
                return [
                    'id' => $item->id,
                    'semester' => $item->semester,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'year' => $item->year,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'allotment' => $item->allotment,
                    'target_status' => $item->target_status,
                    'total' => $total,
                    'ave' => $ave,
                    'dept_head' => $dept_head,
                    'opcr_date' => $opcr_date,
                    'mooe' => $mooe,
                    'ps' => $ps,
                    'type' => $item->type
                ];
            });
        // dd($opcr_lists);
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();

        return inertia('OPCR/List/Index', [
            "opcr_lists" => $opcr_lists,
            "FFUNCCOD" => $FFUNCCOD,
            "office" => $office,
        ]);
    }
    public function direct(Request $request)
    {
        $dept_code = auth()->user()->department_code;
        // dd($dept_code);
        $office = DB::connection('mysql2')->table('offices')
            ->where('department_code', $dept_code)
            // ->where('office', 'LIKE', '%Office%')
            ->where(function ($query) {
                $query->where('office', 'LIKE', '%Office%')
                    ->orWhere('office', 'LIKE', '%Hospital%');
            })
            ->first()->office;
        $office_lower = Str::lower($office);
        // dd($office_lower);
        // dd($office_lower);
        //dd($office_lower);
        // dd(auth()->user()->department_code);
        // $FFUNCCOD = DB::connection('mysql2')->table('functions')
        //             ->whereRaw('LOWER(functions.FFUNCTION) LIKE ?', ['%'.$office_lower.'%'])
        //             ->first()->FFUNCCOD;
        $dept = DB::connection('mysql2')->table('functions')
            ->where('department_code', auth()->user()->department_code)
            // ->where('FFUNCTION', 'LIKE', '%Office%')
            ->where(function ($query) {
                $query->where('FFUNCTION', 'LIKE', '%Office%')
                    ->orWhere('FFUNCTION', 'LIKE', '%Hospital%');
            })
            ->first();


        // dd($dept);
        $FFUNCCOD = $dept->FFUNCCOD;
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();
        // dd($FFUNCCOD);
        //$FFUNCCOD = user()
        //dd($FFUNCCOD);
        $opcr_lists = $this->model->where('FFUNCCOD', $FFUNCCOD)
            ->orderBy('year', 'desc')
            ->orderBy('semester', 'desc')
            ->get()->map(function ($item) use ($FFUNCCOD, $dept) {
                $opcr_id = $item->id;
                //TOTAL & AVERAGE
                $averageSum = $this->getRating($opcr_id);
                $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
                if ($count < 1) {
                    $count = 1;
                }
                $total = number_format($averageSum, 2);
                $ave_pre = $total / $count;
                $ave = number_format($ave_pre, 2);

                //PG Department Head
                //********************************************** */
                // $count_pgdh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                //     ->where('role', 'like', '%Department Head%')
                //     ->count();
                // $dept_head = "N/A";
                // if ($count_pgdh > 0) {
                //     $dh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                //         ->where('role', 'like', '%Department Head%')
                //         ->first()->name;
                //     $dept_head = Str::upper($dh);
                // }
                $dept_head = $dept->DEPTHEAD;
                // dd($dept);
                //OPCR LIST
                $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

                //OPCR DATE
                $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
                $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
                $start = $dateStart->format('F');
                $end = $dateEnd->format('F Y');
                $opcr_date = $start . " to " . $end;
                $opcr_date = Str::upper($opcr_date);

                //YEAR NOW
                $my_year = Carbon::parse($my_opcr->date_to)->format('Y');
                //dd($my_year);
                //REVISION PLAN ID/ GET MOOE & PS
                $revision_plan = RevisionPlan::where('idmfo', '0')
                    ->where('idpaps', '0')
                    ->where('FFUNCCOD', $FFUNCCOD)
                    ->where('year_period', $my_year)
                    ->first();
                $mooe = "0.00";
                $ps = "0.00";
                if ($revision_plan) {
                    $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                        ->where('category', 'Maintenance, Operating, and Other Expenses')
                        ->sum('amount');

                    $ps1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                        ->where('category', 'Personnel Services')
                        ->sum('amount');
                    $mooe2 = (float)$mooe1;
                    $ps2 = (float)$ps1;
                    $mooe2 = $mooe2 / 2;
                    $ps2 = $ps2 / 2;
                    $mooe = number_format($mooe2, 2);
                    $ps = number_format($ps2, 2);
                } else {
                    //dd("empty no ps budget");
                }
                return [
                    'id' => $item->id,
                    'semester' => $item->semester,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'year' => $item->year,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'allotment' => $item->allotment,
                    'target_status' => $item->target_status,
                    'total' => $total,
                    'ave' => $ave,
                    'dept_head' => $dept_head,
                    'opcr_date' => $opcr_date,
                    'mooe' => $mooe,
                    'ps' => $ps,
                    'type' => $item->type
                ];
            });
        // dd($opcr_lists);


        return inertia('OPCR/List/Index', [
            "opcr_lists" => $opcr_lists,
            "FFUNCCOD" => $FFUNCCOD,
            "office" => $office,
        ]);
    }
    public function create(Request $request, $FFUNCCOD)
    {
        //$opcr_lists = $this->model->where('FFUNCCOD',$FFUNCCOD)->get();
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();
        return inertia('OPCR/List/Create', [
            "FFUNCCOD" => $FFUNCCOD,
            "office" => $office,
            // 'can'=>[
            //     'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            //     'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            // ],
        ]);
    }
    public function getRating($opcr_id)
    {

        $targets = OpcrTarget::select(
            DB::raw('SUM(ROUND((COALESCE(qualities.numerical_rating, 0) + COALESCE(ratings.numerical_rating, 0) + COALESCE(timelinesses.numerical_rating, 0)) / (CASE WHEN qualities.numerical_rating IS NULL AND ratings.numerical_rating IS NULL THEN 1 WHEN qualities.numerical_rating IS NULL AND timelinesses.numerical_rating IS NULL THEN 1 WHEN ratings.numerical_rating IS NULL AND timelinesses.numerical_rating IS NULL THEN 1 WHEN qualities.numerical_rating IS NULL THEN 2 WHEN ratings.numerical_rating IS NULL THEN 2 WHEN timelinesses.numerical_rating IS NULL THEN 2 ELSE 3 END),2)) AS sum'),
        )
            ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
            ->leftJoin("ratings", "opcr_accomplishments.ratings_id", "ratings.id")
            ->leftJoin("qualities", "opcr_accomplishments.quality_id", "qualities.id")
            ->leftJoin("timelinesses", "opcr_accomplishments.timeliness_id", "timelinesses.id")
            ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
            ->get();

        $val = $targets[0]->sum;
        return $val;
    }
    public function store(Request $request)
    {
        // dd($request);
        $approver = "Engr. Raul G. Mabanglo";
        $approver_position = "Governor";
        $pmt_secretariat = "Alicia M. Graciadas";
        $pmt_chair = "Ivan Kleb N. Ulgasan, CESE";
        if ($request->FFUNCCOD == "1016" || $request->FFUNCCOD == "1021") {
            $approver = "Dorothy P. Montejo-Gonzaga";
            $approver_position = "Vice Governor";
        }
        $dept_code = FFUNCCOD::where('FFUNCCOD', $request->FFUNCCOD)->first()->department_code;
        // $dept_code = auth()->user()->department_code;
        $office = Office::with('pgHead')->where('department_code', $dept_code)->first();
        $pg_head = "";
        if ($office) {
            if ($office->pgHead) {
                $hh = $office->pgHead;
                $firstname = $hh->first_name;
                $lastname = $hh->last_name;
                $middle_initial = substr($hh->middle_name, 0, 1);
                $suffix = $hh->suffix_name ? ', ' . $hh->suffix_name : '';
                $postfix = $hh->postfix_name ? ', ' . $hh->postfix_name : '';
                $pg_head = $firstname . ' ' . $middle_initial . '. ' . $lastname . $suffix . $postfix;
            } else {
                $pg_head = "";
            }
            // dd($pg_head);
        } else {
            return redirect('/opcrlist/' . $request->FFUNCCOD)
                ->with('error', 'No PG Head found for this office.');
        }
        $request->merge(['department_code' => $dept_code]);
        $request->merge(['type' => 'n']);
        $request->merge(['approver' => $approver]);
        $request->merge(['pmt_secretariat' => $pmt_secretariat]);
        $request->merge(['pmt_chair' => $pmt_chair]);
        $request->merge(['pg_head' => $pg_head]);
        $request->merge(['approver_position' => $approver_position]);
        $attributes = $request->validate([
            'semester' => 'required',
            'date_from' => 'required',
            'date_to' => 'required',
            'year'  => 'required',
            'FFUNCCOD' => 'required',
            'department_code' => 'required',
            'allotment' => 'required',
            'type' => 'required',
            'approver' => 'required',
            'approver_position' => 'required',
            'pmt_secretariat' => 'required',
            'pmt_chair' => 'required',
            'pg_head' => 'required'
        ]);
        $found = $this->model->where('year', $request->year)
            ->where('semester', $request->semester)
            ->where('FFUNCCOD', $request->FFUNCCOD)
            ->first();
        $type = 'error';
        $msg = "OPCR for the year (" . $request->year . ") and semester (" . $request->semester . ") already exists. ";
        if (!$found) {
            $this->model->create($attributes);
            // $opcrl =new OfficePerformanceCommitmentRatingList();
            // $opcrl->semester = $request->semester;
            // $opcrl->date_from = $request->date_from;
            // $opcrl->date_to = $request->date_to;
            // $opcrl->year = $request->year;
            // $opcrl->FFUNCCOD = $request->FFUNCCOD;
            // $opcrl->department_code = $request->department_code;
            // $opcrl->approver = $request->approver;
            // $opcrl->pmt_secretariat = $request->pmt_secretariat;
            // $opcrl->pmt_chair = $request->pmt_chair;
            // $opcrl->pg_head = $request->pg_head;
            // $opcrl->type = $request->type;
            // $opcrl->target_status = $request->target_status;
            // $opcrl->rating_status = $request->rating_status;
            // $opcrl->accomplishment_status = $request->accomplishment_status;
            // $opcrl->allotment = $request->allotment;
            // $opcrl->allotment_mooe = $request->allotment_mooe;
            // $opcrl->allotment_ps = $request->allotment_ps;
            // $opcrl->allotment_co = $request->allotment_co;
            $msg = "Added new OPCR!";
            $type = 'message';
        }
        // dd($attributes);

        return redirect('/opcrlist/' . $request->FFUNCCOD)
            ->with($type, $msg);
    }
    public function edit(Request $request, $id)
    {
        $editData = $this->model->where('id', $id)->first();
        $FFUNCCOD = $editData->FFUNCCOD;
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();
        return inertia('OPCR/List/Create', [
            "editData" => $editData,
            "FFUNCCOD" => $FFUNCCOD,
            "office" => $office,
            // 'can'=>[
            //     'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            //     'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            // ],
        ]);
    }
    public function update(Request $request)
    {
        $dept_code = auth()->user()->department_code;
        $request->merge(['department_code' => $dept_code]);
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'semester' => $request->semester,
            'date_from' => $request->date_from,
            'date_to'  => $request->date_to,
            'year' => $request->year,
            'FFUNCCOD' => $request->FFUNCCOD,
            'id' => $request->id,
            'department_code' => $request->department_code,
            'allotment' => $request->allotment,
        ]);

        return redirect('/opcrlist/' . $request->FFUNCCOD)
            ->with('info', 'Updated new OPCR!');
    }
    public function destroy(Request $request) {}
    public function copy_from_to(Request $request, $opcr_list_id_from, $opcr_list_id_to)
    {
        // dd("opcr_list_id_from: " . $opcr_list_id_from);

        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id_from)
            ->first();
        // ->map(function($item)use($opcr_list_id_to){
        //     OpcrTarget
        // });
        $FFUNCCOD = $my_opcr->FFUNCCOD;
        $dept_code = "00";
        $dept = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();
        if ($dept) {
            $dept_code = $dept->department_code;
        }
        // dd($my_opcr->FFUNCCOD);
        // ->join('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
        $paps = ProgramAndProject::where('FFUNCCOD', $FFUNCCOD)
            ->get()
            ->map(function ($item) use ($opcr_list_id_from, $opcr_list_id_to, $FFUNCCOD, $dept_code) {
                $copied_target = OpcrTarget::where('idpaps', $item->id)
                    ->where('office_performance_commitment_rating_list_id', $opcr_list_id_from)
                    ->first();
                // dd("copied target");
                if ($copied_target) {
                    $to_target = OpcrTarget::where('idpaps', $item->id)
                        ->where('office_performance_commitment_rating_list_id', $opcr_list_id_to)
                        ->first();
                    // dd("office_performance_commitment_rating_list_id: " . $opcr_list_id_to);
                    if ($to_target) {
                        // dd("naa na dili na ka add");
                    } else {

                        $my_new = new OpcrTarget();
                        $my_new->target_success_indicator = $copied_target->target_success_indicator;
                        $my_new->output_id = $copied_target->output_id;
                        $my_new->quality_id = $copied_target->quality_id;
                        $my_new->ratings_id = $copied_target->ratings_id;
                        $my_new->timeliness_id = $copied_target->timeliness_id;
                        $my_new->remarks_q = $copied_target->remarks_q;
                        $my_new->remarks_e = $copied_target->remarks_e;
                        $my_new->remarks_t = $copied_target->remarks_t;
                        $my_new->remarks_final = $copied_target->remarks_final;
                        $my_new->quantity = $copied_target->quantity;
                        $my_new->quantity_unit = $copied_target->quantity_unit;
                        $my_new->comparison_operator = $copied_target->comparison_operator;
                        $my_new->is_zero = $copied_target->is_zero;
                        $my_new->idpaps = $copied_target->idpaps;
                        $my_new->office_performance_commitment_rating_list_id = $opcr_list_id_to;
                        $my_new->save();
                        $success = SuccessIndicator::where('idpaps', $copied_target->idpaps)->first();
                        $test_rating = OfficePerformanceCommitmentRating::where('id_opcr_target', $my_new->id)
                            ->first();
                        // dd($test_rating);
                        if ($test_rating) {
                        } else {
                            $opcrf = new OfficePerformanceCommitmentRating();
                            $opcrf->id_paps = $item->id;
                            $opcrf->id_opcr_target = $my_new->id;
                            $opcrf->success_indicator_id = $success->id;
                            $opcrf->accomplishments = "";
                            $opcrf->rating_q = "1";
                            $opcrf->rating_e = "1";
                            $opcrf->rating_t = "1";
                            $opcrf->remarks = "-";
                            $opcrf->opcr_id    = $opcr_list_id_to;
                            $opcrf->FFUNCCOD = $FFUNCCOD;
                            $opcrf->department_code = $dept_code;
                            $opcrf->save();
                        }
                    }
                }
            });
        // dd($paps);
        return redirect('/opcrlist/' . $FFUNCCOD)
            ->with('message', 'Successfully added!');
    }
}
