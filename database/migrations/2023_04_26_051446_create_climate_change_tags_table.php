<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClimateChangeTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('climate_change_tags', function (Blueprint $table) {
            $table->id();
            $table->string('code',20)->comment('Climate Change Topology Code');
            $table->Text('activity')->comment('Activity Description');
            //$table->Text('strategic_priority')->comment('Strategic priority');
            $table->Text('sub_priority_id')->comment('Sub priority');
            $table->Text('instrument_of_delivery')->comment('Instrument of delivery');
            $table->Text('type')->comment('Indicate a->adaptation or m->mitigation');
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
        Schema::dropIfExists('climate_change_tags');
    }
}
