<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchAgendaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_agenda', function (Blueprint $table) {
            $table->id();
            $table->Text('agenda_description')->comment('Research agenda description');
            $table->date('year_from')->comment('Date from');
            $table->date('year_to')->comment('Date to');
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
        Schema::dropIfExists('research_agenda');
    }
}
