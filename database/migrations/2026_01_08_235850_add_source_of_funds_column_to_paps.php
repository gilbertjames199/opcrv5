<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSourceOfFundsColumnToPaps extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('program_and_projects', function (Blueprint $table) {
            $table->string('source_of_funds')->nullable()->after('subsector');
            $table->string('source_others_specify')->nullable()->after('source_of_funds');
            $table->string('funding_agency')->nullable()->after('source_others_specify');
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
