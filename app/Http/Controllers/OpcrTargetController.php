<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\Implementing_team;
use App\Models\Office;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrTarget;
use App\Models\OpcrTargetBudget;
use App\Models\Output;
use App\Models\ProgramAndProject;
use App\Models\Quality;
use App\Models\rating;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use App\Models\Timeliness;
use App\Models\User;
use App\Models\UserEmployees;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OpcrTargetController extends Controller
{
    protected $model;
    public function __construct(OpcrTarget $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $opcr_list_id)
    {
        // dd('ddddd');
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        $counter = 0;
        $data = ProgramAndProject::with('opcrtarget')
            ->select(
                'major_final_outputs.mfo_desc',
                'program_and_projects.id AS idpaps',
                'program_and_projects.paps_desc',
                'SU.success_indicator',
                'program_and_projects.idmfo',
                'SU.id AS su_id',
            )
            ->leftjoin('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
            ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
            ->where('program_and_projects.FFUNCCOD', $opcr_list->FFUNCCOD)
            ->where('major_final_outputs.id', '>', '45')
            ->whereNull('from_excel')
            ->groupBy('program_and_projects.id')
            ->orderBy('program_and_projects.idmfo', 'ASC')
            ->orderBy('program_and_projects.id', 'ASC')
            ->get()
            ->map(function ($item) use ($opcr_list_id, &$counter) {
                // $counter += 1;
                $targ = OpcrTarget::where('opcr_targets.idpaps', $item->idpaps)
                    ->where('opcr_targets.office_performance_commitment_rating_list_id', '=', $opcr_list_id)
                    ->first();
                // dd($item);
                // if (count($item->opcrtarget) > 0) {
                //     dd($counter);
                // }
                // dd($item);
                // if ($counter === 1) {
                // dd($item->opcrtarget);
                // }
                // dd($targ);
                $target_success_indicator = "";
                $quantity = "";
                $opcr_id = "";
                $office_performance_commitment_rating_list_id = "";
                if ($targ) {
                    $target_success_indicator = $targ->target_success_indicator;
                    $quantity = $targ->quantity;
                    $opcr_id = $targ->id;
                    $office_performance_commitment_rating_list_id = $targ->office_performance_commitment_rating_list_id;
                }
                return [
                    'mfo_desc' => $item->mfo_desc,
                    'idpaps' => $item->idpaps,
                    'paps_desc' => $item->paps_desc,
                    'id' => $opcr_id,
                    'target_success_indicator' => $target_success_indicator,
                    'quantity' => $quantity,
                    'success_indicator' => $item->success_indicator,
                    'idmfo' => $item->idmfo,
                    'su_id' => $item->su_id,
                    'office_performance_commitment_rating_list_id' => $office_performance_commitment_rating_list_id,
                ];
            });

        //AFTER SUCCESS INDICATOR
        $opcr_id = $opcr_list_id;
        $FFUNCCOD = $opcr_list->FFUNCCOD;
        //TOTAL & AVERAGE
        $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
            ->where('opcr_id', $opcr_id)
            ->first()->average_sum;
        $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        if ($count < 1) {
            $count = 1;
        }
        $total = number_format($averageSum, 2);
        $ave_pre = $total / $count;
        $ave = number_format($ave_pre, 2);

        //PG Department Head
        //********************************************** */
        $dept_head = "N/A";
        $pg_empl_id = Office::where('FFUNCCOD', $FFUNCCOD)->first();
        if ($pg_empl_id) {

            $emp = UserEmployees::where('empl_id', $pg_empl_id->empl_id)->first();
            if ($emp) {
                $dept_head = $emp->first_name . ' ' . $emp->middle_name[0] . ' ' . $emp->last_name;
                $suff = $emp->suffix_name;
                if ($suff) {
                    $dept_head = $dept_head . ', ' . $suff;
                }
                $post = $emp->postfix_name;
                if ($post) {
                    $dept_head = $dept_head . ', ' . $post;
                }
            }
        }

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
        }
        // dd("dd");
        $off = FFUNCCOD::where('FFUNCCOD', $opcr_list->FFUNCCOD)->first();
        return inertia('OPCR/Target/Index', [
            "opcr_list_id" => $opcr_list_id,
            "opcr_list" => $opcr_list,
            "opcr_id" => $opcr_list_id,
            "data" => $data,
            "FFUNCCOD" => $opcr_list->FFUNCCOD,
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'opcr_date' => $opcr_date,
            'mooe' => $mooe,
            'ps' => $ps,
            'office' => $off,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request, $opcr_list_id)
    {
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        $paps = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)
            ->get();
        // dd($request->idpaps);
        $paps_selected = $paps->where('id', $request->idpaps)->first();
        $success_indicators = SuccessIndicator::where('idpaps', $request->idpaps)->get();
        $outputs = Output::where('idpaps', $request->idpaps)->get();
        $qualities = Quality::where('idpaps', $request->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $ratings = rating::where('idpaps', $request->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $timeliness = Timeliness::where('idpaps', $request->idpaps)->orderBy('numerical_rating', 'desc')->get();

        $quality_exp = Quality::where('id', '1429')->get();
        // dd($request->idpaps);
        // "paps_selected" => $paps_selected,
        return inertia('OPCR/Target/Create', [
            "opcr_list_id" => $opcr_list_id,
            "idpaps" => $request->idpaps,
            "paps" => $paps,
            "success_indicators" => $success_indicators,
            "paps_selected" => $paps_selected,
            'outputs' => $outputs,
            'qualities' => $qualities,
            'ratings' => $ratings,
            'timeliness' => $timeliness,
            'quality_exp' => $quality_exp,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        // dd($request);
        //dd($request->target_success_indicator);
        $attributes = $request->validate([
            'output_id' => 'required',
            'idpaps' => 'required',
            'office_performance_commitment_rating_list_id' => 'required',
        ]);

        //SENTENCE******************
        // $output = Output::where('idpaps',$request->idpaps)->first()->Outputs;
        // $quality = Quality::where('idpaps',$request->idpaps)->first()->quality;
        // $rating =rating::where('idpaps',$request->idpaps)->first()->efficiency_quantity;
        // $timeliness =Timeliness::where('idpaps',$request->idpaps)->first()->timeliness;
        //$sentence = $request->quantity.' ('.$rating.') '.$output.' '.$timeliness.' with '.$quality.'.';
        //$correctedSentence = $this->correctSentence($sentence);
        //dd($correctedSentence);
        //**************** */
        // dd($request);
        $targ = new OpcrTarget();
        $targ->id = $request->id;
        $targ->target_success_indicator = $request->target_success_indicator;
        $targ->output_id = $request->output_id;
        $targ->quantity = $request->quantity;
        $targ->quantity_unit = $request->quantity_unit;
        $targ->comparison_operator = $request->comparison_operator;
        $targ->is_zero = $request->is_zero;
        $targ->quality_id = $request->quality_id;
        $targ->ratings_id = $request->ratings_id;
        $targ->timeliness_id = $request->timeliness_id;
        $targ->remarks_final = $request->remarks_final;
        $targ->idpaps = $request->idpaps;
        $targ->office_performance_commitment_rating_list_id = $request->office_performance_commitment_rating_list_id;
        $targ->save();
        //TEST $targ->id
        // dd($targ->id);
        //Office Performance Commitment Rating
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $request->office_performance_commitment_rating_list_id)
            ->first();
        // dd($opcr_list);
        $v_q = "3";
        $v_r = "3";
        $v_t = "3";
        if ($request->quantity == null) {
            $v_q = "0";
        }
        if ($request->quality_id == null) {
            $v_r = "0";
        }
        if ($request->ratings_id == null) {
            $v_t = "0";
        }
        //GENERATE RATING FOR THE TARGET
        $success = SuccessIndicator::where('idpaps', $request->idpaps)->first();
        $opcrf = new OfficePerformanceCommitmentRating();
        $opcrf->id_paps = $request->idpaps;
        $opcrf->id_opcr_target = $targ->id;
        $opcrf->success_indicator_id = $success->id;
        $opcrf->accomplishments = "";
        $opcrf->rating_q = "1";
        $opcrf->rating_e = "1";
        $opcrf->rating_t = "1";
        $opcrf->remarks = "-";
        $opcrf->opcr_id    = $request->office_performance_commitment_rating_list_id;
        $opcrf->FFUNCCOD = $opcr_list->FFUNCCOD;
        $opcrf->department_code = $opcr_list->department_code;
        $opcrf->save();
        return redirect('/opcrtarget/' . $request->office_performance_commitment_rating_list_id)
            ->with('message', 'Office performance target added!');
    }
    public function edit(Request $request, $opcr_list_id)
    {
        // dd($request->idpaps);
        // dd($opcr_list_id);
        $opcr_target_id = $request->opcr_target_id;
        $data = $this->model->where('id', $opcr_target_id)->first();
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $data->office_performance_commitment_rating_list_id)->first();
        $paps = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)->get();
        $paps_selected = ProgramAndProject::where('id', $request->idpaps)->first();
        $success_indicators = SuccessIndicator::where('idpaps', $data->idpaps)->get();
        $outputs = Output::where('idpaps', $data->idpaps)->get();
        $qualities = Quality::where('idpaps', $data->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $ratings = rating::where('idpaps', $data->idpaps)->orderBy('efficiency_quantity', 'desc')->get();
        $timeliness = Timeliness::where('idpaps', $data->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $quality_exp = Quality::where('id', '1429')->get();
        // dd($request->idpaps);
        return inertia('OPCR/Target/Create', [
            "opcr_list_id" => $opcr_list_id,
            "opcr_id" => $request->opcr_id,
            "idpaps" => $request->idpaps,
            "editData" => $data,
            "paps" => $paps,
            'outputs' => $outputs,
            'qualities' => $qualities,
            'ratings' => $ratings,
            'timeliness' => $timeliness,
            "success_indicators" => $success_indicators,
            'paps_selected' => $paps_selected,
            'quality_exp' => $quality_exp,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        // dd($request);
        $data->update([
            'target_success_indicator' => $request->target_success_indicator,
            'quantity' => $request->quantity,
            'quantity_unit' => $request->quantity_unit,
            'comparison_operator' => $request->comparison_operator,
            'is_zero' => $request->is_zero,
            'output_id' => $request->output_id,
            'quality_id' => $request->quality_id,
            'ratings_id' => $request->ratings_id,
            'timeliness_id' => $request->timeliness_id,
            'remarks_final' => $request->remarks_final,
            'idpaps' => $request->idpaps,
            'office_performance_commitment_rating_list_id' => $request->office_performance_commitment_rating_list_id,

        ]);

        return redirect('/opcrtarget/' . $request->office_performance_commitment_rating_list_id)
            ->with('info', 'Office performance target updated!');
    }
    public function destroy(Request $request)
    {
        //dd("delete");
        $opcr_list = OpcrTarget::findOrFail($request->id);
        $opcr_list->delete();
        $opcr_id = $opcr_list->office_performance_commitment_rating_list_id;

        OfficePerformanceCommitmentRating::where('id_opcr_target', $request->id)->delete();
        return redirect('/opcrtarget/' . $opcr_id)
            ->with('error', 'Office performance goal deleted!');
    }
    public function correctSentence($text)
    {
        $client = new Client();
        $response = $client->post('https://languagetool.org/api/v2/check', [
            'form_params' => [
                'text' => $text,
                'language' => 'en-US',
            ],
        ]);
        $corrections = json_decode($response->getBody(), true)['matches'];

        foreach ($corrections as $correction) {
            $text = str_replace($correction['context']['text'], $correction['replacements'][0]['value'], $text);
        }

        return $text;
    }
    public function submit_opcr_target(Request $request, $opcr_list_id)
    {
        // dd($opcr_list_id);
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['target_status' => 0]);
        return redirect('/opcrtarget/' . $opcr_list_id)
            ->with('info', 'Office performance target submitted!');
    }

    public function indexrevised(Request $request, $opcr_list_id)
    {
        // dd($opcr_list_id);
        $opcr_list = OfficePerformanceCommitmentRatingList::with(['office'])->where('id', $opcr_list_id)->first();
        $dept_code = optional(optional($opcr_list)->office)->department_code;
        $counter = 0;
        $data = ProgramAndProject::with([
            'opcrtarget',
            'opcr_stardard',
            'MFO',
            'divisionOutputs',
            'success_indicator',
            'opcrtarget.opcrList',
            'opcrtarget.opcrList.opcrTargetBudget',
            'sharedProgramAndProjects'
        ])
            // ->select(
            //     'major_final_outputs.mfo_desc',
            //     'program_and_projects.id AS idpaps',
            //     'program_and_projects.paps_desc',
            //     'SU.success_indicator',
            //     'program_and_projects.idmfo',
            //     'SU.id AS su_id',
            //     'opcr_standards.performance_measure'
            // )*******************************************
            // ->whereHas('opcrtarget', function ($query) use ($opcr_list_id) {
            //     $query->where('office_performance_commitment_rating_list_id', $opcr_list_id);
            // })
            // ->leftjoin('opcr_standards', 'opcr_standards.idpaps', 'program_and_projects.id')
            // ->leftjoin('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
            // ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
            ->where(function($q)use($opcr_list){
                $q->where('program_and_projects.FFUNCCOD', $opcr_list->FFUNCCOD)
                ->whereHas('MFO', function ($query) {
                    $query->where('id', '>', '45')->whereNull('from_excel');
                });
            })->orWhere(function($q)use($dept_code){
                $q->whereHas('sharedProgramAndProjects', function ($query) use ($dept_code) {
                    $query->where('destination_department_code', $dept_code);
                });
            })
            ->groupBy('program_and_projects.id')
            ->orderBy('program_and_projects.idmfo', 'ASC')
            ->orderBy('program_and_projects.id', 'ASC')
            ->get()
            ->map(function ($item) use ($opcr_list_id, &$counter, $opcr_list) {
                $counter += 1;
                $is_shared_paps =0;
                if($item->sharedProgramAndProjects->isNotEmpty()){
                    // dd($item->sharedProgramAndProjects,$opcr_list, ' sharedPAPS Test');
                    $is_shared_paps = 1;
                }
                // dd('rrererer');
                // if (count($item->opcrtarget) > 0) {
                // dd($item->opcrtarget);
                // }
                // $targ = OpcrTarget::where('opcr_targets.idpaps', $item->idpaps)
                //     ->where('opcr_targets.office_performance_commitment_rating_list_id', '=', $opcr_list_id)
                //     ->first();
                $filteredOpcrTargets = $item->opcrtarget->filter(function ($target) use ($opcr_list_id) {
                    return $target->office_performance_commitment_rating_list_id == $opcr_list_id;
                });
                // if ($counter == 2) {
                //     dd($filteredOpcrTargets->first());
                // }
                // dd($filteredOpcrTargets[0]);
                // dd(count($filteredOpcrTargets));
                $targ = null;
                // try {
                if (!$filteredOpcrTargets->isEmpty()) {

                    $targ = $filteredOpcrTargets->first();
                }
                // } catch (Exception $e) {
                //     // dd($filteredOpcrTargets);
                //     dd($counter);
                // }

                // dd(count($item->opcrtarget));
                // dd($item->opcrtarget);
                // dd($item);
                // dd($item);
                // dd($item[0]->opcrtarget);
                // if (count($item->opcrtarget) > 0) {
                //     dd($counter);
                // }
                // dd($item);
                // if ($counter === 1) {
                //     dd($item->opcrtarget);
                // }
                // dd($targ);
                $target_success_indicator = "";
                $quantity = "";
                $opcr_id = "";
                $office_performance_commitment_rating_list_id = "";
                $allotted = "0.00";
                $opcr_target_budget_id = "";
                // dd($targ);
                if ($targ) {
                    $target_success_indicator = $targ->target_success_indicator;
                    $quantity = $targ->quantity;
                    $opcr_id = $targ->id;
                    $office_performance_commitment_rating_list_id = $targ->office_performance_commitment_rating_list_id;
                    // dd($targ);
                    if ($targ->opcrList) {
                        if (count($targ->opcrList->opcrTargetBudget) > 0) {
                            $allotted = $targ->opcrList->opcrTargetBudget->where('idpaps', $item->id)->first();

                            $opcr_target_budget_id = $allotted ? $allotted->id : "";
                            // dd($allotted);
                        }
                    }
                }
                // if ($counter == 33) {
                //     // dd($item->is_included);
                //     dd($targ);
                // }
                // dd($item->opcr_stardard);
                // dd($item->sharedProgramAndProjects);

                return [
                    'mfo_desc' => $item->MFO ? $item->MFO->mfo_desc : "",
                    'idpaps' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'id' => $opcr_id,
                    'target_success_indicator' => $target_success_indicator,
                    'quantity' => $quantity,
                    'success_indicator' => $item->success_indicator,
                    'performance_measure' => $item->performance_measure,
                    'idmfo' => $item->idmfo,
                    'su_id' => $item->su_id,
                    'opcr_target' => $targ,
                    'opcr_target_binary' => $targ ? ($targ->is_included ? true : false) : false,
                    'office_performance_commitment_rating_list_id' => $opcr_list_id,
                    'division_outputs' => $item->divisionOutputs,
                    'allotted' => $allotted,
                    'opcr_target_budget_id' => $opcr_target_budget_id,
                    'opcr_standard'=>optional($item)->opcr_stardard,
                    'is_shared_paps'=>$is_shared_paps
                ];
            });



        // dd($data, $opcr_list->office);
        // dd('item');
        // $data->pluck()
        //AFTER SUCCESS INDICATOR
        $opcr_id = $opcr_list_id;
        $FFUNCCOD = $opcr_list->FFUNCCOD;
        //TOTAL & AVERAGE
        $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
            ->where('opcr_id', $opcr_id)
            ->first()->average_sum;
        $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        if ($count < 1) {
            $count = 1;
        }
        $total = number_format($averageSum, 2);
        $ave_pre = $total / $count;
        $ave = number_format($ave_pre, 2);

        //PG Department Head
        //********************************************** */
        $dept_head = "N/A";
        $pg_empl_id = Office::where('FFUNCCOD', $FFUNCCOD)->first();
        if ($pg_empl_id) {

            $emp = UserEmployees::where('empl_id', $pg_empl_id->empl_id)->first();
            if ($emp) {
                $dept_head = $emp->first_name . ' ' . $emp->middle_name[0] . ' ' . $emp->last_name;
                $suff = $emp->suffix_name;
                if ($suff) {
                    $dept_head = $dept_head . ', ' . $suff;
                }
                $post = $emp->postfix_name;
                if ($post) {
                    $dept_head = $dept_head . ', ' . $post;
                }
            }
        }

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

        // $revision_plan = RevisionPlan::where('idmfo', '0')
        //     ->where('idpaps', '0')
        //     ->where('FFUNCCOD', $FFUNCCOD)
        //     ->where('year_period', $my_year)
        //     ->first();
        // $mooe = "0.00";
        // $ps = "0.00";
        // if ($revision_plan) {
        //     $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
        //         ->where('category', 'Maintenance, Operating, and Other Expenses')
        //         ->sum('amount');

        //     $ps1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
        //         ->where('category', 'Personnel Services')
        //         ->sum('amount');
        //     $mooe2 = (float)$mooe1;
        //     $ps2 = (float)$ps1;
        //     $mooe2 = $mooe2 / 2;
        //     $ps2 = $ps2 / 2;
        //     $mooe = number_format($mooe2, 2);
        //     $ps = number_format($ps2, 2);
        // }
        // dd("dd");
        $off = FFUNCCOD::where('FFUNCCOD', $opcr_list->FFUNCCOD)->first();
        // dd($opcr_list);
        return inertia('OPCR/Target/New/Index', [
            "opcr_list_id" => $opcr_list_id,
            "opcr_list" => $opcr_list,
            "opcr_id" => $opcr_list_id,
            "data" => $data,
            "FFUNCCOD" => $opcr_list->FFUNCCOD,
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'opcr_date' => $opcr_date,
            // 'mooe' => $mooe,
            // 'ps' => $ps,
            'office' => $off,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function storerevised(Request $request, $idopcr, $idpaps)
    {
        // dd($request);
        //dd($request->target_success_indicator);
        // $attributes = $request->validate([
        //     'output_id' => 'required',
        //     'idpaps' => 'required',
        //     'office_performance_commitment_rating_list_id' => 'required',
        // ]);

        //SENTENCE******************
        // $output = Output::where('idpaps',$request->idpaps)->first()->Outputs;
        // $quality = Quality::where('idpaps',$request->idpaps)->first()->quality;
        // $rating =rating::where('idpaps',$request->idpaps)->first()->efficiency_quantity;
        // $timeliness =Timeliness::where('idpaps',$request->idpaps)->first()->timeliness;
        //$sentence = $request->quantity.' ('.$rating.') '.$output.' '.$timeliness.' with '.$quality.'.';
        //$correctedSentence = $this->correctSentence($sentence);
        //dd($correctedSentence);
        //**************** */
        // dd($request);
        // dd($idopcr);
        $opcr = OpcrTarget::where('idpaps', $idpaps)->where('office_performance_commitment_rating_list_id', $idopcr)->first();
        if ($opcr) {
            $opcr->is_included = '1';
            // $opcr_id = $opcr_list->office_performance_commitment_rating_list_id;
            $opcr->save();
        } else {
            $targ = new OpcrTarget();
            $targ->id = $request->id;
            $targ->target_success_indicator = ' ';
            $targ->output_id = ' ';
            $targ->quantity = 0;
            $targ->quantity_unit = ' ';
            $targ->comparison_operator = ' ';
            $targ->is_zero = '';
            $targ->quality_id = ' ';
            $targ->ratings_id = ' ';
            $targ->timeliness_id = ' ';
            $targ->remarks_final = ' ';
            $targ->idpaps = $idpaps;
            $targ->is_included = '1';
            $targ->office_performance_commitment_rating_list_id = $idopcr;
            $targ->save();
            //TEST $targ->id
            // dd($targ->id);
            //Office Performance Commitment Rating
            // $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $idopcr)
            // ->first();
            // dd($opcr_list);
            // $v_q = "3";
            // $v_r = "3";
            // $v_t = "3";
            // if ($request->quantity == null) {
            //     $v_q = "0";
            // }
            // if ($request->quality_id == null) {
            //     $v_r = "0";
            // }
            // if ($request->ratings_id == null) {
            //     $v_t = "0";
            // }
            //GENERATE RATING FOR THE TARGET
            // $success = SuccessIndicator::where('idpaps', $request->idpaps)->first();
            // $opcrf = new OfficePerformanceCommitmentRating();
            // $opcrf->id_paps = $request->idpaps;
            // $opcrf->id_opcr_target = $targ->id;
            // $opcrf->success_indicator_id = $success->id;
            // $opcrf->accomplishments = "";
            // $opcrf->rating_q = "1";
            // $opcrf->rating_e = "1";
            // $opcrf->rating_t = "1";
            // $opcrf->remarks = "-";
            // $opcrf->opcr_id    = $request->office_performance_commitment_rating_list_id;
            // $opcrf->FFUNCCOD = $opcr_list->FFUNCCOD;
            // $opcrf->department_code = $opcr_list->department_code;
            // $opcrf->save();
            // return redirect('/opcrtargetrevised/' . $idopcr)
            //     ->with('message', 'Office performance target added!');
        }

        return redirect()->back();
    }
    public function destroyrevised(Request $request)
    {
        // dd("delete");
        $opcr_list = OpcrTarget::findOrFail($request->id);
        $idpaps = $opcr_list->idpaps;
        $opcr_list_id = $opcr_list->id;
        // dd($opcr_list);
        $opcr_list->is_included = '0';
        $opcr_id = $opcr_list->office_performance_commitment_rating_list_id;
        $opcr_list->save();
        $opcr_target_budget = OpcrTargetBudget::where('idpaps', $idpaps)->where('opcr_list_id', $opcr_list_id)->delete();
        // OfficePerformanceCommitmentRating::where('id_opcr_target', $request->id)->delete();
        return redirect('/opcrtargetrevised/' . $opcr_id);
        // ->with('error', 'Office performance goal deleted!');
    }
    public function savePaps(Request $request, $idopcr, $bulk_selected)
    {
        $bulk_selected = filter_var($bulk_selected, FILTER_VALIDATE_BOOLEAN);
        $bul = '0';
        if ($bulk_selected === true) {
            // dd($bulk_selected . ' true');
            $bul = '1';
        }
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $idopcr)->first();
        ProgramAndProject::with('opcrtarget')
            ->select(
                'major_final_outputs.mfo_desc',
                'program_and_projects.id AS idpaps',
                'program_and_projects.paps_desc',
                'SU.success_indicator',
                'program_and_projects.idmfo',
                'SU.id AS su_id',
            )
            ->leftjoin('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
            ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
            ->where('program_and_projects.FFUNCCOD', $opcr_list->FFUNCCOD)
            ->where('major_final_outputs.id', '>', '45')
            ->whereNull('from_excel')
            ->groupBy('program_and_projects.id')
            ->orderBy('program_and_projects.idmfo', 'ASC')
            ->orderBy('program_and_projects.id', 'ASC')
            ->get()
            ->map(function ($item) use ($idopcr, &$counter, $bul) {
                $opcr = OpcrTarget::where('idpaps', $item->idpaps)->where('office_performance_commitment_rating_list_id', $idopcr)->first();
                // dd($bul);
                if ($opcr) {
                    $opcr->is_included = $bul;
                    $opcr->save();
                } else {
                    $targ = new OpcrTarget();
                    // $targ->id = $request->id;
                    $targ->target_success_indicator = ' ';
                    $targ->output_id = ' ';
                    $targ->quantity = 0;
                    $targ->quantity_unit = ' ';
                    $targ->comparison_operator = ' ';
                    $targ->is_zero = '';
                    $targ->quality_id = ' ';
                    $targ->ratings_id = ' ';
                    $targ->timeliness_id = ' ';
                    $targ->remarks_final = ' ';
                    $targ->idpaps = $item->idpaps;
                    $targ->is_included = $bul;
                    $targ->office_performance_commitment_rating_list_id = $idopcr;
                    $targ->save();
                }

                return ['item' => $item];
            });
        return redirect()->back();
    }
    public function storerevisedbulk(Request $request, $idopcr, $idpaps)
    {

        $opcr = OpcrTarget::where('idpaps', $idpaps)->where('office_performance_commitment_rating_list_id', $idopcr)->first();
        if ($opcr) {
            $opcr->is_included = '1';
            $opcr->save();
        } else {
            $targ = new OpcrTarget();
            $targ->id = $request->id;
            $targ->target_success_indicator = ' ';
            $targ->output_id = ' ';
            $targ->quantity = 0;
            $targ->quantity_unit = ' ';
            $targ->comparison_operator = ' ';
            $targ->is_zero = '';
            $targ->quality_id = ' ';
            $targ->ratings_id = ' ';
            $targ->timeliness_id = ' ';
            $targ->remarks_final = ' ';
            $targ->idpaps = $idpaps;
            $targ->is_included = '1';
            $targ->office_performance_commitment_rating_list_id = $idopcr;
            $targ->save();
        }

        return redirect()->back();
    }
    public function print_opcr_targets(Request $request)
    {

        $opcr_sem = OfficePerformanceCommitmentRatingList::with(['office', 'office.pgHead'])
            ->where('id', $request->idopcr)
            ->first();
        // dd($opcr_sem);
        $FFUNCCOD = "";
        if ($opcr_sem) {
            $FFUNCCOD = $opcr_sem->FFUNCCOD;
        }

        // dd($FFUNCCOD);
        $sem = $opcr_sem ? $opcr_sem->semester : '';
        $year = $opcr_sem ? $opcr_sem->year : '';
        $office = $opcr_sem ? ($opcr_sem->office ? $opcr_sem->office->office : '') : '';
        // dd($opcr_sem->office->pgHead);

        $pgHead = "";

        if ($opcr_sem && $opcr_sem->pg_head) {
            $pgHead = $opcr_sem->pg_head;
        } elseif ($opcr_sem && $opcr_sem->office && $opcr_sem->office->pgHead) {
            $pgHeadObj = $opcr_sem->office->pgHead;
            $firstName = $pgHeadObj->first_name ?? '';
            $lastName = $pgHeadObj->last_name ?? '';
            $middleName = $pgHeadObj->middle_name ?? '';
            $suffixName = $pgHeadObj->suffix_name ?? '';
            $postfixName = $pgHeadObj->postfix_name ?? '';

            $pgHead = trim($firstName . ' ' . (strlen($middleName) > 0 ? substr($middleName, 0, 1) . '. ' : '') . $lastName);

            if ($suffixName) {
                $pgHead .= ', ' . $suffixName;
            }
            if ($postfixName) {
                $pgHead .= ', ' . $postfixName;
            }
        }

        // Assistant PG Head
        $assistant_pg_head = "";
        $assistant_pg_head_2 = "";
        $assistant_pg_head_3 = "";
        if($opcr_sem){
            if($opcr_sem->assistant_pg_head){
                // ASSISTANT PG HEAD
                $assistant_pg_head = $opcr_sem->assistant_pg_head;
            }else{
                // ASSISTANT PG HEAD
                $ap_head=[];
                $ap_head_1=[];
                $ap_head_2=[];
                $ap_head_3=[];
                if($opcr_sem->department_code=='16'){
                    $ap_head = UserEmployees::where('department_code',$opcr_sem->department_code)
                    ->where('salary_grade','24')
                    ->where('active_status','ACTIVE')
                    ->get();

                    // dd($ap_head[0],$ap_head[1],$ap_head[2]);
                    $ap_head_1 = $ap_head[0];
                    $ap_head_2 = $ap_head[1];
                    $ap_head_3 = $ap_head[2];


                    if($ap_head_1){
                        $assistant_pg_head = $ap_head_1->first_name . ' ' . $ap_head_1->middle_name[0] . '. ' .
                        $ap_head_1->last_name;
                        $ap_suffix = $ap_head_1->suffix_name;
                        $ap_post = $ap_head_1->postfix_name;
                        if ($ap_suffix) {
                            $assistant_pg_head = $assistant_pg_head . ', ' . $ap_suffix;
                        }
                        if ($ap_post) {
                            $assistant_pg_head = $assistant_pg_head . ', ' . $ap_post;
                        }
                    }

                    if($ap_head_2){
                        $assistant_pg_head_2 = $ap_head_2->first_name . ' ' . $ap_head_2->middle_name[0] . '. ' .
                        $ap_head_2->last_name;
                        $ap_suffix = $ap_head_2->suffix_name;
                        $ap_post = $ap_head_2->postfix_name;
                        if ($ap_suffix) {
                            $assistant_pg_head_2 = $assistant_pg_head_2 . ', ' . $ap_suffix;
                        }
                        if ($ap_post) {
                            $assistant_pg_head_2 = $assistant_pg_head_2 . ', ' . $ap_post;
                        }
                    }

                    if($ap_head_3){
                        $assistant_pg_head_3 = $ap_head_3->first_name . ' ' . $ap_head_3->middle_name[0] . '. ' .
                        $ap_head_3->last_name;
                        $ap_suffix = $ap_head_3->suffix_name;
                        $ap_post = $ap_head_3->postfix_name;
                        if ($ap_suffix) {
                            $assistant_pg_head_3 = $assistant_pg_head_3 . ', ' . $ap_suffix;
                        }
                        if ($ap_post) {
                            $assistant_pg_head_3 = $assistant_pg_head_3 . ', ' . $ap_post;
                        }
                    }

                }else if($opcr_sem->department_code=='11'){
                    $ap_head = UserEmployees::where('department_code',$opcr_sem->department_code)
                    ->where('salary_grade','24')
                    ->where('active_status','ACTIVE')
                    ->get();

                    // dd($ap_head[0],$ap_head[1],$ap_head[2]);
                    $ap_head_1 = $ap_head[0];
                    $ap_head_2 = $ap_head[1];
                    // $ap_head_3 = $ap_head[2];


                    if($ap_head_1){
                        $assistant_pg_head = $ap_head_1->first_name . ' ' . $ap_head_1->middle_name[0] . '. ' .
                        $ap_head_1->last_name;
                        $ap_suffix = $ap_head_1->suffix_name;
                        $ap_post = $ap_head_1->postfix_name;
                        if ($ap_suffix) {
                            $assistant_pg_head = $assistant_pg_head . ', ' . $ap_suffix;
                        }
                        if ($ap_post) {
                            $assistant_pg_head = $assistant_pg_head . ', ' . $ap_post;
                        }
                    }

                    if($ap_head_2){
                        $assistant_pg_head_2 = $ap_head_2->first_name . ' ' . $ap_head_2->middle_name[0] . '. ' .
                        $ap_head_2->last_name;
                        $ap_suffix = $ap_head_2->suffix_name;
                        $ap_post = $ap_head_2->postfix_name;
                        if ($ap_suffix) {
                            $assistant_pg_head_2 = $assistant_pg_head_2 . ', ' . $ap_suffix;
                        }
                        if ($ap_post) {
                            $assistant_pg_head_2 = $assistant_pg_head_2 . ', ' . $ap_post;
                        }
                    }


                }else{
                    $ap_head = UserEmployees::where('department_code',$opcr_sem->department_code)
                    ->where('salary_grade','24')
                    ->where('active_status','ACTIVE')
                    ->first();
                    if($ap_head){
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
                    }
                }


            }

            if($opcr_sem->assistant_pg_head_2){
                // ASSISTANT PG HEAD 2
                $assistant_pg_head_2 = $opcr_sem->assistant_pg_head_2;
            }
            if($opcr_sem->assistant_pg_head_3){
                // ASSISTANT PG HEAD 3
                $assistant_pg_head_3 = $opcr_sem->assistant_pg_head_3;
            }

        }
        // dd($opcr_sem);
        // OpcrTargetBudget
        $opcr_target = OpcrTarget::with([
            'paps' => function ($query) {
                $query->orderBy('id', 'asc')
                    ->orderBy('idmfo', 'asc');
            },
            'paps.MFO',
            'paps.opcr_stardard',
            'opcrList',
            'opcrList.opcrTargetBudget'
        ])
            ->where('office_performance_commitment_rating_list_id', $request->idopcr)
            ->where('is_included', '1')
            ->whereHas('paps')
            ->get()
            ->map(function ($item) use ($office, $pgHead, $sem, $year, $FFUNCCOD, $assistant_pg_head, $assistant_pg_head_2, $assistant_pg_head_3) {
                // dd($item->opcrList->year);
                $mfo_desc = "";
                $paps_desc = "";
                $success_indicator = "";
                $prescribed_period = "";
                $office_accountable = "";
                $quality1 = "";
                $quality2 = "";
                $quality3 = "";
                $efficiency1 = "";
                $efficiency2 = "";
                $efficiency3 = "";
                $timeliness = "";
                $monitoring = "";
                $approver = '';
                $pos = '';
                if($item->opcrList){
                    if($item->opcrList->year){
                        $semester = $sem; // "First Semester" or "Second Semester"

                        $semValue = $semester === 'Second Semester' ? 2 : 1;
                        // Inputs
                        // dd($year, $semValue, $FFUNCCOD);
                        // Default values
                        // ===============================
                        // TERM DETERMINATION
                        // ===============================

                        // Term 1: Second Semester 2022 → First Semester 2025
                        if (
                            ($year > 2022 || ($year == 2022 && $semValue == 2)) &&
                            ($year < 2025 || ($year == 2025 && $semValue == 1))
                        ) {

                            $approver = 'Dorothy M. Gonzaga';
                            $pos = 'Governor';
                            if (in_array($FFUNCCOD, ['1021', '1016'])) {
                                $approver = 'Tyron L. Uy';
                                $pos = 'Vice Governor';
                            }
                        }

                        // Term 2: Second Semester 2025 → First Semester 2028
                        elseif (
                            ($year > 2025 || ($year == 2025 && $semValue == 2)) &&
                            ($year < 2028 || ($year == 2028 && $semValue == 1))
                        ) {
                            $approver = 'Engr. Raul G. Mabanglo';
                            $pos = 'Governor';

                            if (in_array($FFUNCCOD, ['1021', '1016'])) {
                                $approver = 'Dorothy M. Gonzaga';
                                $pos = 'Vice Governor';
                            }
                        }

                        // Term 3: Second Semester 2028 → First Semester 2031
                        elseif (
                            ($year > 2028 || ($year == 2028 && $semValue == 2)) &&
                            ($year < 2031 || ($year == 2031 && $semValue == 1))
                        ) {
                            $approver = '-';
                            $pos = 'Governor';
                            if (in_array($FFUNCCOD, ['1021', '1016'])) {
                                $approver = '-';
                                $pos = 'Vice Governor';
                            }
                        }
                    }
                }
                // $approver = 'Engr. Raul G. Mabanglo';
                // $pos = 'Governor';
                // // $FFUNCCOD = $item->FFUNCCOD;
                // // dd($FFUNCCOD);
                // if ($FFUNCCOD == '1021') {
                //     $approver = 'Dorothy M. Gonzaga';
                //     $pos = 'Vice Governor';
                // }
                // if ($FFUNCCOD == '1016') {
                //     $approver = 'Dorothy M. Gonzaga';
                //     $pos = 'Vice Governor';
                // }
                // dd($item->paps->opcr_standard[0]);
                if ($item->paps) {
                    $paps_desc = $item->paps->paps_desc;
                    if ($item->paps->MFO) {
                        $mfo_desc = $item->paps->MFO->mfo_desc;
                    }
                    if ($item->paps->opcr_stardard) {
                        // dd($item->paps->opcr_stardard->output);
                        $success_indicator = $item->paps->opcr_stardard->performance_measure;
                        $office_accountable = $item->paps->opcr_stardard->office_accountable;
                        $prescribed_period = $item->paps->opcr_stardard->prescribed_period;
                        $quality1 = $item->paps->opcr_stardard->quality1;
                        $quality2 = $item->paps->opcr_stardard->quality2;
                        $quality3 = $item->paps->opcr_stardard->quality3;
                        $efficiency1 = $item->paps->opcr_stardard->efficiency1;
                        $efficiency2 = $item->paps->opcr_stardard->efficiency2;
                        $efficiency3 = $item->paps->opcr_stardard->efficiency3;
                        $timeliness = $item->paps->opcr_stardard->timeliness;
                        $monitoring = $item->paps->opcr_stardard->monitoring;
                    }
                }
                // $period = "";
                if ($sem === 'First Semester') {
                    // dd($sem);
                    $period = "January to June, " . $year;
                } else {
                    $period = "July to December, " . $year;
                }
                $matchingRow = $item->opcrList->opcrTargetBudget->where('idpaps', $item->idpaps)->first();

                // dd($item);
                // dd($item->opcrList->opcrTargetBudget);
                return [
                    'mfo' => $mfo_desc,
                    'paps_desc' => $paps_desc,
                    'budget_alloted' => $matchingRow ? $matchingRow->amount : "0.00",
                    //Success indicator
                    'performance_measure' => $success_indicator,
                    'prescribed_period' => $prescribed_period,
                    'office_accountable' => $office_accountable,
                    'quality1' => $quality1,
                    'quality2' => $quality2,
                    'quality3' => $quality3,
                    'efficiency1' => $efficiency1,
                    'efficiency2' => $efficiency2,
                    'efficiency3' => $efficiency3,
                    'timeliness' => $timeliness,
                    'monitoring' => $monitoring,
                    'idpaps' => $item->paps ? $item->paps->id : "",
                    'office' => $office,
                    'pgHead' => $pgHead,
                    'assistant_pg_head'=>$assistant_pg_head,
                    'assistant_pg_head_2'=>$assistant_pg_head_2,
                    'assistant_pg_head_3'=>$assistant_pg_head_3,
                    'sem' => $sem,
                    'year' => $year,
                    'period' => $period,
                    'approver' => $approver,
                    'pos' => $pos
                    // 'item' => $item
                ];
            });

        if ($opcr_target->isEmpty()) {
            $opcr_target = collect([[
                'mfo' => "",
                'paps' => "",
                'success_indicator' => "",
                'prescribed_period' => "",
                'office_accountable' => "",
                'quality1' => "",
                'quality2' => "",
                'quality3' => "",
                'efficiency1' => "",
                'efficiency2' => "",
                'efficiency3' => "",
                'timeliness' => "",
                'monitoring' => "",
                'idpaps' => null,
                'office' => $office,
                'pgHead' => $pgHead,
                'assistant_pg_head'=>$assistant_pg_head,
                'sem' => $sem,
                'year' => $year,
                'period' => ($sem === 'First Semester')
                    ? "January to June, " . $year
                    : "July to December, " . $year,
                'approver' => '',
                'pos' => ''
            ]]);
        }
        return $opcr_target;
    }
    public function printing_targets_new(Request $request)
    {
        $opcr_id = $request->opcr_id;
        $opcr_sem = OfficePerformanceCommitmentRatingList::with(['office', 'office.pgHead', 'paps.opcr_stardard'])
            ->where('id', $request->opcr_id)
            ->first();
        // dd($opcr_sem);

        $sem = $opcr_sem ? $opcr_sem->semester : '';
        $year = $opcr_sem ? $opcr_sem->year : '';
        $office = $opcr_sem ? ($opcr_sem->office ? $opcr_sem->office->office : '') : '';
        // dd($opcr_sem->office->pgHead);
        $first_name = $opcr_sem ? ($opcr_sem->office ? ($opcr_sem->office->pgHead ? $opcr_sem->office->pgHead->first_name : '') : '') : '';
        // $middle_name = $opcr_sem->office ? ($opcr_sem->office->pgHead ? $opcr_sem->office->pgHead->middle_name : ($opcr_sem->office->pgHead->middle_name ? substr($opcr_sem->office->pgHead->middle_name, 0, 1) . '.' : '')) : '';
        $middle_name = $opcr_sem ? ($opcr_sem->office ? ($opcr_sem->office->pgHead ? ($opcr_sem->office->pgHead->middle_name ? $opcr_sem->office->pgHead->middle_name : '') : '') : '') : '';

        // dd(substr($middle_name, 0, 1));
        $last_name = $opcr_sem ? ($opcr_sem->office ? ($opcr_sem->office->pgHead ? $opcr_sem->office->pgHead->last_name : '') : '') : '';
        $suffix_name = $opcr_sem ? ($opcr_sem->office ? ($opcr_sem->office->pgHead ? ($opcr_sem->office->pgHead->suffix_name ? ', ' . $opcr_sem->office->pgHead->suffix_name : '') : '') : '') : '';
        $postfix_name = $opcr_sem ? ($opcr_sem->office ? ($opcr_sem->office->pgHead ? ($opcr_sem->office->pgHead->postfix_name ? ', ' . $opcr_sem->office->pgHead->postfix_name : '') : '') : '') : '';
        $pgHead = $first_name . ' ' . ($middle_name ? substr($middle_name, 0, 1) . '. ' : '') . $last_name . $suffix_name . $postfix_name;
        $data = OpcrTarget::with(['paps', 'paps.MFO'])
            ->where('office_performance_commitment_rating_list_id', $opcr_id, $pgHead, $sem, $year)
            ->where('is_included', '1')
            ->get()
            ->map(function ($item) {
                return [
                    'mfo' => $item->paps ? ($item->paps->MFO ? $item->paps->MFO->mfo_desc : "") : "",
                    'paps' => $item->paps ? $item->paps->paps_desc : "",
                    'success_indicator' => $item->target_success_indicator,
                ];
            });

        dd($data);
    }
}
