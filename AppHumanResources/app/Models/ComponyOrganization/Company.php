<?php

namespace App\Models\ComponyOrganization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    public function companyLocation(){
        return $this->hasOne('App\Models\ComponyOrganization\CompanyLocation');
    }

    public function asset(){
        return $this->hasMany('App\Models\ComponyOrganization\Asset');
    }

    public function companyGroup(){
        return $this->hasMany('App\Models\ComponyOrganization\CompanyGroup');
    }

    public function people(){
        return $this->hasMany('App\Models\ComponyOrganization\People');
    }
}
