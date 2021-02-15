<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTelephonePreAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('telephone_pre_answers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('application_forms_id')->index();
            $table->integer('telephone_pre_questions_id')->nullable(); 
            $table->longText('telephone_pre_questions')->nullable(); 
            $table->longText('telephone_pre_answers')->nullable(); 
            $table->integer('created_by')->nullable();
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
        Schema::dropIfExists('telephone_pre_answers');
    }
}
