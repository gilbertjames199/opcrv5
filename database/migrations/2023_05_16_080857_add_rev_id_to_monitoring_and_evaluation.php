<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRevIdToMonitoringAndEvaluation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('monitoring_and_evaluations', function (Blueprint $table) {
            $table->integer('revision_plan_id')->after('gad')
                    ->comment('ID of parent revision plan');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('monitoring_and_evaluations', function (Blueprint $table) {
            //
        });
    }
}
