var app = angular.module("Passport", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
     .when('/home', {
         templateUrl: 'view/home.html'
     })
    .when('/login', {
        templateUrl: 'view/login/login.html',
        controller: 'LoginCtrl'
    })
    .when('/logout', {
        templateUrl: 'view/logout/logout.html'
    })
    .when('/register', {
        templateUrl: 'view/register/register.html'
    })
    .when('/profile', {
        templateUrl: 'view/profile/profile.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
});