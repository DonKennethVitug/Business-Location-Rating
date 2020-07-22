<?php

namespace Controllers;

use Models\BusinessModel as Model;

class BusinessController{

	public function addBusiness($request, $response){
		$model = new Model();
		$output = $model->addBusiness($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function deleteUserBusiness($request, $response){
		$model = new Model();
		$output = $model->deleteUserBusiness($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function fetchUserBusiness($request, $response){
		$model = new Model();
		$output = $model->fetchUserBusiness($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function fetchAllBusiness($request, $response){
		$model = new Model();
		$output = $model->fetchAllBusiness($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getBusinessData($request, $response){
		$model = new Model();
		$output = $model->getBusinessData($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getRegionList($request, $response){
		$model = new Model();
		$output = $model->getRegionList($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getProvinceList($request, $response){
		$model = new Model();
		$output = $model->getProvinceList($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getCityList($request, $response){
		$model = new Model();
		$output = $model->getCityList($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getBarangayList($request, $response){
		$model = new Model();
		$output = $model->getBarangayList($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function setRegionCityBarangay($request, $response){
		$model = new Model;
		$output = $model->setRegionCityBarangay($request);
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