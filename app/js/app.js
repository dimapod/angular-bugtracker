'use strict';

var bugTrackerApp = angular.module('bugTrackerApp', ['ngResource', 'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/issue', {
                templateUrl: 'partials/issue.html',
                controller: 'issueCtrl'
            })
            // EXO-1.1.1 (routes for /archive & /about)
            .when('/archive', {
                templateUrl: 'partials/archive.html',
                controller: 'issueCtrl'
            })
            .when('/about', {
                templateUrl: 'partials/about.html'
            })
            // EXO-2.1 (route for /user)
            .when('/user', {
                controller: 'userCtrl',
                templateUrl: 'partials/user.html'
            })
            // EXO-3.1 (route for /add)
            .when('/add', {
                templateUrl: 'partials/add-issue.html',
                controller: 'addCtrl'
            })
            .when('/edit/:issueId', {
                templateUrl: 'partials/edit.html',
                controller: 'editCtrl'
            })
            // EXO-1.1.2 (default route)
            .otherwise({
                redirectTo: '/issue'
            });

    }]);


