<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppropriationAmountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appropriation_amounts', function (Blueprint $table) {
            $table->id();
            $table->string('aip_id');
            $table->string('aip_code');
            $table->string('aip_code_parent');
            $table->string('aip_code_child');
            $table->string('idooe');
            $table->string('amount');
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
        Schema::dropIfExists('appropriation_amounts');
    }
}
