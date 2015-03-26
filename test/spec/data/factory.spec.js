describe('Data: factory', function () {
    'use strict';

    // load the service's module
    beforeEach(module('blogApp'));

    // instantiate service
    var $httpBackend,
        factory,
        respond = [
            {
                "_id": "53578db20bd5440c113a5642",
                "title": "Backbone12",
                "date": "3/12/2013",
                "lector": [
                    "aliaksandr_arlou123"
                ],
                "description": "Lorem ipsum dolor sit"
            },
            {
                "_id": "53578db20bd5440c113a564b",
                "title": "Chrome Extensions12",
                "author": "yauhen_karmyzau",
                "text": "Lorem ipsum dolor sit amet,."
            }
        ];

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'http://54.72.3.96:3000/techtalks').respond(respond);
        factory = $injector.get('ArticleListFactory');
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should receive array', function () {
        var articles = factory.getAll();

        articles.then(function(result){
            expect(result.data.length).toBe(2);
            });

        $httpBackend.flush();
    });
});