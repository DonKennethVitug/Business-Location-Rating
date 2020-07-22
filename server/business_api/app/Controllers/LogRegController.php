<?php

namespace Controllers;

use Models\LogRegModel as Model;

class LogRegController {

	public function register($request, $response){
		$model = new Model();
		$output = $model->register($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function login($request, $response){
		$model = new Model();
		$output = $model->login($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function update($request, $response){
		$model = new Model();
		$output = $model->update($request);
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

?>