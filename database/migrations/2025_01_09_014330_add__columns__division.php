<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsDivision extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('division_outputs', function (Blueprint $table) {
            //
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
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('division_outputs', function (Blueprint $table) {
            //
        });
    }
}
