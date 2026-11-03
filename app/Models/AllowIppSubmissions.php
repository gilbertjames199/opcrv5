<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AllowIppSubmissions extends Model
{
    use HasFactory;
    protected $table = 'allow_ipp_submissions';
    protected $guarded = ['id'];
}
