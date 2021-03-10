<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfferletterlistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offerletterlists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('application_forms_id')->index();
            $table->string('job_title')->nullable(); 
            $table->string('confirm_Date')->nullable(); 
            $table->string('dbscheck')->nullable(); 
            $table->string('basic')->nullable(); 
            $table->string('bonus')->nullable(); 
            $table->string('hours_of_work')->nullable(); 
            $table->string('place_of_employment')->nullable(); 
            $table->string('created_by_name')->nullable(); 
            $table->integer('is_delete')->default(0);
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->foreign('application_forms_id')->references('id')->on('application_forms')->onUpdate('RESTRICT')->onDelete('CASCADE');
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
        Schema::dropIfExists('offerletterlists');
    }
}
