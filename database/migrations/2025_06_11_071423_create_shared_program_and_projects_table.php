<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSharedProgramAndProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shared_program_and_projects', function (Blueprint $table) {
            $table->id();
            $table->string('idpaps')->comment('ID of the shared program or project');
            $table->string('origin_department_code')->comment('Department code of the origin department');
            $table->string('origin_pghead')->comment('PGH head of the origin department');
            $table->string('destination_department_code')->comment('Department code of the destination department');
            $table->string('destination_pghead')->comment('PGH head of the destination department');
            $table->string('user_id')->comment('ID of the user who shared the program or project');
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
        Schema::dropIfExists('shared_program_and_projects');
    }
}
