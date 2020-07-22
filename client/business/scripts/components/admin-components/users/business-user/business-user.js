angular.module('admin.business.user', [])

.controller('admin_business_user_controller', function($scope, $rootScope, $vitug_admin, $stateParams){

	//scopes

	$scope.user = $stateParams.name;

	$rootScope.$broadcast("checkIfLoggedIn");

	$rootScope.$on("getUserBusinessById", function(event, args) {
		$scope.businessData = args['businessData'];
		console.log("getUserBusinessById: success");
	})

	$scope.update = function(userData) {
		//$vitug_admin.updateUser(userData);
		console.log("update: success");
	}

	$scope.delete = function(businessId) {
		$vitug_admin.deleteUserBusinessById(businessId);
	}

	$rootScope.$on("refreshUserBusinessById", function() {
		$vitug_admin.getUserBusinessById($stateParams.id);
	})
	

	// admin_user init

	$vitug_admin.getUserBusinessById($stateParams.id);

})