<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToAppropriations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('appropriations', function (Blueprint $table) {
            $table->string('category')->after('idpaps')->comment('identify if a particular is classified as MOOE, PS, or Capital outlay');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('appropriations', function (Blueprint $table) {

        });
    }
}
