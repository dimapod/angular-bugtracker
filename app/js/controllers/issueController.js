'use strict';

bugTrackerApp.controller('issueCtrl', function ($scope, user, $location) {
    if (!user.login) {
        $location.url('/user');
    }
});
