var censusCrimeServicesApp = angular.module('census.crime.controller', [])

.controller('censusCrimeCtrl', function($rootScope, $scope) {

	$rootScope.$broadcast("checkIfLoggedIn");

	/*var crime_item_names = {
		'0': {
			'name': 'Level of crime'
		},
		'1': {
			'name': 'Crime increasing in the past 3 years'
		},
	}


	function setNames(data, names) {

		var data_keys = Object.keys(data);
		var data_length = data_keys.length;

		for(var a = 0; a<data_length; a++) {

			for(var b = 0; b<Object.keys(names).length; b++) {

				var crime_item_name = names[b].name;

				if(a == b) {
					names[b]['title'] =data_keys[a];
				}

				if(censusData_keys[a] == names[b]['title']) {

					$scope.censusData.crime[data_keys[a]]['name'] = crime_item_name;

				}

			}

		}

		return names;

	}

	setNames($scope.censusData.crime, crime_item_names);

	console.log($scope.censusData.crime);

	*/

	console.log($scope.censusData);

	$scope.censusData.crime.crime_level['name'] = "Level of crime";
	$scope.censusData.crime.crime_level_future['name'] = "Crime increasing in the past 3 years";
	$scope.censusData.crime.crime_safe_day['name'] = "Safety walking alone during daylight";
	$scope.censusData.crime.crime_safe_night['name'] = "Safety walking alone during night";
	$scope.censusData.crime.crime_home['name'] = "Worries home broken and things stolen";
	$scope.censusData.crime.crime_robbed['name'] = "Worries being mugged or robbed";
	$scope.censusData.crime.crime_physically_attack['name'] = "Worries attacked and insulted";
	$scope.censusData.crime.crime_violent['name'] = "Problem violent crimes such as assault and armed robbery";
	$scope.censusData.crime.crime_drugs['name'] = "Problem people using or dealing drugs";
	$scope.censusData.crime.crime_theft['name'] = "Problem property crimes such as vandalism and theft";
})