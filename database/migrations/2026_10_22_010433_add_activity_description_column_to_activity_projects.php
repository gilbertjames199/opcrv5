<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddActivityDescriptionColumnToActivityProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('activity_projects', function (Blueprint $table) {
            $table->string('activity_project_description')->after('activity_id')->nullable();
        });

        // Copy activities.description into activity_projects.activity_project_description
        // where activities.id = activity_projects.activity_id
        DB::statement('
            UPDATE activity_projects
            INNER JOIN activities ON activities.id = activity_projects.activity_id
            SET activity_projects.activity_project_description = activities.description
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('activity_projects', function (Blueprint $table) {
            //
        });
    }
}
