<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_employees', function (Blueprint $table) {
            $table->id();
            $table->string('empl_id')->comment('Employee ID/CATS Number');
            $table->string('employee_name');
            $table->string('last_name');
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('suffix_name');
            $table->string('postfix_name');
            $table->string('gender');
            $table->string('age');
            $table->string('birth_date');
            $table->string('department_code');
            $table->string('subdepartment_code');
            $table->string('division_code');
            $table->string('section_code');
            $table->string('position_code');
            $table->string('position_long_title');
            $table->string('position_short_title');
            $table->string('position_title1');
            $table->string('position_title2');
            $table->string('is_pghead');
            $table->string('salary_grade');
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
        Schema::dropIfExists('user_employees');
    }
}
