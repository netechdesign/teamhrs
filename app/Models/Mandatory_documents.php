<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mandatory_documents extends Model
{
    protected $table= 'mandatory_documents';
    protected $fillable = ['document_name','document_path','role_can_read','created_by','created_at'];
}
