(function() {
  'use strict';

  angular
    .module('omdbApp', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home-feat/home.html',
        controllerAs: 'Home',
        controller: 'Home'
      })
      .when('/search/:media/:movieString', {
        templateUrl: '/queryAll-feat/results.html',
        controllerAs: 'Search',
        controller: 'Search'
      })
      .when('/:media/:title', {
        templateUrl: '/queryTitle-feat/listing.html',
        controllerAs: 'Listing',
        controller: 'Listing'
      })
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.html5Mode(true);
  }

})();
