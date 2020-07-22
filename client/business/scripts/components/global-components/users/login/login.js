var loginServicesApp = angular.module('login.controller', [])

.controller('loginCtrl', function($scope, $cookieStore, $vitug_api, $rootScope, $state) {

  $scope.userInputs = {};

  $rootScope.hidden.show = false;

  angular.element(document.querySelector("#login")).removeClass("hidden");

	$scope.loginUser = function(userData) {
    angular.element(document.querySelector("#login")).addClass("hidden");
    $rootScope.$broadcast("startLoading");
    if(userData != null && userData != undefined && userData != "") {
      $vitug_api.login(userData);
     } else {
      alert("No Inputs!");
     }
	}


	if($cookieStore.get('session_id') != 0 && $cookieStore.get('session_id') != undefined) {
		$rootScope.hidden.show = true;
		$state.go('home');
	}
	
})