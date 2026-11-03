<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImplementingTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('implementing_teams', function (Blueprint $table) {
            $table->id();
            $table->Text('name')->comment('Employees Name');
            $table->Text('position')->comment('Employee Position');
            $table->Text('competency')->comment('Qualifications of the Employee');
            $table->Text('role')->comment('Role of the Employee in the Program');
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
        Schema::dropIfExists('implementing_teams');
    }
}
