var homeServices = angular.module('home.controller', [])

.controller('homeCtrl', function($scope, $rootScope, $facebookService, $state, $vitug_rootScope){

	if($vitug_rootScope.isLoggedIn()) {
		$state.go("home.welcome");
	} else {
		$state.go("home.login");
	}


})