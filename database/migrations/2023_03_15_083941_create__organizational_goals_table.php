<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationalGoalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('organizational_goals', function (Blueprint $table) {
            $table->id();
            $table->Text('goal_description')->comment('Organizational Goal Description');
            $table->integer('FFUNCCOD')->comment('Functions per Office');
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
        Schema::dropIfExists('_organizational_goals');
    }
}
