(function(global, ng) {
    'use strict';

    function ArticleListFactory($http){

        return {
            getAll : function(){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks',
                    method: 'GET'
                });
            },

            get : function(id){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks/' + id,
                    method: 'GET'
                });
            },

            add : function(data){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks/',
                    method: 'POST',
                    data: data
                });
            },

            edit : function(id, data){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks/' + id,
                    method: 'PUT',
                    data: data
                });
            },

            del : function(id){
                return $http({
                    url: 'http://54.72.3.96:3000/techtalks/' + id,
                    method: 'DELETE'
                });
            }
        }
    }

    ng.module('blogApp.data').factory('ArticleListFactory', ['$http', ArticleListFactory]);

}(this, this.angular));
