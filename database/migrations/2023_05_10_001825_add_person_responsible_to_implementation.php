<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPersonResponsibleToImplementation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('implementation_plans', function (Blueprint $table) {
            $table->string('person_responsible')
                ->nullable()
                ->after('cc_topology')
                ->comment('Person/s responsible for the activity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('implementation_plans', function (Blueprint $table) {
            //
        });
    }
}
