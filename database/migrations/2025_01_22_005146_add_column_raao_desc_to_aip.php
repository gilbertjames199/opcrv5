<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnRaaoDescToAip extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('annual_investment_plans', function (Blueprint $table) {
            $table->string('raao_desc')->nullable()->after('FFUNCCOD_creator');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('annual_investment_plans', function (Blueprint $table) {
            //
        });
    }
}
