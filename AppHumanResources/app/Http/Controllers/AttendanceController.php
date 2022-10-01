<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Attendance\Application\AttendanceService;

class AttendanceController extends Controller
{
    public function fileImport(Request $request){
        $data = AttendanceService:: uploadCSV($request);
        return $data;
    }

    public function getAttendance(Request $request){
        $data = AttendanceService:: getAttendanceData($request);
        return $data;
    }
}
