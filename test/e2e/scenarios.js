'use strict';

// -> use ddescribe(...) to execute only one given test suite
//    use xdescribe(...) to disable given test suite
describe('E2E test suite', function () {

    // Login testing (/user view)
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

        it('should persist user information (to local storage)', function() {
            input('login').enter('e2eUser');
            input('name').enter('User Name');
            element(':button.btn-primary').click();

            // reload the page
            browser().navigateTo('/index.html#/user');

            expect(input('login').val()).toEqual('e2eUser');
            expect(input('name').val()).toEqual('User Name');
        });

        it('should go to /issue when successfully logged', function() {
            input('login').enter('e2eUser');
            input('name').enter('User Name');
            element(':button.btn-primary').click();

            expect(browser().location().url()).toBe('/issue');
        });
    });

    // Logout testing
    describe('logout user', function() {
        it('should go to /user when logout', function() {
            login();

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

        it('should redirect to issue path when route is unknown', function () {
            login();

            expect(browser().location().url()).toBe('/issue');

            browser().navigateTo('#/unknown_root');
            expect(browser().location().url()).toBe('/issue');
        });
    });

    // Navigation menu testing
    describe('menu navigation', function () {

        beforeEach(function () {
            login();
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
                expect(element('#issue.active').count()).toBe(1);
                expect(element('.active').count()).toBe(1);
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
                expect(element('#archive.active').count()).toBe(1);
                expect(element('.active').count()).toBe(1);
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
                expect(element('#about.active').count()).toBe(1);
                expect(element('.active').count()).toBe(1);
            });
        });
    });

    // Add view testing
    describe('add view', function () {
        beforeEach(function() {
            login();
        });

        it('should go to new issue view', function() {
            // click on "Reporn new issue" button
            element('a.btn-primary').click();

            expect(browser().location().url()).toBe('/add');
        });

        it('should have reporter field filled in', function() {
            browser().navigateTo('/index.html#/add');

            expect(input('issue.reporter').val()).toEqual('e2eUser');
        });

        it('should fail to submit when mandatory fields not filled', function() {
            browser().navigateTo('/index.html#/add');
            element('#submit').click();

            expect(browser().location().url()).toBe('/add');
        });

        it('should submit new issue', function() {
            browser().navigateTo('/index.html#/add');

            // Fill new issue fields
            var summary = 'E2E Summary ' + new Date();
            input('issue.product').enter('E2E Product');
            input('issue.version').enter('E2E Version');
            select('issue.severity').option('minor');
            input('issue.summary').enter(summary);
            input('issue.description').enter('E2E Description');
            element('#submit').click();

            expect(browser().location().url()).toBe('/issue');
            expect(element('table tbody tr:nth-child(1) td:nth-child(5)').text()).toEqual(summary)
        });
    });

    // Edit view testing
    describe('Edit view', function () {
        var summary;
        beforeEach(function() {
            login();

            // Add new issue
            browser().navigateTo('/index.html#/add');
            summary = 'E2E Edit Summary ' + new Date();
            input('issue.product').enter('E2E Edit Product');
            input('issue.version').enter('E2E Edit Version');
            select('issue.severity').option('minor');
            input('issue.summary').enter(summary);
            input('issue.description').enter('E2E Edit Description');
            element('#submit').click();

            browser().navigateTo('/index.html#/issue');
        });

        it('should have all fields filled in', function() {
            // Click on first issue in issue list
            element('table a:first').click();

            expect(input('issue.reporter').val()).toEqual('e2eUser');
            expect(input('issue.product').val()).toEqual('E2E Edit Product');
            expect(input('issue.version').val()).toEqual('E2E Edit Version');
            expect(input('issue.severity').val()).toEqual('minor');
            expect(input('issue.summary').val()).toEqual(summary);
            expect(input('issue.status').val()).toEqual('new');
            expect(input('issue.description').val()).toEqual('E2E Edit Description');
        });

        it('should edit issue (change status to confirmed)', function() {
            // Click on first issue in issue list
            element('table a:first').click();

            select('issue.status').option('confirmed');
            element('#submit').click();

            // Assert: first line in issue list has to be changed
            expect(element('table tbody tr:nth-child(1) td:nth-child(5)').text()).toEqual(summary);
            expect(element('table tbody tr:nth-child(1) td:nth-child(2)').text()).toEqual('confirmed')
        });

        // Comments
        it('should add a comment when edit issue', function() {
            // Click on first issue in issue list
            element('table a:first').click();

            // Fill comment field
            var comment = "Comment " + new Date();
            input('newComment.comment').enter(comment);
            element('#submit').click();

            // Click on first issue in issue list
            element('table a:first').click();

            // Asserts
            expect(element('.comment textarea').text()).toEqual(comment)
            expect(element('.comment b').text()).toEqual('e2eUser')
        });

        // Resolved
        it('should add class .resolved to resolved issue', function() {
            // Click on first issue in issue list
            element('table a:first').click();

            // Change status to Resolved
            select('issue.status').option('resolved');
            element('#submit').click();

            // Assert: first line in issue list has to have class .resolved
            expect(element('table tbody tr:nth-child(1).resolved').count()).toEqual(1);
        });

        // Archived issues
        it('should filter archived issues in /issue list', function() {
            // Add another issue (n2)
            browser().navigateTo('/index.html#/add');
            var summary2 = 'E2E Archive Summary ' + new Date();
            input('issue.product').enter('E2E Archive Product');
            input('issue.version').enter('E2E Archive Version');
            select('issue.severity').option('minor');
            input('issue.summary').enter(summary2);
            input('issue.description').enter('E2E Archive Description');
            element('#submit').click();

            // Click on first issue in issue list
            element('table a:first').click();

            // Change status to Archived
            select('issue.status').option('archived');
            element('#submit').click();

            // Assert: issue 2 has not to be in list
            expect(element('table tbody tr:nth-child(1) td:nth-child(5)').text()).toEqual(summary);

            // Go to archived list
            browser().navigateTo('/index.html#/archive');

            // Assert: issue n2 has has to be in archived list
            expect(element('table tbody tr:nth-child(1) td:nth-child(5)').text()).toEqual(summary2);
        });
    });

    function login() {
        browser().navigateTo('/index.html#/user');
        input('login').enter('e2eUser');
        input('name').enter('User Name');
        element(':button.btn-primary').click();
    }

});
