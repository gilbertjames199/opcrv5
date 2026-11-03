<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNumberSequenceToActivityProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('activity_projects', function (Blueprint $table) {
            $table->string('seq_no', 20)->after('project_id')->default('0');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('activity_projects', function (Blueprint $table) {
            // $table->string('seq_no', 20)->nullable()->after('project_id')->default('0');
            $table->dropColumn('seq_no');
        });
    }
}
