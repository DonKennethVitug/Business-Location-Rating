var phaseServices = angular.module('phase2.controller', [])

.controller('phase2Ctrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore) {

$rootScope.$broadcast("checkIfLoggedIn");

$rootScope.$broadcast('progress', {'progress': '66.66%'})

  //variables
  var map;
  var mapOptions;
  var mapId = document.getElementById("map");
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
    //setMarker($scope.latlng['lat'], $scope.latlng['lng']);

    google.maps.event.addListener(map,'dragend', function() {
      $scope.$apply(function(){
        setLatlng(map.getCenter().lat(), map.getCenter().lng());
        setAddressByLatLng(map.getCenter().lat(), map.getCenter().lng());
      }) 
    });

    $('<div/>').addClass('centerMarker').appendTo(map.getDiv())
    //do something onclick
    .click(function() {
      var that = $(this);
      if (!that.data('win')) {
        that.data('win', new google.maps.InfoWindow({
          content: 'this is the center'
        }));
        that.data('win').bindTo('position', map, 'center');
      }
      that.data('win').open(map);
    });

  }

  $scope.latlng = {
  'lat': 12.879721, 
  'lng': 121.77401699999996
  }

  $scope.userInputs = {
      'regionModel': '',
      'provinceModel': '',
      'cityModel': '',
      'cityModel': ''
    };

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

  function setLatlng(lat, lng){
    $scope.latlng.lat = lat;
    $scope.latlng.lng = lng;
    console.log("setLatlng: success")
  }

  $scope.zoomin = function(zoom){
    smoothZoom(map, zoom, map.getZoom(), true);
    console.log("zoomin: success")
  }

  $scope.zoomout = function(){
    smoothZoom(map, 5, map.getZoom());
      $timeout(function(){
        $rootScope.$broadcast("zoomout");
        map.setZoom(5);
      }, 3000)
      console.log("zoomout: success")
  }

  $scope.geolocate = function(){
    promise = $interval(function(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };  

          geocoder.geocode({'location': pos}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              if (status == "OK") {
                console.log("geolocate: success");
                $scope.$apply(function(){
                  setLatlng(results[0]['geometry']['location'].lat(), results[0]['geometry']['location'].lng());
                })
                setAddressByLatLng(results[0]['geometry']['location'].lat(), results[0]['geometry']['location'].lng());
                map.setCenter($scope.latlng);
                $scope.zoomin(18);
              } else {
              window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });

        });
      }  
    }, 500);

    $timeout(function(){
      $interval.cancel(promise);
    }, 1100)
  }

  //Set Address
      function setAddressByLatLng(lat, lng) {
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'location': {'lat': lat, 'lng':lng}
        }, function(results, status) {
            if(status == "OK"){
              $scope.$apply(function(){
                address = results[0].formatted_address;
                console.log("setAndGetAddressByLatLng: success");
              })
            } else {
              console.log("setAndGetAddressByLatLng: error, "+status);
            }
            
        });
      }
    //End Set Address

      function setLatLngByAddress(address) {
          geocoder = new google.maps.Geocoder();
          geocoder.geocode({
              'address': address
          }, function(results, status) {
            if(status == "OK"){
              $scope.$apply(function(){
                setAddressByLatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                setLatlng(results[0].geometry.location.lat(), results[0].geometry.location.lng()); 
              })
              map.setCenter($scope.latlng);
              $scope.zoomin(16);
            }
            else{
              return false;
            } 
          });
      }

    //Center Map
      function setCenter(latlng) {
        map.setCenter(latlng);
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

  //end map

  //get data in server

    function getRegionList() {
      $http.post("../../server/business_api/getRegionList")
      .success(function(data){
        $rootScope.regionData = data
        $scope.regionData = $rootScope.regionData;
        console.log('getRegionList: success');
      })
      .error(function(err){
        console.log('getRegionList: error, '+err);
      }); 
    }

    $scope.regionOnChange = function(){
      var myData = {'region': $scope.userInputs.regionModel};
      $http.post("../../server/business_api/getProvinceList", myData)
      .success(function(data){
        $rootScope.provinceData = data
        $scope.provinceData = $rootScope.provinceData;
        console.log("getProvinceList: success")
      })
      .error(function(err){
        console.log("getProvinceList: error, "+err)
      })
    }

    $scope.provinceOnChange = function(){
      var myData = {'region': $scope.userInputs.regionModel,
      'province': $scope.userInputs.provinceModel};
      $http.post("../../server/business_api/getCityList", myData)
      .success(function(data){
        $rootScope.cityData = data
        $scope.cityData = $rootScope.cityData;
        console.log("getCityList: success")
      })
      .error(function(err){
        console.log("getCityList: error, "+err)
      }) 
    }

    $scope.cityOnChange = function(){
      var myData = {'region': $scope.userInputs.regionModel,
      'province': $scope.userInputs.provinceModel,
      'city': $scope.userInputs.cityModel};
      $http.post("../../server/business_api/getBarangayList", myData)
      .success(function(data){
        $rootScope.barangayData = data;
        $scope.barangayData = $rootScope.barangayData;
        console.log("getBarangayList: success")
      })
      .error(function(err){
        console.log("getBarangayList: error, "+err)
      })
    }

    $scope.barangayOnChange = function(){
      if(!setLatLngByAddress($scope.userInputs.cityModel+', '+$scope.userInputs.barangayModel)){
        setLatLngByAddress($scope.userInputs.provinceModel+', '+$scope.userInputs.barangayModel);
      }
      console.log("setBarangay: success")
    }

    $scope.clear = function(){
      smoothZoom(map, 4, map.getZoom());
      $timeout(function(){
        $rootScope.$broadcast("zoomout");
        map.setZoom(5);
      }, 3000)
      $scope.latlng = {
          'lat': 12.879721, 
          'lng': 121.77401699999996
      }  
        map.setCenter($scope.latlng);
      console.log("clear: success")
    }

    $scope.save = function(userInputs){
      if(userInputs.regionModel !== "" && userInputs.provinceModel !== "" && userInputs.cityModel !== "" && userInputs.barangayModel !== ""){
        $rootScope.addBusinessInputs.business_location_region = userInputs.regionModel;
        $rootScope.addBusinessInputs.business_location_province = userInputs.provinceModel;
        $rootScope.addBusinessInputs.business_location_city = userInputs.cityModel;
        $rootScope.addBusinessInputs.business_location_barangay = userInputs.barangayModel;
        $rootScope.addBusinessInputs.business_address = address;
        $rootScope.addBusinessInputs.business_location_latitude = ""+$scope.latlng.lat;
        $rootScope.addBusinessInputs.business_location_longitude = ""+$scope.latlng.lng;
        
        $state.go('addBusiness.phase3');
      } else{
        $rootScope.addBusinessInputs.business_location_region = "";
        $rootScope.addBusinessInputs.business_location_province = "";
        $rootScope.addBusinessInputs.business_location_city = "";
        $rootScope.addBusinessInputs.business_location_barangay = "";
        $rootScope.addBusinessInputs.business_location_latitude = "12.879721";
        $rootScope.addBusinessInputs.business_location_longitude = "121.77401699999996";
        alert("Please Complete the form...")
      }
      console.log("phase2: success");
    }

  //end get data in server

  //Initialize
    getRegionList();
    mapInitialize($scope.latlng.lat, $scope.latlng.lng);
  //End

})