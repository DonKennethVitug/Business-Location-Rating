<?php

namespace Models;

use Helpers\DB as DB;
use \PDOException;
use Helpers\DMH as DMH;
use Helpers\TH as TH;

require_once('config.php');
require_once('app/Helpers/WH.php');

class BusinessModel{

    public static $data;

    public function addBusiness($request){

        $request = $request->getParsedBody();

        $user_id = $request['user_id'];

        $business_name = addslashes($request['business_name']);

        $business_company_name = addslashes($request['business_company_name']);

        $business_type = addslashes($request['business_type']);

        $business_scope = addslashes($request['business_scope']);

        $business_address = addslashes($request['business_address']);

        $business_description = addslashes($request['business_description']);

        $business_location_region = addslashes($request['business_location_region']);

        $business_location_province = addslashes($request['business_location_province']);

        $business_location_city = addslashes($request['business_location_city']);

        $business_location_barangay = addslashes($request['business_location_barangay']);

        $business_location_latitude = addslashes($request['business_location_latitude']);

        $business_location_longitude = addslashes($request['business_location_longitude']);

        if(!DB::ins()->isExist("business", "business_name", "business_name=$business_name")){

          self::$data = json_encode($request);

          return DB::ins()->insert("business", "user_id, business_name, business_company_name, business_type, business_scope, business_address, business_description, business_location_region, business_location_province, business_location_city, business_location_barangay, business_location_latitude, business_location_longitude", "$user_id,, $business_name,, $business_company_name,, $business_type,, $business_scope,, $business_address,, $business_description,, $business_location_region,, $business_location_province,, $business_location_city,, $business_location_barangay,, $business_location_latitude,, $business_location_longitude");

        }       

        return false;

    }

    public function fetchUserBusiness($request){

        $request = $request->getParsedBody();

        $user_id = $request['user_id'];

        $data = DB::ins()->select_fetch("business", "*", "user_id=$user_id");

        self::$data = json_encode($data);

        return true;

    }

    public function fetchAllBusiness($request){

        $request = $request->getParsedBody();

        $data = DB::ins()->select_fetch("business", "*");

        self::$data = json_encode($data);

        return true;

    }

    public function getBusinessData($request){

        $request = $request->getParsedBody();

        $businessId = $request['businessId'];

        $data = DB::ins()->select_fetch("business", "*", "id=$businessId");

        self::$data = json_encode($data);

        return true;

    }

    public function deleteUserBusiness($request){

        $request = $request->getParsedBody();

        $businessId = $request['businessId'];

        $data = DB::ins()->delete("business", "id=$businessId");

        self::$data = json_encode($data);

        return true;

    }

    /*public function getRegionList($request){

        $request = $request->getParsedBody();

        $regions = DB::ins()->select_fetch("region/region");
        
        self::$data = json_encode($regions);

        return true;

    }*/

    public function getRegionList($request){

        $request = $request->getParsedBody();

        $datas = DB::ins()->select_fetch("ph_data", "region_short_name");

        foreach($datas as $data){
            $region_short_name = $data->region_short_name;
            $arr_data[] = $region_short_name;
        }

        $arr_data = array_unique($arr_data);
        
        self::$data = json_encode($arr_data);

        return true;

    }

    public function getProvinceList($request){

        $request = $request->getParsedBody();

        $datas = DB::ins()->select_fetch("ph_data", "province", "region_short_name=".$request['region']);

        foreach($datas as $data){
            $province = $data->province;
            $arr_data[] = $province;
        }        

        $arr_data = array_unique($arr_data);
        
        self::$data = json_encode($arr_data);

        return true;

    }

    public function getCityList($request){

        $request = $request->getParsedBody();

        $datas = DB::ins()->select_fetch("ph_data", "city_municipality", "region_short_name=".$request['region'].", province=".$request['province']);

        foreach($datas as $data){
            $city = $data->city_municipality;
            $arr_data[] = $city;
        }        

        $arr_data = array_unique($arr_data);
        
        self::$data = json_encode($arr_data);

        return true;

    }

    public function getBarangayList($request){

        $request = $request->getParsedBody();

        $datas = DB::ins()->select_fetch("ph_data", "barangay", "region_short_name=".$request['region'].", province=".$request['province'].", city_municipality=".$request['city']);

        foreach($datas as $data){
            $barangay = $data->barangay;
            $arr_data[] = $barangay;
        }        

        $arr_data = array_unique($arr_data);
        
        self::$data = json_encode($arr_data);

        return true;

    }

    public function setRegionCityBarangay($request){

        $regions = DB::ins()->select_fetch("region", "*");
      
        foreach($regions as $region){

          $region_short_name = $region->region;

          $region = DMH::sanitizeRegion($region->region);

          $html = file_get_html(population_path.'regview.asp?region='.$region);

          foreach($html->find('span[class="headline"]') as $regionName){

            $region = $regionName->innertext;

          }  

          foreach($html->find('table[width="510"]') as $root){    

              foreach($root->find('a') as $parent){

                $province = DMH::sanitizeString($parent->innertext);

                $html1 = DMH::replaceSpecial(population_path.''.$parent->href);

                $html1 = file_get_html($html1);

                foreach($html1->find('td[width="78"]') as $root){

                  foreach($root->find('a') as $parent1){

                    $city_municipality = DMH::sanitizeString(DMH::sanitizeEnye($parent1->innertext));

                    $html2 = DMH::replaceSpecial(population_path.''.$parent1->href);

                    $html2 = file_get_html($html2);

                    foreach($html2->find('td[width="255"]') as $key => $barangayName){

                      if($key){

                        $barangay = DMH::sanitizeString(DMH::sanitizeEnye($barangayName->innertext));

                        DB::ins()->insert("ph_data", "region_short_name, region, province, city_municipality, barangay/$region_short_name,, $region,, $province,, $city_municipality,, $barangay");

                      }

                    }

                  }

                }

              }

          }

        }

        return true;

    }

}