'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', '$sharedData', function ($scope, $http, $routeParams,$sharedData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /*function getId($scope, $routeParams, BlogPost) {
      $scope.post = BlogPost.get({postId: $routeParams.postId});
    };

    var blogServices = angular.module('blogServices ', ['ngResource']);

    blogServices.factory('BlogPost', ['$resource',
      function($resource){
        return $resource('action/to/get/:postId.json', {}, {
          query: {method:'GET', params: { postId: 'all' }, isArray:true}
        });
      }]);*/


    $scope.modifHide=true;
    $scope.valuesHide=true;

    $scope.origs = angular.copy($scope.users);

    $scope.reset = function() {
      $scope.users = angular.copy($scope.orig);
      reloadRoute();
    };
    $scope.update = function() {
      $scope.orig = angular.copy($scope.data);
      reloadRoute();
    };


    $scope.reloadRoute = function() {
      $route.reload();
    };

    $scope.open = function(id) {
      $sharedData.setId(id);
    }
    $scope.toggleModif = function() {
      $scope.valuesHide = false;
      $scope.modifHide = false;
    };
    $scope.cancel = function() {
      $scope.valuesHide = true;
      $scope.modifHide= true;
      reset();

    };
    $scope.ok = function() {
      $scope.modifHide = true;
      update();
      //send the new data to the server
    };

    $('.action').hide();
    $('.userInfos').hide();


  $('#searchButton').click(function(){
    $('.action').hide();
    $('#search').show();
  })
    $('.modify').click(function(){
    $('.ok').show();
    $('.cancel').show();
  });
    $('.cancel').click(function(){
    $('.ok').hide();
    $('.cancel').hide();
  });

    $('.buttonUser').click(function(){
    });

    $('#buttonUser').click(function(){
    $('.action').hide();
    $('#search').show();
  });
    $('#deleteButton').click(function(){
    $('.action').hide();
    $('#delete').show();
  });
    $('#modifyButton').click(function(){
    $('.action').hide();
    $('#modify').show();
  });

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });
    }
  }]);
