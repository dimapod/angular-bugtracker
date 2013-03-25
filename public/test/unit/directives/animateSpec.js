'use strict';

describe('directive animate', function () {

    var $rootScope, $compile, $timeout;

    beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $timeout = _$timeout_;
    }));

    it('should have animate class when the dom is compiled', function () {
        var element = $compile('<div animate></div>')($rootScope);
        expect(element).toHaveClass('animate');
    });

    it('should remove animate class immediately after injection', function () {
        var element = $compile('<div animate></div>')($rootScope);
        $timeout.flush();
        expect(element).toHaveNoClass('animate');
    });

});
