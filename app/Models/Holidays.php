<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Holidays extends Model
{
    protected $table= 'holidays';
 protected $fillable = ['from_date','to_date','time_off','notes','user_id','email','send_to','day_off_start','day_off_end','is_approved','no_approved_notes','is_withdraw'];
}
