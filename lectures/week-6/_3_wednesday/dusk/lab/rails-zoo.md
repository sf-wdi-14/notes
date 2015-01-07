# Rails Zoo Lab

You have been hired by the San Diego Zoo. They would like an app that catalogues their animals.


**NB:** This app will not persist data nor have a login system, but we will get to both shortly!

##User Stories
The User should be able to...

* Expect RESTful routing
* See an Index of the existing animals on both the root page and `/animals`
	* Animals should have a name, photo, and bio. (For now we will not worry about hosting our own photos; you should link to external photos)
	* Next to each Animal have a link to the edit page & a delete button
* Create a new Animal
	* Page should be accessible via a persistent link in their nav bar
	* The route for this and all other pages should be restful ie `/animals/new`
	* Post to animals#create then redirect to the index page
* Delete an Animal
  * Redirect to the index page


## How to get started

1. Run `rails new RailsZoo -d postgresql` to settup your app using postgresql as the default database
2. Name your databases in config/database.yml and then run `rake db:create`
3. Write your own custom routes, if you need a good reference refer to the [routes guide](http://guides.rubyonrails.org/routing.html#crud-verbs-and-actions) in the Rails Docs. I.e.
		* get '/animals/new', to: 'animals#new'
		* post '/animals', to: 'animals#create'
		* etc.
4. 

Remeber, you can always look back at notes from this afternoon to help you with properly configuring your routing, controllers and views.


## Bonus

1. Add routes and methods to allows Zoos to update an existing animal

2. Include your own custom styling, bootstrap or another CSS framework in your application and style your blog.

3. Include [flash messages](http://guides.rubyonrails.org/action_controller_overview.html#the-flash) to display success and error messages for when an animal is created or deleted



