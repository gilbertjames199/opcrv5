<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToRevisionPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            $table->string('agency_name')->nullable()->after('program_id');
        });

        Schema::table('program_and_projects', function (Blueprint $table) {
            $table->string('agency_name')->nullable()->after('mother_program_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            //
        });
    }
}
