var censusServicesApp = angular.module('census.controller', [])

.controller('censusCtrl', function($rootScope, $scope, $state, $http, $vitug_algorithm, $interval) {

	$scope.tabs = [
		{
			id: '3',
			'state': 'census.crime',
			'name': 'Crime',
			'png': "//i608.photobucket.com/albums/tt167/babygirlSNR/misc/Crime.png"
		},
		{
			id: '4',
			'state': 'census.personalities',
			'name': 'Personalities',
			'png': "//www.16personalities.com/images/system/home/home-16personalities-premium.png"
		},
		{
			id: '5',
			'state': 'census.expenditure',
			'name': 'Expenditure',
			'png': "//2.bp.blogspot.com/-SwM4_1F1EeU/TxxAOI30AmI/AAAAAAAAACI/CmepBUW5jC0/s1600/expense-manager-icon-256x256.png"
		}
	]

	$scope.activeMenu = $scope.tabs[0].name;

	$scope.setActive = function(tab) {
    	$scope.activeMenu = tab.name;
    	$state.go(tab.state);
 	}

	$rootScope.$broadcast("checkIfLoggedIn");

	$state.go("census.crime");

	$rootScope.censusData = $rootScope.businessData.censusData;

})