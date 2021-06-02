<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCheckedMandatoryDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checked_mandatory_documents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('users_id')->nullable(); 
            $table->integer('mandatory_documents_id')->nullable(); 
            $table->integer('is_view')->default(0); 
            $table->integer('is_read')->default(0); 
            $table->integer('created_by')->nullable();
            $table->foreign('users_id')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('CASCADE');
            $table->foreign('mandatory_documents_id')->references('id')->on('mandatory_documents')->onUpdate('RESTRICT')->onDelete('CASCADE');
            $table->softDeletes();
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
        Schema::dropIfExists('checked_mandatory_documents');
    }
}
