angular.module("facebook.init", ['ezfb'])

.config(function (ezfbProvider) {
  /**
   * Basic setup
   *
   * https://github.com/pc035860/angular-easyfb#configuration
   */
  ezfbProvider.setInitParams({
    appId: '621560048006937'
  });  
})