'use strict';
/**
 * Created by webdev on 5/6/15.
 */
angular.module('pooIhmExemplesApp')
  .controller('UserCtrl', ['$scope', 'Services', '$http', '$routeParams', function ($scope,Services,$http,$routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.id = $routeParams.id;
    $scope.valueModif=false;

    $scope.setModif = function(bool){
      $scope.valueModif = bool;
    };
    $scope.isModif = function(){
      return $scope.valueModif ;
    };

    $scope.cancel = function(){
      $scope.user = angular.copy(orig);
    };

    $scope.editUser = function (user) {
      Services.edit($scope.userStr, user, function (data) {
          Services.getById('Users/'+$routeParams.id, function (data) {
              if (data.status == "success") {
                $scope.user = data.data;
              }
            })
        },
        function (data) {
          $scope.error = data;
        });
    };

    $scope.projRoles=[];

    //$id = $sharedData.getId() ;
    //$name = $sharedData.getId() ;
    var projs = [];
    var roles = [];


    if ($routeParams.id) {
      Services.getById('Users/',$routeParams.id,
        function (data) {
            $scope.user = data;
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
    )))};



    //$scope.orig = angular.copy(user);
  }]);

