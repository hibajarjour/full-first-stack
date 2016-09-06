var app = angular.module("myApp", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home/home.html',
        controller: 'homeCtrl'
    }).when('/blog', {
        templateUrl: 'pages/blog/blog.html',
        controller: 'blogCtrl'
    }).when('/blog/:blogID', {
        templateUrl: 'pages/blog/blog_single.html',
        controller: 'blogDetailCtrl'
    }).when('/classes', {
        templateUrl: 'pages/classes/classes.html',
        controller: 'classCtrl'
    }).when('/about', {
        templateUrl: 'pages/about/about.html',
        controller: 'aboutCtrl'
    }).when('/trainers', {
        templateUrl: 'pages/trainer/trainers.html',
        controller: 'trainerCtrl'
    }).when('/search', {
        templateUrl: 'pages/search.html'
    })
});