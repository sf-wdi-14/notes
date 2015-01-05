#Routes, Controllers & Views in Rails

##Learning Objectives
#####At the end of the lesson you should be able 
* ####Build custom routes
* ####Set up restful routes
* ####Render a view using a controller
* ####Recognize the purpose of the application.html layout
* ####Pass data into a view
* ####Setup and use a form_tag, button_to, and link_to in ERB
* ####Create and reference a partial
*	####Use CSS & JS libraries, such as bootstap, in a Rails project

##Custom Routes

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
We create dynamic views by using ERB. Ruby that will evaluate to HTML.

**Helper Commands**
[form_tag]()
[link_to]()
[button_to]()

