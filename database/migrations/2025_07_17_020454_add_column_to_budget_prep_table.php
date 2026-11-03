<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToBudgetPrepTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('budget_preps', function (Blueprint $table) {
            $table->string('past_year')->default('0.00')->after('amount')->comment('Past Year Budget');
            $table->string('first_sem')->default('0.00')->after('past_year')->comment('First Semester Budget');
            $table->string('second_sem')->default('0.00')->after('first_sem')->comment('Second Semester Budget');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('budget_preps', function (Blueprint $table) {
            //
        });
    }
}
