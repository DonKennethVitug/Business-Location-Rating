var mainAppServices = angular.module('mainApp.controller', [])

.controller('mainCtrl', function(mainServices, $rootScope, $cookieStore, $state, $http, $vitug_algorithm) {

	//global main functions

	$rootScope.$on("fetchAllBusiness", function(event, args){
		 $http.post("../../server/business_api/fetchAllBusiness")
		      .success(function(data){ 
		    	$rootScope.businesses = data;
		    	console.log("fetchAllBusiness: success");
		      })
		      .error(function(err){
		   		console.log("fetchAllBusiness: error, "+err);
		      })
	})

	$rootScope.userBusiness = {
		status: 'EMPTY'
	}

	$rootScope.$on("fetchUserBusiness", function(event, args){
		 $rootScope.$broadcast("startLoading");
		 $rootScope.userBusiness.status = "UPDATING";
		 $http.post("../../server/business_api/fetchUserBusiness", {
		    	'user_id': args['user_id']
		 })
	          .success(function(data){ 
	    	    $rootScope.userBusiness = data;
	    	    $rootScope.userBusiness.status = "OK";
	    	    console.log("fetchUserBusiness: success");
	    	    $rootScope.$broadcast("stopLoading");
		      })
		      .error(function(err){
		      	$rootScope.userBusiness.status = "NOT OK";
		   		console.log("fetchUserBusiness: error, "+err);
		   		$rootScope.$broadcast("stopLoading");
		      })
	})

	$rootScope.$on("deleteUserBusiness", function(event, args){
		$rootScope.$broadcast("startLoading");
		 $http.post("../../server/business_api/deleteUserBusiness", {
		    	'businessId': args['businessId']
		 })
	          .success(function(data){ 
	          	$rootScope.$broadcast("fetchUserBusiness", {
				    'user_id': $cookieStore.get("session_id")
				})
				console.log("deleteUserBusiness: success");
				$rootScope.$broadcast("stopLoading");
	          })
		      .error(function(err){
		   		console.log("deleteUserBusiness: error, "+err);
		   		$rootScope.$broadcast("stopLoading");
		      })
	})

	$rootScope.$on("setNeabyAmenities", function(event, args){

	  //variables

		var latlng = {
			'lat': parseFloat(args['lat']),
			'lng': parseFloat(args['lng'])
		}
		var mapid= document.getElementById("mainMap");

		function mapinitialize(latlng) {
	        map = new google.maps.Map(mapid); 
	    }

	    var service = new google.maps.places.PlacesService(mapid);

	    var request = {};
	    var q = 0;

	    //settings

	      var amenitiesType = ['school', 'hospital', 'church', 'route', 'amusement_park'];
	      var amenitiesRad = [250, 250, 250, 250, 250];

	  //functions

	  	function setNearbyRequest(latlng) {
	      q = 0;
	      for(var p = 0; p<amenitiesType.length; p++){
	        
	        request[p] = {
	          location: latlng,
	          radius: amenitiesRad[p],
	          types: [amenitiesType[p]]
	        };

	        service.nearbySearch(request[p], callback);

	      }
	      console.log("setNearbyRequest: success");
	    }

	    function callback(results, status) {
	      $rootScope.$apply(function(){

	      if(status == "OK"){
	        
	          if(results[0].types[0] == "school"){
	            $rootScope.businessData.nearbyAmenities.school = (results);
	          }
	          if(results[0].types[0] == "hospital"){
	            $rootScope.businessData.nearbyAmenities.hospital = (results);
	          }
	          if(results[0].types[0] == "church"){
	            $rootScope.businessData.nearbyAmenities.church = (results);
	          }
	          if(results[0].types[0] == "amusement_park"){
	            $rootScope.businessData.nearbyAmenities.amusement_park = (results);
	          }
	          if(results[0].types[0] == "route"){
	            $rootScope.businessData.nearbyAmenities.route = (results);
	          }
	        
	      }
	      
	      if(q < amenitiesType.length){
	      	$rootScope.businessData.nearbyAmenities.status = "OK";
	      }
	        q++;
	    })
	    }

	  //Amenities Initialize

	    mapinitialize(latlng);
	    setNearbyRequest(latlng);

		console.log("setNeabyAmenities: success");

	})

	$rootScope.$on("vitug-algorithm-init", function(event, args){
		  $rootScope.$broadcast("startLoading");
		  $rootScope.businessData.crimeData.city.status = "";

	        $vitug_algorithm.init(args['businessId']);

	        $rootScope.$watch(function(){
	            return $rootScope.businessData.crimeData.city.status;
	        }, function(){
	            var status = $rootScope.businessData.crimeData.city.status;
	            if(status == "OK"){
	              $rootScope.$broadcast("stopLoading");
	              $state.go('features');  
	            }
	            if(status == "NOT OK" || status == "EMPTY") {
	              $rootScope.$broadcast("stopLoading");
	            }
	        })
	})

	//end global main functions

	//initialize main controller

	$state.go('navigate_auth');
	

})