'use strict';

/**
 * @ngdoc function
 * @name angularJsWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsWeatherApp
 */
angular.module('angularJsWeatherApp')
.controller('MainCtrl', function ($scope, citysearch, $localStorage) {
  $scope.citiesFound = citysearch.find();
  $scope.storage = $localStorage;
  $scope.findCities = function(){
         $scope.citiesFound = citysearch.find({
             query: $scope.location
         });
         $scope.searchQuery = $scope.location;
     };
   });
