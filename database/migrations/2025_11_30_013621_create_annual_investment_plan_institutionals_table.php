<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnnualInvestmentPlanInstitutionalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annual_investment_plan_institutionals', function (Blueprint $table) {
            $table->id();
            $table->string('year_period')->comment('The year for which the AIP was prepared');
            $table->string('ldc_approved')->comment(
                '-1 -default, not approved by LDC; 0 -submitted to LDC and staging for approval;
                1 -approved by LDC;
                -2 -returned with ammendments'
            )->default("-1");
            $table->string('sp_approved')->comment(
                '-1 -default, not approved by SP; 0 -submitted to SP and staging for approval;
                1 -approved by SP;
                -2 -returned by SP with ammendments'
            )->default("-1");
            $table->string('sip_period')->nullable()->comment('Fiscal period for the SIP, used to generate SIP numbers');
            $table->timestamps();
        });
        Schema::create('annual_investment_plan_institutional_trackings', function (Blueprint $table) {
            $table->id();
            $table->string('aip_id')->comment('references annual_investment_plan_institutionals table');
            $table->string('user')->comment('id of the user who acted');
            $table->string('type')->comment('LDC0 -Submitted for LDC Review;
                LDC-1 -Returned by LDC;
                LCD1 -Approved by LDC;
                SP0 -Submitted for SP Review;
                SP-1 -Returned by SP;
                SP1 -Approved by SP');
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
        Schema::dropIfExists('annual_investment_plan_institutionals');
    }
}
