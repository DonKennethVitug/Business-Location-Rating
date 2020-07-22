<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DMH as DMH;
use Helpers\DB as DB;

require 'config.php';

class MainModel extends DMH{

    public static $data;

    public function samp($request){

    	$cars = array("Volvo", "BMW", "Toyota");

    	self::$data = json_encode($cars);

    	return true;    
    }

}