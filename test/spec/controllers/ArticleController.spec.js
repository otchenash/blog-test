describe('Controller: ArticleListCtrl', function () {
    'use strict';

    // load the service's module
    beforeEach(module('blogApp'));

    var scope,
        $httpBackend,
        factory,
        article = {
            "_id": "53578db20bd5440c113a5642",
            "title": "Backbone12",
            "date": "3/12/2013",
            "lector": [
                "aliaksandr_arlou123"
            ],
            "description": "Lorem ipsum dolor sit"
        };


    // instantiate controller
    var articleCtrl;
    beforeEach(inject(function ($controller, $rootScope, $injector, $httpBackend) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'http://54.72.3.96:3000/techtalks/').respond(article);
        factory = $injector.get('ArticleListFactory');
        scope = $rootScope.$new();
        scope.article = article;
        articleCtrl = $controller('ArticleListCtrl', {
            $scope: scope
        });
        scope.$digest()

    }));

    it('should be article in scope', function(){
        expect(scope.article.description).toBe(article.description);
    });
});