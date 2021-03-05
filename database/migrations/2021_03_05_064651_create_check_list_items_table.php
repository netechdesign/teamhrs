<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCheckListItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_list_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->unsignedBigInteger('check_lists_id')->index();
            $table->unsignedBigInteger('tool_categories_id')->index();
            $table->string('tool_categories_name')->nullable();
            $table->string('serial_number')->nullable();
            $table->string('is_received')->nullable();
            $table->integer('is_delete')->default(0);
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->foreign('tool_categories_id')->references('id')->on('tool_categories')->onUpdate('RESTRICT')->onDelete('CASCADE');
            $table->foreign('check_lists_id')->references('id')->on('check_lists')->onUpdate('RESTRICT')->onDelete('CASCADE');
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
        Schema::dropIfExists('check_list_items');
    }
}
