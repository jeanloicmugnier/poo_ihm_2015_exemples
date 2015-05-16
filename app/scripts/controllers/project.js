'use strict';
/**
 * Created by webdev on 5/16/15.
 */

angular.module('pooIhmExemplesApp')



  .controller('ProjectsCtrl', ['$scope', '$routeParams','Services' , function ($scope,$routeParams ,Services) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.setModif = function(bool){
      $scope.valueModif = bool;
    };
    $scope.isModif = function(){
      return $scope.valueModif ;
    };

    $scope.cancel = function(){
      $scope.user = angular.copy($scope.orig);
    };

    $scope.ok = function(){
      $scope.user = angular.copy($scope.orig);
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

  }]);
