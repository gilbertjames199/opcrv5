<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSourceToBudgetReqs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('budget_requirements', function (Blueprint $table) {
            $table->text('source')
                    ->nullable()
                    ->comment('source of funds')
                    ->after('category_gad');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('budget_requirements', function (Blueprint $table) {
            //
        });
    }
}
