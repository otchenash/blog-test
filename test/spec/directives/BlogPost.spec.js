describe('Directive: blogPost', function () {
    'use strict';

    // load the directive's module
    beforeEach(module('blogApp'));
    beforeEach(module('templates'));

    var element,
        scope,
        article = {
            _id: '53578db20bd5440c113a5642',
            title: 'Backbone12',
            date: '3/12/2013',
            lector : [
                "aliaksandr_arlou123"
            ],
            description : 'Lorem ipsum dolor sit amet.'
        };

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.article = article;
        element = angular.element('<blog-post></blog-post>');
        element = $compile(element)(scope);
        scope.$digest();
    }));

    it('title should be in head link', function () {
        expect(element.find('h3').find('a').text()).toBe(article.title);
    });

});


