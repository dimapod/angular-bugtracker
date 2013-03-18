'use strict';

var bugTrackerApp = angular.module('bugTrackerApp', ['ngResource', 'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/issue', {
                templateUrl: 'partials/issue.html',
                controller: 'issueCtrl'
            })
            .when('/add', {
                templateUrl: 'partials/add_issue.html',
                controller: 'addIssueCtrl'
            })
            .when('/edit', {
                templateUrl: 'partials/edit.html',
                controller: 'issueCtrl'
            })
            .when('/archive', {
                templateUrl: 'partials/archive.html',
                controller: 'archiveCtrl'
            })
            .when('/help', {
                templateUrl: 'partials/help.html'
            })
            .when('/user', {
                controller: 'userCtrl',
                templateUrl: 'partials/user.html'
            })
            .otherwise({
                redirectTo: '/issue'
            });
    }]);


