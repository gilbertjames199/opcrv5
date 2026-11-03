<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectProfileTrackingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_profile_trackings', function (Blueprint $table) {
            $table->id();
            $table->string('action_by')->comment('user_id');
            $table->string('action_type')->comment('submit IPP, return IPP, review IPP, approve IPP');
            $table->string('revision_plan_id')->comment('revision_plan_id');
            $table->string('remarks')->comment('remarks by reviewer')->nullable();
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
        Schema::dropIfExists('project_profile_trackings');
    }
}
