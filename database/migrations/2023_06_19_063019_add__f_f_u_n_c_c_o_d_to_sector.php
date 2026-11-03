<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFFUNCCODToSector extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sectoral_goals', function (Blueprint $table) {
            $table->string('FFUNCCOD',6)->after('sector')->comment('References Office FFUNCCOD of the sectoral goal');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sectoral_goals', function (Blueprint $table) {
            //
        });
    }
}
