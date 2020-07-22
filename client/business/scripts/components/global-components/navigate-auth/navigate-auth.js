angular.module('navigate.auth.controller', [])

.controller('navigate_auth_controller', function($vitug_api, $vitug_auth, $rootScope, $state){
	console.log("navigate_auth_controller");

	var userRole = $vitug_api.getUserRole();

	if(userRole == "admin") {
		$vitug_auth.admin_init();
	} 
	else if(userRole == "user") {
		$vitug_auth.user_init();
	} else {
		$state.go("login");
	}

})