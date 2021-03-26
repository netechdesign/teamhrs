<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProofOfIdentificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proof_of_identifications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->nullable()->index();
            $table->string('passport_birth')->nullable();
            $table->longText('passport_inside')->nullable();
            $table->longText('passport_outside')->nullable();
            $table->longText('birth_certificate')->nullable();
            $table->longText('proof_of_address')->nullable();
            $table->longText('national_insurance_number')->nullable();
            $table->longText('right_to_work')->nullable();
            $table->longText('driving_licence_front')->nullable();
            $table->longText('driving_licence_back')->nullable();
            $table->longText('passport_style_photograph')->nullable();
            $table->string('p45_available')->nullable();
            $table->longText('p45form')->nullable();
            $table->longText('hmrc_starter_checklist')->nullable();
            $table->integer('created_by')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('CASCADE');
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
        Schema::dropIfExists('proof_of_identifications');
    }
}
