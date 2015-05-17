'use strict';
/**
 * Created by webdev on 5/16/15.
 */

angular.module('pooIhmExemplesApp')



  .controller('ProjectCtrl', ['$scope', '$routeParams','Services','$location','$route' , function ($scope,$routeParams ,Services,$location,$route) {
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
      $scope.project = angular.copy($scope.orig);
      $scope.valueModif=false;
    };

    $scope.ok = function(){
      $scope.project = angular.copy($scope.orig);
      $scope.valueModif=false;
    };

$scope.delProject = function(){
  Services.delete('Projects',$scope.project.id,function(data) {
      $location.path('/projects' );
    },
    function(data) {
      $scope.error = data;
    });
};

$scope.editProject = function(project){
  Services.edit('Projects',project,function(data) {
      Services.getById('Projects',$routeParams.id, function (data) {
        $scope.project = data.data;
        $route.reload();
      });
    },
    function(data) {
      $scope.error = data;
    });
};

    $scope.userRoles = [];
    var users = [];
    var roles = [];
    if ($routeParams.id) {
      Services.getById('Projects/',$routeParams.id,
        function (data) {
          $scope.project = data;
          $scope.orig= angular.copy($scope.project);
        },
        Services.getCompInfo('Projects',$routeParams.id,'Users',
          function (data) {
            users=data;
            $scope.proj =users;
          },
          Services.getCompInfo('Projects',$routeParams.id,'Roles',
            function (data) {
              roles = data;
              $scope.rol = roles;


              var user;
              var role;

              for(user=0;user<users.length;user++){
                for(role=0;role<roles.length;role++){
                  $scope.rolesNb=roles.length;
                  $scope.projNb=users.length;
                  if(users[user].id===roles[role].UserId){
                    var obj ={};
                    obj.name = users[user].name;
                    obj.surname = users[user].surname;
                    obj.role = roles[role].name;

                    $scope.userRoles.push(obj);
                  }
                }
              }
            }
          )))}


  }]);
