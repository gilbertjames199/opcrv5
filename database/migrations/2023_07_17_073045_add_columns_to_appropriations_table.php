<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToAppropriationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('appropriations', function (Blueprint $table) {
            $table->string('idooe')->nullable()->after('id')->comment('ID of the Object of Expenditure (OOE)');
            $table->string('year')->nullable()->after('idooe');
            $table->string('FFUNCCOD')->nullable()->after('year');
            $table->string('raaotype', 5)->nullable()->after('FFUNCCOD');
            $table->string('idprogram')->nullable()->after('raaotype');
            $table->string('AIP_CODE')->nullable()->after('idprogram');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('appropriations', function (Blueprint $table) {
            //
        });
    }
}
