<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobPositionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_positions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('is_delete')->default(0);
            $table->integer('created_by')->nullable();
            $table->timestamps();
        });

           // Insert some stuff
    DB::table('job_positions')->insert([
                                        ['name' =>'Operations Director'],
                                        ['name' =>'Commercial Director'],
                                        ['name' =>'Head of Operations'],
                                        ['name' =>'Smart Metering Engineer'],
                                        ['name' =>'Scheduling Team Leader'],
                                        ['name' =>'Field Team Leader'],
                                        ['name' =>'Training and Quality Coach'],
                                        ['name' =>'Training, Development and Compliance Manager'],
                                        ['name' =>'Finance'],
                                        ['name' =>'Scheduler'],
                                        ['name' =>'Operations Support Lead'],
                                        ['name' =>'Recruitment and Fleet Lead'],
                                        ['name' =>'Compliance Administrator'],
                                        ['name' =>'Warehouse Operative'],
                                        ['name' =>'Regional Operations Manager'],
                                        ]);
    }
    



    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_positions');
    }
}
