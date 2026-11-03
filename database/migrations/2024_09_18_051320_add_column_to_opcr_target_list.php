<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToOpcrTargetList extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('office_performance_commitment_rating_lists', function (Blueprint $table) {
            $table->string('type')->default('0')->after('department_code')->comment('0 -version 1; n -newer version');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('opcr_target_list', function (Blueprint $table) {
            //
        });
    }
}
