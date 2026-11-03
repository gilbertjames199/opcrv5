<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTotalAmountToRevisionPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            $table->string('budgetary_requirements_total')
                ->after('reference_profile_id')
                ->comment('total amount of budgetary requirements in reference project profile')
                ->nullable();
            $table->string('implementation_plans_total')
                ->after('budgetary_requirements_total')
                ->comment('total amount of workplan in reference project profile')
                ->nullable();
            $table->string('return_request_type')
                ->default('-1')
                ->comment('checks if the plan/design is generated through return request, if yes, 0, if not, -1')
                ->after('implementation_plans_total');
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
