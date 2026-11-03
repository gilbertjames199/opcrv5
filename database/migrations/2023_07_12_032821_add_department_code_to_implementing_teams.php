<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDepartmentCodeToImplementingTeams extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('implementing_teams', function (Blueprint $table) {
            $table->string("department_code",4)->after("FFUNCCOD")->comment("Department Code");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('implementing_teams', function (Blueprint $table) {
            //
        });
    }
}
