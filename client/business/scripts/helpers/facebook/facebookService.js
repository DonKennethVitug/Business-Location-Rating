(function() {
    'use strict';

    angular.module('facebookService', []).factory('$facebookService', function($rootScope, ezfb) {

        $rootScope.userProfile = {
            'status': "",
            'name': "",
            'picture': ""
        };

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
                name: 'angular-easyfb API demo',
                picture: 'http://plnkr.co/img/plunker.png',
                link: 'http://plnkr.co/edit/qclqht?p=preview',
                description: 'angular-easyfb is an AngularJS module wrapping Facebook SDK.' + 
                             ' Facebook integration in AngularJS made easy!' + 
                             ' Please try it and feel free to give feedbacks.'
              },
              function (res) {
                console.log(res);
              }
            );
        }

        function updateLoginStatus(more) {
            ezfb.getLoginStatus(function (result) {   
              $rootScope.$broadcast("updateLoginStatus", {
                'status': result.status
              });      
              $rootScope.userProfile.status = "connected";  
            (more || angular.noop)();
            console.log("updateLoginStatus: success");
            });
        }

        function getUserProfileData () {
            ezfb.api('/me', function (res) {
              console.log(res);
              $rootScope.userProfile['name'] = res.name;
              console.log("getUserProfileData: success");
            });
        }

        function getUserProfilePicture () {
            ezfb.api('/me/picture?width=180&height=180', function (res) {
              if(res.data.url != undefined){
                $rootScope.userProfile['picture'] = res.data.url;
              }
              console.log("getUserProfilePicture: success");
            });
        }

        function facebookLoginInit(){
            getUserProfileData();
            getUserProfilePicture();
        }

        function init(){
          login();
        }

        return {

            init: init,
            login: login,
            logout: logout
        
        };
        
    })

})();