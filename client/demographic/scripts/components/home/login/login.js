var loginServices = angular.module('login.controller', [])


.controller('loginCtrl', function($scope, $rootScope, $facebookService, $location, $anchorScroll){

	$rootScope.$broadcast("checkIfLoggedIn");

	$scope.login = function(){
		$rootScope.$broadcast('startLoading');
		$facebookService.login();
	}

	$scope.share = function(){
		$facebookService.share();
	}




	



})