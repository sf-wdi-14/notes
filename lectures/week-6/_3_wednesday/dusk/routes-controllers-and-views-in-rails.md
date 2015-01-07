#Routes, Controllers & Views in Rails

##Learning Objectives
#####At the end of the lesson you should be able 
* Build custom routes
* Set up restful routes
* Render a view using a controller
* Recognize the purpose of the application.html layout
* Pass data into a view
* Setup and use a form_tag, button_to, and link_to in ERB
* Create and reference a partial
*	Bonus: Use the Asset Pipline to add CSS & JS libraries, such as bootstap, to your Rails project

##Routes
The Rails router recognizes URLs and dispatches them to a controller's action.

```
get to blah
```

##Restful Routes
Resources

##Restful Controller
Will correspond to your routes

by default rails will try to render a view with the same name

how you name and structure your views matters

##Rendering a View
render blah

##The Application.html Layout
This is the layout that encapsulates all your pages.
Things like a nav bar should be added here.

##Passing Data into a View
render :index(data_somewhere_here)

##Action View
Part of the `Action Pack`.
Responcible for dynamically creating aka rendering the view.
*Why do we use ERB?*
We create dynamic views by using ERB. Ruby that will evaluate to HTML.
Note: the difference between <%= %> and <% %>

**Helper Commands**

* [form_tag](http://guides.rubyonrails.org/form_helpers.html#dealing-with-basic-forms)
* [link_to](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to)
* [button_to](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-button_to)

##Partials
<%= render 'menu' %>

##Using Libraries in Rails
Several methods to accomplish this

Linking to the file in your head

|Pros|Cons|
|:-:|---|
|x|Dependent on server|
|x|Cannot use offline|
|x|Messy|

Using a gem

|Pros|Cons|
|:-:|---|
|x|Obscured from you|
|x|Usually unnessecary for JS & CSS Libraries|
	
**Use the Asset Pipline!**

|Pros|Cons|
|:-:|---|
|Quicker page load time|Knowledge of Asset Pipeline|
|Workoffline|x|
|More transparent code organization|x|

*Note: JQuery is already included by default*

Order does matter
Note: Rails *is reading comments* of the .js & .css application files (spooky!!)


