<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClimateSubPrioritiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('climate_sub_priorities', function (Blueprint $table) {
            $table->id();
            $table->string('description')->comment('Sub priority description');
            $table->integer('strategic_priority_id')->comment('ID of the parent strategic priority');
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
        Schema::dropIfExists('climate_sub_priorities');
    }
}
