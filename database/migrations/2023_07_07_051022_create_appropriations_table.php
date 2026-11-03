<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppropriationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appropriations', function (Blueprint $table) {
            $table->id();
            $table->string('object_of_expenditure',100);
            $table->string('account_code',50);
            $table->decimal('past_year',12,2);
            $table->decimal('first_sem',12,2);
            $table->decimal('second_sem',12,2);
            $table->decimal('budget_year',12,2);
            $table->integer('idpaps');
            $table->string('GAD',20);
            $table->string('CCET',55);
            $table->softDeletes('deleted_at',0);
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
        Schema::dropIfExists('appropriations');
    }
}
