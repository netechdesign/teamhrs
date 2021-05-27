<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHolidaysDatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('holidays_dates', function (Blueprint $table) {
                        $table->bigIncrements('id');
                        $table->integer('holidays_id')->index();
                        $table->date('holiday_date');
                        $table->string('day_time')->nullable();
                        $table->integer('user_id')->index();
                        $table->longText('notes')->nullable();
                        $table->tinyInteger('is_approved')->default('0');
                        $table->integer('approved_by')->nullable();
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
        Schema::dropIfExists('holidays_dates');
    }
}
