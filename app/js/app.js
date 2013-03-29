'use strict';

var bugTrackerApp = angular.module('bugTrackerApp', ['ngResource', 'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/issue', {
                templateUrl: 'partials/issue.html',
                controller: 'issueCtrl'
            })
            .when('/add', {
                templateUrl: 'partials/add-issue.html',
                controller: 'addIssueCtrl'
            })
            .when('/edit/:issueId', {
                templateUrl: 'partials/edit.html',
                controller: 'editCtrl'
            })
            .when('/archive', {
                templateUrl: 'partials/archive.html',
                controller: 'issueCtrl'
            })
            .when('/about', {
                templateUrl: 'partials/about.html'
            })
            .when('/user', {
                controller: 'userCtrl',
                templateUrl: 'partials/user.html'
            })
            .otherwise({
                redirectTo: '/issue'
            });
    }]);


