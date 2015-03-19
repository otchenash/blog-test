(function (global, ng) {

    'use strict';

    function MapperService($filter){
        this.getArticle = function(viewModel){
            var self = {},
                date = new Date();

            self.id = viewModel._id || 0;
            self.author = author(viewModel);
            self.title = viewModel.title;
            self.text = viewModel.description || viewModel.text;
            self.date = viewModel.date;

            function author(viewModel){
                if(typeof viewModel.lector === 'object') {
                    return viewModel.lector[0];
                }
                return viewModel.lector;
            }

            self.mapTo = function () {
                self.lector = new Array(viewModel.author);
                self.title = viewModel.title;
                self.description = viewModel.text;
                self.date = viewModel.date || $filter('date')(new Date(), 'M/d/yyyy');

                delete self.id;
                delete self.author;
                delete self.text;
                delete self.mapTo;

                return self;
            };

            return self;
        }
    }

    ng.module('blogApp.services').service('MapperService', ['$filter', MapperService]);

}(this, this.angular));