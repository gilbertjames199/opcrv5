<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MajorFinalOutput extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table = 'major_final_outputs';
    protected $fillable = [
        'mfo_desc',
        'id_org_outcome',
        'id_sec_outcome',
        'id_socgoal',
        'FFUNCCOD',
        'department_code'
    ];

    public function paps()
    {
        return $this->hasMany(ProgramAndProject::class, 'idmfo', 'id');
    }

    public function office()
    {
        return $this->hasOne(FFUNCCOD::class, 'FFUNCCOD', 'FFUNCCOD');
    }


    public static function rules()
    {
        return [
            'mfo_desc' => 'required',
            'id_org_outcome' => 'required|numeric',
            'id_sec_outcome' => 'required|numeric',
            'id_socgoal' => 'required|numeric',
            'FFUNCCOD' => 'required',
            'department_code' => 'required'
        ];
    }

    public static function errorMessages()
    {
        return [
            'mfo_desc.required' => 'The MFO description field is required',
            'id_org_outcome' => 'The Organizational Outcome field is required',
            'id_sec_outcome' => 'The Sectoral Outcome field is required',
            'id_socgoal' => 'The Societal Goal field is required',
            'FFUNCCOD.required' => 'The office code field is required',
            'department_code' => 'The department code field is required'
        ];
    }
}
