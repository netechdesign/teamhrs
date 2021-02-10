<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee_details extends Model
{
    //
    protected $table = 'employee_details';
    protected $fillable = [
                            'user_id',
                            'first_name',
                            'middle_name',
                            'last_name',
                            'region',
                            'start_date',
                            'date_of_birth',
                            'gender',
                            'telephone_number',
                            'mobile_number',
                            'email',
                            'house_no',
                            'street',
                            'city',
                            'county',
                            'postcode',
                            'time_at_address_year',
                            'time_at_address_month',
                            'town_of_birth_detail',
                            'ni_number',
                            'mothers_maiden',
                            'emergency_contact',
                            'relationship',
                            'contact_number',
                            'address',
                            'created_by'
                          ];

}
