<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToRevisionPlanComments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plan_comments', function (Blueprint $table) {
            // Anchor columns for fuzzy highlighting
            $table->text('selected_text')->after('comment')->nullable();
            $table->integer('start_index')->after('selected_text')->nullable();
            $table->integer('end_index')->after('start_index')->nullable();
            $table->string('context_before', 255)->after('end_index')->nullable();
            $table->string('context_after', 255)->after('context_before')->nullable();

            // Optional extras for fuzzy matching
            $table->text('deleted_text')->after('context_after')->nullable();
            $table->float('fuzzy_score', 5, 2)->after('deleted_text')->nullable();
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
