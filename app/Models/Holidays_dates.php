<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Holidays_dates extends Model
{
    protected $table= 'holidays_dates';
    protected $fillable = ['holidays_id','holiday_date','day_time','user_id','notes','is_approved','approved_by'];
}
