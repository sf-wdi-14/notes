#Angular 101

##Learning Objectives
By the end of this lesson you should be able to...

* Approach a new technology with the proper intent
* Compare and contrast Angular to jQuery
* Implement two-way data binding
* Setup a controller and use $scope to share data with your view
* Display all your data and add a filter

___

##When learning something new...

1) Your perceptions often mislead you, so **clear your mind**

2) The learning never stops, so always **ask questions**

3) Slow and steady wins the race, so **don't stress**

4) The reward is proportional to the effort, so **keep trying**

5) Most do not make it this far, so **congratulate yourselves**

6) A new technology opens doors, so **know your worth**

---
```
You don't learn to walk by following rules. You learn by doing, and by falling over.
-Richard Branson
```
---

##Angular vs jQuery


###jQuery
* Based on **declarative** statements to render dynamic data on the DOM
	* SQL is similar in that it explicitly declares exact instructions for the database to execute
	* Declarative statement: "Enter GA turn right, walk 25 steps, turn right, walk 3 steps, turn left, open the door"
* It heavily enforces **configuration**
	* Just like Express or Sinatra
	
###Angular

* Based on **imperative** statements to render dynamic data on the DOM
	* Think of Active Record (or any ORM) that can infer what SQL to write for you
	* Imperative statement: "Meet me in classroom 4"
* It heavily enforces **convention**
	* Just like Rails

---
```
I am always doing that which I cannot do, in order that I may learn how to do it.
-Pablo Picasso"
```
---

##How Angular Fits into What We Know


* Angular is for building **front-end** applications
* It is a framework
* It allows us to dictate both the data's behavior and its presentation together
* Optionally, if you want to persist & share data, Angular must communicate with an API hooked into a database (Rails works well for this)

####Basic Angular Components
* Directives
* Controllers
* Scopes
* Dependency Injection
* Services (we will discuss this in next lesson)

___
```
Live as if you were to die tomorrow. Learn as if you were to live forever.
-Mahatma Gandhi
```
---

##Simple App


Let's investigate this simple Angular [app](http://jsbin.com/saduxiquju/2/)

* The input field updates the ng-model it is registered with
* The each time the ng-model is updated it immediately re-renders a section of the DOM
* In Angular this instantaneous, reactive behavior is known as **2-Way Data Binding**

####DIRECTIVES

* A directive is a marker on a HTML tag that tells Angular to run or reference it's internal JavaScript code, i.e. `ng-model`
* There are many preset ones which we will explore together
* Additionally you can create custom ones, which we will cover in the next lesson

---

##Now You Try


Head to [JSbin](http://jsbin.com/) and replicate this app using:

* ng-app
* ng-model=“yourName”
* {{ yourName }}

*Don't forget to include angular in your `<head>`*

Definitely refer to the [Angular docs](https://docs.angularjs.org/guide) as much as possible.

---

```
I'm hungry for knowledge. The whole thing is to learn every day, to get brighter and brighter. That's what this world is about.
-Jay Z
```
---

##Controllers & Scope
* A controller in Angular is similar to one in Rails; it houses the logic of your app
* For example you could...
	* Get data from an API
	* Define functions
* A new controller also creates a new scope; we write as `$scope`
* `$rootScope` is Angular's global scope outside of a controller
* You can think using `$scope` in Angular controllers like you think about `@` in Rails controllers

___
##Controllers & Scope Visual


![Controllers & Scope](http://devgirl.org/wp-content/uploads/2013/03/concepts-controller.png)

---

##Let's Create a Controller

* I want to create a controller that has a default value name
* First we need an app that we can house in a [module](https://docs.angularjs.org/guide/module); modules are the most basic container for code

```
angular.module("myApp", [])
```
* Now controllers can be chained on to your app object

```
.controller('HomeCtrl', function($scope){
	$scope.user = {
		name: 'Theodore'
	};
	$scope.speech = {
		title: 'The Way of the Bull Moose'
	};
});
``` 
___

##ng-repeat

Here is an example of a very commonly used directive, `ng-repeat`

```
.controller('HomeCtrl', function($scope){
	$scope.users = [
		{
			name: 'Theodore Roosevelt',
			activity: 'hiking'
		},				
		{
			name: 'John Fitzgerald Kennedy'
			activity: 'reading'
		},
		{
			name: 'Thomas Jefferson',
			activity: 'teaching'
		}
	];
});
```

```
<body>
  <div ng-controller="HomeCtrl">
    <ul ng-repeat="president in presidents">
      <li>Vote for: {{president.name}}</li>
    </ul>
  </div>
</body>
```

---

##Dependency Injection

[Dependency Injection](https://docs.angularjs.org/guide/di) is one of the strangest sides of Angular... Hopefully if you understand why we do this, it will make more sense.

* At it's essence all it is, is passing a function arguments
* 



---

##Homework

* Complete code school Angular course until level 3

___


	
	
	
	
	
	
