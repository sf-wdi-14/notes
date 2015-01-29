#Angular 101

##Learning Objectives
By the end of this lesson you should be able to...

* Approach a new technology with the proper intent
* Compare and contrast Angular to jQuery
* Add angular to your application
* Implement two-way binding
* Setup a controller and use $scope to share data with your view
* Display all your data and add a filter

___

##Cardinal Rules of a New Technology
####Don't psych yourselves out

Typically the people who hear and believe that something is difficult will actually make it more difficult.

####The learning never stops

There is a boundless amount of knowledge. Accept that your understanding has a limit, and set push it to wherever is practical for your needs. Define your needs.

####The reward is proportional to the effort

Struggling and failing until you finally do not is the ONLY way to learn something. "Easy" learning is not as effective as "hard" learning.

####Most do not make it this far

Angular is an exciting milestone, you should be proud! It is something that not all classes get the chance to undertake. It is infinitely better to learn this technology in a group setting.

####A new technology opens doors

You will become more valuable as a developer, be able to join new communities, and build things that were previously impossible.

___

##Angular vs jQuery

###jQuery
* You **declaratively** state how you want to render data on the DOM
	* SQL is similar in that it explicitly declares the instructions for the database to execute
	* Aka "Enter GA turn right, walk 25 steps, turn right, walk 3 steps, turn left, open the door"
	
###Angular

* You **imperatively** state how you want to render data on the DOM
	* Similar to Active Record (or any ORM) which infers the SQL you write
	* Aka "Meet me in classroom 4"

___

##Setup

* Normally include the Angular [CDN](https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular.js) somewhere in your file.
* Instead, for now, we will be using [JSbin](http://jsbin.com/), so let's instead click 'add library' and select 'Angular Stable'.
* That's it! Now we have Angular working in our app!

___

##Directives

* HTML has specific elements for creating set behavior and UI. For example the `<ul>` or `<audio>` tell the browser we want a list or a audio track to be displayed

* Angular directives give us the power to do create custom directives such as `<weather>` or `<login>` by customizing DOM elements and attaching behaviors to them

* We won't learn how to create custom directives until tomorrow, but we should know that we have many present ones angular provides us with.

####Popular Directives
* `ng-repeat`
* `ng-model`
* `ng-blah`



---





d
	
	
	
	
	
	
