<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAttributedFormulaColumnToRevisionPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            $table->string('GAD_attributed_formula')->nullable()
                ->comment("
                    Formula 1: Amount * (HGDG Score/20);
                    Formula 2: Range
                ")
                ->after('amount');
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
