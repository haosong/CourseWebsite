- [Document of Ad Web Homework 1](#document-of-ad-web-homework-1)
  - [Abstract](#abstract)
  - [1. Demo的下载和部署](#1-demo%E7%9A%84%E4%B8%8B%E8%BD%BD%E5%92%8C%E9%83%A8%E7%BD%B2)
    - [1.1 项目下载](#11-%E9%A1%B9%E7%9B%AE%E4%B8%8B%E8%BD%BD)
    - [1.2 Node.js安装和部署](#12-nodejs%E5%AE%89%E8%A3%85%E5%92%8C%E9%83%A8%E7%BD%B2)
  - [2. AngularJS](#2-angularjs)
    - [2.1 Angular Expression](#21-angular-expression)
    - [2.2 Angular Modules](#22-angular-modules)
    - [2.3 Angular Data Binding](#23-angular-data-binding)
    - [2.4 Angular Directive](#24-angular-directive)
      - [2.4.1 ng-repeat](#241-ng-repeat)
      - [2.4.2 ng-submit](#242-ng-submit)
      - [2.4.3 ng-click](#243-ng-click)
      - [2.4.4 ng-src](#244-ng-src)
      - [2.4.5 ng-if](#245-ng-if)
      - [2.4.6 ng-show](#246-ng-show)
      - [2.4.7 More](#247-more)
    - [2.5 Angular Filters](#25-angular-filters)
    - [2.6 Dependency Injection](#26-dependency-injection)
    - [2.7 UI-Route](#27-ui-route)
    - [2.8 Angular Service](#28-angular-service)
    - [2.9 Angular ngResource](#29-angular-ngresource)
  - [3. Node.js](#3-nodejs)
    - [3.1 Express.js](#31-expressjs)
    - [3.2 RESTful API](#32-restful-api)


# Document of Ad Web Homework 1

## Abstract
Homewwork 1利用AngularJS和Node.js技术搭建了一个简易课程主页的Single Page Application(SPA)。这份文档将介绍搭建这个网站所运用到的部分技术。
- Demo Link: [song-hao.github.io](http://song-hao.github.io/AdWebHW1)
- Repo Link: [Github](https://github.com/song-hao/AdWebHW1)

## 1. Demo的下载和部署

### 1.1 项目下载
```
$ git clone https://github.com/song-hao/AdWebHW1.git
$ npm install
$ bower install
```
- 项目配置了bower.json和package.json，可以使用 npm 或 [bower](http://bower.io/) 进行包管理。但为了避免部署的麻烦(且Dependencies体积较小)，包的目录"/app/components"并未加入.gitignore内，所以可以不用进行 ``$ npm install`` 或 ``$ bower install``。
- Repo中有两个分支 ``master`` 和 ``gh-pages``，``gh-pages``为纯静态项目，所有后台数据已存入 ``services_local.js`` 中。[Demo](http://song-hao.github.io/AdWebHW1) 即为纯静态项目，因此提交评论和意见功能无法使用。

### 1.2 Node.js安装和部署
项目（``master``分支）会利用 [Node.js](https://nodejs.org/en/) server对后台json数据进行读写操作。
在[Node.js官网](https://nodejs.org/en/)下载Node.js安装包并安装。然后，在终端中输入以下命令安装Express.js等依赖文件：
```
npm install express --save
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```
安装完成后，在 ``./server`` 目录下运行以下命令来开启Node.js server:
```
$ node server.js
```

## 2. AngularJS
### 2.1 Angular Expression
AngularJS运用Expression技术，将数据绑定入HTML中。Expression通常有两种语法：``{{Your Expression}}`` 和 ``ng-bind="Your Expression"``。

从Demo``./app/view``中的各个.html可以看出，其中均包含了大量的Expression操作。Expression作为AngularJS中最基本的技术，被大量的使用。

下面的例子说明了Expreession是如何将quantity和cost的数据写入到HTML中的。
```html
<html>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <body>
        <div ng-app="" ng-init="quantity=1;cost=5">
            <p>Total in dollar: {{ quantity * cost }}</p>
        </div>
    </body>
</html>
```
Try it on [Plunker](http://plnkr.co/edit/T7DlH0i1WLyKau7lcuPB)

- 其中 ``ng-app`` 用来初始化一个 AngularJS 应用程序， ``ng-init`` 指令用来初始化应用程序数据。

### 2.2 Angular Modules
上述代码在HTML中直接进行了逻辑操作，这并不是很好的设计。为了分离view和logic，我们引入 ``ng-app`` 和 ``ng-controller``， 将逻辑操作移入到单独的javascript文件 ``app.js`` 和 ``controller.js`` 中：

- index.html
```html
<html>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <body>
        
        <div ng-app="myApp" ng-controller="myCtrl">
            <p>Total in dollar: {{ quantity * cost }}</p>
        </div>
        
        <script src="app.js"></script>
        <script src="controller.js"></script>
        
    </body>
</html>
```
- app.js
```javascript
var app = angular.module("myApp", []);
```
- controller.js
```
app.controller("myCtrl", function($scope) {
    $scope.quantity = 1;
    $scope.cost = 5;
});
```
Try it on [Plunker](http://plnkr.co/edit/JUKzbZPoLYRJEYuXyXE0)

- AngularJS 应用程序由 ``ng-app`` 定义。应用程序在`` <div> ``内运行。
- ``ng-controller="myCtrl"`` 属性是一个 AngularJS 指令。用于定义一个控制器。``myCtrl`` 函数是一个 JavaScript 函数。
- AngularJS 使用``$scope`` 对象来调用控制器。在 AngularJS 中， ``$scope`` 是一个应用象(属于应用变量和函数)。控制器的 ``$scope`` （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象。控制器在作用域中创建了两个属性 (quantity 和 cost)。

在本次Homework中，也采用了类似的设计。所有的逻辑处理全部交由``./app/scripts``中的javascript文件处理。目录中的 ``*_local.js`` 文件为 ``gh-pages`` 分支专用，省略了与Node.js server相关的处理。

### 2.3 Angular Data Binding
结合以上的技术，我们可以实现一个简易的双向绑定例子：
```html
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
    
    <div ng-app="myApp" ng-controller="myCtrl">
        Name: <input ng-model="name">
        <h1>You entered: {{name}}</h1>
    </div>

    <script>
        var app = angular.module('myApp', []);
            app.controller('myCtrl', function($scope) {
            $scope.name = "Test Two-way Binding";
    });
    </script>

</body>
</html>
```
Try it on [Plunker](http://plnkr.co/edit/GhVmCUPsuVSzrXJw0p5v)

- 在这个例子中我们为``<input>``添加了一个``ng-model``指令。它可以绑定数据到``<input>``，``<select>``，``<textarea>``等元素的输入域中。当用户在``<input>``中输入字符串时，``name`` 变量会获取该字符串，然后在 ``<h1>`` 中显示出这个 ``name`` 变量中的字符串。因此前端输入、显示和后端变量是双向绑定的。

在Homework 1中有两个地方可以直观的看到双向绑定的效果，分别是:

- [Bookdetail](http://song-hao.github.io/AdWebHW1/index.html#/book/0) 页面：
![](http://pan01.qiniudn.com/adwebhw1/1.png)

- [Contact](http://song-hao.github.io/AdWebHW1/index.html#/contact) 页面：
![](http://pan01.qiniudn.com/adwebhw1/2.png)

### 2.4 Angular Directive
AngularJS 通过被称为“指令(Directive)” 的新属性来扩展 HTML。AngularJS 通过内置的指令( ``ng-`` )来为应用添加功能。
除了之前在2.1、2.3中提到的 ``ng-app`` , ``ng-init`` 和 ``ng-model`` 外，AngularJS还提供了很多Directive，下面简单介绍一下常用的Directiv。

#### 2.4.1 ng-repeat
``ng-repeat`` 被用来重复一个HTML元素。例如将其加入 ``<li>`` 标签中，在这个列表会被重复显示。其语法为``<div ng-repeat="(key, value) in myObj"> ... </div>``, Angular会遍历myObj中的所有元素并将它们全部显示，例如下面这个例子：
```html
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script></head>
<body>

    <div ng-app="" ng-init="myObj=['id_1','id_2','id_3']">
        <p>使用 ng-repeat 循环数组</p>
        <ul>
            <li ng-repeat="id in myObj">
                {{ id }}
            </li>
        </ul>
    </div>
    
</body>
</html>
```
Try it on [Plunker](http://plnkr.co/edit/BiLVSxmqOOhLapkfyC3s)

在Homework中，[Contact](http://song-hao.github.io/AdWebHW1/index.html#/contact) 和 [Bookdetail](http://song-hao.github.io/AdWebHW1/index.html#/book/0) 页面，均使用了``ng-repeat``来循环显示信息。例如在bookdetail.html中，重复显示评论：
```html
<ul class="media-list ">
    <li class="media " ng-repeat="comment in book.comments | orderBy:  '-' + sortBy">
        <div class="media-body ">
        <blockquote>
            <p>{{comment.rating}} Stars</p>
            <p>{{comment.comment}}</p>
            <footer>{{comment.author}}, <span>{{comment.date | date}}</span></footer>
        </blockquote>
        </div>
        <hr style="margin: 10px">
    </li>
</ul>
```
[Book](http://song-hao.github.io/AdWebHW1/index.html#/book) 页面：
![](http://pan01.qiniudn.com/adwebhw1/ng_repeat.png)

#### 2.4.2 ng-submit
``ng-submit`` 会阻止原生的submit事件，并绑定AngularJS的函数，以此增强submit操作。下面这个例子显示了如何通过 ``ng-submit`` 将表单中的数据传输至controller中，并进行记录。以此实现对所有历史表单输入的存储，然后通过双向绑定在前端展现出输入历史：
```html
<html>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<body ng-app="submitExample">
  <script>
  angular.module('submitExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);
  </script>
  <form ng-submit="submit()" ng-controller="ExampleController">
    Enter text and hit enter:
    <input type="text" ng-model="text" name="text" />
    <input type="submit" id="submit" value="Submit" />
    <pre>list={{list}}</pre>
  </form>
</body>
</html>
```
Try it on [Plunker](http://plnkr.co/edit/1c5xj2yepy8tqxLDCamO)

在Homework中，所有的表单均通过``ng-submit``传输至Controller，并由Controller传输至Service模块，最终传输至Node.js Server。例如contact.html中feedback表单的提交：
```html
<form class="form-horizontal" name="feedbackForm" ng-submit="sendFeedback()" novalidate>
```

#### 2.4.3 ng-click
在传统的HTML中，我们可以通过设置onclick属性然后依靠一个javascript函数了，完成对一个点击动作的自定义。
在AngularJS中我们可以通过 ``ng-click`` 来简化这样的操作，例如：
```html
<html>
<head>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
<body ng-app="">
    <button ng-click="count = count + 1" ng-init="count=0">
        count++
    </button>
    <span>count: {{count}}</span>
</body>
</html>
```
Try it on [Plunker](https://plnkr.co/edit/rttxTcprLQkUx8Zl3TCq)

在Homework中，book.html页面通过 ``ng-click`` 改变变量 ``SortBy`` 的值，以实现对评论的不同排序方式。
```html
<ul class="dropdown-menu">
    <li><a ng-click="sortBy = 'rating'">Rating</a></li>
    <li><a ng-click="sortBy = 'author'">Author</a></li>
    <li><a ng-click="sortBy = 'date'">Date</a></li>
</ul>
```
[Bookdetail](http://song-hao.github.io/AdWebHW1/index.html#/book/0) 页面:
![](http://pan01.qiniudn.com/adwebhw1/4.png)

#### 2.4.4 ng-src
从2.1中可以看出，AngularJS能通过Expression将数据绑定到HTML中。但是如果想将一个变量赋值给img的src属性，就会有一个Bug。src会将引号内的字符串直接解析为URL。因此我们需要通过 ``ng-src`` 来正确设置img的src。例如：
```html
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
    <div ng-app="" ng-init="url='AngularJS-large.png'">
        <img ng-src="https://angularjs.org/img/{{url}}">
    </div>
</body>
</html>
```
在Homework中，所有book的img src地址均存储在后台JSON中，通过 ``ng-src`` 这种方式在HTML中显示。

#### 2.4.5 ng-if
``ng-if`` 通过判断参数中的值，来决定是否显示一个元素。下面这个例子展示了如何运用 ``ng-if`` 来使checkbox控制两个 ``<span>`` 中内容的显示和隐藏：
```html
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script></head>
<body>
    <div ng-app="">
        <label><input type="checkbox" ng-model="checked" ng-init="checked=true" />Show: </label>
        <span ng-if="checked">This span is visiable when the checkbox is checked.</span>
        <span ng-if="!checked">This span is visiable when the checkbox is unchecked.</span>
    </div>
</body>
</html>
```
Try it on [Plunker](http://plnkr.co/edit/AQ5QEMypyrvkdXzypHzC)

在Homework中，``ng-if`` 被用来在server端获取数据出错时，显示错误信息。例如在bookdetail.html中：
```
<div class="col-xs-12" ng-if="!showBook">
    <h3>{{errormessage}}</h3>
</div>
<div class="col-xs-12" ng-if="showBook">
    ......
</div>
```

#### 2.4.6 ng-show
2.4.10的``ng-if``可以根据某一个表达式，选择两种内容来显示。如果我们只需要当表达式为true的时候，显示一个元素，那么可以用``ng-show``来处理。

从直觉上来说，似乎所有的 ``ng-show`` 都可以用 ``ng-if`` 处理。有一个细微的区别是，``ng-show``, ``ng-hide``, 只是将元素的display设置为none。而 ``ng-if`` 会从DOM中完全移除一个元素。

在Homework中，[Contact](http://song-hao.github.io/AdWebHW1/index.html#/contact) 页面Feedback表单即使用 ``ng-show`` 来提示错误信息。

#### 2.4.7 More
除了以上这些指令外，Homework还用到其他一些指令例如ng-disabled, ng-required, ng-selected等。除此以外，更多的指令可以在AngulrJS的[官方API](https://docs.angularjs.org/api/ng/directive)获取到详细的使用方法。

### 2.5 Angular Filters
除了Directive外，Angular Filter也是一个非常强大的功能。

```html
<html>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
<body ng-app="myApp">
  <script>
  angular.module('myApp', []);
  </script>
  <span>1. Currency Filter: {{1234567.89 | currency}}</span><br>
  <span>2. Date Filter: {{1462323623006 | date:'yyyy-MM-dd HH:mm:ss Z'}}</span><br>
  <span>3. Uppercase Filter: {{'abcd' | uppercase}}</span><br>
  <span>4. Lowercase Filter: {{'ABCD' | lowercase}}</span><br>
  <span>5. OrderBy Filter: {{[10,13,24,8,3,78] | orderBy}}</span>
</body>
</html>
```
Try it on [Plunker](https://plnkr.co/edit/rXueW2DYfUEYw34eh8GO)

在Homework中这些基本类型都被运用到。其中OrderBy可以通过变量进行排序。在 ``bookdetail.html``中我们运用这种特性来进行评论的排序。首先通过2.4.3中所说的 ``ng-click`` 来对 ``sortBy`` 变量进行赋值，赋值为rating, author, date。然后再orderBy时将这个变量传入，于是 ``ng-repeate`` 便会按照对应的顺序显示所有的评论。
结合 ``ng-repeate``, ``ng-click`` 和 ``orderBy Filter`` 可以方便的产生这样一个评论的展示与排序。
```html
<ul class="media-list ">
    <li class="media " ng-repeat="comment in book.comments | orderBy: sortBy">
        <div class="media-body ">
        <blockquote>
            <p>{{comment.rating}} Stars</p>
            <p>{{comment.comment}}</p>
            <footer>{{comment.author}}, 
            <span>{{comment.date | date}}</span></footer>
        </blockquote>
        </div>
    </li>
</ul>
```
除了AngularJS提供的Filter以外，我们还可以自定义Filter。在Homework中，自定义了一个首字母大写的 ``capitalize`` Filter:
```javascripte
// FILE: app.js
app.filter('capitalize', function() {
    return function(input, scope) {
        if (input!=null)
            input = input.toLowerCase();
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});
```
定义完成后就可以在HTML中通过标准Filter语法 ``{{someString | capitalize}}`` 直接调用了。

### 2.6 Dependency Injection
依赖注入是AngularJS中的重要概念。在Homework中，我们可以在controller.js中见到大量的依赖注入。对一个Controller来说，标准的依赖注入格式如下（可能有时可以见到更简洁的写法，AngularJS也确实支持一些简化的依赖注入写法。但那些写法会在Minify代码的时候产生一些奇怪的Bug）：
```
someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope, dep1, dep2) {
    ...
    $scope.aMethod = function() {
    ...
    }
    ...
}]);
```
- 这段代码为someModule创建了一个名叫MyController的controller，其中包含一个方法叫aMethod。这个controller依赖与dep1和dep2.
 
以Homework中的一个Controller为例：
```
.controller('BookDetailController', ['$scope', '$stateParams', 'bookFactory', function($scope, $stateParams, bookFactory) {
    ......
}])
```
这段代码为 [Bookdetail](http://song-hao.github.io/AdWebHW1/index.html#/book/0) 页面的Controller。它注入了三个依赖分别是：controller所在元素的作用域 ``$scope``， book的id ``'$stateParams'`` 和 与后台交互获取具体数据的 ``bookFactory``。
关于Dependency Injection这种设计的优劣，可以参考[Wikipedia](https://en.wikipedia.org/wiki/Dependency_injection)上的介绍。

### 2.7 UI-Route
UI-Route是这个SPA的骨架。制作一个拥有多页面的网站时，页面直接的链接和指向是关键的。此外对于一个常见的header,body,footer三段式设计的站点，我们往往只需要改变body的内容。UI-Route将会帮助我们实现这样的设计。
在Homework中，路由定义在app.js的中：
```javascript
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {templateUrl: 'views/header.html'},
                    'content': {templateUrl: 'views/home.html'},
                    'footer': {templateUrl: 'views/footer.html'}
                }
            })
            // route for the about page
            .state('app.about', {
                url: 'about',
                views: {
                    'content@': {
                        templateUrl: 'views/about.html'
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

```
通过这样一段路由代码，我们确定了AngularJS App在各个状态下，网站的显示内容。整个app的header和footer固定为两个HTML，在不同的状态下，content内容动态改变。比如在 ``app.about`` 下，content会变成about.html.

整个Homework的页面逻辑如下：
![](http://pan01.qiniudn.com/adwebhw1/ui_route.png)
### 2.8 Angular Service
在使用 Angular 时，可能会很自然地就会往 controller 堆满不必要的逻辑。但一个好的设计，controller 这一层应该是很薄；也就是说，应用里大部分的业务逻辑和持久化数据都应该放在 service 里。

为了更好的降低耦合，我们可以把一下功能封装为service。在Angular中已经内置了不少service，比如 ``$location``, ``$http``, ``$log``  service分别提供URL地址，XMLHttpRequest，和日志服务。

在Homework中为了分离与服务器端的操作，自定义了两个service：bookFactory 和 feedbackFactory。以bookFactory为例：
```javascript
.service('bookFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
    this.getBooks = function () {
        var data = $resource(
            baseURL + "books/:id",null, {
            'update': {
                method: 'PUT',
                responseType: 'json'}
            });
        console.log(data);
        return data;
    };
}])
```
这个bookFactory会注入``$resource``和URL信息，然后通过下一结将会讲到的resource的功能，与Node.js server进行数据交互。
除了Service外，Factory和Provider，也有类似的功能，三者之间有些细微的差别，但作用是相似的。可以在Angular JS官方API查看具体语法。

### 2.9 Angular ngResource
在Angular中，可以通过 ``$Http`` service提供的GET,POST,PUT等方法进行数据传输的处理。更多使用方法见[官方API](https://docs.angularjs.org/api/ng/service/)。等这种底层方法的使用比较繁复。

``$resource`` 是一个依赖 ``$Http`` 的服务组件，它创建了一个资源对象，让你与RESTful服务器端数据源实现交互的工厂。有了这个客户端我们可以用一种更简单的方式来发送XHR请求，返回的是资源对象。这种更高层的封装，使得我们不用去关心更底层的 ``$http`` 服务交互操作方法（HTTP方法，URL等）。
ngResource的安装命令为：
```
npm install angular-resource
bower install angular-resource
```
- 由包管理方式，选择一条命令进行安装。

在Homework中，service.js中的两个service均是采用ngResource技术与Node.js server进行数据交互


## 3. Node.js
简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，轻量又高效。
### 3.1 Express.js
Express 是一个简洁而灵活的 node.js Web应用框架,提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
Express 不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 Web 应用所需的基本功能。
通过以下两行代码，可以声明一个基于Express的Node.js server：
```javascript
var express = require('express');
var app = express();
```
然后通过listen函数开启服务端口：
```
var server = app.listen(3000, "localhost", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('\nNodeJS Server is running at: http://%s:%s\n\nServer Log:\n', host, port);
});
```
借助Express.js，可以非常快速地完成Homework中所需的RESTful开发。

### 3.2 RESTful API
Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序，可使用开放的XML（标准通用标记语言下的一个子集）标准来描述、发布、发现、协调和配置这些应用程序，用于开发分布式的互操作的应用程序。

基于 REST 架构的 Web Services 即是 RESTful。由于轻量级以及通过 HTTP 直接传输数据的特性，Web 服务的 RESTful 方法已经成为最常见的替代方法。可以使用各种语言（比如 Java 程序、Perl、Ruby、Python、PHP 和 Javascript[包括 Ajax]）实现客户端。

RESTful Web 服务通常可以通过自动客户端或代表用户的应用程序访问。但是，这种服务的简便性让用户能够与之直接交互，使用它们的 Web 浏览器构建一个 GET URL 并读取返回的内容。

以server.js中对book的get请求为例：
```
app.get('/books', function (req, res) {
    fs.readFile(__dirname + "/" + "book.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var books = data['books'];
        res.end(JSON.stringify(books));
    });
});
```
- 这个函数处理来自前端的get操作，读取服务器端的book.json，获取其中'books'字段的所有内容，并将其返回的前端。

由于这个Homework对于后端数据的读取和写入操作，都比较简单，因此整个Node.js只需要大约60行就可以完成所有的功能，也体现了Node.js和Express最基本的一些技术。