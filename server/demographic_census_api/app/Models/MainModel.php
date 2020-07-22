<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DB as DB;

require 'config.php';

class MainModel{

    public static $data;

    public function samp($request){

    	$cars = array("Volvo", "BMW", "Toyota");

    	self::$data = json_encode($cars);

    	return true;    
    }

    public function updateDemoData($request){

    	$request = $request->getParsedBody();

    	$facebook_id = $request['facebook_id'];

    	$residence_region = $request['residence_region'];
        $residence_province = $request['residence_province'];
    	$residence_city = $request['residence_city'];
    	$residence_barangay = $request['residence_barangay'];


        //people
        $gender = $request['gender'];
        $ageGroup = $request['ageGroup'];


        //crime
    	$crime_level = $request['crime_level'];
    	$crime_level_future = $request['crime_level_future'];
        $crime_safe_day = $request['crime_safe_day'];
        $crime_safe_night = $request['crime_safe_night'];
        $crime_level_future = $request['crime_level_future'];
        $crime_home = $request['crime_home'];
        $crime_robbed = $request['crime_robbed'];
        $crime_physically_attack = $request['crime_physically_attack'];
        $crime_violent = $request['crime_violent'];
        $crime_drugs = $request['crime_drugs'];
        $crime_theft = $request['crime_theft'];
        $personality_outgoing = $request['personality_outgoing'];
        $personality_shy = $request['personality_shy'];
        $personality_can_handle_pressure = $request['personality_can_handle_pressure'];
        $personality_conversation = $request['personality_conversation'];
        $personality_curious = $request['personality_curious'];
        $personality_conservative = $request['personality_conservative'];
        $hygiene_products = $request['hygiene_products'];
        $snacks_products = $request['snacks_products'];
        $garments_products = $request['garments_products'];
        $gadgets_products = $request['gadgets_products'];
        $order_online_food = $request['order_online_food'];

    	if(DB::ins()->isExist("demographic_census_data", "facebook_id", "facebook_id=$facebook_id")) {
            DB::ins()->update("demographic_census_data", 

                //fields in db
                
                "residence_region=$residence_region, 
                 residence_province=$residence_province, 
                 residence_city=$residence_city, 
                 residence_barangay=$residence_barangay, 
                 gender=$gender, 
                 ageGroup=$ageGroup, 
                 crime_level=$crime_level, 
                 crime_level_future=$crime_level_future, 
                 crime_safe_day=$crime_safe_day, 
                 crime_safe_night=$crime_safe_night, 
                 crime_home=$crime_home, 
                 crime_robbed=$crime_robbed, 
                 crime_physically_attack=$crime_physically_attack, 
                 crime_violent=$crime_violent, 
                 crime_drugs=$crime_drugs, 
                 crime_theft=$crime_theft, 
                 personality_outgoing=$personality_outgoing, 
                 personality_shy=$personality_shy, 
                 personality_can_handle_pressure=$personality_can_handle_pressure, 
                 personality_conversation=$personality_conversation, 
                 personality_curious=$personality_curious, 
                 personality_conservative=$personality_conservative, 
                 hygiene_products=$hygiene_products, 
                 snacks_products=$snacks_products, 
                 garments_products=$garments_products, 
                 gadgets_products=$gadgets_products, 
                 order_online_food=$order_online_food",


                "facebook_id=$facebook_id");
    		return true;
    	} else {
    		return false;
    	}

    	//self::$data = json_encode($request);

    	return true;    
    }

}