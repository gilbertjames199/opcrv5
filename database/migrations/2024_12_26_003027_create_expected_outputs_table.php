<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpectedOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expected_outputs', function (Blueprint $table) {
            $table->id();
            $table->string('aip_id');
            $table->string('idpaps');
            $table->string('output_qty');
            $table->string('output_description');
            $table->string('weight')->comment('%');
            $table->string('opcr_target');
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
        Schema::dropIfExists('expected_outputs');
    }
}
