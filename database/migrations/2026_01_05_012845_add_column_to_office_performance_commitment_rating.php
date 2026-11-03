<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToOfficePerformanceCommitmentRating extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('office_performance_commitment_rating_lists', function (Blueprint $table) {
            $table->text('assistant_pg_head')->nullable()->after('pg_head');
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
