'use strict';
/**
 * Created by jeanloicmugnier on 5/14/15.
 */
angular.module('pooIhmExemplesApp')
  .controller('SearchCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.searchedParam = 'username';

    $scope.setParam = function(x){
      $scope.searchedParam = x;
    };


  }]);
