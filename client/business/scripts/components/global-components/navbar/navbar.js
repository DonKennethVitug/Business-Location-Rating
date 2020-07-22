var navbarServicesApp = angular.module('navbar.controller', [])

.controller('navbarCtrl', function($scope, $cookieStore, $state, $rootScope, $timeout, navbarServices, $interval, $cookieStore, $vitug_algorithm){

//$scopes

$scope.logout = function(){
  $rootScope.$broadcast("addhidden");
  $rootScope.$broadcast("startLoading");

  $cookieStore.put('session_id', 0);
  $cookieStore.remove('name');
  $cookieStore.remove('username');
  $cookieStore.remove('role');
  $cookieStore.remove('date_created');


  $timeout(function() {
    $rootScope.$broadcast("stopLoading");
    $state.go('login');
  }, 2000)
  
}

$scope.businessOnChange = function(){
  $rootScope.$broadcast("vitug-algorithm-init", {
    businessId: $scope.businessId
  })
}

$rootScope.$on('navInit', function(){
  navInit();
});

$rootScope.$on('getUserBusiness', function(){
  getUserBusiness();
});

$rootScope.$on('watchBusinessId', function(){
  watchBusinessId();
});

//end $scopes

//functions

function geocodeAddress(address) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        console.log(results);
        $scope.$apply(function(){
            $rootScope.geocodeLatlng['lat'] = results[0].geometry.location.lat();
            $rootScope.geocodeLatlng['lng'] = results[0].geometry.location.lng();
            console.log($rootScope.geocodeLatlng['lat']);
        })
    });
}

function geocodeLatlng(latlng) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'location': latlng
    }, function(results, status) {
        console.log(results);
        $scope.$apply(function(){
            $rootScope.geocodeLatlng['lat'] = results[0].geometry.location.lat();
            $rootScope.geocodeLatlng['lng'] = results[0].geometry.location.lng();
            console.log($rootScope.geocodeLatlng['lat']);
        })
    });
}

function getUserBusiness() {
  $rootScope.$broadcast("fetchUserBusiness", {
      'user_id': $cookieStore.get("session_id")
  })
  $scope.$watch(function(){
    return $rootScope.userBusiness.status;
  }, function(){
    if($rootScope.userBusiness.status == 'OK'){
      if(0 < $rootScope.userBusiness.length){
        $scope.business = $rootScope.userBusiness;
      } else {
        $state.go('addBusiness.phase1')
      }
    }
  })
}

function watchBusinessId(){
  $scope.$watch(function(){
    return $rootScope.businessData.id
  }, function(){
    if($rootScope.businessData.id != 0){
      $scope.businessId = $rootScope.businessData.id;
    }
  })
}

function navInit() {
  $scope.name = $cookieStore.get('name');
  $scope.description = $cookieStore.get('description');
  $scope.picture = $cookieStore.get('picture') ? $cookieStore.get('picture') : "//cdn4.iconfinder.com/data/icons/human-resources/80/Human_resource_icons-11-512.png";

  console.log("navInit: success");
}

//end functions

//initialize
navInit();




})
