var phaseServices = angular.module('phase3.controller', [])

.controller('phase3Ctrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore) {

$rootScope.$broadcast("checkIfLoggedIn");

$rootScope.$broadcast('progress', {'progress': '99%'})
    
$scope.submit = function(){
	$rootScope.addBusinessInputs.user_id = $cookieStore.get("session_id");
	var myData = $rootScope.addBusinessInputs;
	console.log(myData);
	$http.post("../../server/business_api/addBusiness", myData)
	     .success(function(data){
	     	$rootScope.$broadcast("fetchUserBusiness", {
			    'user_id': $cookieStore.get("session_id")
			})
	     	$state.go('selectBusiness');
	     	console.log("submit: success")
	     })
	     .error(function(err){
	     	console.log("submit: error, "+err)
	     })
}

})