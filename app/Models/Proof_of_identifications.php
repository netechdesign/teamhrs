<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Proof_of_identifications extends Model
{
    //
    use SoftDeletes;
    protected $table = 'proof_of_identifications';
    protected $fillable = ['user_id','passport_birth','passport_inside','passport_outside','birth_certificate','proof_of_address','national_insurance_number','right_to_work','driving_licence_front','driving_licence_back','passport_style_photograph','p45_available','p45form','created_by'];
}
