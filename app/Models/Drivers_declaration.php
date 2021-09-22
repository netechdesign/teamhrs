<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Drivers_declaration extends Model
{
    
    protected $table = 'drivers_declarations';
    protected $fillable = [
                            'user_id',
                            'fullname',
                            'employee_name',
                            'employee_signature',
                            'employee_date',
                            'i_confirm',
                            'confirm_employee_name',
                            'confirm_employee_signature',
                            'confirm_Date',
                            'created_by'
                          ];
}
