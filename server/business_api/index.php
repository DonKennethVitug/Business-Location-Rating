<?php

require 'vendor/autoload.php';

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);

$app->post('/samp', "Controllers\MainController:samp");

$app->post('/getCrimeDataRegion', "Controllers\CrimeController:getCrimeDataRegion");
$app->post('/getCrimeStats', "Controllers\CrimeController:getCrimeStats");
$app->post('/getCrimeDataCity', "Controllers\CrimeController:getCrimeDataCity");
$app->put('/setCrimeData', "Controllers\CrimeController:setCrimeData");

$app->post('/getPopulation', "Controllers\PopulationController:getPopulation");
$app->post('/getPopulationDemographics', "Controllers\PopulationController:getPopulationDemographics");
$app->post('/getTwitterDataInArea', "Controllers\PopulationController:getTwitterDataInArea");
$app->post('/getTwitterDataAreaBoundery', "Controllers\PopulationController:getTwitterDataAreaBoundery");

$app->post('/register', "Controllers\LogRegController:register");
$app->post('/login', "Controllers\LogRegController:login");
$app->post('/update', "Controllers\LogRegController:update");

$app->post('/addBusiness', "Controllers\BusinessController:addBusiness");
$app->post('/deleteUserBusiness', "Controllers\BusinessController:deleteUserBusiness");
$app->post('/fetchUserBusiness', "Controllers\BusinessController:fetchUserBusiness");
$app->post('/fetchAllBusiness', "Controllers\BusinessController:fetchAllBusiness");
$app->post('/getBusinessData', "Controllers\BusinessController:getBusinessData");
$app->post('/getRegionList', "Controllers\BusinessController:getRegionList");
$app->post('/getProvinceList', "Controllers\BusinessController:getProvinceList");
$app->post('/getCityList', "Controllers\BusinessController:getCityList");
$app->post('/getBarangayList', "Controllers\BusinessController:getBarangayList");
$app->post('/setRegionCityBarangay', "Controllers\BusinessController:setRegionCityBarangay");

//admin api

$app->post('/admin_samp', "Controllers\AdminController:samp");
$app->post('/admin_getAllUsers', "Controllers\AdminController:admin_getAllUsers");
$app->post('/admin_deleteUserById', "Controllers\AdminController:admin_deleteUserById");
$app->post('/admin_updateUser', "Controllers\AdminController:admin_updateUser");
$app->post('/admin_addUser', "Controllers\AdminController:admin_addUser");
$app->post('/admin_getUserBusinessById', "Controllers\AdminController:admin_getUserBusinessById");
$app->post('/admin_deleteUserBusinessById', "Controllers\AdminController:admin_deleteUserBusinessById");

//get census data
$app->post('/getCensusData', "Controllers\CensusController:getCensusData");

$app->run();