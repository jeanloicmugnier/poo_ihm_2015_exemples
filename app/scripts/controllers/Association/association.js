'use strict';
/**
 * Created by webdev on 5/6/15.
 */
angular.module('pooIhmExemplesApp')
  .controller('AssociationCtrl', ['$scope', 'Services','$location','$route','$routeParams', function ($scope,Services,$location,$route,$routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.associate = function(){
      $scope.role.UserId = $scope.user.id;
      $scope.role.ProjectId= $scope.project.id;
      Services.add('Roles', $scope.role, function (data) {
          $location.path('/project/'+ $scope.project.id);
          $route.reload();
        },
        function (data) {
          $scope.error = data;
        });
    };

    $scope.getAllUsers = function () {
      Services.getAll('Users', function (data) {
          $scope.users = data;
        },
        function (data) {
          $scope.error = data;
        });
    };
    $scope.getAllProjects = function(){
      Services.getAll('Projects',function(data) {
          $scope.projects = data;
        },
        function(data) {
          $scope.error = data;
        });
    };





    if ($routeParams) {
      $scope.getAllUsers();
      $scope.getAllProjects();
    }

  }]);
