<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToQualities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('qualities', function (Blueprint $table) {
            $table->integer('numerical_rating')->default('1')->before('quality');
            $table->string('adjectival_rating')->default('N/A')->before('quality');
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
        Schema::table('qualities', function (Blueprint $table) {
            //
        });
    }
}
