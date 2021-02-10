<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('address_histories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->nullable();
                    $table->string('house_no')->nullable();
                    $table->string('street')->nullable();
                    $table->string('city')->nullable();
                    $table->string('county')->nullable();
                    $table->string('postcode')->nullable();
                    $table->string('time_at_address_year')->nullable();
                    $table->string('time_at_address_month')->nullable();
                    $table->integer('created_by')->nullable();
                    $table->integer('updated_by')->nullable();
                    $table->index(['user_id']);
                    
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
        Schema::dropIfExists('address_histories');
    }
}
