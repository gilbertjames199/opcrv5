<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToExpectedRevisedOutput extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('expected_revised_outputs', function (Blueprint $table) {
            $table->string('is_strategy_output')->nullable()->comment('1 for strategy 0 for activity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('expected_revised_output', function (Blueprint $table) {
            //
        });
    }
}
