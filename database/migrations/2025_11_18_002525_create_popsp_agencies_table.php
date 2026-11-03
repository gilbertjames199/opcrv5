<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePopspAgenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('popsp_agencies', function (Blueprint $table) {
            $table->id();
            $table->string('agency_name');
            $table->string('agency_code')->unique();
            $table->string('department_code')->nullable();
            $table->string('department_code_actual')->nullable();
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
        Schema::dropIfExists('popsp_agencies');
    }
}
