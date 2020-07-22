var navbarServicesApp = angular.module('navbar.controller', [])

.controller('navbarCtrl', function($scope, $rootScope, ezfb, $facebookService, $vitug_cookie, $vitug_api, $vitug_rootScope){

$scope.logout = function(){
  $vitug_api.logout();
  $scope.isloggedin = false;
  console.log("logout: success")
}

$rootScope.$watch(function(){
	return $rootScope.userProfile.status;
}, function(){
	
	if($rootScope.userProfile.status == "connected") {
	    $scope.userName = $vitug_rootScope.getUserName()
	    $scope.userPicture = $vitug_rootScope.getUserPicture();
	    $scope.isloggedin = true;
	    $rootScope.$broadcast("stopLoading");
    } else {
    	$scope.isloggedin = false;
	    $rootScope.$broadcast("stopLoading");
    }
})

})
