#Angular 101

##Learning Objectives
By the end of this lesson you should be able to...

* Approach a new technology with the proper intent
* Compare and contrast Angular to jQuery
* Implement two-way data binding
* Setup a controller and use $scope to share data with your view
* Display all your data and add a filter

___

##Please Know...

###1) It's easy to psych yourselves out
###2) The learning never stops

###3) Slow and Steady wins the race

###4) The reward is proportional to the effort

###5) Most do not make it this far

###6) A new technology opens doors

___

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
##How Angular Fits into What We Know

* Angular is for building **front-end** applications
* It is a framework
* It allows us to dictate both the data's behavior and its presentation together
* Optionally, if you want to persist & share data, Angular must communicate with an API hooked into a database (Rails works well for this)
___

##Simple App

Let's investigate this simple Angular [app](http://jsbin.com/saduxiquju/2/)

####2-way data binding

* The input field updates the ng-model it is registered with
* The each time the ng-model is updated it immediately re-renders a section of the DOM
* In Angular this instantaneous, reactive behavior is known as **2-way data binding**

####Directives

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

##Controllers & Scope

![Controllers & Scope](http://devgirl.org/wp-content/uploads/2013/03/concepts-controller.png)

* Example App...
___

##Now You Try

* ...

___

##Homework

* Complete code school Angular course until level 3

___


	
	
	
	
	
	
