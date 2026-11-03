<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRevisionIdRiskManagements extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('risk_manangements', function (Blueprint $table) {
            $table->integer('revision_plan_id')
                    ->default('0')
                    ->comment('ID of parent revision plan')
                    ->after('management');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('risk_managements', function (Blueprint $table) {
            //
        });
    }
}
