<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHGDGQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hgdg_questions', function (Blueprint $table) {
            $table->id();
            $table->string('question_number',10)->comment('Item number of the question');
            $table->Text('question')->comment('HGDG Question');
            $table->Integer('checklist_id')->comment('ID of the checklist');
            $table->decimal('score')->comment('Possible score for Partially Done');
            $table->tinyInteger('has_subquestion')->comment('Indicate if the question has subquestions (0 -no/1 -yes)');
            $table->bigInteger('question_id')->comment('ID of the parent question/subquestion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('h_g_d_g_questions');
    }
}
