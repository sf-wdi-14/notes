#Angular 101

##Learning Objectives
By the end of this lesson you should be able to...

* Approach a new technology with the proper intent
* Compare and contrast Angular to jQuery
* Implement two-way data binding
* Setup a controller and use $scope to share data with your view
* Display all your data and add a filter

---
##When learning something new...

1) Your perceptions often mislead you: **clear your mind**

2) The learning never stops: **ask questions**

3) Slow and steady wins the race: **don't stress**

4) The reward is proportional to the effort: **keep trying**

5) Most do not make it this far: **congratulate yourselves**

6) A new technology opens doors:  **know your worth**

---

#You don't learn to walk by following rules. You learn by doing, and by falling over.
##-Richard Branson

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


#I am always doing that which I cannot do, in order that I may learn how to do it.
##-Pablo Picasso"


---

##How Angular Fits into What We Know


* Angular is for building **front-end** applications
* It is a **framework**
* It allows us to dictate both the data's **behavior** and its **presentation** together
* To persist & share data, Angular must communicate a database's API

####Angular Components We'll Discuss
* Directives
* Controllers & Scope
* Dependency Injection

---

#Live as if you were to die tomorrow. Learn as if you were to live forever.

##-Mahatma Gandhi


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
#I'm hungry for knowledge. The whole thing is to learn every day, to get brighter and brighter. That's what this world is about.
##-Jay Z
---

##Controllers & Scope
* A controller in Angular is similar to one in Rails; it houses the logic of your app
* For example you could...
	* Get data from an API
	* Define functions
* A new controller also creates a new scope; we write as `$scope`
* `$rootScope` is Angular's global scope outside of a controller
* You can think using `$scope` in Angular controllers like you think about `@` in Rails controllers

---
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
---

##ng-repeat

Here is an example of a very commonly used directive, `ng-repeat`

```
.controller('HomeCtrl', function($scope){
	$scope.users = [
		{
			name: 'Theodore Roosevelt',
			activity: 'hunting'
		},				
		{
			name: 'John Fitzgerald Kennedy'
			activity: 'sailing'
		},
		{
			name: 'Thomas Jefferson',
			activity: 'fishing'
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


* Essentially [Dependency Injection](https://docs.angularjs.org/guide/di) is just passing in arguments to a function, nothing new!
* In this example we are injecting `$scope` into `HomeCtrl`

```
.controller('HomeCtrl', function($scope){
	...
});
```
* This works until the code is minified
* [Minification](https://developers.google.com/speed/docs/insights/MinifyResources) renames JavaScript variables which creates issues for modules trying to reference dependancies
* When writing Angular code that will be minified, we annotate the function with its dependancies, declared as strings

```
.controller('HomeCtrl', ['$scope', function($scope){
	...
}]);
```
* Now, even if the minifier converts `$scope` to variable `a` its **identity is still preserved** in the string 

---
##Filters

* A [filter](https://docs.angularjs.org/guide/filter) formats your data before being displayed to the user
* `{{ 100 | currency }}` formats the number 100 to represent $100.00
* Common filters include:
	* [number](https://docs.angularjs.org/api/ng/filter/number)
	* [date](https://docs.angularjs.org/api/ng/filter/date)
	* [json](https://docs.angularjs.org/api/ng/filter/json)
	* [lowercase](https://docs.angularjs.org/api/ng/filter/lowercase)
	* [uppercase](https://docs.angularjs.org/api/ng/filter/uppercase)
	* [limitTo](https://docs.angularjs.org/api/ng/filter/limitTo)
	* [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)
	
---
##Now You Try
* Alphabetize McDonald's farm animals using the filter `orderBy`
	* Nugget the Chicken
	* Bell the Cow
	* Latin the Pig
	
---

##For Tomorrow

* Watch Code School's online [Angular course](https://www.codeschool.com/courses/shaping-up-with-angular-js) through level 3

___


	
	
	
	
	
	
