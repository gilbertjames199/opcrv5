<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToDailyAccomplishment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('daily_accomplishments', function (Blueprint $table) {
            $table->integer('idmfo')->after('id');
            $table->integer('amount')->after('idpaps');
            $table->integer('source_of_fund')->after('idpaps');
            $table->integer('responsible_person')->after('idpaps');
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
        Schema::table('daily_accomplishments', function (Blueprint $table) {
            //
        });
    }
}
