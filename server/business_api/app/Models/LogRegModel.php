<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DB as DB;

require 'config.php';

class LogRegModel extends DB{

    public static $data;

    public function register($request) {

    	$request = $request->getParsedBody();
    	$name = mysql_escape_string($request['name']);
        $email = mysql_escape_string($request['email']);
    	$username = mysql_escape_string($request['username']);
        $picture = mysql_escape_string($request['picture']);
        $role = mysql_escape_string("user");
        $description = mysql_escape_string("I'm a new user");
    	$password = md5($request['password']);
    	if(!(DB::ins()->isExist("users", "username", "username=$username"))) {
    	  if(DB::ins()->insert("users", "name, email, username, picture, password, role, description", "$name,, $email,, $username,, $picture,, $password,, $role,, $description")){
    	    return true;
    	  }
    	}
    	return false;
    }

    public function login($request) {

    	$request = $request->getParsedBody();
    	$username = $request['username'];
    	$password = md5($request['password']);
    	if(DB::ins()->isExist("users", "username, password", "username=$username, password=$password")){
            $data = json_encode(DB::ins()->select_fetch("users", "*", "username=$username"));
            self::$data = $data;
    		return true;
    	}
    	return false;
    }

    public function update($request) {

        $request = $request->getParsedBody();
        $fname = $request['fname'];
        $lname = $request['lname'];
        $username = $request['username'];
        $desc = $request['desc'];
        $phone = $request['phone'];
        $id = $request['id'];

        if(DB::ins()->update("users", "first_name=$fname, last_name=$lname, username=$username, description=$desc, phone=$phone", "id=$id")){
            $data = json_encode(DB::ins()->select_fetch("users", "*", "id=$id"));
            self::$data = $data;
            return true;
        }
        return false;
    }

}