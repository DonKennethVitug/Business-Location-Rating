var amenitiesServicesApp = angular.module('amenities.controller', [])

.controller('amenitiesCtrl', function($scope, $rootScope, $timeout, $http, $cookieStore, $state){ 

  if($cookieStore.get('session_id') == 0) {
      $rootScope.$broadcast("addhidden");
      $rootScope.$broadcast("stopLoading");
      $state.go('login');
  } else {
    $rootScope.$broadcast("removehidden");
    $rootScope.$broadcast("stopLoading");
  }

  if($rootScope.businessData.status == "OK"){
    $scope.locationText = $rootScope.businessData.location.address;
  } else {
    $state.go('selectBusiness');
  }

  //variables

    var locationRegion = "";
    var locationCity = "";

    $scope.amenitiesChart = {
          labels: ["School", "Hospital", "Church", "Park"],
          series: ["Nearby Amenities Data"],
          colors: [],
          options: {barShowStroke : false},
          data: [0, 0, 0, 0]
    };

  //functions

  function inChangeNearbyAmenitiesData(a, b, c, d) {
    $timeout(function () {
      $scope.amenitiesChart['data'] = [a, b, c, d];
    }, 500);
  }

  if($rootScope.businessData.nearbyAmenities.status == "OK"){

        var amenitiesData = $rootScope.businessData.nearbyAmenities;
        
        inChangeNearbyAmenitiesData(amenitiesData['school'].length, amenitiesData['hospital'].length, amenitiesData['church'].length, amenitiesData['amusement_park'].length);
  }

  //amenities analytics initialize

  

  

})
