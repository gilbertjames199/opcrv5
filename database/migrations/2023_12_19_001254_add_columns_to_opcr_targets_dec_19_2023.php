<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToOpcrTargetsDec192023 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('opcr_targets', function (Blueprint $table) {
            $table->string('quantity_unit')->after('quantity')->nullable();
            $table->string('comparison_operator')->after('quantity_unit')->nullable();
            $table->string('is_zero')->after('comparison_operator')->comment('checkbox: 1 value(checked) indicates offices that need to set zero targets, e.g. hospitals must set a target of zero')->nullable();
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
