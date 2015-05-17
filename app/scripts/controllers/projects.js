'use strict';
/**
 * Created by webdev on 5/14/15.
 */


angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$routeParams','Services','$location' , function ($scope,$routeParams ,Services,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projectStr = "Projects";

    $scope.actionSelected = 0;

    $scope.isSelected = function (x) {
      return $scope.actionSelected === x;
    };

    $scope.setAction = function (x) {
      $scope.actionSelected = x;
    };

    //FUNCTIONS

    $scope.getAllProjects = function(){
      Services.getAll($scope.projectStr,function(data) {
          $scope.projects = data;
        },
        function(data) {
          $scope.error = data;
        });
    };

    $scope.getProjectById = function(id){
      Services.getById($scope.projectStr,id,function(data) {
          $scope.project = data;
        },
        function(data) {
          $scope.error = data;
        });
    };

    $scope.addProject = function(){
      Services.add('Projects',$scope.newProject,function(data) {
          $location.path('/project/'+ data.id );
        },
        function(data) {
          $scope.error = data;
        });
    };



    if ($routeParams) {
      $scope.getAllProjects();
    }

  }]);
