<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address_histories extends Model
{
    //
    protected $table = 'address_histories';
    protected $fillable = [
                            'user_id',
                            'house_no',
                            'street',
                            'city',
                            'county',
                            'postcode',
                            'time_at_address_year',
                            'time_at_address_month',
                            'created_by',
                            'created_by',
                            'updated_by' 
                          ];
}
