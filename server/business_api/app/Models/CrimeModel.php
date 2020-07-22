<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DMH as DMH;
use Helpers\DB as DB;

require_once 'config.php';

class CrimeModel extends DMH{

    public static $data;

    public function getCrimeDataRegion($request){
        $dat = array();
        $request = $request->getParsedBody();
        
        $data = $request;

        $data1 = DMH::getCrimeDataRegion($data['location']);

        self::$data = json_encode($data1);
        return true;
    }

    public function getCrimeDataCity($request){
        $dat = array();
        $request = $request->getParsedBody();
        
        $data = $request;

        $data = DMH::getCrimeDataCity($data['location']);

        self::$data = json_encode($data);
        return true;
    }

    public function setCrimeData($request){
        $dat = array();
        $request = $request->getParsedBody();
        
        $data = $request;

        for($i = 1 ; $i<=13 ; $i++){
            DMH::setCrimeData($i);
        }
        DMH::setCrimeData('NCR');
        DMH::setCrimeData('COR');
        DMH::setCrimeData('ARMM');

        return true;
    }

    public function getCrimeStats($request){

        $dat = array();
        $request = $request->getParsedBody();
        
        $data = $request;

        $city = $data['city'];

        $city = explode(' ', $city);

        $city = implode("+", $city);

        echo file_get_html('http://www.numbeo.com/crime/city_result.jsp?country=Philippines&city=Quezon+City')->plaintext; 

        //self::$data = json_encode($string);
        return true;
        
    }

}