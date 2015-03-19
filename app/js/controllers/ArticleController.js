(function(global, ng) {
    'use strict';

    function ArticleListCtrl($scope, $location, ArticleListFactory, MapperService, BlogControlService){

        var pathArr = $location.path().split('/'),
            idIndex = pathArr.length - 1,
            id = pathArr[idIndex];

        ArticleListFactory.get(id)
             .then(function(result){
                $scope.articles = new Array(MapperService.getArticle(result.data));
         });

        $scope.del = function(id) {
            $location.path('/');
            BlogControlService.delPost(id)
        };
    }

  ng.module('blogApp').controller('ArticleListCtrl', ['$scope', '$location', 'ArticleListFactory', 'MapperService', 'BlogControlService', ArticleListCtrl]);

}(this, this.angular));
