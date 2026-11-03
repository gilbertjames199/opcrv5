<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpectedRevisedOutputsExpectedRevisedOutcomes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expected_revised_outputs_expected_revised_outcomes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('expected_revised_outcome_id')->constrained()->onDelete('cascade')->name('exp_rev_out_exp_rev_outcome_fk1');
            $table->foreignId('expected_revised_output_id')->constrained()->onDelete('cascade')->name('exp_rev_out_exp_rev_outcome_fk2');
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
        Schema::dropIfExists('expected_revised_outputs_expected_revised_outcomes');
    }
}
