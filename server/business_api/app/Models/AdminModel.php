<?php

namespace Models;

use \PDO;
use \PDOException;
use Helpers\DB as DB;

require 'config.php';

class AdminModel{

    public static $data;

    public function samp($request){

    	$request = $request->getParsedBody();

    	self::$data = json_encode($request);

    	return true;    
    }

    public function admin_getAllUsers($request){

    	$post = DB::ins()->select_fetch("users", "id, name, email, username, password, role, description");

    	self::$data = json_encode($post);

    	return true;    

    }

    public function admin_deleteUserById($request){

    	$request = $request->getParsedBody();

    	$id = $request['id'];

    	if(DB::ins()->delete("users", "id=$id")){
    		return true; 
    	} else {
    		return false;
    	}  

    }

    public function admin_updateUser($request){

    	$request = $request->getParsedBody();

    	$id = $request['id'];
        $email = $request['email'];
    	$name = $request['name'];
    	$username = $request['username'];
        $description = addslashes($request['description']);
        $role = $request['role'];

    	if(DB::ins()->update("users", "email=$email, name=$name, username=$username, description=$description, role=$role, date_updated=NOW()", "id=$id")){
    		return true;
    	} else {
    		return false;
    	}

    }

    public function admin_addUser($request){

    	$request = $request->getParsedBody();

        $email = $request['email'];
    	$name = $request['name'];
    	$username = $request['username'];
    	$password = md5($request['password']);
        $description = $request['description'];
        $role = $request['role'];

        if(!(DB::ins()->isExist("users", "username", "username=$username"))) {
	    	if(DB::ins()->insert("users", "email, name, username, password, description, role", "$email,, $name,, $username,, $password,, $description,, $role")){
	    		return true; 
	    	} else {
	    		return false;
	    	}
    	}

    }

    public function admin_addBusinessById($request){

        $request = $request->getParsedBody();

        $id = $request['id'];

        $post = DB::ins()->select_fetch("business", "*", "user_id=$id");

        if($post){
            self::$data = json_encode($post);
            return true; 
        } else {
            return false;
        }

    }

    public function admin_addBusiness($request){

        $request = $request->getParsedBody();

        $id = $request['id'];

        $post = DB::ins()->select_fetch("business", "*", "user_id=$id");

        if($post){
            self::$data = json_encode($post);
            return true; 
        } else {
            return false;
        }

    }

    public function admin_getUserBusinessById($request){

        $request = $request->getParsedBody();

        $id = $request['id'];

        $post = DB::ins()->select_fetch("business", "*", "user_id=$id");

        if($post){
            self::$data = json_encode($post);
            return true; 
        } else {
            return false;
        }

    }

    public function admin_deleteUserBusinessById($request){

        $request = $request->getParsedBody();

        $id = $request['id'];

        if(DB::ins()->delete("business", "id=$id")){
            return true;
        } else {
            return false;
        }

    }


}