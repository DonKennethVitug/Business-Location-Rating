<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DB as DB;
use Helpers\VITUG as VITUG;

require 'config.php';

class CensusModel extends VITUG{

    public static $data;

    public function getCensusData($request){

        $request = $request->getParsedBody();

    	$location = [
            'region' => $request['region'],
            'province' => $request['province'],
            'city' => $request['city'],
            'barangay' => $request['barangay']
        ];

        $censusData = VITUG::vitugs_classify_count_rate_algorithm_by_location(VITUG::$data, $location);

        self::$data = json_encode($censusData);

    	return true;
    }

}