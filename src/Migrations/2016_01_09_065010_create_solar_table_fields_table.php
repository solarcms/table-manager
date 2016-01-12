<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSolarTableFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solar_table_fields', function (Blueprint $table) {
            $table->increments('id');
            $table->string('parent');
            $table->string('column_type');
            $table->boolean('is_translatable')->default(false);
            $table->string('validation')->nullable();
            $table->boolean('is_grid_enabled')->default(false);
            $table->boolean('is_grid_fixed')->default(false);
            $table->string('default_value')->nullable();
            $table->boolean('is_form_enabled')->default(false);
            $table->boolean('is_sortable')->default(false);
            $table->boolean('is_filter')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('solar_table_fields');
    }
}
