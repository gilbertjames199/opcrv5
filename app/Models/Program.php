<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;
    public $timestamps = false;
    /**
     * Primary key column name for this model
     * The programs table uses `recid` instead of the default `id`.
     */
    protected $primaryKey = 'recid';

    /**
     * The primary key is an integer and is auto-incrementing on this table.
     * Set explicitly for clarity.
     */
    protected $keyType = 'int';
    public $incrementing = true;

    protected $connection = "mysql2";
    protected $table = 'programs';
    protected $guarded = [
        'recid',
    ];

    // public function raaohs()
    // {
    //     return $this->hasMany(RAAOHS::class, 'idprogram', 'recid');
    // }
}
