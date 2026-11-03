<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToRevisionPlansGadVersion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            $table->string('gad_version')->after('version')->default('1')->comment('if project profile before 2027, version 1; else, version 2 -after the removal of GAD/NON GAD disaggregation');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('revision_plans_gad_version', function (Blueprint $table) {
            //
        });
    }
}
