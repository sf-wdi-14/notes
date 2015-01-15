#TDD Lab

##Objective

Build a Library App that has the models `book` and `author` so that an author has many books & a book belongs to an author.

##Process

Find a parter to pair with. Otherwise you can play both roles. **Person1** should write a test and then hand the computer to **Person2**. **Person2** then writes the code to pass the test and then writes the next test and hands the computer back. **Person1** writes the code to pass the test and writes the next test. Do this ad infinitum until you have a Library app that meets the specs.

- Use a seed file to populate and normalize your database.
- Adhere to the pricipal of Red, Green, Refactor
	- Write & fail the tests
	- Write the code to pass them
	- Refactor them (maybe with a before block, etc)
- Have tests for your:
	- Models
	- Controllers
	- & Routes

##App Specs

####Models

- An author has
	- a name (validates presence)
	- a city
	- many books
	
- A book has
	- a title (validates presence)
	- a year



####Routes, Controllers, & Views

- The `authors#index` should
	- display all the authors
	- be the accessible by either the path `/` or `/authors`
- The `authors#show` should
	- Show a list of the books that they've written

##Hint

- If you want to test associations, which we didn't explicitely cover today, refer to these [active record matchers](https://github.com/thoughtbot/shoulda-matchers#activerecord-matchers)
	
##For Fun

- Use the gem [simplecov](https://github.com/colszowka/simplecov) to check & monitor your test coverage!

##Bonus

- The `authors#show` should
	- link to a nested `books#new` page
	- have a delete button for each book
- The nested `books#new` should
	- post to the `books#create` and then redirect back to that author's `author#show`
