'use strict';

bugTrackerApp.filter('archived', function() {
    var STATUS_ARCHIVED = 'archived';

    return function(input, show) {
        var out = [];
        angular.forEach(input, function(element) {
            if (element.status == STATUS_ARCHIVED && show) {
                out.push(element);
            } else
            if (element.status != STATUS_ARCHIVED && !show) {
                out.push(element);
            }
        });

        return out;
    };
});