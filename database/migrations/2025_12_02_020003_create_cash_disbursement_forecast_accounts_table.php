<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCashDisbursementForecastAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cash_disbursement_forecast_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('budget_requirement_id');
            $table->string('cash_disbursement_forecast_id');
            $table->string('january');
            $table->string('february');
            $table->string('march');
            $table->string('april');
            $table->string('may');
            $table->string('june');
            $table->string('july');
            $table->string('august');
            $table->string('september');
            $table->string('october');
            $table->string('november');
            $table->string('december');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cash_disbursement_forecast_accounts');
    }
}
