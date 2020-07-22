<?php

namespace Controllers;

use Models\UserModel as Model;

class UserController {

	public function createUser($request, $response){
		$model = new Model();
		$output = $model->createUser($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

}