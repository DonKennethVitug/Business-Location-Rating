<?php

namespace Controllers;

use Models\CrimeModel as Model;

class CrimeController{

	public function getCrimeDataRegion($request, $response){
		$model = new Model();
		$output = $model->getCrimeDataRegion($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getCrimeDataCity($request, $response){
		$model = new Model();
		$output = $model->getCrimeDataCity($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function setCrimeData($request, $response){
		$model = new Model();
		$output = $model->setCrimeData($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}
	public function getCrimeStats($request, $response){
		$model = new Model();
		$output = $model->getCrimeStats($request);
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