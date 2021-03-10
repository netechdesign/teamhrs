<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Offerletters extends Model
{
    //
    protected $table= 'offerletters';
    
    protected $fillable = ['application_forms_id',
    'title', 
    'fore_name', 
    'surname', 
     'basic', 
     'bonus', 
     'confirm_Date', 
     'confirm_employee_date', 
     'confirm_employee_signature', 
     'dbscheck', 
     'hours_of_work', 
     'information_provided_date', 
     'information_provided_signature', 
     'job_title', 
     'place_of_employment', 
     'line_1', 
     'line_2', 
     'line_3', 
     'line_4', 
     'postcode', 
     'town_or_city', 
     'is_delete',
     'created_by',
     'updated_by'];
}
