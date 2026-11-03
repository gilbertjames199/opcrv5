<?php

namespace App\Http\Controllers;

use App\Models\HGDG_Checklist;
use App\Models\HGDGQuestion;
use App\Models\HGDGScore;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HGDGQuestionController extends Controller
{
    //
    protected $model;
    public function __construct(HGDGQuestion $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $checklist_id)
    {
        if (auth()->user()->department_code != '04') {
            return redirect('/forbidden')
                ->with('error', 'You do not have access to this page.');
        }
        $hgdg_checklist = HGDG_Checklist::find($checklist_id);
        //dd($hgdg_checklist->box_number);
        $result = $this->getResults($request, $checklist_id);

        $json = json_encode($result);
        $sum = $this->model
            ->select(DB::raw('sum(score) AS sum'))
            ->where('has_subquestion', 0)
            ->where('checklist_id', $checklist_id)
            ->get()
            ->map(function ($item) {
                return $item->sum;
            });
        //dd($sum[0]);
        return inertia('hgdg_question/Index', [
            "questions" => $result,
            "checklist_id" => $checklist_id,
            "hgdg_checklist" => $hgdg_checklist,
            "sum" => $sum,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    private function getResults(Request $request, $checklist_id)
    {
        $questions = $this->model->where('question_id', 0)
            ->where('checklist_id', $checklist_id)
            ->orderBy(DB::raw('CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(question_number, ".", 1), " ", 1) AS UNSIGNED)'), 'ASC')
            ->get();
        // dd($questions);
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
    public function create(Request $request, $checklist_id)
    {
        $questions = $this->model->select('*')->where('checklist_id', $checklist_id)->orderBy('question_number')->get();
        // dd($questions);
        return inertia('hgdg_question/Create', [
            "questions" => $questions,
            "checklist_id" => $checklist_id,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        //dd($request);
        $attributes = $request->validate([
            'question_number' => 'required',
            'question' => 'required',
            'checklist_id' => 'required',
            'score' => 'required',
            //'has_subquestion' => 'required',
        ]);
        //dd($attributes);
        $question = new HGDGQuestion();
        $question->question_number = $attributes['question_number'];
        $question->question = $attributes['question'];
        $question->checklist_id = $attributes['checklist_id'];
        $question->score = $attributes['score'];
        $question->has_subquestion = 0;
        $question->question_id = $request->question_id;
        if (!$request->question_id) {
            $question->question_id = 0;
        }
        $question->save();
        if ($request->question_id) {
            $data = $this->model->findOrFail($request->question_id);
            if ($data->has_subquestion == 0) {
                $data->has_subquestion = 1;
                $data->save();
            }
        }
        return redirect('/HGDGQuestions/' . $request->checklist_id)
            ->with('message', 'Question added');
    }
    public function edit(Request $request, $id)
    {
        // $questions = $this->model->select('*')->orderBy('question_number')->get();
        $editData = HGDGQuestion::findOrFail($id);
        $checklist_id = $editData->checklist_id;
        $questions = $this->model->select('*')->where('checklist_id', $checklist_id)->orderBy('question_number')->get();
        //dd($questions);
        return inertia('hgdg_question/Create', [
            "questions" => $questions,
            "editData" => $editData,
            "checklist_id" => $checklist_id,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        //dd($request->question_id_former);

        $data = $this->model->findOrFail($request->id);
        $qu_f = $request->question_id_former;
        $qu = $request->question_id;

        $data->update([
            'question_number' => $request->question_number,
            'question' => $request->question,
            'checklist_id' => $request->checklist_id,
            'score' => $request->score,
            //'has_subquestion'=>$request->has_subquestion,
            'question_id' => $request->question_id,
        ]);
        $ques = $this->model->findOrFail($qu);
        $ques->update([
            "has_subquestion" => "1"
        ]);
        if ($qu_f != $qu) {
            $count = $this->model->where("question_id", $qu_f)->count();
            if ($count < 1) {
                //dd("set has subquestion of parent question to 0: ".$qu_f);
                $pq = $this->model->findOrFail($qu_f);
                //dd($pq);
                $pq->update([
                    "has_subquestion" => "0"
                ]);
            }
        }
        return redirect('/HGDGQuestions/' . $request->checklist_id)
            ->with('message', 'Question updated!!');
    }
    public function destroy(Request $request, $id)
    {
        //dd($id);

        $count_score = HGDGScore::where('question_id', $id)->count();
        $msg = "";
        $status = "";
        if ($count_score > 0) {
            $msg = "Unable to delete!";
            $status = "error";
        } else {
            $msg = "Checklist successfully deleted!";
            $status = "message";
            $data = $this->model->findOrFail($id);
            $qid = $data->question_id;
            $data->delete();
            $count = $this->model->where("question_id", $qid)->count();
            if ($count < 1) {
                $pq = $this->model->findOrFail($qid);
                $pq->update([
                    "has_subquestion" => "0"
                ]);
            }
        }
        return back()->with($status, $msg);
        // return redirect('/HGDGQuestions/'.$cid)
        //         ->with('message','Question updated!!');
    }

    //SUBQUESTIONS
    public function subcreate(Request $request, $checklist_id, $question_id)
    {
        $questions = $this->model->select('*')->orderBy('question_number')->get();
        //dd($questions);
        return inertia('hgdg_question/Create', [
            "questions" => $questions,
            "checklist_id" => $checklist_id,
            "question_id" => $question_id,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
}
