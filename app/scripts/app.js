
var SensoCloud = SensoCloud || {};
SensoCloud.SensoCloudControllers = angular.module('SensoCloud.controllers', ['SensoCloud.services']);
SensoCloud.services = angular.module('SensoCloud.services', []);


angular.module('SensoCloud', [ 'ngRoute','SensoCloud.controllers'])

.run(function() {

})

.config(function($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  })
  .when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  })
  .when('/profile', {
    templateUrl: 'templates/profile.html',
    controller: 'ProfileController'
  })
  .otherwise({
    redirectTo: '/'
  });

  // configure html5 to get links working on jsfiddle
//  $locationProvider.html5Mode(true);
});
