(function(global, ng) {
    'use strict';

    function ArticlesListCtrl($scope, ArticleListFactory, MapperService ){

        ArticleListFactory.getAll()
            .then(function(result){
                 $scope.articles = result.data.map(function(item){
                    return MapperService.getArticle(item);
                });
            });

        $scope.del = function(id) {
            ArticleListFactory.del(id)
        };
    }

  ng.module('blogApp').controller('ArticlesListCtrl', ['$scope', 'ArticleListFactory', 'MapperService',  ArticlesListCtrl]);

}(this, this.angular));
