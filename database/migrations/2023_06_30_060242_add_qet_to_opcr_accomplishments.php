<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddQetToOpcrAccomplishments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('opcr_accomplishments', function (Blueprint $table) {
            $table->string('quality_id')->after('office_performance_commitment_rating_list_id')->comment('Quality')->nullable();
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
        Schema::table('opcr_accomplishments', function (Blueprint $table) {
            //
        });
    }
}
