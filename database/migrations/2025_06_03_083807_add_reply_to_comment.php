<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReplyToComment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plan_comments', function (Blueprint $table) {
            $table->text('reply')->nullable()->after('comment');
            $table->boolean('show_comment_box')->default(false)->after('reply');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('revision_plan_comments', function (Blueprint $table) {
            //
        });
    }
}
