<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBankDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->unique();
                    $table->string('bank_name')->nullable();
                    $table->string('name_of_account_holder')->nullable();
                    $table->string('sort_code')->nullable();
                    $table->string('account_number')->nullable();
                    $table->longText('bank_address')->nullable();
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
        Schema::dropIfExists('bank_details');
    }
}
