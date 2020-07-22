var finishServices = angular.module('finish.controller', [])


.controller('finishCtrl', function($scope, $rootScope, $facebookService, $location, $anchorScroll){

    $rootScope.$broadcast("checkIfLoggedIn");

    $scope.share = function(){
        $facebookService.share();
    }



    



})