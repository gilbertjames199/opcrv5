<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRemarksAndIdooeToBudgetaryRequirements extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('budget_requirements', function (Blueprint $table) {
            $table->string('idooe')->after('revision_plan_id');
            $table->string('remarks')->after('source');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('budget_requirements', function (Blueprint $table) {
            //
        });
    }
}
