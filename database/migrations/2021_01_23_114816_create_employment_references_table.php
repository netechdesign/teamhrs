<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmploymentReferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employment_references', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->nullable();
                    $table->integer('application_forms_id')->nullable();
                    $table->string('company_name')->nullable();
                    $table->string('name')->nullable();
                    $table->string('position')->nullable();
                    $table->string('telephone_no')->nullable();
                    $table->string('email')->nullable();
                    $table->integer('created_by')->nullable();
                    $table->integer('updated_by')->nullable();
                    $table->index(['user_id', 'application_forms_id']);
                    $table->foreign('application_forms_id')->references('id')->on('application_forms')->onUpdate('RESTRICT')->onDelete('CASCADE');
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
        Schema::dropIfExists('employment_references');
    }
}
