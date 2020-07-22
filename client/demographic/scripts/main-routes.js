angular.module('mainApp.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('home');

	$locationProvider.html5Mode(true);

	$stateProvider

		.state('navigate', {
			url: '/navigate',
			controller: 'mainNavigateCtrl'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'scripts/components/home/home.html',
			controller: 'homeCtrl'
		})
		.state('home.login',{
			url: '/login',
			templateUrl: 'scripts/components/home/login/login.html',
			controller: 'loginCtrl'
		})
		.state('home.finish', {
			url: '/finish',
			templateUrl: 'scripts/components/home/finish/finish.html',
			controller: 'finishCtrl'
		})
		.state('home.welcome', {
			url: '/welcome',
			templateUrl: 'scripts/components/home/welcome/welcome.html',
			controller: 'welcomeCtrl'
		})
		.state('home.whatisdis', {
			url: '/whatisdis',
			templateUrl: 'scripts/components/home/whatisdis/whatisdis.html',
			controller: 'whatisdisCtrl'
		})
		.state('census', {
			url: '/census',
			templateUrl: 'scripts/components/census/census.html',
			controller: 'censusCtrl'
		})
		.state('census.instruction', {
			url: '/instruction',
			templateUrl: 'scripts/components/census/instruction/instruction.html',
			controller: 'instructionCtrl'
		})
		.state('census.residence', {
			url: '/residence',
			templateUrl: 'scripts/components/census/residence/residence.html',
			controller: 'residenceCtrl'
		})
		.state('census.questions', {
			url: '/questions',
			templateUrl: 'scripts/components/census/questions/questions.html',
			controller: 'questionsCtrl'
		})
		.state('census.finish', {
			url: '/finish',
			templateUrl: 'scripts/components/census/finish/finish.html',
			controller: 'finishCtrl'
		})

})