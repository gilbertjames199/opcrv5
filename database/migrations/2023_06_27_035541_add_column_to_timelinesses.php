<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToTimelinesses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('timelinesses', function (Blueprint $table) {
            $table->integer('numerical_rating')->default('1')->before('id');
            $table->string('adjectival_rating')->default('N/A')->before('id');
            //
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('timelinesses', function (Blueprint $table) {
            //
        });
    }
}
