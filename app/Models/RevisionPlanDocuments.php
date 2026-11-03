<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RevisionPlanDocuments extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'revision_plan_documents';
}
