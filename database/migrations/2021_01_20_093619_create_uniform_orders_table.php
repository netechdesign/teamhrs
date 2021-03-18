<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUniformOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uniform_orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->unique();
                    $table->enum('polo_shirts',['S','M','L','XL','2XL','3XL'])->nullable();
                    $table->enum('sweater',['S','M','L','XL','2XL','3XL'])->nullable();
                    $table->enum('jacket',['S','M','L','XL','2XL','3XL'])->nullable();
                    $table->float('shoe_size')->nullable();
                    $table->float('glove_size')->nullable();
                    $table->float('trouser_waist')->nullable();
                    $table->string('trouser_length')->nullable();
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
        Schema::dropIfExists('uniform_orders');
    }
}
