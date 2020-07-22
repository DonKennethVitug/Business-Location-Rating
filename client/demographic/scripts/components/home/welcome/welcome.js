var loginServices = angular.module('welcome.controller', [])

.controller('welcomeCtrl', function($scope, $rootScope, $facebookService, $vitug_rootScope){

	//scopes

	$scope.user = $vitug_rootScope.getUserName();
	$scope.picture = $vitug_rootScope.getUserPicture();

	$scope.login = function(){
		$rootScope.$broadcast('startLoading');
		$facebookService.login();
	}

	$scope.share = function(){
		$facebookService.share();
	}

})