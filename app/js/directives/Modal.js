(function(global, ng) {

    'use strict';

    function modalBlock(){
        return {
            restrict: 'E',
            replace: false,
            link: function () {

            },
            template:   '<div class="modal" ng-show="openModal">' +
                            '<div class="modal-content">' +
                                '<form>' +
                                    '<label>Author</label><input ng-model="author" type="text"/>' +
                                    '<label>Title</label><input ng-model="title" type="text"/>' +
                                    '<label>Text</label><textarea ng-model="text"></textarea>' +
                                '</form>' +
                                '<button ng-show="editModel.id" ng-click="save()">Save</button>' +
                                '<button ng-hide="editModel.id" ng-click="add()">Add Post</button>' +
                                '<button ng-click="closeModal()">Cancel</button>' +
                            '</div>' +
                        '</div>',
            controller: ['$scope', 'MapperService', 'BlogControlService', function($scope, MapperService, BlogControlService){
                $scope.save = function(){
                    var data = {};
                    data.title = $scope.title;
                    data.author = $scope.author;
                    data.text = $scope.text;
                    data.date = $scope.editModel.date;

                    var dataJson = ng.toJson(MapperService.getArticle(data).mapTo());
                    if($scope.editModel.id){
                        BlogControlService.editPost($scope.editModel.id, dataJson);
                        console.log('false');
                    }

                    BlogControlService.addPost(dataJson);
                };

                $scope.edit = function (article) {
                    $scope.editModel = article;
                    $scope.author = article.author;
                    $scope.title = article.title;
                    $scope.text = article.text;
                    $scope.openModal = true;
                };

                $scope.add = function () {
                    $scope.save();
                }
            }]

        }
    }

    ng.module('blogApp.controls').directive('modalBlock', [modalBlock]);

}(this, this.angular));
