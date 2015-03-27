(function(global, ng) {
    'use strict';

    /**
     * Data factory responsible from posts.
     * @constructor
     * @class blogApp.data.ArticleListFactory
     * @extends {factory}
     */
    function ArticleListFactory($http){

        return {
            getAll : function(){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks',
                    method: 'GET'
                })
            },

            get : function(id){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks/' + id,
                    method: 'GET'
                })
            },

            add : function(data){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks/',
                    method: 'POST',
                    data: data
                }).then(function(){
                    location.reload();
                });
            },

            edit : function(id, data){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks/' + id,
                    method: 'PUT',
                    data: data
                }).then(function(){
                    location.reload();
                });
            },

            del : function(id){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks/' + id,
                    method: 'DELETE'
                }).then(function(){
                    location.reload();
                });
            }
        }
    }

    ng.module('blogApp.data').factory('ArticleListFactory', ['$http', ArticleListFactory]);

}(this, this.angular));
