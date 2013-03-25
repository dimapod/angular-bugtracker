'use strict';

bugTrackerApp.directive('animate', function ($timeout) {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            element.addClass('animate');
            $timeout(function () {
                element.removeClass('animate');
            }, 20, false);
        }
    };

});

bugTrackerApp.directive('fadey', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var duration = parseInt(attrs.fadey);
            if (isNaN(duration)) {
                duration = 500;
            }
            elm = jQuery(elm);
            elm.addClass('ui-animate').slideDown(duration, function() {
                elm.removeClass('ui-animate');
            });

            scope.destroy = function(complete) {
                elm.addClass('ui-animate-out').slideUp(duration, function() {
                    if (complete) {
                        complete.apply(scope);
                    }
                });
            };
        }
    };
});

bugTrackerApp.directive('diFadeIn', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attribs) {
            scope.$watch(attribs.diFadeIn, function (value) {
                if (value) {
                    element.fadeIn();
                } else {
                    element.fadeOut();
                }
            });
        }
    };
});
