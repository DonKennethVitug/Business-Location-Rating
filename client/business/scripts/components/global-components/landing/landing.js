var landingServicesApp = angular.module('landing.controller', [])

.controller('landingCtrl', function($scope, $state, $http, $location, $rootScope, $cookieStore) {

if($cookieStore.get('session_id') == 0) {
    $rootScope.$broadcast("addfixhead");
    $rootScope.$broadcast("stopLoading");
    $state.go('login');
} else {
  $rootScope.$broadcast("removefixhead");
  $rootScope.$broadcast("stopLoading");
}

$location.hash('top');

$rootScope.input.show = "true";

$scope.find = function(res){
	console.log($scope.current-location);
}

$rootScope.input.show = true;

})