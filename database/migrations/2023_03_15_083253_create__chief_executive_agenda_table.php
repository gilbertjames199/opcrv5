<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChiefExecutiveAgendaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('chief_executive_agenda', function (Blueprint $table) {
            $table->id();
            $table->longText('agenda_description')->comment('Chief executive agenda description');
            $table->date('yearfrom')->comment('start year');
            $table->date('yearto')->comment('end year');
            $table->longText('rationale')->comment('Rationale');
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
        Schema::dropIfExists('_chief_executive_agenda');
    }
}
