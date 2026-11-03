<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToProgramAndProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('program_and_projects', function (Blueprint $table) {
            $table->integer('chief_executive_agenda')->nullable()->before('id');
            $table->integer('socio_economic_agenda')->nullable()->before('id');
            $table->integer('sust_devt_goal')->nullable()->before('id');
            $table->integer('executive_legislative_agenda')->nullable()->before('id');
            $table->integer('research_agenda')->nullable()->before('id');
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
