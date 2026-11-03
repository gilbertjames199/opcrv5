<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTargetsTable extends Migration
{
    /**
     * Run the migrations.
     *$table->Integer('idpdip')->nullable()->comment('Indicator ID');
     * @return void
     */
    public function up()
    {
        Schema::create('targets', function (Blueprint $table) {
            $table->id();
            //$table->foreignId('program_and_project_id')->constrained()->onDelete('cascade')->nullable();
            //$table->foreignId('program_and_project_id')->constrained()->onDelete('cascade')->nullable()->comment('PAPS ID');
            $table->Integer('idpdip')->nullable()->comment('Indicator IDPAPS ID');
            $table->Integer('idooe')->nullable();
            $table->Integer('idindicator')->nullable()->comment('Indicator ID');
            $table->Text('description')->nullable()->comment('Target description');
            $table->string('brgy',20)->nullable()->comment('Barangay');
            $table->string('municipality',20)->nullable()->comment('Municipality');
            $table->date('planned_period_from')->nullable()->comment('Plan period start date');
            $table->date('planned_period_to')->nullable()->comment('Plan period end date');
            $table->decimal('planned_budget',12,2)->nullable()->comment('Plan budget');
            $table->integer('target_qty')->nullable()->comment('Target Quantity');
            $table->Text('onsite_tag')->nullable()->comment('Onsite tag answerable by yes or no');
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
        Schema::dropIfExists('targets');
    }
}
