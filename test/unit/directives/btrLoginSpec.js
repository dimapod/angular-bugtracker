'use strict';

describe('btrLogin directive', function () {
    var user, element;

    //beforeEach(module('app/js/directives/btrLogin.html'));

    beforeEach(module(function ($provide) {
        user = {};
        $provide.value('user', user);
    }));

    beforeEach(inject(function ($compile, $rootScope) {
        element = $compile('<btr-login></btr-login>')($rootScope);
        $rootScope.$apply();
    }));


//    beforeEach(function() {
//        // load template into $templateCache
//        module('app/js/directives/btrLogin.html');
//
//        module(function ($provide) {
//            user = {};
//            $provide.value('user', user);
//        });
//
//        inject(function ($compile, $rootScope) {
//            element = $compile('<btr-login></btr-login>')($rootScope);
//            $rootScope.$apply();
//        })
//    });


    xit("should display user's login", inject(function ($compile, $rootScope, user) {
        user.login = "firstUser";
        $rootScope.$apply();

        expect(element.text()).toMatch(/firstUser/);

        user.login = "changedUser";
        $rootScope.$apply();

        expect(element.text()).toMatch(/changedUser/);
    }));


    xit("should display a link to logout", inject(function ($compile, $rootScope) {
        var anchor = element.find('a');

        expect(anchor.attr('href')).toBe('#/user');
        expect(anchor.text()).toBe('Change');
    }));

});
