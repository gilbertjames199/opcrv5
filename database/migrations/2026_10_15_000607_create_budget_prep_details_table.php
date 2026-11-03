<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBudgetPrepDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budget_prep_details', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('budget_preparation_id')->index();
            $table->unsignedBigInteger('revision_plan_id')->index();
            $table->unsignedBigInteger('reference_profile_id')->nullable()->index();

            $table->string('object_of_expenditure')->nullable();
            $table->string('account_code', 50)->nullable();
            $table->text('sub_particular')->nullable();

            $table->decimal('past_year', 15, 2)->nullable();
            $table->decimal('first_semester_actual', 15, 2)->nullable();
            $table->decimal('second_semester_estimate', 15, 2)->nullable();
            $table->decimal('current_year_total', 15, 2)->nullable();
            $table->decimal('budget_year', 15, 2)->nullable();

            $table->string('category', 50);
            $table->string('category_label');

            $table->timestamps();

            $table->index(
                ['revision_plan_id', 'budget_preparation_id'],
                'budget_prep_details_plan_prep_idx'
            );
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('budget_prep_details');
    }
}
