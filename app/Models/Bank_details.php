<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bank_details extends Model
{
    //
    protected $table = 'bank_details';
    protected $fillable = [
                            'user_id',
                            'bank_name',
                            'bank_address',
                            'name_of_account_holder',
                            'sort_code',
                            'account_number',
                            'created_by'
                          ];
}
