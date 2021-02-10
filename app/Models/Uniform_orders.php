<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Uniform_orders extends Model
{
    //
    protected $table = 'uniform_orders';
    protected $fillable = [
                            'user_id',
                            'polo_shirts',
                            'sweater',
                            'jacket',
                            'shoe_size',
                            'glove_size',
                            'trouser_waist',
                            'trouser_length',
                            'created_by'
                          ];
}
