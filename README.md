# Document of Ad Web Homework 1
------
## Abstract
Homewwork 1利用AngularJS和Node.js技术搭建了一个简易课程主页的Single Page Application(SPA)。这份文档将介绍搭建这个网站所运用到的大部分技术。
- Demo Link: [song-hao.github.io/AdWebHW1](http://song-hao.github.io/AdWebHW1)
- Repo Link: [github.com/song-hao/AdWebHW1](https://github.com/song-hao/AdWebHW1)

## 1. Demo的下载和部署

### 1.1 项目下载
```
$ git clone https://github.com/song-hao/AdWebHW1.git
$ npm install
$ bower install
```
- 项目配置了bower.json和package.json，可以使用 npm 或 [bower](http://bower.io/) 进行包管理。但为了避免部署的麻烦(且Dependencies体积较小)，包的目录"/app/components"并未加入.gitignore内，所以可以不用进行 ``$ npm install`` 或 ``$ bower install``。
- Repo中有两个分支 ``master`` 和 ``gh-pages``，``gh-pages``为纯静态项目，所有后台数据已存入 ``services_local.js`` 中。[Demo](http://song-hao.github.io/AdWebHW1) 即为纯静态项目，因此提交评论和意见功能无法使用。

### 1.2 Node.js server部署
项目（``master``分支）会利用 [Node.js](https://nodejs.org/en/) server对后台json数据进行读写操作。在 ``./server`` 目录下运行以下命令来开启Node.js server:
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
- 在这个例子中我们为``<input>``添加了一个``ng-model``指令。它可以绑定数据到``<input>``，``<select>``，``<textarea>``等元素的输入域中。当用户在``<input>``中输入字符串时，``name`` 变量会获取该字符串，然后在``<h1>``中显示出这个``name``变量中的字符串。因此前端输入、显示和后端变量是双向绑定的。

在Homework 1中有两个地方可以直观的看到双向绑定的效果，分别是:

- [Bookdetail](http://song-hao.github.io/AdWebHW1/index.html#/book/0) 页面：
![](http://pan01.qiniudn.com/adwebhw1/1.png)

- [Contact](http://song-hao.github.io/AdWebHW1/index.html#/contact) 页面：
![](http://pan01.qiniudn.com/adwebhw1/2.png)

### 2.4 Angular Directive
AngularJS 通过被称为“指令(Directive)” 的新属性来扩展 HTML。
AngularJS 通过内置的指令来为应用添加功能。
AngularJS 允许你自定义指令。。除了之前在2.1、2.3中提到的 ``ng-app`` , ``ng-init`` 和 ``ng-model`` 外，AngularJS

#### 2.4.1 ng-repeat
``ng-repeat`` 被用来重复一个HTML元素。例如将其加入 ``<li>`` 标签中，在这个列表会被重复显示。其语法为``<div ng-repeat="(key, value) in myObj"> ... </div>``, Angular会遍历myObj中的所有元素并将它们全部显示，例如下面这个例子：
```html
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script></head>
<body>

    <div ng-app="" ng-init="myObj=['id_1','id_2','id_3']">
        <p>使用 ng-repeat 来循环数组</p>
        <ul>
            <li ng-repeat="id in myObj">
                {{ id }}
            </li>
        </ul>
    </div>
    
</body>
</html>
```
在Homework中
#### 2.4.2 ng-submit
#### 2.4.3 ng-click
#### 2.4.4 ng-show（your first name is required）
#### 2.4.5 ng-disabled (submmit button)
#### 2.4.6 ng-required
#### 2.4.7 ng-selected
#### 2.4.8 ng-form

### 2.5 Angular Filters

## 4. Node.js

### 4.1 Node.js的安装
### 4.2 Express.js的安装
### 4.2 RESTful API

## Conclution
