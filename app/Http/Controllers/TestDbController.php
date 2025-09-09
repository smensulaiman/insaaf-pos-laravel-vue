<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestDbController extends Controller
{
    public function testDB(Request $request)
    {
        return response()->json([
            'State' => '200',
            'Success' => 'Seems okay',
        ]);
    }
}
