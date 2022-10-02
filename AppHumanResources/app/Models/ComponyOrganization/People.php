<?php

namespace App\Models\ComponyOrganization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    use HasFactory;

    public function manager(){
        return $this->hasMany('App\Models\ComponyOrganization\Manager');
    }

    public function companyEmployee(){
        return $this->hasMany('App\Models\ComponyOrganization\CompanyEmployee');
    }

    public function company(){
        return $this->belongsTo('App\Models\ComponyOrganization\Company');
    }
}
