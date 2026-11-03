<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimeRangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_ranges', function (Blueprint $table) {
            $table->id();
            $table->integer('time_code');
            $table->string('time');
            $table->integer('prescribed_period');
            $table->string('time_unit');
            $table->integer('rating');
            $table->integer('range_from');
            $table->integer('range_to');
            $table->integer('equivalent_time_from');
            $table->integer('equivalent_time_to');
            $table->string('equivalent_time_unit');
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
        Schema::dropIfExists('time_ranges');
    }
}
