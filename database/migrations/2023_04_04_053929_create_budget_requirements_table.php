<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBudgetRequirementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budget_requirements', function (Blueprint $table) {
            $table->id();
            $table->Integer('revision_plan_id')->comment('ID of the revision plan');
            //$table->bigInteger('id_project_profile')->nullable();
            $table->Text('particulars')->comment('Particular');
            $table->string('account_code',10)->comment('Account code -from the chart of accounts');
            $table->decimal('amount',12,2)->comment('Amount of the budget');
            $table->Text('category')->comment('Indicate if MOOE, PS or capital outlay');
            $table->Text('category_gad')->comment('Indicate if GAD or Non-GAD');
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
        Schema::dropIfExists('budget_requirements');
    }
}
