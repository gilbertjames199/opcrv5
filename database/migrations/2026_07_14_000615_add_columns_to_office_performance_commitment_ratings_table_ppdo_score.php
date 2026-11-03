<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToOfficePerformanceCommitmentRatingsTablePpdoScore extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('office_performance_commitment_ratings', function (Blueprint $table) {
            $table->string('ppdo_q1')->nullable()->comment('PPDO q1 score')->after('t1');
            $table->string('ppdo_q2')->nullable()->comment('PPDO q2 score')->after('ppdo_q1');
            $table->string('ppdo_q3')->nullable()->comment('PPDO q3 score')->after('ppdo_q2');
            $table->string('ppdo_e1')->nullable()->comment('PPDO e1 score')->after('ppdo_q3');
            $table->string('ppdo_e2')->nullable()->comment('PPDO e2 score')->after('ppdo_e1');
            $table->string('ppdo_e3')->nullable()->comment('PPDO e3 score')->after('ppdo_e2');
            $table->string('ppdo_t1')->nullable()->comment('PPDO t1 score')->after('ppdo_e3');
            $table->string('ppdo_remarks')->nullable()->after('remarks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('office_performance_commitment_ratings', function (Blueprint $table) {
            //
        });
    }
}
