<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFFUNCCODToRevisionPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            $table->integer('FFUNCCOD')->default('0')->nullable()->after('idmfo')->comment('Specify FFUNCCOD/Responsible office for GAS Revision Plans');
            $table->integer('year_period')->default('0')->nullable()->after('FFUNCCOD')->comment('Year/Period');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            //
        });
    }
}
