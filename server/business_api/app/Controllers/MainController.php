<?php

namespace Controllers;

use Models\MainModel as Model;

class MainController {

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

}