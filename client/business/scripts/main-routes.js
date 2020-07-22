angular.module('main.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/navigate_auth");
  
  $stateProvider

  //Global

   .state('login', {
      url: '/login',
      templateUrl: 'scripts/components/global-components/users/login/login.html',
      controller: 'loginCtrl'
    })
   .state('register', {
      url: '/register',
      templateUrl: 'scripts/components/global-components/users/register/register.html',
      controller: 'registerCtrl'
    })
   .state('landing', {
      url: '/landing',
      templateUrl: 'scripts/components/global-components/landing/landing.html',
      controller: 'landingCtrl'
    })
   .state('navigate_auth', {
      url: '/navigate_auth',
      controller: 'navigate_auth_controller'
   })

  //User

   .state('features', {
      url: '/features',
      templateUrl: 'scripts/components/user-components/features/features.html',
      controller: 'featuresCtrl'
    })
   .state('updateUser', {
      url: '/profile',
      templateUrl: 'scripts/components/user-components/users/update/update.html',
      controller: 'updateUserCtrl'
    })
   .state('crime', {
      url: '/crime',
      templateUrl: 'scripts/components/user-components/features/crime/crime.html',
      controller: 'crimeCtrl'
    })
    .state('amenitieslist', {
      url: '/amenitiesList',
      templateUrl: 'scripts/components/user-components/features/amenities/amenitieslist/amenitieslist.html',
      controller: 'amenitiesListCtrl'
    })
    .state('amenities', {
      url: '/amenities',
      templateUrl: 'scripts/components/user-components/features/amenities/analytics/amenities.html',
      controller: 'amenitiesCtrl'
    })
    .state('amenitieslist.school', {
      url: '/school',
      templateUrl: 'scripts/components/user-components/features/amenities/amenitieslist/amenitiesListTemp/school.html',
    })
    .state('amenitieslist.hospital', {
      url: '/hospital',
      templateUrl: 'scripts/components/user-components/features/amenities/amenitieslist/amenitiesListTemp/hospital.html',
    })
    .state('amenitieslist.church', {
      url: '/church',
      templateUrl: 'scripts/components/user-components/features/amenities/amenitieslist/amenitiesListTemp/church.html',
    })
    .state('amenitieslist.amusement_park', {
      url: '/amusement_park',
      templateUrl: 'scripts/components/user-components/features/amenities/amenitieslist/amenitiesListTemp/amusement_park.html',
    })
    .state('amenitieslist.route', {
      url: '/route',
      templateUrl: 'scripts/components/user-components/features/amenities/amenitieslist/amenitiesListTemp/route.html',
    })
   .state('amenitiesmap', {
      url: '/amenitiesmap',
      templateUrl: 'scripts/components/user-components/features/amenities/map/amenitiesmap.html',
      controller: 'amenitiesmapCtrl'
    })
   .state('population', {
      url: '/population',
      templateUrl: 'scripts/components/user-components/features/population/population.html',
      controller: 'populationCtrl'
    })
    .state('resident', {
      url: '/resident',
      templateUrl: 'scripts/components/user-components/features/resident/resident.html',
      controller: 'residentCtrl'
    })
   .state('map', {
      url: '/map',
      templateUrl: 'scripts/components/user-components/features/map/map.html',
      controller: 'mapCtrl'
    })

   .state('home', {
      url: '/home',
      templateUrl: 'scripts/components/user-components/home/home.html',
      controller: 'homeCtrl'
    })

   .state('addBusiness', {
      url: '/addBusiness',
      templateUrl: 'scripts/components/user-components/userBusiness/addBusiness/addBusiness.html',
      controller: 'addBusinessCtrl'
    })

   .state('selectBusiness', {
      url: '/selectBusiness',
      templateUrl: 'scripts/components/user-components/userBusiness/selectBusiness/selectBusiness.html',
      controller: 'selectBusinessCtrl'
    })

   .state('deleteBusiness', {
      url: '/deleteBusiness',
      templateUrl: 'scripts/components/user-components/userBusiness/deleteBusiness/deleteBusiness.html',
      controller: 'deleteBusinessCtrl'
    })

   .state('addBusiness.phase1', {
     url: '/phase1',
     templateUrl: 'scripts/components/user-components/phases/phase1.html',
      controller: 'phase1Ctrl'
   })

   .state('addBusiness.phase2', {
      url: '/phase2',
     templateUrl: 'scripts/components/user-components/phases/phase2.html',
      controller: 'phase2Ctrl'
   })

   .state('addBusiness.phase3', {
      url: '/phase3',
      templateUrl: 'scripts/components/user-components/phases/phase3.html',
      controller: 'phase3Ctrl'
   })

   .state('census', {
      url: '/census',
      templateUrl: 'scripts/components/user-components/demographics/census.html',
      controller: 'censusCtrl'
   })

   .state('census.crime', {
      url: '/crime',
      templateUrl: 'scripts/components/user-components/demographics/crime/crime.html',
      controller: 'censusCrimeCtrl'
   })

   .state('census.people', {
      url: '/people',
      templateUrl: 'scripts/components/user-components/demographics/people/people.html',
      controller: 'censusPeopleCtrl'
   })

   .state('census.personalities', {
      url: '/personalities',
      templateUrl: 'scripts/components/user-components/demographics/personalities/personalities.html',
      controller: 'censusPersonalitiesCtrl'
   })

   .state('census.expenditure', {
      url: '/expenditure',
      templateUrl: 'scripts/components/user-components/demographics/expenditure/expenditure.html',
      controller: 'censusExpenditureCtrl'
   })

  //Admin

   .state('admin_add_user', {
      url: '/admin_add_user',
      templateUrl: 'scripts/components/admin-components/users/add-user/add-user.html',
      controller: 'admin_add_user_controller'
   })
   .state('admin_update_user', {
      url: '/admin_update_user',
      templateUrl: 'scripts/components/admin-components/users/update-user/update-user.html',
      controller: 'admin_update_user_controller'
   })
   .state('admin_business_user', {
      url: '/admin_business_user/:id/:name',
      templateUrl: 'scripts/components/admin-components/users/business-user/business-user.html',
      controller: 'admin_business_user_controller'
   })
   
  
})
