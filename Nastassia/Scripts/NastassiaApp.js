var NastassiaApp = angular.module('NastassiaApp', ['ngRoute']);

NastassiaApp.controller('MainPageController', MainPageController);
NastassiaApp.controller('LoginController', LoginController);
NastassiaApp.controller('RegisterController', RegisterController);

NastassiaApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
NastassiaApp.factory('LoginFactory', LoginFactory);
NastassiaApp.factory('RegistrationFactory', RegistrationFactory);

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
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

NastassiaApp.config(configFunction);