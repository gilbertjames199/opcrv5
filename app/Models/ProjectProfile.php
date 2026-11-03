<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectProfile extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='project_profiles';
    protected $fillable = [
        'project_title',
        'project_location',
        'start_date',
        'end_date',
        'list_of_lgus',
        'intended_beneficiaries_male',
        'intended_beneficiaries_female',
        'baseline_beneficiaries_male',
        'baseline_beneficiaries_female',
        'baseline_beneficiaries_data_source',
        'amount',
        'attributed_GAD_budget',
        'HGDG_score',
        'HGDG_percent',
        'HGDG_remark',
        'checklist_id',
        'rationale',
        'objectives',
        'target_beneficiaries',
        'project_type',
        'project_profile_parent_id',
    ];
}
