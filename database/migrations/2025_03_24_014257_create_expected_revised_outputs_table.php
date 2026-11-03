<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpectedRevisedOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expected_revised_outputs', function (Blueprint $table) {
            $table->id();
            $table->text('description');
            $table->string('strategy_id')->nullable();
            $table->string('activity_id')->nullable();
            $table->string('is_strategy_outcome');
            $table->integer("project_id");
            $table->text("target_indicator")->nullable();
            $table->text("date_from")->nullable();
            $table->text("date_to")->nullable();
            $table->decimal("physical_q1", 12, 2)->nullable();
            $table->decimal("physical_q2", 12, 2)->nullable();
            $table->decimal("physical_q3", 12, 2)->nullable();
            $table->decimal("physical_q4", 12, 2)->nullable();
            $table->decimal("ps_q1", 12, 2)->nullable();
            $table->decimal("ps_q2", 12, 2)->nullable();
            $table->decimal("ps_q3", 12, 2)->nullable();
            $table->decimal("ps_q4", 12, 2)->nullable();
            $table->decimal("mooe_q1", 12, 2)->nullable();
            $table->decimal("mooe_q2", 12, 2)->nullable();
            $table->decimal("mooe_q3", 12, 2)->nullable();
            $table->decimal("mooe_q4", 12, 2)->nullable();
            $table->decimal("co_q1", 12, 2)->nullable();
            $table->decimal("co_q2", 12, 2)->nullable();
            $table->decimal("co_q3", 12, 2)->nullable();
            $table->decimal("co_q4", 12, 2)->nullable();
            $table->string('gad_issue')->nullable();
            $table->string('ccet_code')->nullable();
            $table->string('responsible')->nullable();
            $table->string('is_active')->default('1')->comment('1 for active, 2 for inactive');
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
        Schema::dropIfExists('expected_revised_outputs');
    }
}
