'use strict';

bugTrackerApp.factory('user', function ($rootScope, localStorage) {

    var LOCAL_STORAGE_ID = 'configuration',
        customerString = localStorage[LOCAL_STORAGE_ID];

    var configuration = customerString ? JSON.parse(customerString) : {
        login: undefined,
        name: undefined
    };

    $rootScope.$watch(function () {
        return configuration;
    }, function () {
        localStorage[LOCAL_STORAGE_ID] = JSON.stringify(configuration);
    }, true);

    return configuration;
});