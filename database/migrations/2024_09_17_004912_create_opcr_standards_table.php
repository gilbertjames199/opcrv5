<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpcrStandardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('opcr_standards', function (Blueprint $table) {
            $table->id();
            $table->string('output');
            $table->string('performance_measure');
            $table->string('office_accountable');
            $table->string('monitoring');
            $table->string('prescribed_period');
            $table->string('quality1');
            $table->string('quality2');
            $table->string('quality3');
            $table->string('efficiency1');
            $table->string('efficiency2');
            $table->string('efficiency3');
            $table->string('timeliness');
            $table->string('idpaps');
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
        Schema::dropIfExists('opcr_standards');
    }
}
