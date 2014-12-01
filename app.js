/*
 * Angular module.
 */
var wxApp = angular.module('wxApp', ['ngRoute', 'ngResource']);

/*
 * Routes.
 */
wxApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })
});

/*
 * Controllers.
 */
wxApp.controller('homeController', ['$scope', function($scope) {


}]);

wxApp.controller('forecastController', ['$scope', function($scope) {


}]);