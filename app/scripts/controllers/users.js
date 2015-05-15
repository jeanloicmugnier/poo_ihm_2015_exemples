'use strict';
/**
 * Created by webdev on 5/6/15.
 */
angular.module('pooIhmExemplesApp')

    .controller('CreateCtrl', ['$scope', '$http', '$routeParams', '$sharedData', function (Services,$scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  }])

    .controller('UsersCtrl', ['$scope', '$http', '$routeParams','Services' , function ($scope,$http,$routeParams,Services) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];

        $scope.userStr = 'Users';

        $scope.actionSelected = 0;


        $scope.isSelected = function (x) {
          return $scope.actionSelected === x;
        };

        $scope.setAction = function (x) {
          $scope.actionSelected = x;
        };


        //FUNCTIONS

      $scope.addUser = function (user) {
        Services.add($scope.userStr, user, function (data) {
            //TODO show the new user
          },
          function (data) {
            $scope.error = data;
          });
      }

        $scope.getAllUsers = function () {
          Services.getAll($scope.userStr, function (data) {
              $scope.users = data;
            },
            function (data) {
              $scope.error = data;
            });
        };

        $scope.getUserById = function (id) {
          Services.getById($scope.userStr, id, function (data) {
              $scope.user = data;
            },
            function (data) {
              $scope.error = data;
            });
        };


        $scope.delUser = function (id) {
          Services.delete($scope.userStr, id, function () {
              $scope.getAll();
            },
            function (data) {
              $scope.error = data;
            });
        };

        $scope.getUserCompInfo = function (id) {
          Services.getCompInfo($scope.userStr, id, function (data) {
              $scope.users = data;
            },
            function (data) {
              $scope.error = data;
            });
        };

        if ($routeParams) {
          $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/')
            .success(function (data) {
              if (data.status == "success") {
                $scope.users = data.data;
              }
            });
        }
        }]);
