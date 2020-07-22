var mapServicesApp = angular.module('map.controller', [])

.controller('mapCtrl', function($scope, $rootScope, $state, $http, $cookieStore, $timeout){

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
  var map;
  var mapOptions;
  var mapId = document.getElementById("google-map-default");
  var searchBox;
  var places;
  var address;
  var geocoder;
  var center;
  var marker;
  //end variables

  //map
  function mapInitialize(lat, lng) {
    $scope.latlng['lat'] = lat;
    $scope.latlng['lng'] = lng;
    mapOptions = {
      center: $scope.latlng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      disableDefaultUI: true,
      disableDoubleClickZoom: true
    };
    map = new google.maps.Map(mapId, mapOptions); 
    geocoder = new google.maps.Geocoder();
    setMarker($scope.latlng['lat'], $scope.latlng['lng']);

    google.maps.event.addListener(map, 'click', function(event) {
      $scope.$apply(function(){
        $scope.latlng = {
          'lat': event.latLng.lat(),
          'lng': event.latLng.lng()
        }
      })
    });
  }

  if($rootScope.businessData.status == "OK"){
    $scope.latlng = {
      'lat': parseFloat($rootScope.businessData.location.coor.lat), 
      'lng': parseFloat($rootScope.businessData.location.coor.lng)
    }
  } else { 
    $scope.latlng = {
      'lat': 12.879721, 
      'lng': 121.77401699999996
    }
  }

  function smoothZoom (map, level, cnt, mode) {
    //alert('Count: ' + cnt + 'and Max: ' + level);
    
    // If mode is zoom in
    if(mode == true) {

      if (cnt >= level) {
        return;
      }
      else {
        var z = google.maps.event.addListener(map, 'zoom_changed', function(event){
          google.maps.event.removeListener(z);
          smoothZoom(map, level, cnt + 1, true);
        });
        setTimeout(function(){map.setZoom(cnt)}, 250);
      }
    } else {
      if (cnt <= level) {
        return;
      }
      else {
        var z = google.maps.event.addListener(map, 'zoom_changed', function(event) {
          google.maps.event.removeListener(z);
          smoothZoom(map, level, cnt - 1, false);
        });
        setTimeout(function(){map.setZoom(cnt)}, 250);
      }
    }
  }  

  var createCircle = function(lat, lng) {
    circle = new google.maps.Circle({
          strokeColor: '#00FF00',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#00FF00',
          fillOpacity: 0.35,
          map: map,
          center: {'lat': lat, 'lng': lng},
          radius: 250
    });
  }

    //Center Map
      function setCenter(lat, lng) {
        center = new google.maps.LatLng(lat, lng);
        map.setCenter(center);
      }
    //End Center Map

    //set Coordinates
      function setCoor(lat, lng) {
        $scope.latlng['lat'] = lat;
        $scope.latlng['lng'] = lng;
      }
    //set Coordinates

    //Set Marker
      function setMarker(lat, lng) {
        marker = new google.maps.Marker({
          position: {'lat': lat, 'lng': lng},
          map: map,
          title: 'This is the Area of your Business'
        });
      }
    //End Set Marker

    $scope.$watch(function(){
      return $scope.latlng['lat'];
    }, function(){
      if($scope.latlng['lat'] != 12.879721 && $scope.latlng['lng'] != 121.77401699999996) {
        map.setCenter($scope.latlng);
        marker.setPosition($scope.latlng);
        smoothZoom(map, 19, map.getZoom(), true);
        createCircle($scope.latlng.lat, $scope.latlng.lng);
      }  
    })
  //end map

  //get data in server
    function setAllBusiness(businesses){
      for(var i=0;i<businesses.length;i++){
        businesseMarker = new google.maps.Marker({
          position: {'lat': parseFloat(businesses[i].business_location_latitude), 'lng': parseFloat(businesses[i].business_location_longitude)},
          map: map
        });
      }
    }
  //end get data in server

  //Initialize
    mapInitialize($scope.latlng.lat, $scope.latlng.lng);
    setAllBusiness($rootScope.businesses);
  //End

    



})
