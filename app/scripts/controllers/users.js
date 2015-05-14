'use strict';
/**
 * Created by webdev on 5/6/15.
 */
angular.module('pooIhmExemplesApp')

  .service('Users', ['$http', function Users($http) {
    this.getAll = function (param,successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/' + param)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };}])



    .controller('UsersCtrl', ['$scope', '$http', '$routeParams','Users' , '$sharedData', function ($scope,Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.usersStr = 'Users';
    $scope.getAllUsers = function(){
      Users.getAll($scope.userStr,function(data) {
          $scope.users = data;
        },
        function(data) {
          $scope.error = data;
        });
    };


    $scope.actionSelected=0 ;


    $scope.isSelected = function(x){
      return $scope.actionSelected===x;
    };
    $scope.setAction = function(x){
       $scope.actionSelected=x;
    };


  }]);
