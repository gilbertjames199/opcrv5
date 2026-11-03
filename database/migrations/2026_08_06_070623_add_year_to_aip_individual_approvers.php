<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddYearToAipIndividualApprovers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('aip_individual_approvers', function (Blueprint $table) {
            $table->string('year')->default('2027')->after('with_signature');
            $table->string('aip_institutional_id')->default(1)->after('year');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('aip_individual_approvers', function (Blueprint $table) {
            //
        });
    }
}
