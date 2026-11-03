<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RAAOD extends Model
{
    use HasFactory;
    protected $connection = "mysql2";
    protected $fillable = [
        'recid',
        'idraao',
        'idooe',
        'entrytype',
        'famount',
        'fdate',
        'facctdate',
        'fparticulars',
        'idpayee',
        'frefno',
        'ftag',
        'aipcode',
        'procuredamount',
        'procuredamount2',
        'vouchno',
        'chkno',
        'chkdate',
        'advno',
        'jevno',
        'post_tag',
        'idcafoa',
        'created_at',
        'updated_at',
        'update_lock',
        'lockdate',
        'idapprop',
        'prior_amount',
        'curr_amount',
        'curr_amount2'
    ];
    protected $table = 'raaods';

    public function ooe()
    {
        // return $this->hasOne(OOE::class, 'recid', 'idooe');
        return $this->belongsTo(OOE::class, 'idooe', 'recid');
    }

    public function raaohs()
    {
        return $this->hasOne(RAAOHS::class, 'recid', 'idraao');
    }
}
