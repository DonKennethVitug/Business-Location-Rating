(function() {
    'use strict';

    angular.module('facebookService', []).factory('$facebookService', function($rootScope, ezfb, $vitug_cookie, $vitug_rootScope) {

        var status = "";

        function login(){
            ezfb.login(function (res) {
              if (res.authResponse) {
                updateLoginStatus(facebookLoginInit);
              }
            }, {scope: 'email,public_profile'});
        }

        function logout(){
            ezfb.logout(function (res) {
              updateLoginStatus(facebookLoginInit);
            });
        }

        function share(){
            ezfb.ui(
              {
                method: 'feed',
                name: 'Demographic Census',
                picture: 'http://www.myrealtystory.com/images/pages/cities/demographics.png',
                link: 'http://businesslocation.byethost13.com/client/demographic',
                description: 'Demographic Census is a quiz or survey for people of the Philippines.' + 
                             ' The survey will help many developers of the Philippines!' + 
                             ' Please try it and feel free to give feedbacks.'
              },
              function (res) {
                console.log(res);
              }
            );
        }

        function updateLoginStatus(more) {
            ezfb.getLoginStatus(function (result) {   

              status = result.status;
 
            (more || angular.noop)();
            console.log("updateLoginStatus: success");
            });
        }

        function getUserProfileData () {
            ezfb.api('/me', function (res) {

              $vitug_rootScope.setUserId(res.id);
              $vitug_rootScope.setUserName(res.name);

            });
        }

        function getUserProfilePicture () {
            ezfb.api('/me/picture?width=180&height=180', function (res) {

              if(res.data.url != undefined && res.data.url != "") {
                $vitug_rootScope.setUserPicture(res.data.url);
                $vitug_rootScope.setStatus(status);
              }
              
            });
        }

        function facebookLoginInit(){
            getUserProfileData();
            getUserProfilePicture();
        }

        function init(){
          updateLoginStatus(facebookLoginInit);
        }

        return {

            init: init,
            login: login,
            logout: logout,
            share: share
        
        };
        
    })

})();