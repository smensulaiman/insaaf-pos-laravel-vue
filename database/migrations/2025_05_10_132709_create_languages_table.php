<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('id', true);
            $table->string('name');
            $table->string('locale')->unique();
            $table->string('flag')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_default')->default(false);
            $table->timestamps(6);
        });

        DB::table('languages')->insert([
            [
                'name' => 'English',
                'locale' => 'en',
                'flag' => 'gb.svg',
                'is_active' => true,
                'is_default' => true,
            ],
            [
                'name' => 'Japanese',
                'locale' => 'ja',
                'flag' => 'jp.svg',
                'is_active' => true,
                'is_default' => false,
            ],
        ]);

        $defaultLocale = DB::table('settings')->value('default_language') ?? 'en';

        DB::table('languages')->update(['is_default' => false]);

        DB::table('languages')->where('locale', $defaultLocale)->update(['is_default' => true]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('languages');
    }
};
