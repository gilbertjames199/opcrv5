<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpcrAccomplishmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('opcr_accomplishments', function (Blueprint $table) {
            $table->id();
            $table->text('actual_accomplishments')->comment('Actual Accomplishments');
            $table->decimal('quantity')->default(0)->comment('Quantity of actual accomplishments');
            $table->integer('idpaps')->comment('ID of parnet PPA');
            $table->integer('opcr_target_id')->comment('ID of the OPCR Target');
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
        Schema::dropIfExists('opcr_accomplishments');
    }
}
