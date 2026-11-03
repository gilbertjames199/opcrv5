<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveColumnFromPaps extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('program_and_projects', function (Blueprint $table) {
            //
            $table->dropColumn('tyear');
            $table->dropColumn('FRAOTYPE');
            $table->dropColumn('FRAODESC');
            $table->dropColumn('FALLTCOD');
            $table->dropColumn('FFUNDCOD');
            $table->dropColumn('idsource');
            $table->dropColumn('idappttype');
            $table->dropColumn('idprogram');
            $table->dropColumn('date_created');
            $table->dropColumn('excludetag');
            $table->dropColumn('previd');
            $table->dropColumn('idpaps');
            $table->dropColumn('aipcode');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('program_and_projects', function (Blueprint $table) {
            //

        });
    }
}
