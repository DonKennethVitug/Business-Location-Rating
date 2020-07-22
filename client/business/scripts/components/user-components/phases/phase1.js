var phaseServices = angular.module('phase1.controller', [])

.controller('phase1Ctrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore) {

$rootScope.$broadcast("checkIfLoggedIn");

$rootScope.$broadcast('progress', {'progress': '33.33%'})

$scope.userInputs = {
	'name': '',
	'desc': '',
	'company': '',
	'type': ''
};

$scope.save = function(userInputs){
	if(userInputs.business_name !== "" && userInputs.business_desc !== "" && userInputs.business_company !== "" && userInputs.business_scope !== ""){
		$rootScope.addBusinessInputs.business_name = userInputs.business_name;
		$rootScope.addBusinessInputs.business_description = userInputs.business_desc;
		$rootScope.addBusinessInputs.business_company_name = userInputs.business_company;
		$rootScope.addBusinessInputs.business_type = "";
		$rootScope.addBusinessInputs.business_scope = userInputs.business_scope;
		console.log("phase1: success");
		$state.go('addBusiness.phase2')

	} else{
		$rootScope.addBusinessInputs.business_name = "";
		$rootScope.addBusinessInputs.business_description = "";
		$rootScope.addBusinessInputs.business_company_name = "";
		$rootScope.addBusinessInputs.business_type = "";
		$rootScope.addBusinessInputs.business_scope = "";
		alert("Please Complete the form...")
	}
}

})