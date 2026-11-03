<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpcrTargetBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //For correction
        Schema::create('opcr_target_budgets', function (Blueprint $table) {
            $table->id();
            $table->string('idmfo');
            $table->string('idpaps');
            $table->string('idtarget');
            $table->string('idsuccessindicator');
            $table->string('amount');
            $table->string('opcr_list_id');
            $table->string('idprogram');
            // $table->string('raao_type');
            // $table->string('program');
            // $table->string('idooe');
            // $table->string('first_sem_amount');
            // $table->string('second_sem_amount');
            // $table->string('total_sem_amount');
            // $table->string('budget_year');
            // $table->string('')
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
        Schema::dropIfExists('opcr_target_budgets');
    }
}
