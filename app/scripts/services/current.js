'use strict';

/**
 * @ngdoc service
 * @name angularJsWeatherApp.current
 * @description
 * # current
 * Factory in the angularJsWeatherApp.
 */
angular.module('angularJsWeatherApp')
  .factory('current', function($resource) {
    // Service logic
    // Public API Here:
    return $resource('https://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=a1229545e71f4cf85672eee69b3b302e', {}, {
      query: {
        method: 'GET',
        params: {
          cityID: '4717560' // Paris, France ID
        },
        isArray: false
      }
    });
  });
