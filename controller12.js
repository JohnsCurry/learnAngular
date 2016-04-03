var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    template: 'Welcome to the / route'
  })
  .when('/test', {
    template: 'Welcome to the /test route'
  })
  .otherwise({
    redirectTo: '/' //Could also create a template and say something like "This is not a valid page"
  });
});