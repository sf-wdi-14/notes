## More Rails

###Learning Objetives
By the end of this lecture you should be able to...

* Build custom routes
* Set up restful routes
* Render a view using a controller
* Pass data into a view


##Routes
The Rails router recognizes URLs and dispatches them to a controller's action.

```
  # custom route
  get '/path' => 'controller#action'
  # create restful routes for you
  resources :puppies

```

##Controllers

A controller by default renders a view with it's action name in a folder with its controller name. This example will look for a welcome/index.html.erb file in the views folder.

```
 class WelcomeController < ApplicationController
   def index
   end
 end

```

Pass data into a controller using instance methods

```
  def myController
    @instance_variable = "Hello"
  end
```

In the view

```
  <h1><%= @instance_variable %> World</h1>
```

##Action View
Part of the `Action Pack`.
Responsible for dynamically creating aka rendering the view.
*Why do we use ERB?*
We create dynamic views by using ERB. Ruby that will evaluate to HTML.
Note: the difference between `<%= %>` and `<% %>`. The first **prints** the expression, the latter simply **evaluates** it.
