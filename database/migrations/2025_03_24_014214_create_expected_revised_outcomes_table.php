<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpectedRevisedOutcomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expected_revised_outcomes', function (Blueprint $table) {
            $table->id();
            $table->text('description');
            $table->string('strategy_id')->nullable();
            $table->string('activity_id')->nullable();
            $table->string('is_strategy_outcome');
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
        Schema::dropIfExists('expected_revised_outcomes');
    }
}
