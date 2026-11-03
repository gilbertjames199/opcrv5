<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnnualInvestmentPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annual_investment_plans', function (Blueprint $table) {
            $table->id();
            $table->integer('year');
            $table->string('FFUNCTION');
            $table->string('FFUNCCOD');
            $table->string('raao_type');
            $table->string('program_id');
            $table->string('aip_code');
            $table->string('source')->comment('AIP, SIPA');
            $table->string('planned_ps');
            $table->string('planned_mooe');
            $table->string('planned_fe');
            $table->string('planned_co');
            $table->string('planned_total');
            $table->string('approved_ps')->nullable();
            $table->string('approved_mooe')->nullable();
            $table->string('approved_fe')->nullable();
            $table->string('approved_co')->nullable();
            $table->string('approved_total')->nullable();
            $table->string('tag')->nullable();
            $table->string('final_tag')->nullable();
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
        Schema::dropIfExists('annual_investment_plans');
    }
}
