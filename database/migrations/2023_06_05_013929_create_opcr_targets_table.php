<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpcrTargetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('opcr_targets', function (Blueprint $table) {
            $table->id();
            $table->text('target_success_indicator')->comment('Describe PAPS Target/ Success Indicator');
            $table->decimal('quantity')->default(0)->comment('Quantity of target');
            $table->integer('idpaps')->comment('ID of parnet PPA');
            $table->integer('office_performance_commitment_rating_list_id')->comment('ID of OPCR Rating');
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
        Schema::dropIfExists('opcr_targets');
    }
}
