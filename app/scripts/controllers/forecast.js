'use strict';

/**
 * @ngdoc function
 * @name angularJsWeatherApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the angularJsWeatherApp
 */
angular.module('angularJsWeatherApp')
.controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
  $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });
  });
