'use strict';
/**
 * Created by jeanloicmugnier on 5/14/15.
 */
angular.module('pooIhmExemplesApp')
  .controller('FormCtrl', ['$scope', '$http', '$routeParams', '$sharedData', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  $scope.searchOptions = ['User Name','Project'];
  }]);
