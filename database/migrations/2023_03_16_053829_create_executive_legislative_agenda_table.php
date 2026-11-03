<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExecutiveLegislativeAgendaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('executive_legislative_agenda', function (Blueprint $table) {
            $table->id();
            $table->string('agenda_description')->comment('Agenda description');
            $table->date('year_from')->comment('Year From');
            $table->date('year_to')->comment('Year to');
            $table->string('rationale')->comment('Rationale');
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
        Schema::dropIfExists('executive_legislative_agenda');
    }
}
