<?php

namespace App\Models\ComponyOrganization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyGroup extends Model
{
    use HasFactory;

    public function company(){
        return $this->belongsTo('App\Models\ComponyOrganization\Company');
    }

    public function subCompanyGroup(){
        return $this->hasMany('App\Models\ComponyOrganization\SubCompanyGroup');
    }

    public function companyEmployee(){
        return $this->hasMany('App\Models\ComponyOrganization\CompanyEmployee');
    }
}
