<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employment_historys extends Model
{
    //
    protected $table = 'employment_historys';
    protected $fillable = [
                            'user_id',
                            'application_forms_id',
                            'name',
                            'position',
                            'reason_for_leaving',
                            'created_by',
                            'created_by',
                            'updated_by' 
                          ];
}
