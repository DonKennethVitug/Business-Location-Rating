var addBusinessServicesApp = angular.module('addBusiness.controller', [])

.controller('addBusinessCtrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore) {

$rootScope.$broadcast("checkIfLoggedIn");

$scope.progress = "0%";

$scope.$on('progress', function(event, args){
	$scope.progress = args['progress'];
})

$scope.$on('addBusiness', function(event, args){
	console.log(args);
})

$rootScope.addBusinessInputs = {};

$rootScope.$broadcast("stopLoading");

})