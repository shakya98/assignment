<?php

namespace App\Models\ComponyOrganization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyEmployee extends Model
{
    use HasFactory;

    public function people(){
        return $this->belongsTo('App\Models\ComponyOrganization\People');
    }

    public function companyGroup(){
        return $this->belongsTo('App\Models\ComponyOrganization\CompanyGroup');
    }
}
