'use strict';

bugTrackerApp.factory('twitterResource', function ($resource, configTweet) {

    return $resource(configTweet.config.call.uri,
        { callback: 'JSON_CALLBACK' },
        { query: {method: configTweet.config.call.method} }
    );

});
