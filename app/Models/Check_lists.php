<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Check_lists extends Model
{
    protected $table = 'check_lists';
    protected $fillable = [
                            'issued_engineer_id',
                            'issued_engineer_name',
                            'issued_date',
                            'signature',
                            'is_delete',
                            'sort_code',
                            'updated_by',
                            'created_by'
                          ];

}
