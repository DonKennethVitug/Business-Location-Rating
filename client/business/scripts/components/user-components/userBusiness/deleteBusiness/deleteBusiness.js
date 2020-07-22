var deleteBusinessServicesApp = angular.module('deleteBusiness.controller', [])

.controller('deleteBusinessCtrl', function($scope, $window, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore, $vitug_algorithm) {

$rootScope.$broadcast("checkIfLoggedIn");

$scope.progress = "0%";

$scope.$on('progress', function(event, args){
	$scope.progress = args['progress'];
})

$rootScope.addBusinessInputs = {};

$rootScope.$broadcast("fetchUserBusiness", {
    'user_id': $cookieStore.get("session_id")
})

$scope.$watch(function(){
  return $rootScope.userBusiness.length;
}, function(){
    if(0 < $rootScope.userBusiness.length){
      $scope.business = $rootScope.userBusiness;
    } else {
      if($rootScope.userBusiness.status != "UPDATING"){
        if($rootScope.userBusiness.status != "OK"){
          $state.go('addBusiness.phase1');
        }
      }
    }
})

$scope.activate = function(id){
  $rootScope.$broadcast("deleteUserBusiness", {
    businessId: id
  })
}

$rootScope.$broadcast("stopLoading");

})