var mainAppServices = angular.module('mainApp.controller', [])

.controller('mainCtrl', function($window, mainServices, $rootScope, $facebookService, $cookieStore) {

	/*
	if($cookieStore.get("status") != 'ok') {
		$window.location.reload();
		$cookieStore.put("status", 'ok');
	} else {
		$cookieStore.put("status", 'not ok');
	}
	*/
	
	$facebookService.init();

})