var censusServicesApp = angular.module('census.controller', [])

.controller('censusCtrl', function($state, $vitug_rootScope, $rootScope){

if($vitug_rootScope.isLoggedIn()) {
	$state.go("census.instruction");
} else {
	$state.go("home");
}

$rootScope.user = $vitug_rootScope.getUserName();
$rootScope.picture = $vitug_rootScope.getUserPicture();


})
