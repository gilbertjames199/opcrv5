<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeamPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_plans', function (Blueprint $table) {
            $table->id();
            $table->integer('revision_plan_id')->nullable()
            ->comment('Revision Plan ID');
            $table->integer('implementing_team_id')->nullable()
            ->comment('Team member ID');
            $table->string('role')->nullable()
                ->comment('Person/s responsible for the activity');
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
        Schema::dropIfExists('team_plans');
    }
}
