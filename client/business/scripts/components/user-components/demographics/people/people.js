var censusPeopleServicesApp = angular.module('census.people.controller', [])

.controller('censusPeopleCtrl', function($rootScope) {

	$rootScope.$broadcast("checkIfLoggedIn");

	

})