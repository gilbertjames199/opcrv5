<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkplansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workplans', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_project_profile');
            $table->longText('strategies');
            $table->longText('performance_indicators_target'); //targets/indicators table
            $table->string('gender_issues');
            $table->string('timeline');
            $table->string('outcome');
            //$table->string('budget_cost');
            $table->string('responsible_person');
            $table->string('climate_change_topology_code');
            //$table->string('account_code');
            // $table->string('is_subworkplan');
            // $table->string('has_subworkplans');
            // $table->string('workplan_level');
            $table->string('category');
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
        Schema::dropIfExists('workplans');
    }
}
