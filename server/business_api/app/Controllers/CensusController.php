<?php

namespace Controllers;

use Models\CensusModel as Model;

class CensusController {

	public function getCensusData($request, $response){
		$model = new Model();
		$output = $model->getCensusData($request);
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