<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReturnRequestStatusColumnToRevisionPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('revision_plans', function (Blueprint $table) {
            $table->string("return_request_status")
                ->default("-1")
                ->after("status")
                ->comment("-1 -no return request made; 0 -return request made; 1 -return request submitted");
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
