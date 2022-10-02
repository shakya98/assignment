<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Application\GroupByOwnersService;

class OwnerController extends Controller
{
    public function getData(Request $request)
    {
        $data = GroupByOwnersService:: getFileInfo($request);
        return $data;

    }
}
