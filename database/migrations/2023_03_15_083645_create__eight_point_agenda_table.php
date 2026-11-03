<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEightPointAgendaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eight_point_agenda', function (Blueprint $table) {
            $table->id();
            $table->longText('agenda_description')->comment('Agenda description');
            $table->date('yearfrom')->comment('Year From');
            $table->date('yearto')->comment('Year To');
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
        Schema::dropIfExists('_eight_point_agenda');
    }
}
