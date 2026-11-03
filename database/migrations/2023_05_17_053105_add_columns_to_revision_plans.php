<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToRevisionPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            $table->text('risk_management')
                    ->after('beneficiaries')
                    ->nullable()
                    ->comment('Risk management description');
            $table->text('monitoring')
                    ->after('beneficiaries')
                    ->nullable()
                    ->comment('Monitoring and Evaluation description');
            $table->text('partnership')
                    ->after('beneficiaries')
                    ->nullable()
                    ->comment('Partnership and Sustainability description');
            $table->text('implementing_team')
                    ->after('beneficiaries')
                    ->nullable()
                    ->comment('Implementing Team description');
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
