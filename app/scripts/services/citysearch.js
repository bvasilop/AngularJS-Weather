/**
 * @ngdoc service
 * @name angularJsWeatherApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularJsWeatherApp.
 */
angular
  .module('angularJsWeatherApp')
  .factory('citysearch', function($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource(
      'https://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&units=imperial&APPID=a1229545e71f4cf85672eee69b3b302e',
      {},
      {
        find: {
          method: 'GET',
          params: {
            query: 'seattle',
          },
          isArray: false,
        },
      }
    );
  });
