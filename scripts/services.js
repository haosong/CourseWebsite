'use strict';

angular.module('adWebHW')
    .constant("baseURL", "http://songhao.iok.la/")
    .service('bookFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        this.getBooks = function () {
            var data = $resource(baseURL + "books/:id", null, {'update': {method: 'PUT', responseType: 'json'}});
            console.log(data);
            return data;
        };
    }])