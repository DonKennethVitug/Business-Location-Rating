<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DB as DB;

require 'config.php';

class UserModel{

    public static $data;

    public function createUser($request){

    	$request = $request->getParsedBody();

    	$facebook_id = $request['facebook_id'];

    	if(!(DB::ins()->isExist("demographic_census_users", "facebook_id", "facebook_id=$facebook_id"))) {
    		DB::ins()->insert("demographic_census_users", "facebook_id, date_created", "'$facebook_id', NOW()");
            DB::ins()->insert("demographic_census_data", "facebook_id, date_created", "'$facebook_id', NOW()");
    		return true;
    	} else {
    		return false;
    	}

    	//self::$data = json_encode($request);

    	  
    }

}