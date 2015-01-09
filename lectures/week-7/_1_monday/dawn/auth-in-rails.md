#Auth in Rails

##Learning Objectives
By the end of today you should be able to...

* 

##Terminology

####Sesssion

####Password Digest



##Step 1 — Settup

* Start a new rails app with `rails new LearnAuth`
* Uncomment out the `bcrypt-ruby` gem in your `Gemfile`
* Generate a user model with three attributes (username, password, password_digest)

	```
rails g model User username password password_digest
	```
	
* Create your database and migrate with `rake db:create db:migrate`
* Create a validation that ensures a username is present

##Step 2 — Password Security

* Add `has_secure_password` to your user model.

* Note: this method is part of the [bcrypt](https://rubygems.org/gems/bcrypt-ruby) gem.

	```
class User < ActiveRecord::Base
	#very strong password encryption
  has_secure_password 
end
	```
	
* What does this line of code do?
	* Creates a password confirmation model attribute
	* Ensures presence of both password & password_confirmation
	* 


##Ref

[Auth](https://github.com/wdi-sf-fall/notes/tree/master/week_07_rails_continued/day_02_associations_and_auth/dusk_auth)