<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOfficeCodeToHgdgScores extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('hgdg_score', function (Blueprint $table) {
            $table->string("deprtment_code")->after("FFUNCCOD")->comment("Department Code");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('hgdg_scores', function (Blueprint $table) {
            //
        });
    }
}
