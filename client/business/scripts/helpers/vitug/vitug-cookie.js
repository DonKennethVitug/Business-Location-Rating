(function() {
    'use strict';

    angular.module('vitug.cookie', []).factory('$vitug_cookie', function($cookieStore) {

      function setUserData(request){

        $cookieStore.put('session_id', request[0]['id']);

       	$cookieStore.put('name', request[0]['name']);

       	$cookieStore.put('username', request[0]['username']);

       	$cookieStore.put('role', request[0]['role']);

        $cookieStore.put('picture', request[0]['picture']);

        $cookieStore.put('description', request[0]['description']);

        $cookieStore.put('phone', request[0]['phone']);

       	$cookieStore.put('date_created', request[0]['date_created']);

      }

      function getUserRole(){
      	return $cookieStore.get('role')
      }

      return {

          setUserData: setUserData,
          getUserRole: getUserRole
      
      };
        
    })

})();