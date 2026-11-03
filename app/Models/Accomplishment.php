<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accomplishment extends Model
{
    use HasFactory;

    protected $fillable = [
        'target_id',
        'accomplishment_qty',
        'actual_period_from',
        'actual_period_to',
        'actual_expenditure',
        'facilitating_timeliness',
        'facilitating_competency',
        'facilitating_logistics',
        'deterring_timeliness',
        'deterring_concerns',
        'deterring_logistics',
        'concerns_timeliness',
        'concerns_competency',
        'concerns_logistics',
        'new_strategy',
        'remarks',
        'date_accomplished_from',
        'date_accomplished_to',
        'validated_status',
        'validated_remarks',
        'validated_date'
    ];
    public static function rules(){
        return [
            'target_id'=>'required|numeric',
            'accomplishment_qty'=>'required|numeric',
            'actual_period_from' => 'required',
            'actual_period_to' => 'required',
            'actual_expenditure'=>'required|numeric',
            'facilitating_timeliness' => 'required',
            'facilitating_competency' => 'required',
            'facilitating_logistics' => 'required',
            'deterring_timeliness' => 'required',
            'deterring_concerns' => 'required',
            'deterring_logistics' => 'required',
            'concerns_timeliness' => 'required',
            'concerns_competency' => 'required',
            'concerns_logistics' => 'required',
            'new_strategy' => 'required',
            'remarks' => 'required',
            'date_accomplished_from' => 'required',
            'date_accomplished_to' => 'required',
            'validated_status' => 'required',
            'validated_remarks' => 'nullable',
            'validated_date' => 'nullable'
        ];
    }

    public static function errorMessages(){
        return [
            'target_id.required'=>'Target field is required',
            'target_id.numeric'=>'Target ID field must be a number',
            'accomplishment_qty.required'=>'Accomplishment quantity is required',
            'accomplishment_qty.numeric'=>'Accomplishment quantity must be a number',
            'actual_period_from.required' => 'Actual period (from) is required',
            'actual_period_to.required' => 'Actual period (to) is required',
            'actual_expenditure.required'=>'Actual expenditure is required',
            'actual_expenditure.numeric'=>'Actual expenditure must be a number',
            'facilitating_timeliness.required' => 'Facilitating timeliness is required',
            'facilitating_competency.required' => 'Facilitating competency is required',
            'facilitating_logistics.required' => 'Facilitating logistics is required',
            'deterring_timeliness.required' => 'Deterring timeliness is required',
            'deterring_concerns.required' => 'Deterring concerns is required',
            'deterring_logistics.required' => 'Deterring logistics is required',
            'concerns_timeliness.required' => 'Concerns timeliness is required',
            'concerns_competency.required' => 'Concerns competency is required',
            'concerns_logistics.required' => 'Concerns logistics is required',
            'new_strategy.required' => 'New strategy is required',
            'remarks.required' => 'Remarks is required',
            'date_accomplished_from.required' => 'Date accomplished (from) is required',
            'date_accomplished_to.required' => 'Date accomplished (to) is required',
            'validated_status.required' => 'Validated status is required',
            //'validated_remarks.required' => 'Validated remarks is required',
            //'validated_date.required' => 'Validated date is required',
        ];
    }

}
