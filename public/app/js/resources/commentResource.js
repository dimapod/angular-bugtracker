'use strict';

bugTrackerApp.factory('commentResource', function ($resource) {
    return $resource('/issue/:id/comments');
});
