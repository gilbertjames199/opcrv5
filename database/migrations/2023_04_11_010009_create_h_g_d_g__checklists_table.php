<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHGDGChecklistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hgdg_checklists', function (Blueprint $table) {
            $table->id();
            $table->string('box_number',100)->comment('Box Number and Description of the Checklist');
            $table->Text('sector')->comment('Indicate the sector/subsector of the HGDG checklist');
            //$table->bigInteger('subsector_id');
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
        Schema::dropIfExists('h_g_d_g__checklists');
    }
}
