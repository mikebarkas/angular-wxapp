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

wxApp.controller('forecastController', ['$scope', 'cityService',
  function($scope, cityService) {

    $scope.city = cityService.city;

}]);