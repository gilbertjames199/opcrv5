
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToOutcomes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('outcomes', function (Blueprint $table) {
            //
            $table->bigInteger('id_org_goals')->nullable();
            $table->bigInteger('id_sec_goals')->nullable();
            $table->bigInteger('id_sdg_goals')->nullable();
            $table->bigInteger('id_cea')->nullable();
            $table->bigInteger('id_sea')->nullable();
            $table->bigInteger('id_ela')->nullable();
            $table->bigInteger('id_rea')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('outcomes', function (Blueprint $table) {
            //
        });
    }
}
