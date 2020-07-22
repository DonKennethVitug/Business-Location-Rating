var featuresServicesApp = angular.module('features.controller', [])

.controller('featuresCtrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore) {

	$rootScope.$broadcast("checkIfLoggedIn");

	if($rootScope.businessData.status == "OK"){
	  $scope.locationText = $rootScope.businessData.location.address;
	} else {
	  $state.go('selectBusiness');
	}

    

  

    
    


})