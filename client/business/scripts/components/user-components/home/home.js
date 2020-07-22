var homeServicesApp = angular.module('home.controller', [])

.controller('homeCtrl', function($state) {

$state.go("selectBusiness");

})