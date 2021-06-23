<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Application_status extends Model
{
    protected $table = 'application_statuses';
    protected $fillable = [
                            'status_id',
                            'status_comments',
                            'application_forms_id',
                            'created_by',
                            'updated_by' 
                          ];
}
