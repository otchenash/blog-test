describe('Directive: blogPost', function () {
    'use strict';

    // load the directive's module
    beforeEach(module('blogApp'));
    beforeEach(module('templates'));

    var element,
        scope,
        editModel = {
            title: 'Backbone12',
            author: 'aliaksandr_arlou123',
            text: 'Lorem ipsum dolor sit amet.'
        };

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.editModel = editModel;
        element = $compile('<modal-block></modal-block>')(scope);
        scope.$digest();
    }));

    it('title should be in input#title', function () {
        var el = element[0].querySelector('#title'),
            elVal = el.value;
        expect(elVal).toBe(editModel.title);
    });

});


