<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Insert some stuff
        DB::table('settings')->insert(
            array(
                'id' => 1,
                'email' => 'admin@example.com',
                'currency_id' => 1,
                'client_id' => 1,
                'sms_gateway' => 1,
                'is_invoice_footer' => 0,
                'invoice_footer' => Null,
                'warehouse_id' => Null,
                'CompanyName' => 'Insaaf',
                'CompanyPhone' => '6315996770',
                'CompanyAdress' => '3618 Abia Martin Drive',
                'footer' => 'Insaaf - Ultimate Inventory With POS',
                'developed_by' => 'Insaaf',
                'logo' => 'logo-default.png',
                'app_name' => 'Insaaf | Ultimate Inventory With POS',
                'page_title_suffix' => 'Ultimate Inventory With POS',
                'favicon' => 'favicon.ico',
            )

        );
    }
}
