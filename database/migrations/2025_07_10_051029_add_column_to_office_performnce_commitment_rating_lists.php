<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToOfficePerformnceCommitmentRatingLists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('office_performance_commitment_rating_lists', function (Blueprint $table) {
            $table->string('approver')->nullable()->after('department_code');
            $table->string('approver_position')->nullable()->after('approver');
            $table->string('pmt_secretariat')->default('Alicia M. Graciadas')->after('approver_position');
            $table->string('pmt_chair')->nullable('pending')->after('pmt_secretariat');
            $table->string('pg_head')->nullable()->after('pmt_chair');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('office_performance_commitment_rating_lists', function (Blueprint $table) {
            //
        });
    }
}
