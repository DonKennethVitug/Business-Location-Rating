<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DMH as DMH;
use Helpers\DB as DB;
use Helpers\TH as TH;

require_once('config.php');
require_once('app/Helpers/WH.php');

class PopulationModel{

    public static $data;

    public function getPopulation($request){
        $dat = array();
        $request = $request->getParsedBody();
        
        $data = $request;

		$region = DMH::sanitizeRegion($data['region']);
		$city = @$data['city'];
		$barangay = @$data['barangay'];

		$dataPop = DMH::GetPopulation($region, $city, $barangay);

        if(self::$data = json_encode($dataPop,  JSON_UNESCAPED_SLASHES)){
        	return true;
        }

        return false;        
    }

    public function getTwitterDataInArea($request){
        $dat = array();
        $request = $request->getParsedBody();
        
        $data = $request;

		$settings = array(
		'oauth_access_token' => "750486256769830912-pHyYEpX7Pb91XbynrtKuAM3soLfRUnp",
		'oauth_access_token_secret' => "K9HOFxIWHqTRPvDF1oriMa6iQSIKlsj9KoDMY3BEovw56",
		'consumer_key' => "p0lp4MSHuM4VtiktWwuwwZwx4",
		'consumer_secret' => "kIg4waQYETRlp3cXiwAY0PsoTiYS2XMxl035xpVpfEiJ04fZHu"
		);

		$url = "https://api.twitter.com/1.1/search/tweets.json";

		$requestMethod = "GET";

		$lat = 14.720209;
		$lng = 121.061513;

		$getfield = "?q=&geocode=$lat,$lng,1km&lang=en";

		$twitter = new TH($settings);

		$string = json_decode($twitter->setGetfield($getfield)
		->buildOauth($url, $requestMethod)
		->performRequest(),$assoc = TRUE);

		foreach($string['statuses'] as $tweets){
			$latTw = $tweets['coordinates']['coordinates'][0];
			$lngTw = $tweets['coordinates']['coordinates'][1];
			print_r($tweets['coordinates']['coordinates']);
			DB::ins()->insert("nearbyTweets/lat, lng/$latTw,, $lngTw");
		}

		

        //self::$data = json_encode($string);
        return true;
    }

    public function getTwitterDataAreaBoundery($request){
        $dat = array();
        $request = $request->getParsedBody();
        
        $data = $request;

        $lat = $data['lat'];
        $lng = $data['lng'];

		$settings = array(
		'oauth_access_token' => "750486256769830912-pHyYEpX7Pb91XbynrtKuAM3soLfRUnp",
		'oauth_access_token_secret' => "K9HOFxIWHqTRPvDF1oriMa6iQSIKlsj9KoDMY3BEovw56",
		'consumer_key' => "p0lp4MSHuM4VtiktWwuwwZwx4",
		'consumer_secret' => "kIg4waQYETRlp3cXiwAY0PsoTiYS2XMxl035xpVpfEiJ04fZHu"
		);

		$url = "https://api.twitter.com/1.1/geo/reverse_geocode.json";

		$requestMethod = "GET";

		$getfield = '?lat='.$lat.'&long='.$lng;

		$twitter = new TH($settings);

		$string = json_decode($twitter->setGetfield($getfield)
		->buildOauth($url, $requestMethod)
		->performRequest(),$assoc = TRUE);

        self::$data = json_encode($string);
        return true;
    }

    public function getPopulationDemographics($request){
        $dat = array();
        $request = $request->getParsedBody();
        
        $city = $request['city'];

        $data = DMH::getPopulationDemographics($city);

        self::$data = json_encode($data);
        return true;
    }

}