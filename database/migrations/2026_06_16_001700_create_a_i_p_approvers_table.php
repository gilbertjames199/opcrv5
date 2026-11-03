<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAIPApproversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Purpose: connect aip with approver; allow inclusion/exclusion of AIP approvers per year
        Schema::create('aip_approvers', function (Blueprint $table) {
            $table->id();
            $table->string('aip_institutional_id');
            $table->string('aip_approver_id');
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
        Schema::dropIfExists('a_i_p_approvers');
    }
}
