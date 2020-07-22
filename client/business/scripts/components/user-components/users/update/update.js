var updateUserServicesApp = angular.module('updateUser.controller', [])

.controller('updateUserCtrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore, $window) {

$rootScope.$broadcast("checkIfLoggedIn");


$scope.submit = function(userInputs){
	var myData = userInputs;
	myData.id = $cookieStore.get("session_id");
	console.log(myData);
	$http.post('../../server/business_api/update', myData)
	     .success(function(request){
	     	console.log(request[0]);

	     	  $cookieStore.put('session_id', request[0]['id']);

	          $cookieStore.put('first_name', request[0]['first_name']);

	          $cookieStore.put('last_name', request[0]['last_name']);

	          $cookieStore.put('email', request[0]['email']);

	          $cookieStore.put('description', request[0]['description']);

	          $cookieStore.put('phone', request[0]['phone']);

	          $window.location.reload();

	     })
	     .error(function(err){
	     	console.log(err);
	     })
}
  

    
    


})