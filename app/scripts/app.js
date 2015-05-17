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
        templateUrl: '../views/Users/users.html',
        controller: 'UsersCtrl'
      })

      .when('/users' , {
        templateUrl: '../views/Users/users.html',
        controller : 'UsersCtrl'
      })
      .when('/association' , {
        templateUrl: '../views/Association/association.html',
        controller : 'AssociationCtrl'
      })
      .when('/user/:id' , {
        templateUrl: '../views/Users/user.html',
        controller : 'UserCtrl'
      })
      .when('/project/:id' , {
        templateUrl: '../views/Projects/project.html',
        controller : 'ProjectCtrl'
      })
      .when('/projects' , {
        templateUrl: '../views/Projects/projects.html',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
