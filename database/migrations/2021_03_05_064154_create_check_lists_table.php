<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCheckListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('issued_engineer_id')->nullable();
            $table->string('issued_engineer_name')->nullable();
            $table->date('issued_date')->nullable();
            $table->text('signature')->nullable();
            $table->integer('is_delete')->default(0);
            $table->integer('is_completed')->default(0);
            $table->date('completed_date')->nullable();
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
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
        Schema::dropIfExists('check_lists');
    }
}
