# Setting up and using devise

## installing devise

* add to gemfile
* bundle install
* rails generate devise:install
* follow directions that are printed by the generator
* commit!

## adding a user model

* rails generate devise user
* rake routes
* rake db:migrate
* Run server, test http://localhost:3000/users/sign_up
* commit!

## forcing authentication for controllers

* Add before_action :authenticate_user! to controllers
* commit!

## add links and show helpers

* Add links
* demonstrate helpers: current_user, user_signed_in?, user_session
* commit!

# Bonus

## adding a field to User

* creating a migration for "username" (rails generate migration AddUsernameToUser username:string)
* rake db:migrate
* rails generate devise:views
* add it to the view `app/views/devise/registrations/new.html.erb`
* This won't work without setting up the strong parameters.
* we have to "extend" devise to make this work. This is the "easy way".

```ruby
class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end
end
```