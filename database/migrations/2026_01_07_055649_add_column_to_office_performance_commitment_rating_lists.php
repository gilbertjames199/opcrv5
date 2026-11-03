<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToOfficePerformanceCommitmentRatingLists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('office_performance_commitment_rating_lists', function (Blueprint $table) {
            $table->string('assistant_pg_head_2')->nullable()->after('assistant_pg_head');
            $table->string('assistant_pg_head_3')->nullable()->after('assistant_pg_head_2');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('offce_performance_commitment_rating_lists', function (Blueprint $table) {
            //
        });
    }
}
