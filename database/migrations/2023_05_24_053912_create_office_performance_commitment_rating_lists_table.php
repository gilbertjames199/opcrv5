<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfficePerformanceCommitmentRatingListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('office_performance_commitment_rating_lists', function (Blueprint $table) {
            $table->id();
            $table->string('semester')->comment('Semester prepared');
            $table->date('date_from')->comment('Period date/start');
            $table->date('date_to')->comment('period date /end');
            $table->integer('year')->comment('Year prepared');
            $table->string('FFUNCCOD')->comment('FFUNCCOD/ Office Code');
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
        Schema::dropIfExists('office_performance_commitment_rating_lists');
    }
}
