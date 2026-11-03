<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProgramAndProject extends Model
{
    use HasFactory, SoftDeletes;
    protected $connection = "mysql";
    protected $table = 'program_and_projects';
    protected $guarded = ['id'];
    // protected $fillable = [
    //     'paps_desc',
    //     'FFUNCCOD',
    //     'department_code',
    //     'idmfo',
    //     'MOV',
    //     'type',
    //     'chief_executive_agenda',
    //     'socio_economic_agenda',
    //     'sust_devt_goal',
    //     'executive_legislative_agenda',
    //     'research_agenda',
    // ];
    public static function rules()
    {
        return [
            'paps_desc' => 'required',
            'FFUNCCOD' => 'required|numeric',
            'department_code' => 'required',
            //'aipcode'=> 'required',
            'idmfo' => 'required|numeric',
            'MOV' => 'required',
            'type' => 'required'


        ];
    }

    public static function errorMessages()
    {
        return [
            'paps_desc.required' => 'The programs and projects description field is required',
            'FFUNCCOD.required' => 'The office/department code is required',
            'FFUNCCOD.numeric' => 'The office/department must be a number',
            'department_code.required' => 'Department code is required',
            'idmfo.required' => 'The MFO is required',
            'idmfo.numeric' => 'The MFO must be a number',
            'MOV.required' => 'The MOV is required',
            'type.required' => 'Type is required'
        ];
    }

    public function MFO()
    {
        return $this->hasOne(MajorFinalOutput::class, 'id', 'idmfo');
    }

    public function AIP()
    {
        return $this->hasOne(AIP::class, 'idpaps', 'id');
    }

    public function output()
    {
        return $this->hasMany(Output::class, 'idpaps', 'id');
    }

    public function opcr_stardard()
    {
        return $this->belongsTo(opcr_standard::class, 'id', 'idpaps');
    }

    public function success_indicator()
    {
        return $this->hasOne(SuccessIndicator::class, 'idpaps', 'id');
    }
    public function office()
    {
        return $this->hasOne(FFUNCCOD::class, 'FFUNCCOD', 'FFUNCCOD');
    }
    public function fundOwner()
    {
        return $this->hasOne(FFUNCCOD::class, 'FFUNCCOD', 'fund_owner');
    }
    public function opcrtarget()
    {
        return $this->hasMany(OpcrTarget::class, 'idpaps', 'id');
    }

    public function divisionOutputs()
    {
        return $this->hasMany(DivisionOutput::class, 'idpaps', 'id');
    }
    public function revisionPlan()
    {
        return $this->hasMany(RevisionPlan::class, 'idpaps', 'id');
    }
    public function strategies()
    {
        return $this->hasMany(Strategy::class, 'idpaps', 'id');
    }
    public function sharedProgramAndProjects()
    {
        return $this->hasMany(SharedProgramAndProject::class, 'idpaps', 'id');
    }

    public function latestRevisionPlan()
    {
        return $this->hasOne(RevisionPlan::class, 'idpaps', 'id')
            ->ofMany([
                'version' => 'max',
                'id' => 'max' // tie-breaker (important)
            ], function ($query) {
                $query->where('status', ">", -1);
            });
    }
}
