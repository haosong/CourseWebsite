'use strict';

var app = angular.module('adWebHW', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'IndexController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })
            // route for the about page
            .state('app.about', {
                url: 'about',
                views: {
                    'content@': {
                        templateUrl: 'views/about.html',
                        controller: 'AboutController'
                    }
                }
            })
            // route for the contact page
            .state('app.contact', {
                url: 'contact',
                views: {
                    'content@': {
                        templateUrl: 'views/contact.html',
                        controller: 'ContactController'
                    }
                }
            })

            // route for the book page
            .state('app.book', {
                url: 'book',
                views: {
                    'content@': {
                        templateUrl: 'views/book.html',
                        controller: 'BookController'
                    }
                }
            })

            // route for the bookdetail page
            .state('app.bookdetails', {
                url: 'book/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/bookdetail.html',
                        controller: 'BookDetailController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    })

    app.filter('capitalize', function() {
        return function(input, scope) {
            if (input!=null)
                input = input.toLowerCase();
            return input.substring(0,1).toUpperCase()+input.substring(1);
        }
    });
;
