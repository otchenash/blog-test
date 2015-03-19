(function (global, ng) {

    'use strict';

    function BlogControlService(ArticleListFactory){

        this.editPost = function (id, data) {
            ArticleListFactory.edit(id, data)
                .then(function(){
                    location.reload();
                });
        };

        this.addPost = function (data) {
            ArticleListFactory.add(data)
                .then(function(){
                    location.reload();
                });
        };

        this.delPost = function (id) {
            ArticleListFactory.del(id)
                .then(function(){
                    location.reload();
                });
        }

    }

    ng.module('blogApp.services').service('BlogControlService', ['ArticleListFactory', BlogControlService]);

}(this, this.angular));
