<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Target extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='targets';
    protected $fillable = [
        'idpdip',
        'idooe',
        'idindicator',
        'description',
        'brgy',
        'municipality',
        'planned_period_from',
        'planned_period_to',
        'planned_budget',
        'target_qty',
        'onsite_tag',
        'idimplementation',
        'target_qty1',
        'target_qty2',
        'target_qty3',
        'target_qty4'
    ];
    public function accomp()
    {
        return $this->hasMany(Accomplishment::class,'target_id','id');
    }
    public static function rules(){
        return [
            'idpdip'=>'required|numeric',
            //'idooe'=>'required|numeric',
            'idindicator'=>'required|numeric',
            'description'=> 'required',
            'brgy'=> 'required',
            'municipality'=> 'required',
            'planned_period_from'=> 'required',
            'planned_period_to'=> 'required',
            'planned_budget'=>'required|numeric',
            'idimplementation'=>'required',
            'target_qty'=>'required|numeric',
            'onsite_tag'=> 'required',
            'target_qty1'=>'required|numeric',
            'target_qty2'=>'required|numeric',
            'target_qty3'=>'required|numeric',
            'target_qty4'=>'required|numeric',
        ];
    }

    public static function errorMessages(){
        return [
            'idpdip.required'=>'Programs and Projects field is required',
            //'idooe.required'=>'required|numeric',
            'idindicator.required'=>'Indicator field is required',
            'description.required'=> 'Target description field is required',
            'brgy.required'=> 'Barangay field is required',
            'municipality.required'=> 'Municipality field is required',
            'planned_period_from.required'=> 'Plan period from field is required',
            'planned_period_to.required'=> 'Plan period to field is required',
            'planned_budget.required'=>'Plan budget field is required',
            'target_qty.required'=>'Target quantity field is required',
            'onsite_tag.required'=> 'Onsite tag field is required',
            'idimplementation.required'=>"Implementation plan is required",
            'target_qty1.required'=>'Target quantity (Q1) field is required',
            'target_qty2.required'=>'Target quantity (Q2) field is required',
            'target_qty3.required'=>'Target quantity (Q3) field is required',
            'target_qty4.required'=>'Target quantity (Q4) field is required',
            'target_qty1.numeric'=>'Target quantity (Q1) field must be a number',
            'target_qty2.numeric'=>'Target quantity (Q2) field must be a number',
            'target_qty3.numeric'=>'Target quantity (Q3) field must be a number',
            'target_qty4.numeric'=>'Target quantity (Q4) field must be a number',
        ];
    }

}
