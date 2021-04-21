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
                            'allotted_leave_limit',
                            'created_by'
    ];
}
