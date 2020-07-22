var populationServicesApp = angular.module('population.controller', [])

.controller('populationCtrl', function($scope, $state, $http, $rootScope, $timeout, mapServices, $interval, $cookieStore) {

  if($cookieStore.get('session_id') == 0) {
      $rootScope.$broadcast("addhidden");
      $rootScope.$broadcast("stopLoading");
      $state.go('login');
  } else {
    $rootScope.$broadcast("removehidden");
    $rootScope.$broadcast("stopLoading");
  }

  if($rootScope.businessData.status == "OK"){
    $scope.locationText = $rootScope.businessData.location.address;
  } else {
    $state.go('selectBusiness');
  }

  if($rootScope.businessData.status == "OK"){
    $scope.locationText = $rootScope.businessData.location.address;
  } else {
    $state.go('selectBusiness');
  }

  $scope.countFrom = 0;

  var locationRegion = "";
  var locationCity = "";

  $scope.populationChart = {
        regionLabels: ["Region"],
        cityLabels: ["City"],
        barangayLabels: ["Barangay"],
        demographicLabels: ["Infants", "Toddlers", "Child", "Disabilities", "Male", "Female", "Senior"],
        series: ["Population Data"],
        colors: [],
        options: {barShowStroke : false},
        regionData: [0],
        cityData: [0],
        barangayData: [0],
        demographicData: [0, 0, 0, 0, 0, 0, 0]
  };

  var setPopulationDataRegion = function(a) {
    $timeout(function () {
      $scope.populationChart['regionData'] = [a];
    }, 500);
    $scope.populationRegion = a
  }

  var setPopulationDataCity = function(a) {
    $timeout(function () {
      $scope.populationChart['cityData'] = [a];
    }, 500);
    $scope.populationCity = a;
  }

  var setPopulationDataBarangay = function(a) {
    $timeout(function () {
      $scope.populationChart['barangayData'] = [a];
    }, 500);
    $scope.populationBarangay = a;
  }

  var setDemographicCity = function(a, b, c, d, e, f, g) {
    $timeout(function () {
      $scope.populationChart['demographicData'] = [a, b, c, d, e, f, g];
    }, 500);
  }

  setPopulationDataRegion($rootScope.businessData.populationData.region);
  setPopulationDataCity($rootScope.businessData.populationData.city);
  setPopulationDataBarangay($rootScope.businessData.populationData.barangay);
  setDemographicCity(
    $rootScope.businessData.populationData.infants,
    $rootScope.businessData.populationData.toddlers,
    $rootScope.businessData.populationData.child,
    $rootScope.businessData.populationData.disabilities,
    $rootScope.businessData.populationData.male,
    $rootScope.businessData.populationData.female,
    $rootScope.businessData.populationData.senior
  );


})