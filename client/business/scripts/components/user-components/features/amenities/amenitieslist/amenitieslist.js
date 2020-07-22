var amenitiesListServicesApp = angular.module('amenitiesList.controller', [])

.controller('amenitiesListCtrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore) {
  if($rootScope.businessData.status == "OK"){
    $scope.locationText = $rootScope.businessData.location.address;
  } else {
    $state.go('selectBusiness');
  }
  if($cookieStore.get('session_id') == 0) {
      $rootScope.$broadcast("addhidden");
      $rootScope.$broadcast("stopLoading");
      $state.go('login');
  } else {
    $rootScope.$broadcast("removehidden");
    $rootScope.$broadcast("stopLoading");
  }

  $scope.setList = function(list) {
    if(list == "hospital"){
      $state.go('amenitieslist.hospital');
    }
    if(list == "school"){
      $state.go('amenitieslist.school');
    }  
    if(list == "church"){
      $state.go('amenitieslist.church');
    } 
    if(list == "amusement_park"){
      $state.go('amenitieslist.amusement_park');
    }
    if(list == "route"){
      $state.go('amenitieslist.route');
    }
  }

  if($rootScope.businessData.nearbyAmenities.status == "OK"){

      $scope.amenitiesData = $rootScope.businessData.nearbyAmenities;
      
  }

  $scope.businessLocation = {
    lat: parseFloat($rootScope.businessData.location.coor.lat),
    lng: parseFloat($rootScope.businessData.location.coor.lng)
  }

    $scope.getDistanceFromLatLonInKm = function(lat1, lon1, lat2, lon2) {
      var R = 6371;
      var dLat = deg2rad(lat2-lat1);
      var dLon = deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return parseInt(d * 1000);
    }

    $scope.getDistanceFromLatLonInMeter = function(lat,lon) {
      return (scope.getDistanceFromLatLonInKm(lat,lon) * 1000);
    }

    var deg2rad = function(deg) {
      return deg * (Math.PI/180)
    }

    $scope.getRating = function(dist){
      var radius = 250;
      var rate = ( 5 - (dist / radius) * 5);
      return rate.toFixed(2);
    }

    //init

    $state.go('amenitieslist.school');


})