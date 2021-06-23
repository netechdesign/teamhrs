<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('application_statuses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('status_id')->nullable();
            $table->string('status_name')->nullable();
            $table->integer('application_forms_id')->nullable();
            $table->text('status_comments')->nullable();
            $table->integer('created_by')->nullable();
            $table->foreign('application_forms_id')->references('id')->on('application_forms')->onUpdate('RESTRICT')->onDelete('CASCADE');
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
        Schema::dropIfExists('application_statuses');
    }
}
