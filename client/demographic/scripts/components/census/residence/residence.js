var residenceServicesApp = angular.module('residence.controller', [])

.controller('residenceCtrl', function($state, $scope, $http, $vitug_api, $rootScope){

  $scope.isAnswered = false;

  //get data in server

    function getRegionList() {
      $http.post("../../server/business_api/getRegionList")
      .success(function(data){
        $rootScope.regionData = data
        $scope.regionData = $rootScope.regionData;
        console.log('getRegionList: success');
      })
      .error(function(err){
        console.log('getRegionList: error, '+err);
      }); 
    }

    $scope.regionOnChange = function(){
      var myData = {'region': $scope.userInputs.residence_region};
      $http.post("../../server/business_api/getProvinceList", myData)
      .success(function(data){
        $rootScope.provinceData = data
        $scope.provinceData = $rootScope.provinceData;
        console.log("getProvinceList: success")
      })
      .error(function(err){
        console.log("getProvinceList: error, "+err)
      })
    }

    $scope.provinceOnChange = function(){
      var myData = {'region': $scope.userInputs.residence_region,
      'province': $scope.userInputs.residence_province};
      $http.post("../../server/business_api/getCityList", myData)
      .success(function(data){
        $rootScope.cityData = data
        $scope.cityData = $rootScope.cityData;
        console.log("getCityList: success")
      })
      .error(function(err){
        console.log("getCityList: error, "+err)
      }) 
    }

    $scope.cityOnChange = function(){
      var myData = {'region': $scope.userInputs.residence_region,
      'province': $scope.userInputs.residence_province,
      'city': $scope.userInputs.residence_city};
      $http.post("../../server/business_api/getBarangayList", myData)
      .success(function(data){
        $rootScope.barangayData = data;
        $scope.barangayData = $rootScope.barangayData;
        console.log("getBarangayList: success")
      })
      .error(function(err){
        console.log("getBarangayList: error, "+err)
      })
    }

    $scope.barangayOnChange = function(){
      $scope.isAnswered = true;
      console.log("setBarangay: success")
    }

    $scope.next = function(){

    	if( $scope.userInputs.barangay != "" ) {

    		$vitug_api.updateDemoData($scope.userInputs);

    		$state.go("census.questions");	

    	}

    	//$http.post
    	
    }

    // INITIALIZE

    getRegionList();




})
