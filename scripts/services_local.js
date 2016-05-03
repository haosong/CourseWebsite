'use strict';

angular.module('adWebHW')
    .service('bookFactory', function () {
        var books = [
            {
                "id": 0,
                "name": "Beginning Java EE 7",
                "image": "images/JavaEE7.jpg",
                "category": "mains",
                "label": "Hot",
                "price": 45.57,
                "amazon": "http://www.amazon.com/Beginning-Java-EE-Expert-Voice/dp/143024626X",
                "description": "Java Enterprise Edition (Java EE) continues to be one of the leading Java technologies and platforms. Beginning Java EE 7 is the first tutorial book on Java EE 7.",
                "comments": [
                    {
                        "rating": 5,
                        "comment": "Imagine all the eatables, living in conFusion!",
                        "author": "John Lemon",
                        "date": "2012-10-16T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        "author": "Paul McVites",
                        "date": "2014-09-05T17:57:28.556094Z"
                    },
                    {
                        "rating": 3,
                        "comment": "Eat it, just eat it!",
                        "author": "Michael Jaikishan",
                        "date": "2015-02-13T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Ultimate, Reaching for the stars!",
                        "author": "Ringo Starry",
                        "date": "2013-12-02T17:57:28.556094Z"
                    },
                    {
                        "rating": 2,
                        "comment": "It's your birthday, we're gonna party!",
                        "author": "25 Cent",
                        "date": "2011-12-02T17:57:28.556094Z"
                    }
                ]
            },
            {
                "id": 1,
                "name": "Inside XML",
                "image": "images/InsideXML.jpg",
                "category": "appetizer",
                "label": "",
                "price": 11.09,
                "amazon": "http://www.amazon.com/Inside-XML-New-Riders/dp/0735710201",
                "description": "Inside XML is an intelligent and easy-to-follow guide to today proliferating XML standards. Aside from being a road map to the latest and greatest in what is on the horizon with XML, this book gives you what you need to know to be productive with existing XML tools right now.",
                "comments": [
                    {
                        "rating": 5,
                        "comment": "Imagine all the eatables, living in conFusion!",
                        "author": "John Lemon",
                        "date": "2012-10-16T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        "author": "Paul McVites",
                        "date": "2014-09-05T17:57:28.556094Z"
                    },
                    {
                        "rating": 3,
                        "comment": "Eat it, just eat it!",
                        "author": "Michael Jaikishan",
                        "date": "2015-02-13T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Ultimate, Reaching for the stars!",
                        "author": "Ringo Starry",
                        "date": "2013-12-02T17:57:28.556094Z"
                    },
                    {
                        "rating": 2,
                        "comment": "It's your birthday, we're gonna party!",
                        "author": "25 Cent",
                        "date": "2011-12-02T17:57:28.556094Z"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Learning XML",
                "image": "images/LearningXML.jpg",
                "category": "appetizer",
                "label": "New",
                "price": 29.65,
                "amazon": "http://www.amazon.com/Learning-XML-Second-Erik-Ray/dp/0596004206",
                "description": "This second edition of the bestselling Learning XML provides web developers with a concise but grounded understanding of XML (the Extensible Markup Language) and its potential-- not just a whirlwind tour of XML.The author explains the important and relevant XML technologies and their capabilities clearly and succinctly with plenty of real-life projects and useful examples.",
                "comments": [
                    {
                        "rating": 5,
                        "comment": "Imagine all the eatables, living in conFusion!",
                        "author": "John Lemon",
                        "date": "2012-10-16T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        "author": "Paul McVites",
                        "date": "2014-09-05T17:57:28.556094Z"
                    },
                    {
                        "rating": 3,
                        "comment": "Eat it, just eat it!",
                        "author": "Michael Jaikishan",
                        "date": "2015-02-13T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Ultimate, Reaching for the stars!",
                        "author": "Ringo Starry",
                        "date": "2013-12-02T17:57:28.556094Z"
                    },
                    {
                        "rating": 2,
                        "comment": "It's your birthday, we're gonna party!",
                        "author": "25 Cent",
                        "date": "2011-12-02T17:57:28.556094Z"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Learning Three.js: The JavaScript 3D Library for WebGL",
                "image": "images/LearningThreeJS.jpg",
                "category": "dessert",
                "label": "",
                "price": 49.99,
                "amazon": "http://www.amazon.com/Learning-Three-js-JavaScript-Library-Second/dp/1784392219",
                "description": "Enhance your 3D graphics with light sources, shadows, advanced materials, and textures. Load models from external sources, and visualize and animate them directly from JavaScript. Each subject is explained using extensive examples that you can use directly and adapt for your own purposes.",
                "comments": [
                    {
                        "rating": 5,
                        "comment": "Imagine all the eatables, living in conFusion!",
                        "author": "John Lemon",
                        "date": "2012-10-16T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        "author": "Paul McVites",
                        "date": "2014-09-05T17:57:28.556094Z"
                    },
                    {
                        "rating": 3,
                        "comment": "Eat it, just eat it!",
                        "author": "Michael Jaikishan",
                        "date": "2015-02-13T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Ultimate, Reaching for the stars!",
                        "author": "Ringo Starry",
                        "date": "2013-12-02T17:57:28.556094Z"
                    },
                    {
                        "rating": 2,
                        "comment": "It's your birthday, we're gonna party!",
                        "author": "25 Cent",
                        "date": "2011-12-02T17:57:28.556094Z"
                    }
                ]
            },
            {
                "id": 4,
                "name": "PhoneGap: Beginners Guide, 3rd Edition",
                "image": "images/Phonegap.jpg",
                "category": "hybrid",
                "label": "",
                "price": 44.99,
                "amazon": "http://www.amazon.com/Learning-Three-js-JavaScript-Library-Second/dp/1784392219",
                "description": "This book is for web developers who want to be productive in the mobile market quickly. In fact, by using PhoneGap, it is possible to deploy native applications based on web standards. This book assumes a very small knowledge of HTML/CSS/JavaScript and mobile platforms, such as Android, BlackBerry, iOS, and Windows Phone, and takes the reader step-by-step into a deep overview of PhoneGap and its APIs.",
                "comments": [
                    {
                        "rating": 5,
                        "comment": "Imagine all the eatables, living in conFusion!",
                        "author": "John Lemon",
                        "date": "2012-10-16T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        "author": "Paul McVites",
                        "date": "2014-09-05T17:57:28.556094Z"
                    },
                    {
                        "rating": 3,
                        "comment": "Eat it, just eat it!",
                        "author": "Michael Jaikishan",
                        "date": "2015-02-13T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Ultimate, Reaching for the stars!",
                        "author": "Ringo Starry",
                        "date": "2013-12-02T17:57:28.556094Z"
                    },
                    {
                        "rating": 2,
                        "comment": "It's your birthday, we're gonna party!",
                        "author": "25 Cent",
                        "date": "2011-12-02T17:57:28.556094Z"
                    }
                ]
            },
            {
                "id": 5,
                "name": "Learning Ionic - Build Hybrid Mobile Applications with HTML5",
                "image": "images/LearningIonic.jpg",
                "category": "hybrid",
                "label": "",
                "price": 36.49,
                "amazon": "http://www.amazon.com/Learning-Three-js-JavaScript-Library-Second/dp/1784392219",
                "description": "Create hybrid mobile applications by combining the capabilities of Ionic, Cordova, and AngularJS. Reduce the time to market your application using Ionic, that helps in rapid application development. Detailed code examples and explanations, helping you get up and running with Ionic quickly and easily",
                "comments": [
                    {
                        "rating": 5,
                        "comment": "Imagine all the eatables, living in conFusion!",
                        "author": "John Lemon",
                        "date": "2012-10-16T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        "author": "Paul McVites",
                        "date": "2014-09-05T17:57:28.556094Z"
                    },
                    {
                        "rating": 3,
                        "comment": "Eat it, just eat it!",
                        "author": "Michael Jaikishan",
                        "date": "2015-02-13T17:57:28.556094Z"
                    },
                    {
                        "rating": 4,
                        "comment": "Ultimate, Reaching for the stars!",
                        "author": "Ringo Starry",
                        "date": "2013-12-02T17:57:28.556094Z"
                    },
                    {
                        "rating": 2,
                        "comment": "It's your birthday, we're gonna party!",
                        "author": "25 Cent",
                        "date": "2011-12-02T17:57:28.556094Z"
                    }
                ]
            }
        ];

        this.getBooks = function () {
            return books;
        };

        this.getBook = function (index) {
            return books[index];
        };
    });