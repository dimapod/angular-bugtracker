'use strict';

describe('directive hover', function () {

    var $rootElement, $rootScope, $compile;

    beforeEach(inject(function(_$rootElement_, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $rootElement = _$rootElement_;
    }));

    afterEach(inject(function ($rootElement) {
        $rootElement.remove();
    }));

    var compileHtml = function(html) {
        $rootElement.html(html);
        $compile($rootElement)($rootScope);
        $rootScope.$apply();
    };

    var triggerEvent = function (eventName, elm) {
        var event = document.createEvent('MouseEvents');
        // https://developer.mozilla.org/en-US/docs/DOM/event.initMouseEvent
        event.initMouseEvent(eventName, true, true, window);
        elm.dispatchEvent(event);
    };

    it('should add active class when trigger mouseover event', function () {
        compileHtml('<div class="hover">Div body</div>');

        expect($rootElement.find('div')).toHaveClass('hover');
        triggerEvent('mouseover', $rootElement.find('div').eq(0)[0]);

        expect($rootElement.find('div').eq(0)).toHaveClass('active');
    });

    it('should remove active class when trigger mouseout event', function () {
        compileHtml('<div class="hover active">Div body</div>')

        expect($rootElement.find('div')).toHaveClass('hover');
        expect($rootElement.find('div')).toHaveClass('active');
        triggerEvent('mouseout', $rootElement.find('div').eq(0)[0]);

        expect($rootElement.find('div').eq(0)).toHaveNoClass('active');
    });

});
