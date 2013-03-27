'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

// -> use ddescribe(...) to execute only one given test suite
//    use xdescribe(...) to disable given test suite
describe('E2E test suite', function () {

    beforeEach(function () {
        browser().navigateTo('/index.html');
    });


    describe('routes', function () {

        ddescribe('default', function () {
            // -> use iit(...) to execute only one given test
            //    use xit(...) to disable the given test
            it('should redirect to issue path when route is not known', function () {

                // -> use the fallowing command to pause e2e test
                //pause();

                input('login').enter('tuser');
                input('name').enter('Test User');
                element(':button.btn-primary').click();


                expect(browser().location().url()).toBe('/issue');

                browser().navigateTo('#/unknown_root');
                expect(browser().location().url()).toBe('/issue');
            });
        });
    });

    describe('menu navigation', function () {
        describe('menu configuration', function () {
            beforeEach(function () {
                browser().navigateTo('../../app/index.html#/about');
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
            beforeEach(function () {
                browser().navigateTo('../../app/index.html#/about');
            });

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
            beforeEach(function () {
                browser().navigateTo('../../app/index.html#/issue');
            });

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
