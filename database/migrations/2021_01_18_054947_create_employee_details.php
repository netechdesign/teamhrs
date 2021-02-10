<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_details', function (Blueprint $table) {
                    $table->bigIncrements('id');
                    $table->unsignedBigInteger('user_id')->unique();
                    $table->string('first_name')->nullable();
                    $table->string('middle_name')->nullable();
                    $table->string('last_name')->nullable();
                    $table->string('region')->nullable();
                    $table->date('start_date')->nullable();
                    $table->date('date_of_birth')->nullable();
                    $table->integer('gender')->nullable()->comment = '1=male';
                    $table->string('telephone_number')->nullable();
                    $table->string('mobile_number')->nullable();
                    $table->string('email')->nullable();
                    $table->string('house_no')->nullable();
                    $table->longText('street')->nullable();
                    $table->string('city')->nullable();
                    $table->string('county')->nullable();
                    $table->string('postcode')->nullable();
                    $table->integer('time_at_address_year')->nullable();
                    $table->integer('time_at_address_month')->nullable();
                    $table->string('town_of_birth_detail')->nullable();
                    $table->string('ni_number')->nullable();
                    $table->string('mothers_maiden')->nullable();
                    $table->string('emergency_contact')->nullable();
                    $table->string('relationship')->nullable();
                    $table->string('contact_number')->nullable();
                    $table->longText('address')->nullable();
                    $table->integer('created_by')->nullable();
                    $table->integer('updated_by')->nullable();
                    $table->foreign('user_id')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('CASCADE');
                    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_details');
    }
}
