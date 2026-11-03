<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAppropriationAmountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('appropriation_amounts', function (Blueprint $table) {
            $table->dropColumn([
                'aip_id',
                'aip_code',
                'aip_code_parent',
                'aip_code_child',
                'idooe',
                'amount',
                'created_at',
                'updated_at'
            ]);
        });
        Schema::table('appropriation_amounts', function (Blueprint $table) {
            $table->string('aip_id')->nullable();
            $table->string('aip_code')->nullable();
            $table->string('aip_code_parent')->nullable();
            $table->string('aip_code_child')->nullable();
            $table->string('idooe')->nullable();
            $table->string('amount')->nullable();
            $table->timestamps();
        });
        // Schema::table('appropriation_amounts', function (Blueprint $table) {
        //     $table->dropColumn('aip_id');
        //     $table->dropColumn('aip_code');
        //     $table->dropColumn('aip_code_parent');
        //     $table->dropColumn('aip_code_child');
        //     $table->dropColumn('idooe');
        //     $table->dropColumn('amount');
        //     $table->dropColumn('created_at');
        //     $table->dropColumn('updated_at');
        //     $table->string('aip_id')->nullable();
        //     $table->string('aip_code')->nullable();
        //     $table->string('aip_code_parent')->nullable();
        //     $table->string('aip_code_child')->nullable();
        //     $table->string('idooe')->nullable();
        //     $table->string('amount')->nullable();
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('appropriation_amounts', function (Blueprint $table) {
            //
        });
    }
}
