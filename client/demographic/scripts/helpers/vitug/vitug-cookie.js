(function() {
    'use strict';

    angular.module('vitug.cookie', []).factory('$vitug_cookie', function($cookieStore) {

      function setUserId(facebook_id){

        $cookieStore.put('session_id', facebook_id);

        console.log("setUserId: success");

      }

      function setUserName(name){

        $cookieStore.put('name', name);

        console.log("setUserName: success");

      }

      function setUserPicture(picture){

        $cookieStore.put('picture', picture);

        console.log("setUserPicture: success");

      }

      function getUserId(){

        return $cookieStore.get('session_id');

      }

      function getUserName(){

        return $cookieStore.get('name');

      }

      function getUserPicture(){

        return $cookieStore.get('picture');

      }

      function removeUserId(){

        return $cookieStore.remove('session_id');

      }

      function removeUserName(){

        return $cookieStore.remove('name');

      }

      function removeUserPicture(){

        return $cookieStore.remove('picture');

      }

      function removeUser() {
        removeUserId();
        removeUserPicture;
        removeUserName

        console.log("removeUser: success");
      }

      return {

          setUserId: setUserId,
          setUserName: setUserName,
          setUserPicture: setUserPicture,
          getUserId: getUserId,
          getUserName: getUserName,
          getUserPicture: getUserPicture,
          removeUserId: removeUserId,
          removeUserName: removeUserName,
          removeUserPicture: removeUserPicture,
          removeUser: removeUser
      
      };
        
    })

})();