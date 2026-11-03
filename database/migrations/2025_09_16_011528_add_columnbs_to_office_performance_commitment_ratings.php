<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnbsToOfficePerformanceCommitmentRatings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('office_performance_commitment_ratings', function (Blueprint $table) {
            $table->string('q1')->after('FFUNCCOD')->nullable();
            $table->string('q2')->after('q1')->nullable();
            $table->string('q3')->after('q2')->nullable();
            $table->string('e1')->after('q3')->nullable();
            $table->string('e2')->after('e1')->nullable();
            $table->string('e3')->after('e2')->nullable();
            $table->string('t1')->after('e3')->nullable();
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
