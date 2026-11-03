<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddStrategyDescriptionColumnToStrategyProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('strategy_projects', function (Blueprint $table) {
            $table->string('strategy_project_description')->after('strategy_id')->nullable();
        });
        // Copy strategies.description into strategy_projects.strategy_project_description
        // where strategies.id = strategy_projects.strategy_id
        DB::statement('
            UPDATE strategy_projects
            INNER JOIN strategies ON strategies.id = strategy_projects.strategy_id
            SET strategy_projects.strategy_project_description = strategies.description
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('strategy_projects', function (Blueprint $table) {
            //
        });
    }
}
