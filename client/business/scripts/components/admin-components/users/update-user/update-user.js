angular.module('admin.update.user', [])

.controller('admin_update_user_controller', function($scope, $rootScope, $vitug_admin){

	//scopes

	$rootScope.$broadcast("checkIfLoggedIn");

	$rootScope.$on("getUserData", function(event, args) {
		$scope.userData = args['userData'];
		console.log("getUserData: success");
	})

	$scope.update = function(userData) {
		$vitug_admin.updateUser(userData);
		console.log("update: success");
	}

	$scope.delete = function(userId) {
		$vitug_admin.deleteUserById(userId);
	}

	// admin_user init

	$vitug_admin.getAllUsers();

})