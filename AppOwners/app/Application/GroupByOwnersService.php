<?php

namespace App\Application;

use App\Models\Company;
use App\Models\File;

class GroupByOwnersService
{
     public static function getFileInfo()
    {
        $companies = Company::all();
        $sampleArray = [];
        foreach ($companies as $key => $element) {
            $documents = File::where('company_id', '=', $element['id'])->pluck('file_name');
            $data[] = [$element['company_name'] => $documents];
        }
        return $data;

    }
}