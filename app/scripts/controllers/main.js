'use strict';

/**
 * @ngdoc function
 * @name angularJsWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsWeatherApp
 */
angular.module('angularJsWeatherApp')
  .controller('MainCtrl', function($scope, citysearch, $localStorage, $window) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;
    $scope.findCities = function() {
      $scope.citiesFound = citysearch.find({
        query: $scope.location
      });
      $scope.searchQuery = $scope.location;
    };
    $scope.removeCity = function() {
      $window.localStorage.clear();
      $window.location.reload();
    };

    $scope.options = {
      types: ['(cities']
    };

  });
