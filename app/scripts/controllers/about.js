'use strict';

/**
 * @ngdoc function
 * @name nastassiaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nastassiaApp
 */
angular.module('nastassiaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
