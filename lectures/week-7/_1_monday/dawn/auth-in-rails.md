#Auth in Rails

##Learning Objectives
By the end of today you should be able to...

* 

##Terminology

####Sesssion

####Password Hashing & Digest



##Step 1 — Settup

* Start a new rails app with `rails new LearnAuth`
* Uncomment out the `bcrypt-ruby` gem in your `Gemfile` and run `bundle`
* Generate a user model with three attributes (username, password, password_digest)
	* Note, if we don't specify a datatype it defaults to a string

	```
rails g model User username password_digest
	```
	
* Create your database and migrate with `rake db:create db:migrate`
* Create a validation that ensures a username is present

##Step 2 — Password Security

* Add `has_secure_password` to your user model.

	```
class User < ActiveRecord::Base
    #very strong password encryption
    has_secure_password 
end
	```
	
* What does `has_secure_password` do?
	* Creates virtual `password` & `password_confirmation` attributes on your model, which are not stored in the database (that would be a very insecure).
	* Validates that password & password_confirmation attributes match.
	* Uses bcrypt to hash the password and store it in the model's `password_digest` attribute


##Ref

[Auth](https://github.com/wdi-sf-fall/notes/tree/master/week_07_rails_continued/day_02_associations_and_auth/dusk_auth)

[BCrypt](https://gist.github.com/thebucknerlife/10090014)