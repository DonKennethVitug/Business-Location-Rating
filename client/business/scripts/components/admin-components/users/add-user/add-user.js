angular.module('admin.add.user', [])

.controller('admin_add_user_controller', function($scope, $rootScope, $vitug_admin, $state){

	//scopes

	$rootScope.$broadcast("checkIfLoggedIn");

	$rootScope.$on("addUser", function(event, args) {
		console.log(args['userData']);
		$scope.userData = args['userData'];
		console.log("getUserData: success");
	})

	$scope.save = function(userData){
		$vitug_admin.addUser(userData);
		$state.go('admin_update_user');
		console.log("save: success");
	}

	// admin_user init

	

})