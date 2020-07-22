(function() {
    'use strict';

    angular.module('vitug.rootScope', []).factory('$vitug_rootScope', function($rootScope, $cookieStore) {

      $rootScope.userProfile = {
        status: "not connected"
      };

      function setStatus(status){
        if(status == "connected"){
            $rootScope.userProfile.status = "connected";
        } else {
            $rootScope.userProfile.status = "not connected";
        }
        console.log("setStatus: success");
      }

      function setUserId(facebook_id){

        $rootScope.userProfile.facebook_id = facebook_id;

      }

      function setUserName(name){

        $rootScope.userProfile.name = name;

      }

      function setUserPicture(picture){

        $rootScope.userProfile.picture = picture;

      }

      function getUserId(){

        return $rootScope.userProfile.facebook_id;

      }

      function getUserName(){

        return $rootScope.userProfile.name;

      }

      function getUserPicture(){

        return $rootScope.userProfile.picture;

      }

      function removeUserId(){

        $rootScope.userProfile.facebook_id = "";

      }

      function removeUserName(){

        return $rootScope.userProfile.name = "";

      }

      function removeUserPicture(){

        return $rootScope.userProfile.picture = "";

      }

      function removeStatus(){

        return $rootScope.userProfile.status = "not connected";

      }

      function removeUser() {
        removeStatus();
        removeUserId();
        removeUserPicture();
        removeUserName();

        console.log("removeUser: success");
      }

      function isLoggedIn() {
        if($rootScope.userProfile.status == "connected") {
          return true;
        } else {
          return false
        }
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
          removeUser: removeUser,
          setStatus: setStatus,
          isLoggedIn: isLoggedIn
      
      };
        
    })

})();