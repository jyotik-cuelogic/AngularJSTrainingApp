'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'user',
  'login',
  'home'
]).
config(['$routeProvider',function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({ redirectTo: '/login' });
}]);
