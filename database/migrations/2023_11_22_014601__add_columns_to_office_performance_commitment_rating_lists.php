<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToOfficePerformanceCommitmentRatingLists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('office_performance_commitment_rating_lists', function (Blueprint $table) {
            $table->integer('accomplishment_status')->after('department_code')
                ->comment('-2 -returned, -1 -saved, 0 -submitted, 1 -reviewed, 2 -approved')
                ->default('-1');
            $table->integer('rating_status')->after('department_code')
                ->comment('-2 -returned, -1 -saved, 0 -submitted, 1 -reviewed, 2 -approved')
                ->default('-1');
            $table->integer('target_status')->after('department_code')
                ->comment('-2 -returned, -1 -saved, 0 -submitted, 1 -reviewed, 2 -approved')
                ->default('-1');
            $table->decimal('allotment_co', 12, 2)->after('allotment')->default(0);
            $table->decimal('allotment_ps', 12, 2)->after('allotment')->default(0);
            $table->decimal('allotment_mooe', 12, 2)->after('allotment')->default(0);
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
