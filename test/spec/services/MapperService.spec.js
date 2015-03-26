describe('Service: mapper', function () {
    'use strict';

    // load the service's module
    beforeEach(module('blogApp'));

    var article = {
        title: 'Backbone12',
        lector: [
            "yauhen_karmyzau"
        ],
        text: 'Lorem ipsum dolor sit amet.'
    };

    // instantiate service
    var mapperService;
    beforeEach(inject(function ($injector) {
        mapperService = $injector.get('MapperService');
    }));

    it('should update object', function(){
        var newArticle = mapperService.getArticle(article);
        expect(article.lector[0]).toBe(newArticle.author)
    });
});