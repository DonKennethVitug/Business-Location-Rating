<?php

namespace Helpers;

use \PDO;
use Helpers\DB as DB;

require_once "config.php";

class DMH {

  public function sanitizeRegion($region) {

      switch($region){

        case "4A":  
          return "04";
        break;

        case "4B":  
          return "17";
        break;

        case "NCR":  
          return "13";
        break;

        case "ARMM":  
          return "15";
        break;

        case "CAR":  
          return "14";
        break;

        case "NIR":  
          return "18";
        break;

        case "13": 
          return "16";
        break;

        default :  
          if(strlen($region)==1){
            return "0".$region;
          }
          return $region;
      }

      
    }

  public function sanitizeString($string){
    $string = explode(',', $string);
    $string = implode('', $string);
    $string = explode('/ ', $string);
    $string = implode('', $string);
    return $string;
  }

	public function getCrimeDataRegion($location) {
        $csvfile1 = fopen(CSV_PATH1, 'r');
        $i = 0;
        $data1 = array();      	
        while (!feof($csvfile1))
        {
           $csv_data[] = fgets($csvfile1, 1024);
           $csv_array1 = explode(",", $csv_data[$i]);
           if($csv_array1[0] == $location){
           	 if($csv_array1[1] == "PNP Blotter"){
           	 	$data1['region'] = $csv_array1[0];
           	 	$data1['source'] = $csv_array1[1];
           	 	$data1['murder'] = $csv_array1[2];
           	 	$data1['homicide'] = $csv_array1[3];
           	 	$data1['injury'] = $csv_array1[4];
           	 	$data1['rape'] = $csv_array1[5];
           	 	$data1['robbery'] = $csv_array1[6];
           	 	$data1['theft'] = $csv_array1[7];
           	 	$data1['carnapping'] = $csv_array1[8];
           	 	$data1['other_crime'] = $csv_array1[17];
           	 	$data1['total_crime_vol'] = $csv_array1[21];
           	 	$data1['total_crime_cleared'] = $csv_array1[22];
           	 	$data1['crime_clearance_efficiency'] = $csv_array1[23];
           	 	$data1['total_crime_solved'] = $csv_array1[24];
           	 	$data1['crime_soln_efficiency'] = 
                (($data1['total_crime_solved'] / $data1['total_crime_vol']) * 100);
           	 	$data1['ave_monthly_crime_rate'] = $csv_array1[26];
           	 }	 	
           }      
           $i++;
        }
        fclose($csvfile1);

        return $data1;
	}

  public function getCrimeDataCity($city) {
        $csvfile2 = fopen(CSV_PATH2, 'r');
        $o = 0;
        $data2 = array();      
        while (!feof($csvfile2))
        {
           $csv_data2[] = fgets($csvfile2, 1024);
           $csv_array2 = explode(",", $csv_data2[$o]);
           if($csv_array2[1] == $city) {
            $data2['region'] = $csv_array2[0];
            $data2['city'] = $csv_array2[1];
            $data2['murder'] = $csv_array2[2];
            $data2['homicide'] = $csv_array2[3];
            $data2['robbery'] = $csv_array2[4];
            $data2['theft'] = $csv_array2[5];
            $data2['carnapping'] = $csv_array2[6];
            $data2['injury'] = $csv_array2[7];
            $data2['total_crime_vol'] = 0;
            foreach ($data2 as $dataVal) {
              $data2['total_crime_vol'] += $dataVal;
            }
           }
           $csv_array2 = explode(",", $csv_data2[$o]);  
           $o++;
        }
        fclose($csvfile2);
        return $data2;
  }

  public function setCrimeData($location) {

        $csv_file = CSV_PATH . "natcrimestat2013.csv";
        $csvfile = fopen($csv_file, 'r');
        $theData = fgets($csvfile);
        $data = array();    
        $i = 0;   
        $region = array('NCR', 'COR', 'ARMM');

        while (!feof($csvfile))
        {
           
           $csv_data[] = fgets($csvfile, 1024);
           $csv_array = explode(",", $csv_data[$i]);
           if($csv_array[0] == $location){
            
             if($csv_array[1] == "PNP Blotter"){

                DB::ins()->insert("crime", "region, source, murder, homicide, injury, rape, robbery, theft, carnapping, other_crime, total_crime_volume, total_crime_cleared, crime_clearance_efficiency, total_crime_solved, crime_soln_efficiency, ave_monthly_crime_rate/", "'"
               .$csv_array[0].", "
               .$csv_array[1].", "
               .$csv_array[2].", "
               .$csv_array[3].", "
               .$csv_array[4].", "
               .$csv_array[5].", "
               .$csv_array[6].", "
               .$csv_array[7].", "
               .$csv_array[8].", "
               .$csv_array[17].", "
               .$csv_array[21].", "
               .$csv_array[22].", "
               .$csv_array[23].", "
               .$csv_array[24].", "
               .$csv_array[25].", "
               .$csv_array[26])."'";
             }    
           } 
           $i++;  
        }

        fclose($csvfile);
        return $data;
  }

