'use strict';

// -> use ddescribe(...) to execute only one given test suite
//    use xdescribe(...) to disable given test suite
describe('E2E test suite', function () {

    // Login testing
    describe('login user', function() {
        beforeEach(function() {
            browser().navigateTo('/index.html#/user');
        });

        // -> use iit(...) to execute only one given test
        //    use xit(...) to disable the given test
        it('should disable form submission button when empty', function() {
            // -> use the fallowing command to pause e2e test
            //pause();

            input('login').enter('');
            input('name').enter('');

            expect(element(':button.btn-primary:disabled').count()).toEqual(1);
        });

        it('should persist user information', function() {
            input('login').enter('userLogin');
            input('name').enter('User Name');
            element(':button.btn-primary').click();

            // reload the page
            browser().navigateTo('/index.html#/user');

            expect(input('login').val()).toEqual('userLogin');
            expect(input('name').val()).toEqual('User Name');
        });

        it('should go to issues when successfully login', function() {
            input('login').enter('userLogin');
            input('name').enter('User Name');
            element(':button.btn-primary').click();

            expect(browser().location().url()).toBe('/issue');
        });
    });

    // Logout testing
    describe('logout user', function() {

        beforeEach(function() {
            //login
            browser().navigateTo('/index.html#/user');
            input('login').enter('userLogin');
            input('name').enter('User Name');
            element(':button.btn-primary').click();
        });

        // -> use iit(...) to execute only one given test
        //    use xit(...) to disable the given test
        it('should go to /user when logout', function() {
            browser().navigateTo('/index.html#/issues');
            element('.btr-login a').click();

            expect(browser().location().url()).toBe('/user');
        });
    });

    // Routes testing
    describe('routes', function () {

        it('should redirect to /user when not logged in', function () {
            browser().navigateTo('/index.html');
            // erase local storage user info
            window.localStorage['configuration'] = '{}'
            browser().navigateTo('/index.html#/issue');

            expect(browser().location().url()).toBe('/user');
        });

        describe('default route', function () {
            beforeEach(function() {
                //login
                browser().navigateTo('/index.html#/user');
                input('login').enter('userLogin');
                input('name').enter('User Name');
                element(':button.btn-primary').click();
            });

            it('should redirect to issue path when route is unknown', function () {
                expect(browser().location().url()).toBe('/issue');

                browser().navigateTo('#/unknown_root');
                expect(browser().location().url()).toBe('/issue');
            });
        });
    });

    // Navigation menu testing
    describe('menu navigation', function () {

        beforeEach(function () {
            //login
            browser().navigateTo('/index.html#/user');
            input('login').enter('userLogin');
            input('name').enter('User Name');
            element(':button.btn-primary').click();
        });

        describe('menu issue', function () {
            beforeEach(function () {
                browser().navigateTo('/index.html#/about');
            });

            it('should go to Issues view', function () {
                element('#issue a').click();
                expect(browser().location().url()).toBe('/issue');
            });

            it('should add class .active to Issues menu item (li tag)', function () {
                expect(element('#issue.active').count()).toBe(0);

                element('#issue a').click();

                // expect .active class to be set only for issue menu item
                expect(element('.active').count()).toBe(1);
                expect(element('#issue.active').count()).toBe(1);
            });
        });

        describe('menu archive', function () {
            it('should go to archive view', function () {
                element('#archive a').click();
                expect(browser().location().url()).toBe('/archive');
            });

            it('should add class .active to archive menu item (li tag)', function () {
                expect(element('#archive.active').count()).toBe(0);

                element('#archive a').click();

                // expect .active class to be set only for archive menu item
                expect(element('.active').count()).toBe(1);
                expect(element('#archive.active').count()).toBe(1);
            });
        });

        describe('menu about', function () {
            it('should go to issue view', function () {
                element('#about a').click();
                expect(browser().location().url()).toBe('/about');
            });

            it('should add class .active to about menu item (li tag)', function () {
                expect(element('#about.active').count()).toBe(0);

                element('#about a').click();

                // expect .active class to be set only for about menu item
                expect(element('.active').count()).toBe(1);
                expect(element('#about.active').count()).toBe(1);
            });
        });
    });

});
