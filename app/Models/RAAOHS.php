<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RAAOHS extends Model
{
    use HasFactory;
    // public function accomp()
    // {
    //     return $this->hasMany(Target::class, 'idTarget','_uuid');
    //     //->whereHas('current_school','Yes');
    //     //->where('current_school','Yes');
    // }
    protected $connection = "mysql2";
    protected $fillable = [
        'recid',
        'tyear',
        'FRAOTYPE',
        'FRAODESC',
        'FALLTCOD',
        'FFUNCCOD',
        'FFUNDCOD',
        'idsource',
        'idappttype',
        'idprogram',
        'aipcode',
        'date_created',
        'excludetag',
        'previd'
    ];
    protected $table = 'raaohs';

    public function ooe()
    {
        return $this->hasOne(OOE::class, 'recid', 'idooe');
    }
    // public function ooes(): BelongsTo
    // {
    //     // , 'recid', 'idooe'
    //     return $this->belongsTo(OOE::class, "recid", "idooe");
    // }
    public function program()
    {
        return $this->hasOne(Program::class, 'recid', 'idprogram');
    }
}
