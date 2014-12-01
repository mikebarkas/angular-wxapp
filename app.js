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
    .when('/forecast/:days', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })
});

/*
 * Services.
 */
wxApp.service('cityService', function() {
  this.city = 'Boston, MA';
});


/*
 * Controllers.
 */
wxApp.controller('homeController', ['$scope', 'cityService',
  function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

}]);

wxApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService',
  function($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || 3;

    $scope.weatherAPI =
      $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
        callback: 'JSON_CALLBACK'}, { get: {method: 'JSONP'}
      });

    $scope.weatherResult = $scope.weatherAPI.get({
      q: $scope.city,
      cnt: $scope.days
    });

    $scope.convertToFahrenheit = function(degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    }
}]);