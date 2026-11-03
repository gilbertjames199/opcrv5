<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntermediateOutcome extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='intermediate_outcomes';
    protected $fillable = [
        'io_desc',
        'idoutcome'
    ];
    public static function rules(){
        return [
            'io_desc'=> 'required',
            'idoutcome'=>'required|numeric',
        ];
    }

    public static function errorMessages(){
        return [
            'io_desc.required'=> 'The intermediate outcome description field is required',
            'idoutcome.required'=>'The outcome field is required',
            'idoutcome.numeric'=>'The outcome ID field must be a number',
        ];
    }
}
