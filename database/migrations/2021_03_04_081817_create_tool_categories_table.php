<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToolCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tool_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('is_delete')->default(0);
            $table->integer('created_by')->nullable();
            $table->timestamps();
        });

        DB::table('tool_categories')->insert([
            ['name' =>'Mobile- Samsung A21s'],

['name' =>'COVID PPE'],

['name' =>'Eye-Wash Pods'],

['name' =>'1 Person First Aid Kit'],

['name' =>'Ear Defenders'],

['name' =>'Disposable Overshoes'],

['name' =>'Disposable Masks (FFP3V)'],

['name' =>'Safety Glasses'],

['name' =>'Lantern'],

['name' =>'Dual Fuel Tool Bag'],

['name' =>'Hacksaw'],

['name' =>'Hacksaw blades'],

['name' =>'Safety Shrouds - House Service Cutout x 3'],

['name' =>'210mm Hd 1000v Vde Insulated Cable Croppers'],

['name' =>'160mm 1000v Vde Insulated Sidecutters'],

['name' =>'4 X 100 Mm 1000v Insulated Screwdriver Flat'],

['name' =>'5.5 X 125mm 1000v Insulated Screwdriver Flat'],

['name' =>'6.5 X 150mm 1000v Insulated Screwdriver Flat'],

['name' =>'No1 X 80mm 1000v Insulated PZ1 Pozidriv Screwdriver'],

['name' =>'No2 X 100mm 1000v Insulated PZ2 Pozidriv Screwdriver'],

['name' =>'Martindale Test Kit'],

['name' =>'3mm Hex key'],

['name' =>'Hot work box'],

['name' =>'5mm Drill Bit'],

['name' =>'7mm drill bit'],

['name' =>'Pipe Adjustable Grips 10'],

['name' =>'U-Gauge 30 Milibar'],

['name' =>'U-Gauge Neoprene Tube'],

['name' =>'Insulated inspection mirror'],

['name' =>'Voltage Stick Detector (Voltstick LV50 50V -1000V)'],

['name' =>'Heavy Duty Continuity Bonds (Temporary Cross Bonding)'],

['name' =>'8mm combination spanner'],

['name' =>'Pipe Slice 15mm'],

['name' =>'Pipe Slice 22mm'],

['name' =>'Pipe Slice 28mm'],

['name' =>'Blow Torch Burner'],

['name' =>'Propane Gas'],

['name' =>'Heat Mat'],

['name' =>'Red Edding Marker Pen (Gas)'],

['name' =>'Black sharpie'],

['name' =>'Ladders'],

['name' =>'Combi battery drill'],

['name' =>'Winter Jacket'],

['name' =>'Jumper x 2'],

['name' =>'Polo Shirts x 3'],

['name' =>'Trousers x 2'],

['name' =>'Boots'],

['name' =>'Spirit Level'],

['name' =>'Saw'],

['name' =>'Face Visor'],

['name' =>'Knee Pads'],

['name' =>'Dust Sheet'],

['name' =>'Meter Spanner'],

['name' =>'Tape Measure'],

['name' =>'Fire Extinguisher'],

['name' =>'Fuse Finder'],

['name' =>'Stillsons'],
['name' =>'Torque Screwdriver Set'],
['name' =>'Hard Hat'],
['name' =>'Fire Brigade Keys (London Only)'],
['name' =>'Flash Jacket']]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tool_categories');
    }
}
