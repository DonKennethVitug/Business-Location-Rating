var crimeServicesApp = angular.module('crime.controller', [])



.controller('crimeCtrl', function($scope, $rootScope, $timeout, $http, $cookieStore, $state){ 

  if($rootScope.businessData.status == "OK"){
    $scope.locationText = $rootScope.businessData.location.address;
  } else {
    $state.go('selectBusiness');
  }

  var locationRegion = "";
  var locationCity = "";

  $scope.countFrom = 0;

  if($rootScope.businessData.status == "OK"){
    $scope.locationText = $rootScope.businessData.location.address;
  } else {
    $state.go('selectBusiness');
  }

  $scope.crimeDataRegion = {
        labels: ["Murder", "Homicide", "Physical Injury", "Rape", "Robbery", "Theft", "Carnapping"],
        series: ["Crime Data"],
        colors: ['#ff0000'],
        options: {},
        data: [0, 0, 0, 0, 0, 0, 0]
  };


  $scope.crimeDataCity = {
        labels: ["Murder", "Homicide", "Physical Injury", "Robbery", "Theft", "Carnapping"],
        series: ["Crime Data"],
        colors: ['#ff0000'],
        options: {},
        data: [0, 0, 0, 0, 0, 0]
  };

  var setCrimeDataRegion = function(a, b, c, d, e, f, g) {
    $timeout(function () {
      $scope.crimeDataRegion['data'] = [a, b, c, d, e, f, g];
    }, 500);
    $scope.crimeDataRegionRate = $rootScope.businessData.crimeData.region['ave_monthly_crime_rate'].toFixed(2);
    $scope.crimeDataRegionSoln = $rootScope.businessData.crimeData.region['crime_soln_efficiency'];
  }

  var setCrimeDataCity = function(a, b, c, d, e, f) {
    $timeout(function () {
      $scope.crimeDataCity['data'] = [a, b, c, d, e, f];
    }, 500);
    $scope.crimeDataCityRate = $rootScope.businessData.crimeData.city['ave_monthly_crime_rate'].toFixed(2);
  }



  setCrimeDataRegion($rootScope.businessData.crimeData.region['murder'], $rootScope.businessData.crimeData.region['homicide'], $rootScope.businessData.crimeData.region['injury'], $rootScope.businessData.crimeData.region['rape'], $rootScope.businessData.crimeData.region['robbery'], $rootScope.businessData.crimeData.region['theft'], $rootScope.businessData.crimeData.region['carnapping'])

  setCrimeDataCity($rootScope.businessData.crimeData.city['murder'], $rootScope.businessData.crimeData.city['homicide'], $rootScope.businessData.crimeData.city['injury'], $rootScope.businessData.crimeData.city['robbery'], $rootScope.businessData.crimeData.city['theft'], $rootScope.businessData.crimeData.city['carnapping'])


})
