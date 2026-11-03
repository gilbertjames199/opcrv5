<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFFUNCODToImplementingTeam extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('implementing_teams', function (Blueprint $table) {

            $table->Text('FFUNCCOD')->comment('Employees Name')->after('role');
            //
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
