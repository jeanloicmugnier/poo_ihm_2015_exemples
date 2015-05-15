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
          $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+$routeParams.id)
            .success(function (data) {
              if (data.status == "success") {
                $scope.user = data.data;
              }
            })                                                                                                                                                                                                                                                                                                 
        },
        function (data) {
          $scope.error = data;
        });
    };

    //$id = $sharedData.getId() ;
    //$name = $sharedData.getId() ;
    if ($routeParams.id) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+$routeParams.id)
        .success(function (data) {
          if (data.status == "success") {
            $scope.user = data.data;
          }
        });
    }

    //$scope.orig = angular.copy(user);
  }]);

