#Routes, Controllers & Views in Rails

##Learning Objectives
#####At the end of the lesson you should be able 
* Recognize the purpose of the application.html layout
* Setup and use helper commands in ERB
* Create and reference a partial
* Use the Asset Pipline to add CSS & JS libraries, such as bootstap, to your Rails project

##The Application.html Layout
This is the layout that encapsulates all your pages.
Things like a nav bar should be added here.
Is by default the wrapper for all your pages.

##Action View
Part of the `Action Pack`.
Responsible for dynamically creating aka rendering the view.
*Why do we use ERB?*
We create dynamic views by using ERB. Ruby that will evaluate to HTML.
Note: the difference between <%= %> and <% %>

**Helper Commands**

* [form_tag](http://guides.rubyonrails.org/form_helpers.html#dealing-with-basic-forms)
* [link_to](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to)
* [button_to](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-button_to)
* [image_tag](http://api.rubyonrails.org/classes/ActionView/Helpers/AssetTagHelper.html#method-i-image_tag)

##Partials
[Partials](http://guides.rubyonrails.org/layouts_and_rendering.html#using-partials) are a tool for keeping your code DRY. They help seperate your HTML our into chunks that you can reuse across your app. 
`<%= render 'menu' %>`

##Using Libraries in Rails
Several methods to accomplish this

#####Linking to the file in your head

|Pros|Cons|
|:-:|---|
|x|Dependent on server|
|x|Cannot use offline|
|x|Messy|

#####Using a gem

|Pros|Cons|
|:-:|---|
|x|Obscured from you|
|x|Usually unnessecary for JS & CSS Libraries|
	
#####Using the asset pipeline (**best solution**)

|Pros|Cons|
|:-:|---|
|Quicker page load time|Knowledge of Asset Pipeline|
|Workoffline|x|
|More transparent code organization|x|

*Note: JQuery is already included by default*

Order does matter
Note: Rails *is reading comments* of the .js & .css application files (spooky!!)

##Vendor Assets

The asset-pipline is now managed by the [sprocket-rails](https://github.com/rails/sprockets-rails) gem.

