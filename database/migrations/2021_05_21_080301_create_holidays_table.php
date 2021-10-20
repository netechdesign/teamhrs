<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHolidaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('holidays', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('from_date')->nullable();
            $table->date('to_date')->nullable();
            $table->string('time_off')->nullable();
            $table->longText('notes')->nullable();
            $table->integer('user_id');
            $table->string('email')->nullable();
            $table->string('day_off_start')->nullable();
            $table->string('day_off_end')->nullable();
            $table->string('is_approved')->nullable();
            $table->text('no_approved_notes')->nullable();
            $table->string('send_to')->nullable();
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
        Schema::dropIfExists('holidays');
    }
}
