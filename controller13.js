var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/page13.html'
  })
  .when('/helloUser', {
    templateUrl: '/hello13.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});