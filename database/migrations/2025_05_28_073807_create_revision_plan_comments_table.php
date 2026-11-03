<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRevisionPlanCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('revision_plan_comments', function (Blueprint $table) {
            $table->id();
            $table->string('table_row_id')->comment('ID of the row in the table being commented on');
            $table->string('table_name');
            $table->string('column_name');
            $table->text('comment');
            $table->string('comment_status')->default('0')->comment('0-pending/1-resolved'); // pending, approved, rejected
            $table->string('user_id')->comment('ID of the user who made the comment');
            $table->string('user_id_approved')->comment('Name of the user who approved the comment');
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
        Schema::dropIfExists('revision_plan_comments');
    }
}
