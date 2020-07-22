mainAppServices.factory('mainServices', function($rootScope, $cookieStore, $state, $timeout, $vitug_api){
	
	$rootScope.hidden = {
		'show': false
	}

	if($cookieStore.get('session_id') != 0 && $cookieStore.get('session_id') != undefined) {
		$rootScope.hidden.show = true;
		$state.go('home');
	} else {
		$cookieStore.put('session_id', 0);
	}

	$rootScope.hidden = $rootScope.hidden;

	$rootScope.$on("removehidden", function(event){
		angular.element(document.querySelector("#headside")).removeClass("hidden");
		angular.element(document.querySelector("#content")).removeClass("hidden");
	})

	$rootScope.$on("addhidden", function(event){
		angular.element(document.querySelector("#headside")).addClass("hidden");
		angular.element(document.querySelector("#content")).addClass("hidden");
	})

	$rootScope.$on("Loading", function(event){
		angular.element(document.querySelector("#loader")).removeClass("hidden");
	})

	$rootScope.$on("unLoading", function(event){
		angular.element(document.querySelector("#loader")).addClass("hidden");
	})

	$rootScope.$on("startFullLoading", function(event){
		angular.element(document.querySelector("#login")).removeClass("login");
		angular.element(document.querySelector("#loader")).removeClass("hidden");
	})

	$rootScope.$on("stopFullLoading", function(event){
		angular.element(document.querySelector("#login")).addClass("login");
		angular.element(document.querySelector("#loader")).addClass("hidden");
	})

	$rootScope.$on("startLoading", function(event){
		angular.element(document.querySelector("#content")).addClass("hidden");
		angular.element(document.querySelector("#loader")).removeClass("hidden");
	})

	$rootScope.$on("stopLoading", function(event){
		angular.element(document.querySelector("#content")).removeClass("hidden");
		angular.element(document.querySelector("#loader")).addClass("hidden");
	})

	$rootScope.$on("activate", function(event, args){
		angular.element(document.querySelector("#"+args[0])).addClass("bg-border");
	})

	$rootScope.$on("businessActive", function(event, args){
		angular.element(document.querySelector("#business")).addClass("active");
		angular.element(document.querySelector("#features")).removeClass("active");
	})

	$rootScope.$on("featuresActive", function(event, args){
		angular.element(document.querySelector("#features")).addClass("active");
		angular.element(document.querySelector("#business")).removeClass("active");
	})

	$rootScope.$on("onLoginSuccess", function(){
		$rootScope.$broadcast("navInit");
		$rootScope.$broadcast("addhidden");
		$rootScope.hidden.show = true;
		
		angular.element(document.querySelector("#register")).removeClass("hidden");
		$rootScope.$broadcast("stopLoading");
		console.log("Login: success");
		$state.go('navigate_auth');
	})

	$rootScope.$on("onLoginError", function(event, args){
		$timeout(function(){
			angular.element(document.querySelector("#login")).removeClass("hidden");
			$rootScope.$broadcast("stopLoading");
			alert("Invalid Inputs");
		}, 2500)  
		console.log("Login: error, "+args['err']);
	})

	$rootScope.$on("checkIfLoggedIn", function(event, args){
		if($cookieStore.get('session_id') == 0) {
	      	$rootScope.$broadcast("addhidden");
	      	$rootScope.$broadcast("stopLoading");
	      	$state.go('navigate_auth');
	  	} else {
	   		$rootScope.$broadcast("removehidden");
	    	$rootScope.$broadcast("stopLoading");

	    	if($vitug_api.getUserRole() == "admin") {

	    		angular.element(document.querySelector("#adminNav")).removeClass("hidden");
	    		angular.element(document.querySelector("#userNav")).addClass("hidden");
	    		angular.element(document.querySelector("#businessOnChange")).addClass("hidden");

	    	} if($vitug_api.getUserRole() == "user") {

	    		angular.element(document.querySelector("#adminNav")).addClass("hidden");
	    		angular.element(document.querySelector("#userNav")).removeClass("hidden");
	    		angular.element(document.querySelector("#businessOnChange")).removeClass("hidden");

	    	}
	  	}
	})

	function getNearbyAmenities(){
		var map;
		var latlng = {};
		var mapId = document.getElementById("mainMap");
		var mapInitialize = function(lat, lng) {
	        latlng['lat'] = lat;
	        latlng['lng'] = lng;
	        mapOptions = {
	          center: $rootScope.geocodeLatlng,
	          zoom: 18,
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };
	        map = new google.maps.Map(mapId, mapOptions); 
	      }

	    mapInitialize($rootScope.geocodeLatlng['lat'], $rootScope.geocodeLatlng['lng']);

	    $rootScope.nearbyAmenities = [];

	    var service = new google.maps.places.PlacesService(map);

	    var request = {};

	    var q = 0;

	    var amenitiesType = ['school', 'hospital', 'church', 'park', 'route'];
	    var amenitiesRad = [250, 250, 250, 250, 250];
	    var amenitype = "";

	    var interval = 0;

	    function setNearbyRequest(latlng) {
	      q = 0;
	      console.log(amenitiesType.length);
	      for(var p = 0; p<amenitiesType.length; p++){
	        
	        request[p] = {
	          location: latlng,
	          radius: amenitiesRad[p],
	          types: [amenitiesType[p]]
	        };

	        service.nearbySearch(request[p], callback);

	      }
	      
	      console.log($rootScope.nearbyAmenities);
	    }

	    $rootScope.changeAmenities = 0;

	    var callback = function(results, status) {
	      console.log(results);
	      $scope.$apply(function(){

	      if(status == "OK"){
	        
	          if(results[0].types[0] == "school"){
	            $rootScope.nearbyAmenities[0] = (results);
	          }
	          if(results[0].types[0] == "hospital"){
	            $rootScope.nearbyAmenities[1] = (results);
	          }
	          if(results[0].types[0] == "church"){
	            $rootScope.nearbyAmenities[2] = (results);
	          }
	          if(results[0].types[0] == "park"){
	            $rootScope.nearbyAmenities[3] = (results);
	          }
	          if(results[0].types[0] == "route"){
	            $rootScope.nearbyAmenities[4] = (results);
	          }
	          
	          console.log($rootScope.nearbyAmenities);
	        
	      } else {
	        console.log(q);
	        $rootScope.nearbyAmenities[q] = {};
	        console.log(status);
	      }
	      
	        q++;
	        $rootScope.changeAmenities++;
	    })
	    }
	}

	return {

	}
})