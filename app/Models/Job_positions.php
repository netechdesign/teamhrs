<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job_positions extends Model
{
    
    protected $table= 'job_positions';
    protected $fillable = ['name','is_delete','created_by'];
}
