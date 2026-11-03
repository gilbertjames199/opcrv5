<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToPaps extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('program_and_projects', function (Blueprint $table) {
            //$table->bigInteger('idppa')->nullable()->comment('target quantity for first quarter');
            $table->longText('MOV')->nullable()->comment('Means of verification');
            // $table->string('plan_period_from')->after('paps_desc');
            // $table->string('plan_period_to')->after('plan_period_from');
            // $table->decimal('plan_amount_year1',12,2)->after('plan_period_to');
            // $table->decimal('plan_amount_year2',12,2)->after('plan_amount_year1');
            // $table->decimal('plan_amount_year3',12,2)->after('plan_amount_year2');
            // $table->decimal('plan_amount_year4',12,2)->after('plan_amount_year3');
            // $table->decimal('plan_amount_year5',12,2)->after('plan_amount_year4');
            // $table->decimal('plan_amount_year6',12,2)->after('plan_amount_year5');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('program_and_projects', function (Blueprint $table) {

        });
    }

}
