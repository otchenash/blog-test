(function(global, ng) {
    'use strict';

    function BodyCtrl($scope, MapperService, ArticleListFactory){
        $scope.openModal = false;

        $scope.closeModal = function () {
            $scope.openModal = !$scope.openModal;
        };

        $scope.addNewPost = function(){
            $scope.openModal = true;
            $scope.edit('');
        };

        $scope.save = function(perm){
            if(perm){
                return false;
            }
            var dataJson = ng.toJson(MapperService.getArticle($scope.editModel).mapTo());
            if($scope.editModel.id){
                ArticleListFactory.edit($scope.editModel.id, dataJson);
            }
            ArticleListFactory.add(dataJson);
        };

        $scope.edit = function (article) {
            $scope.editModel = article;
            $scope.openModal = true;
        };
    }

  ng.module('blogApp').controller('BodyCtrl', ['$scope', 'MapperService', 'ArticleListFactory', BodyCtrl]);

}(this, this.angular));
