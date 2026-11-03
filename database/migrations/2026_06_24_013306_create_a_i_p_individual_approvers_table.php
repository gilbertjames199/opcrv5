<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAIPIndividualApproversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aip_individual_approvers', function (Blueprint $table) {
            $table->id();
            $table->string('employee_code');
            $table->string('name');
            $table->string('position');
            $table->string('type')->default('0')->comment('0 -non SP approver, 1 -SP Approver');
            $table->string('is_present')->default('1');
            $table->string('with_signature')->default('1');
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
        Schema::dropIfExists('aip_individual_approvers');
    }
}
