<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Check_list_items extends Model
{
    //
    protected $table = 'check_list_items';
    protected $fillable = [
                            'check_lists_id',
                            'tool_categories_id',
                            'tool_categories_name',
                            'serial_number',
                            'is_received',
                            'is_delete',
                            'created_by',
                            'updated_by'
                          ];
}
