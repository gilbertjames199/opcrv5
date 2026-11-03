<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpcrRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('opcr_remarks', function (Blueprint $table) {
            $table->id();
            $table->string('id_opcr_list');
            $table->string('type')->comment('target/rating/accomplishment');
            $table->string('number')->comment('indicate if this remark is the first,second, third, etc');
            $table->string('status')->comment('indicate if remark is for');
            $table->string('remarks');
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
        Schema::dropIfExists('opcr_remarks');
    }
}
