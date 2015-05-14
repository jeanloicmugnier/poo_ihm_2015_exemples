'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])



  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/projects' , {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      }).when('/roles' , {
        templateUrl: 'views/roles.html',
        controller: 'RolesCtrl'
      })
      /*.when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'UsersCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/user/*', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })*/
      .otherwise({
        redirectTo: '/'
      });
  });
