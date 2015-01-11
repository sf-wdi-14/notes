#Auth in Rails

##Learning Objectives
By the end of today you should be able to...

* Signup a user
* Securely store their password
* Login a user
* Logout a user

##Terminology

####Sesssion

####Password Hashing & Digest

####Authorization

####Authentication



##Step 1 — App settup

* Start a new rails app with `rails new LearnAuth`
* Uncomment out the `bcrypt-ruby` gem in your `Gemfile` and run `bundle`
* Generate a user model with three attributes (username, password, password_digest)
	* Note, if we don't specify a datatype it defaults to a string

	```
rails g model User username password_digest
	```
	
* Create your database and migrate with `rake db:create db:migrate`
* Create a validation that ensures a username is present
* Finally create a `welcome#home` controller action that displays a welcome message (note this requires a welcome controller and associated view folder)

##Step 2 — Securly store passwords

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

* Add a validation to the user model that ensures the password is between 6 and 40 characters. `validates :password, length: {within: 6..40}`

##Step 3 — Test your validations

* Enter the `rails console`
* Make sure the validation are working correctly and the user is not saved to the database in these three conditions when the user:
	* has no username
	* has password & password_confirmation fields that do not match.
	* has a password that is less than 6 characters
* Once you've ensured your validations are working properly, save a valid user to the database.

	```
	user = User.create(username: 'batman', password: 'nanana', password_confirmation: 'nanana')
	```

##Step 4 — Signup a new user: controller & routes

* Generate a users controller with the methods new & create. Run: `rails g controller users new create`
* Modify your routes.rb file for a more restful settup. Replace the generated routes with:
	```
		resources :users, only: [:new, :create] 
	```
* Run `rake routes` to ensure your new routes are properly registered.

##Step 5 - Signup a new user: forms, login, and error msgs

* Create a `form_for` a new user that sends a `post` request to your `user#create` action.

	```
	<%= form_for @user, url: {action: "create"}, html: {class: "nifty_form"} do |f| %>
	
  		<%= f.label :username %><br>
  		<%= f.text_field :username %><br>
  		
  		<%= f.label :password %><br>
  		<%= f.password_field :password %><br>
  		
  		<%= f.label :password_confirmation %>
  		<%= f.password_field :password_confirmation %><br>
  		
  		<%= f.submit "Signup" %>
  		
	<% end %>
	```
* Test everything is working properly by throwing `byebug` into your `user#create`, posting the form, and inspecting the params.
* Delete your generated view: `users/create.html.erb` as it is unnecessary.
* Modify your create action so that if the user can be saved it redirects home, otherwise it will render the :new page again. Your controller will look like:

	```
class UsersController < ApplicationController
  	def new
    	@user = User.new
  	end

  	def create
   		@user = User.new(user_params)
    	if @user.save
      		redirect_to root_path
	    else #saving the user is unsuccessful
	        #populate the flash hash with the errors present in active record
	        flash[:error] = @user.errors.full_messages.to_sentence 
  	    	render :new
    	end
	end

  	private
  	def user_params
    	params.require(:user).permit(:username, :password, :password_confirmation)
  	end
end
	```
* Display flash messages to your users by iterating through the flash hash in your view. Do this somewhere in your `users/new.html.erb`

	```
<% flash.each do |key, value| %>
 	 <%= content_tag :div, value, class: "flash #{key}" %>
<% end %>
	```
	
* Style the error messages in your `users.scss`

	```
	.flash.error {
  		color: red;
  		font-weight: 900;
	}
	``` 

##Step 6 - Login as a user

* Create an `sessions_controller.rb` with the actions `new`, `create`, and `destroy`
* Link to these actions to specific routes.

	```
get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
	```
* Get your `session#new` to display a `form_tag` allowing the user to login

	```
	<%= form_tag :action => :create do %>

  		<%= label_tag :username, 'Username: ' %><br>
  		<%= text_field_tag :username %><br>

  		<%= label_tag :password, 'Password: ' %><br>
  		<%= password_field_tag :password %><br>

  		<%= submit_tag 'Login' %>
  	
	<% end %>
	
	```
	
* Using the `params` object, our `sessions#create` should find the user that a new session is trying to be created for and then try to authenticate them based on the password that has provided. In the case that there is not match provide the user with a flash message.

	```
def create
    user = User.find_by_username(params[:username])
    if user.authenticate(params[:password])
      session[:user_id] = user.id
    else
      flash[:error] = "Invalid username & password combination"
      render :new
    end
  end
	```



##Lab

* Finish the in-class exercise if you didn't get a chance
* Add a login system to one of your existing projects




##Ref

[Auth](https://github.com/wdi-sf-fall/notes/tree/master/week_07_rails_continued/day_02_associations_and_auth/dusk_auth)

[BCrypt](https://gist.github.com/thebucknerlife/10090014)