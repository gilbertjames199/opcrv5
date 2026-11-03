<?php

namespace App\Http\Controllers;

use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrAccomplishment;
use App\Models\OpcrTarget;
use App\Models\Output;
use App\Models\ProgramAndProject;
use App\Models\Quality;
use App\Models\rating;
use App\Models\Timeliness;
use App\Models\AccomplishmentDetail;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OpcrAccomplishmentController extends Controller
{
    protected $model;
    public function __construct(OpcrAccomplishment $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $opcr_list_id)
    {
        //SELECT(,
        // 'OPTAC.actual_accomplishments',
        // 'OPTAC.id',
        // 'OPTAC.quantity',)
        //****************************************88 */
        // ->leftjoin(DB::raw('(Select id,
        //             office_performance_commitment_rating_list_id,
        //             idpaps, quantity, actual_accomplishments
        // FROM opcr_accomplishments WHERE
        // opcr_accomplishments.office_performance_commitment_rating_list_id='.$opcr_list_id.') AS OPTAC'),
        // 'OPT.idpaps', 'program_and_projects.id')
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        $data = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)
            ->select(
                'program_and_projects.id AS idpaps',
                'program_and_projects.paps_desc',
                'OPT.id AS idtarget',
                'OPT.quantity',
                'OPT.target_success_indicator',
                'OPT.quantity AS target_quantity',
                'SU.success_indicator'
            )
            ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
            ->leftjoin(DB::raw('(Select id,
                                                        office_performance_commitment_rating_list_id,
                                                        idpaps, quantity, target_success_indicator
                                FROM opcr_targets WHERE opcr_targets.office_performance_commitment_rating_list_id=' . $opcr_list_id . ') AS OPT'), 'OPT.idpaps', 'program_and_projects.id')
            ->orderBy('program_and_projects.paps_desc', 'asc')
            ->orderBy('OPT.target_success_indicator', 'asc')
            ->get()->map(function ($item) {
                $accomplishment = OpcrAccomplishment::select(
                    'opcr_accomplishments.id',
                    'opcr_accomplishments.actual_accomplishments',
                    'opcr_accomplishments.quantity',
                    'opcr_accomplishments.quality_id',
                    'qualities.quality AS qual',
                    'qualities.numerical_rating AS qnr',
                    'qualities.adjectival_rating AS qar',
                    'ratings.efficiency_quantity AS eff',
                    'ratings.numerical_rating AS eff_nr',
                    'ratings.adjectival_rating AS eff_ar',
                    'timelinesses.timeliness AS time',
                    'timelinesses.numerical_rating AS time_nr',
                    'timelinesses.adjectival_rating AS time_ar'
                )
                    ->where('opcr_target_id', $item->idtarget)
                    ->leftjoin('qualities', 'qualities.id', 'opcr_accomplishments.quality_id')
                    ->leftjoin('ratings', 'ratings.id', 'opcr_accomplishments.ratings_id')
                    ->leftjoin('timelinesses', 'timelinesses.id', 'opcr_accomplishments.timeliness_id')
                    ->first();
                //dd($accomplishment);
                $acc = "";
                $id = null;
                $quant = "0";

                $qual = "";
                $qnr = "";
                $qar = "";

                $eff = "";
                $eff_nr = "";
                $eff_ar = "";

                $time = "";
                $time_nr = "";
                $time_ar = "";
                if ($accomplishment) {
                    $acc = $accomplishment->actual_accomplishments;
                    $id = $accomplishment->id;
                    $quant = $accomplishment->quantity;

                    $qual = $accomplishment->qual;
                    $qnr = $accomplishment->qnr;
                    $qar = $accomplishment->qar;

                    $eff = $accomplishment->eff;
                    $eff_nr = $accomplishment->eff_nr;
                    $eff_ar = $accomplishment->eff_ar;

                    $time = $accomplishment->time;
                    $time_nr = $accomplishment->time_nr;
                    $time_ar = $accomplishment->time_ar;
                }
                return [
                    'idpaps' => $item->idpaps,
                    'paps_desc' => $item->paps_desc,
                    'idtarget' => $item->idtarget,
                    'target_quantity' => $item->quantity,
                    'target_success_indicator' => $item->target_success_indicator,
                    'target_quantity' => $item->target_quantity,
                    'actual_accomplishments' => $acc,
                    'quality' => $qual,
                    'quality_num_rating' => $qnr,
                    'quality_adj_rating' => $qar,
                    'accomplishment_quantity' => $quant,
                    'eff' => $eff,
                    'eff_nr' => $eff_nr,
                    'eff_ar' => $eff_ar,
                    'time' => $time,
                    'time_nr' => $time_nr,
                    'time_ar' => $time_ar,
                    'id' => $id,
                ];
            });
        // dd($data);
        return inertia('OPCR/Accomplishment/Index', [
            "opcr_list_id" => $opcr_list_id,
            "data" => $data,
            "FFUNCCOD" => $opcr_list->FFUNCCOD,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request, $opcr_list_id)
    {
        //dd($opcr_list_id);
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        //find paps
        $paps = ProgramAndProject::where('id', $request->idpaps)->first();
        //find targets
        $targets = OpcrTarget::where('id', $request->idtarget)->get();
        //load create form

        $qualities = Quality::where('idpaps', $request->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $ratings = rating::where('idpaps', $request->idpaps)->orderBy('efficiency_quantity', 'desc')->get();
        $timeliness = Timeliness::where('idpaps', $request->idpaps)->orderBy('numerical_rating', 'desc')->get();
        return inertia('OPCR/Accomplishment/Create', [
            "opcr_list_id" => $opcr_list_id,
            "idpaps" => $request->idpaps,
            "paps" => $paps,
            "targets" => $targets,
            'qualities' => $qualities,
            'ratings' => $ratings,
            'timeliness' => $timeliness,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        //dd($request);
        $attributes = $request->validate(
            [
                'actual_accomplishments' => 'required',
                'quantity' => 'required|numeric',
                'idpaps' => 'required',
                'opcr_target_id' => 'required',
                'office_performance_commitment_rating_list_id' => 'required',
                'opcr_target_id' => 'required'
            ],
            [
                'actual_accomplishments.required' => 'Actual accomplishment is required',
                'quantity.required' => 'Accomplishment quantity is required',
                'quantity.numeric' => 'Accomplishment quantity must be a numnber',
                'opcr_target_id.required' => 'Target is required',
            ]
        );
        //$this->model->create($attributes);
        $accomp = new OpcrAccomplishment();
        $accomp->actual_accomplishments = $request->actual_accomplishments;
        $accomp->quantity = $request->quantity;
        $accomp->idpaps = $request->idpaps;
        $accomp->opcr_target_id = $request->opcr_target_id;
        $accomp->office_performance_commitment_rating_list_id = $request->office_performance_commitment_rating_list_id;
        $accomp->quality_id = $request->quality_id;
        $accomp->ratings_id = $request->ratings_id;
        $accomp->timeliness_id = $request->timeliness_id;
        $accomp->remarks_final = $request->remarks_final;
        $accomp->save();
        return redirect('/opcraccomplishment/' . $request->office_performance_commitment_rating_list_id)
            ->with('message', 'Office performance accomplishment added!');
    }
    public function edit(Request $request, $opcr_list_id)
    {
        //dd($opcr_list_id);
        //FIND the OPCR Accomplishment
        $data = $this->model->where('id', $opcr_list_id)->first();

        //FIND the OPCR
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $data->office_performance_commitment_rating_list_id)->first();
        //find paps
        $paps = ProgramAndProject::where('id', $data->idpaps)->first();
        //find targets
        $targets = OpcrTarget::where('id', $data->opcr_target_id)->get();
        $qualities = Quality::where('idpaps', $data->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $ratings = rating::where('idpaps', $data->idpaps)->orderBy('efficiency_quantity', 'desc')->get();
        $timeliness = Timeliness::where('idpaps', $data->idpaps)->orderBy('numerical_rating', 'desc')->get();

        //load create form
        return inertia('OPCR/Accomplishment/Create', [
            "opcr_list_id" => $data->office_performance_commitment_rating_list_id,
            "idpaps" => $request->idpaps,
            "paps" => $paps,
            "targets" => $targets,
            'qualities' => $qualities,
            'ratings' => $ratings,
            'timeliness' => $timeliness,
            "editData" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        //dd('opcr accomplishment update');
        // $targ=OpcrTarget::where('id',$request->opcr_target_id)->first();
        // $output =Output::where('id', $request->idpaps);
        $data = $this->model->findOrFail($request->id);
        // $timeliness = Timeliness::where('id', $request->timeliness_id)->first();
        // $actual_accomplishments = $request->quantity.' '.$output->Outputs.' '.$timeliness->timeliness;
        //dd($request->plan_period);
        $data->update([
            'actual_accomplishments' => $request->actual_accomplishments,
            'opcr_target_id' => $request->opcr_target_id,
            'quantity' => $request->quantity,
            'idpaps' => $request->idpaps,
            'office_performance_commitment_rating_list_id' => $request->office_performance_commitment_rating_list_id,
            'quality_id' => $request->quality_id,
            'ratings_id' => $request->ratings_id,
            'timeliness_id' => $request->timeliness_id,
            'remarks_final' => $request->remarks_final,

        ]);

        return redirect('/opcraccomplishment/' . $request->office_performance_commitment_rating_list_id)
            ->with('info', 'Office performance target updated!');
    }
    public function destroy(Request $request)
    {
        $opcr_list = OpcrAccomplishment::findOrFail($request->id);

        $opcr_id = $opcr_list->office_performance_commitment_rating_list_id;
        $opcr_list->delete();
        return redirect('/opcraccomplishment/' . $opcr_id)
            ->with('error', 'OPCR Accomplishment deleted!');
        //dd("delete");
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

    public function accomplishment_opcr(Request $request, $month, $idpaps){

        $accomplishments = AccomplishmentDetail::whereMonth('date_accomplished_from', $month)
            ->where('idpaps', $idpaps)
            ->get();
        return response()->json($accomplishments);
    }
}
