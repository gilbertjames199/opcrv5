<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSprnToAnnualInvestmentPlanInstitutionals extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('annual_investment_plan_institutionals', function (Blueprint $table) {
            $table->string('sprn')->nullable()->after('sip_period');
            $table->string('last_page_number')->nullable()->after('sprn');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('annual_investment_plan_institutionals', function (Blueprint $table) {
            //
        });
    }
}
