<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHGDGScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hgdg_score', function (Blueprint $table) {
            $table->id();
            $table->Integer('idrevplan')->comment('Revision Plan ID');
            $table->Integer('question_id')->comment(' Question ID');
            $table->Integer('user_id')->comment('User ID');
            $table->decimal('score',12,2)->comment('Item Score');
            $table->Text('result_comment')->comment('Result comment');
            $table->string('FFUNCCOD',10)->comment('Office Code');
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
        Schema::dropIfExists('h_g_d_g_scores');
    }
}
