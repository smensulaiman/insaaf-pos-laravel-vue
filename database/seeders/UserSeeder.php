<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('users')->insert(
            [
                'id' => 1,
                'firstname' => 'Insaaf',
                'lastname' => 'Admin',
                'username' => 'insaaf',
                'email' => 'admin@insaaf.jp',
                'password' => bcrypt('P@ssw0rd'),
                'avatar' => 'no_avatar.png',
                'phone' => '0123456789',
                'role_id' => 1,
                'statut' => 1,
                'is_all_warehouses' => 1,
            ]
        );
    }
}
