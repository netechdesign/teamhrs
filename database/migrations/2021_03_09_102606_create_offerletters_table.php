<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfferlettersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offerletters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('application_forms_id')->index();
            $table->unsignedBigInteger('offerletterlist_id')->index();
            $table->string('title')->nullable(); 
            $table->string('fore_name')->nullable(); 
            $table->string('surname')->nullable(); 
            $table->string('basic')->nullable(); 
            $table->string('bonus')->nullable(); 
            $table->string('confirm_Date')->nullable(); 
            $table->string('confirm_employee_date')->nullable(); 
            $table->string('confirm_employee_signature')->nullable(); 
            $table->string('dbscheck')->nullable(); 
            $table->string('hours_of_work')->nullable(); 
            $table->string('information_provided_date')->nullable(); 
            $table->string('information_provided_signature')->nullable(); 
            $table->string('job_title')->nullable(); 
            $table->string('place_of_employment')->nullable(); 
            $table->string('line_1')->nullable(); 
            $table->string('line_2')->nullable(); 
            $table->string('line_3')->nullable(); 
            $table->string('line_4')->nullable(); 
            $table->string('postcode')->nullable(); 
            $table->string('town_or_city')->nullable(); 
            $table->string('created_by_name')->nullable();
            $table->integer('is_approved')->default(0);
            $table->integer('approved_by')->nullable();
            $table->integer('is_delete')->default(0);
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->foreign('application_forms_id')->references('id')->on('application_forms')->onUpdate('RESTRICT')->onDelete('CASCADE');
            $table->foreign('offerletterlist_id')->references('id')->on('offerletterlists')->onUpdate('RESTRICT')->onDelete('CASCADE');
          
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
        Schema::dropIfExists('offerletters');
    }
}
