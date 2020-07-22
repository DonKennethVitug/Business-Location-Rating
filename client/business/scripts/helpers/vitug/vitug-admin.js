(function() {
    'use strict';

    angular.module('vitug.admin', []).factory('$vitug_admin', function($http, $rootScope) {

    	function getAllUsers() {

	    	$http.post("../../server/business_api/admin_getAllUsers")
	    	     .success(function(data){
	    	     	$rootScope.$broadcast("getUserData", {
                        'userData': data
                    })
	    	     })
	    	     .error(function(err){

	    	     })

    	 }

    	 function deleteUserById(id) {

    	 	var request = {
    	 		id: id
    	 	}

	    	$http.post("../../server/business_api/admin_deleteUserById", request)
	    	     .success(function(data){
	    	     	getAllUsers();
	    	     })
	    	     .error(function(err){
                    getAllUsers();
	    	     })

    	 }

    	 function updateUser(data) {

            console.log(data);

    	 	var request = {
                id: data.id,
    	 		name: data.name,
                email: data.email,
    	 		username: data.username,
                description: data.description,
    	 		role: data.role
    	 	}

	    	$http.post("../../server/business_api/admin_updateUser", request)
	    	     .success(function(data){
	    	     	console.log("updateUser: success");
	    	     })
	    	     .error(function(err){
                    console.log("updateUser: error")
	    	     })

    	 }

    	 function addUser(data) {

    	 	var request = {
                name: data.name,
                email: data.email,
                username: data.username,
                password: data.password,
                description: data.description,
                role: data.role
    	 	}

	    	$http.post("../../server/business_api/admin_addUser", request)
	    	     .success(function(data){
	    	     	getAllUsers();

                    console.log("addUser: success");
	    	     })
	    	     .error(function(err){

                    console.log("addUser: error");
	    	     })

    	 }

         function addBusiness(data) {

            var request = {
                name: data.name,
                email: data.email,
                username: data.username,
                password: data.password,
                description: data.description,
                role: data.role
            }

            $http.post("../../server/business_api/admin_addUser", request)
                 .success(function(data){
                    
                 })
                 .error(function(err){

                 })

         }

         function getUserBusinessById(id) {

            var request = {
                id: id,
            }

            $http.post("../../server/business_api/admin_getUserBusinessById", request)
                 .success(function(data){
                    $rootScope.$broadcast("getUserBusinessById", {
                        businessData: data
                    })
                 })
                 .error(function(err){
                    $rootScope.$broadcast("getUserBusinessById", {
                        businessData: {}
                    })
                 })

         }

         function deleteUserBusinessById(id) {

            var request = {
                id: id,
            }

            $http.post("../../server/business_api/admin_deleteUserBusinessById", request)
                 .success(function(data){
                    $rootScope.$broadcast("refreshUserBusinessById");
                 })
                 .error(function(err){
                    $rootScope.$broadcast("refreshUserBusinessById");
                 })

         }

        return {

        	getAllUsers: getAllUsers,
        	deleteUserById: deleteUserById,
        	updateUser: updateUser,
        	addUser: addUser,
            getUserBusinessById,
            deleteUserBusinessById
      
        };
        
    })

})();