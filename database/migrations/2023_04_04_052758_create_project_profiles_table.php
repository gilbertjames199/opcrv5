<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_profiles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idmfo')->nullable()->comment('MFO ID');
            $table->string('project_title');
            $table->string('project_location');
            $table->string('start_date');
            $table->string('end_date');
            $table->string('list_of_lgus');
            $table->bigInteger('intended_beneficiaries_male');
            $table->bigInteger('intended_beneficiaries_female');
            $table->bigInteger('baseline_beneficiaries_male');
            $table->bigInteger('baseline_beneficiaries_female');
            $table->bigInteger('baseline_beneficiaries_data_source');
            $table->decimal('amount',12,2);
            $table->decimal('attributed_GAD_budget',12,2);
            $table->decimal('HGDG_score',12,2);
            $table->decimal('HGDG_percent',12,2);
            $table->string('HGDG_remark');
            $table->bigInteger('checklist_id');
            $table->longText('rationale');
            $table->longText('objectives');
            $table->longText('target_beneficiaries');
            $table->string('project_type');
            $table->string('project_profile_parent_id');
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
        Schema::dropIfExists('project_profiles');
    }
}
