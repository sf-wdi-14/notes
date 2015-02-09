#Ionic

##Learning Objectives
By the end of this lesson, you should be able to...

* Articulate what is Ionic and when it is useful
* Navigate the file structure of Ionic
* Setup custom routes, controllers, and views for Ionic

---

##Prerequisites

You must be comfortable with these concepts in **Angular** to successfully use Ionic

* Dependency Injection
* Controllers
* Directives (built in + custom)
* Services (and/or factories, providers)
* Routing

---

##Setup
If you want to participate in coding along please make sure you install the necessary technologies.

#####Install Cordova & Ionic
```
sudo npm install -g cordova ionic
```

---

##What is Ionic
* An HTML5 native app development framework that helps you build native-feeling mobile apps all with web technologies like HTML, CSS, and Javascript
* Built on top of [Cordova](http://cordova.apache.org/).
* Dependent on Angular as an MVC
* Back-end agnostic

---

##Building Our First App
Ionic has a very power CLI (command line interface) that can be used to create, build, test, and deploy your ionic app.

Let's start by creating an app...

```
ionic start myApp blank
```
`myApp` can be any name of our app, and `blank`is a preset configuration we can start with. Other preset options include `tabs` or `sidemenu`. In this example, we'll be starting from scratch.


```
cd myApp
ionic serve
```

---

##File Structure

All the files we will edit will exist in the `www` directory. Here's an outline of what it contains.

* `index.html` is the wrapper file for all our html templates, it yields to those templates with the `ion-nav-view` directive
* `js` directory houses our Angular app
* `templates` directory houses our html pages
* `css` directory allows for custom styling
* `img` directory houses any images we wish to use

---

##Index.html
Let's add some code into the `<body>` of our `index.html` file so that we can render templates and display a nav bar.

```

	<!-- Yield to templates -->
    <ion-nav-view></ion-nav-view>

	<!-- Nav bar -->
    <ion-tabs class="tabs-icon-top tabs-color-active-positive"> 
      <ion-tab title="Feed" icon-off="ion-ios7-pulse" icon-on="ion-ios7-pulse" href="#/feed">
        <ion-nav-view name="feed"></ion-nav-view>
      </ion-tab>
      <ion-tab title="Post" icon-off="ion-ios7-compose" icon-on="ion-ios7-compose" href="#/post">
        <ion-nav-view name="post"></ion-nav-view>
      </ion-tab>
    </ion-tabs>
    
```

---

##Routing
`js/app.js` will contain our routing logic

Let's add a new route `/feed` that inherits logic from the `PostsCtrl` and goes to a template called `feed.html` 

```
.config(function($stateProvider, $urlRouterProvider) {
	
  //Feed route
  $stateProvider.state('feed', {
    url: '/feed',
    templateUrl: 'templates/feed.html',
    controller: 'PostsCtrl'
  });

  //Catch-all route
  $urlRouterProvider.otherwise('/feed');
});
```

---

##Templates
Create a directory inside `www` called `templates` and inside create your file `feed.html` which should contain some basic html for now.

```
<ion-view title="Feed">  
  <ion-content>
    <div class="card">
      <div class="item item-text-wrap">
        I'm a card!
      </div>
    </div>
    <div class="card">
      <div class="item item-text-wrap">
        Oh hey, me 2.
      </div>
    </div>
  </ion-content>     
</ion-view>
```

---

##Controllers
Let's create a `js/controllers.js` file to house our `PostsCtrl`.

```
angular.module('myControllers', [])

.controller('PostsCtrl', ["$scope", function($scope) {
  $scope.posts = [];
}]);
```

We must now load this new file into our `index.html`


	<script src='js/controllers.js'></script>
	
And require it in our Angular app, modifying our first line in app.js to include `myControllers`

```
angular.module('starter', ['ionic', 'myControllers'])
```

---

##$Scope
Let's use our template to render data from our controller. First let's pass our $scope some posts.

```
  $scope.posts = [{
  	title: "Aww, yeah we got a controller setup!"
  },
  {
  	title: "Testing testing testing 1... 2... 3..."
  },
  {
  	title: "Whaaat!"
  }];
```

Next let's use a `ng-repeat` to render each post as a card in our `feed.html`.

```
<ion-view title="Feed">  
  <ion-content>
    <ion-list>
      <ion-item class="card" ng-repeat="post in posts">
        <div class="item item-text-wrap">
          {{post.title}}
        </div>
      </ion-item>
    </ion-list>
  </ion-content>     
</ion-view>
```
---

![Fin](http://media3.giphy.com/media/jYAGkoghdmD9S/giphy.gif)

---

##Lab

Expand on this Ionic App, more details [here](https://github.com/sf-wdi-14/notes/blob/master/assignments%2Fweek-11%2Fionic-lab.md).

---

##iOS Emulation (optional)

Instead of viewing your app in a browser, you can view it in an iOS emulator, that replicates how an iPhone will render your application. To do this...

Get an iOS emulator.

```
npm install -g ios-sim
```

Ensure Xcode is installed.

```
xcode-select --install #or you can download from the app store
```

Build your file into an iOS app.

```
ionic platform add ios		#adds ios as a platform (android works too)
ionic build ios				#compiles to Objective C
ionic emulate ios 			#runs your app in an emulator
```

*Note: if you get an error when emulating...*
Try resetting the contents and settings in the Simulator: `iOS Simulator -> Reset Contents and Settings`

---

##Further Reading
* [Where does the Ionic framework fit in?](http://ionicframework.com/blog/where-does-the-ionic-framework-fit-in/)
* [Styling documentation](http://ionicframework.com/docs/components/#header)
* [Available Ionicons](http://ionicons.com/)



