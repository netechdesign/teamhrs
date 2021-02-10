<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consent_statements extends Model
{
    //
    protected $table = 'consent_statements';
    protected $fillable = [
                            'user_id',
                            'recruitment_employee_name',
                            'recruitment_employee_signature',
                            'recruitment_Date',
                            'screening_employee_name',
                            'screening_employee_signature',
                            'screening_Date',
                            'i_confirm',
                            'confirm_employee_name',
                            'confirm_employee_signature',
                            'confirm_Date',
                            'created_by'
                          ];
}
