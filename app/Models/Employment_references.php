<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employment_references extends Model
{
    //
    protected $table = 'employment_references';
    protected $fillable = [
                            'user_id',
                            'application_forms_id',
                            'company_name',
                            'name',
                            'position',
                            'telephone_no',
                            'email',
                            'created_by',
                            'created_by',
                            'updated_by' 
                          ];
}
