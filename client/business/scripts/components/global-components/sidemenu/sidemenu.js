var sidemenuServicesApp = angular.module('sidemenu.controller', [])

.controller('sidemenuCtrl', function($scope, $rootScope, $state){
  
  $rootScope.$watch(function(){
  	return $rootScope.businessData.status
  }, function(){
  	if($rootScope.businessData.status == "OK"){
  		$scope.businessSelected = true;
  		angular.element(document.querySelector("#features")).addClass("active");
  		angular.element(document.querySelector("#business")).removeClass("active");
  	} else {
  		angular.element(document.querySelector("#features")).removeClass("active");
  		angular.element(document.querySelector("#business")).addClass("active");
  	}
  })
  

})
