<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriversDeclarationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drivers_declarations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('fullname')->nullable();
            $table->integer('user_id')->nullable();
            $table->longText('employee_signature')->nullable();
            $table->string('employee_name')->nullable();
            $table->date('employee_date')->nullable();
            $table->longText('confirm_employee_signature')->nullable();
            $table->string('confirm_employee_name')->nullable();
            $table->date('confirm_Date')->nullable();
            $table->integer('i_confirm')->nullable();
            $table->integer('created_by')->nullable();
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
        Schema::dropIfExists('drivers_declarations');
    }
}
