<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSeqNumberToAipIndividualApproversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('aip_individual_approvers', function (Blueprint $table) {
            $table->string('seq_num',10)->default('0')->after('aip_institutional_id');
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
