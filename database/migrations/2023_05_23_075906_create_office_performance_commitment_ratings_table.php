<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfficePerformanceCommitmentRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('office_performance_commitment_ratings', function (Blueprint $table) {
            $table->id();
            $table->integer('success_indicator_id')->comment('ID of the Success Indicator');
            $table->text('accomplishments')->comment('Typed accomplishments for the success indicator');
            $table->integer('rating_q')->comment('Q rating');
            $table->integer('rating_e')->comment('E rating');
            $table->integer('rating_t')->comment('T rating');
            $table->text('remarks')->comment('Remarks');
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
        Schema::dropIfExists('office_performance_commitment_ratings');
    }
}
