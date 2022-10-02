<?php

namespace App\Application;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\File;

class GroupByOwnersService
{
     public static function getFileInfo(Request $request)
    {
        $companies = Company::all();
        $sampleArray = [];
        foreach ($companies as $key => $element) {
            $document = File::where('id', '=', $element->document_id)->first();
            $element['companyName'] = $element->company_name;
            $element['documentName'] = $document->document_name;
            array_push($sampleArray, $element);
        }
        return $sampleArray;

    }
}