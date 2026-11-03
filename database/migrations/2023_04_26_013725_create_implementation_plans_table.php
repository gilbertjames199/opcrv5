<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImplementationPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('implementation_plans', function (Blueprint $table) {
            $table->id();
            $table->string('aip_code',20)->nullable()->comment('AIP code of the activity');
            $table->Integer('idrev_plan')->nullable()->comment('ID of the revision plan');
            $table->Integer('idactivity')->nullable()->comment('Activity ID');
            $table->Integer('idstrategy')->nullable()->comment('Strategy ID');
            $table->Integer('idissue')->nullable()->comment('Gender Issues ID');
            $table->date('date_from')->nullable()->comment('date from');
            $table->date('date_to')->nullable()->comment('date to');
            $table->decimal('amount',12,2)->nullable()->comment('Budget/cost of the implementation plan');
            $table->decimal('cc_adaptation',12,2)->nullable()->comment('Budget/cost for climate change adaptation');
            $table->decimal('cc_migitagion',12,2)->nullable()->comment('Budget/cost for climate change mitigation');
            $table->string('cc_topology',10)->nullable()->comment('Climate Change Topology Code');
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
        Schema::dropIfExists('implementation_plans');
    }
}
