<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Offerletterlists extends Model
{
    
    protected $table= 'offerletterlists';
    
    protected $fillable = ['application_forms_id',
     'basic', 
     'bonus', 
     'confirm_Date', 
     'dbscheck', 
     'hours_of_work', 
     'job_title', 
     'place_of_employment', 
     'is_delete',
     'created_by_name',
     'created_by',
     'updated_by'];
}
