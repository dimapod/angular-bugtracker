'use strict';

bugTrackerApp.factory('issueResource', function ($resource) {
    return $resource('../scripts/issues.json', {userId:'@id'} );
});
