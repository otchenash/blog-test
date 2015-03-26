describe('Filter: cutFilter', function () {
    'use strict';

    // load the service's module
    beforeEach(module('blogApp'));

    var scope,
        $httpBackend,
        factory,
        articles = [{
            "_id": "53578db20bd5440c113a5642",
            "title": "Backbone12",
            "date": "3/12/2013",
            "lector": [
                "aliaksandr_arlou123"
            ],
            "description": "Lorem ipsum dolor sit"
        },{
            _id: "53578db20bd5440c113a5642",
            title: "Backbone12",
            date: "3/12/2013",
            lector: ["aliaksandr_arlou123"],
            description: "Lorem ipsum dolor sit"
        },
        {
            "_id": "53578db20bd5440c113a564b",
            "title": "Chrome Extensions12",
            "author": "yauhen_karmyzau",
            "text": "Lorem ipsum dolor sit amet,."
        },
        {
            "_id": "53578db20bd5440c113a564b",
            "title": "Chrome Extensions12",
            "author": "yauhen_karmyzau",
            "text": "Lorem ipsum dolor sit amet,."
        }];


    // instantiate controller
    var articleCtrl;
    beforeEach(inject(function ($controller, $rootScope, $injector, $httpBackend) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'http://54.72.3.96:3000/techtalks').respond(articles);
        factory = $injector.get('ArticleListFactory');
        scope = $rootScope.$new();
        scope.articles = articles;
        articleCtrl = $controller('ArticlesListCtrl', {
            $scope: scope
        });
        scope.$digest()

    }));

    it('should receive articles in scope', function(){
        expect(scope.articles.length).toBe(4);
    });
});