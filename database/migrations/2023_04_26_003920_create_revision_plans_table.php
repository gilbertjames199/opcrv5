<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRevisionPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('revision_plans', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idpaps')->comment('PAPS ID');
            $table->string('aip_code',20)->nullable()->comment('AIP Code of the Project');
            $table->Text('project_title')->comment('Project title');
            $table->Text('list_of_lgu_covered')->comment('List of LGUs covered');
            $table->date('date_start')->comment('Implementation schedule start');
            $table->date('date_end')->comment('Implementation schedule end');
            $table->integer('beneficiary_male')->comment('Number of Intended beneficiaries -male');
            $table->integer('beneficiary_female')->comment('Number of Intended beneficiaries -female');
            $table->integer('baseline_male')->comment('Number of Baseline Disaggregated data -male');
            $table->integer('baseline_female')->comment('Number of Baseline Disaggregated data -female');
            $table->integer('baseline_total')->comment('Number of Baseline Disaggregated data -total');
            $table->decimal('amount',12,2)->nullable()->default('0.00')->comment('Cost of the program/project');
            $table->decimal('attributed_amount',12,2)->nullable()->default('0.00')->comment('Attributed GAD Budget');
            $table->Integer('checklist_id')->nullable()->comment('ID of the program checklist');
            $table->decimal('hgdg_score',12,2)->nullable()->default('0.00')->comment('Actual HGDG score');
            $table->decimal('hgdg_percent',12,2)->nullable()->default('0.00')->comment('GAD Attributed Budget Percentage');
            $table->Text('rationale')->comment('rationale of the project');
            $table->Text('objective')->comment('Objectives of the project');
            $table->Text('beneficiaries')->comment('List of beneficiaries');
            $table->tinyInteger('version')->default('1')->comment('Numbers/ 1 for version one, 2 for version 2, etc');
            $table->string('type',20)->nullable()->comment('Indicate if project profile ->p/project design ->d');
            $table->tinyInteger('final')->nullable()->comment('Indicate if the project profile or project design is final->1 or not->0');
            $table->tinyInteger('supplemental')->nullable()->comment('Indicate if supplemental, 1(yes), 0(no)');
            $table->integer('user_id')->comment('ID of the user');
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
        Schema::dropIfExists('revision_plans');
    }
}
