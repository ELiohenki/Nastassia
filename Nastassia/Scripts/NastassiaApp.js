var NastassiaApp = angular.module('NastassiaApp', ['ngRoute']);

NastassiaApp.controller('MainPageController', MainPageController);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo', {
            templateUrl: 'routesDemo/two'
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
}
configFunction.$inject = ['$routeProvider'];

NastassiaApp.config(configFunction);