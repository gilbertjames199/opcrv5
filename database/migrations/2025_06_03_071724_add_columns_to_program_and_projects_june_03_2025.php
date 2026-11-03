<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToProgramAndProjectsJune032025 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('program_and_projects', function (Blueprint $table) {
            // sector
            // subsector
            // popsp
            // focus_area
            $table->string('sector')->nullable()->after('type');
            $table->string('subsector')->nullable()->after('sector');
            $table->string('popsp')->nullable()->after('subsector');
            $table->string('focus_area')->nullable()->after('popsp');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('program_and_projects', function (Blueprint $table) {
            //
        });
    }
}
