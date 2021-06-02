<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Checked_mandatory_documents extends Model
    {
        protected $table= 'checked_mandatory_documents';
        protected $fillable = ['users_id','mandatory_documents_id','is_view','is_read','created_by','created_at'];
    }
