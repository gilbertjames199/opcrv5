<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHospitalSectionOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hospital_section_outputs', function (Blueprint $table) {
            $table->id();
            $table->integer('idhdpcr');
            $table->text('output');
            $table->text('performance_measure');
            $table->text('prescribed_period');
            $table->text('quality1');
            $table->text('quality2');
            $table->text('quality3');
            $table->text('efficiency1');
            $table->text('efficiency2');
            $table->text('efficiency3');
            $table->text('timeliness');
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
        Schema::dropIfExists('hospital_section_outputs');
    }
}
