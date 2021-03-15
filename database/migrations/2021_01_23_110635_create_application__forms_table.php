<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('application_forms', function (Blueprint $table) {
                    $table->bigIncrements('id');
                    $table->unsignedBigInteger('user_id')->index();
                    
                    $table->string('position_applied_for')->nullable();
                    $table->string('title')->nullable();
                    $table->string('fore_name')->nullable();
                    $table->string('surname')->nullable();
                    $table->string('email')->unique();
                    $table->string('telephone_number')->nullable();
                    $table->longText('getaddress_id')->nullable();
                    $table->longText('address')->nullable();
                    $table->string('postcode')->nullable();
                    $table->enum('selected_interview',['YES','NO'])->nullable();
                    $table->longText('disability')->nullable();
                    $table->enum('medical_condition',['YES','NO'])->nullable();
                    $table->longText('medical_condition_reasonable')->nullable();
                    $table->enum('any_convictions',['YES','NO'])->nullable();
                    $table->longText('any_convictions_yes')->nullable();
                    $table->enum('work_permit_uk',['YES','NO'])->nullable();
                    $table->string('qualifications')->nullable();
                    $table->integer('is_cv_attached')->default(0);
                    $table->string('cv_path')->nullable();
                    $table->longText('unavailable_for_interview')->nullable();
                    $table->string('confirm_employee_name')->nullable();
                    $table->string('confirm_employee_signature')->nullable();
                    $table->date('confirm_Date')->nullable();
                    $table->string('information_provided_name')->nullable();
                    $table->string('information_provided_signature')->nullable();
                    $table->date('information_provided_Date')->nullable();
                    $table->integer('offer_letter_approved_id')->nullable();
                    $table->integer('is_viewed')->default(1);
                    $table->integer('is_ts_done')->default(1);
                    $table->integer('is_document_request')->default(1)->comment('1= not request');
                    $table->integer('is_document_get')->default(1)->comment('1= not get');
                    $table->string('driving_licence_code_text')->nullable();
                    $table->integer('created_by')->nullable();
                    $table->integer('updated_by')->nullable();
                    $table->index(['user_id', 'created_at']);

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
        Schema::dropIfExists('application__forms');
    }
}
