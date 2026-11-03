<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProjectColumnsToExpectedRevisedOutputs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('expected_revised_outputs', function (Blueprint $table) {
            $table->string('activity_project_id')->nullable()->comment('null if stratergy_project_id is not null ')->after('activity_id');
            $table->string('strategy_project_id')->nullable()->comment('null if activity_project_id is not null ')->after('strategy_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('expected_revised_outputs', function (Blueprint $table) {
            //
        });
    }
}
