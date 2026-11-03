<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClimateChangeExpenditureTaggingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('climate_change_expenditure_taggings', function (Blueprint $table) {
            $table->id();
            $table->string('strategic_priority');
            $table->string('sub_sector');
            $table->string('instrument_of_delivery');
            $table->string('type');
            $table->string('ccet_code');
            $table->string('type');
            $table->string('description');
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
        Schema::dropIfExists('climate_change_expenditure_taggings');
    }
}
