(function() {
    'use strict';

    angular.module('vitug.auth', []).factory('$vitug_auth', function($vitug_cookie, $state, $rootScope) {

		function admin_init(){
			$rootScope.$broadcast("checkIfLoggedIn");


			$state.go('admin_update_user');
			console.log("admin_init: success");
		}

		function user_init(){
			$rootScope.$broadcast("checkIfLoggedIn");
			$rootScope.$broadcast('getUserBusiness');
			$rootScope.$broadcast('watchBusinessId');
			$rootScope.$broadcast('fetchAllBusiness');
			$rootScope.$broadcast('watchBusinessStatus');


			$state.go('home');
			console.log("user_init: success");
		}

		return {

			admin_init: admin_init,
			user_init: user_init

		};
        
    })

})();