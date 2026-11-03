<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Outcome extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='outcomes';
    protected $fillable = [
        'plan_period_year_from',
        'plan_period_year_to',
        'oc_desc',
        'id_org_goals',
        'id_sec_goals',
        'id_sdg_goals',
        'id_cea',
        'id_sea',
        'id_ela',
        'id_rea',
        'FFUNCCOD'
    ];

    public static function rules(){
        return [
            'plan_period_year_from' => 'required',
            'plan_period_year_to' => 'required',
            'oc_desc' => 'required',
            'id_org_goals'=>'required',
            'id_sec_goals'=>'required',
            'id_sdg_goals'=>'required',
            'id_cea'=>'required',
            'id_sea'=>'required',
            'id_ela'=>'required',
            'id_rea'=>'required',
            'FFUNCCOD'=>'required|numeric',
        ];
    }

    public static function errorMessages(){
        return [
            'oc_desc.required' => 'The outcome description field is required',
            'id_org_goals.required'=>'The organizational goal field is required',
            'id_sec_goals.required'=>'The sectoral goal field is required',
            'id_sdg_goals.required'=>'The sustainable Development Goal field is required',
            'id_cea.required'=>'The chief executive agenda field is required',
            'id_sea.required'=>'The eight-point socio-economic agenda field is required',
            'id_ela.required'=>'The Executive Legislative Agenda field is required',
            'id_rea.required'=>'The Research Agenda field is required',
            'FFUNCCOD.required'=>"The office code field is required",
            'FFUNCCOD.numeric'=>'Office code must be a number.',
        ];
    }
}
