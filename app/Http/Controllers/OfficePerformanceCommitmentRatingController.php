<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\Implementing_team;
use App\Models\MajorFinalOutput;
use App\Models\Office;
use App\Models\OfficeAccountable;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrAccomplishment;
use App\Models\OpcrTarget;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use App\Models\UserEmployees;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class OfficePerformanceCommitmentRatingController extends Controller
{
    protected $model;
    public function __construct(OfficePerformanceCommitmentRating $model)
    {
        $this->model = $model;
    }
    public function index2(Request $request, $opcr_id, $FFUNCCOD)
    {
        $dept_code = auth()->user()->department_code;
        //Check if the OPCR Form for the OPCR List is empty or not
        $opcr = $this->model->where('opcr_id', $opcr_id)->get();
        $list = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

        $my_year = Carbon::parse($list->date_to)->format('Y');
        //dd($my_year);
        $cnt = $opcr->count();

        //dd($FFUNCCOD);
        $succid = [];
        //Load all success indicators
        $success_indicators = SuccessIndicator::select(
            'success_indicators.id',
            'success_indicators.success_indicator'
        )
            ->join('program_and_projects AS paps', 'paps.id', 'success_indicators.idpaps')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->get();
        if ($cnt < 1) {
            //IF the OPCR List has no OPCR Ratings, generate OPCR ratings for each Success Indicator
            //Save OPC Rating for each success indicator with rating of 1 for Q,E,and T
            foreach ($success_indicators as $success_indicator) {
                $opcrf = new OfficePerformanceCommitmentRating();
                $opcrf->success_indicator_id = $success_indicator->id;
                array_push($succid, $success_indicator->id);
                $opcrf->accomplishments = "";
                $opcrf->rating_q = "1";
                $opcrf->rating_e = "1";
                $opcrf->rating_t = "1";
                $opcrf->remarks = "-";
                $opcrf->FFUNCCOD = $FFUNCCOD;
                $opcrf->opcr_id    = $opcr_id;
                $opcrf->department_code = $dept_code;
                $opcrf->save();
            }
            //dd('EMPTY: '.$cnt);
        } else {
            $exist = $this->model->where('FFUNCCOD', $FFUNCCOD)
                ->get();
            $existingSuccessIndicatorIds = $exist->pluck('success_indicator_id')->toArray();
            foreach ($success_indicators as $success_indicator) {
                $successIndicatorId = $success_indicator->id;
                if (!in_array($successIndicatorId, $existingSuccessIndicatorIds)) {
                    OfficePerformanceCommitmentRating::create([
                        'success_indicator_id' => $successIndicatorId,
                        'accomplishments' => '',
                        'rating_q' => '1',
                        'rating_e' => '1',
                        'rating_t' => '1',
                        'remarks' => '-',
                        'FFUNCCOD' => $FFUNCCOD,
                        'opcr_id' => $opcr_id,
                        'department_code' => $dept_code
                    ]);
                }
            }
            //dd('COUNT: '.$cnt);
        }
        //REVISION PLAN ID
        $revision_plan = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('year_period', $my_year)
            ->first();
        $mooe = "0.00";
        $ps = "0.00";
        if ($revision_plan) {
            $mooe = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                ->where('category', 'Maintenance, Operating, and Other Expenses')
                ->sum('amount');

            $ps = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                ->where('category', 'Personnel Services')
                ->sum('amount');
        } else {
            //dd("empty no ps budget");
        }
        //$opcr = $this->model->where('FFUNCCOD', $FFUNCCOD)->get();
        $opcrs = $this->model->select(
            'office_performance_commitment_ratings.id',
            'office_performance_commitment_ratings.success_indicator_id',
            'office_performance_commitment_ratings.accomplishments',
            'office_performance_commitment_ratings.rating_q',
            'office_performance_commitment_ratings.rating_e',
            'office_performance_commitment_ratings.rating_t',
            'office_performance_commitment_ratings.remarks',
            'office_performance_commitment_ratings.FFUNCCOD',
            'office_performance_commitment_ratings.opcr_id',
            'SU.success_indicator',
            'off.office_accountable',
            'PAPS.paps_desc',
            'mfo.mfo_desc',
            'mfo.created_at'
        )
            ->leftjoin('success_indicators AS SU', 'SU.id', 'office_performance_commitment_ratings.success_indicator_id')
            // ->leftjoin('program_and_projects AS PAPS', 'PAPS.id', 'SU.idpaps')
            ->leftjoin('opcr_targets', 'opcr_targets.id', 'office_performance_commitment_ratings.id_opcr_target')
            ->leftjoin('office_accountables AS off', 'off.idpaps', 'PAPS.id')
            ->leftjoin('major_final_outputs AS mfo', 'mfo.id', 'PAPS.idmfo')
            ->orderBy('mfo.mfo_desc', 'asc')
            ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
            ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
            ->get();
        //return $opcrs;
        //return $mfos;
        //********************************************** */
        $count_pgdh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
            ->where('role', 'like', '%Department Head%')
            ->count();
        $dept_head = "N/A";
        if ($count_pgdh > 0) {
            $dept_head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                ->where('role', 'like', '%Department Head%')
                ->first()->name;
        }

        //$dept_head = Str::upper($head->name);
        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        $start = $dateStart->format('F');
        $end = $dateEnd->format('F Y');
        $opcr_date = $start . " to " . $end;
        $opcr_date = Str::upper($opcr_date);
        //dd($opcr_date);
        //$date_now = Carbon::now()->format('F d, Y');

        $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
            ->where('opcr_id', $opcr_id)
            ->first()->average_sum;
        $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        if ($count < 1) {
            $count = 1;
        };
        $total = number_format($averageSum, 2);
        $ave_pre = $total / $count;
        $ave = number_format($ave_pre, 2);
        //dd($ave);
    }
    public function index(Request $request, $opcr_id, $FFUNCCOD)
    {
        // dd($request);
        //GET Department Code
        $dept_code = auth()->user()->department_code;
        //Check if the OPCR Form for the OPCR List is empty or not
        $opcr = $this->model->where('opcr_id', $opcr_id)->get();
        $cnt = $opcr->count();

        $list = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        // dd($list);
        // $opcr_targets_o = OpcrTarget::where('office_performance_commitment_rating_list_id', $opcr_id)
        //     ->get();
        // dd($opcr_targets);

        $opcr_targets = OpcrTarget::with([
                'opcrList',
                'opcr_rating',
                'opcr_rating.movs',
                'opcr_rating2',
                'paps',
                'paps.MFO',
                'paps.opcr_stardard',
                'paps.divisionOutputs',
                'paps.divisionOutputs.dpcrTargets',
                'paps.divisionOutputs.dpcrTargets.ipcr_Semestral',
                'paps.divisionOutputs.dpcrTargets.monthlyTargets',
            ])
                ->where('office_performance_commitment_rating_list_id', $opcr_id)
                ->where('is_included', '1')
                ->get()
                // ->pluck('id');
                ->map(function ($item) use ($opcr_id, $list, $dept_code) {

                    // THESE*******************************************************
                    $rating = null;
                    $movs = [];
                    $q1 = "";
                    $q2 = "";
                    $q3 = "";
                    $e1 = "";
                    $e2 = "";
                    $e3 = "";
                    $t1 = "";
                    $rid = "";
                    $show_mov = false;
                    $count_movs = 0;
                    $rating_status = optional(optional($item)->opcrList)->rating_status;
                    $rating_type =optional(optional($item)->opcrList)->rating_type;
                    // dd($rating_status);
                    if (!empty($item->opcr_rating2)) {
                        //
                        $rating = collect($item->opcr_rating2)->where('opcr_id', $opcr_id)->first();
                        if($rating_status==2){

                            // dd(optional($item)->opcrList);
                            // dd($rating,'collect');
                            if($rating_type=="2"){
                                // dd("ppdo");

                                $q1 = optional($rating)->ppdo_q1;
                                $q2 = optional($rating)->ppdo_q2;
                                $q3 = optional($rating)->ppdo_q3;
                                $e1 = optional($rating)->ppdo_e1;
                                $e2 = optional($rating)->ppdo_e2;
                                $e3 = optional($rating)->ppdo_e3;
                                $t1 = optional($rating)->ppdo_t1;
                                // if($rating->accomplishments=='Provided assistance (12 out of 10) in the Maintenance and Operation of the LFC with very satisfactory feedback.'){
                                //     dd($rating, $q1,$q2, $q3, $e1, $e2, $e3, $t1);
                                // }
                            }else{
                                dd("self");
                                $q1 = optional($rating)->q1;
                                $q2 = optional($rating)->q2;
                                $q3 = optional($rating)->q3;
                                $e1 = optional($rating)->e1;
                                $e2 = optional($rating)->e2;
                                $e3 = optional($rating)->e3;
                                $t1 = optional($rating)->t1;
                            }

                        }else{
                            $q1 = optional($rating)->q1;
                            $q2 = optional($rating)->q2;
                            $q3 = optional($rating)->q3;
                            $e1 = optional($rating)->e1;
                            $e2 = optional($rating)->e2;
                            $e3 = optional($rating)->e3;
                            $t1 = optional($rating)->t1;
                        }

                        $rid = optional($rating)->id;
                        // dd($rating);
                        $movs = optional($item->opcr_rating)->movs;
                        // $show_mov = !empty($movs);
                        $movs = optional($item->opcr_rating)->movs;

                        if ($movs instanceof Collection) {
                            $show_mov = $movs->isNotEmpty();   // correct for Eloquent collections
                            $count_movs = $movs->count();
                        } else {
                            // covers arrays, strings, nulls, etc.
                            $show_mov = !empty($movs);
                            $count_movs = $show_mov ? 1 : 0;
                        }
                    }
                    $division_outputs = optional(optional($item)->paps)->divisionOutputs ?? [];
                    $dpcr_targets = [];
                    $sem = (optional(optional($item)->opcrList)->semester == 'Second Semester') ? '2' : '1';
                    $year = optional(optional($item)->opcrList)->year;

                    // dd(calculateMonthlyAverages($item, [
                    //     'q1',
                    //     'q2',
                    //     'q3',
                    //     'e1',
                    //     'e2',
                    //     'e3',
                    //     't1'
                    // ]));
                    $monthly_targets = calculateMonthlyAverages($item, [
                        'q1',
                        'q2',
                        'q3',
                        'e1',
                        'e2',
                        'e3',
                        't1'
                    ]);
                    // dd($monthly_targets, $item->id);

                    // DPCR Rating


                    // $dpcr_ave = optional($dpcr_targets)->pluck('monthlyTargets') ?? collect();
                    $opcr_rating = OfficePerformanceCommitmentRating::where('id_opcr_target', $item->id)
                        ->first();
                    $paps_here = ProgramAndProject::where('id', $item->idpaps)->first();
                    // dd($paps_here);
                    if (!$opcr_rating) {
                        $opcrf = new OfficePerformanceCommitmentRating();
                        $opcrf->id_paps = $item->idpaps;
                        $opcrf->id_opcr_target = $item->id;
                        $opcrf->success_indicator_id = '-';
                        $opcrf->accomplishments = "";
                        $opcrf->rating_q = "3";
                        $opcrf->rating_e = "3";
                        $opcrf->rating_t = "3";
                        $opcrf->remarks = "";
                        $opcrf->opcr_id    = $opcr_id;
                        $opcrf->FFUNCCOD = $list->FFUNCCOD;
                        $opcrf->department_code = $dept_code;
                        $opcrf->save();
                    }
                    // dd($rid);
                    return [
                        'id' => $item->id,
                        // 'average_monthly'=>$average_monthly,
                        'monthly_targets' => $monthly_targets,
                        'mfo_desc' => optional(optional(optional($item)->paps)->MFO)->mfo_desc,
                        'idpaps' => $item->idpaps,
                        'paps_desc' => optional(optional($item)->paps)->paps_desc,
                        // 'id' => $item->id,
                        'target_success_indicator' => $item->target_success_indicator,
                        'quantity' => $item->quantity,
                        'success_indicator' => $item->success_indicator,
                        "opcr_rating_id" => $rid,
                        "accomplishments" => optional(optional($item)->opcr_rating)->accomplishments,
                        "q1" => $q1,
                        "q2" => $q2,
                        "q3" => $q3,
                        "e1" => $e1,
                        "e2" => $e2,
                        "e3" => $e3,
                        "t1" => $t1,
                        // 'q1_ave' => round($computeAve($summary['q1']), 2),
                        // 'q2_ave' => round($computeAve($summary['q2']), 2),
                        // 'q3_ave' => round($computeAve($summary['q3']), 2),

                        // 'e1_ave' => round($computeAve($summary['e1']), 2),
                        // 'e2_ave' => round($computeAve($summary['e2']), 2),
                        // 'e3_ave' => round($computeAve($summary['e3']), 2),

                        // 't1_ave' => round($computeAve($summary['t1']), 2),

                        // // Now compute q_ave, e_ave, t_ave per original logic
                        // 'q_ave' => round($computeAve(array_merge($summary['q1'], $summary['q2'], $summary['q3'])), 2),
                        // 'e_ave' => round($computeAve(array_merge($summary['e1'], $summary['e2'], $summary['e3'])), 2),
                        // 't_ave' => round($computeAve($summary['t1']), 2),

                        // // Overall row average across all monthly row averages
                        // 'average' => round($computeAve($summary['row_averages']), 2),
                        "remarks" => optional($item->opcr_rating)->remarks,
                        "q1_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->quality1,
                        "q2_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->quality2,
                        "q3_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->quality3,
                        "e1_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->efficiency1,
                        "e2_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->efficiency2,
                        "e3_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->efficiency3,
                        "t1_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->timeliness,
                        "movs" => $movs,
                        "mov_is_visible" => $show_mov,
                        "count_movs" => $count_movs,
                        "division_outputs" => $division_outputs,
                        "division_output_ids" => optional($division_outputs)->pluck('id'),
                        // "q1_dpcr"=>$dpcr_ave,
                        // "monthly_targets"=>optional($dpcr_targets)->pluck("monthlyTargets"),

                        // count(optional($dpcr_targets)->pluck("monthlyTargets"))>0?$d
                        // "monthly_targets"=> optional($dpcr_targets)->pluck("monthlyTargets"),

                        "sem" => $sem,
                        "year" => $year
                        // ->monthlyTargets
                        // "flat" => $flat,
                        // 'standard'=>optional(optional($item)->paps)->opcr_stardard
                    ];
                });
        // dd("opcr targets: ", $opcr_targets);
        // dd($opcr_targets, $opcr_targets_o);
        // foreach ($opcr_targets as $target) {
        //     dd(OfficePerformanceCommitmentRating::where('id_opcr_target', $target->id)
        //         ->first(),$target);
        //     $opcr_rating = OfficePerformanceCommitmentRating::where('id_opcr_target', $target->id)
        //         ->first();
        //     $paps_here = ProgramAndProject::where('id', $target->idpaps)->first();
        //     // dd($paps_here);
        //     if (!$opcr_rating) {
        //         $opcrf = new OfficePerformanceCommitmentRating();
        //         $opcrf->id_paps = $target->idpaps;
        //         $opcrf->id_opcr_target = $target->id;
        //         $opcrf->success_indicator_id = '-';
        //         $opcrf->accomplishments = "";
        //         $opcrf->rating_q = "3";
        //         $opcrf->rating_e = "3";
        //         $opcrf->rating_t = "3";
        //         $opcrf->remarks = "";
        //         $opcrf->opcr_id    = $opcr_id;
        //         $opcrf->FFUNCCOD = $list->FFUNCCOD;
        //         $opcrf->department_code = $dept_code;
        //         $opcrf->save();
        //     }
        // }


        $my_year = Carbon::parse($list->date_to)->format('Y');

        $revision_plan = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('year_period', $my_year)
            ->first();
        $mooe = "0.00";
        $ps = "0.00";
        if ($revision_plan) {
            $mooe = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                ->where('category', 'Maintenance, Operating, and Other Expenses')
                ->sum('amount');

            $ps = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                ->where('category', 'Personnel Services')
                ->sum('amount');
        } else {
            //dd("empty no ps budget");
        }


        $opcrs = OpcrTarget::with([
            'opcr_rating',
            'opcrList',
            'opcrList.office',
            'opcr_rating.movs',
            'opcr_rating2',
            'paps',
            'paps.MFO',
            'paps.opcr_stardard',
            'paps.divisionOutputs',
            'paps.divisionOutputs.dpcrTargets',
            'paps.divisionOutputs.dpcrTargets.ipcr_Semestral',
            'paps.divisionOutputs.dpcrTargets.monthlyTargets',
        ])
            ->whereHas('paps', function ($query) use ($FFUNCCOD) {
                $query->whereHas('MFO', function ($query) use ($FFUNCCOD) {
                    $query->where('mfo_desc', '<>', '');
                });
            })
            ->whereHas('opcrList', function ($query) use ($opcr_id, $FFUNCCOD) {
                $query->where('id', $opcr_id)
                    ->where('FFUNCCOD', $FFUNCCOD);
            })
            ->where('is_included', '1')
            // ->orderBy('mfo.id', 'asc')
            ->orderBy('idpaps', 'asc')
            ->groupBy('office_performance_commitment_rating_list_id')
            ->groupBy('idpaps')
            ->get()
            ->map(function ($item) use ($opcr_id, $list, $dept_code) {
                // dd($item);
                $id = $item->opcr_rating ? $item->opcr_rating->id : null;
                $su = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->performance_measure : null) : null;
                $accomp = $item->opcr_rating ? $item->opcr_rating->accomplishments : null;
                $r_q = $item->opcr_rating ? $item->opcr_rating->rating_q : null;
                $r_e = $item->opcr_rating ? $item->opcr_rating->rating_e : null;
                $r_t = $item->opcr_rating ? $item->opcr_rating->rating_t : null;
                $remarks = $item->opcr_rating ? $item->opcr_rating->remarks : null;
                $FFUNCCOD = $item->opcr_rating ? $item->opcr_rating->FFUNCCOD : null;
                $opcr_list_id = $item->opcrList ? $item->opcrList->id : null;
                $office_accountable = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->office_accountable : null) : null;
                $paps_desc = $item->paps ? $item->paps->paps_desc : null;
                // dd($item->paps->opcr_standard);
                $mfo_desc = $item->paps ? ($item->paps->MFO ? $item->paps->MFO->mfo_desc : null) : null;
                $mfo_created_at = $item->paps ? ($item->paps->MFO ? $item->paps->MFO->created_at : null) : null;
                // if ($item->paps === null) {
                //     dd('no paps');
                // }
                $performance_measure = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->performance_measure : null) : null;
                $efficiency1 = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->efficiency1 : null) : null;
                $timeliness = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->timeliness : null) : null;
                $prescribed_period = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->prescribed_period : null) : null;;

                if ($efficiency1 === 'No' && $timeliness === 'No') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency";
                } elseif ($efficiency1 === 'Yes') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency within {$prescribed_period}";
                } else {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency on or before {$timeliness}";
                }
                // dd($accomp);
                $monthly_ratings = calculateMonthlyAverages($item, [
                    'q1',
                    'q2',
                    'q3',
                    'e1',
                    'e2',
                    'e3',
                    't1'
                ]);
                $rating_type = optional(optional($item)->opcrList)->rating_type ?? "0";
                $rating_status =optional(optional($item)->opcrList)->rating_status ?? "0";
                if ($rating_type == "0") {
                    $q1 = $item->opcr_rating ? $item->opcr_rating->q1 : null;
                    $q2 = $item->opcr_rating ? $item->opcr_rating->q2 : null;
                    $q3 = $item->opcr_rating ? $item->opcr_rating->q3 : null;

                    $e1 = $item->opcr_rating ? $item->opcr_rating->e1 : null;
                    $e2 = $item->opcr_rating ? $item->opcr_rating->e2 : null;
                    $e3 = $item->opcr_rating ? $item->opcr_rating->e3 : null;

                    $t1 = $item->opcr_rating ? $item->opcr_rating->t1 : null;


                    // Collect only non-null values for each rating group
                    // Quality
                    $qValues = array_filter([
                        $item->opcr_rating ? ($item->opcr_rating->q1 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->q2 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->q3 ?? 0) : 0,
                    ], function ($v) {
                        return $v != 0; // skip zeros
                    });
                    $r_q = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;

                    $eValues = array_filter([
                        $item->opcr_rating ? ($item->opcr_rating->e1 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->e2 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->e3 ?? 0) : 0,
                    ], function ($v) {
                        return $v != 0;
                    });
                    $r_e = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;

                    $t1 = $item->opcr_rating ? ($item->opcr_rating->t1 ?? 0) : 0;
                    $r_t = $t1 != 0 ? round($t1, 2) : 0;
                } else if ($rating_type == "1") {
                    // Use array access instead of object access, defaulting to 0
                    $q1 = $monthly_ratings['q1'] ?? 0;
                    $q2 = $monthly_ratings['q2'] ?? 0;
                    $q3 = $monthly_ratings['q3'] ?? 0;

                    $e1 = $monthly_ratings['e1'] ?? 0;
                    $e2 = $monthly_ratings['e2'] ?? 0;
                    $e3 = $monthly_ratings['e3'] ?? 0;

                    $t1 = $monthly_ratings['t1'] ?? 0;

                    // --- Compute averages for Quality (q) ---
                    $qValues = array_filter([$q1, $q2, $q3], fn($v) => $v != 0);
                    $r_q = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;

                    // --- Compute averages for Efficiency (e) ---
                    $eValues = array_filter([$e1, $e2, $e3], fn($v) => $v != 0);
                    $r_e = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;

                    // --- Compute Timeliness (t) ---
                    $r_t = $t1 != 0 ? round($t1, 2) : 0;
                } else if ($rating_type == "2") {
                    $q1 = $item->opcr_rating ? $item->opcr_rating->ppdo_q1 : null;
                    $q2 = $item->opcr_rating ? $item->opcr_rating->ppdo_q2 : null;
                    $q3 = $item->opcr_rating ? $item->opcr_rating->ppdo_q3 : null;

                    $e1 = $item->opcr_rating ? $item->opcr_rating->ppdo_e1 : null;
                    $e2 = $item->opcr_rating ? $item->opcr_rating->ppdo_e2 : null;
                    $e3 = $item->opcr_rating ? $item->opcr_rating->ppdo_e3 : null;

                    $t1 = $item->opcr_rating ? $item->opcr_rating->ppdo_t1 : null;


                    // Collect only non-null values for each rating group
                    // Quality
                    $qValues = array_filter([
                        $item->opcr_rating ? ($item->opcr_rating->ppdo_q1 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->ppdo_q2 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->ppdo_q3 ?? 0) : 0,
                    ], function ($v) {
                        return $v != 0; // skip zeros
                    });
                    $r_q = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;

                    $eValues = array_filter([
                        $item->opcr_rating ? ($item->opcr_rating->ppdo_e1 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->ppdo_e2 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->ppdo_e3 ?? 0) : 0,
                    ], function ($v) {
                        return $v != 0;
                    });
                    $r_e = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;

                    $t1 = $item->opcr_rating ? ($item->opcr_rating->ppdo_t1 ?? 0) : 0;
                    $r_t = $t1 != 0 ? round($t1, 2) : 0;
                }

                // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                // THESE*******************************************************
                $rating = null;
                $movs = [];
                $q1 = "";
                $q2 = "";
                $q3 = "";
                $e1 = "";
                $e2 = "";
                $e3 = "";
                $t1 = "";
                $rid = "";
                $show_mov = false;
                $count_movs = 0;
                if (!empty($item->opcr_rating2)) {
                    //
                    $rating = collect($item->opcr_rating2)->where('opcr_id', $opcr_id)->first();
                    // dd($rating,'collect');
                    if($rating_status=='2'){
                        $q1 = optional($rating)->ppdo_q1;
                        $q2 = optional($rating)->ppdo_q2;
                        $q3 = optional($rating)->ppdo_q3;
                        $e1 = optional($rating)->ppdo_e1;
                        $e2 = optional($rating)->ppdo_e2;
                        $e3 = optional($rating)->ppdo_e3;
                        $t1 = optional($rating)->ppdo_t1;
                    }else{
                        $q1 = optional($rating)->q1;
                        $q2 = optional($rating)->q2;
                        $q3 = optional($rating)->q3;
                        $e1 = optional($rating)->e1;
                        $e2 = optional($rating)->e2;
                        $e3 = optional($rating)->e3;
                        $t1 = optional($rating)->t1;
                    }
                    
                    $rid = optional($rating)->id;
                    // dd($rating);
                    $movs = optional($item->opcr_rating)->movs;
                    // $show_mov = !empty($movs);
                    $movs = optional($item->opcr_rating)->movs;

                    if ($movs instanceof Collection) {
                        $show_mov = $movs->isNotEmpty();   // correct for Eloquent collections
                        $count_movs = $movs->count();
                    } else {
                        // covers arrays, strings, nulls, etc.
                        $show_mov = !empty($movs);
                        $count_movs = $show_mov ? 1 : 0;
                    }
                }
                $division_outputs = optional(optional($item)->paps)->divisionOutputs ?? [];
                $dpcr_targets = [];
                $sem = (optional(optional($item)->opcrList)->semester == 'Second Semester') ? '2' : '1';
                $year = optional(optional($item)->opcrList)->year;
                // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                // dd($r_q, $r_e, $r_t, $monthly_ratings);

                // dd(($rating_type == "1" ? "1 siya" : "0 siya"),
                //     $monthy_ratings,
                //     $q1,
                //     $monthy_ratings['q1'],
                //     ($rating_type == "1" ? ($monthy_ratings['q1'] ?? "0 here") : ($q1 ?? 0))
                // );
                $office = optional(optional($item)->opcrList)->office;
                $dept_code = optional($office)->department_code;
                return [
                    "id" => $id,
                    "idpaps"=>$item->idpaps,
                    "success_indicator_id" => $su,
                    "accomplishments" => $accomp,
                    "rating_q" => $r_q,
                    "rating_e" => $r_e,
                    "rating_t" => $r_t,
                    "remarks" => $remarks,
                    "FFUNCCOD" => $FFUNCCOD,
                    "opcr_id" => $opcr_list_id,
                    "success_indicator" => $su,
                    "target_success_indicator" => $su,
                    "office_accountable" => $office_accountable,
                    "office" => $office,
                    "department_code" => $dept_code,
                    "year" => $year,
                    "semester"=>$sem,
                    "paps_desc" => $paps_desc,
                    "mfo_desc" => $mfo_desc,
                    "created_at" => $mfo_created_at,
                    "monthly_ratings" => $monthly_ratings,
                    "rating_type" => $rating_type,
                    // "q1" => $rating_type == "1" ? ($monthy_ratings->q1 ?? 0) : ($q1 ?? 0),
                    // "q2" => $rating_type == "1" ? ($monthy_ratings->q2 ?? 0) : ($q2 ?? 0),
                    // "q3" => $rating_type == "1" ? ($monthy_ratings->q3 ?? 0) : ($q3 ?? 0),
                    // "e1" => $rating_type == "1" ? ($monthy_ratings->e1 ?? 0) : ($e1 ?? 0),
                    // "e2" => $rating_type == "1" ? ($monthy_ratings->e2 ?? 0) : ($e2 ?? 0),
                    // "e3" => $rating_type == "1" ? ($monthy_ratings->e3 ?? 0) : ($e3 ?? 0),
                    // "t1" => $rating_type == "1" ? ($monthy_ratings->t1 ?? 0) : ($t1 ?? 0),
                    "q1" => $q1 ?? 0,
                    "q2" => $q2 ?? 0,
                    "q3" => $q3 ?? 0,
                    "e1" => $e1 ?? 0,
                    "e2" => $e2 ?? 0,
                    "e3" => $e3 ?? 0,
                    "t1" => $t1 ?? 0,
                    "opcr_rating_id"=>$rid,

                    "q1_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->quality1,
                    "q2_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->quality2,
                    "q3_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->quality3,
                    "e1_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->efficiency1,
                    "e2_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->efficiency2,
                    "e3_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->efficiency3,
                    "t1_standard" => optional(optional(optional($item)->paps)->opcr_stardard)->timeliness,
                    "paps"=>$item->paps
                ];
            });
        // dd($opcrs);
        // dd("opcr targets: ", $opcr_targets, "opcrs: ", $opcrs);
        //********************************************** */
        $count_pgdh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
            ->where('role', 'like', '%Department Head%')
            ->count();
        $dept_head = "N/A";
        if ($count_pgdh > 0) {
            $dept_head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                ->where('role', 'like', '%Department Head%')
                ->first()->name;
        }

        //$dept_head = Str::upper($head->name);
        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        $start = $dateStart->format('F');
        $end = $dateEnd->format('F Y');
        $rating_status = $my_opcr->rating_status;
        $opcr_date = $start . " to " . $end;
        $opcr_date = Str::upper($opcr_date);
        // dd($opcr_date);
        //$date_now = Carbon::now()->format('F d, Y');

        $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
            ->where('opcr_id', $opcr_id)
            ->first()->average_sum;
        $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        if ($count < 1) {
            $count = 1;
        };
        $total = number_format($averageSum, 2);
        $ave_pre = $total / $count;
        $ave = number_format($ave_pre, 2);
        // dd($opcrs);
        // dd('targ ave: ' . $ave);
        //********************************************* */
        $component = $this->isBeforeSecondSem2025($list) ? 'OPCR/Form/Index' : 'OPCR/Form/Index2';
        // dd($component);
        $baseUrl = app()->environment('production')
            ? 'http://122.53.120.18:8067/images/'
            : asset('storage/');
        // $disk = app()->environment('production') ? 'custom_uploads' : 'public';
        $disk = 'public';
        // dd($baseUrl);
        // dd($rating_status);
        // dd($baseUrl);
        // dd($component);
        // dd($opcrs);
        return inertia($component, [
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'opcr_date' => $opcr_date,
            'opcr_id' => $opcr_id,
            'mooe' => $mooe,
            'ps' => $ps,
            'opcrs' => $opcrs,
            "FFUNCCOD" => $FFUNCCOD,
            'fileBaseUrl' => $baseUrl,
            'disk' => $disk,
            "rating_status" => $rating_status,
            'list' => $list,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
        //dd($opcr);
        //dd('opcr form');
    }
    private function isBeforeSecondSem2025($list): bool
    {
        return $list->year < 2025 || ($list->year == 2025 && $list->semester == "First Semester");
    }
    public function create(Request $request) {}
    public function store(Request $request)
    {
        // dd($request);
        $opcrs = $request->opcrs;
        $myObject = json_decode($opcrs);

        // dd($myObject);
        foreach ($myObject as $opcr) {
            $dept_code = auth()->user()->department_code;
            $opcry = null;
            // dd($opcry);
            $opcry = OfficePerformanceCommitmentRating::findOrFail($opcr->id);
            if ($opcry) {
                $opcry->update([
                    'success_indicator_id' => $opcr->success_indicator_id,
                    'accomplishments' => $opcr->accomplishments,
                    'rating_q' => $opcr->rating_q,
                    'rating_e' => $opcr->rating_e,
                    'rating_t' => $opcr->rating_t,
                    'q1' => $opcr->q1,
                    'q2' => $opcr->q2,
                    'q3' => $opcr->q3,
                    'e1' => $opcr->e1,
                    'e2' => $opcr->e2,
                    'e3' => $opcr->e3,
                    't1' => $opcr->t1,
                    'remarks' => $opcr->remarks,
                    'department_code' => $dept_code
                ]);
            }
        }
        //dd($opcrs);
        //dd('opcrlist');
        // return redirect('/opcrlist/' . $request->FFUNCCOD)
        //     ->with('message', 'OPCR Rating Done!');
        // dd($request);
        // return redirect('/opcr/form/' . $request->opcr_id . '/' . $request->FFUNCCOD)
        //     ->with('message', 'OPCR Rating Done!');
        return redirect()->back()->with('message', 'OPCR Rating Done!');
    }
    public function edit(Request $request) {}
    public function update(Request $request) {}
    public function destroy(Request $request) {}
    public function getMFOs($FFUNCCOD)
    {
        $mfos = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
            ->get()
            ->map(function ($item) use ($FFUNCCOD) {
                $paps = ProgramAndProject::where('idmfo', $item->id)
                    ->get()->map(function ($itemp) {
                        $idpaps = $itemp->id;
                        $success = SuccessIndicator::where('idpaps', $itemp->id)
                            ->get()->map(function ($items) use ($idpaps) {
                                $accountable = OfficeAccountable::where('idpaps', $idpaps)
                                    ->get();
                                $opcr = $this->model->where('success_indicator_id', $items->id)->get();
                                return [
                                    "success_indicator_id" => $items->id,
                                    "success_indicator" => $items->success_indicator,
                                    "accountable_division" => $accountable,
                                    "opcr" => $opcr
                                ];
                            });
                        return [
                            "paps_description" => $itemp->paps_desc,
                            "success" => $success,
                        ];
                    });
                return [
                    "mfo_description" => $item->mfo_desc,
                    "FFUNCCOD" => $FFUNCCOD,
                    "paps" => $paps
                ];
            });
        return $mfos;
    }
    public function print_class(Request $request)
    {
        $total = "55";
        $ave = "3.0";
        $dept_head = "JOYZEL R. ODI";

        $opcr_date = "JULY TO DECEMBER 2023";

        $mooe = "8,951,455.00";
        $ps = "4,533,455.00";
        $FFUNCCOD = "1121";
        $opcr_id = "2";

        $date_now = Carbon::now()->format('F d, Y');

        $data = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
            ->orderBy('mfo_desc', 'asc')
            ->get()
            ->map(function ($item) use ($mooe, $ps, $opcr_id) {
                $paps = ProgramAndProject::where('idmfo', $item->id)
                    ->get()
                    ->map(function ($item) use ($mooe, $ps, $opcr_id) {
                        $success_indicator = SuccessIndicator::where("idpaps", $item->id)
                            ->where('opcr_id', $opcr_id)
                            ->join(
                                'office_performance_commitment_ratings',
                                'office_performance_commitment_ratings.success_indicator_id',
                                'success_indicators.id'
                            )
                            ->get();
                        $off = OfficeAccountable::where("idpaps", $item->id)->get();
                        $office_accountable = $off->pluck('office_accountable');
                        $targets = OpcrTarget::select(
                            "opcr_accomplishments.actual_accomplishments",
                            "opcr_accomplishments.quantity",
                            "opcr_targets.target_success_indicator",
                            "opcr_targets.quantity AS target_quantity"
                        )
                            ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
                            ->where("opcr_targets.idpaps", $item->id)
                            ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
                            ->get()
                            ->map(function ($item) {
                                //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                                return [
                                    'target_success_indicator' => $item->target_success_indicator,
                                    'quantity' => $item->target_quantity,
                                    'actual_accomplishment' => $item->actual_accomplishments,
                                    'quantity_accomplished' => $item->quantity,
                                ];
                            });

                        return [
                            "paps" => $item->paps_desc,
                            "success_indicator" => $success_indicator,
                            "office_accountable" => $office_accountable,
                            "targets" => $targets,
                        ];
                    });
                return [
                    "mfo_id" => $item->mfo_id,
                    "mfo_desc" => $item->mfo_desc,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    "paps" => $paps,
                ];
            });
        //return $opcrs;
        //return $mfos;
        //dd($opcrs);

        $datum = [
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'date_now' => $date_now,
            'opcr_date' => $opcr_date,
            'mooe' => $mooe,
            'ps' => $ps,
            'mfo' => $data,
            'FFUNCCOD' => $FFUNCCOD,
            'opcr_id' => $opcr_id,
        ];
        return $datum;
    }
    public function print_class2(Request $request)
    {
        //$opcr_id=request('opcr_id');
        // $opcr_id=$request->opcr_id;
        // $mooe=$request->mooe;
        // $ps=$request->ps;
        // $FFUNCCOD=$request->FFUNCCOD;
        //dsdd($opcr_id);
        $FFUNCCOD = "1121";
        $mooe = "5,780,999.50";
        $ps = "9,431,999.33";
        $opcr_id = "2";
        $head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
            ->where('role', 'like', '%Department Head%')
            ->first();
        $dept_head = Str::upper($head->name);
        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        $start = $dateStart->format('F');
        $end = $dateEnd->format('F Y');
        $opcr_date = $start . " to " . $end;
        $opcr_date = Str::upper($opcr_date);
        //dd($opcr_date);
        $date_now = Carbon::now()->format('F d, Y');
        $ave_sum = OfficePerformanceCommitmentRating::select(DB::raw('(rating_q+rating_e+rating_t)/3 AS average_sum'))
            ->where('office_performance_commitment_ratings', $opcr_id)
            ->sum();
        // dd($ave_sum);
        $data = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
            ->orderBy('mfo_desc', 'asc')
            ->get()
            ->map(function ($item) use ($mooe, $ps, $opcr_id) {
                $paps = ProgramAndProject::where('idmfo', $item->id)
                    ->get()
                    ->map(function ($item) use ($mooe, $ps, $opcr_id) {
                        $success_indicator = SuccessIndicator::where("idpaps", $item->id)
                            ->where('opcr_id', $opcr_id)
                            ->join(
                                'office_performance_commitment_ratings',
                                'office_performance_commitment_ratings.success_indicator_id',
                                'success_indicators.id'
                            )
                            ->get();
                        $off = OfficeAccountable::where("idpaps", $item->id)->get();
                        $office_accountable = $off->pluck('office_accountable');
                        $targets = OpcrTarget::select(
                            "opcr_accomplishments.actual_accomplishments",
                            "opcr_accomplishments.quantity",
                            "opcr_targets.target_success_indicator",
                            "opcr_targets.quantity AS target_quantity"
                        )
                            ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
                            ->leftJoin("office_performance_commitment_ratings", "office_performance_commitment_ratings.")
                            ->where("opcr_targets.idpaps", $item->id)
                            ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
                            ->get()
                            ->map(function ($item) {
                                //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                                return [
                                    'target_success_indicator' => $item->target_success_indicator,
                                    'quantity' => $item->target_quantity,
                                    'actual_accomplishment' => $item->actual_accomplishments,
                                    'quantity_accomplished' => $item->quantity,
                                ];
                            });

                        return [
                            "paps" => $item->paps_desc,
                            "success_indicator" => $success_indicator,
                            "office_accountable" => $office_accountable,
                            "targets" => $targets,
                        ];
                    });
                return [
                    "mfo_id" => $item->mfo_id,
                    "mfo_desc" => $item->mfo_desc,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    "paps" => $paps,
                ];
            });
        //return $opcrs;
        //return $mfos;
        //dd($opcrs);
        $datum = [
            'dept_head' => $dept_head,
            'date_now' => $date_now,
            'opcr_date' => $opcr_date,
            'mooe' => $mooe,
            'ps' => $ps,
            'mfo' => $data
        ];
        return $datum;
    }
    public function print_class3(Request $request)
    {
        // $total=$request->total;
        // $ave=$request->ave;
        // $dept_head=$request->dept_head;

        // $opcr_date=$request->opcr_date;

        // $mooe=$request->mooe;
        // $ps =$request->ps;
        // $FFUNCCOD = $request->FFUNCCOD;
        // $opcr_id=$request->opcr_id;
        // $dept_name= $request->dept_name;
        $total = "55";
        $ave = "3.0";
        $dept_head = "JOYZEL R. ODI";

        $opcr_date = "JULY TO DECEMBER 2023";

        $mooe = "8,951,455.00";
        $ps = "4,533,455.00";
        $FFUNCCOD = "1121";
        $opcr_id = "2";
        $dept_name = "Department Name";
        $data = ProgramAndProject::select(
            'major_final_outputs.mfo_desc',
            'opcr_targets.target_success_indicator',
            'office_performance_commitment_ratings.rating_t',
            'office_performance_commitment_ratings.rating_e',
            'office_performance_commitment_ratings.rating_q',
            'office_performance_commitment_ratings.remarks',
            'office_accountables.office_accountable',
            'opcr_accomplishments.actual_accomplishments',
        )
            ->where('program_and_projects.FFUNCCOD', $FFUNCCOD)
            ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
            ->leftjoin('success_indicators', 'success_indicators.idpaps', 'program_and_projects.id')
            ->leftjoin(
                'office_performance_commitment_ratings',
                'office_performance_commitment_ratings.success_indicator_id',
                'success_indicators.id'
            )
            ->leftjoin('opcr_targets', 'opcr_targets.idpaps', 'program_and_projects.id')
            ->leftjoin('opcr_accomplishments', 'opcr_accomplishments.idpaps', 'program_and_projects.id')
            ->leftjoin('office_accountables', 'office_accountables.idpaps', 'program_and_projects.id')
            ->join('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
            ->orderBy('major_final_outputs.mfo_desc', 'asc')
            ->orderBy('program_and_projects.paps_desc', 'asc')
            ->get()
            ->map(function ($item) use ($total, $ave, $dept_name, $dept_head, $opcr_date, $mooe, $ps, $FFUNCCOD, $opcr_id) {
                return [
                    "total" => $total,
                    "ave" => $ave,
                    "dept_head" => $dept_head,
                    "opcr_date" => $opcr_date,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    "FFUNCCOD" => $FFUNCCOD,
                    "opcr_id" => $opcr_id,
                    "mfo_desc" => $item->mfo_desc,
                    "target_success_indicator" => $item->target_success_indicator,
                    "rating_t" => $item->rating_t,
                    "rating_e" => $item->rating_e,
                    "rating_q" => $item->rating_q,
                    "remarks" => $item->remarks,
                    "office_accountable" => $item->office_accountable,
                    "actual_accomplishments" => $item->actual_accomplishments,
                    "dept_name" => $dept_name
                ];
            });
        return $data;
    }
    public function print_main(Request $request)
    {
        $total = $request->total;
        $ave = $request->ave;
        $dept_head = $request->dept_head;

        $opcr_date = $request->opcr_date;

        $mooe = $request->mooe;
        $ps = $request->ps;
        $FFUNCCOD = $request->FFUNCCOD;
        $opcr_id = $request->opcr_id;


        // $total="55";
        // $ave="3.0";
        // $dept_head="JOYZEL R. ODI";

        // $opcr_date="JULY TO DECEMBER 2023";

        // $mooe="8,951,455.00";
        // $ps ="4,533,455.00";
        // $FFUNCCOD = "1121";
        // $opcr_id="2";
        $approver = 'Dorothy Montejo Gonzaga';
        $pos = 'Governor';
        if ($FFUNCCOD == '1021') {
            $approver = 'Jayvee Tyron L. Uy';
            $pos = 'Vice Governor';
        }
        if ($FFUNCCOD == '1016') {
            $approver = 'Jayvee Tyron L. Uy';
            $pos = 'Vice Governor';
        }

        $date_now = Carbon::now()->format('F d, Y');
        return [
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'date_now' => $date_now,
            'opcr_date' => $opcr_date,
            'mooe' => $mooe,
            'ps' => $ps,
            'FFUNCCOD' => $FFUNCCOD,
            'opcr_id' => $opcr_id,
            "approver" => $approver,
            "position" => $pos,
        ];
    }
    public function print_mfo(Request $request)
    {
        // $mfos = MajorFinalOutput::where('FFUNCCOD', $request->FFUNCCOD)
        //     ->whereNull('from_excel')
        //     ->OrderBy('id', 'ASC')
        //     ->get()
        //     ->map(function ($item) use ($request) {
        //         return [
        //             'idmfo' => $item->id,
        //             'mfo_desc' => $item->mfo_desc,
        //             'FFUNCCOD' => $request->FFUNCCOD,
        //             'opcr_id' => $request->opcr_id,
        //         ];
        //     });
        $mfos = MajorFinalOutput::where('FFUNCCOD', $request->FFUNCCOD)
            ->whereNull('from_excel')
            ->whereExists(function ($query) use ($request) {
                $query->select(DB::raw(1))
                    ->from('opcr_targets')
                    ->join('program_and_projects', 'opcr_targets.idpaps', '=', 'program_and_projects.id')
                    ->where('opcr_targets.office_performance_commitment_rating_list_id', $request->opcr_id)
                    ->whereRaw('program_and_projects.idmfo = major_final_outputs.id');
            })
            ->orderBy('id', 'ASC')
            ->get()
            ->map(function ($item) use ($request) {
                return [
                    'idmfo' => $item->id,
                    'mfo_desc' => $item->mfo_desc,
                    'FFUNCCOD' => $request->FFUNCCOD,
                    'opcr_id' => $request->opcr_id,
                ];
            });
        return $mfos;
    }
    public function print_paps(Request $request)
    {
        // ->join('opcr_targets', 'opcr_targets.idpaps', 'program_and_projects.id')
        //     ->join(
        //         'office_performance_commitment_ratings',
        //         'office_performance_commitment_ratings.id_opcr_target',
        //         'opcr_targets.id'
        //     )
        //     ->where('office_performance_commitment_rating_list_id.id', $request->opcr_id)
        //     ->groupBy('program_and_projects.id')
        $paps = ProgramAndProject::select(
            'program_and_projects.id',
            'program_and_projects.paps_desc'
        )
            ->where('program_and_projects.idmfo', $request->idmfo)
            ->where('opcr_targets.office_performance_commitment_rating_list_id', $request->opcr_id)
            ->join('opcr_targets', 'opcr_targets.idpaps', 'program_and_projects.id')
            ->OrderBy('program_and_projects.id', 'ASC')
            ->groupBy('program_and_projects.id')
            ->get()
            ->map(function ($item) use ($request) {
                return [
                    'idpaps' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'FFUNCCOD' => $request->FFUNCCOD,
                    'opcr_id' => $request->opcr_id,
                ];
            });
        return $paps;
    }
    public function print_success_targets(Request $request)
    {
        $idpaps = $request->idpaps;
        $opcr_id = $request->opcr_id;
        //rating q rating_e nabali
        $targets = OpcrTarget::select(
            "opcr_accomplishments.actual_accomplishments",
            "opcr_accomplishments.quantity",
            "opcr_targets.target_success_indicator",
            "opcr_targets.quantity AS target_quantity",
            "ratings.numerical_rating AS rating_e",
            "qualities.numerical_rating AS rating_q",
            "timelinesses.numerical_rating AS rating_t",
            DB::raw('ROUND((COALESCE(qualities.numerical_rating, 0) + COALESCE(ratings.numerical_rating, 0) + COALESCE(timelinesses.numerical_rating, 0)) / (CASE WHEN qualities.numerical_rating IS NULL AND ratings.numerical_rating IS NULL THEN 1 WHEN qualities.numerical_rating IS NULL AND timelinesses.numerical_rating IS NULL THEN 1 WHEN ratings.numerical_rating IS NULL AND timelinesses.numerical_rating IS NULL THEN 1 WHEN qualities.numerical_rating IS NULL THEN 2 WHEN ratings.numerical_rating IS NULL THEN 2 WHEN timelinesses.numerical_rating IS NULL THEN 2 ELSE 3 END),2) AS average_rating'),
            "opcr_accomplishments.remarks_final",
        )
            ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
            ->leftJoin("ratings", "opcr_accomplishments.ratings_id", "ratings.id")
            ->leftJoin("qualities", "opcr_accomplishments.quality_id", "qualities.id")
            ->leftJoin("timelinesses", "opcr_accomplishments.timeliness_id", "timelinesses.id")
            ->where("opcr_targets.idpaps", $idpaps)
            ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
            ->get()
            ->map(function ($item) {
                // $ave = number_format($item->average_rating, 2, '.', ',');
                //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                return [
                    'target_success_indicator' => $item->target_success_indicator,
                    'quantity' => $item->target_quantity,
                    'actual_accomplishment' => $item->actual_accomplishments,
                    'quantity_accomplished' => $item->quantity,
                    'rating_q' => $item->rating_q,
                    'rating_e' => $item->rating_e,
                    'rating_t' => $item->rating_t,
                    'average_rating' => $item->average_rating,
                    'remarks_final' => $item->remarks_final,
                ];
            });
        return $targets;
    }

    public function print_rating(Request $request)
    {
        $idpaps = $request->idpaps;
        $opcr_id = $request->opcr_id;
        $success_indicator = SuccessIndicator::where("idpaps", $idpaps)
            ->where('opcr_id', $opcr_id)
            ->join(
                'office_performance_commitment_ratings',
                'office_performance_commitment_ratings.success_indicator_id',
                'success_indicators.id'
            )
            ->get()
            ->map(function ($item) {
                $rating_q = number_format($item->rating_q, 2);
                $rating_e = number_format($item->rating_e, 2);
                $rating_t = number_format($item->rating_t, 2);
                $sum = ($rating_e + $rating_q + $rating_t) / 3;
                $ave = number_format($sum, 2, '.', '');
                return [
                    'rating_q' => $rating_q,
                    'rating_e' => $rating_e,
                    'rating_t' => $rating_t,
                    'ave' => $ave,
                    'remarks' => $item->remarks,
                ];
            });
        return $success_indicator;
    }
    public function print_office(Request $request)
    {
        $idpaps = $request->idpaps;
        $office_accountable = OfficeAccountable::where('idpaps', $idpaps)
            ->groupBy('office_accountable')->get();
        return $office_accountable;
    }

    public function print(Request $request)
    {
        $link = $request->link;
        $link = str_replace("abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-", "", $link);

        $link = "http://" . $link;
        //dd($link);
        return inertia('OPCR/Form/Print', [
            "link" => $link,
        ]);
    }

    //SUBMIT/RECALL OPCR RATINGS
    public function submit_recall(Request $request, $opcr_id)
    {
        $opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $curr_stat  = $request->input('data.curr_stat');
        $staged_for = $request->input('data.staged_for');
        if ($opcr) {
            // dd($opcr, $request->data['curr_stat']);
            $opcr->rating_status = $staged_for;
            $opcr->save();
            // Prepare message
            if ($curr_stat == -1) {
                $message = "OPCR submitted";
            } elseif ($curr_stat == 0 && $staged_for == -1) {
                $message = "OPCR submission recalled successfully";
            } else {
                $message = "Rating status updated";
            }
            return redirect()->back()->with('message', $message);
        } else {
            return redirect()->back()->with('error', 'OPCR Not found!!!');
        }
        // dd($opcr_id);
    }
    //PRINT ACCOMPLISHMENTS
    public function print_accomplishment(Request $request)
    {

        $opcr_id = $request->opcr_id;
        $FFUNCCOD = $request->FFUNCCOD;
        //REVISION PLAN ID

        $mooe = "0.00";
        $ps = "0.00";
        $empl_id = "";
        //Department Head
        $dept_head = "";
        $suff = "";
        $post = "";
        // Assistant PG Head
        $assistant_pg_head = "";
        $assistant_pg_head2 = "";
        $assistant_pg_head3 = "";

        if ($FFUNCCOD) {
            $office_id = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first()->department_code;
            $empl_id = Office::where('id', $office_id)->first()->empl_id;
            $employee = UserEmployees::where('empl_id', $empl_id)->first();
            $dept_head = $employee->first_name . ' ' . $employee->middle_name[0] . '. ' .
                $employee->last_name;
            $suff = $employee->suffix_name;

            if ($suff) {
                $dept_head = $dept_head . ', ' . $suff;
            }
            $post = $employee->postfix_name;
            if ($post) {
                $dept_head = $dept_head . ', ' . $post;
            }
        }
        //Get OPCR Date
        $opcr_date = "";
        $dateStart = "";
        $dateEnd = "";
        $start = "";
        $end = "";

        $ap_head_2 = [];
        $ap_head_3 = [];
        $my_opcr = "";
        if ($opcr_id) {
            $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
            // dd($opcr_id);
            $dept_head1 = $my_opcr->pg_head? $my_opcr->pg_head : $dept_head;
            $dept_head = Str::upper($dept_head1);
            $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
            $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
            $start = $dateStart->format('F');
            $end = $dateEnd->format('F Y');
            $opcr_date = $start . " to " . $end;
            $opcr_date = Str::upper($opcr_date);
            if ($my_opcr) {
                $ap_head = UserEmployees::where('department_code', $my_opcr->department_code)
                    ->where('salary_grade', '24')
                    ->where('active_status', 'ACTIVE')
                    ->get();
                // dd($opcr_id,$my_opcr,$ap_head);
                if ($my_opcr->assistant_pg_head) {
                    // ASSISTANT PG HEAD
                    $assistant_pg_head = $my_opcr->assistant_pg_head;
                } else {
                    // ASSISTANT PG HEAD
                    $ap_head_m = UserEmployees::where('department_code', $office_id)
                        ->where('salary_grade', '24')
                        ->where('active_status', 'ACTIVE')
                        ->get();
                    // dd($ap_head_m);
                    if (count($ap_head_m) > 0) {
                        $ap_head = $ap_head_m[0];
                        $assistant_pg_head = $ap_head->first_name . ' ' . $ap_head->middle_name[0] . '. ' .
                            $ap_head->last_name;
                        $ap_suffix = $ap_head->suffix_name;
                        $ap_post = $ap_head->postfix_name;
                        if ($ap_suffix) {
                            $assistant_pg_head = $assistant_pg_head . ', ' . $ap_suffix;
                        }
                        if ($ap_post) {
                            $assistant_pg_head = $assistant_pg_head . ', ' . $ap_post;
                        }

                        if ($my_opcr->department_code == '17' || $my_opcr->department_code == '11') {
                            $ap_head_2 = $ap_head_m[1] ?? null;
                            if (!$ap_head_2) {
                                $assistant_pg_head2 = '';
                            }else{
                                $ap_head_2 = $ap_head_m[1];
                                $assistant_pg_head2 = $ap_head_2->first_name . ' ' . $ap_head_2->middle_name[0] . '. ' .
                                    $ap_head_2->last_name;
                                $ap2_suffix = $ap_head_2->suffix_name;
                                $ap2_post = $ap_head_2->postfix_name;
                                if ($ap2_suffix) {
                                    $assistant_pg_head2 = $assistant_pg_head2 . ', ' . $ap2_suffix;
                                }
                                if ($ap2_post) {
                                    $assistant_pg_head2 = $assistant_pg_head2 . ', ' . $ap2_post;
                                }
                            }
                            // dd($ap_head_2);

                        }
                        if ($my_opcr->department_code == '17') {
                            $ap_head_3 = $ap_head_m[2] ?? null;
                            if(!$ap_head_3){
                                $assistant_pg_head3 ='';
                            }else{
                                $assistant_pg_head3 = $ap_head_3->first_name . ' ' . $ap_head_3->middle_name[0] . '. ' .
                                $ap_head_3->last_name;
                                $ap3_suffix = $ap_head_3->suffix_name;
                                $ap3_post = $ap_head_3->postfix_name;
                                if ($ap3_suffix) {
                                    $assistant_pg_head3 = $assistant_pg_head3 . ', ' . $ap3_suffix;
                                }
                                if ($ap3_post) {
                                    $assistant_pg_head3 = $assistant_pg_head3 . ', ' . $ap3_post;
                                }
                            }

                        }
                    }
                }

                if ($my_opcr->assistant_pg_head_2) {
                    // ASSISTANT PG HEAD 2
                    $assistant_pg_head2 = $my_opcr->assistant_pg_head_2;
                }
                if ($my_opcr->assistant_pg_head_3) {
                    // ASSISTANT PG HEAD 3
                    $assistant_pg_head3 = $my_opcr->assistant_pg_head_3;
                }
            }
        }
        //Carbon Date
        $date_now = Carbon::now()->format('F d, Y');
        //TOTAL, SUM, AVERAGE
        // $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
        //     ->where('opcr_id', $opcr_id)
        //     ->first()->average_sum;
        // $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        // if ($count < 1) {
        //     $count = 1;
        // };
        // $total = number_format($averageSum, 2);
        // $ave_pre = $total / $count;
        // $ave = number_format($ave_pre, 2);
        $total = number_format($request->total, 2);
        $ave = number_format($request->average, 2);
        $pmt_chair = "Ivan Kleb N. Ulgasan, CESE";
        // dd($total);
        // dd("asasasasas");
        $approver = 'Engr. Raul G. Mabanglo';
        $pos = 'Governor';
        $isPA1 = $this->isPA($opcr_date, 'PA 1');
        $average = round(
            OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)
                ->whereHas('opcrTarget', function ($query) {
                    $query->where('is_included', '1');
                })
                ->get()
                ->map(function ($item) {
                    $qVals = collect([$item->q1, $item->q2, $item->q3])->filter(fn($v) => $v > 0);
                    $eVals = collect([$item->e1, $item->e2, $item->e3])->filter(fn($v) => $v > 0);
                    $tVals = collect([$item->t1, $item->t2, $item->t3])->filter(fn($v) => $v > 0);

                    $qAve = $qVals->count() ? $qVals->avg() : null;
                    $eAve = $eVals->count() ? $eVals->avg() : null;
                    $tAve = $tVals->count() ? $tVals->avg() : null;

                    $finalVals = collect([$qAve, $eAve, $tAve])->filter(fn($v) => $v !== null);

                    return $finalVals->count()
                        ? round($finalVals->avg(), 2)
                        : null;
                })
                ->filter()
                ->avg(),
            2
        );
        // $average = $avet->pluck("average");
        // $average = $plucked_average->avg();

        // ->selectRaw("
        //     ROUND(
        //         AVG(
        //             (COALESCE(rating_q, 0) + COALESCE(rating_e, 0) + COALESCE(rating_t, 0)) /
        //             NULLIF(
        //                 (rating_q IS NOT NULL) +
        //                 (rating_e IS NOT NULL) +
        //                 (rating_t IS NOT NULL),
        //                 0
        //             )
        //         ),
        //         2
        //     ) AS average_rating
        // ")
        // ->value('average_rating');
        // dd("average",$average);
        $data = $this->model->select(
            'office_performance_commitment_ratings.id',
            'office_performance_commitment_ratings.success_indicator_id',
            'office_performance_commitment_ratings.accomplishments',
            'office_performance_commitment_ratings.rating_q',
            'office_performance_commitment_ratings.rating_e',
            'office_performance_commitment_ratings.rating_t',
            'office_performance_commitment_ratings.q1',
            'office_performance_commitment_ratings.q2',
            'office_performance_commitment_ratings.q3',
            'office_performance_commitment_ratings.e1',
            'office_performance_commitment_ratings.e2',
            'office_performance_commitment_ratings.e3',
            'office_performance_commitment_ratings.t1',
            'office_performance_commitment_ratings.ppdo_q1',
            'office_performance_commitment_ratings.ppdo_q2',
            'office_performance_commitment_ratings.ppdo_q3',
            'office_performance_commitment_ratings.ppdo_e1',
            'office_performance_commitment_ratings.ppdo_e2',
            'office_performance_commitment_ratings.ppdo_e3',
            'office_performance_commitment_ratings.ppdo_t1',
            'office_performance_commitment_ratings.remarks',
            'office_performance_commitment_ratings.FFUNCCOD',
            'office_performance_commitment_ratings.opcr_id',
            'office_performance_commitment_ratings.id_opcr_target',
            'office_performance_commitment_ratings.id_paps',
            'SU.success_indicator',
            // 'off.office_accountable',
            'PAPS.paps_desc',
            'mfo.mfo_desc',
            'mfo.created_at',
            'opcr_targets.quantity',
            'PAPS.id AS idpaps',
            'mfo.from_excel',
            'mfo.id AS mfo_idmfo',
            'PAPS.idmfo AS paps_idmfo',
            'opcr_targets.target_success_indicator AS target_success_indicator',
            'opcr_targets.quantity_unit',
            'opcr_targets.is_included',
            'os.performance_measure',
            'os.efficiency1',
            'os.efficiency2',
            'os.efficiency3',
            'os.timeliness',
            'os.prescribed_period',
            'os.office_accountable',

        )
            ->with([
                'opcrtarget',
                'opcrList',
                'paps',
                'paps.MFO',
                'paps.opcr_stardard',
                'paps.divisionOutputs',
                'paps.divisionOutputs.dpcrTargets',
                'paps.divisionOutputs.dpcrTargets.ipcr_Semestral',
                'paps.divisionOutputs.dpcrTargets.monthlyTargets',
            ])
            ->leftjoin('success_indicators AS SU', 'SU.id', 'office_performance_commitment_ratings.success_indicator_id')
            ->leftjoin('program_and_projects AS PAPS', 'PAPS.id', 'office_performance_commitment_ratings.id_paps')
            ->leftjoin('opcr_standards AS os', 'os.idpaps', 'PAPS.id')
            ->leftjoin('office_accountables AS off', 'off.idpaps', 'PAPS.id')
            ->join('major_final_outputs AS mfo', 'mfo.id', 'PAPS.idmfo')
            // ->join('opcr_targets', 'opcr_targets.idpaps', 'PAPS.id')
            ->leftjoin('opcr_targets', 'opcr_targets.id', 'office_performance_commitment_ratings.id_opcr_target')
            ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
            ->where('opcr_targets.is_included', '1')
            ->whereNull('PAPS.deleted_at')
            ->whereNull('mfo.from_excel')
            ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
            ->orderBy('mfo.id', 'asc')
            ->orderBy('PAPS.id', 'asc')
            ->groupBy('office_performance_commitment_ratings.id')
            ->get()
            ->map(function ($item) use (
                $opcr_id,
                $FFUNCCOD,
                $total,
                $ave,
                $dept_head,
                $opcr_date,
                $mooe,
                $ps,
                $date_now,
                $approver,
                $pos,
                $isPA1,
                $pmt_chair,
                $average,
                $assistant_pg_head,
                $assistant_pg_head2,
                $assistant_pg_head3,
                $request,
                $my_opcr
            ) {
                // dd($item);
                // dd($my_opcr);
                $efficiency1 = $item->efficiency1;
                $efficiency2 = $item->efficiency2;
                $efficiency3 = $item->efficiency3;
                $performance_measure = $item->performance_measure;
                $timeliness = $item->timeliness;


                $prescribed_period = $item->prescribed_period;
                $paps_desc = $item->paps_desc;
                $office_accountable = $item->office_accountable;
                if ($efficiency1 === 'No' && $timeliness === 'No') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency";
                } elseif ($efficiency1 === 'Yes') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency within {$prescribed_period}";
                } else {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency on or before {$timeliness}";
                }


                $quality_rating_description = $this->qualityRatingDescription($item->rating_q);
                $efficiency_rating_description = $this->efficiencyRatingDescription($item->rating_e);
                $prescribed_period_description = "";

                if ($item->rating_q == 2 || $item->rating_q == 1 || $item->rating_e == 2 || $item->rating_e == 1) {
                    $prescribed_period_description = $this->prescribedPeriodRatingDescription_below2($item->e1);
                } else {
                    $prescribed_period_description = $this->prescribedPeriodDescription($item->e1);
                }

                $timeliness_description = "";
                if ($item->rating_q == 2 || $item->rating_q == 1 || $item->rating_e == 2 || $item->rating_e == 1) {
                    $timeliness_description = $this->timelinessRatingDescription_below2($item->rating_t);
                } else {
                    $timeliness_description = $this->timelinessDescription($item->rating_t);
                }

                // dd($item);
                $Actual_Accomplishment = "";
                if ($paps_desc) {
                    if ($efficiency1 == "Yes") {
                        $Actual_Accomplishment = $timeliness == "No" ? $performance_measure . " " . $paps_desc . " with " . $quality_rating_description . " rating in efficiency, " . $efficiency_rating_description . " rating in quality/effectiveness " . $prescribed_period_description : $performance_measure . " " . $paps_desc . " with " . $quality_rating_description . " rating in efficiency, " . $efficiency_rating_description . " rating in quality/effectiveness ";;
                    } elseif ($efficiency1 == "No" && $timeliness != null && $timeliness != "No") {
                        $Actual_Accomplishment = $performance_measure . " " . $paps_desc . " with " . $quality_rating_description . " rating in efficiency, " . $efficiency_rating_description . " rating in quality/effectiveness " . $timeliness_description;
                    } elseif ($efficiency1 == "No" && $timeliness == "No") {
                        $Actual_Accomplishment = $performance_measure . " " . $paps_desc . " with " . $quality_rating_description . " rating in efficiency, " . $efficiency_rating_description . " rating in quality/effectiveness ";
                    }
                }

                // dd($Actual_Accomplishment);
                $approver = 'Engr. Raul G. Mabanglo';
                // true
                if ($isPA1) {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pmt_chair = 'Lewis Jake G. Caiman, CPA';
                }
                $pos = 'Governor';
                if ($FFUNCCOD == '1021') {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pos = 'Vice Governor';
                    if ($isPA1) {
                        $approver = 'Jayvee Tyron L. Uy';
                    }
                }
                if ($FFUNCCOD == '1016') {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pos = 'Vice Governor';
                    if ($isPA1) {
                        $approver = 'Jayvee Tyron L. Uy';
                    }
                }

                // dd($isPA1);
                // dd($item->opcrList);
                // dd($item->id_opcr_target);
                $rating_type = optional(optional($item)->opcrList)->rating_type ?? "0";
                $monthly_ratings = [];
                $var_q = 0;
                $var_e = 0;
                $var_t = 0;
                $ave_qet = 0;
                $ave = $average;
                // dd($item);
                // dd($item, $monthly_ratings);
                if ($rating_type == "0") {
                    $qValues = array_filter([
                        $item['q1'] ?? 0,
                        $item['q2'] ?? 0,
                        $item['q3'] ?? 0
                    ], fn($v) => $v != 0);

                    $eValues = array_filter([
                        $item['e1'] ?? 0,
                        $item['e2'] ?? 0,
                        $item['e3'] ?? 0
                    ], fn($v) => $v != 0);

                    $tValues = array_filter([
                        $item['t1'] ?? 0
                    ], fn($v) => $v != 0);

                    // --- Compute averages, default to 0 if no non-zero values ---
                    $var_q = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;
                    $var_e = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;
                    $var_t = count($tValues) > 0 ? round(array_sum($tValues) / count($tValues), 2) : 0;

                    $div = 3;
                    // if (floatval($var_q) <= 0) {
                    //     $div = $div - 1;
                    // }
                    // if (floatval($var_e) <= 0) {
                    //     $div = $div - 1;
                    // }
                    // if (floatval($var_t) <= 0) {
                    //     $div = $div - 1;
                    // }
                    try {
                        if (intval($var_q) < 1) {
                            $div = $div - 1;
                        }
                    } catch (Exception $e) {
                        $div = $div - 1;
                    }
                    try {
                        if (intval($var_e) < 1) {
                            $div = $div - 1;
                        }
                    } catch (Exception $e) {
                        $div = $div - 1;
                    }
                    try {
                        if (intval($var_t) < 1) {
                            $div = $div - 1;
                        }
                    } catch (Exception $e) {
                        $div = $div - 1;
                    }
                    $sum = $var_q + $var_e + $var_t;
                    $ave_qet = 0;
                    if ($div > 0) {
                        $ave_qet = $sum / $div;
                        $ave_qet = number_format(floatval($ave_qet), 2);
                    }
                    $ave = $average;
                    // dd("0");
                } else if($rating_type == "1"){
                    // dd("1");
                    //
                    $monthly_ratings = calculateMonthlyAverages($item, [
                        'q1',
                        'q2',
                        'q3',
                        'e1',
                        'e2',
                        'e3',
                        't1'
                    ]);

                    // dd()
                    // dd($item->id);
                    // if (intval($item->id) === 684) {
                    //     dd($monthly_ratings);
                    // } else {
                    //     // dd("wala")
                    // }
                    $qValues = array_filter([
                        $monthly_ratings['q1'] ?? 0,
                        $monthly_ratings['q2'] ?? 0,
                        $monthly_ratings['q3'] ?? 0
                    ], fn($v) => $v != 0);

                    $eValues = array_filter([
                        $monthly_ratings['e1'] ?? 0,
                        $monthly_ratings['e2'] ?? 0,
                        $monthly_ratings['e3'] ?? 0
                    ], fn($v) => $v != 0);

                    $tValues = array_filter([
                        $monthly_ratings['t1'] ?? 0
                    ], fn($v) => $v != 0);

                    // --- Compute averages, default to 0 if no non-zero values ---
                    $var_q = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;
                    $var_e = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;
                    $var_t = count($tValues) > 0 ? round(array_sum($tValues) / count($tValues), 2) : 0;

                    // --- Compute how many valid groups to divide by ---
                    $div = 3;

                    try {
                        if (intval($var_q) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    try {
                        if (intval($var_e) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    try {
                        if (intval($var_t) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    // --- Compute overall QET average ---
                    $sum = $var_q + $var_e + $var_t;
                    $ave_qet = 0;

                    if ($div > 0) {
                        $ave_qet = $sum / $div;
                        $ave_qet = number_format(floatval($ave_qet), 2);
                    }
                    $ave = $request->average;
                    // dd($item->id, $item, $monthly_ratings, $monthly_ratings['q1'], $var_q);
                } else if($rating_type == "2"){
                    // $monthly_ratings = calculateMonthlyAveragesPPDO($item, [
                    //     'ppdo_q1',
                    //     'ppdo_q2',
                    //     'ppdo_q3',
                    //     'ppdo_e1',
                    //     'ppdo_e2',
                    //     'ppdo_e3',
                    //     'ppdo_t1'
                    // ]);
                    // if($item->ppdo_q1>0){
                    //     dd($item, $monthly_ratings);
                    // }
                    $qValues = array_filter([
                        $item->ppdo_q1 ?? 0,
                        $item->ppdo_q2 ?? 0,
                        $item->ppdo_q3 ?? 0,
                    ], fn($v) => $v != 0);


                    $eValues = array_filter([
                        $item->ppdo_e1 ?? 0,
                        $item->ppdo_e2 ?? 0,
                        $item->ppdo_e3 ?? 0,
                    ], fn($v) => $v != 0);
                    $tValues = array_filter([
                        $item->ppdo_t1?? 0
                    ], fn($v) => $v != 0);

                    // --- Compute averages, default to 0 if no non-zero values ---
                    $var_q = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;
                    $var_e = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;
                    $var_t = count($tValues) > 0 ? round(array_sum($tValues) / count($tValues), 2) : 0;

                    // --- Compute how many valid groups to divide by ---
                    $div = 3;

                    try {
                        if (intval($var_q) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    try {
                        if (intval($var_e) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    try {
                        if (intval($var_t) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    // --- Compute overall QET average ---
                    $sum = $var_q + $var_e + $var_t;
                    $ave_qet = 0;

                    if ($div > 0) {
                        $ave_qet = $sum / $div;
                        $ave_qet = number_format(floatval($ave_qet), 2);
                    }
                    $ave = $request->average;
                } else{
                    $monthly_ratings = calculateMonthlyAverages($item, [
                        'ppdo_q1',
                        'ppdo_q2',
                        'ppdo_q3',
                        'ppdo_e1',
                        'ppdo_e2',
                        'ppdo_e3',
                        'ppdo_t1'
                    ]);

                    // dd()
                    // dd($item->id);
                    // if (intval($item->id) === 684) {
                    //     dd($monthly_ratings);
                    // } else {
                    //     // dd("wala")
                    // }
                    $qValues = array_filter([
                        $monthly_ratings['ppdo_q1'] ?? 0,
                        $monthly_ratings['ppdo_q2'] ?? 0,
                        $monthly_ratings['ppdo_q3'] ?? 0
                    ], fn($v) => $v != 0);

                    $eValues = array_filter([
                        $monthly_ratings['ppdo_e1'] ?? 0,
                        $monthly_ratings['ppdo_e2'] ?? 0,
                        $monthly_ratings['ppdo_e3'] ?? 0
                    ], fn($v) => $v != 0);

                    $tValues = array_filter([
                        $monthly_ratings['ppdo_t1'] ?? 0
                    ], fn($v) => $v != 0);

                    // --- Compute averages, default to 0 if no non-zero values ---
                    $var_q = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;
                    $var_e = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;
                    $var_t = count($tValues) > 0 ? round(array_sum($tValues) / count($tValues), 2) : 0;

                    // --- Compute how many valid groups to divide by ---
                    $div = 3;

                    try {
                        if (intval($var_q) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    try {
                        if (intval($var_e) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    try {
                        if (intval($var_t) < 1) {
                            $div--;
                        }
                    } catch (Exception $e) {
                        $div--;
                    }

                    // --- Compute overall QET average ---
                    $sum = $var_q + $var_e + $var_t;
                    $ave_qet = 0;

                    if ($div > 0) {
                        $ave_qet = $sum / $div;
                        $ave_qet = number_format(floatval($ave_qet), 2);
                    }
                    $ave = $request->average;
                }
                // dd($rating_type);
                $adj = "Outstanding";

                if ($ave >= 4.51) {
                    $adj = "Outstanding";
                } else if ($ave >= 3.51) {
                    $adj = "Very Satisfactory";
                } else if ($ave >= 2.51) {
                    $adj = "Satisfactory";
                } else if ($ave >= 1.51) {
                    $adj = "Unsatisfactory";
                } else {
                    $adj = "Poor";
                }
                // dd($ave);
                // $quant = OpcrTarget::where()

                // dd("average: " . $ave);
                // dd($item->id);
                if ($item->id = 684) {
                    // dd($item);
                }
                return [
                    "id" => $item->id,
                    "success_indicator_id" => $item->success_indicator_id,
                    "accomplishments" => $item->accomplishments,
                    "rating_q" => $var_q,
                    "rating_e" => $var_e,
                    "rating_t" => $var_t,
                    "remarks" => $item->remarks,
                    "FFUNCCOD" => $item->FFUNCCOD,
                    "idpaps" => $item->idpaps,
                    "opcr_id" => $item->opcr_id,
                    "success_indicator" => $item->success_indicator,
                    "office_accountable" => $office_accountable,
                    "paps_desc" => $item->paps_desc,
                    "quantity" => $item->quantity . ' ' . $item->quantity_unit,
                    // "quantity_unit" => $item->quantity_unit,
                    "mfo_desc" => $item->mfo_desc,
                    "created_at" => $item->created_at,
                    "total" => $total,
                    "ave" => $ave,
                    "dept_head" => $dept_head,
                    "assistant_pg_head" => $my_opcr ? ($my_opcr->assistant_pg_head ? $my_opcr->assistant_pg_head : $assistant_pg_head) : $assistant_pg_head,
                    "assistant_pg_head2" => $assistant_pg_head2,
                    "assistant_pg_head3" => $assistant_pg_head3,
                    "opcr_date" => $opcr_date,
                    // "opcr_id" => $opcr_id,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    // "FFUNCCOD" => $FFUNCCOD,
                    "date_now" => $date_now,
                    "approver" => $approver,
                    "position" => $pos,
                    "ave_qet" => $ave_qet,
                    "target_success_indicator" => $su,
                    "adjectival" => $adj,
                    "pmt_chair" => $pmt_chair,
                    "overall_average" => $ave,
                    "Actual_Accomplishment" => $Actual_Accomplishment,
                    // "office_accountable" => $office_accountable
                    // "from_excel" => $item->from_excel,
                    // "mfo_idmfo" => $item->mfo_idmfo,
                    // "paps_idmfo" => $item->paps_idmfo
                    // "mfo"
                    // "paps" => optional($item)->paps,
                    // "id_paps" => $item->id_paps,
                    // "monthly_ratings" => $monthly_ratings
                ];
            });
        // dd(count($data));
        // dd(
        //     $data->pluck("paps"),
        //     $data->pluck('id_paps'),
        //     $data->pluck("rating_q"),
        //     $data->pluck("rating_e"),
        //     $data->pluck("rating_t"),
        //     $data
        // );
        if ($data->isEmpty()) {
            $data = collect([[
                "id" => null,
                "success_indicator_id" => 0,
                "accomplishments" => null,
                "rating_q" => null,
                "rating_e" => null,
                "rating_t" => null,
                "remarks" => null,
                "FFUNCCOD" => $FFUNCCOD,
                "idpaps" => null,
                "opcr_id" => $opcr_id,
                "success_indicator" => null,
                "office_accountable" => null,
                "paps_desc" => " ",
                "quantity" => null,
                "mfo_desc" => " ",
                "created_at" => null,
                "total" => null,
                "ave" => null,
                "dept_head" => null,
                "opcr_date" => $opcr_date,
                "mooe" => null,
                "ps" => null,
                "date_now" => now()->format('F d, Y'), // or fixed "June 25, 2025"
                "approver" => "Engr Raul G. Mabanglo",
                "position" => "Governor",
                "ave_qet" => null,
                "target_success_indicator" => null,
                "adjectival" => null
            ]]);
        }
        return $data;
        //********************************************** */


    }

    //PRINT ACCOMPLISHMENTS
    public function print_accomplishment_dual_score_system(Request $request)
    {

        $opcr_id = $request->opcr_id;
        $FFUNCCOD = $request->FFUNCCOD;
        //REVISION PLAN ID

        $mooe = "0.00";
        $ps = "0.00";
        $empl_id = "";
        //Department Head
        $dept_head = "";
        $suff = "";
        $post = "";
        // Assistant PG Head
        $assistant_pg_head = "";
        $assistant_pg_head2 = "";
        $assistant_pg_head3 = "";

        if ($FFUNCCOD) {
            $office_id = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first()->department_code;
            $empl_id = Office::where('id', $office_id)->first()->empl_id;
            $employee = UserEmployees::where('empl_id', $empl_id)->first();
            $dept_head = $employee->first_name . ' ' . $employee->middle_name[0] . '. ' .
                $employee->last_name;
            $suff = $employee->suffix_name;

            if ($suff) {
                $dept_head = $dept_head . ', ' . $suff;
            }
            $post = $employee->postfix_name;
            if ($post) {
                $dept_head = $dept_head . ', ' . $post;
            }
        }
        //Get OPCR Date
        $opcr_date = "";
        $dateStart = "";
        $dateEnd = "";
        $start = "";
        $end = "";

        $ap_head_2 = [];
        $ap_head_3 = [];
        $my_opcr = "";
        if ($opcr_id) {
            $my_opcr = OfficePerformanceCommitmentRatingList::with(['office'])->where('id', $opcr_id)->first();
            // dd($opcr_id);
            $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
            $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
            $start = $dateStart->format('F');
            $end = $dateEnd->format('F Y');
            $opcr_date = $start . " to " . $end;
            $opcr_date = Str::upper($opcr_date);
            if ($my_opcr) {
                $ap_head = UserEmployees::where('department_code', $my_opcr->department_code)
                    ->where('salary_grade', '24')
                    ->where('active_status', 'ACTIVE')
                    ->get();
                // dd($opcr_id,$my_opcr,$ap_head);
                if ($my_opcr->assistant_pg_head) {
                    // ASSISTANT PG HEAD
                    $assistant_pg_head = $my_opcr->assistant_pg_head;
                } else {
                    // ASSISTANT PG HEAD
                    $ap_head_m = UserEmployees::where('department_code', $office_id)
                        ->where('salary_grade', '24')
                        ->get();
                    dd($ap_head_m);
                    if (count($ap_head_m) > 0) {
                        $ap_head = $ap_head_m[0];
                        $assistant_pg_head = $ap_head->first_name . ' ' . $ap_head->middle_name[0] . '. ' .
                            $ap_head->last_name;
                        $ap_suffix = $ap_head->suffix_name;
                        $ap_post = $ap_head->postfix_name;
                        if ($ap_suffix) {
                            $assistant_pg_head = $assistant_pg_head . ', ' . $ap_suffix;
                        }
                        if ($ap_post) {
                            $assistant_pg_head = $assistant_pg_head . ', ' . $ap_post;
                        }

                        if ($my_opcr->department_code == '17' || $my_opcr->department_code == '11') {
                            $ap_head_2 = $ap_head_m[1];
                            $assistant_pg_head2 = $ap_head_2->first_name . ' ' . $ap_head_2->middle_name[0] . '. ' .
                                $ap_head_2->last_name;
                            $ap2_suffix = $ap_head_2->suffix_name;
                            $ap2_post = $ap_head_2->postfix_name;
                            if ($ap2_suffix) {
                                $assistant_pg_head2 = $assistant_pg_head2 . ', ' . $ap2_suffix;
                            }
                            if ($ap2_post) {
                                $assistant_pg_head2 = $assistant_pg_head2 . ', ' . $ap2_post;
                            }
                        }
                        if ($my_opcr->department_code == '17') {
                            $ap_head_3 = $ap_head_m[2];
                            $assistant_pg_head3 = $ap_head_3->first_name . ' ' . $ap_head_3->middle_name[0] . '. ' .
                                $ap_head_3->last_name;
                            $ap3_suffix = $ap_head_3->suffix_name;
                            $ap3_post = $ap_head_3->postfix_name;
                            if ($ap3_suffix) {
                                $assistant_pg_head3 = $assistant_pg_head3 . ', ' . $ap3_suffix;
                            }
                            if ($ap3_post) {
                                $assistant_pg_head3 = $assistant_pg_head3 . ', ' . $ap3_post;
                            }
                        }
                    }
                }

                if ($my_opcr->assistant_pg_head_2) {
                    // ASSISTANT PG HEAD 2
                    $assistant_pg_head2 = $my_opcr->assistant_pg_head_2;
                }
                if ($my_opcr->assistant_pg_head_3) {
                    // ASSISTANT PG HEAD 3
                    $assistant_pg_head3 = $my_opcr->assistant_pg_head_3;
                }
            }
        }
        //Carbon Date
        $date_now = Carbon::now()->format('F d, Y');

        $total = number_format($request->total, 2);
        $ave = number_format($request->average, 2);
        $pmt_chair = "Ivan Kleb N. Ulgasan, CESE";

        $approver = 'Engr. Raul G. Mabanglo';
        $pos = 'Governor';
        $isPA1 = $this->isPA($opcr_date, 'PA 1');
        $average = round(
            OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)
                ->whereHas('opcrTarget', function ($query) {
                    $query->where('is_included', '1');
                })
                ->get()
                ->map(function ($item) {
                    $qVals = collect([$item->q1, $item->q2, $item->q3])->filter(fn($v) => $v > 0);
                    $eVals = collect([$item->e1, $item->e2, $item->e3])->filter(fn($v) => $v > 0);
                    $tVals = collect([$item->t1, $item->t2, $item->t3])->filter(fn($v) => $v > 0);

                    $qAve = $qVals->count() ? $qVals->avg() : null;
                    $eAve = $eVals->count() ? $eVals->avg() : null;
                    $tAve = $tVals->count() ? $tVals->avg() : null;

                    $finalVals = collect([$qAve, $eAve, $tAve])->filter(fn($v) => $v !== null);

                    return $finalVals->count()
                        ? round($finalVals->avg(), 2)
                        : null;
                })
                ->filter()
                ->avg(),
            2
        );
        // $average = $avet->pluck("average");
        // $average = $plucked_average->avg();

        // ->selectRaw("
        //     ROUND(
        //         AVG(
        //             (COALESCE(rating_q, 0) + COALESCE(rating_e, 0) + COALESCE(rating_t, 0)) /
        //             NULLIF(
        //                 (rating_q IS NOT NULL) +
        //                 (rating_e IS NOT NULL) +
        //                 (rating_t IS NOT NULL),
        //                 0
        //             )
        //         ),
        //         2
        //     ) AS average_rating
        // ")
        // ->value('average_rating');
        // dd("average",$average);
        // dd($my_opcr);
        $data = $this->model->select(
            'office_performance_commitment_ratings.id',
            'office_performance_commitment_ratings.success_indicator_id',
            'office_performance_commitment_ratings.accomplishments',
            'office_performance_commitment_ratings.rating_q',
            'office_performance_commitment_ratings.rating_e',
            'office_performance_commitment_ratings.rating_t',
            'office_performance_commitment_ratings.q1',
            'office_performance_commitment_ratings.q2',
            'office_performance_commitment_ratings.q3',
            'office_performance_commitment_ratings.e1',
            'office_performance_commitment_ratings.e2',
            'office_performance_commitment_ratings.e3',
            'office_performance_commitment_ratings.t1',
            'office_performance_commitment_ratings.e1',
            'office_performance_commitment_ratings.remarks',
            'office_performance_commitment_ratings.FFUNCCOD',
            'office_performance_commitment_ratings.opcr_id',
            'office_performance_commitment_ratings.id_opcr_target',
            'office_performance_commitment_ratings.id_paps',
            'SU.success_indicator',
            // 'off.office_accountable',
            'PAPS.paps_desc',
            'mfo.mfo_desc',
            'mfo.created_at',
            'opcr_targets.quantity',
            'PAPS.id AS idpaps',
            'mfo.from_excel',
            'mfo.id AS mfo_idmfo',
            'PAPS.idmfo AS paps_idmfo',
            'opcr_targets.target_success_indicator AS target_success_indicator',
            'opcr_targets.quantity_unit',
            'os.performance_measure',
            'os.efficiency1',
            'os.efficiency2',
            'os.efficiency3',
            'os.timeliness',
            'os.prescribed_period',
            'os.office_accountable',

        )
            ->with([
                'opcrtarget',
                'opcrList',
                'paps',
                'paps.MFO',
                'paps.opcr_stardard',
                'paps.divisionOutputs',
                'paps.divisionOutputs.dpcrTargets',
                'paps.divisionOutputs.dpcrTargets.ipcr_Semestral',
                'paps.divisionOutputs.dpcrTargets.monthlyTargets',
            ])
            ->leftjoin('success_indicators AS SU', 'SU.id', 'office_performance_commitment_ratings.success_indicator_id')
            ->leftjoin('program_and_projects AS PAPS', 'PAPS.id', 'office_performance_commitment_ratings.id_paps')
            ->leftjoin('opcr_standards AS os', 'os.idpaps', 'PAPS.id')
            ->leftjoin('office_accountables AS off', 'off.idpaps', 'PAPS.id')
            ->join('major_final_outputs AS mfo', 'mfo.id', 'PAPS.idmfo')
            // ->join('opcr_targets', 'opcr_targets.idpaps', 'PAPS.id')
            ->leftjoin('opcr_targets', 'opcr_targets.id', 'office_performance_commitment_ratings.id_opcr_target')
            ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
            ->where('opcr_targets.is_included', '1')
            ->whereNull('mfo.from_excel')
            ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
            ->orderBy('mfo.id', 'asc')
            ->orderBy('PAPS.id', 'asc')
            ->groupBy('office_performance_commitment_ratings.id')
            ->get()
            ->map(function ($item) use (
                $opcr_id,
                $FFUNCCOD,
                $total,
                $ave,
                $dept_head,
                $opcr_date,
                $mooe,
                $ps,
                $date_now,
                $approver,
                $pos,
                $isPA1,
                $pmt_chair,
                $average,
                $assistant_pg_head,
                $assistant_pg_head2,
                $assistant_pg_head3,
                $request,
                $my_opcr
            ) {
                // dd($item);
                // dd($my_opcr);
                $efficiency1 = $item->efficiency1;
                $efficiency2 = $item->efficiency2;
                $efficiency3 = $item->efficiency3;
                $performance_measure = $item->performance_measure;
                $timeliness = $item->timeliness;


                $prescribed_period = $item->prescribed_period;
                $paps_desc = $item->paps_desc;
                $office_accountable = $item->office_accountable;
                if ($efficiency1 === 'No' && $timeliness === 'No') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency";
                } elseif ($efficiency1 === 'Yes') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency within {$prescribed_period}";
                } else {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency on or before {$timeliness}";
                }


                $quality_rating_description = $this->qualityRatingDescription($item->rating_q);
                $efficiency_rating_description = $this->efficiencyRatingDescription($item->rating_e);
                $prescribed_period_description = "";

                if ($item->rating_q == 2 || $item->rating_q == 1 || $item->rating_e == 2 || $item->rating_e == 1) {
                    $prescribed_period_description = $this->prescribedPeriodRatingDescription_below2($item->e1);
                } else {
                    $prescribed_period_description = $this->prescribedPeriodDescription($item->e1);
                }

                $timeliness_description = "";
                if ($item->rating_q == 2 || $item->rating_q == 1 || $item->rating_e == 2 || $item->rating_e == 1) {
                    $timeliness_description = $this->timelinessRatingDescription_below2($item->timeliness);
                } else {
                    $timeliness_description = $this->timelinessDescription($item->timeliness);
                }

                // dd($item);
                $Actual_Accomplishment = "";
                if ($paps_desc) {
                    if ($efficiency1 == "Yes") {
                        $Actual_Accomplishment = $timeliness == "No" ? $performance_measure . " " . $paps_desc . " with " . $quality_rating_description . " rating in efficiency, " . $efficiency_rating_description . " rating in quality/effectiveness " . $prescribed_period_description : $performance_measure . " " . $paps_desc . " with " . $quality_rating_description . " rating in efficiency, " . $efficiency_rating_description . " rating in quality/effectiveness ";;
                    } elseif ($efficiency1 == "No" && $timeliness != null && $timeliness != "No") {
                        $Actual_Accomplishment = $performance_measure . " " . $paps_desc . " with " . $quality_rating_description . " rating in efficiency, " . $efficiency_rating_description . " rating in quality/effectiveness " . $timeliness_description;
                    } elseif ($efficiency1 == "No" && $timeliness == "No") {
                        $Actual_Accomplishment = $performance_measure . " " . $paps_desc . " with " . $quality_rating_description . " rating in efficiency, " . $efficiency_rating_description . " rating in quality/effectiveness ";
                    }
                }

                // dd($Actual_Accomplishment);
                $approver = 'Engr. Raul G. Mabanglo';
                // true
                if ($isPA1) {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pmt_chair = 'Lewis Jake G. Caiman, CPA';
                }
                $pos = 'Governor';
                if ($FFUNCCOD == '1021') {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pos = 'Vice Governor';
                    if ($isPA1) {
                        $approver = 'Jayvee Tyron L. Uy';
                    }
                }
                if ($FFUNCCOD == '1016') {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pos = 'Vice Governor';
                    if ($isPA1) {
                        $approver = 'Jayvee Tyron L. Uy';
                    }
                }

                // dd($isPA1);
                // dd($item->opcrList);
                // dd($item->id_opcr_target);
                $rating_type = optional(optional($item)->opcrList)->rating_type ?? "0";
                $monthly_ratings = [];
                // QET -from Planning
                $var_q_pl = 0;
                $var_e_pl = 0;
                $var_t_pl = 0;
                $ave_qet_pl = 0;
                $ave_pl = $average;

                // QET From HR/DPCR Averaging
                $var_q_dpcr = 0;
                $var_e_dpcr = 0;
                $var_t_dpcr = 0;
                $ave_qet_dpcr = 0;
                $ave_dpcr = $average;
                // dd($item);
                // dd($item, $monthly_ratings);
                // if ($rating_type == "0") {

                // FROM PLANNING**********************************************************************
                $qValues = array_filter([
                    $item['q1'] ?? 0,
                    $item['q2'] ?? 0,
                    $item['q3'] ?? 0
                ], fn($v) => $v != 0);

                $eValues = array_filter([
                    $item['e1'] ?? 0,
                    $item['e2'] ?? 0,
                    $item['e3'] ?? 0
                ], fn($v) => $v != 0);

                $tValues = array_filter([
                    $item['t1'] ?? 0
                ], fn($v) => $v != 0);

                // --- Compute averages, default to 0 if no non-zero values ---
                $var_q_pl = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;
                $var_e_pl = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;
                $var_t_pl = count($tValues) > 0 ? round(array_sum($tValues) / count($tValues), 2) : 0;

                $div = 3;

                try {
                    if (intval($var_q_pl) < 1) {
                        $div = $div - 1;
                    }
                } catch (Exception $e) {
                    $div = $div - 1;
                }
                try {
                    if (intval($var_e_pl) < 1) {
                        $div = $div - 1;
                    }
                } catch (Exception $e) {
                    $div = $div - 1;
                }
                try {
                    if (intval($var_t_pl) < 1) {
                        $div = $div - 1;
                    }
                } catch (Exception $e) {
                    $div = $div - 1;
                }
                $sum_pl = $var_q_pl + $var_e_pl + $var_t_pl;
                $ave_qet_pl = 0;
                if ($div > 0) {
                    $ave_qet_pl = $sum_pl / $div;
                    $ave_qet_pl = number_format(floatval($ave_qet_pl), 2);
                }
                $ave_pl = $average;
                // dd("0");
                // } else {
                // dd("1");
                //
                // FROM DPCR**********************************************************************
                $monthly_ratings = calculateMonthlyAverages($item, [
                    'q1',
                    'q2',
                    'q3',
                    'e1',
                    'e2',
                    'e3',
                    't1'
                ]);

                // dd()
                // dd($item->id);
                // if (intval($item->id) === 684) {
                //     dd($monthly_ratings);
                // } else {
                //     // dd("wala")
                // }
                $qValues = array_filter([
                    $monthly_ratings['q1'] ?? 0,
                    $monthly_ratings['q2'] ?? 0,
                    $monthly_ratings['q3'] ?? 0
                ], fn($v) => $v != 0);

                $eValues = array_filter([
                    $monthly_ratings['e1'] ?? 0,
                    $monthly_ratings['e2'] ?? 0,
                    $monthly_ratings['e3'] ?? 0
                ], fn($v) => $v != 0);

                $tValues = array_filter([
                    $monthly_ratings['t1'] ?? 0
                ], fn($v) => $v != 0);

                // --- Compute averages, default to 0 if no non-zero values ---
                $var_q_dpcr = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;
                $var_e_dpcr = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;
                $var_t_dpcr = count($tValues) > 0 ? round(array_sum($tValues) / count($tValues), 2) : 0;

                // --- Compute how many valid groups to divide by ---
                $div = 3;

                try {
                    if (intval($var_q_dpcr) < 1) {
                        $div--;
                    }
                } catch (Exception $e) {
                    $div--;
                }

                try {
                    if (intval($var_e_dpcr) < 1) {
                        $div--;
                    }
                } catch (Exception $e) {
                    $div--;
                }

                try {
                    if (intval($var_t_dpcr) < 1) {
                        $div--;
                    }
                } catch (Exception $e) {
                    $div--;
                }

                // --- Compute overall QET average ---
                $sum = $var_q_dpcr + $var_e_dpcr + $var_t_dpcr;
                $ave_qet_dpcr = 0;

                if ($div > 0) {
                    $ave_qet_dpcr = $sum / $div;
                    $ave_qet_dpcr = number_format(floatval($ave_qet_dpcr), 2);
                }
                $ave_dpcr = $request->average;
                // dd($item->id, $item, $monthly_ratings, $monthly_ratings['q1'], $var_q);
                // }
                $adj = "Outstanding";

                if ($ave >= 4.51) {
                    $adj = "Outstanding";
                } else if ($ave >= 3.51) {
                    $adj = "Very Satisfactory";
                } else if ($ave >= 2.51) {
                    $adj = "Satisfactory";
                } else if ($ave >= 1.51) {
                    $adj = "Unsatisfactory";
                } else {
                    $adj = "Poor";
                }
                // dd($ave);
                // $quant = OpcrTarget::where()

                // dd("average: " . $ave);
                // dd($item->id);
                if ($item->id = 684) {
                    // dd($item);
                }
                return [
                    "id" => $item->id,
                    "success_indicator_id" => $item->success_indicator_id,
                    "accomplishments" => $item->accomplishments,
                    "rating_q_dpcr" => $var_q_dpcr,
                    "rating_e_dpcr" => $var_e_dpcr,
                    "rating_t_dpcr" => $var_t_dpcr,
                    "ave_qet_dpcr" => $ave_qet_dpcr,
                    "rating_q_ppdo" => $var_q_pl,
                    "rating_e_ppdo" => $var_e_pl,
                    "rating_t_ppdo" => $var_t_pl,
                    "ave_qet_ppdo" => $ave_qet_pl,
                    "remarks" => $item->remarks,
                    "FFUNCCOD" => $item->FFUNCCOD,
                    "idpaps" => $item->idpaps,
                    "opcr_id" => $item->opcr_id,
                    "success_indicator" => $item->success_indicator,
                    "office_accountable" => $office_accountable,
                    "paps_desc" => $item->paps_desc,
                    "quantity" => $item->quantity . ' ' . $item->quantity_unit,
                    // "quantity_unit" => $item->quantity_unit,
                    "mfo_desc" => $item->mfo_desc,
                    "created_at" => $item->created_at,
                    "total" => $total,
                    "ave" => $ave,
                    "dept_head" => $dept_head,
                    "assistant_pg_head" => $my_opcr ? ($my_opcr->assistant_pg_head ? $my_opcr->assistant_pg_head : $assistant_pg_head) : $assistant_pg_head,
                    "assistant_pg_head2" => $assistant_pg_head2,
                    "assistant_pg_head3" => $assistant_pg_head3,
                    "opcr_date" => $opcr_date,
                    "opcr_id" => $opcr_id,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    "FFUNCCOD" => $FFUNCCOD,
                    "date_now" => $date_now,
                    "approver" => $approver,
                    "position" => $pos,
                    "target_success_indicator" => $su,
                    "adjectival" => $adj,
                    "pmt_chair" => $pmt_chair,
                    "overall_average" => $ave,
                    "Actual_Accomplishment" => $Actual_Accomplishment,
                    "semester" => $my_opcr ? $my_opcr->semester : null,
                    "year" => $my_opcr ? $my_opcr->year : null,
                    "office_name" => $my_opcr ? optional(optional($my_opcr)->office)->office : null,
                    'rating_status' => $my_opcr ? $my_opcr->rating_status : null,
                    'total_ave_qet_dpcr' => 0,
                    'total_ave_qet_ppdo' => 0,
                    'average_non_zero' => 0,
                    'grand_total' => 0,
                    // "office_accountable" => $office_accountable
                    // "from_excel" => $item->from_excel,
                    // "mfo_idmfo" => $item->mfo_idmfo,
                    // "paps_idmfo" => $item->paps_idmfo
                    // "mfo"
                    // "paps" => optional($item)->paps,
                    // "id_paps" => $item->id_paps,
                    // "monthly_ratings" => $monthly_ratings
                ];
            });
        $collection = collect($data); // if not yet a collection
        // 1) Total of ave_qet_dpcr
        $total_ave_qet_dpcr = $collection->sum(function ($item) {
            return (float) ($item['ave_qet_dpcr'] ?? 0);
        });

        // 2) Total of ave_qet_ppdo
        $total_ave_qet_ppdo = $collection->sum(function ($item) {
            return (float) ($item['ave_qet_ppdo'] ?? 0);
        });

        // 3) Average of non-zero ave_qet_dpcr
        $ave_nonzero_dpcr = $collection
            ->pluck('ave_qet_dpcr')                  // get the column
            ->map(fn($v) => (float) $v)             // cast to float
            ->filter(fn($v) => $v != 0);            // only non-zero

        $average_nonzero_dpcr = $ave_nonzero_dpcr->count() ? round($ave_nonzero_dpcr->avg(), 2) : 0;

        // 4) Average of non-zero ave_qet_ppdo
        $ave_nonzero_ppdo = $collection
            ->pluck('ave_qet_ppdo')
            ->map(fn($v) => (float) $v)
            ->filter(fn($v) => $v != 0);

        $average_non_zero = $ave_nonzero_ppdo->count() > 0
            ? round($ave_nonzero_ppdo->avg(), 2)
            : 0;


        // Optional: round to 2 decimals
        $total_ave_qet_dpcr = round($total_ave_qet_dpcr, 2);
        $total_ave_qet_ppdo = round($total_ave_qet_ppdo, 2);
        $average_nonzero_dpcr   = round($average_nonzero_dpcr, 2);
        $average_non_zero   = round($average_non_zero, 2);
        // dd($total_ave_qet_dpcr, $total_ave_qet_ppdo, $average_nonzero_dpcr, $average_non_zero);
        $data = $data->map(function ($row) use ($total_ave_qet_dpcr, $total_ave_qet_ppdo, $average_nonzero_dpcr, $average_non_zero) {

            $ave_qet_dpcr = (float) ($row['ave_qet_dpcr'] ?? 0);
            $ave_qet_ppdo = (float) ($row['ave_qet_ppdo'] ?? 0);

            // Only non-zero values for average
            $values = collect([$ave_qet_dpcr, $ave_qet_ppdo])->filter(fn($v) => $v != 0);

            // Add the 4 new fields
            $row['total_ave_qet_dpcr'] = round($total_ave_qet_dpcr, 2);
            $row['total_ave_qet_ppdo'] = round($total_ave_qet_ppdo, 2);
            $row['average_nonzero_dpcr']   = round($average_nonzero_dpcr, 2);
            $row['average_nonzero_ppdo']   = round($average_non_zero, 2);
            // $row['grand_total']        = round($ave_qet_dpcr + $ave_qet_ppdo, 2);

            return $row;
        });
        // dd(count($data));
        // dd($data);
        // dd(
        //     $data->pluck("paps"),
        //     $data->pluck('id_paps'),
        //     $data->pluck("rating_q"),
        //     $data->pluck("rating_e"),
        //     $data->pluck("rating_t"),
        //     $data
        // );
        if ($data->isEmpty()) {
            $data = collect([[
                "id" => null,
                "success_indicator_id" => 0,
                "accomplishments" => null,
                "rating_q" => null,
                "rating_e" => null,
                "rating_t" => null,
                "remarks" => null,
                "FFUNCCOD" => $FFUNCCOD,
                "idpaps" => null,
                "opcr_id" => $opcr_id,
                "success_indicator" => null,
                "office_accountable" => null,
                "paps_desc" => " ",
                "quantity" => null,
                "mfo_desc" => " ",
                "created_at" => null,
                "total" => null,
                "ave" => null,
                "dept_head" => null,
                "opcr_date" => $opcr_date,
                "mooe" => null,
                "ps" => null,
                "date_now" => now()->format('F d, Y'), // or fixed "June 25, 2025"
                "approver" => "Engr Raul G. Mabanglo",
                "position" => "Governor",
                "ave_qet" => null,
                "target_success_indicator" => null,
                "adjectival" => null,
                "semester" => $my_opcr ? $my_opcr->semester : null,
                "year" => $my_opcr ? $my_opcr->year : null,
                "office_name" => $my_opcr ? optional(optional($my_opcr)->office)->office : null,
                'rating_status' => $my_opcr ? $my_opcr->rating_status : null,
                'total_ave_qet_dpcr' => 0,
                'total_ave_qet_ppdo' => 0,
                'average_non_zero' => 0,
                'grand_total' => 0,
            ]]);
        }
        return $data;
        //********************************************** */


    }
    private function qualityRatingDescription($score)
    {
        $rating = round($score);

        switch ($rating) {
            case 1:
                return 'Poor';
            case 2:
                return 'Unsatisfactory';
            case 3:
                return 'Satisfactory';
            case 4:
                return 'Very Satisfactory';
            case 5:
                return 'Outstanding';
            default:
                return 'No';
        }
    }

    private function efficiencyRatingDescription($score)
    {
        if ($score <= 1.50) {
            return 'Poor';
        } elseif ($score <= 2.50) {
            return 'Unsatisfactory';
        } elseif ($score <= 3.50) {
            return 'Satisfactory';
        } elseif ($score <= 4.50) {
            return 'Very Satisfactory';
        } elseif ($score <= 5.00) {
            return 'Outstanding';
        } else {
            return 'No Rating';
        }
    }

    private function prescribedPeriodRatingDescription_below2($score)
    {
        $rating = round($score);

        switch ($rating) {
            case 5:
                return 'however way ahead of the prescribed period';
            case 4:
                return 'however earlier than the prescribed period';
            case 3:
                return 'however within the prescribed period';
            case 2:
                return 'and beyond the prescribed period';
            case 1:
                return 'and far beyond the prescribed period';
            default:
                return 'No Rating';
        }
    }

    private function prescribedPeriodDescription($score)
    {
        $rating = round($score);

        switch ($rating) {
            case 5:
                return 'and way ahead of the prescribed period';
            case 4:
                return 'and earlier than the prescribed period';
            case 3:
                return 'and within the prescribed period';
            case 2:
                return 'however beyond the prescribed period';
            case 1:
                return 'however far beyond the prescribed period';
            default:
                return 'No Rating';
        }
    }

    private function timelinessRatingDescription_below2($score)
    {
        $rating = round($score);

        switch ($rating) {
            case 5:
                return 'however significantly ahead of the deadline';
            case 4:
                return 'however earlier than the deadline';
            case 3:
                return 'however within the deadline';
            case 2:
                return 'and beyond the deadline';
            case 1:
                return 'and far beyond the deadline';
            default:
                return 'No Rating';
        }
    }

    private function timelinessDescription($score)
    {
        $rating = round($score);

        switch ($rating) {
            case 5:
                return 'and way ahead of the deadline';
            case 4:
                return 'and earlier than the deadline';
            case 3:
                return 'and within the deadline';
            case 2:
                return 'however beyond the deadline';
            case 1:
                return 'however far beyond the deadline';
            default:
                return 'No Rating';
        }
    }

    public function mov_api(Request $request)
    {
        $response = Http::acceptJson()->get(
            'https://accomplishment.davaodeoro.gov.ph/accomplishments/print-by-ppa',
            [
                'ppa_id'        => $request->ppa_id,
                'year'          => $request->year,
                'semester'      => $request->semester,
                'department_id' => $request->department_id,
            ]
        );

        if ($response->failed()) {
            return response()->json([
                'success' => false,
                'message' => 'Unable to fetch data from the API.',
                'status'  => $response->status(),
            ], $response->status());
        }

        return response()->json($response->json());
    }
    // public function print_accomplishment(Request $request)
    // {
    //     $opcr_id = $request->opcr_id;
    //     $FFUNCCOD = $request->FFUNCCOD;
    //     //REVISION PLAN ID

    //     $mooe = "0.00";
    //     $ps = "0.00";
    //     $empl_id = "";
    //     $dept_head = "";
    //     $suff = "";
    //     $post = "";


    //     // $assistant_head = "";
    //     // $assistant_suff = "";
    //     // $assistant_post = "";
    //     $assistant_pg = "";
    //     //Department Head
    //     $dept_head = "";
    //     if ($FFUNCCOD) {
    //         $office_id = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first()->department_code;
    //         $empl_id = Office::where('id', $office_id)->first()->empl_id;
    //         $employee = UserEmployees::where('empl_id', $empl_id)->first();
    //         $dept_head = $employee->first_name . ' ' . $employee->middle_name[0] . '. ' .
    //             $employee->last_name;

    //         $suff = $employee->suffix_name;

    //         if ($suff) {
    //             $dept_head = $dept_head . ', ' . $suff;
    //         }
    //         $post = $employee->postfix_name;
    //         if ($post) {
    //             $dept_head = $dept_head . ', ' . $post;
    //         }

    //         // ASSISTANT PG HEAD
    //         // $assistant =UserEmployees::where('department_code', $office_id)
    //         //     ->where('active_status', 'ACTIVE')
    //         //     ->where('salary_grade','24')
    //         //     ->first();
    //         // if($assistant){
    //         //     $assistant_pg = $assistant->first_name." ".$assistant->middle_name[0].". ".$assistant->last_name;
    //         //     if($assistant->suffix_name){
    //         //         $assistant_pg = $assistant_pg.', '.$assistant->suffix_name;
    //         //     }
    //         //     if($assistant->postfix_name){
    //         //         $assistant_pg = $assistant_pg.', '.$assistant->postfix_name;
    //         //     }
    //         // }

    //     }
    //     //Get OPCR Date
    //     $opcr_date = "";
    //     $dateStart = "";
    //     $dateEnd = "";
    //     $start = "";
    //     $end = "";
    //     if ($opcr_id) {
    //         $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
    //         // dd($opcr_id);
    //         $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
    //         $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
    //         $start = $dateStart->format('F');
    //         $end = $dateEnd->format('F Y');
    //         $opcr_date = $start . " to " . $end;
    //         $opcr_date = Str::upper($opcr_date);
    //     }
    //     // dd($my_opcr,"myopcr");
    //     //Carbon Date
    //     $date_now = Carbon::now()->format('F d, Y');
    //     //TOTAL, SUM, AVERAGE
    //     // $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
    //     //     ->where('opcr_id', $opcr_id)
    //     //     ->first()->average_sum;
    //     // $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
    //     // if ($count < 1) {
    //     //     $count = 1;
    //     // };
    //     // $total = number_format($averageSum, 2);
    //     // $ave_pre = $total / $count;
    //     // $ave = number_format($ave_pre, 2);
    //     $total = number_format($request->total, 2);
    //     $ave = number_format($request->average, 2);
    //     $pmt_chair = "Ivan Kleb N. Ulgasan, CESE";
    //     // dd($total);
    //     // dd("asasasasas");
    //     $approver = 'Engr. Raul G. Mabanglo';
    //     $pos = 'Governor';
    //     $isPA1 = $this->isPA($opcr_date, 'PA 1');
    //     $average = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)
    //         ->selectRaw("
    //             ROUND(
    //                 AVG(
    //                     (COALESCE(rating_q, 0) + COALESCE(rating_e, 0) + COALESCE(rating_t, 0)) /
    //                     NULLIF(
    //                         (rating_q IS NOT NULL) +
    //                         (rating_e IS NOT NULL) +
    //                         (rating_t IS NOT NULL),
    //                         0
    //                     )
    //                 ),
    //                 2
    //             ) AS average_rating
    //         ")
    //         ->value('average_rating');
    //     $data = $this->model->select(
    //         'office_performance_commitment_ratings.id',
    //         'office_performance_commitment_ratings.success_indicator_id',
    //         'office_performance_commitment_ratings.accomplishments',
    //         'office_performance_commitment_ratings.rating_q',
    //         'office_performance_commitment_ratings.rating_e',
    //         'office_performance_commitment_ratings.rating_t',
    //         'office_performance_commitment_ratings.remarks',
    //         'office_performance_commitment_ratings.FFUNCCOD',
    //         'office_performance_commitment_ratings.opcr_id',
    //         'SU.success_indicator',
    //         // 'off.office_accountable',
    //         'PAPS.paps_desc',
    //         'mfo.mfo_desc',
    //         'mfo.created_at',
    //         'opcr_targets.quantity',
    //         'PAPS.id AS idpaps',
    //         'mfo.from_excel',
    //         'mfo.id AS mfo_idmfo',
    //         'PAPS.idmfo AS paps_idmfo',
    //         'opcr_targets.target_success_indicator AS target_success_indicator',
    //         'opcr_targets.quantity_unit',
    //         'os.performance_measure',
    //         'os.efficiency1',
    //         'os.timeliness',
    //         'os.prescribed_period',
    //         'os.office_accountable'
    //     )
    //         ->leftjoin('success_indicators AS SU', 'SU.id', 'office_performance_commitment_ratings.success_indicator_id')
    //         ->leftjoin('program_and_projects AS PAPS', 'PAPS.id', 'office_performance_commitment_ratings.id_paps')
    //         ->leftjoin('opcr_standards AS os', 'os.idpaps', 'PAPS.id')
    //         ->leftjoin('office_accountables AS off', 'off.idpaps', 'PAPS.id')
    //         ->join('major_final_outputs AS mfo', 'mfo.id', 'PAPS.idmfo')
    //         // ->join('opcr_targets', 'opcr_targets.idpaps', 'PAPS.id')
    //         ->leftjoin('opcr_targets', 'opcr_targets.id', 'office_performance_commitment_ratings.id_opcr_target')
    //         ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
    //         ->where('opcr_targets.is_included', '1')
    //         ->whereNull('mfo.from_excel')
    //         ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
    //         ->orderBy('mfo.id', 'asc')
    //         ->orderBy('PAPS.id', 'asc')
    //         ->groupBy('office_performance_commitment_ratings.id')
    //         ->get()
    //         ->map(function ($item) use ($opcr_id,$FFUNCCOD,$total,$ave,$dept_head,$opcr_date,$mooe,$ps,$date_now,$approver,$pos,$isPA1,$pmt_chair,$average) {
    //             // dd($item,"item");
    //             // $my_opcr
    //             $efficiency1 = $item->efficiency1;
    //             $performance_measure = $item->performance_measure;
    //             $timeliness = $item->timeliness;
    //             $prescribed_period = $item->prescribed_period;
    //             $paps_desc = $item->paps_desc;
    //             $office_accountable = $item->office_accountable;
    //             if ($efficiency1 === 'No' && $timeliness === 'No') {
    //                 $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency";
    //             } elseif ($efficiency1 === 'Yes') {
    //                 $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency within {$prescribed_period}";
    //             } else {
    //                 $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency on or before {$timeliness}";
    //             }
    //             $approver = 'Engr. Raul G. Mabanglo';
    //             // true
    //             if ($isPA1) {
    //                 $approver = 'Dorothy Montejo Gonzaga';
    //                 $pmt_chair = 'Lewis Jake G. Caiman, CPA';
    //             }
    //             $pos = 'Governor';
    //             if ($FFUNCCOD == '1021') {
    //                 $approver = 'Dorothy Montejo Gonzaga';
    //                 $pos = 'Vice Governor';
    //                 if ($isPA1) {
    //                     $approver = 'Jayvee Tyron L. Uy';
    //                 }
    //             }
    //             if ($FFUNCCOD == '1016') {
    //                 $approver = 'Dorothy Montejo Gonzaga';
    //                 $pos = 'Vice Governor';
    //                 if ($isPA1) {
    //                     $approver = 'Jayvee Tyron L. Uy';
    //                 }
    //             }

    //             // dd($isPA1);
    //             $var_q = $item->rating_q;
    //             $var_e = $item->rating_e;
    //             $var_t = $item->rating_t;


    //             $div = 3;
    //             // if (floatval($var_q) <= 0) {
    //             //     $div = $div - 1;
    //             // }
    //             // if (floatval($var_e) <= 0) {
    //             //     $div = $div - 1;
    //             // }
    //             // if (floatval($var_t) <= 0) {
    //             //     $div = $div - 1;
    //             // }
    //             try {
    //                 if (intval($var_q) < 1) {
    //                     $div = $div - 1;
    //                 }
    //             } catch (Exception $e) {
    //                 $div = $div - 1;
    //             }
    //             try {
    //                 if (intval($var_e) < 1) {
    //                     $div = $div - 1;
    //                 }
    //             } catch (Exception $e) {
    //                 $div = $div - 1;
    //             }
    //             try {
    //                 if (intval($var_t) < 1) {
    //                     $div = $div - 1;
    //                 }
    //             } catch (Exception $e) {
    //                 $div = $div - 1;
    //             }
    //             $sum = $var_q + $var_e + $var_t;
    //             $ave_qet = 0;
    //             if ($div > 0) {
    //                 $ave_qet = $sum / $div;
    //                 $ave_qet = number_format(floatval($ave_qet), 2);
    //             }
    //             $adj = "Outstanding";
    //             if ($average >= 4.51) {
    //                 $adj = "Outstanding";
    //             } else if ($average >= 3.51) {
    //                 $adj = "Very Satisfactory";
    //             } else if ($average >= 2.51) {
    //                 $adj = "Satisfactory";
    //             } else if ($average >= 1.51) {
    //                 $adj = "Unsatisfactory";
    //             } else {
    //                 $adj = "Poor";
    //             }
    //             // $quant = OpcrTarget::where()

    //             // dd("average: " . $ave);
    //             // dd($item->id);
    //             if ($item->id = 684) {
    //                 // dd($item);
    //             }
    //             // dd($assistant_pg, $my_opcr->assistant_pg_head,"assistant pg");
    //             return [
    //                 "id" => $item->id,
    //                 "success_indicator_id" => $item->success_indicator_id,
    //                 "accomplishments" => $item->accomplishments,
    //                 "rating_q" => $item->rating_q,
    //                 "rating_e" => $item->rating_e,
    //                 "rating_t" => $item->rating_t,
    //                 "remarks" => $item->remarks,
    //                 "FFUNCCOD" => $item->FFUNCCOD,
    //                 "idpaps" => $item->idpaps,
    //                 "opcr_id" => $item->opcr_id,
    //                 "success_indicator" => $item->success_indicator,
    //                 "office_accountable" => $office_accountable,
    //                 "paps_desc" => $item->paps_desc,
    //                 "quantity" => $item->quantity . ' ' . $item->quantity_unit,
    //                 // "quantity_unit" => $item->quantity_unit,
    //                 "mfo_desc" => $item->mfo_desc,
    //                 "created_at" => $item->created_at,
    //                 "total" => $total,
    //                 "ave" => $ave,
    //                 "dept_head" => $dept_head,
    //                 // "assistant_head" => $my_opcr->assistant_pg_head ?? $assistant_pg ?? null,
    //                 "opcr_date" => $opcr_date,
    //                 "opcr_id" => $opcr_id,
    //                 "mooe" => $mooe,
    //                 "ps" => $ps,
    //                 "FFUNCCOD" => $FFUNCCOD,
    //                 "date_now" => $date_now,
    //                 "approver" => $approver,
    //                 "position" => $pos,
    //                 "ave_qet" => $ave_qet,
    //                 "target_success_indicator" => $su,
    //                 "adjectival" => $adj,
    //                 "pmt_chair" => $pmt_chair,
    //                 "overall_average" => $average,
    //                 // "office_accountable" => $office_accountable
    //                 // "from_excel" => $item->from_excel,
    //                 // "mfo_idmfo" => $item->mfo_idmfo,
    //                 // "paps_idmfo" => $item->paps_idmfo
    //             ];
    //         });
    //     // dd(count($data));
    //     // dd($data);
    //     if ($data->isEmpty()) {
    //         $data = collect([[
    //             "id" => null,
    //             "success_indicator_id" => 0,
    //             "accomplishments" => null,
    //             "rating_q" => null,
    //             "rating_e" => null,
    //             "rating_t" => null,
    //             "remarks" => null,
    //             "FFUNCCOD" => $FFUNCCOD,
    //             "idpaps" => null,
    //             "opcr_id" => $opcr_id,
    //             "success_indicator" => null,
    //             "office_accountable" => null,
    //             "paps_desc" => " ",
    //             "quantity" => null,
    //             "mfo_desc" => " ",
    //             "created_at" => null,
    //             "total" => null,
    //             "ave" => null,
    //             "dept_head" => null,
    //             "opcr_date" => $opcr_date,
    //             "mooe" => null,
    //             "ps" => null,
    //             "date_now" => now()->format('F d, Y'), // or fixed "June 25, 2025"
    //             "approver" => "Engr Raul G. Mabanglo",
    //             "position" => "Governor",
    //             "ave_qet" => null,
    //             "target_success_indicator" => null,
    //             "adjectival" => null
    //         ]]);
    //     }
    //     return $data;
    //     //********************************************** */


    // }
    public function isPA($opcr_date, $type)
    {
        if (!$opcr_date || !$type) {
            return false;
        }

        preg_match('/\d{4}/', $opcr_date, $matches);
        $year = isset($matches[0]) ? (int)$matches[0] : null;

        if (!$year) {
            return false;
        }

        $isFirstSem = str_contains($opcr_date, 'JANUARY');

        if ($type === 'PA 1') {
            return $year < 2025 || ($year === 2025 && $isFirstSem);
        } elseif ($type === 'PA 2') {
            return $year > 2025 || ($year === 2025 && !$isFirstSem);
        }

        return false;
    }
    //UPDATE CURRENT
    public function update_current(Request $request)
    {
        // dd('update_current');
        // $opcrtargets = OfficePerformanceCommitmentRating::select()
        //     ->leftjoin('program_and_projects', 'program_and_projects.id', 'office_performance_commitment_ratings.id_paps')
        //     ->get();
        // dd($opcrtargets);

        $opcr_lists = OfficePerformanceCommitmentRatingList::get();
        // dd($opcr_lists);
        foreach ($opcr_lists as $opcr_list) {
            $opcr_targets = OpcrTarget::where('office_performance_commitment_rating_list_id', $opcr_list->id)
                ->get();
            // dd($opcr_targets);
            foreach ($opcr_targets as $opcr_target) {
                // $paps = ProgramAndProject::where('id',$opcr_target->idpaps)->first();
                $opcr_id = $opcr_target->office_performance_commitment_rating_list_id;

                $success_indic = SuccessIndicator::where('idpaps', $opcr_target->idpaps)->first();
                // dd($success_indic);
                if ($success_indic !== null) {
                    $idpaps = $opcr_target->idpaps;
                    $success_id = $success_indic->id;
                    // dd($success_id);
                    OfficePerformanceCommitmentRating::where('success_indicator_id', $success_id)
                        ->where('opcr_id', $opcr_id)
                        ->update([
                            'id_paps' => $idpaps,
                            'id_opcr_target' => $opcr_target->id
                        ]);
                }
            }
        }
        OfficePerformanceCommitmentRating::where('id_opcr_target', '0')->delete();
        $opcr = OfficePerformanceCommitmentRating::get();

        return $opcr;
    }
    //GENERATE RATING
    public function generate_rating(Request $request)
    {
        // dd("generate rating");
        OfficePerformanceCommitmentRating::truncate();
        //Generate Ratings based on existing OPCR Targets
        $targets = OpcrTarget::all();
        foreach ($targets as $target) {
            $target_id = $target->id;
            $idpaps = $target->idpaps;
            $opcr_id = $target->office_performance_commitment_rating_list_id;
            $success = SuccessIndicator::where('idpaps', $idpaps)->first();
            if ($success !== null) {
                $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)
                    ->first();
                $opcrf = new OfficePerformanceCommitmentRating();
                $opcrf->id_paps = $idpaps;
                $opcrf->id_opcr_target = $target_id;
                $opcrf->success_indicator_id = $success->id;
                $opcrf->accomplishments = "";
                $opcrf->rating_q = "3";
                $opcrf->rating_e = "3";
                $opcrf->rating_t = "3";
                $opcrf->remarks = "-";
                $opcrf->opcr_id    = $opcr_id;
                $opcrf->FFUNCCOD = $opcr_list->FFUNCCOD;
                $opcrf->department_code = $opcr_list->department_code;
                $opcrf->save();
            }
            // dd($idpaps);

        }
        $opcr_all = OfficePerformanceCommitmentRating::all();
        return $opcr_all;
    }
}
