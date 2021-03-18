<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsentStatementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consent_statements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->unique();
                    $table->string('recruitment_employee_name')->nullable();
                    $table->date('recruitment_Date')->nullable();
                    $table->longText('recruitment_employee_signature')->nullable();
                    $table->string('screening_employee_name')->nullable();
                    $table->longText('screening_employee_signature')->nullable();
                    $table->date('screening_Date')->nullable();
                    $table->string('i_confirm')->nullable();
                    $table->string('is_produce_my_certificate')->nullable();
                    $table->string('is_drug_and_alcohol')->nullable();
                    $table->string('confirm_employee_name')->nullable();
                    $table->longText('confirm_employee_signature')->nullable();
                    $table->date('confirm_Date')->nullable();
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
        Schema::dropIfExists('consent_statements');
    }
}
