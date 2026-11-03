<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToTeamPlan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('team_plans', function (Blueprint $table) {
            $table->string('empl_id')->after('role');
            $table->string('competency')->after('empl_id');
            $table->string('position')->after('competency');
            $table->string('with_gad_training')->after('position');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('team_plans', function (Blueprint $table) {
            //
        });
    }
}
