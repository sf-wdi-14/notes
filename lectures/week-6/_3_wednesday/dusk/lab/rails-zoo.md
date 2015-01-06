# Rails Zoo Lab

You have been hired by the San Diego Zoo. They would like an app that catelogues their animals.


**NB:** This app will not persist data nor have a login system, but we will get to both shortly!

##User Stories
The User should be able to...

* See an Index of the existing animals
	* Animals should have a name, photo, and bio. On this page we only want to display the photo & name.
	* Next to each Animal have a link to the edit page & a delete button
* See an animal's show page.
	* When you click on the image of an animal you should be taken to its show page that displays its name, image, and also a bio.
* Create an Animal
	* Place a link to this page in a persistent nav bar
	* The route for this and all other pages should be restful ie `/animals/new`
	* Redirect to the index page
* Edit an Animal
	* There should be a seperate page for editing the animal
	* Redirect to the index page
* Delete an Animal
  * Redirect to the index page


## How to get started

1. Generate your models and migrations and begin to model your relationships
2. Run your migrations and make sure you have the correct foreign key setup
3. For each model, make sure everything is working in `rails console` before you start building your routes, controllers and views.
4. Once you have tested your models in Rails console, create the routes required to create and show data with your models.
	* Write your own custom routes, if you need a good reference refer to the routes guide on the Rails Docs. I.e.
		* `get '/zoos/:id', to: 'zoos#show'`
		* `post '/zoos/:id', to: 'zoos#update'`
		* etc.

Remeber, you can always look back at notes from this afternoon to help you with properly configuring your routing, controllers and views.



## Bonus

1. Add routes and methods to allows Zoos to update an exiting Animal and destroy an Animal

2. Include your own custom styling, bootstrap or another CSS framework in your application and style your blog.

3. Include flash messages to display success and error messages for when a Zoo account is being authorized or authenticated



