'use strict';
/**
 * Created by webdev on 5/14/15.
 */


angular.module('pooIhmExemplesApp')



  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams','Services' , function ($scope,Services) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projectStr = "Projects";
    $scope.nishim = "nishim";


    //FUNCTIONS

    $scope.getAllProjects = function(){
      Services.getAll($scope.projectStr,function(data) {
          $scope.projects = data;
        },
        function(data) {
          $scope.error = data;
        });
    };

    $scope.getUserById = function(id){
      Services.getById($scope.projectStr,id,function(data) {
          $scope.project = data;
        },
        function(data) {
          $scope.error = data;
        });
    };

    $scope.addProject = function(project){
      Services.add($scope.projectStr,project,function(data) {
          //TODO show the new user
        },
        function(data) {
          $scope.error = data;
        });
    };

    $scope.delProject = function(id){
      Services.delete($scope.projectStr,id,function(data) {
          $scope.getAll();
        },
        function(data) {
          $scope.error = data;
        });
    };

    $scope.editProject = function(project){
      Services.edit($scope.projectStr,project,function(data) {
          //TODO show the edited user
        },
        function(data) {
          $scope.error = data;
        });
    };

    $scope.getUserCompInfo = function(id){
      Services.getCompInfo($scope.projectStr,id,function(data) {
          $scope.users = data;
        },
        function(data) {
          $scope.error = data;
        });
    };

    if ($routeParams.projectId) {
      Users.get($routeParams.projectId,
        function(data) {
          $scope.user = data;
        },
        function(data) {
          $scope.error = data;
        });
    }

  }]);
