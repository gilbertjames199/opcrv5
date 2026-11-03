<?php

namespace App\Http\Controllers;

use App\Models\HGDG_Checklist;
use App\Models\HGDGQuestion;
use App\Models\HGDGScore;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HGDGScoreController extends Controller
{
    protected $model;
    protected $new_res, $sub_new;
    public function __construct(HGDGScore $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $idrevplan)
    {

        $revplan = RevisionPlan::find($idrevplan);
        // dd($revplan);
        if($revplan->checklist_id==null || $revplan->checklist_id==0){
            return redirect()->back()->with('error', 'Cannot access HGDG Evaluation. No checklist assigned to this Revision Plan.');
        }
        // dd($revplan->status);
        // dd($request->source);
        $allowedUsers = [
            39, 406, 437, 489, 545, 586, 605, 681, 682, 683, 684, 685
        ];


        // dd(auth()->user()->recid);
        $checklist_id = $revplan->checklist_id;
        // dd($revplan->checklist_id);
        $count = $this->model->with('question')
            ->where('idrevplan', $idrevplan)
            ->whereHas('question', function ($query) use ($revplan, $checklist_id) {
                $query->where('checklist_id', $checklist_id);
            })
            ->count();
        $uid = auth()->user()->recid;

        //dd($uid);
        //dd($revplan);

        $hgdg_checklist = HGDG_Checklist::find($checklist_id);
        $hgdg_questions = $this->getResults($request, $checklist_id);
        // dd($hgdg_questions, $hgdg_checklist, $checklist_id, $revplan);
        $nr = [];
        if ($count < 1) {
            $nr = $this->setValues($hgdg_questions);
            foreach ($nr as $item) {
                $score = new HGDGScore();
                $score->idrevplan = $idrevplan;
                $score->question_id = $item['id'];
                $score->user_id = $uid;
                $score->score = "0";
                $score->result_comment = "";
                $score->FFUNCCOD = "";
                $score->save();
            }
        } else {
            //$results = $this->getResults($request, $revplan->checklist_id);
            $nr = $this->setValues($hgdg_questions);
        }
        $scores = HGDGScore::select(
            'hgdg_score.id',
            'hgdg_score.idrevplan',
            'hgdg_score.question_id',
            'hgdg_score.score',
            'hgdg_score.result_comment'
        )
            ->join(DB::raw("hgdg_questions"), "hgdg_questions.id", "hgdg_score.question_id")
            ->where("hgdg_score.idrevplan", $idrevplan)
            ->where("hgdg_questions.checklist_id", $checklist_id)
            ->get()
            ->map(function ($item) use ($idrevplan) {
                $question = HGDGQuestion::where('id', $item->question_id)->first();
                // $scory = floatval($item->score);
                // $scoor = floatval($question->score);
                // $scoor2 = floatval($question->score) * 2;
                $scory = round(floatval($item->score), 8);
                $scoor = round(floatval($question->score), 8);
                $scoor2 = round((floatval($question->score) * 2), 8);
                return [
                    "id" => $item->id,
                    "idrevplan" => $item->idrevplan,
                    "question_id" => $item->question_id,
                    "score" => $scory,
                    "result_comment" => $item->result_comment,
                    "has_subquestion" => $question->has_subquestion,
                    "question" => $question->question,
                    "q_score" => $scoor,
                    "q_score2" => $scoor2,
                    "question_number" => $question->question_number
                ];
            });
        // dd($scores);
        $idpaps = $revplan->idpaps;
        $idmfo = $revplan->idmfo;
        $scope = $revplan->scope;
        $loc='hgdg_score/Index';
        $can_edit=true;
        // dd($revplan);
        if (!in_array(auth()->user()->recid, $allowedUsers)) {

            if($revplan->status>-1){
                if($request->source=='rev_app'){
                    if($revplan->status>0){
                        $can_edit=false;
                    }else{
                        $can_edit=true;
                    }
                }else{
                    $status_words = [
                        '0'=>'Submitted',
                        '1'=>'Reviewed',
                        '2'=>'Locked'
                    ];
                    // $loc='hgdg_score/Uneditable';
                    $can_edit=false;
                    // return redirect()->back()->with('error', 'Cannot access HGDG Evaluation. Revision Plan is already '.$status_words[$revplan->status].'.');
                }

            }
        }else{
            if($revplan->status>-1){
                $can_edit=false;
            }
        }
        // dd($loc, $can_edit);
        return inertia($loc, [
            "questions" => $scores,
            "checklist_id" => $checklist_id,
            "hgdg_checklist" => $hgdg_checklist,
            "idrevplan" => $idrevplan,
            "idpaps" => $idpaps,
            "idmfo" => $idmfo,
            "scope" => $scope,
            "FFUNCCOD" => $revplan->FFUNCCOD,
            "revision_plan" => $revplan,
            "can_edit"=>$can_edit,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    private function getResults(Request $request, $checklist_id)
    {

        $questions = HGDGQuestion::where('question_id', 0)
            ->where('checklist_id', $checklist_id)
            ->orderBy(DB::raw('CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(question_number, ".", 1), " ", 1) AS UNSIGNED)'), 'ASC')
            ->get();

        $result = [];

        foreach ($questions as $question) {
            $result[] = $this->buildQuestionArray($question);
        }
        return $result;
    }
    private function buildQuestionArray($question)
    {
        $result = [
            'id' => $question->id,
            'question_number' => $question->question_number,
            'question' => $question->question,
            'checklist_id' => $question->checklist_id,
            'has_subquestion' => $question->has_subquestion,
            'score' => $question->score,
            'question_id' => $question->question_id,

        ];

        $subQuestions = $question->subQuestion;

        if ($subQuestions->isNotEmpty()) {
            foreach ($subQuestions as $subQuestion) {
                $result['subQuestions'][] = $this->buildQuestionArray($subQuestion);
            }
        }

        return $result;
    }

    function removeSubQuestions($array)
    {
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $this->removeSubQuestions($value);
            } else if ($key == 'subQuestions') {
                unset($array[$key]);
            }
        }
    }
    function setValues($results)
    {
        $this->new_res = [];
        $this->new_res = $this->iterateQuestions($results);
        $rr = $this->new_res;
        $this->sub_new = [];
        $this->removeSubQuestions($rr);
        //$rr=$this->sub_new;
        return $rr;
    }

    function iterateQuestions($results)
    {
        foreach ($results as $result) {
            array_push($this->new_res, $result);
            if (isset($result['subQuestions'])) {
                //array_push($this->new_res, $result);
                $this->iterateQuestions($result['subQuestions']);
            }
        }
        return $this->new_res;
    }
    public function store(Request $request)
    {
        //get the updated score value from VUEJS
        $hgdg_scores = $request->scores;

        //Get the Revision Plan ID
        $idrevplan = $request->idrevplan;

        //Convert request string to JSON object
        $myObject = json_decode($hgdg_scores);

        //Set value for HGDG_Score
        $HScore = 0;

        //Loop through the $myObject
        foreach ($myObject as $score) {
            //Set variable for the HGDG score as null
            $scory = null;

            //Fetch all the HGDG Scores using the score id
            $scory = HGDGScore::findOrFail($score->id);
            if ($scory) {
                $scory->update([
                    'score' => $score->score,
                    'result_comment' => $score->result_comment,
                ]);
                //$scory->update();
                $HScore = $HScore + floatval($score->score);
                //dd("updated: ".$scory->id." score: ".$scory->score." oscore: ".$score->score);
            }
        }
        $HPercent = 0;
        //UPDATE the HGDG Score of the Revision Plan
        $rev_plan = RevisionPlan::findOrFail($idrevplan);
        // dd($rev_plan);
        $HPercent = $HScore / 20;
        $HPercent = round($HPercent, 4);
        // dd($HPercent);
        // if ($HScore >= 4 && $HScore < 8) {
        //     $HPercent = 0.25;
        // } else if ($HScore >= 8 && $HScore < 15) {
        //     $HPercent = 0.5;
        // } else if ($HScore >= 15 && $HScore < 20) {
        //     $HPercent = 0.75;
        // } else if ($HScore >= 20) {
        //     $HPercent = 1;
        // }

        $bud = floatval($rev_plan->amount) * floatVal($HPercent);
        $rev_plan->update([
            "attributed_amount" => $bud,
            "hgdg_score" => $HScore,
            "hgdg_percent" => $HPercent
        ]);
        // dd($rev_plan);
        $scope = $rev_plan->scope;
        if ($scope == 'GAS') {
            return redirect('/revision/general/administration/services/' . $rev_plan->FFUNCCOD . '/plan')
                ->with('message', 'HGDG Evaluation Done');
        } else {
            if ($request->idpaps == '0') {
                // dd('idpaps 0: ' . $rev_plan->idpaps);
                return redirect('/mforevision/' . $rev_plan->idmfo)
                    ->with('message', 'HGDG Evaluation Done');
            } else {
                // dd('idpaps NOT 0: ' . $rev_plan->idpaps);
                return redirect('/revision/' . $rev_plan->idpaps)
                    ->with('message', 'HGDG Evaluation Done');
            }
        }
    }

    public function getChecklist(Request $request)
    {
        $box_number = $request->box_number;
        $sector    = $request->sector;
        $checklist_id = $request->checklist_id;
        return [
            "box_number" => $box_number,
            "sector" => $sector,
            "checklist_id" => $checklist_id
        ];
    }
    public function getQuestions(Request $request)
    {
        $questions = HGDGQuestion::where('checklist_id', $request->checklist_id)
            ->orderByRaw("CAST(SUBSTRING_INDEX(question_number, '.', 1) AS UNSIGNED)")
            ->get();
        return $questions;
    }

    public function getHgdgScoreSum($idrevplan)
    {
        // $totalScore = DB::table('hgdg_score')
        //     ->where('idrevplan', $idrevplan)
        //     ->sum('score');
        $totalScore = HGDGScore::with(['question','question.checklist'])->where('idrevplan', $idrevplan)
            ->whereHas('question', function ($query) use($idrevplan) {
                $query->where('checklist_id', function ($query) use($idrevplan) {
                    $query->select('checklist_id')
                        ->from('revision_plans')
                        ->where('id', $idrevplan);
                });
            })
            ->sum('score');
        // dd($totalScore);
        return $totalScore;
    }
    public function store_one(Request $request, $id, $score)
    {
        // dd($request->can_edit);
        if (!$request->boolean('can_edit')) {
            return redirect()->back()->with('message', 'Editing not allowed');
        }
        $clean = trim($id, '{}"'); // removes {, }, and " if present
        $value = (int) $clean;
        $cleanscore = trim($score, '{}"');
        $score_value = (float) $cleanscore;
        // dd($value, $id);
        $h_score = HGDGScore::find($value);
        $idrevplan = $h_score->idrevplan;
        // dd($h_score);
        // dd($h_score, $cleanscore, $score, $score_value);
        $h_score->score = $score_value;
        $h_score->save();

        $HScore = $this->getHgdgScoreSum($idrevplan);
        $HPercent = $HScore / 20;
        $rev_plan = RevisionPlan::findOrFail($idrevplan);
        $rev_plan->hgdg_score = $HScore;
        $rev_plan->hgdg_percent = $HPercent;
        $rev_plan->save();
        return redirect()->back();
    }

    public function store_comment(Request $request)
    {
        // dd($request->comment);
        $id = $request->id;
        $comment = $request->comment;
        $hg_score = HGDGScore::where("id", $id)->first();
        $hg_score->result_comment = $comment;
        $hg_score->save();
        return redirect()->back();
        // dd($comment, $id);
    }

    public function print_hgdg_score(Request $request){
        $idrevplan=$request->idrevplan;
        $revplan =RevisionPlan::with(['boxNumber','signatories'])->where('id', $idrevplan)->first();
        // dd($revplan);
        $checklist_id = optional($revplan)->checklist_id;
        $scores = HGDGScore::with(['question'])
        // select(
        //     'hgdg_score.id',
        //     'hgdg_score.idrevplan',
        //     'hgdg_score.question_id',
        //     'hgdg_score.score',
        //     'hgdg_score.result_comment'
        // )
            // ->join(DB::raw("hgdg_questions"), "hgdg_questions.id", "hgdg_score.question_id")
            ->where("hgdg_score.idrevplan", $idrevplan)
            // ->where("hgdg_questions.checklist_id", $checklist_id)
            ->whereHas('question', function($q)use($checklist_id){
                $q->where('checklist_id', $checklist_id);
            })
            ->get()
            ->map(function ($item) use ($idrevplan, $revplan) {
                $question = $item->question;
                // dd($revplan);
                // dd($revplan->date_start);
                $year = substr($revplan->date_start, 0, 4);
                // HGDGQuestion::where('id', $item->question_id)->first();
                // $scory = floatval($item->score);
                // $scoor = floatval($question->score);
                // $scoor2 = floatval($question->score) * 2;
                $sig = optional($revplan)->signatories;
                // dd($sig);
                $scory = round(floatval($item->score), 8);
                $scoor = round(floatval($question->score), 8);
                $scoor2 = round((floatval($question->score) * 2), 8);


                $preparedRow = $sig->firstWhere('acted', 'Prepared');
                $approvedRow = $sig->firstWhere('acted','Approved');
                // dd($preparedRow, $approvedRow);
                return [
                    "id" => $item->id,
                    "idrevplan" => $item->idrevplan,
                    "question_id" => $item->question_id,
                    "score" => $scory,
                    "result_comment" => $item->result_comment,
                    "has_subquestion" => $question->has_subquestion,
                    "question" => $question->question,
                    "q_score" => $scoor,
                    "q_score2" => $scoor2,
                    "question_number" => $question->question_number,
                    "year"=>$year,
                    "project_title" =>$year?'CY '.$year.' '.$revplan->project_title.' ':$revplan->project_title,
                    "project_title_no_year"=>$revplan->project_title,
                    "hgdg_score"=>$revplan->hgdg_score,
                    "box_number"=>optional(optional($revplan)->boxNumber)->box_number,
                    "sector"=>optional(optional($revplan)->boxNumber)->sector,
                    "program_coordinator"=>$preparedRow->name,
                    "program_coordinator_position"=>$preparedRow->position,
                    "head"=>optional($approvedRow)->name,
                    "head_position"=>optional($approvedRow)->position,
                ];
            });
        return count($scores)>0?$scores:[];
    }
}
