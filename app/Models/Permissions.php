<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permissions extends Model
{
    //
    protected $fillable = ['method_name','name','page_name','status'];
}
