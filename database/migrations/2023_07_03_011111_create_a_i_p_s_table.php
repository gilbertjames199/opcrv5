<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAIPSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('a_i_p_s', function (Blueprint $table) {
            $table->id();
            $table->string('AIP_Code');
            $table->decimal('PS')->default(0);
            $table->decimal('MOOE')->default(0);
            $table->decimal('CO')->default(0);
            $table->integer('idpaps')->comment('ID of PPA');
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
        Schema::dropIfExists('a_i_p_s');
    }
}
