<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Telephone_pre_answers extends Model
{
    //
    protected $table= 'telephone_pre_answers';
    protected $fillable = ['application_forms_id','telephone_pre_questions_id','telephone_pre_questions','telephone_pre_answers','created_by'];

}
