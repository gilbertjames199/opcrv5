<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToTargets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('opcr_targets', function (Blueprint $table) {
            $table->string('output_id')->after('target_success_indicator')->nullable();
            $table->string('quality_id')->after('output_id')->comment('Quality')->nullable();
            $table->string('ratings_id')->after('quality_id')->comment('Efficiency')->nullable();
            $table->string('timeliness_id')->after('ratings_id')->comment('Timeliness')->nullable();
            $table->string('remarks_q')->after('timeliness_id')->nullable();
            $table->string('remarks_e')->after('remarks_q')->nullable();
            $table->string('remarks_t')->after('remarks_e')->nullable();
            $table->string('remarks_final')->after('remarks_t')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('opcr_targets', function (Blueprint $table) {
            //
        });
    }
}
