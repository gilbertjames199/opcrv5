<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStrategyActivityRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('strategy_activity_requests', function (Blueprint $table) {
            $table->id();
            $table->string('status')->default('-1')->comment('1= Approved, 0=Submitted, -1=Saved');
            $table->string('program_and_project_id');
            $table->string('revision_plan_id');
            $table->string('created_by');
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
        Schema::dropIfExists('strategy_activity_requests');
    }
}
