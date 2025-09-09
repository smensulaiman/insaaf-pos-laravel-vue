<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('roles')->insert(
            [
                'id' => 1,
                'name' => 'Super Admin',
                'label' => 'Super Admin',
                'status' => 1,
                'description' => 'Owner',
            ]
        );
    }
}
