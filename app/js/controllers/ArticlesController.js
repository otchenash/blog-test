(function(global, ng) {
    'use strict';

    function ArticlesListCtrl($scope, BlogControlService, ArticleListFactory, MapperService ){

         ArticleListFactory.getAll()
            .then(function(result){
                 $scope.articles = result.data.map(function(item){
                    return MapperService.getArticle(item);
                });
            });

        $scope.del = function(id) {
            BlogControlService.delPost(id)
        };




    }

  ng.module('blogApp').controller('ArticlesListCtrl', ['$scope', 'BlogControlService', 'ArticleListFactory', 'MapperService',  ArticlesListCtrl]);

}(this, this.angular));
