<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBudgetAllotmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budget_allotments', function (Blueprint $table) {
            $table->id();
            $table->decimal('allotment',12,2)->comment('alloted budget for the semester');
            $table->integer('opcrlist_id')->comment('ID of the OPCR List');
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
        Schema::dropIfExists('budget_allotments');
    }
}
