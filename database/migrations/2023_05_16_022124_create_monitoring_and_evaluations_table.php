<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonitoringAndEvaluationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monitoring_and_evaluations', function (Blueprint $table) {
            $table->id();
            $table->Text('evaluation_mechanism_tool')->comment('Evaluation and Mechanism Tools Used');
            $table->Text('opr');
            $table->Text('target_beneficiaries');
            $table->Text('gad');
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
        Schema::dropIfExists('monitoring_and_evaluations');
    }
}
