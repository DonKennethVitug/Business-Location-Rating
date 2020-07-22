var amenitiesmapServicesApp = angular.module('amenitiesmap.controller', [])

.controller('amenitiesmapCtrl', function($scope, $rootScope, $state, $http, $cookieStore, $timeout){

if($cookieStore.get('session_id') == 0) {
    $rootScope.$broadcast("addhidden");
    $rootScope.$broadcast("stopLoading");
    $state.go('login');
} else {
  $rootScope.$broadcast("removehidden");
  $rootScope.$broadcast("stopLoading");
}

  var map;
  var latlng = {
    'lat': 0,
    'lng': 0
  };
  var mapOptions;
  var mapId = document.getElementById("google-map-default");
  var searchBox;
  var places;
  var address;
  var geocoder;
  var center;
  var marker;
  $scope.latlng = {
    'lat': 12.879721, 
    'lng': 121.77401699999996
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

    //Map initialization  
      var mapInitialize = function(lat, lng) {
        latlng['lat'] = lat;
        latlng['lng'] = lng;
        mapOptions = {
          center: latlng,
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          disableDefaultUI: true,
          disableDoubleClickZoom: true
        };
        map = new google.maps.Map(mapId, mapOptions); 
        geocoder = new google.maps.Geocoder();

        google.maps.event.addListener(map, 'click', function(event) {
          console.log(event);
          $scope.$apply(function(){
            $rootScope.geocodeLatlng = {
              'lat': event.latLng.lat(),
              'lng': event.latLng.lng()
            }
          })
        });

      }
    //End Map initialization

    //Center Map
      var setCenter = function(lat, lng) {
        center = new google.maps.LatLng(lat, lng);
        map.setCenter(center);
      }
    //End Center Map

    //set Coordinates
      var setCoor = function(lat, lng) {
        latlng['lat'] = lat;
        latlng['lng'] = lng;
      }
    //set Coordinates

    //Set Marker
      var setMarker = function(lat, lng) {
        marker = new google.maps.Marker({
          position: {'lat': lat, 'lng': lng},
          map: map,
          title: 'This is the Area of your Business'
        });
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    //End Set Marker

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
      google.maps.event.addListener(circle, 'click', function(event) {
        console.log(event);
        $scope.$apply(function(){
          $rootScope.geocodeLatlng = {
            'lat': event.latLng.lat(),
            'lng': event.latLng.lng()
          }
        })
      });
    }

    mapInitialize($scope.latlng.lat, $scope.latlng.lng);
    setMarker(latlng['lat'], latlng['lng']);
    createCircle(latlng['lat'], latlng['lng']);

    $scope.$watch(function(){
      return $rootScope.geocodeLatlng['lat'];
    }, function(){
      $scope.latlng.lat = $rootScope.geocodeLatlng['lat'];
      $scope.latlng.lng = $rootScope.geocodeLatlng['lng'];

      map.setCenter($scope.latlng);
      marker.setPosition($scope.latlng);
      circle.setCenter($scope.latlng);

      console.log($scope.latlng.lat);
      if($scope.latlng.lat !== 12.879721) {
        $timeout(function(){
          map.setZoom(17);
        }, 500)
      }
    }) 

    $scope.$on("zoomin", function(event){
      smoothZoom(map, 18, map.getZoom(), true);
    })

})
