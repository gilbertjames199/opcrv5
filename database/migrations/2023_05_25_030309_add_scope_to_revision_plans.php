<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddScopeToRevisionPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            $table->string('scope')->default('N/A')->nullable()->after('idpaps')->comment('Specify GAS revision plans');
            $table->integer('idmfo')->default('0')->nullable()->after('idpaps')->comment('specify MFO of revision plan');
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
