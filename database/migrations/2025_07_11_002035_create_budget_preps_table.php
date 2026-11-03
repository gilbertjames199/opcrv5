<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBudgetPrepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budget_preps', function (Blueprint $table) {
            $table->id();
            $table->string('idooe')->nullable();
            $table->string('particulars')->nullable();
            $table->string('account_code')->nullable();
            $table->string('amount')->nullable();
            $table->string('category')->nullable()->comment('MOOE, CO, FE, PS');
            $table->string('source')->nullable()->comment('e.g. General Fund, Regular MOOE, etc.');
            $table->string('revision_plan_id')->nullable();
            $table->string('category_gad')->nullable()->comment('GAD, NON-GAD');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('budget_preps');
    }
}