  function replaceSpecial($string) {
    $string = explode(' ', $string);
    $string = implode('%20', $string);
    $string = explode('&amp;', $string);
    $string = implode('&', $string);
    return $string;
  }

  function sanitizeNumber($string) {
    $string = explode(',', $string);
    $string = implode('', $string);
    return $string;
  }

  function sanitizeEnye($string){
    $string = utf8_decode($string);
    $string = explode('?', $string);
    $string = implode('N', $string);
    $string = explode(' I / II', $string);
    $string = implode('', $string);
    return $string;
  }

  function removeSpace($string) {
    $string = preg_replace('/\s+/', ' ', $string);
    return $string;
  }

  function setRegionData($html) {

    foreach($html->find('span[class="headline"]') as $regionName){
      $this->_PopulationData['region']['region_name'] = $regionName->innertext;
    }

    foreach($html->find('tr[valign="top"]') as $root) {
     foreach($root->find('td[class="dataCell"]') as $parent) {
      $regionPopulation =  $parent->innertext;
      $this->_PopulationData['region']['region_population'] = self::sanitizeNumber($regionPopulation);
     }
    }

  }

  function getTargetCity($html, $city){
    foreach($html->find('table[width="600"]') as $root){
      foreach($root->find('a') as $targetCity){
        if(strtoupper($targetCity->innertext) == strtoupper($city)){
          return self::replaceSpecial($targetCity->href);
        } 
      }
    }
    return false;
  }

  function setCityData($city, $html){
    foreach($html->find('table[width="600"]') as $root){
      foreach($root->find('a') as $targetCity){
        if(self::sanitizeEnye(strtoupper($targetCity->innertext)) == strtoupper($city)){
          $this->_PopulationData['city']['city_name'] = $targetCity->innertext;
          $dataCell = array();
          $i=0;
          foreach($root->find('td[class="dataCell"]') as $data){
            $dataCell[$i] =  self::sanitizeNumber(self::removeSpace($data->innertext));
            $i++;
          }
          $this->_PopulationData['city']['city_code'] = $dataCell[1];
          $this->_PopulationData['city']['city_income_class'] = $dataCell[2];
          $this->_PopulationData['city']['city_class'] = $dataCell[3];
          $this->_PopulationData['city']['city_district'] = $dataCell[4];
          $this->_PopulationData['city']['city_registered_voters'] = $dataCell[5];
          $this->_PopulationData['city']['city_population'] = $dataCell[6];
          $this->_PopulationData['city']['city_land_area'] = $dataCell[7];
          return null;
        } 
      }
    }
  }

  function setbarangayData($barangay, $html){
    foreach($html->find('table[width="500"]') as $root){
      foreach($root->find('td[width="255"]') as $barangayName){
        if(strtoupper(self::sanitizeEnye($barangayName->innertext)) == strtoupper($barangay)){
          $dataCell = array();
          $i=0;
          foreach($root->find('td[class="dataCell"]') as $data){
            $dataCell[$i] = self::sanitizeEnye(self::sanitizeNumber(self::removeSpace($data->innertext)));
            $i++;
          }
          $this->_PopulationData['barangay']['barangay_name'] = $dataCell[0];
          $this->_PopulationData['barangay']['barangay_code'] = $dataCell[1];
          $this->_PopulationData['barangay']['barangay_urban/rural'] = $dataCell[2];
          $this->_PopulationData['barangay']['barangay_population'] = $dataCell[3];
          return null;
        }
      }
    }
  }

  private $_PopulationData = array();

  public function GetPopulation($region=null, $city=null, $barangay=null) {

    $data = array();

    $html = file_get_html(population_path.'regview.asp?region='.$region);
   
    self::setRegionData($html);

    foreach($html->find('td[align="left"]') as $root){

      foreach($root->find('a') as $parent){

        $html = self::replaceSpecial(population_path.''.$parent->href);

        $html = file_get_html($html);

        self::setCityData($city, $html);

        if($targetCityLink = self::getTargetCity($html, $city)) {

           $html = (population_path.''.$targetCityLink);

           $html = file_get_html($html);

           self::setbarangayData($barangay, $html);

        }

      }

    }

    return ($this->_PopulationData);

  }

  public function getPopulationDemographics($city = null){

    $data = array();

    if($city == "Quezon City" || $city == "QUEZON CITY") {
      $data = array();

      $html = file_get_html(demographic_qc);

      foreach($html->find('table[width="577"]') as $root){
        $i=0;
        foreach($root->find('p[align="center"]') as $parent){
          $dataCell[$i] = self::sanitizeNumber($parent->innertext);
          $i++;

        }

        $data['infants'] = $dataCell[0];
        $data['toddlers'] = $dataCell[1];
        $data['child'] = $dataCell[2];
        $data['disabilities'] = $dataCell[3];
        $data['male'] = $dataCell[5];
        $data['female'] = $dataCell[6];
        $data['senior'] = $dataCell[7];

      }
    }
    return $data;
  }

}
?>