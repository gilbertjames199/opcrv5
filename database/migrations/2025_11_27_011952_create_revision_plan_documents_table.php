<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRevisionPlanDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('revision_plan_documents', function (Blueprint $table) {
            $table->id();
            $table->string('revision_plan_id');
            $table->string('filename');
            $table->string('filepath');
            $table->string('file_size');
            $table->string('file_type');
            $table->string('upload_type')->comment('explain the purpose of the upload, e.g. justification for ammendments');
            $table->string('user_id');
            $table->string('return_batch')->comment('Return sequence number')->default(1);
            $table->string('return_executed')->comment('If the project profile associated with the document has been returned -1, else -0')->default(0);
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
        Schema::dropIfExists('revision_plan_documents');
    }
}
