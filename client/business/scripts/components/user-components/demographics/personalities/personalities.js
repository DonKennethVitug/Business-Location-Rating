var censusPersonalitiesServicesApp = angular.module('census.personalities.controller', [])

.controller('censusPersonalitiesCtrl', function($rootScope, $scope) {

	$rootScope.$broadcast("checkIfLoggedIn");

	console.log($scope.censusData);

	$scope.censusData.personalities.personality_outgoing['name'] = "Level of people going out of their house";
	$scope.censusData.personalities.personality_shy['name'] = "Level of people finding to communicate is hard";
	$scope.censusData.personalities.personality_can_handle_pressure['name'] = "Level of people that can handle pressure";
	$scope.censusData.personalities.personality_conversation['name'] = "Level of people that are not friendly";
	$scope.censusData.personalities.personality_curious['name'] = "Level of people that wants something new";
	$scope.censusData.personalities.personality_conservative['name'] = "Level of people that are conservative";
})