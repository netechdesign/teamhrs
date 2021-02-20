<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    protected $table= 'documents';
    protected $fillable = ['application_forms_id','user_id','document_name','document_path','created_by'];

}
