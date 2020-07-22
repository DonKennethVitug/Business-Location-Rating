var registerServicesApp = angular.module('register.controller', [])

.controller('registerCtrl', function($scope, $state, $http, $location, $rootScope, $timeout, $cookieStore, $facebookService) {

  $scope.userInputs = {
    'name': "",
  }

  $rootScope.hidden.show = false;
  $scope.isnotloggedin = true;
  angular.element(document.querySelector("#register")).removeClass("hidden");

  $rootScope.$on("updateLoginStatus", function(event, args){
    if(args['status'] == "connected"){
      $scope.userProfile = $rootScope.userProfile;
      $scope.isnotloggedin = false;
    } else {
      $facebookService.login();
      $scope.isnotloggedin = true;
    }
  })

  $scope.loginFB = function() {
    $facebookService.init();
  }
  
  $scope.registerUser = function(myData) { console.log(myData);
    if(myData != null && myData != undefined && myData != "") {
      angular.element(document.querySelector("#register")).addClass("hidden");
      $rootScope.$broadcast("startLoading");
        $rootScope.$broadcast("startLoading");
    	  $http.post("../../server/business_api/register", myData)
           .success(function(request){

            $timeout(function(){
             angular.element(document.querySelector("#register")).removeClass("hidden");
             $rootScope.$broadcast("stopLoading");
             console.log("register: success");
             $state.go('login'); 
            }, 2500)	

           })
           .error(function(err){
           	$timeout(function(){
             angular.element(document.querySelector("#register")).removeClass("hidden");
             $rootScope.$broadcast("stopLoading");
             alert("Invalid Inputs");
            }, 2500)	
         	console.log("register error!");
           });
    }
  }

  if($cookieStore.get('session_id') != 0 && $cookieStore.get('session_id') != undefined) {
    $rootScope.hidden.show = true;
    $state.go('home');
  } 

})