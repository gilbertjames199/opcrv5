<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlan;
use App\Models\RevisionPlanComment;
use Illuminate\Http\Request;

class RevisionPlanCommentController extends Controller
{
    protected $revisionPlanComment;
    public function __construct(RevisionPlanComment $revisionPlanComment)
    {
        $this->revisionPlanComment = $revisionPlanComment;
    }

    public function index()
    {
        // Logic to retrieve and return comments for revision plans
        // This could involve fetching comments from the database
        // and returning them in a view or as a JSON response.
    }
    public function storeComment(Request $request)
    {
        // dd($request);
        // dd(auth()->user()->recid);
        $request->validate([
            'comment' => 'required',
        ]);
        $comment = new RevisionPlanComment();
        $comment->table_row_id = $request->input('table_row_id');
        $comment->table_name = $request->input('table_name');
        $comment->column_name = $request->input('column_name');
        $comment->comment = $request->input('comment');
        $comment->comment_status = '0'; // Default to '0' if not provided
        $comment->user_id = auth()->user()->recid; // Assuming user is authenticated
        // Only store fuzzy data for rationale, objectives, target_beneficiaries
        if(in_array($request->input('column_name'), ['rationale', 'objective', 'beneficiaries'])){
            $comment->selected_text = $request->input('selected_text');
            $comment->start_index = $request->input('start_index');
            $comment->end_index = $request->input('end_index');
            $comment->context_before = $request->input('context_before');
            $comment->context_after = $request->input('context_after');
        }
        $comment->save();
        if(in_array($request->input('column_name'), ['rationale', 'objective', 'beneficiaries'])){
            $this->insert_tags($request, $comment, $request->input('column_name'),
             $request->input('start_index'),
             $request->input('end_index'),
             $request->input('table_row_id')
            );
        }

        // if(in_array($request->input('column_name'), ['rationale', 'objective', 'beneficiaries'])){
        //     $this->tagCommentInText(
        //     $comment->id,
        //     $request->input('table_name'),
        //     $request->input('table_row_id'),
        //     $request->input('column_name')
        //     );
        // }

        // dd($comment);
        return back()->with('success', 'Comment added successfully.');
        // $request->params['comment']
    }
    private function insert_tags(Request $request, $comment, $column_name, $start_index, $end_index, $table_row_id){
        $plan = RevisionPlan::findOrFail($table_row_id);

        $column = $column_name;
        $text   = $plan->$column;

        $start = (int) $start_index;
        $end   = (int) $end_index;

        $length = $end - $start;
        $extracted = mb_substr($text, $start, $length);

        if ($extracted !== $request->selected_text) {
            // abort(409, 'Selected text no longer matches. Please reselect.');
        }else{
            // ${comment.id}_${comment.table_name}_${comment.column_name}
            $spanId = "{$comment->id}_revision_plans_{$column}";
            // 'data-comment-id="'.$comment->id.'" '.
            $wrapped =
                '<span id="'.$spanId.'" '.
                'style="color:red;font-weight:bold"
                contenteditable="false"
                >'.
                e($extracted).
                '</span>';
            $before = mb_substr($text, 0, $start);
            $after  = mb_substr($text, $end);

            $plan->$column = $before . $wrapped . $after;
            $plan->save();
        }

    }
    public static function tagCommentInText($commentId, $tableName, $rowId, $columnName)
    {
        // 1️⃣ Get the comment
        $comment = RevisionPlanComment::find($commentId);
        if (!$comment) {
            return false;
        }

        // 2️⃣ Load the revision plan row
        $revisionPlan = RevisionPlan::find($rowId);
        if (!$revisionPlan) {
            return false;
        }

        $originalText = $revisionPlan->{$columnName};
        $selectedText = $comment->selected_text;

        // 3️⃣ Locate the correct instance of the selected text using context
        $startIndex = null;
        $pattern = '/' . preg_quote($comment->context_before, '/') .
                   '(' . preg_quote($selectedText, '/') . ')' .
                   preg_quote($comment->context_after, '/') . '/';

        if (preg_match($pattern, $originalText, $matches, PREG_OFFSET_CAPTURE)) {
            $startIndex = $matches[1][1]; // offset of selected text
        } else {
            // fallback to stored start_index
            $startIndex = $comment->start_index;
        }

        if ($startIndex === null) {
            return false; // cannot locate exact text
        }

        $endIndex = $startIndex + strlen($selectedText);

        // 4️⃣ Wrap the selected text in a span with unique ID
        $before = substr($originalText, 0, $startIndex);
        $toTag = substr($originalText, $startIndex, strlen($selectedText));
        $after = substr($originalText, $endIndex);

        $taggedText = $before .
                      '<span id="' . $commentId . '_' . $tableName . '_' . $columnName . '" style="background-color: darkorange; color:black;">' .
                      $toTag .
                      '</span>' .
                      $after;

        // 5️⃣ Save back to the database
        $revisionPlan->{$columnName} = $taggedText;
        $revisionPlan->save();

        return true;
    }
    public function actionComment(Request $request)
    {
        // dd($request->params);
        $action = $request->params['type'];
        $id = $request->params['id'];
        if ($action == 'delete') {
            // dd("delete");
            $this->destroyComment($id);
            return back()->with('success', 'Comment deleted successfully');
        } else  if ($action == 'reset') {
            // dd("reset");
            $this->updateStatus($id, '0');
            return back()->with('success', 'Comment status reset to unresolved successfully');
        } else  if ($action == 'resolve') {
            // dd("resolve");
            $this->updateStatus($id, '1');
            return back()->with('success', 'Comment status resolved successfully');
        } else {
            dd("not found action");
        }
    }
    public function destroyComment($id)
    {
        $comment =RevisionPlanComment::find($id);
        $table_column = $comment->column_name;
        // dd($comment);
        if(in_array($table_column, ['rationale', 'objective', 'beneficiaries'])){
            $this->destroy_tags($comment);
        }
        // $this->destroy_tags($comment);
        $comment->delete();
    }

    public function destroy_tags($comment)
    {
        // dd($comment);
        $plan = RevisionPlan::findOrFail($comment->table_row_id);
        $column = $comment->column_name;

        $spanId = "{$comment->id}_revision_plans_{$column}";

        $plan->$column = preg_replace(
            '/<span[^>]*id="'.preg_quote($spanId, '/').'"[^>]*>(.*?)<\/span>/si',
            '$1',
            $plan->$column
        );

        $plan->save();
        $comment->delete();
    }
    public function updateStatus($id, $stat)
    {
        $rev = RevisionPlanComment::where('id', $id)->first();
        // dd($rev);
        $rev->comment_status = $stat;
        $rev->save();
    }
    public function updateComment(Request $request, $id)
    {
        // dd($request->params['reply']);
        // dd($id);
        $request->validate([
            'params.reply' => 'required',
        ]);
        $comment = RevisionPlanComment::find($id);
        // dd(auth()->user()->UserName);

        // dd($comment);
        if ($comment) {
            $uname = trim(auth()->user()->FullName);
            $reply = $comment->reply;
            $concat = $reply . ' <b>' . $uname . '</b> replied: <i>' . $request->params['reply'] . '</i><br><br>';
            $comment->reply = $concat;
            $comment->save();
            return back()->with('success', 'Comment updated successfully.');
        } else {
            return back()->withErrors(['error' => 'Comment not found.']);
        }
    }
}
