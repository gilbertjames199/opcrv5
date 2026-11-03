<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramAndProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('program_and_projects', function (Blueprint $table) {
            $table->id();
            $table->Text('paps_desc')->nullable()->comment('PAPS Description');
            $table->integer('tyear')->unsigned()->nullable();
            $table->string('FRAOTYPE',1)->nullable();
            $table->string('FRAODESC',200)->nullable();
            $table->string('FALLTCOD',3)->nullable();
            $table->string('FFUNCCOD',6)->nullable()->comment('Office Code');
            $table->string('FFUNDCOD',3)->nullable();
            $table->integer('idsource')->unsigned()->nullable();
            $table->integer('idappttype')->unsigned()->nullable();
            $table->integer('idprogram')->unsigned()->nullable();
            $table->string('aipcode',30)->nullable();
            $table->timestamp('date_created')->nullable();
            $table->integer('excludetag')->nullable();
            $table->integer('previd')->unsigned()->nullable();
            $table->bigInteger('idpaps')->nullable();
            $table->Integer('idmfo')->nullable()->comment('MFO ID');
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
        Schema::dropIfExists('program_and_projects');
    }
}
