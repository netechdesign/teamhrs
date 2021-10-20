<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User_leaves extends Model
{
    protected $table = 'user_leaves';
    protected $fillable = [
                            'user_id',
                            'allotted_year',
                            'leave_balance',
                            'used_leave',
                            'start_date',
                            'end_date',
                            'allotted_leave_limit',
                            'created_by',
                            'updated_by'
    ];
}
