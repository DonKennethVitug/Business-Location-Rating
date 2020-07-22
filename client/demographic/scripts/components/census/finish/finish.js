var finishServices = angular.module('finish.controller', [])

.controller('finishCtrl', function(){

    $scope.user = $vitug_rootScope.getUserName();
    $scope.picture = $vitug_rootScope.getUserPicture();
    
    $scope.share = function(){
        $facebookService.share();
    }

})