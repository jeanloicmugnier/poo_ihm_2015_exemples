/**
 * Created by webdev on 5/6/15.
 */
angular.module('pooIhmExemplesApp')
  .controller('UserCtrl', ['$scope', '$http', '$routeParams', '$sharedData', function ($scope, $http, $routeParams,$sharedData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //$id = $sharedData.getId() ;
    //$name = $sharedData.getId() ;

  }]);

