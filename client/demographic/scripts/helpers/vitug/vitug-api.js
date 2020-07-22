(function() {
    'use strict';

    angular.module('vitug.api', []).factory('$vitug_api', function($facebookService, $rootScope, $http, $vitug_rootScope) {

        $rootScope.userInputs = {
            facebook_id: "",
            residence_region: "",
            residence_province: "",
            residence_city: "",
            residence_barangay: "",
            gender: "",
            ageGroup: "",
            crime_level: "",
            crime_level_future: "",
            crime_safe_day: "",
            crime_safe_night: "",
            crime_home: "",
            crime_robbed: "",
            crime_physically_attack: "",
            crime_violent: "",
            crime_drugs: "",
            crime_theft: "",
            personality_outgoing: "",
            personality_shy: "",
            personality_can_handle_pressure: "",
            personality_conversation: "",
            personality_curious: "",
            personality_conservative: "",
            hygiene_products: "",
            snacks_products: "",
            garments_products: "",
            gadgets_products: "",
            order_online_food: ""
        };

        function login(facebook_id) {

            if(facebook_id >= 0) {
                var request = {
                    'facebook_id': facebook_id
                }

               $http.post('../../server/demographic_census_api/createUser', request)
                     .success(function(data){
                        console.log('login: success');
                     })
                     .error(function(err){
                        //alert("the facebook account has already been used.");
                        //logout();
                        console.log('login: error');
                     })    
            }

        }

        function logout() {
            $vitug_rootScope.removeUser();
            $facebookService.logout();
        }

        function setAnswer(ans) {
            $rootScope.userInputs[ans.codename] = ans.value;
        }

        function updateDemoData(userInputs) {

            userInputs.facebook_id = $vitug_rootScope.getUserId();

            $http.post("../../server/demographic_census_api/updateDemoData", userInputs)
                 .success(function(){

                    console.log("updateDemoData: success")
                 })
                 .error(function(){

                    console.log("updateDemoData: success")
                 })
        }

        return {
            login: login,
            logout: logout,
            setAnswer: setAnswer,
            updateDemoData: updateDemoData
        };
        
    })

})();