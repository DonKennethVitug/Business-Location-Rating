<?php

namespace Controllers;

use Models\PopulationModel as Model;

class PopulationController{

	public function getTwitterDataInArea($request, $response){
		$model = new Model();
		$output = $model->getTwitterDataInArea($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getTwitterDataAreaBoundery($request, $response){
		$model = new Model();
		$output = $model->getTwitterDataAreaBoundery($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getPopulation($request, $response){
		$model = new Model();
		$output = $model->getPopulation($request);
		if($output){
			return $response->withStatus(200)
							->withHeader('Content-Type', 'application/json')
							->write(Model::$data);
		}
		else{
			return $response->withStatus(400);
		}
	}

	public function getPopulationDemographics($request, $response){
		$model = new Model();
		$output = $model->getPopulationDemographics($request);
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