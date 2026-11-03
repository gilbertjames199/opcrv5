<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkplanCostBreakdownsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workplan_cost_breakdowns', function (Blueprint $table) {
            $table->id();
            $table->string('particular');
            $table->string('account_code');
            $table->decimal('quantity',12,2);
            $table->decimal('amount',12,2);
            $table->string('category');
            $table->bigInteger('idworkplan');
            $table->bigInteger('idppa');
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
        Schema::dropIfExists('workplan_cost_breakdowns');
    }
}
