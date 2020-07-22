(function() {
    'use strict';

    angular.module('vitug.api', []).factory('$vitug_api', function($vitug_auth, $vitug_cookie, $rootScope, $http) {

    	function getUserRole() {
    		if($vitug_cookie.getUserRole() == "admin"){
    			return "admin";
				console.log("userRole: admin");
			} 
			if($vitug_cookie.getUserRole() == "user") {
				console.log("userRole: user");
				return "user";
			}
    	}

    	function isAuthAdmin() {
    		if($vitug_cookie.getUserRole() == "admin"){
    			return true;
			} 
			if($vitug_cookie.getUserRole() == "user") {
				return false;
			}
    	}

      	function login(request){
			$http.post("../../server/business_api/login", request)
			.success(function(request){

				$vitug_cookie.setUserData(request);

				$rootScope.$broadcast("onLoginSuccess");

			})
			.error(function(err){
				
				$rootScope.$broadcast("onLoginError", {
					'err': err
				});

			});
      	}

      	function register(request){
			
      	}

        return {

            login: login,
            register: register,
            getUserRole: getUserRole,
            isAuthAdmin: isAuthAdmin
      
        };
        
    })

})();