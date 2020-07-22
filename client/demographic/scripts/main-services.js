mainAppServices.factory('mainServices', function($rootScope, $vitug_api, $state, $vitug_cookie){

	// rootScope variables

    // end rootScope variables

	// MAIN CSS

	$rootScope.$on("startLoading", function(event){
		angular.element(document.querySelector("#content")).addClass("hidden");
		angular.element(document.querySelector("#loader")).removeClass("hidden");
	})

	$rootScope.$on("stopLoading", function(event){
		angular.element(document.querySelector("#content")).removeClass("hidden");
		angular.element(document.querySelector("#loader")).addClass("hidden");
	})

	//END CSS

	// MAIN WATCHERS

	$rootScope.$watch(function(){

			return $rootScope.userProfile.status;

		}, function() {

			console.log($rootScope.userProfile.status);

			if($rootScope.userProfile.status == "connected") {

				$vitug_api.login($rootScope.userProfile.facebook_id);
				$state.go("home.welcome");

			} 
			if($rootScope.userProfile.status == "not connected") {

				$state.go("home.login");
				
			}

		})

	// END WATCHERS

	return {

	}
})