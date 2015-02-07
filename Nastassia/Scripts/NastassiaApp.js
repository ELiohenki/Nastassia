var NastassiaApp = angular.module('NastassiaApp', ['ngRoute']);

NastassiaApp.controller('MainPageController', MainPageController);
NastassiaApp.controller('LoginController', LoginController);

NastassiaApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:SomeNum', {
            templateUrl: function (params) { return '/routesDemo/two?SomeNum=' + params.SomeNum; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: 'account/Login',
            controller: LoginController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

NastassiaApp.config(configFunction);