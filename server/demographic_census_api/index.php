<?php

require 'vendor/autoload.php';

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);

//$app->post('/samp', "Controllers\MainController:samp");

//main
$app->post('/updateDemoData', "Controllers\MainController:updateDemoData");

//user
$app->post('/createUser', "Controllers\UserController:createUser");

//get census data
$app->post('/getCensusData', "Controllers\CensusController:getCensusData");

$app->run();