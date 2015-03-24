(function(global, ng) {

    'use strict';

    function BlogPost(){
        return {
            restrict: 'E',
            replace: true,
            scope: '=',
            templateUrl : 'app/templates/_post.html'
        }
    }

    ng.module('blogApp.controls').directive('blogPost', [BlogPost]);

}(this, this.angular));
