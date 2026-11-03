<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveInteroutcomeFromMfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('major_final_outputs', function (Blueprint $table) {
            //
            $table->dropColumn('idinteroutcome');
            $table->Integer('id_socgoal')->nullable()->after('mfo_desc')->comment('Societal Goal ID');
            $table->Integer('id_sec_outcome')->nullable()->after('mfo_desc')->comment('Sectoral Outcome ID');
            $table->Integer('id_org_outcome')->nullable()->after('mfo_desc')->comment('Organizational Outcome ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mfo', function (Blueprint $table) {
            //
        });
    }
}
