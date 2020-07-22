var censusExpenditureServicesApp = angular.module('census.expenditure.controller', [])

.controller('censusExpenditureCtrl', function($rootScope, $scope) {

	$rootScope.$broadcast("checkIfLoggedIn");

	console.log($scope.censusData);

	$scope.censusData.expenditure.hygiene_products['name'] = "hygiene for themselves";
	$scope.censusData.expenditure.snacks_products['name'] = "snacks";
	$scope.censusData.expenditure.garments_products['name'] = "garments for themselves";
	$scope.censusData.expenditure.gadgets_products['name'] = "gadgets";
	$scope.censusData.expenditure.order_online_food['name'] = "Level of people ordering food online";
})