<?php

namespace Controllers;

use Models\AdminModel as Model;

class AdminController {

	public function samp($request, $response){
		$model = new Model();
		$output = $model->samp($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function admin_getAllUsers($request, $response){
		$model = new Model();
		$output = $model->admin_getAllUsers($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function admin_deleteUserById($request, $response){
		$model = new Model();
		$output = $model->admin_deleteUserById($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function admin_updateUser($request, $response){
		$model = new Model();
		$output = $model->admin_updateUser($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function admin_addUser($request, $response){
		$model = new Model();
		$output = $model->admin_addUser($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function admin_getUserBusinessById($request, $response){
		$model = new Model();
		$output = $model->admin_getUserBusinessById($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function admin_deleteUserBusinessById($request, $response){
		$model = new Model();
		$output = $model->admin_deleteUserBusinessById($request);
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