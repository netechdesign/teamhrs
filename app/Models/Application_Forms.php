<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application_Forms extends Model
{
    //
    protected $table = 'application_forms';
    protected $fillable = [
        'user_id',
        'position_applied_for',
        'title',
        'fore_name',
        'surname',
        'email',
        'telephone_number',
        'getaddress_id',
        'address',
        'postcode',
        'selected_interview',
        'disability',
        'is_cv_attached',
        'cv_path',
        'medical_condition',
        'medical_condition_reasonable',
        'any_convictions',
        'any_convictions_ye',
        'work_permit_uk',
        'qualifications',
        'unavailable_for_interview',
        'confirm_employee_name',
        'confirm_employee_signature',
        'confirm_Date',
        'information_provided_name',
        'information_provided_signature',
        'information_provided_Date',
        'created_by',
        'updated_by',
        'is_viewed',
        'is_ts_done',
        'is_document_request',
        'is_document_get'
                          ];


         public function employment_historys(){

            return $this->hasMany(Employment_historys::class, 'application_forms_id');
         } 
         
        public function employment_references(){
            return $this->hasMany(Employment_references::class,'application_forms_id');
        }
        public function telephone_pre_answers(){
            return $this->hasMany(Telephone_pre_answers::class,'application_forms_id');
        }
        
        public function documents(){
            return $this->hasMany(Documents::class,'application_forms_id');
        }
                        
}
