<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToCashDisburementForecasts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cash_disbursement_forecasts', function (Blueprint $table) {
            $table->string('prepared_by')->nullable()->after('revision_plan_id');
            $table->string('approved_by')->nullable()->after('prepared_by');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cash_disbursement_forecasts', function (Blueprint $table) {
            //
        });
    }
}
