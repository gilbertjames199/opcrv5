<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdmfoFFUNCCODToStrategies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('strategies', function (Blueprint $table) {
            $table->integer('idmfo')->default('0')->nullable()->after('idpaps')->comment('major final outputs ID');
            $table->integer('FFUNCCOD')->default('0')->nullable()->after('idmfo')->comment('FFUNCCOD');
            $table->integer('year_period')->default('0')->nullable()->after('FFUNCCOD')->comment('Year period/year effective');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('strategies', function (Blueprint $table) {
            //
        });
    }
}
