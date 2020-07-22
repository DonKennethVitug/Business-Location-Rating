var residentServicesApp = angular.module('resident.controller', [])

.controller('residentCtrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore) {

if($cookieStore.get('session_id') == 0) {
    $rootScope.$broadcast("addhidden");
    $rootScope.$broadcast("stopLoading");
    $state.go('login');
} else {
  $rootScope.$broadcast("removehidden");
  $rootScope.$broadcast("stopLoading");
}

  var searchId = document.getElementById('search');

    //Search Box
      searchBox = new google.maps.places.SearchBox(searchId);

      google.maps.event.addListener(searchBox, 'places_changed', function () {
        console.log("place changed")

        places = searchBox.getPlaces();
        console.log("object place: " + places);

        $scope.$apply(function(){
            $rootScope.locationText = places[0]['formatted_address'];
            $rootScope.geocodeLatlng['lat'] = results[0]['geometry']['location'].lat();
            $rootScope.geocodeLatlng['lng'] = results[0]['geometry']['location'].lng();
            console.log($rootScope.locationText);
        })

        setCoor(places[0].geometry.location.lat(), places[0].geometry.location.lng());
        setCenter(latlng['lat'], latlng['lng']);

      });
    //End Search Box 

  $scope.locationText = "You have not yet entered a location";

  $scope.$watch(function(){
      return $rootScope.locationText;
  }, function(){
      if(!($rootScope.locationText == undefined || $rootScope.locationText == "")) {
        $scope.locationText = $rootScope.locationText;
      } else {
        $scope.locationText = "You have not yet entered a location";
      }
  }, true)

  /*

  $http.post('../server/api/getTwitterDataInArea')
       .success(function(data){

          console.log(data);
       })
       .error(function(err){
        console.log(err);
       })
  $http.post('../server/api/getTwitterDataAreaBoundery')
        .success(function(data){

          //console.log(data);
        })

    */






})