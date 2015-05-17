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
    var projs = [];
    var roles = [];
    if ($routeParams.id) {
      Services.getById('Projects/',$routeParams.id,
        function (data) {
          $scope.project = data;
          $scope.orig= angular.copy($scope.project);
        },
        Services.getCompInfo('Users',$routeParams.id,'Projects',
          function (data) {
            projs=data;
            $scope.proj =projs;
          },
          Services.getCompInfo('Users',$routeParams.id,'Roles',
            function (data) {
              roles = data;
              $scope.rol = roles;


              var projet;
              var role;
              var index=0;
              $scope.projNb=projs.length;
              for(projet=0;projet<projs.length;projet++){
                for(role=0;role<roles.length;role++){
                  $scope.rolesNb=roles.length;
                  $scope.projNb=projs.length;
                  if(projs[projet].id===roles[role].ProjectId){
                    var obj ={};
                    obj.title = projs[projet].title;
                    obj.description = projs[projet].description;
                    obj.year = projs[projet].year;
                    obj.role = roles[role].name;
                    index = index++;
                    $scope.projRoles.push(obj);
                  }
                }
              }
            }
          )))}


  }]);
