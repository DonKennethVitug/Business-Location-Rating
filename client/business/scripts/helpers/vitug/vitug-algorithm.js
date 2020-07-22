(function() {

    'use strict';



    angular.module('vitug.algorithm', []).factory('$vitug_algorithm', function($rootScope, $http) {



    	$rootScope.businessData = {

            status: "EMPTY",

            active: false,

            id: 0,

    		name: "",

    		descr: "",

    		company: "",

    		location: {

    			coor: {

    				lat: "",

    				lng: ""

    			},

    			region: "",

                province: "",

    			city: "",

    			barangay: "",

                address: ""

    		},

    		crimeData: {

    			region: {

    				status: '',

				    'crime_soln_efficiency': 0,

				    'total_crime_vol': 0,

				    'ave_monthly_crime_rate': 0,

				    'murder': 0,

				    'homicide': 0,

				    'injury': 0,

				    'rape': 0,

				    'robbery': 0,

				    'theft': 0,

				    'carnapping': 0

    			},

    			city: {

    				status: '',

				    'ave_monthly_crime_rate': 0,

				    'murder': 0,

				    'homicide': 0,

				    'injury': 0,

				    'robbery': 0,

				    'theft': 0,

				    'carnapping': 0

    			}

    		},

    		populationData: {

    			status: '',

    			region: 0,

    			city: 0,

    			barangay: 0,

    			infants: 0,

    			toddlers: 0,

    			child: 0,

    			disabilities: 0,

    			male: 0,

    			female: 0,

    			senior: 0

    		},

            nearbyAmenities: {

                'school': [],

                'hospital': [],

                'church': [],

                'amusement_park': [],

                'route': [],

                'status': "NOT OK"

            },

            censusData: {



            }

    	}



        function setCensusData(region, province, city, barangay) {

            $http.post("../../server/business_api/getCensusData", {

               'region': region,

               'province': province,

               'city': city,

               'barangay': barangay 

            })

                    .success(function(data){



                        $rootScope.businessData.censusData = data;



                        console.log('getCensusData: success');



                    })

                    .error(function(err){



                    });        

        }



    	function capitalizeFirstLetter(string) {

    		var string = string;

    		var strings = string.split(" ");

    		var i=0;

    		for(i;i<strings.length;i++){

    			strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1).toLowerCase();

    		}

		    return strings.join(" ");

		}



    	function setBusinessDescription(id, name, descr, company){

            $rootScope.businessData.id = id;

    		$rootScope.businessData.name = name;

    		$rootScope.businessData.descr = descr;

    		$rootScope.businessData.company = company;

    		console.log("setBusinessDescription: success");

    	}



    	function setLocation(lat, lng , addr, region, province, city, barangay) {

    		$rootScope.businessData.location.coor.lat = lat;

    		$rootScope.businessData.location.coor.lng = lng;

            $rootScope.businessData.location.address = addr;

            $rootScope.businessData.location.region = region;

            $rootScope.businessData.location.province = province;

            $rootScope.businessData.location.city = city;

            $rootScope.businessData.location.barangay = barangay;

    		console.log("setLocation: success");

    	}



    	function setCrime(region, city, regionPop, cityPop) {



    		$http.post('../../server/business_api/getCrimeDataRegion', {

            	location: region

            })

            .success(function(data) {



                $rootScope.businessData.crimeData.region.crime_soln_efficiency = data['crime_soln_efficiency'].toFixed(2);

                $rootScope.businessData.crimeData.region.total_crime_vol = data['total_crime_vol'];

                $rootScope.businessData.crimeData.region.ave_monthly_crime_rate = ((data['total_crime_vol']/12)*(100000/regionPop));

                $rootScope.businessData.crimeData.region.murder = data['murder'];

                $rootScope.businessData.crimeData.region.homicide = data['homicide'];

                $rootScope.businessData.crimeData.region.injury = data['injury'];

                $rootScope.businessData.crimeData.region.rape = data['rape'];

                $rootScope.businessData.crimeData.region.robbery = data['robbery'];

                $rootScope.businessData.crimeData.region.theft = data['theft'];

                $rootScope.businessData.crimeData.region.carnapping = data['carnapping'];



                $rootScope.businessData.crimeData.region.status = "OK";

                console.log("setCrimeRegion: success");

            })

            .error(function(err){

            	$rootScope.businessData.crimeData.region.status = "NOT OK";

            	console.log("setCrimeRegion: error, "+err)

            })



            $http.post('../../server/business_api/getCrimeDataCity', {

            	location: capitalizeFirstLetter(city)

            })

            .success(function(data){



                $rootScope.businessData.crimeData.city.ave_monthly_crime_rate = ((data['total_crime_vol']/12)*(100000/cityPop));

                $rootScope.businessData.crimeData.city.murder = data['murder'];

                $rootScope.businessData.crimeData.city.homicide = data['homicide'];

                $rootScope.businessData.crimeData.city.injury = data['injury'];

                $rootScope.businessData.crimeData.city.robbery = data['robbery'];

                $rootScope.businessData.crimeData.city.theft = data['theft'];

                $rootScope.businessData.crimeData.city.carnapping = data['carnapping'];



				$rootScope.businessData.crimeData.city.status = "OK";

				console.log("setCrimeCity: success");

            })

            .error(function(err){

            	$rootScope.businessData.crimeData.city.status = "NOT OK";

            	console.log("setCrimeCity: error, "+err)

            })

    	}



    	function setPopulation_Crime(region, city, barangay){



    		$http.post('../../server/business_api/getPopulation', {

    		    'region': region,

	            'city': city,

	            'barangay': barangay

    		})

    		.success(function(data){



    			var regionPop = data['region']['region_population'];

    			var cityPop = data['city']['city_population'];

    			var barangayPop = data['barangay']['barangay_population'];



                $rootScope.businessData.populationData.region = regionPop

                $rootScope.businessData.populationData.city = cityPop

                $rootScope.businessData.populationData.barangay = barangayPop



	            $rootScope.businessData.populationData.status = "OK";



	            setCrime(region, city, regionPop, cityPop);



    			console.log('setPopulation: success')

    		})

    		.error(function(err){

    			$rootScope.businessData.populationData.status = "NOT OK";

            	console.log("setPopulation: error, "+err)

            })



            $http.post('../../server/business_api/getPopulationDemographics', {

            	city: city

            })

            .success(function(data){



                $rootScope.businessData.populationData.infants = data['infants'];

                $rootScope.businessData.populationData.toddlers = data['toddlers'];

                $rootScope.businessData.populationData.child = data['child'];

                $rootScope.businessData.populationData.disabilities = data['disabilities'];

                $rootScope.businessData.populationData.male = data['male'];

                $rootScope.businessData.populationData.female = data['female'];

                $rootScope.businessData.populationData.senior = data['senior'];



            	console.log('setPopulationDemo: success')



            })

            .error(function(err){



            	$rootScope.businessData.populationData.status = "NOT OK";



            	console.log("setPopulationDemo: error, "+err)



            })

    	}



        function init(businessId) {



            $http.post("../../server/business_api/getBusinessData", {

                businessId: businessId

            })

            .success(function(data){



                var data = data[0];             



                setBusinessDescription(data.id, data.business_name, data.business_description, data.business_company_name);



                setLocation(data.business_location_latitude, data.business_location_longitude, data.business_address, data.business_location_region, data.business_location_province, data.business_location_city, data.business_location_barangay);



                setCensusData(data.business_location_region, data.business_location_province, data.business_location_city, data.business_location_barangay);



                setPopulation_Crime(data.business_location_region, data.business_location_city, data.business_location_barangay);  



                $rootScope.$broadcast("setNeabyAmenities", {

                    'lat': data.business_location_latitude, 'lng': data.business_location_longitude

                });



                $rootScope.businessData.status = "OK";



                console.log('getbusinessData: success');



            })

            .error(function(err){

                $rootScope.businessData.status = "NOT OK";

                console.log("getbusinessData: error, "+err);

            })       



            return;



        }



        return {



            init: init

        

        };

        

    })



})();